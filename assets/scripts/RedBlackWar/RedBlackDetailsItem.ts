
import {
    winId, getChipNum
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
    @property(cc.RichText)
    min: cc.RichText = null; //限红
    @property(cc.RichText)
    max: cc.RichText = null; //限红
    @property(cc.RichText)
    tableId: cc.RichText = null;
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
    @property(cc.Node)
    aniNode: cc.Node = null;
    @property([cc.SpriteFrame])
    aniSp: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    brandRoadBgs: cc.SpriteFrame[] = [];

    trendData = []; //走势图数组 0 输赢 1 牌型 2牌路
    roomId = null;
    minGold = null;
    gameStatus = null; //游戏状态
    waitTime = null;
    EntranceRestrictions = null; //入口限制
    _isOnload = true;

    onLoad() {
        // window.RedBlack.RedBlackDetailsItem = this;
        // this.refreshBrandRoad();
        this.aniNode.runAction(cc.repeatForever(
            cc.sequence(
                cc.callFunc(()=>{
                    this.aniNode.getComponent(cc.Sprite).spriteFrame = this.aniSp[0];
                }),
                cc.delayTime(0.3),
                cc.callFunc(()=>{
                    this.aniNode.getComponent(cc.Sprite).spriteFrame = this.aniSp[1];
                }),
                cc.delayTime(0.3),
            )
            ));
    }

    init(msg) {
        if (this.gameStatus == null || (this.roomId === msg.RoomID &&
            msg.GameStatus.Status != this.gameStatus)) {
            this.initDetailsData(msg.TrendList);
            let _objB = getChipNum(msg.BaseBet, true);
            let _objU = getChipNum(msg.UserLimit, true);
            this.min.string = "<i>" + (msg.BaseBet / 100) + "-</i>";//"<i>" + _objB.num + _objB.zi + "-</i>";
            this.max.string = "<i>" + (msg.UserLimit / 100) + "</i>";//"<i>" + _objU.num + _objU.zi + "</i>";
            //"限红" + (msg.BaseBet / 100) + '-' + (msg.UserLimit / 100);
            console.warn(msg.TrendList);
            this.gameStatus = msg.GameStatus.Status;
            this.refreshBetTime(msg.GameStatus.StatusTime);
        }
    }

    //刷新请下注时间
    refreshBetTime(time) {
        // console.warn("刷新请下注时间");
        let _time = Math.floor(time / 1000);
        if (this.gameStatus == rbwar.GameStatus.BetStatus) {
            this.time.string = "下注中";
            this.timeNum.node.active = true;
        } else {
            if (this._isOnload){
                this._isOnload = false;
                this.time.string = "结算中";
                this.timeNum.node.active = false;
            }
            return;
        }
        if (_time <= 1) {
            _time = 1;
        }
        this.clearTime();
        this.timeNum.string = _time + "";
        this.waitTime = setInterval(() => {
            if (_time > 1) {
                //倒计时
                --_time;
            } else {
                this._isOnload = false;
                this.time.string = "结算中";
                this.timeNum.node.active = false;
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
        for (let i = _len - 1; i >= 0; --i) {
            if (msg.Win[i] == 1) {
                ++_nums[0];
            } else if (msg.Win[i] == 2) {
                ++_nums[1];
            }
        }
        if (_len > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[0].unshift(winId[msg.Win[_len - 1 - i]]);
            }
        } else {
            for (let i = 0; i < msg.Win.length; ++i) {
                this.trendData[0].push(winId[msg.Win[i]]);
            }
        }
        this.setNums(_nums);

        // console.warn("redNum = " + _nums[0]);
        this.refreshWinTrendChart(this.trendData[0]);

        this.trendData[1] = [];
        if (msg.WinCardType.length > 10) {
            for (let i = 0; i < 10; ++i) {
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
            this.winTrendChart.addChild(item);
        }
        if (_len > 0)
            this.winTrendChart.children[_len - 1].getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
    }

    refreshBrandRoad(arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ,]) {
        let arr1 = [];
        let arr2 = [];
        let _len = ((arr.length < 30) ? 30 : arr.length);
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
        while (arr2.length > 30) {
            _last.x -= (arr2.length - 30);
            arr2.splice(0, arr2.length - 30);
        }
        if (arr2.length < 30) {
            let _len = 30 - arr2.length;
            for (let i = 0; i < _len; ++i) {
                let _arr2 = [];
                for (let j = 0; j < 6; ++j) {
                    _arr2.push(-1);
                }
                arr2.push(_arr2);
            }
        }

        if (this.brandRoad.childrenCount < 30){
            this.brandRoad.removeAllChildren();
            let _brandRoad = cc.instantiate(this.brandRoadPre);// 纵轴 最多6个子节点
            for (let i = 0; i < 30; ++i) {
                _brandRoad = cc.instantiate(this.brandRoadPre);
                this.brandRoad.addChild(_brandRoad);
            }
            this.brandRoad.children[0].getComponent(cc.Sprite).spriteFrame = this.brandRoadBgs[0];
            this.brandRoad.children[29].getComponent(cc.Sprite).spriteFrame = this.brandRoadBgs[1];
            for(let i = 0; i < 6; ++i){
                this.brandRoad.children[0].children[i].x = 2;
                this.brandRoad.children[29].children[i].x = -2;
            }
        }
        let _item = null;
        for (let i = 0; i < 30; ++i) {
            for (let j = 0; j < 6; ++j) {
                _item = this.brandRoad.children[i].children[j];
                if (arr2[i][j] !== -1) {
                    _item.getComponent("RedBlackTrendChartItem").setBrandRoadTable(arr2[i][j]);
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
    }

    refreshCardTypeChart(arr = [0, 1, 2, 3, 4]) {
        this.cardTypeChart.removeAllChildren();
        let _len = arr.length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.cardTypeChartPre);
            item.getChildByName("flash").active = false;
            item.getComponent("RedBlackTrendChartItem").setCardTypeChart(this.trendData[1][i], 0);
            item.setContentSize(49, 23);
            this.cardTypeChart.addChild(item);
        }
        if (_len > 0) {
            let flashNode = this.cardTypeChart.children[_len - 1].getChildByName("flash");
            flashNode.active = false;
            this.node.getChildByName("newFlash").getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
            // flashNode.getComponent("RedBlackFlash").flashRepeat(3, 0.3, true);
        }
    }

    updateRoomInfo(info: any, index) {
        this.roomId = info.RoomId;
        // this.minGold = info.EntranceRestrictions;
        // this.maxOrMin.string = "限红1-" + this.minGold + '';
        this.tableId.string = "<i>" + (index + 1) + "</i>";
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
