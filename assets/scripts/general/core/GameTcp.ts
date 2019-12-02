import { PbFrame } from './frame';
import { LReuseQueue } from '../support/Lqueue' 
const {ccclass, property} = cc._decorator;
@ccclass
class GameTcp extends cc.Component{
    heartState:boolean;
    heartTime:number;
    heartNumber:number;
    timeoutHandle:number;
    reconnectTimes:number = 0;
    ws:WebSocket;
    queue:LReuseQueue = new LReuseQueue(50);

    send<T>(mCmd:number, sCmd:number, obj:{finish():T;} | null){
        if(this.isConnect()){
            let frame = PbFrame.FrameMsg.create({mainCmd:mCmd,subCmd:sCmd,Time:new Date().getTime()*0.001});
            if(obj){
                frame.buff = <any>obj.finish();
            }
            this.ws.send(PbFrame.FrameMsg.encode(frame).finish());
        }
    }

    isConnect(){
        if(this.ws && this.ws.readyState === WebSocket.OPEN){
            return true;
        }
        return false;
    }

    connect(host:any,port:number,token:string){
        if(this.isConnect()) return;
        this.disConnect();
        var inst = this;
        this.heartState = false;
        this.ws = new WebSocket("ws://"+host+":"+port+"/ws?token="+token);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = function(event){
            inst.reconnectTimes = 0;
            inst.heartState = true;
            inst.heartTime = new Date().getTime();
            inst.schedule(function(dt:number){
                inst.update(dt);
            },0.2);
        };
        this.ws.onmessage = function(event){
            inst.heartState = true;
            let msg = PbFrame.FrameMsg.decode(new Uint8Array(event.data));
            inst.queue.pushBack(msg);
        };
        this.ws.onerror = function(event){
            inst.disConnect();
            if(window.confirm("网络连接错误")){
                playerMng.returnToHall();
            }
        };
        this.ws.onclose = function(event){
            inst.disConnect();
            if(window.confirm("服务器关闭")){
                playerMng.returnToHall();
            }
        };
        this.timeoutHandle = setTimeout(function(){
            if(inst.ws && inst.ws.readyState !== WebSocket.OPEN){
                if(window.confirm != null){
                    if(window.confirm("连接超时,请检查网络后重试")){
                        playerMng.connect();
                    }
                }
            }
        },10000);
    }

    disConnect(){
        clearTimeout(this.timeoutHandle);
        this.unscheduleAllCallbacks();
        if(this.ws){
            this.ws.onclose = null;
            this.ws.onerror = null;
            this.ws.onmessage = null;
            this.ws.close();
        }
        this.ws = null;
        this.queue.clear();
    }

    reConnect(){
        this.disConnect();
        if(++this.reconnectTimes>5){
            playerMng.returnToHall();
        }else if(this.reconnectTimes==1){
            playerMng.connect();
        }else if(window.confirm != null){
            if(window.confirm("连接超时,请检查网络后重试")){
                playerMng.connect();
            }
        }
    }

    update(dt:number){
        if (!this.isConnect()) return;
        let time = new Date().getTime();
        if(time-this.heartTime > 50000){
            this.reConnect();
        }else if(time-this.heartTime > 5000){
            this.heartTime = time;
            if(this.heartState){
                this.heartState = false;
                this.heartNumber = 0;
            }else{
                this.heartNumber = this.heartNumber + 1;
                if(this.heartNumber > 3){
                    this.reConnect();
                }else{
                    gameTcp.send(0,1);
                }
            }
        }
        for(var i=0; i<60; i++){
            let msg = this.queue.popFront();
            if(msg === null) return;
            if(msg.mainCmd === 0){
                if(msg.subCmd === 1){
                    gameTcp.send(0,2);
                }
            }else if(msg.mainCmd === 1){
                cc.Canvas.instance.node.emit("FrameMsg",msg.subCmd,msg.buff);
            }else if(msg.mainCmd === 2){
                let time2 = new Date().getTime();
                cc.Canvas.instance.node.emit("GameMsg",msg.subCmd,msg.buff);
                let wastTime = new Date().getTime()-time2;
                if(wastTime>19){
                    console.log("消息处理时间有点长:",wastTime,"ms,消息:",msg.subCmd);
                }
            }
        }
    }
}

window.gameTcp = new GameTcp();