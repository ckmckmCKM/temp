
import {
    winId, showPanelIdType,
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
    @property([cc.Label])
    numLable: cc.Label[] = [];//数量统计

    trendData = []; //走势图数组 0 输赢 1 牌型 2牌路

    onLoad() {
        window.RedBlack = window.RedBlack || {};
        window.RedBlack.RedBlackDetails = this;
        // this.refreshWinPercentage(3, 97);
        // this.refreshBrandRoad();
    }

    initDetailsData(msg) {
        this.trendData = [[], [], []];
        let _redNum = 0;
        let _nums = [0, 0, 0];//红黑 all
        let _len = msg.Win.length;
        for (let i = _len - 1; i >= 0; --i) {
            if (msg.Win[i] == 1) {
                ++_nums[0];
            } else if (msg.Win[i] == 2) {
                ++_nums[1];
            }

        }
        if (_len > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[0].unshift(winId[msg.Win[_len - 1 - i]]);//splice(1, 0, winId[msg.Win[i]]);
            }
        } else {
            for (let i = 0; i < msg.Win.length; ++i) {
                this.trendData[0].push(winId[msg.Win[i]]);
            }
        }
        this.setNums(_nums);
        _redNum = _nums[0];
        if (this.trendData[0].length === 0) {
            _redNum = 50;
        } else {
            _redNum = Math.floor(_nums[0] / (_nums[0] + _nums[1]) * 100);
        }

        console.warn("_redNum = " + _redNum);
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
        if (msg.Win.length > 100) {
            for (let i = 0; i < 100; ++i) {
                this.trendData[2].unshift(msg[_len - 1 - i]);//
            }
        } else {
            for (let i = 0; i < msg.Win.length; ++i) {
                this.trendData[2].push(msg.Win[i]);
            }
        }
        this.refreshBrandRoad(this.trendData[2]);
    }

    setNums(nums) {
        for (let i = 0; i < nums.length; ++i) {
            this.numLable[i].string = nums[i] + "";
            console.warn("nums[i] = " + nums[i]);
        }
        this.numLable[2].string = "局数"+"  "+(nums[0] + nums[1]);
    }

    refreshWinPercentage(blackNum = 50, redNum = 50) {
        let _black = Math.floor(blackNum / 100 * 100) / 100;
        let _width = this.winPercentage.getContentSize().width;
        if (_black < 0.1)
            _black = 0.1;
        if (_black > 0.9)
            _black = 0.9;

        this.winPercentage.getChildByName("mask").anchorX = 1 - _black;
        this.blackPercentage.string = blackNum + "%";
        this.redPercentage.string = redNum + "%";
        let _shengFuNode = cc.find("winPercentage/shengfu", this.node);
        let _w = -_width / 2 + blackNum / 100 * _width;

        _shengFuNode.x = _w;
        if (_w > 220) {
            _shengFuNode.x = 220;
        } else if (_w < -220) {
            _shengFuNode.x = -220;
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
        if (_len > 0)
            this.winTrendChart.children[_len - 1].getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);

    }

    refreshBrandRoad(
        arr = [2,2,1,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,1
            ,2,2,2,2,1,1,2,2,1,2,2,2,2,1,1,2,1,2,1,2
            // ,1,1,1,2,2,2,2,1,2,2,2,1,2,1,1,1,1,1,1,2,2,1,2,1,2,2
        ]) {
        let arr1 = [];
        let arr2 = [];
        let _len = ((arr.length < 29) ? 29 : arr.length);
        for (let i = 0; i < _len; ++i) {
            let _arr2 = [];
            for (let j = 0; j < 6; ++j) {
                _arr2.push(-1);
            }
            arr1.push(_arr2);
            arr2.push(_arr2);
        }

        let _horizontal = 0;//第一列的横向
        let _curHorizontal = 0;//当前节点所在位置的横向
        let _vertical = 0;//当前节点所在位置的纵向
        let _isH = false; //是不是往横
        let _dataArr1 = arr1[_horizontal][_vertical];//每一局对应的子节点显示
        arr2[0][0] = winId[arr[0]];
        let _last = {
            x: -1,
            y: -1,
        };
        ++_vertical;
        _curHorizontal = _horizontal;
        for (let i = 1; i < arr.length; ++i) {
            //前一个和当前一个是否相同
            if (arr[i - 1] === arr[i]) {
                if (_isH) {
                    //_vertical _isH 不变
                    if (_vertical == 6) {
                        _vertical = 5;
                    }
                } else {
                    if (_vertical == 6) {
                        _vertical = 5;
                        ++_curHorizontal;
                        _isH = true;
                    }
                }
            } else {
                _vertical = 0;
                ++_horizontal;
                _curHorizontal = _horizontal;
                _isH = false;
            }
            _dataArr1 = arr1[_curHorizontal][_vertical];
            //被占用
            if (_dataArr1 !== -1) {
                _vertical -= 1;
                ++_curHorizontal;
                _isH = true;
                _dataArr1 = arr[_curHorizontal][_vertical];
            }
            // _dataArr = winId[arr[i]];
            arr2[_curHorizontal][_vertical] = winId[arr[i]];
            if (arr2[_curHorizontal][_vertical] != -1) {
                _last.x = _curHorizontal;
                _last.y = _vertical;
            }
            if (!_isH) {
                ++_vertical;
            } else {
                ++_curHorizontal;
            }
        }
        
        for (let i = 0; i < _len; ++i) {
            let _isOver = true;
            for (let j = 0; j < 6; ++j) {
                if (arr2[i][j] !== -1) {
                    _isOver = false;
                    break;
                }
            }
            if (_isOver) {
                arr2.splice(i, _len - 1);
                break;
            }
        }
        while (arr2.length > 29) {
            _last.x -= (arr2.length - 29);
            arr2.splice(0, arr2.length - 29);
        }
        if (arr2.length < 29) {
            let _len = 29 - arr2.length;
            for (let i = 0; i < _len; ++i) {
                let _arr2 = [];
                for (let j = 0; j < 6; ++j) {
                    _arr2.push(-1);
                }
                arr2.push(_arr2);
            }
        }

        if (this.brandRoad.childrenCount < 29) {
            this.brandRoad.removeAllChildren();
            let _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
            for (let i = 0; i < 29; ++i) {
                _brandRoad = cc.instantiate(this.brandRoadPre);
                this.brandRoad.addChild(_brandRoad);
            }
        }
        let _item = null;
        for (let i = 0; i < 29; ++i) {
            for (let j = 0; j < 6; ++j) {
                _item = this.brandRoad.children[i].children[j];
                if (arr2[i][j] !== -1){
                    _item.getComponent("RedBlackTrendChartItem").setBrandRoad(arr2[i][j]);
                    _item.opacity = 255;
                }else{
                    _item.opacity = 0;
                }
            }
        }
        if (_last.x > -1){
            _item = this.brandRoad.children[_last.x].children[_last.y];
            _item.getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
        }
        window.RedBlack.RedBlackCentrePanel.hideNoMove(showPanelIdType.quanquan);
        // this.setNums(_nums);
    }

    refreshCardTypeChart(arr = [0, 1, 2, 3, 4]) {
        this.cardTypeChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.cardTypeChartPre);
            item.getChildByName("flash").active = false;
            item.getComponent("RedBlackTrendChartItem").setCardTypeChart(this.trendData[1][i], 1);
            item.setContentSize(90, 30);
            this.cardTypeChart.addChild(item);
        }
        if (_len > 0) {
            let flashNode = this.cardTypeChart.children[_len - 1].getChildByName("flash");
            flashNode.active = true;
            flashNode.getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
        }
    }

}
