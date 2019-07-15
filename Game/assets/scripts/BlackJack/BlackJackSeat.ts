

const { ccclass, property } = cc._decorator;

@ccclass
export default class BlackJackSeat extends cc.Component {

    @property(cc.Label)
    lbl_playerId: cc.Label = null;
    @property(cc.Label)//玩家有多少金币
    lbl_playerCoin: cc.Label = null;
    @property(cc.Label)//池子里下了多少
    lbl_putCoin: cc.Label = null;
    @property(cc.Label)//赢多少金币
    lbl_winCoin: cc.Label = null;
    @property(cc.Label)//输多少金币
    lbl_failCoin: cc.Label = null;
    @property(cc.Sprite)
    spr_headSprite: cc.Sprite = null;//玩家头像
    @property(cc.Sprite)
    spr_timeBar: cc.Sprite = null;//倒计时的bar
    @property(cc.Sprite)
    spr_speack: cc.Sprite = null;//玩家发言结果//停牌//双倍//认输
    @property(cc.Node)
    coinPool: cc.Node = null;//下注金币的池子
    @property(cc.Node)
    spr_coin: cc.Node = null;//金币图标点
    @property(cc.Node)
    pai_ParentNode: cc.Node = null;//牌节点的总父节点
    @property(cc.Node)
    nd_paiNode0: cc.Node = null;//第一幅牌存放的父节点
    @property(cc.Node)
    nd_paiNode1: cc.Node = null;//第二
    _endTime: number = 0;
    glod:number=0;//金币数
    uid:number=0;
    gameState:number=0;//玩家游戏状态 



    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.initOff();
    }
    initOff(){//初始化关闭除底池外其他节点///离开关闭
        for(let i =0;i<this.node.childrenCount;++i){
            this.node.children[i].active=false;
        }
        this.coinPool.active=true;
        cc.find('spr_putCoinBg',this.node).active=true;
    }
    initEnter(data){//进入后初始化节点并赋值
        for(let i =0;i<this.node.childrenCount;++i){
            this.node.children[i].active=true;
        }
        this.spr_timeBar.node.active=false;
        this.lbl_failCoin.node.active=false;
        this.lbl_winCoin.node.active=false;
        this.spr_speack.node.active=false;

        this.lbl_playerId.string=data.uid||199602;
        this.lbl_playerCoin.string=data.coin||520;
        // this.spr_headSprite
        this.lbl_putCoin.string=data.betCoin||0;

    }

    start() {
        // this.startCountDown(10);
        // this.moveLabel(-30);
    }
    //开始倒计时
    startCountDown(endTime) {
        this._endTime = endTime | 10;
        this.spr_timeBar.fillRange = 1;
        // this.daojishi.node.getChildByName('New Label').getComponent(cc.Label).string = Math.ceil((this._endTime - Date.now()) / 1000);
        this.spr_timeBar.node.active = true;
        this.schedule(() => {
            this._updateDaojishi(endTime);
        }, 0.1);
    }
    //停止倒计时
    stopCountDown() {
        this.unschedule(this._updateDaojishi);
        this.spr_timeBar.node.active = false;
    }
    //倒计时渲染方法
    _updateDaojishi(endTime) {
        if (this._endTime < 0) {
            this.unschedule(this._updateDaojishi);
            this.spr_timeBar.node.active = false;
            return;
        }
        this.spr_timeBar.fillRange = this._endTime / endTime;
        cc.log(this._endTime);
        // this.daojishi.node.getChildByName('New Label').getComponent(cc.Label).string = Math.ceil((this._this._endTime - Date.now()) / 1000);
        this._endTime -= 0.1;
    }
    
    moveLabel(coinNum) {//lbl飘输赢分
        let lbl = null;
        coinNum > 0 ? lbl = this.lbl_winCoin : lbl = this.lbl_failCoin;
        coinNum>0?lbl.string="+"+coinNum: lbl.string="-"+coinNum;
        // lbl.string=coinNum;
        lbl.node.position = cc.v2(-90, 120);
        lbl.node.active = true;
        let actionUp = cc.moveTo(2, cc.v2(-90, 140));
        var seq = cc.sequence(actionUp, cc.callFunc(() => {
            lbl.node.active = false;
            lbl.node.position = cc.v2(-90, 120);
        }));
        lbl.node.runAction(seq);
    }
    onDisable() {
        this.unschedule(this._updateDaojishi);
    }
    // update (dt) {}
}
