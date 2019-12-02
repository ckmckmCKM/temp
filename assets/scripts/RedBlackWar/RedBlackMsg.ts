

import {
    showPanelIdType, chipId, AudioType,
} from "./RedBlackCfg";

import { rbwar } from "./rbwar";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackMsg extends cc.Component {

    //是不是点击了详情
    isDetails = false;
    //进入游戏是不是在结算阶段
    isSettleStatus = true;
    //是不是可以下注
    isBetingOk = false;
    //是否已经联网
    isConnectOk = false;
    //游戏状态
    gameStatus = rbwar.GameStatus.StartStatus;
    //用户回来的消息
    userComeBack = null;
    //房间id数组
    roomIdArr = [];
    //是不是第一次进入游戏
    isOnload = true;

    _Marquee: cc.Node = null;

    @property(cc.Node)
    roomList: cc.Node = null;
    @property(cc.Node)
    roomListContent : cc.Node = null;
    @property(cc.Node)
    playerSelf : cc.Node = null;
    @property(cc.Prefab)
    roomNodePref : cc.Prefab = null;
    @property(cc.Prefab)
    Marquee : cc.Prefab = null;

    //ce
    @property(cc.EditBox)
    red_hua : cc.EditBox = null;
    @property(cc.EditBox)
    red_zi : cc.EditBox = null;
    @property(cc.EditBox)
    black_hua : cc.EditBox = null;
    @property(cc.EditBox)
    black_zi : cc.EditBox = null;

    onLoad() {
        let self = this;
        window.RedBlack = window.RedBlack || {};
        window.RedBlack.RedBlackMsg = self;

        console.log("RedBlackMsg onLoad");
        self.startChoose();
        self.node.on("GameMsg", function (mCmd: number, buff: any) {
            //下注返回消息
            self.switchToMsg(mCmd, buff);
        }, self);
        self.node.on("gameError", function (msg: any) {
            //游戏错误
            // window.RedBlack.RedBlackGamePanel.setTip(msg.eType + " " + msg.descript, 3);
            console.error(msg.eType + " " + msg.descript);
        }, self);
    }

    setRoomlistShow(active) {
        this.roomList.active = active;
        if (window.RedBlack.RedBlackGamePanel && active) {
            window.RedBlack.RedBlackGamePanel.clearOtherTime();
            window.RedBlack.RedBlackGamePanel.clearTime();
        }
        let _Marquee = cc.find("Canvas/Marquee");
        if(!_Marquee){
            _Marquee = cc.instantiate(this.Marquee);
            this.node.addChild(_Marquee);
        }
        if (active)
        _Marquee.setPosition(0, 267);
        else
        _Marquee.setPosition(0, 357);
    }

    startChoose () {
        // this.setRoomlistShow(true);
        this.node.on("setDownSuccess", (msg:any) =>{
            if(msg.userId === playerMng.userId){
                playerMng.gameReady();
                this.isConnectOk = true;
				// this.roomList.parent = null;
                window.RedBlack.RedBlackGamePanel.setPlayerSelfData();
                this.playerSelf.getComponent("RedBlackPlayer").initPlayerSelfData();
                this.isOnload = false;
                this.setRoomlistShow(false);
                window.RedBlack.RedBlackGamePanel.setCardBack(true, true);
            }
        });

        this.node.on("showRoomList",(roomAry : any) =>{
            console.warn("showRoomList = " + JSON.stringify(roomAry));
            this.isSettleStatus = true;
            this.isBetingOk = false;
            this.isDetails = false;
            window.RedBlack.RedBlackGamePanel.clearTime();
            window.RedBlack.RedBlackGamePanel.clearOtherTime();
            window.RedBlack.RedBlackGamePanel.clearData();
            window.RedBlack.RedBlackGamePanel.setPlayerSelfData();
            this.playerSelf.getComponent("RedBlackPlayer").initPlayerSelfData();
            this.roomListContent.removeAllChildren();
            // roomAry.sort((a, b) => { return a.RoomId - b.RoomId });
            this.roomIdArr = [];
            if (roomAry.length === 1) {
                // if (this.isOnload) {
                //     playerMng.autoMatch(roomAry[0].RoomId);
                //     this.setRoomlistShow(false);
                // }
                if (this.isOnload) {
                    playerMng.autoMatch(roomAry[0].RoomId);
                } else {
                    playerMng.returnToHall();
                }
                this.setRoomlistShow(false);
            }else{
                this.setRoomlistShow(true);
                this.isOnload = true;
            }
            //添加房间列表
            for (var i = 0; i < roomAry.length; i++) {
                let info = roomAry[i];
                let roomNode = cc.instantiate(this.roomNodePref);
                roomNode.getComponent("RedBlackDetailsItem").updateRoomInfo(info, i);
                this.roomIdArr.push(info.RoomId);
                // roomNode.position = cc.v2(-320 + 310*i, -300);
                roomNode.parent = this.roomListContent;
            }
            // if (this.roomIdArr.length === 1){
            //     playerMng.autoMatch(roomAry[0].RoomId);
            // }
        });
    }

    switchToMsg(mCmd, buff) {
        switch (mCmd) {
            case rbwar.SendToClientMessageType.RestartID:
                {
                    console.log("000000");
                }
                break;
            case rbwar.SendToClientMessageType.BetRet:
                {
                    console.log("下注消息");
                }
                break;
            case rbwar.SendToClientMessageType.BetFailID:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    console.log("下注失败");
                    let msg = rbwar.BetFailMessage.decode(buff);
                    console.log("BetFailMessage : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.setTip(msg.FailMessage, 5);
                }
                break;
            case rbwar.SendToClientMessageType.BetSuccessMessageID:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    // console.log("下注成功的消息id");
                    let msg = rbwar.BetSuccessMessage.decode(buff);
                    console.log("BetSuccessMessage : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.showBetTing(msg);
                }
                break;
            case rbwar.SendToClientMessageType.SceneID:
                {
                    console.log("场景ID");
                    let msg = rbwar.SceneMessage.decode(buff);
                    console.log("SceneMessage : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.refreshScene(msg);
                }
                break;
            case rbwar.SendToClientMessageType.DealID:
                {
                    console.log("DealID");
                }
                break;
            case rbwar.SendToClientMessageType.Status:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    console.log("状态消息");
                    this.setCurStatus(mCmd, buff);
                }
                break;
            case rbwar.SendToClientMessageType.Settle:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    console.log("结算消息");
                    let msg = rbwar.SettleMsg.decode(buff);
                    console.warn("SettleMsg : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.refreshSettle(msg);
                    // window.RedBlack.RedBlackGamePanel.turnCard(0, 0, msg);
                }
                break;
            case rbwar.SendToClientMessageType.SitDownFail:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    console.log("坐下失败");
                    let msg = rbwar.UserSitDownFail.decode(buff);
                    console.log("SitDownFail : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.setTip(msg.FailReaSon, 2);
                    //你坐下的位置已经被其他玩家捷足先登了！
                }
                break;
            case rbwar.SendToClientMessageType.BetInfo:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    // BetInfo = 9;		//下注信息消息
                    console.log("下注信息消息");
                    let msg = rbwar.SceneBetInfo.decode(buff);
                    console.warn("SceneBetInfo : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.sceneBetInfo(msg);
                }
                break;
            case rbwar.SendToClientMessageType.TrendInfo:
                {
                    //TrendInfo = 10;	//服务器发送走势图
                    console.log("服务器发送走势图");
                    let msg = rbwar.Trend.decode(buff);
                    console.warn("Trend : " + JSON.stringify(msg));
                    if (this.isDetails) {
                        window.RedBlack.RedBlackGamePanel.refreshDetails(msg);
                    }else{
                        window.RedBlack.RedBlackGamePanel.refreshTrendChart(msg.Win);
                        window.RedBlack.RedBlackGamePanel.refreshCardTypeChart(msg.WinCardType);
                    }
                }
                break;
            case rbwar.SendToClientMessageType.UserListInfo:
                {
                    // UserListInfo = 11,//玩家列表
                    console.warn("玩家列表");
                    let msg = rbwar.UserList.decode(buff);
                    console.warn("UserListInfo : " + JSON.stringify(msg));

                    window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.playerList);
                    window.RedBlack.RedBlackPlayerList.initPlayerListData(msg.UserList);
                }
                break;
            case rbwar.SendToClientMessageType.SceneSettleInfo:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    // SceneSettleInfo = 12;//场景上的玩家结算信息
                    console.log("场景上的玩家结算信息");
                    let msg = rbwar.SceneUserSettle.decode(buff);
                    console.warn("SceneSettleInfo : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.sceneSettleInfo(msg);
                }
                break;
            case rbwar.SendToClientMessageType.ExitRet:
                {
                    // ExitRet = 13;//退出结果，在用户失败时发送
                    console.log("退出结果，在用户失败时发送");
                    let msg = rbwar.ExitFail.decode(buff);
                    console.log("ExitFail : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.setTip(msg.FailReason, 2);
                }
                break;
            case rbwar.SendToClientMessageType.KickOutUser:
                {
                    //KickOutUser = 14;//踢出玩家发送原因
                    console.log("踢出玩家发送原因");
                    let msg = rbwar.KickOutUserMsg.decode(buff);
                    console.log("KickOutUserMsg : " + JSON.stringify(msg));
                    window.RedBlack.RedBlackGamePanel.setTip(msg.KickOutReason, 2);
                    window.RedBlack.RedBlackMsg.setRoomlistShow(true);
                    window.RedBlack.RedBlackGamePanel.clearTime();
                    window.RedBlack.RedBlackGamePanel.clearOtherTime();
                    //点击返回大厅按钮
                    window.playerMng.reqGameLeave();
                }
                break;
            case rbwar.SendToClientMessageType.RoomRolesInfo:
                {
                    //在选择房间界面时屏蔽游戏里面消息
                    if (this.roomList.active){
                        return;
                    }
                    //RoomRolesInfo = 15,	//房间规则信息
                    console.warn("房间规则信息");
                    let msg = rbwar.RoomRolesInfoMsg.decode(buff);
                    console.warn("RoomRolesInfoMsg : " + JSON.stringify(msg));
                    for (let i = 0; i < msg.BetArr.length; ++i) {
                        chipId[i] = msg.BetArr[i];
                    }
                    window.RedBlack.RedBlackGamePanel.setUserBetLimit(msg.UserBetLimit);
                    window.RedBlack.RedBlackGamePanel.onloadChipColor();
                    window.RedBlack.RedBlackGamePanel.setChipButton();
                    // window.RedBlack.RedBlackGamePanel.setTip(msg.BetArr, 10);
                }
                break;
            case rbwar.SendToClientMessageType.RoomSenceInfo:
                {
                    // RoomSenceInfo = 16,	//场次场景信息
                    console.warn("场次场景信息");
                    let msg = rbwar.RoomSenceInfoMsg.decode(buff);
                    console.warn("RoomSenceInfoMsg : " + JSON.stringify(msg));
                    let _len = this.roomListContent.childrenCount;
                    for (let i = 0; i < _len; ++i) {
                        if (this.roomIdArr[i] === msg.RoomID) {
                            this.roomListContent.children[i].getComponent("RedBlackDetailsItem").init(msg);//.emit("roomSenceInfoMsg", msg);
                        }
                    }
                }
                break;
            case rbwar.SendToClientMessageType.UserComeBack:
                {
                    // UserComeBack = 17;	//用户回来的结算消息
                    console.warn("用户回来的结算消息");
                    let msg = rbwar.SettleMsg.decode(buff);
                    console.warn("SettleMsg : " + JSON.stringify(msg));
                    this.userComeBack = msg;
                }
                break;
        }
    }

    setCurStatus(mCmd, buff) {
        let msg = rbwar.StatusMessage.decode(buff);
        this.gameStatus = msg.Status;
        console.log("mCmd---------------------------------" + mCmd);
        console.log("msg---------------------------------" + JSON.stringify(msg));
        switch (msg.Status) {
            case rbwar.GameStatus.StartStatus: {
                this.isBetingOk = false;
                window.RedBlack.RedBlackCentrePanel.hideWaitNextAni();
                console.log("GameStatus000000");
            }
                break;
            case rbwar.GameStatus.StartMovie: {
                this.isBetingOk = false;
                //开始动画
                console.log("开始动画");
                this.isSettleStatus = false;
                window.RedBlack.RedBlackCentrePanel.hideWaitNextAni();
                //开始下注动画
                window.RedBlack.RedBlackGamePanel.StartMovie(msg.StatusTime, showPanelIdType.startBet, 0.5);
            }
                break;
            case rbwar.GameStatus.BetStatus: {
                this.isBetingOk = true;
                //下注阶段
                console.log("下注阶段");
                this.isSettleStatus = false;
                window.RedBlack.RedBlackCentrePanel.hideWaitNextAni();
                //刷新请下注时间
                window.RedBlack.RedBlackGamePanel.refreshBetTime(msg.StatusTime - 1000);
                // // ckm cs
                // for (let i = 0; i < 3; ++i){
                //     this.sendMsgRequestBetsResult(i, 0);
                // }
            }
                break;
            case rbwar.GameStatus.EndBetMovie: {
                this.isBetingOk = false;
                //结束下注动画
                console.log("结束下注动画");
                window.RedBlack.RedBlackCentrePanel.hideWaitNextAni();
                this.isSettleStatus = false;
                window.RedBlack.RedBlackCentrePanel.showAniDefault(showPanelIdType.stopBet);
                window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.TingZhiXiaZhu), false);
                //清除下注时间
                window.RedBlack.RedBlackGamePanel.clearTime();
            }
                break;
            case rbwar.GameStatus.SettleStatus: {
                this.isBetingOk = false;
                window.RedBlack.RedBlackCentrePanel.hideWaitNextAni();
                //结算阶段
                console.log("结算阶段");
                if (this.isSettleStatus) {
                    this.isSettleStatus = false;
                    if (this.userComeBack && this.userComeBack.BlackPoker) {
                        window.RedBlack.RedBlackGamePanel.userComeBack(this.userComeBack);
                    } else {
                        window.RedBlack.RedBlackCentrePanel.showWaitNextAni();
                    }
                    //清除下注时间
                    window.RedBlack.RedBlackGamePanel.clearTime();
                    this.userComeBack = null;
                }
            }
                break;
        }
    }

    // 请求下注消息
    sendMsgRequestBetsResult(betType = 0, betIndex = 0) {
        if (!this.isBetingOk) {
            return;
        }

        // setTimeout(() => {
        //     this.sendMsgRequestBetsResult(1, 0);
        // }, 1000/10);

        console.log("请求下注消息发送金币 ： " + "红黑幸运一击 = " + betType + "下注的下标 = " + betIndex);
        let msg = rbwar.Bet.create({
            BetType: betType,//红黑幸运一击
            BetIndex: betIndex,//下注的下标
        });
        gameTcp.send(2, rbwar.ReceiveMessageType.BetID, rbwar.Bet.encode(msg));
    }

    // 玩家请求坐下
    sendMsgRequestUserSitDown(seatId) {
        if (!this.isConnectOk) {
            return;
        }
        console.log("玩家请求坐下 ： " + "seatId = " + seatId);
        let msg = rbwar.UserSitDown.create({
            ChairNo: seatId,//座位号
        });
        gameTcp.send(2, rbwar.ReceiveMessageType.SitDown, rbwar.UserSitDown.encode(msg));
    }

    //GetTrend = 3;//获取走势图
    sendMsgRequestGetTrend() {
        if (!this.isConnectOk) {
            return;
        }
        console.log("获取走势图");
        window.RedBlack.RedBlackCentrePanel.showNoMove(showPanelIdType.quanquan);
        gameTcp.send(2, rbwar.ReceiveMessageType.GetTrend);
    }

    //GetUserListInfo = 4, //获取玩家列表
    sendMsgRequestGetUserListInfo() {
        if (!this.isConnectOk) {
            return;
        }
        console.log("获取玩家列表");
        window.RedBlack.RedBlackCentrePanel.showNoMove(showPanelIdType.quanquan);
        gameTcp.send(2, rbwar.ReceiveMessageType.GetUserListInfo);
    }

    //StandUp = 5;	//用户站立
    sendMsgRequestStandUp() {
        if (!this.isConnectOk) {
            return;
        }
        console.log("用户站立");
        gameTcp.send(2, rbwar.ReceiveMessageType.StandUp);
    }

    // update (dt) {}
}
