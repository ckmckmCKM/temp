

import { showPanelIdType, startDelayTime, showPanelType, cardCharacterType, AudioType } from "./RedBlackCfg";
import {
    ReceiveMessageType, Bet, StatusMessage, GameStatus, SendToClientMessageType,
    BetFailMessage, BetSuccessMessage, SettleMsg, UserSitDown, UserSitDownFail, 
    SceneMessage, SceneBetInfo, Trend, UserList, SceneUserInfo, SceneUserSettle
} from "./rbwar";


const { ccclass, property } = cc._decorator;

// 客户端到服务器发送消息的类型
enum ReceiveMessageTypec {
    StartID = 0,
    BetID = 1, // 下注信息
	SitDown = 2,//用户坐下消息
	GetTrend = 3,//获取走势图
	GetUserListInfo = 4, //获取玩家列表
}

// 服务器发送给客户端的消息类型
enum SendToClientMessageTypec {
    RestartID = 0,
    BetRet = 1, // 下注消息
    BetFailID = 2, // 下注失败
    BetSuccessMessageID = 3, // 下注成功的消息id
    SceneID = 4, // 场景ID
    DealID = 5,
    Status = 6,		//状态消息
    Settle = 7,		//结算消息
    SitDownFail = 8, //坐下失败
	BetInfo = 9,		//下注信息消息
	TrendInfo = 10,	//服务器发送走势图
	UserListInfo = 11,//玩家列表
	SceneSettleInfo = 12,//场景上的玩家结算信息
}

@ccclass
export default class RedBlackMsg extends cc.Component {

    curStatus: GameStatus = GameStatus.StartStatus;

    //是不是点击了详情
    isDetails = false;


