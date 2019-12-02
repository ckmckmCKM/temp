
import {getChipNum, allArea, cardType, playerSeatId } from "./RedBlackCfg";


//游戏中几个玩家的数据
interface SeatUser {
    Nick: "GameNickname", // 用户昵称
    Head: "", // 头像
    Score: 10000, // 分数
    IsBigWinner: false, // 是否是大赢家
    IsMaster: false, // 是否是神算子
    SeatId: playerSeatId.player_self, //在场景中的座位id
	UserID: null;//用户ID
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackPlayer extends cc.Component {

    @property(cc.Prefab)
    godPre: cc.Prefab = null;
    @property(cc.Node)
    godIcon: cc.Node = null;
    @property(cc.Node)
    fuHao: cc.Node = null;
    @property(cc.Node)
    fu: cc.Node = null;
    @property(cc.Node)
    winHeadAni: cc.Node = null;
    @property(cc.Node)
    headImg: cc.Node = null;//整个头像节点
    @property(cc.Node)
    headSp: cc.Node = null;//头像图片
    @property(cc.Label)
    nike: cc.Label = null;
    @property(cc.Sprite)
    vip: cc.Sprite = null;
    @property(cc.SpriteAtlas)
    viaAtlas: cc.SpriteAtlas = null;
    @property(cc.Label)
    score: cc.Label = null;
    @property(cc.Prefab)
    labelPre: cc.Prefab = null;
    @property(cc.Node)
    headFrame: cc.Node = null;
    @property(cc.Node)
    isSelfQuan: cc.Node = null;
    @property([cc.SpriteFrame])
    headFrameSp: cc.SpriteFrame[] = [];
    // @property(cc.Node)
    // isSelfAniNode: cc.Node = null;
    @property(cc.SpriteFrame)
    defaultHeadSp: cc.SpriteFrame = null;

    playerData: SeatUser = {
        Nick: "GameNickname", // 用户昵称
        Head: "", // 头像
        Score: 10000, // 分数
        IsBigWinner: false, // 是否是大赢家
        IsMaster: false, // 是否是神算子
        SeatId: playerSeatId.player_self, //在场景中的座位id
        UserID: null,//用户ID
    };

    _curHeadUrl: "";//当前的头像

    setScoreNum(scoreNum) {
        this.playerData.Score = scoreNum;
        let _numObj = getChipNum(this.playerData.Score, true);
        this.score.string = _numObj.num + _numObj.zi;
    }

    subGold(gold = 0){
        if(!this.playerData || !this.score){
            return;
        }
        this.playerData.Score -= gold;
        let _numObj = getChipNum(this.playerData.Score, true);
        this.score.string = _numObj.num + _numObj.zi;
        return this.score.string;
    }

    addGold(money){
        if(!this.playerData){
            return;
        }
        this.playerData.Score += money;
        let _numObj = getChipNum(this.playerData.Score, true);
        this.score.string = _numObj.num + _numObj.zi;
    }

    getPlayerData(){
        return this.playerData;
    }

    setScore(scoreStr){
        this.score.string = scoreStr;
    }
    
    // IsBigWinner: false, // 是否是大赢家
    // IsMaster: false, // 是否是神算子
    getIsBigWinner(){
        return this.playerData.IsBigWinner;
    }

    getIsMaster(){
        return this.playerData && this.playerData.IsMaster;
    }

    initPlayerData(userData: SeatUser, isSelf = false) {
        if (this.headSp && this.defaultHeadSp && this._curHeadUrl != userData.Head) {
            if (userData.Head === ""){
                this.headSp.getComponent(cc.Sprite).spriteFrame = this.defaultHeadSp;
            }else{
                this._curHeadUrl = userData.Head;
                window.common.setSpriteWithUrl(this.headSp, userData.Head);
            }
        }
        let _labelNode = this.node.getChildByName("labelItem");
        if (_labelNode){
            _labelNode.destroy();
        }
        this.playerData = userData;
        this.nike.string = this.playerData.Nick + "";
        let _numObj = getChipNum(this.playerData.Score, true);
        this.score.string = _numObj.num + _numObj.zi;

        //如果是自己，只显示数据
        if(isSelf){
            this.fu.active = false;
            this.godIcon.active = false;
            this.fuHao.active = false;
            return;
        }
        //特殊处理 既是神算子又是大富豪
        if (this.playerData.IsMaster && this.playerData.IsBigWinner) {
            this.fu.active = true;
            this.godIcon.active = true;
            this.fuHao.active = false;
        }else{
            this.fu.active = false;
            this.godIcon.active = this.playerData.IsMaster;
            this.fuHao.active = this.playerData.IsBigWinner;
        }
    }

    initPlayerSelfData() {
        if (this.headSp && this.defaultHeadSp && this._curHeadUrl != window.playerMng.head) {
            if (window.playerMng.head === ""){
                this.headSp.getComponent(cc.Sprite).spriteFrame = this.defaultHeadSp;
            }else{
                this._curHeadUrl = window.playerMng.head;
                window.common.setSpriteWithUrl(this.headSp, window.playerMng.head);
            }
        }
        console.log("initPlayerSelfData" + JSON.stringify(window.playerMng));
        if (this.vip) {
            let _sp = this.viaAtlas.getSpriteFrame("v" + window.playerMng.vipLevel);
            this.vip.spriteFrame = _sp;//vip等级
        }
        this.playerData.Nick = window.playerMng.nickName;
        this.playerData.Score = window.playerMng.gold;
        this.nike.string = this.playerData.Nick + "";
        let _numObj = getChipNum(this.playerData.Score, true);
        this.score.string = _numObj.num + _numObj.zi;
    }

    //神算子标签
    golIcon_fiy(end_node_move, sprite_id = 0) {
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/godMove",_canvas);
        let _godIcon = cc.instantiate(this.godPre);
        let pos1 = this.godIcon.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.getPosition());
        _godIcon.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        _parent.addChild(_godIcon);  //加载
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        // console.log("pos = " + pos);
        let _pos2 = cc.v2(-310, 280);
        if (pos1.x > 500){
            _pos2.x = 955;
        }else{
            _pos2.x = 330;
        }
        if (pos1.y > pos.y) {
            _pos2.y = pos1.y + 100;
        } else {
            // _pos2.y = pos1.y - 100;
            _pos2.y += 300;
        }
        let bezier = [pos1, _pos2, pos];
        // console.log("_pos2 = " + _pos2);
        let move = cc.bezierTo(0.5, bezier);//cc.moveTo(0.5, pos.x, pos.y);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        _godIcon.runAction(cc.sequence(move, cc.callFunc(() => {
            end_node_move.active = true;
            _godIcon.destroy();
        })));
    }

    //神算子 大赢家 标签移动
    golIcon_Move(iconNode, start_node_move, end_node_move) {
        iconNode.active = true;
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/godMove",_canvas);//cc.Canvas.instance.node.getChildByName("root");
        // let _godIcon = cc.instantiate(this.godPre);
        let pos1 = start_node_move.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.getPosition());
        // console.log("pos1 = " + pos1);
        iconNode.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        _parent.addChild(iconNode);  //加载
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        // console.log("pos = " + pos);
        let move = cc.moveTo(0.5, pos.x, pos.y);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        iconNode.runAction(cc.sequence(move, cc.callFunc(() => {
            // end_node_move.active = true;
            iconNode.destroy();
        })));
    }

    headAni(seatId) {
        if (!this.headImg){
            return;
        }
        this.headImg.stopAllActions();
        this.headImg.x = 0;
        if (seatId === 3 || seatId === 4 || seatId === 5 || seatId === playerSeatId.player_other) {
            this.headImg.runAction(cc.repeat(cc.sequence(
                cc.moveTo(0.08, -20, 0),
                cc.moveTo(0.08, 0, 0),
            ), 1));
        } else {
            this.headImg.runAction(cc.repeat(cc.sequence(
                cc.moveTo(0.08, 20, 0),
                cc.moveTo(0.08, 0, 0),
            ), 1));
        }
    }

    showMoney(money, userBet) {
        if (userBet === 0 && money === 0) {
            return;
        }
        //赢钱时玩家头像特效
        if(money > 0){
            this.winHeadAni.active = true;
            this.winHeadAni.getComponent(cc.Animation).play("hhxs_touxiangkuang");
        }
    }

    clear() {
        if (this.godIcon) {
            this.godIcon.active = false;
            this.fuHao.active = false;
            this.fu.active = false;
            this.winHeadAni.active = false;
        }
    }

    clearWinAin(){
        this.winHeadAni && (this.winHeadAni.active = false);
    }

    isSelfAni(isSelf){
        if (!this.headFrame){
            return;
        }
        if (isSelf){
            // let ani = (x = 0, y = 0)=>{
            //     return cc.moveTo(0.5,x,y);
            // }
            let posStart = [cc.v2(0, 60), cc.v2(60, 0), cc.v2(0, -60), cc.v2(-60, 0)];
            let posEnd = [cc.v2(0, 40), cc.v2(40, 0), cc.v2(0, -40), cc.v2(-40, 0)];
            this.headFrame.active = true;
            this.headFrame.getComponent(cc.Sprite).spriteFrame = this.headFrameSp[0];
            this.isSelfQuan.active = true;
            this.isSelfQuan.stopAllActions();
            this.isSelfQuan.getComponent("RedBlackFlash").flashRepeat(4, 0.2, true, 50);
            // this.isSelfAniNode.active = true;
            // for (let i = 0; i < this.isSelfAniNode.childrenCount; ++i){
            //     this.isSelfAniNode.children[i].stopAllActions();
            //     this.isSelfAniNode.children[i].runAction(cc.sequence(
            //         ani(posStart[i].x, posStart[i].y),
            //         ani(posEnd[i].x, posEnd[i].y),
            //         ani(posStart[i].x, posStart[i].y),
            //         ani(posEnd[i].x, posEnd[i].y),
            //         ani(posStart[i].x, posStart[i].y),
            //         ani(posEnd[i].x, posEnd[i].y),
            //         cc.callFunc(()=>{
            //             this.isSelfQuan.active = false;
            //             this.isSelfAniNode.active = false;
            //         }),
            //     ));
            // }
        }
    }

    stopIsSelfAni(){
        this.isSelfQuan.active = false;
        // this.isSelfAniNode.active = false;
        // this.headFrame.active = false;
        this.isSelfQuan.stopAllActions();
        this.headFrame.getComponent(cc.Sprite).spriteFrame = this.headFrameSp[0];
        // for (let i = 0; i < this.isSelfAniNode.childrenCount; ++i){
        //     this.isSelfAniNode.children[i].stopAllActions();
        // }
    }

}
