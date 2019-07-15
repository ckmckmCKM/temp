import 'Long'
import 'LTools'
import 'LTools'
import 'GameTcp'
import { MSGKIND,C2SLogin,S2CLogin, S2CMatch } from './frame';

class PlayerMng
{
    userId:number;     //玩家id
    headId:number;     //头像id
    gold:number;        //金币
    rankNum:number;     //排行榜排名
    nickName:string;   //昵称
    sign:string;        //签名
    token:string;       //账号
    uuid:string;        //uuid
    
    constructor(){
        this.userId = 0;
        this.headId = 0;
        this.gold = 1;
        this.rankNum = 0;
        this.nickName = "";
        this.sign = "";
        this.token = "";
        this.uuid = new DeviceUUID().get();
        cc.log("uuid:",this.uuid);
        
    }
    
    connect(){
        gameTcp.connect("192.168.10.198",8087,"token=sadjjal");
         //gameTcp.connect("192.168.10.114",8089,"token=jdsal");
    }
    
    loginTest(){
        let login = C2SLogin.create();
        login.userId = 12345;
        login.equipmentCode = this.uuid;
        login.gameName = "炸金花";  //游戏名
        gameTcp.send(1,MSGKIND.LOGIN,C2SLogin.encode(login));
    }
    //登陆成功
    loginSuccess(buff){
        let msg = S2CLogin.decode(buff);
        this.userId = msg.userId;
        cc.log("userid :",msg.userId);
        cc.Canvas.instance.node.emit("loginSuccess");
        this.requstSetDown();
    }
    //请求坐下
    requstSetDown(){
        gameTcp.send(1,MSGKIND.MATCH);
    }
    //坐下成功
    matchSuccess(buff){
        let msg = S2CMatch.decode(buff);
        cc.Canvas.instance.node.emit("setDownSuccess",msg);
    }
    //发送游戏准备
    gameReady(){
        gameTcp.send(1,MSGKIND.READY);
    }
    //游戏准备成功
    readySuccess(){
        cc.Canvas.instance.node.emit("readySuccess");
    }
    //离开
    gameLeave(){
        gameTcp.send(1,MSGKIND.LEAVE);
    }
    //离开完成
    gameLeaveSuccess(){
        cc.Canvas.instance.node.emit("gameLeaveSuccess");
    }
}

window.playerMng = new PlayerMng();