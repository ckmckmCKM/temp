
import {
    winId, battleAniSpeed, showPanelType,
    showPanelIdType, allArea, cardType
} from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackDetails extends cc.Component {

    @property(cc.Node)
    winPercentage: cc.Node = null;//输赢走势图（百分比） 20
    @property(cc.Node)
    winTrendChart: cc.Node = null;//胜负图 20
    @property(cc.Node)
    brandRoad: cc.Node = null;//牌路
    @property(cc.Node)
    cardTypeChart: cc.Node = null;//牌型走势图 20

    @property(cc.Label)
    blackPercentage: cc.Label = null;
    @property(cc.Label)
    redPercentage: cc.Label = null;
    //item预制体
    @property(cc.Prefab)
    winTrendChartPre: cc.Prefab = null;
    @property(cc.Prefab)
    brandRoadPre: cc.Prefab = null;
    @property(cc.Prefab)
    cardTypeChartPre: cc.Prefab = null;

    trendData = []; //走势图数组 0 输赢 1 牌型 2牌路

    onLoad() {
        window.RedBlack.RedBlackDetails = this;
    }

    initDetailsData(msg) {
        this.trendData[0] = [];
        let _redNum = 0;
        let _len = msg.Win.length;
        if (_len > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[0].unshift(winId[msg.Win[_len - 1 - i]]);//splice(1, 0, winId[msg.Win[i]]);
                if (msg.Win[i] == 1) {
                    ++_redNum;
                }
            }
        } else {
            for (let i = _len - 1; i >= 0; --i) {
                if (msg.Win[i] == 1) {
                    ++_redNum;
                }
            }
            for(let i = 0; i < msg.Win.length; ++i){
                this.trendData[0].push(winId[msg.Win[i]]);
            }
        }
        _redNum = Math.round(_redNum / _len * 100);
        this.refreshWinPercentage(100 - _redNum, _redNum);
        this.refreshWinTrendChart(this.trendData[0]);

        this.trendData[1] = [];
        if (msg.WinCardType.length > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[1].unshift(msg.WinCardType[_len - 1 - i]);//splice(1, 0, msg.WinCardType[i]);
            }
        } else {
            this.trendData[1] = msg.WinCardType;
        }
        this.refreshCardTypeChart(this.trendData[1]);

        this.trendData[2] = [];
        if (msg.Win.length > 30) {
            for (let i = 0; i < 30; ++i) {
                this.trendData[2].unshift(winId[msg[_len - 1 - i]]);//
            }
        } else {
            for(let i = 0; i < msg.Win.length; ++i){
                this.trendData[2].push(winId[msg.Win[i]]);
            }
        }
        this.refreshBrandRoad(this.trendData[2]);
    }

    refreshWinPercentage(blackNum = 50, redNum = 50) {
        let _black = Math.floor(blackNum / 100 * 100) / 100;
        // if (blackNum == 0 && redNum == 0){
        //     _black = 0.5;
        //     blackNum = 50;
        //     redNum = 50;
        // }
        // console.log("blackNum / 100 = " + _black);
        this.winPercentage.getComponent(cc.ProgressBar).progress = _black;
        this.blackPercentage.string = blackNum + "%";
        this.redPercentage.string = redNum + "%";
        let _shengFuNode = this.node.getChildByName("shengfu");
        let _w = -480 + blackNum/100*960;

        _shengFuNode.x = _w;
        if (_w > 200) {
            _shengFuNode.x = 200;
        } else if (_w < -200) {
            _shengFuNode.x = -200
        }
    }

    refreshWinTrendChart(arr = [0, 1, 0, 1, 1, 1]) {
        this.winTrendChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.winTrendChartPre);
            item.getComponent("RedBlackTrendChartItem").setTrendChart1(winId[arr[i]]);
            this.winTrendChart.addChild(item);
        }

    }

    refreshBrandRoad(arr = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        , 0, 1]) {
        this.brandRoad.removeAllChildren();
        let _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
        let _item = cc.instantiate(this.winTrendChartPre); //每一局对应的子节点显示
        _item.setPosition(0, 0);
        _item.getComponent("RedBlackTrendChartItem").setBrandRoad(winId[arr[0]]);
        _brandRoad.addChild(_item);
        this.brandRoad.addChild(_brandRoad);
        for (let i = 1; i < arr.length; ++i) {
            //长度超出不再添加
            if(this.brandRoad.childrenCount >= 26){
                return;
            }
            _item = cc.instantiate(this.winTrendChartPre); //每一局对应的子节点显示
            _item.setPosition(0, 0);
            _item.getComponent("RedBlackTrendChartItem").setBrandRoad(winId[arr[i]]);
            //前一个和当前一个是否相同
            if (arr[i - 1] === arr[i]) {
                //判断当前纵轴 子节点是否有了6个 或者本来就是多出来的
                if (_brandRoad.childrenCount === 6 ||
                    _brandRoad.getComponent(cc.Layout).verticalDirection === cc.Layout.VerticalDirection.BOTTOM_TO_TOP) {
                    //6个 就新加一个父节点
                    _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
                    _brandRoad.getComponent(cc.Layout).verticalDirection = cc.Layout.VerticalDirection.BOTTOM_TO_TOP;
                    _brandRoad.addChild(_item);
                    this.brandRoad.addChild(_brandRoad);
                } else {
                    _brandRoad.addChild(_item);
                }
            } else {
                _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
                _brandRoad.addChild(_item);
                this.brandRoad.addChild(_brandRoad);
            }
        }
        _item.getComponent("RedBlackFlash").flashForever();
    }
    refreshCardTypeChart(arr = [0, 1, 2, 3, 4]) {
        this.cardTypeChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.cardTypeChartPre);
            item.getChildByName("flash").active = false;
            item.getComponent("RedBlackTrendChartItem").setCardTypeChart(this.trendData[1][i]);
            this.cardTypeChart.addChild(item);
        }
        if (_len > 0) {
            let flashNode = this.cardTypeChart.children[_len - 1].getChildByName("flash");
            flashNode.active = true;
            flashNode.getComponent("RedBlackFlash").flashForever();
        }
    }

}
