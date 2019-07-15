
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";


//游戏中几个玩家的数据
interface SeatUser {
    Nick: "", // 用户昵称
    Head: 0, // 头像
    Score: 0, // 分数
    IsBigWinner: false, // 是否是大赢家
    IsMaster: false, // 是否是神算子
    SeatId: playerSeatId.player_self, //在场景中的座位id
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackPlayer extends cc.Component {

    // @property(cc.Node)
    // winPercentage: cc.Node = null;

    @property(cc.Prefab)
    godPre: cc.Prefab = null;
    @property(cc.Node)
    godIcon: cc.Node = null;
    @property(cc.Node)
    fuHao: cc.Node = null;
    @property(cc.Node)
    fu: cc.Node = null;
    @property(cc.Node)
    headImg: cc.Node = null;
    @property(cc.Label)
    nike: cc.Label = null;
    @property(cc.Label)
    score: cc.Label = null;
    @property(cc.Prefab)
    labelPre: cc.Prefab = null;
    @property([cc.BitmapFont])
    labelFont: cc.BitmapFont[] = [];

    isSelf: boolean = false;
    // num: number = 0;
    // isGod: boolean = true;
    playerData: SeatUser = null;

    
    subGold(gold = 0){
        if(!this.playerData){
            return;
        }
        this.playerData.Score -= gold;
        this.score.string = this.playerData.Score + "";
        return this.score.string;
    }

    addGold(money){
        if(!this.playerData){
            return;
        }
        this.playerData.Score += money;
        this.score.string = this.playerData.Score + "";
    }

    getPlayerData(){
        return this.playerData;
    }

    setScore(score){
        this.score.string = score;
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
        // this.node.active = true;
        // console.log("playerName" + this.node.name);
        this.playerData = userData;
        this.nike.string = this.playerData.Nick + "";
        this.score.string = this.playerData.Score + "";

        //如果是自己，只显示数据
        if(isSelf){
            return;
        }
        //特殊处理 既是神算子又是大富豪
        if (this.playerData.IsBigWinner && this.playerData.IsBigWinner) {
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
        // userId:number;     //玩家id
        // headId:number;     //头像id
        // gold:number;        //金币
        // rankNum:number;     //排行榜排名
        // nickName:string;   //昵称
        // sign:string;        //签名
        // token:string;       //账号
        // uuid:string;        //uuid
        console.log("initPlayerSelfData" + window.playerMng);
        // this.playerData = win;
        this.nike.string = window.playerMng.nickName + "";
        this.score.string = window.playerMng.gold + "";
    }

    //神算子标签
    golIcon_fiy(end_node_move, sprite_id = 0) {
        // if (!this.isGod) {
        //     return;
        // }
        // this.isGod = false;
        let _parent = cc.Canvas.instance.node.getChildByName("root");
        let _godIcon = cc.instantiate(this.godPre);
        let pos1 = this.godIcon.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.parent.getPosition());
        // console.log("pos1 = " + pos1);
        _godIcon.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        _parent.addChild(_godIcon);  //加载
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.parent.getPosition());
        // console.log("pos = " + pos);
        let move = cc.moveTo(0.5, pos.x, pos.y);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        _godIcon.runAction(cc.sequence(move, cc.callFunc(() => {
            end_node_move.active = true;
            _godIcon.destroy();
        })));
    }

    headAni() {
        this.headImg.stopAllActions();
        this.headImg.runAction(cc.repeat(cc.sequence(
            cc.rotateTo(0.05, 45),
            cc.rotateTo(0.05, 0),
            cc.rotateTo(0.05, -45),
            cc.rotateTo(0.05, 0),
        ), 4));
    }

    showMoney(money = 0) {
        if (money == 0){
            return;
        }
        // this.playerData.Score += money;
        // this.score.string = this.playerData.Score + "";
        let _labelNode = cc.instantiate(this.labelPre);
        let _label = _labelNode.getComponent(cc.Label);
        _label.font = (money > 0 ? this.labelFont[0] : this.labelFont[1]);
        _label.string = (money > 0 ? "+" : "") + money + "";
        _labelNode.parent = this.node;
        _labelNode.runAction(cc.sequence(
            cc.moveBy(1, cc.v2(0, 70)),
            cc.delayTime(0.3),
            cc.callFunc(() => {
                _labelNode.destroy();
            })));
    }

    clear() {
        // this.isGod = true;
        if (this.godIcon) {
            this.godIcon.active = false;
            this.fuHao.active = false;
            this.fu.active = false;
        }
    }

}