    onLoad() {
        let self = this;
        window.RedBlack = this;
        window.RedBlack.RedBlackMsg = self;
        //背景音乐
        // window.audioMng.playMusic(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.Bg));

        console.log("RedBlackMsg onLoad");
        self.node.on("GameMsg", function (mCmd: number, buff: any) {
            //下注返回消息
            switch (mCmd) {
                case SendToClientMessageType.RestartID:
                    {
                        console.log("000000");
                    }
                    break;
                case SendToClientMessageType.BetRet:
                    {
                        console.log("下注消息");
                    }
                    break;
                case SendToClientMessageType.BetFailID:
                    {
                        console.log("下注失败");
                        let msg = BetFailMessage.decode(buff);
                        console.log("BetFailMessage : " + JSON.stringify(msg));
                    }
                    break;
                case SendToClientMessageType.BetSuccessMessageID:
                    {
                        console.log("下注成功的消息id");
                        let msg = BetSuccessMessage.decode(buff);
                        console.log("BetSuccessMessage : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.showBetTing(msg);
                    }
                    break;
                case SendToClientMessageType.SceneID:
                    {
                        console.log("场景ID");
                        let msg = SceneMessage.decode(buff);
                        console.log("SceneMessage : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.refreshScene(msg);
                    }
                    break;
                case SendToClientMessageType.DealID:
                    {
                        console.log("DealID");
                    }
                    break;
                case SendToClientMessageType.Status:
                    {
                        console.log("状态消息");
                        self.setCurStatus(mCmd, buff);
                    }
                    break;
                case SendToClientMessageType.Settle:
                    {
                        console.log("结算消息");
                        let msg = SettleMsg.decode(buff);
                        console.log("SettleMsg : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.refreshSettle(msg);
                        window.RedBlack.RedBlackGamePanel.turnCard(0,0,msg);
                    }
                    break;
                case SendToClientMessageType.SitDownFail:
                    {
                        console.log("坐下失败");
                        let msg = UserSitDownFail.decode(buff);
                        console.log("SitDownFail : " + JSON.stringify(msg));
                    }
                    break;
                case SendToClientMessageType.BetInfo:
                    {
                        // BetInfo = 9;		//下注信息消息
                        console.log("下注信息消息");
                        let msg = SceneBetInfo.decode(buff);
                        console.log("SceneBetInfo : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.sceneBetInfo(msg);
                    }
                    break;
                case SendToClientMessageType.TrendInfo:
                    {
                        //TrendInfo = 10;	//服务器发送走势图
                        console.log("服务器发送走势图");
                        let msg = Trend.decode(buff);
                        console.log("Trend : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.refreshTrendChart(msg.Win);
                        window.RedBlack.RedBlackGamePanel.refreshCardTypeChart(msg.WinCardType);
                        if(this.isDetails){
                            window.RedBlack.RedBlackGamePanel.refreshDetails(msg);
                        }
                    }
                    break;
                case SendToClientMessageType.UserListInfo:
                    {
                        // UserListInfo = 11,//玩家列表
                        console.log("玩家列表");
                        let msg = UserList.decode(buff);
                        console.log("UserListInfo : " + JSON.stringify(msg));

                        window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.playerList);
                        window.RedBlack.RedBlackPlayerList.initPlayerListData(msg.UserList);
                    }
                    break;
                case SendToClientMessageType.SceneSettleInfo:
                    {
                        // SceneSettleInfo = 12;//场景上的玩家结算信息
                        console.log("场景上的玩家结算信息");
                        let msg = SceneUserSettle.decode(buff);
                        console.log("SceneSettleInfo : " + JSON.stringify(msg));
                        window.RedBlack.RedBlackGamePanel.sceneSettleInfo(msg);
                    }
                    break;
            }
        }, self);

        //坐下成功
        self.node.on("setDownSuccess", function (buff: any) {
            console.log("setDownSuccess : " + JSON.stringify(buff));
            playerMng.gameReady();
            self.sendMsgRequestGetTrend();
            //获取自己信息
            // self.sendMsgRequestUserSitDown(0);
        }, self);
        // cc.Canvas.instance.node.emit("setDownSuccess",msg);
    }

    setCurStatus(mCmd, buff) {
        let msg = StatusMessage.decode(buff);
        this.curStatus = msg.Status;
        console.log("mCmd---------------------------------" + mCmd);
        console.log("msg---------------------------------" + JSON.stringify(msg));
        switch (msg.Status) {
            case GameStatus.StartStatus: {
                console.log("GameStatus000000");
            }
                break;
            case GameStatus.StartMovie: {
                //开始动画
                console.log("开始动画");
                //开始下注动画
                window.RedBlack.RedBlackGamePanel.StartMovie(msg.StatusTime,showPanelIdType.startBet, 0.5,);
                // //发牌
                // window.RedBlack.RedBlackGamePanel.dealCards();
                // //开始下注动画
                // window.RedBlack.RedBlackCentrePanel.showMoveLeft(showPanelIdType.startBet, 0.5,);
            }
                break;
            case GameStatus.BetStatus: {
                //下注阶段
                console.log("下注阶段");
                //刷新请下注时间
                window.RedBlack.RedBlackGamePanel.refreshBetTime(msg.StatusTime);
            }
                break;
            case GameStatus.EndBetMovie: {
                //结束下注动画
                console.log("结束下注动画");
                window.RedBlack.RedBlackCentrePanel.showMoveLeft(showPanelIdType.stopBet, 0.5);
                //刷新请下注时间
                window.RedBlack.RedBlackGamePanel.clearTime();
            }
                break;
            case GameStatus.SettleStatus: {
                //结算阶段
                console.log("结算阶段");
            }
                break;
        }
    }

    start() {
        // this.sendMsgRequestBetsResult(0,0,100);
    }

    // // 请求场景消息
    // sendMsgRequestScene(){
    //     gameTcp.send(2,MsgIDC2S.AskSence); 
    // }

    // 请求下注消息
    sendMsgRequestBetsResult(betType = 0, betIndex = 0) {

        // if(window.slotsScene.isMsgSend == false){
        console.log("请求下注消息发送金币 ： " + "红黑幸运一击 = " + betType + "下注的下标 = " + betIndex);
        let msg = Bet.create({
            BetType: betType,//红黑幸运一击
            BetIndex: betIndex,//下注的下标
        });
        gameTcp.send(2, ReceiveMessageType.BetID, Bet.encode(msg));
        //     window.slotsScene.isMsgSend = true
        // } 
    }

    // 玩家请求坐下
    sendMsgRequestUserSitDown(seatId) {

        // if(window.slotsScene.isMsgSend == false){
        console.log("玩家请求坐下 ： " + "seatId = " + seatId);
        let msg = UserSitDown.create({
            ChairNo: seatId,//座位号
        });
        gameTcp.send(2, ReceiveMessageType.SitDown, UserSitDown.encode(msg));
        //     window.slotsScene.isMsgSend = true
        // } 
    }

    //GetTrend = 3;//获取走势图
    sendMsgRequestGetTrend() {
        console.log("获取走势图");
        gameTcp.send(2, ReceiveMessageType.GetTrend);
    }

    //GetUserListInfo = 4, //获取玩家列表
    sendMsgRequestGetUserListInfo(){
        console.log("获取玩家列表");
        gameTcp.send(2, ReceiveMessageType.GetUserListInfo);
    }

    // update (dt) {}
}
