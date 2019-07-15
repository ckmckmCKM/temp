
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";

// message UserInfo{
// 	string NikeName = 1;//昵称
// 	int64 UserGlod = 2;//玩家金币
// 	int64 BetGold = 3;//下注金币
// 	int32 WinCount =  4;//赢的次数
// }

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

    initPlayerItemData(userData = SeatUser, rankId = 0) {
        // console.log("playerName" + this.node.name);
        this.nike.string = userData.NikeName + "";
        this.score.string = userData.UserGlod + "";
        this.betingNum.string = userData.BetGold + "";
        this.winNum.string = userData.WinCount + "局";
        //特殊处理 神算子或者大富豪123
        if (rankId < 4){
            this.godImg.node.active = true;
            this.otherRankingLb.node.parent.active = false;
            this.godImg.spriteFrame = this.godOrFuSprites[rankId];
        }else{
            this.godImg.node.active = false;
            this.otherRankingLb.node.parent.active = true;
            this.otherRankingLb.string = rankId + "";
        }
    }

}
