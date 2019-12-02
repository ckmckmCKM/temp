
import {getChipNum } from "./RedBlackCfg";

//游戏中几个玩家的数据
const SeatUser = {
    NikeName: "", // 用户昵称
    UserGlod: 0,//玩家金币
    BetGold: 3,//下注金币
    WinCount: 4,//赢的次数
    // Head: 0, // 头像
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackPlayerItem extends cc.Component {

    // @property(cc.Node)
    // winPercentage: cc.Node = null;

    @property(cc.Sprite)
    headImg: cc.Sprite = null;
    @property(cc.Sprite)
    godImg: cc.Sprite = null;
    @property(cc.Label)
    otherRankingLb: cc.Label = null;
    @property(cc.Label)
    nike: cc.Label = null;
    @property(cc.Label)
    score: cc.Label = null;
    @property(cc.Label)
    betingNum: cc.Label = null;
    @property(cc.Label)
    winNum: cc.Label = null;
    @property(cc.SpriteFrame)
    godOrFuSprites: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame)
    defaultHeadSp: cc.SpriteFrame = null;
    
    _curHeadUrl: "";//当前的头像

    updateInfo(userData, rankId = 0) {
        if (this.headImg && this.defaultHeadSp && this._curHeadUrl != userData.Head) {
            if (userData.Head === ""){
                this.headImg.spriteFrame = this.defaultHeadSp;
            }else{
                this._curHeadUrl = userData.Head;
                window.common.setSpriteWithUrl(this.headImg.node, userData.Head);
            }
        }
        // console.log("playerName" + this.node.name);
        this.nike.string = userData.NikeName;
        let _numObj = getChipNum(userData.UserGlod, true);
        this.score.string = _numObj.num + _numObj.zi;
        _numObj = getChipNum(userData.BetGold, true);
        this.betingNum.string = "下注：" + _numObj.num + _numObj.zi;
        this.winNum.string = "获胜：" + userData.WinCount + "局";
        
        //特殊处理 神算子或者大富豪123
        if (rankId < 4) {
            // this.godImg.node.active = true;
            this.otherRankingLb.node.active = false;
            this.godImg.spriteFrame = this.godOrFuSprites[rankId];
        } else {
            // this.godImg.node.active = false;
            this.otherRankingLb.node.active = true;
            this.otherRankingLb.string = rankId + "";
            this.godImg.spriteFrame = this.godOrFuSprites[4];
        }
    }

}
