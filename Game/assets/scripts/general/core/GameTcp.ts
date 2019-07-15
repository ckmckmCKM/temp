
import { FrameMsg } from './frame';

const {ccclass, property} = cc._decorator;

@ccclass
class GameTcp extends cc.Component{
    heartState:boolean;
    heartTime:number;
    heartNumber:number;
    ws:WebSocket;

    send<T>(mCmd:number, sCmd:number, obj:{finish():T;} | null){
        if(this.ws && this.ws.readyState === WebSocket.OPEN){
            let frame = FrameMsg.create({mainCmd:mCmd,subCmd:sCmd});
            if(obj){
                frame.buff = <any>obj.finish();
            }
            this.ws.send(FrameMsg.encode(frame).finish());
        }
    }

    connect(host:any,port:number,token?:any){
        var inst = this;
        this.heartTime = 0;
        this.heartState = false;
        this.ws = new WebSocket("ws://"+host+":"+port+"?token=123");
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = function(event){
            inst.heartState = true;
            playerMng.loginTest();
            inst.schedule(function(dt:number){
                inst.update(dt);
            },1);
        };
        this.ws.onmessage = function(event){

            inst.heartState = true;
            let msg = FrameMsg.decode(new Uint8Array(event.data));
            if(msg.mainCmd === 0){
                if(msg.subCmd === 1){
                    let frame = FrameMsg.create({mainCmd:0,subCmd:2})
                    inst.ws.send(FrameMsg.encode(frame).finish());
                }
            }else if(msg.mainCmd === 1){
                cc.Canvas.instance.node.emit("FrameMsg",msg.subCmd,msg.buff);
            }else if(msg.mainCmd === 2){
                cc.log("cmd :",msg.mainCmd,msg.subCmd);
                cc.Canvas.instance.node.emit("GameMsg",msg.subCmd,msg.buff);
            }
        };
        this.ws.onerror = function(event){
            cc.log(event);
            if(inst.ws) inst.reConnect();
        };
        this.ws.onclose = function(event){
            cc.log("game server close....:", event, event.reason,event.code);
            inst.reConnect();
        };
        setTimeout(function(){
            if(inst.ws && inst.ws.readyState !== WebSocket.OPEN){
                cc.log("tcp timeout...");
                inst.reConnect();
            }
        },5000);
    }

    disConnect(){
        this.unscheduleAllCallbacks();
        if(this.ws && this.ws.readyState === WebSocket.OPEN){
            this.ws.close();
        }
        this.ws = null;
    }

    reConnect(){
        this.disConnect();
    }

    update(dt:number){
        if (this.ws && this.ws.readyState === WebSocket.OPEN){
            this.heartTime += dt;
            if(this.heartTime > 5){
                this.heartTime = 0;
                if(this.heartState){
                    this.heartState = false;
                    this.heartNumber = 0;
                }else{
                    this.heartNumber = this.heartNumber + 1;
                    if(this.heartNumber > 3){
                        cc.log("心跳超时");
                        this.reConnect();
                    }else{
                        let frame = FrameMsg.create({mainCmd:0,subCmd:1})
                        this.ws.send(FrameMsg.encode(frame).finish());
                    }
                }
            }
        }
    }
}

window.gameTcp = new GameTcp();