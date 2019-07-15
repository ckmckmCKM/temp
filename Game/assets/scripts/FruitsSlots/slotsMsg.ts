import { MsgID,BetRes1,LineInfo,Sence,XiaoMaLiRes, UserBet } from './laba';

const {ccclass, property} = cc._decorator;

//客户端枚举消息类型
enum MsgIDC2S{
    STARTID = 0,
	AskSence = 1,//请求场景消息
	Bet = 2,	//下注消息
	XiaMaLi = 3,//小玛丽消息
}

//服务器枚举消息类型
enum ReMsgIDS2C{
    RESTARTID = 0,
	SenceID = 1,//场景消息
	BetRet = 2,	//下注消息
	BetFailID = 3,//下注失败
	XiaMaLiRet = 4,//小玛丽消息
	JackpotGold = 5,//奖池金币消息
}

@ccclass
export default class SceneDemo extends cc.Component {    

    m_nCurrGold : number = 0;   //当前自己的钱
    m_nWinPeiLv : number = 0; //中奖总倍率
    m_nWinGold : number = 0; //这局赢得钱
    m_nGeZiGame : number = 0; //小游戏
    m_nFreetTimes : number = 0; //免费次数
    m_nFreeAllCount : number = 0; // 免费游戏总次数
    m_bFreeGame : boolean = false;//免费游戏标识 
    m_nResult : number[] = []; // 15个元素
    m_nRewardLine : number[] = []; // 中奖线
    freeCountWinGold : number = 0; //免费次数总共获得的金币
    gameBet : number[] = []; //下注倍数
    m_nPrizePoolGold : number = 0; //奖池
    listResult : Number[] = [5]; //5列元素


    Cheat : number = 0;  //作弊值
    BloodPool  : number = 0;;//血池值

    linePosition : Array<Array<number>> =  new Array<Array<number>>(); // 可连线

    onLoad(){
        window.slotsScene.SceneDemo = this;
    }

    start () {  
        this.linePosition[0] = [0, 3, 6, 9, 12]; 
        this.linePosition[1] = [1, 4, 7, 10, 13]; 
        this.linePosition[2] = [2, 5, 8, 11, 14]; 
        this.linePosition[3] = [0, 4, 8, 10, 12]; 
        this.linePosition[4] = [2, 4, 6, 10, 14]; 
        this.linePosition[5] = [0, 3, 7, 11, 14]; 
        this.linePosition[6] = [2, 5, 7, 9, 12]; 
        this.linePosition[7] = [1, 3, 7, 11, 13]; 
        this.linePosition[8] = [1, 5, 7, 9, 13]; 

         
        this.node.on("GameMsg",function(mCmd:number, buff:any){   
            console.log("---------------------------------" + mCmd); 
            if(mCmd === ReMsgIDS2C.BetRet){
                let msg = BetRes1.decode(buff);  
                window.slotsScene.SceneDemo.resolveBetsReturnMessage(msg)
            }else if(mCmd == ReMsgIDS2C.XiaMaLiRet){
                let msg = XiaoMaLiRes.decode(buff);
                window.slotsScene.smallGame.node.emit("monitorSmallGameMsg",msg.Times,msg.OutIndex,msg.InIcon,msg.Gold,msg.Exit);
            }else if(mCmd === ReMsgIDS2C.SenceID){
                let msg = Sence.decode(buff);
                window.slotsScene.roolConfig.betsSceneDta(msg);
            }
        });  
    }

    // 解析下注返回消息
    resolveBetsReturnMessage(buff){

        this.m_nCurrGold  = 0;   //当前自己的钱
        this.m_nWinPeiLv  = 0; //中奖总倍率
        this.m_nWinGold  = 0; //这局赢得钱
        this.m_nGeZiGame  = 0; //小游戏
        this.m_nFreetTimes  = 0; //免费次数
        this.m_bFreeGame  = false;//免费游戏标识 
        this. m_nResult  = []; // 15个元素
        this. m_nRewardLine  = []; // 中奖线
        //this. freeCountWinGold  = 0; //免费次数总共获得的金币
        this. gameBet  = []; //下注倍数
        this.m_nPrizePoolGold  = 0; //奖池
        this.listResult = [5]; //5列元素

        this.m_nCurrGold = buff.UserGold;
        this.m_nWinPeiLv = buff.Odds;
        this.m_nWinGold = buff.Gold;
        this.m_nResult = buff.bEnterFree;
        this.m_nFreetTimes = buff.FreeGames;

        this.Cheat = buff.Cheat;  //作弊值
        this.BloodPool  = buff.BloodPool;//血池值
        
        if(window.slotsScene.isFree == true){
            this. freeCountWinGold = this. freeCountWinGold + this.m_nWinPeiLv
        }
        
        this.m_nGeZiGame = buff.XiaoMaLi;
        this.m_nPrizePoolGold = buff.Jackpot;

        this.m_nResult = buff.IconArr

        this.m_nRewardLine = buff.Line
 


        // 赋值游戏ICON
        for(let i = 0; i < 5; i++){
            let info = new Number(3);
            for(let u =0; u < 3; u++){
                let number = this.m_nResult[i*3+u]
                info[u] = number
            }
            this.listResult[i] = info
        } 
        cc.log(buff)

        if(this.BloodPool != 0){
            window.slotsScene.userTipsText[0].string = "血池： " + this.BloodPool;
        }else{
            window.slotsScene.userTipsText[0].active
        }
        if(this.Cheat != 0){
            window.slotsScene.userTipsText[1].string = "作弊： " + this.Cheat;
        }else{
            window.slotsScene.userTipsText[1].active
        }
        
        window.slotsScene.runLogic.runPanleBeginFunc()
    }




    // 请求场景消息
    sendMsgRequestScene(){
        cc.log("请求场景消息")
        gameTcp.send(2,MsgIDC2S.AskSence); 
    }

    // 请求下注消息
    sendMsgRequestBetsResult(Gold){ 
        
        if(window.slotsScene.isMsgSend == false){
            console.log("请求下注消息发送金币 ： " + Gold); 
            let msg = UserBet.create({BetMoney:Gold});
            gameTcp.send(2,MsgIDC2S.Bet,UserBet.encode(msg));
            window.slotsScene.isMsgSend = true
        } 
    }

    // 请求小游戏消息
    sendMsgRequestSmallResult(){ 
        cc.log("請求小游戲數據")
        gameTcp.send(2,MsgIDC2S.XiaMaLi);
    }
}
