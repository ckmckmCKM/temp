
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

//ckm cs

//游戏中几个玩家的数据
const SeatUser = {
    Nick: "", // 用户昵称
    Head: 0, // 头像
    Score: 0, // 分数
    IsBigWinner: false, // 是否是大赢家
    IsMaster: false, // 是否是神算子
    SeatId: playerSeatId.player_self, //在场景中的座位id
    betingNum:0,
    winNum:0,
}

@ccclass
export default class RedBlackPlayerList extends cc.Component {

    // @property(cc.Node)
    // winPercentage: cc.Node = null;

    @property(cc.Node)
    content: cc.Node = null;
    @property(cc.Prefab)
    item: cc.Prefab = null;

    itemPool:cc.NodePool = null;
    items = [];
    _userDatas = [];
    _startId = 0;
    _endId = 10;

    onLoad(){
        this.itemPool = new cc.NodePool();
        window.RedBlack.RedBlackPlayerList = this;
        // this.content.on("position-changed", this._updateContentView.bind(this));
        // this.initPlayerListData();
    }

    initPlayerListData(userDatas =
        [SeatUser, SeatUser, SeatUser, SeatUser, SeatUser, SeatUser, SeatUser]) {
        this.content.removeAllChildren();
        this._startId = 0;
        this._endId = 10;
        for (let i = 0; i < userDatas.length; ++i) {
            let _data = {
                userDatas: userDatas[i],
                ranking: i,
            };
            this._userDatas.push(_data);
            // if (i < this._endId) {
                let _item = this.getItem();
                _item.getComponent("RedBlackPlayerItem").initPlayerItemData(userDatas[i], i);
                this.content.addChild(_item);
                this.items.push(_item);
                // this._startId = i + 1;
            // }
        }
        
        window.RedBlack.RedBlackCentrePanel.hideNoMove(showPanelIdType.quanquan);
        // this._endId = this._startId + 10;
    }

    _updateContentView(){
        console.log("_updateContentView this._startId = " + this._startId);
        ++this._startId;
        // let _id = this._startId;
        // for (let i = _id; i < this._endId; ++i) {
        //         let _item = this.getItem();
        //         _item.getComponent("RedBlackPlayerItem").initPlayerItemData(this._userDatas[i], i);
        //         this.content.addChild(_item);
        //         this.items.push(_item);
        //         this._startId = i + 1;
        // }
        // this._endId = this._startId + 10;
    }

    //对象池
    putItem(chip: cc.Node) {
        this.itemPool.put(chip);
    }

    getItem() {
        let _node: cc.Node = null;
        if (this.itemPool.size() <= 0) {
            for (let i = 0; i < 100; ++i) {
                let _item = cc.instantiate(this.item);
                if (_item) {
                    this.itemPool.put(_item);
                } else {
                    console.error("_item = " + _item);
                }
            }
        }
        _node = this.itemPool.get();
        return _node;
    }

    close(){
        for (let i = 0; i < this.items.length; ++i){
            this.putItem(this.items[i]);
        }
        window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.playerList);
    }

}
