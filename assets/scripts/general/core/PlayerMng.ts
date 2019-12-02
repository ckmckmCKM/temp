import 'Long'
import 'Lqueue'
import 'LTools'
import 'GameTcp'
import {PbFrame} from './frame';

class PlayerMng
{
    userId:number;     //玩家id
    head:string;     //头像url
    gold:number;        //金币
    rankNum:number;     //排行榜排名
    nickName:string;   //昵称
    sign:string;        //签名
    token:string;       //账号
    uuid:string;        //uuid
    vipLevel:number;    //vip等级
    version:string;     //版本号
    sex:number;         //性别
    address:string;     //地理位置
    roomCfgs:any;       //房间列表
    isMatched:boolean;  

    constructor(){
        this.uuid = localStorage.getItem("uuid");
        if (this.uuid === null){
            let d = new Date().getTime();
            this.uuid = new DeviceUUID().get(d);
            localStorage.setItem("uuid",this.uuid);
        }
    }

    connect(){
        /** 以下代码是打包使用 */
        let url = window.location.search;
        let host = url.match(/ip=([^&]+)/)[1].split(":");
        gameTcp.connect(host[0],Number(host[1]),this.uuid);
        /** 以下代码是开发使用 */
        // gameTcp.connect("192.168.0.174",6037,this.uuid);
    }
    
    //获得配置消息
    getCfgInfo(buff){
        this.isMatched = false;
        let msg = PbFrame.S2CConfig.decode(buff);
        this.userId = msg.userId;
        this.head = msg.head;
        this.gold = msg.gold;
        this.nickName = msg.nickName;
        this.sign = msg.sign;
        this.vipLevel = msg.vipLevel;
        if(this.vipLevel>10) this.vipLevel = 1;
        this.version = msg.version;
        this.sex = msg.sex;
        // this.address = msg.address;
        this.address = "银泰in99";
        this.roomCfgs = msg.Configs;
        cc.Canvas.instance.node.emit("showRoomList",msg.Configs);
        let loading = document.getElementById('load-box');
        if(loading) loading.style.display = 'none';
    }
    // 当没匹配，要返回房间列表时调用
    resumeRoomList(){
        cc.Canvas.instance.node.emit("showRoomList",this.roomCfgs);
    }
    //自动匹配
    autoMatch(roomId){
        if(this.isMatched) return;
        this.isMatched = true;
        let msg = PbFrame.C2SFMatch.create({RoomId: roomId});
        gameTcp.send(1,PbFrame.MSGKIND.MATCH,PbFrame.C2SFMatch.encode(msg));
    }
    //匹配成功
    playerEnter(buff){
        let msg = PbFrame.S2CEnter.decode(buff);
        if(msg.userId === this.userId) this.isMatched = false;
        cc.Canvas.instance.node.emit("setDownSuccess",msg);
    }
    //发送游戏准备
    gameReady(){
        gameTcp.send(1,PbFrame.MSGKIND.READY);
    }
    //游戏准备成功
    readySuccess(buff){
        let msg = PbFrame.S2CReady.decode(buff);
        cc.Canvas.instance.node.emit("readySuccess",msg);
    }
    //请求离开
    reqGameLeave(){
        gameTcp.send(1,PbFrame.MSGKIND.LEAVE);
    }
    //玩家离开
    playerLeave(buff){
        let msg = PbFrame.S2CLeave.decode(buff);
        cc.Canvas.instance.node.emit("playerLeave",msg);
    }
    //返回到大厅
    returnToHall(){
        window.location.href = "http://192.168.0.46:5288/hall";
    }
    //游戏错误
    gameError(buff){
        this.isMatched = false;
        let msg = PbFrame.S2CGeneralError.decode(buff);
        if(msg.eType === 0){
            cc.Canvas.instance.node.emit("marquee", msg.descript);
        }else if(msg.eType === 1){
            if(window.confirm != null){
                if(window.confirm(msg.descript)){
                    this.returnToHall();
                }
            }
        }else{
            cc.Canvas.instance.node.emit("gameError",msg);
        }
    }
    //奖金池数据
    updateHandsel(buff){
        let msg = PbFrame.S2CHandsel.decode(buff);
        for(var i=0; i<msg.Handsels.length; i++){
            let info = msg.Handsels[i];
            cc.log("roomid:",info.roomid);
            cc.log("curr:",info.curr);
        }
        cc.Canvas.instance.node.emit("updateHandsel",msg);
    }
}

window.playerMng = new PlayerMng();
