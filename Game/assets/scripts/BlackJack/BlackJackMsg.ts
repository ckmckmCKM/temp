

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackJackMsg extends cc.Component {
    @property(cc.Node)
    gameLayer:cc.Node=null;
    @property(cc.Node)
    uiLayer:cc.Node=null;
    userData = {   // 玩家基本信息
        "userName" : "cc",
        "userID" : 5555262,
        "userCoin" : 15156,
        "userHeadId" : 5,
    };
    roomInfo ={
        // "minBet":5,//最小下注
        "maxbet":20,//最大
        "chips":[10,20,40,80],
    };

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        playerMng.connect();
        window.blackJackMsg=this;
        this.gameLayer=this.gameLayer.getComponent("BlackJackgameLayer");
        this.uiLayer=this.uiLayer.getComponent("BlackJackuiLayer");

      
    }

    start () {
        console.log("--------------------------------- start() "); 
        this.node.on("GameMsg",function(mCmd:number, buff:any){   
            console.log("---------------------------------" + mCmd); 
            // if(mCmd === ReMsgIDS2C.BetRet){
            //     let msg = BetRes.decode(buff);  
            // }else if(mCmd == ReMsgIDS2C.XiaMaLiRet){
            //     let msg = XiaoMaLiRes.decode(buff);
            // }else if(mCmd === ReMsgIDS2C.SenceID){
            //     let msg = Sence.decode(buff);
            //     cc.log(msg)
            // }
            // switch(mCmd){
            //     case :
            // }
        });  
        
    }

    // update (dt) {}
}
