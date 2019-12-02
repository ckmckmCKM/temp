
import {
    winId
} from "./RedBlackCfg";
import {
    rbwar
} from "./rbwar";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackDetailsItem extends cc.Component {

    @property(cc.Node)
    winTrendChart: cc.Node = null;//胜负图 20
    @property(cc.Node)
    brandRoad: cc.Node = null;//牌路
    @property(cc.Node)
    cardTypeChart: cc.Node = null;//牌型走势图 20
    @property(cc.Label)
    maxOrMin: cc.Label = null; //限红
    @property(cc.Label)
    tableId: cc.Label = null;
    @property(cc.Label)
    time: cc.Label = null;
    @property(cc.Label)
    timeNum: cc.Label = null;

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
    roomId = null;
    minGold = null;
    gameStatus = null; //游戏状态
    waitTime = null;
    EntranceRestrictions = null; //入口限制

    onLoad() {
        // window.RedBlack.RedBlackDetailsItem = this;
        // this.refreshBrandRoad();
    }

    init(msg) {
        if (this.gameStatus == null || (this.roomId === msg.RoomID &&
            msg.GameStatus.Status != this.gameStatus)) {
            this.initDetailsData(msg.TrendList);
            this.maxOrMin.string = "限红" + (msg.BaseBet / 100) + '-' + (msg.UserLimit / 100);
            console.warn(msg.TrendList);
            this.gameStatus = msg.GameStatus.Status;
            this.refreshBetTime(msg.GameStatus.StatusTime);
        }
    }

    //刷新请下注时间
    refreshBetTime(time) {
        this.clearTime();
        // console.warn("刷新请下注时间");
        let _time = Math.floor(time / 1000);
        if (this.gameStatus == rbwar.GameStatus.BetStatus) {
            this.time.string = "下注中";
            this.timeNum.node.active = true;
        } else {
            this.time.string = "结算中";
            this.timeNum.node.active = false;
            return;
        }
        this.timeNum.string = _time + "";
        this.waitTime = setInterval(() => {
            if (_time > 0) {
                //倒计时
                --_time;
            } else {
                this.clearTime();
            }
            // console.warn("_time = " + _time);
            this.timeNum.string = _time + "";
        }, 1000);
    }

    //清除下注时间
    clearTime() {
        // console.warn("清除下注时间");
        if (this.waitTime != null || this.waitTime != undefined) {
            clearInterval(this.waitTime);
            this.waitTime = null;
        }
    }

    initDetailsData(msg) {
        this.trendData = [[], [], []];
        let _nums = [0, 0, 0];//红黑 all
        let _len = msg.Win.length;
        if (_len > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[0].unshift(winId[msg.Win[_len - 1 - i]]);
                if (msg.Win[_len - 1 - i] == 1) {
                    ++_nums[0];
                } else if (msg.Win[_len - 1 - i] == 2) {
                    ++_nums[1];
                }
            }
        } else {
            for (let i = _len - 1; i >= 0; --i) {
                if (msg.Win[i] == 1) {
                    ++_nums[0];
                } else if (msg.Win[i] == 2) {
                    ++_nums[1];
                }
            }
            for (let i = 0; i < msg.Win.length; ++i) {
                this.trendData[0].push(winId[msg.Win[i]]);
            }
        }
        // this.setNums(_nums);

        // console.warn("redNum = " + _nums[0]);
        this.refreshWinTrendChart(this.trendData[0]);

        this.trendData[1] = [];
        if (msg.WinCardType.length > 7) {
            for (let i = 0; i < 7; ++i) {
                this.trendData[1].unshift(msg.WinCardType[_len - 1 - i]);//splice(1, 0, msg.WinCardType[i]);
            }
        } else {
            this.trendData[1] = msg.WinCardType;
        }
        this.refreshCardTypeChart(this.trendData[1]);

        this.trendData[2] = [];
        if (msg.Win.length > 100) {
            for (let i = 0; i < 100; ++i) {
                this.trendData[2].unshift(msg[_len - 1 - i]);
            }
        } else {
            for (let i = 0; i < msg.Win.length; ++i) {
                this.trendData[2].push(msg.Win[i]);
            }
        }
        this.refreshBrandRoad(this.trendData[2]);
    }

    setNums(nums) {
        let _len = this.numLable.length;
        for (let i = 0; i < _len; ++i) {
            this.numLable[i].string = nums[i] + "";
            // console.warn("nums[i] = " + nums[i]);
        }
    }

    refreshWinTrendChart(arr = [0, 1, 0, 1, 1, 1]) {
        this.winTrendChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.winTrendChartPre);
            item.getComponent("RedBlackTrendChartItem").setTrendChart(winId[arr[i]]);
            item.scale = 0.8;
            this.winTrendChart.addChild(item);
        }

    }

    refreshBrandRoad(arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ,]) {
        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < 100; ++i) {
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
            //长度超出不再添加
            if (_horizontal >= 26 || _curHorizontal >= 26) {
                arr.shift();
                this.refreshBrandRoad(arr);
                return;
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
            if (!_isH) {
                ++_vertical;
            } else {
                ++_curHorizontal;
            }
        }

        for (let i = 0; i < 100 - 26; ++i) {
            if (arr2[i][0] === -1 && arr2[i][5] === -1) {
                arr2.splice(i, 100 - 26);
                break;
            }
        }
        if (arr2.length > 26) {
            arr2.splice(0, arr2.length - 26);
        }

        this.brandRoad.removeAllChildren();
        let _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
        for (let i = 0; i < 26; ++i) {
            _brandRoad = cc.instantiate(this.brandRoadPre);
            this.brandRoad.addChild(_brandRoad);
        }
        let _item = null;
        let _ij = [0, 0];
        let _nums = [0, 0];
        for (let i = 0; i < 26; ++i) {
            for (let j = 0; j < 6; ++j) {
                _item = this.brandRoad.children[i].children[j];
                if (arr2[i][j] !== -1) {
                    _item.getComponent("RedBlackTrendChartItem").setBrandRoadTable(arr2[i][j]);
                    _item.opacity = 255;
                    //红
                    if (arr2[i][j] === 1) {
                        ++_nums[0];
                    } else {
                        ++_nums[1];
                    }
                    _ij[0] = i;
                    _ij[1] = j;
                }
            }
        }
        _item = this.brandRoad.children[_ij[0]].children[_ij[1]];
        _item.getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
        this.setNums(_nums);
    }

    refreshCardTypeChart(arr = [0, 1, 2, 3, 4]) {
        this.cardTypeChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.cardTypeChartPre);
            item.scale = 0.95;
            item.getChildByName("flash").active = false;
            item.getComponent("RedBlackTrendChartItem").setCardTypeChart(this.trendData[1][i]);
            this.cardTypeChart.addChild(item);
        }
        if (_len > 0) {
            let flashNode = this.cardTypeChart.children[_len - 1].getChildByName("flash");
            flashNode.active = true;
            flashNode.getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
        }
    }

    updateRoomInfo(info: any, index) {
        this.roomId = info.RoomId;
        // this.minGold = info.EntranceRestrictions;
        // this.maxOrMin.string = "限红1-" + this.minGold + '';
        this.tableId.string = (index + 1) + '';
        this.EntranceRestrictions = info.EntranceRestrictions;
        console.warn("info" + JSON.stringify(info));
        // let lbName = cc.find("Background/Label",this.node);
        // lbName.getComponent(cc.Label).string = "最低 "+this.minGold+" 进入";
    }

    startGame() {
        console.log("btn start game");
        // if (window.playerMng.gold < this.EntranceRestrictions){
        //     console.warn("您的携带金额低于入场限制，请充值！");
        //     return;
        // }
        this.gameStatus = null;
        playerMng.autoMatch(this.roomId);
    }

}
