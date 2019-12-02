
import {
    showPanelIdType, chipId,
    allArea, playerSeatId, winId,
    fapaiTime, turnCardTime, redBlackLuck, AudioType,
    getChipNum
} from "./RedBlackCfg";
import { rbwar } from "./rbwar";

const CARD_POS_X = [[-95, 0, 95], [95, 0, -95]];

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackGamePanel extends cc.Component {

    @property({ type: cc.AudioClip })
    bgMusic: cc.AudioClip = null;
    @property([cc.Node])
    betingArea: cc.Node[] = []; //下注区域
    @property(cc.Prefab)
    chipPre: cc.Prefab = null;
    @property(cc.Prefab)
    cardPre: cc.Prefab = null;
    @property(cc.Node)
    chipLayout: cc.Node = null; //可选择的筹码
    @property(cc.Node)
    vs: cc.Node = null; //vs 发牌开始位置
    @property([cc.Node])
    cardPanel: cc.Node[] = []; //牌墙 black 0 red 1
    @property([cc.Node])
    cardPanelShow: cc.Node[] = []; //牌墙 black 0 red 1
    @property([cc.Node])
    cardTypePanel: cc.Node[] = []; //牌型显示 black 0 red 1
    @property(cc.Node)
    players: cc.Node = null; //玩家座位节点 顺序排列
    @property(cc.Node)
    playersLabel: cc.Node = null; //玩家座位节点输赢分数动画 顺序排列
    @property(cc.Node)
    playersDown: cc.Node = null; //玩家点击座位 顺序排列
    @property(cc.Prefab)
    trendChartPre: cc.Prefab = null;
    @property(cc.Node)
    trendChart: cc.Node = null;
    @property(cc.Node)
    cardTypeChart: cc.Node = null;
    @property(cc.Node)
    chipMove: cc.Node = null;
    @property(cc.Node)
    tipPanel: cc.Node = null;
    @property(cc.Prefab)
    tipPre: cc.Prefab = null;
    @property(cc.Label)
    betTime: cc.Label = null;
    @property(cc.Node)
    centrePanel: cc.Node = null;
    @property([cc.Node])
    panelWinOrLoseAnis: cc.Node[] = [];
    @property(cc.Node)
    standBtn: cc.Node = null;
    // @property(cc.Node)
    // beilv_jiantou: cc.Node = null;


    /**
     * @param black_red_lucky所有区域对象的数据
     */
    betAreaDataArr = [];
    betAreaNodeArr = []; //black_red_lucky所有区域对象节点

    curSelfChooseChipId: number = 0; //自己选择的筹码下标
    chipPool: cc.NodePool; //筹码对象池
    playerSelfSeatId = 0; //自己的座位id
    trendData = []; //走势图数组 0 输赢 1 牌型
    waitTime = null;//下注倒计时
    otherTime = null;//其他计时器
    _curSeatId = -2;
    _sceneSettleInfo = null;
    _curBigWinnerSeatId = -1; // 是否是大赢家
    _curMasterSeatId = -1; // 是否是神算子
    _curBigWinnerUserId = -1; // 是否是大赢家
    _curMasterUserId = -1; // 是否是神算子
    _betPlayEffect = true; //下注音效控制
    _betPlayEffectIsOne = true; //下注音效控制是不是第一次
    _leveOk = true; //当前可不可以退出游戏
    _isNoBet = false; //自己是否下注
    _msg = null; //暂存的开牌消息
    _userBetLimit = null; //用户限额

    onLoad() {
        window.audioMng.playMusic(this.bgMusic, true);
        window.RedBlack.RedBlackGamePanel = this;
        this.chipPool = new cc.NodePool();
        this.clearAll();
        this.clearcardPanel();

        cc.game.on(cc.game.EVENT_HIDE, function () {
            // console.warn("游戏进入后台");
            // this.onHideGame();//处理游戏切到后台时的事件
        }, this);

        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.warn("后台重新返回游戏");
            this.onShowGame();//处理游戏切回前台时的事件
        }, this);

    }

    onShowGame() {
        let _len = this.trendChart.childrenCount;
        if (_len > 20) {
            for (let i = 0; i < _len - 20; ++i) {
                this.trendChart.children[i].destroy();
            }
        }
        _len = this.cardTypeChart.childrenCount;
        if (_len > 7) {
            for (let i = 0; i < _len - 7; ++i) {
                this.cardTypeChart.children[i].destroy();
            }
        }
        switch (window.RedBlack.RedBlackMsg.gameStatus) {
            case rbwar.GameStatus.StartStatus: {
                console.warn("GameStatus000000");
                this.setCardBack(true, true);
            }
                break;
            case rbwar.GameStatus.StartMovie: {
                console.warn("开始动画");
                this.setCardBack(true, true);
            }
                break;
            case rbwar.GameStatus.BetStatus: {
                console.warn("下注阶段");
                this.setCardBack(true, true);
            }
                break;
            case rbwar.GameStatus.EndBetMovie: {
                console.warn("结束下注动画");
                this.setCardBack(true, true);
            }
                break;
            case rbwar.GameStatus.SettleStatus: {
                console.warn("结算阶段");
                this.setCardBack(false, true);
                if (this._msg) {
                    this.showResult(this._msg, 0, true);
                    this.showResult(this._msg, 1, true);
                    this.showResult1(this._msg, false);
                } else {
                    this.setCardBack(true, true);
                }
            }
                break;
        }
    }

    setCardBack(back, isShowPanel) {
        for (let i = 0; i < this.cardPanelShow.length; ++i) {
            this.cardPanelShow[i].active = isShowPanel;
            this.cardTypePanel[i].active = !isShowPanel;
            this.cardPanel[i].active = !isShowPanel;
            let _panel = this.cardPanelShow[i];
            for (let j = 0; j < _panel.childrenCount; ++j) {
                _panel.children[j].stopAllActions();
                _panel.children[j].children[0].active = back;
                _panel.children[j].scale = 1;
            }
        }
    }

    setPlayerSelfData() {
        // 初始化玩家信息
        this.players.children[playerSeatId.player_self].getComponent("RedBlackPlayer").initPlayerSelfData();
    }

    onDestroy() {
        this.chipPool.clear();
    }

    clearAll() {
        //神算子标签 胜利闪烁
        for (let i = 0; i < this.betingArea.length; ++i) {
            let _betArea = this.betingArea[i];
            _betArea.getChildByName("godIcon").active = false;
            _betArea.getChildByName("winBg").active = false;
            _betArea.getChildByName("otherBet").getComponent(cc.Label).string = "0";
            _betArea.getChildByName("selfBg").getChildByName("selfBet").getComponent(cc.Label).string = "下注：0";
            _betArea.getChildByName("selfBg").active = false;
        }
        for (let i = 0; i < 3; ++i) {
            this.betAreaNodeArr[i] = [];
            this.betAreaDataArr[i] = {
                selfBet: 0,
                otherBet: 0,
            };
        }
        //玩家信息
        //玩家信息
        for (let i = 0; i < this.players.childrenCount; ++i) {
            let _playerJs = this.players.children[i].getComponent("RedBlackPlayer");
            if (_playerJs) {
                _playerJs.clearWinAin();
            }
        }

        //顶部动画
        this.panelWinOrLoseAnis[0].active = false;
        this.panelWinOrLoseAnis[2].active = false;
        let _black = this.panelWinOrLoseAnis[1];
        let _red = this.panelWinOrLoseAnis[3];
        _black.getComponent(sp.Skeleton).setAnimation(1, "king_daiji", true);
        _red.getComponent(sp.Skeleton).setAnimation(1, "queen_daiji", true);
        //清理筹码面板上的所有筹码
        this.chipMove.removeAllChildren();
    }

    //置灰筹码
    setChipButton() {
        if (chipId.length == 0) {
            console.warn("chipId.length = " + chipId.length);
            return;
        }
        let _playerScore = this.players.children[playerSeatId.player_self].
            getComponent("RedBlackPlayer").getPlayerData().Score;
        let _len = this.chipLayout.childrenCount;
        if (this.curSelfChooseChipId === -1) {
            if (_playerScore < chipId[0]) {
                for (let i = _len - 1; i >= 0; --i) {
                    this.chipLayout.children[i].getChildByName("button").getComponent(cc.Button).interactable = false;
                    this.chipLayout.children[i].getChildByName("lableLayout").active = true;
                    this.chipLayout.children[i].getChildByName("select").active = false;
                }
                return;
            }
            this.curSelfChooseChipId = 0;
            this.chipLayout.children[0].getChildByName("select").active = true;
            this.chipLayout.children[0].getChildByName("lableLayout").active = false;
        }
        for (let i = _len - 1; i >= 0; --i) {
            if (_playerScore >= chipId[i] &&
                this._userBetLimit - this.betAreaDataArr[0].selfBet -
                this.betAreaDataArr[1].selfBet -
                this.betAreaDataArr[2].selfBet >= chipId[i]) {
                this.chipLayout.children[i].getChildByName("button").getComponent(cc.Button).interactable = true;
                this.chipLayout.children[i].getChildByName("lableLayout").active = true;
            } else {
                if (this.chipLayout.children[i].getChildByName("button").getComponent(cc.Button).interactable) {
                    this.chipLayout.children[this.curSelfChooseChipId].getChildByName("select").active = false;
                    this.chipLayout.children[this.curSelfChooseChipId].getChildByName("lableLayout").active = true;
                    if (this.curSelfChooseChipId != 0 || i === 0) {
                        if (this.curSelfChooseChipId >= i) {
                            this.curSelfChooseChipId = i - 1;
                        }
                    }
                    if (this.curSelfChooseChipId > -1) {
                        this.chipLayout.children[this.curSelfChooseChipId].getChildByName("select").active = true;
                        this.chipLayout.children[this.curSelfChooseChipId].getChildByName("lableLayout").active = false;
                    }
                }
                this.chipLayout.children[i].getChildByName("button").getComponent(cc.Button).interactable = false;
            }
        }
    }

    //筹码回收 msg.UserWin, msg.Win
    recoveryChip(userWin, userBet, winindex, score, msg) {
        //输的区域到系统  msg.UserWinRed + msg.LuckWin +  + msg.UserWinBlack;
        this.recoveryChipToSystem([msg.Win === 2, msg.Win === 1, msg.IsLuck]);
        //系统到赢的区域
        this.otherTime = setTimeout(() => {
            this.recoveryChipToWinArea([msg.Win === 2, msg.Win === 1, msg.IsLuck]);
        }, 700);

        // 赢的区域到玩家
        // 赢的前重新创建筹码
        this.otherTime = setTimeout(() => {
            if (this.chipMove.childrenCount > 0) {
                window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.JieSuanChouMa), false);
            }
            this.showWinChip();
            let _player = this.players.children[playerSeatId.player_other];
            let _playerSelf = this.players.children[playerSeatId.player_self];
            _playerSelf.getComponent("RedBlackPlayer").showMoney(userWin, userBet);
            this.playersLabel.getComponent("RedBlackLabelLayer").showMoney(userWin, userBet, this.playersLabel.children[playerSeatId.player_self]);
            _playerSelf.getComponent("RedBlackPlayer").setScoreNum(score);
            if (userWin > 0) {
                this.switchBetArea(winindex, userWin, playerSeatId.player_self, true);
            }
            for (let i = 0; i < this.betAreaNodeArr.length; ++i) {
                let _betArr = this.betAreaNodeArr[i];
                let _betArea = this.betingArea[i];
                let offPos = cc.v2(0, 0); //this.getPosOff(_betArea.getChildByName("betArea"));
                for (let j = 0; j < _betArr.length; ++j) {
                    let _chip = _betArr[j];
                    let _chipJs = _chip.getComponent("RedBlackChipItem");
                    _chipJs.chip_recovery(_player, offPos, true, true);
                }
            }
        }, 1300);
    }

    //输的区域到系统
    recoveryChipToSystem(msg) {
        let _haveLose = false;
        for (let i = 0; i < this.betAreaNodeArr.length; ++i) {
            let _betArr = this.betAreaNodeArr[i];
            let offPos = this.getPosOff(this.vs);
            offPos.y += 150;
            if (!msg[i]) {
                for (let j = 0; j < _betArr.length; ++j) {
                    _haveLose = true;
                    let _chip = _betArr[j];
                    let _chipJs = _chip.getComponent("RedBlackChipItem");
                    _chipJs.chip_recovery(this.vs, offPos, false, false);
                }
            }
        }
        if (_haveLose) {
            window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.JieSuanChouMa), false);
        }
    }

    //系统到赢的区域
    recoveryChipToWinArea(msg) {
        let _winNum = [];
        let _LoseArr = [];
        for (let i = 0; i < msg.length; ++i) {
            if (msg[i]) {
                _winNum.push(i);
            } else {
                _LoseArr.push(i);
            }
        }
        for (let i = 0; i < _LoseArr.length; ++i) {
            for (let j = 0; j < this.betAreaNodeArr[_LoseArr[i]].length; ++j) {
                let _betArr = this.betAreaNodeArr[_LoseArr[i]][j];
                let _chip = this.betAreaNodeArr[_LoseArr[i]][j];
                if (_chip) {
                    let _index = Math.floor(Math.random() * _winNum.length);
                    if (this.betAreaDataArr[_winNum[_index]].otherBet <= 0) {
                        this.putChip(_chip);
                    } else {
                        let _betArea = this.betingArea[_winNum[_index]];
                        let _chipJs = _chip.getComponent("RedBlackChipItem");
                        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));
                        _chipJs.chip_recovery(_betArea.getChildByName("betArea"), offPos, false, true);
                    }
                }
            }
        }
    }

    showWinOneChip(areaId, _curBetId, seatId, addTime = 0) {
        let _betIndex = _curBetId;
        let chipJs = this.getChip(_betIndex);
        let _betArea = this.betingArea[areaId];
        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));

        let _player = this.players.children[seatId];
        // console.log("seatId = " + seatId);
        chipJs.chip_fiy_win(
            _betArea.getChildByName("betArea"),
            _player,
            offPos,
            addTime,
            _betIndex,
        );
    }

    //玩家坐下
    clerarDown() {
        //玩家信息
        for (let i = 0; i < this.players.childrenCount; ++i) {
            let _playerJs = this.players.children[i].getComponent("RedBlackPlayer");
            if (_playerJs) {
                _playerJs.clear();
            }
        }
        //玩家坐下
        for (let i = 0; i < this.playersDown.childrenCount; ++i) {
            this.playersDown.children[i].active = true;
            this.players.children[i].active = false;
        }
    }

    //清除牌墙信息
    clearcardPanel() {
        for (let i = 0; i < this.cardPanel.length; ++i) {
            this.cardPanel[i].removeAllChildren();
            this.cardPanel[i].getComponent(cc.Layout).enabled = false;
            for (let j = 0; j < this.cardPanelShow[i].childrenCount; ++j) {
                this.cardPanelShow[i].children[j].children[0].active = true;
            }
            this.cardPanelShow[i].active = false;
            this.cardPanel[i].active = true;
            //牌型显示
            this.cardTypePanel[i].active = false;
        }
    }

    //设置是否玩家坐下
    setPlayerIsDawn(isDown, seatId) {
        this.playersDown.children[seatId].active = !isDown;
        this.players.children[seatId].active = isDown;
    }

    //点击坐下
    onClickDown(event, customEventData) {
        let _seatId = parseInt(customEventData);
        // //红黑幸运一击 下注的下标
        window.RedBlack.RedBlackMsg.sendMsgRequestUserSitDown(_seatId);
    }

    //清除神算子标签
    clearGodIcon() {
        for (let j = 0; j < this.betingArea.length; ++j) {
            let _betArea = this.betingArea[j];
            _betArea.getChildByName("godIcon").active = false;
        }
    }

    //坐下成功 场景消息处理
    refreshScene(msg) {
        // console.warn("场景消息处理 " + JSON.stringify(msg));
        let _userData = msg.UserData;
        let _isSelfDown = false;
        this.clerarDown();
        if (_userData.length === 0) {
            this.clearGodIcon();
        }
        for (let i = 0; i < _userData.length; ++i) {
            let _player = this.players.children[playerSeatId.player_self];
            let _playerJs = _player.getComponent("RedBlackPlayer");
            //-------2019.7.16
            if (_userData[i].IsMaster && _userData[i].SeatId != 0) {
                if (this._curMasterSeatId != -1 && this._curMasterSeatId != _userData[i].SeatId
                    && this._curMasterUserId != -1 && this._curMasterUserId != _userData[i].UserID) {
                    let _seatId = _userData[i].SeatId - 1;
                    let _player = this.players.children[_seatId];
                    let _playerJs = _player.getComponent("RedBlackPlayer");
                    let _lastMasterPlayer = this.players.children[this._curMasterSeatId];
                    let _newIcon = cc.instantiate(_player.getChildByName("head").getChildByName("godIcon"));
                    _playerJs.golIcon_Move(_newIcon, _lastMasterPlayer.getChildByName("head").getChildByName("godIcon"),
                        _player.getChildByName("head").getChildByName("godIcon"));
                    //清除神算子标签 2019 8 21
                    this.clearGodIcon();
                }
                this._curMasterSeatId = _userData[i].SeatId - 1;
                this._curMasterUserId = _userData[i].UserID;
            }
            if (_userData[i].IsBigWinner && _userData[i].SeatId != 0) {
                if (this._curBigWinnerSeatId != -1 && this._curBigWinnerSeatId != _userData[i].SeatId
                    && this._curBigWinnerUserId != -1 && this._curBigWinnerUserId != _userData[i].UserID) {
                    let _seatId = _userData[i].SeatId - 1;
                    let _player = this.players.children[_seatId];
                    let _playerJs = _player.getComponent("RedBlackPlayer");
                    let _lastMasterPlayer = this.players.children[this._curBigWinnerSeatId];
                    let _newIcon = cc.instantiate(_player.getChildByName("head").getChildByName("dafuhaotubiao"));
                    _playerJs.golIcon_Move(_newIcon, _lastMasterPlayer.getChildByName("head").getChildByName("dafuhaotubiao"),
                        _player.getChildByName("head").getChildByName("dafuhaotubiao"));
                    this._curBigWinnerSeatId = _userData[i].SeatId - 1;
                    this._curBigWinnerUserId = _userData[i].UserID;
                }
            }
            //-------
            if (_userData[i].UserID == window.playerMng.userId) {
                _isSelfDown = true;
                _player = this.players.children[playerSeatId.player_self];
                _playerJs = _player.getComponent("RedBlackPlayer");
                if (_userData[i].SeatId != 0) {
                    let _seatId = _userData[i].SeatId - 1;
                    _playerJs.initPlayerData(_userData[i], true);
                    _player = this.players.children[_seatId];
                    _playerJs = _player.getComponent("RedBlackPlayer");
                    // console.warn("_userData[i].SeatId = " + _userData[i].SeatId);
                    _playerJs.isSelfAni(this._curSeatId != _seatId);
                    _playerJs.initPlayerData(_userData[i]);
                    this.setPlayerIsDawn(true, _seatId);
                    this._curSeatId = _userData[i].SeatId - 1;
                } else {
                    _playerJs.initPlayerData(_userData[i], true);
                }
            } else {
                let _seatId = _userData[i].SeatId - 1;
                _player = this.players.children[_seatId];
                _playerJs = _player.getComponent("RedBlackPlayer");
                _playerJs.stopIsSelfAni();
                // console.warn("_userData[i]....SeatId = " + _userData[i].SeatId);
                _playerJs.initPlayerData(_userData[i]);
                this.setPlayerIsDawn(true, _seatId);
            }
        }
        this.standBtn.active = _isSelfDown;
    }

    //点击下注 
    onClickBetint(event, customEventData) {
        //筹码全部置灰的时候 没有初始化 不能点击下注
        if (chipId.length == 0 || !window.RedBlack.RedBlackMsg.isBetingOk) {
            return;
        }
        let _playerScore = this.players.children[playerSeatId.player_self].
            getComponent("RedBlackPlayer").getPlayerData().Score;
        if (this.curSelfChooseChipId < 0) {
            let _str = "您已达到总下注额度限制！";
            if (_playerScore < chipId[0]) {
                _str = "您的余额不足！";
            }
            this.setTip(_str);
            return;
        }
        this.setChipButton();
        //this.showBetTing(customEventData);
        let _areaId = parseInt(customEventData);
        //红黑幸运一击 下注的下标
        window.RedBlack.RedBlackMsg.sendMsgRequestBetsResult(redBlackLuck[_areaId], this.curSelfChooseChipId);
    }

    //点击选择下注筹码Id 默认0
    onClickChooseChip(event, customEventData) {
        this.chipLayout.children[this.curSelfChooseChipId].getChildByName("select").active = false;
        this.curSelfChooseChipId = parseInt(customEventData);
        this.chipLayout.children[this.curSelfChooseChipId].getChildByName("select").active = true;
    }

    //收到服务器下注消息
    //下注区域 
    showBetTing(msg) {
        // int32 SeatId = 1;//座位号 1开始
        // int32 BetIndex = 2;//下注的下标
        // int32 BetType = 3;//红黑幸运一击
        // int64 UserID=4;//用户ID

        let _data = {
            SeatId: msg.SeatId,
            BetIndex: msg.BetIndex,
            BetType: redBlackLuck[msg.BetType],
            UserID: msg.UserID,
        };

        let _chipNode = null//this.getChip();
        let _chipJs = null;
        // this.betAreaNodeArr[_data.BetType].push(_chipNode);

        let _isSelf = _data.UserID == window.playerMng.userId;
        let _goldNum = chipId[_data.BetIndex];
        let _betArea = this.betingArea[_data.BetType];
        if (_isSelf) {
            console.log("self bet = " + JSON.stringify(_data));
            this._isNoBet = true;
            _betArea.getChildByName("selfBg").active = true;
            this.betAreaDataArr[_data.BetType].selfBet += _goldNum;
            this.betAreaDataArr[_data.BetType].otherBet += _goldNum;
            //自己有下注这一轮就不让i推出游戏
            this._leveOk = false;
        } else {
            console.log("other bet = " + JSON.stringify(_data));
            this.betAreaDataArr[_data.BetType].otherBet += _goldNum;
        }
        let _numObj = getChipNum(this.betAreaDataArr[_data.BetType].otherBet, true);
        _betArea.getChildByName("otherBet").getComponent(cc.Label).string
            = _numObj.num + _numObj.zi;
        _numObj = getChipNum(this.betAreaDataArr[_data.BetType].selfBet, true);
        _betArea.getChildByName("selfBg").getChildByName("selfBet").getComponent(cc.Label).string
            = "下注：" + _numObj.num + _numObj.zi;

        let _seatId = _data.SeatId - 1;
        if (_data.SeatId === 0) {
            _seatId = playerSeatId.player_other;
        }
        let _player = this.players.children[_seatId];
        let _playerJs = _player.getComponent("RedBlackPlayer");
        //判断是不是自己下注
        //自己
        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));
        let _angle = Math.ceil(Math.random() * 90) - 45;
        if (_isSelf) {
            if (this._betPlayEffectIsOne) {
                this._betPlayEffectIsOne = false;
                this._betPlayEffect = false;
                window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.XiaZhu1), false);
                this.otherTime = setTimeout(() => {
                    this._betPlayEffect = true;
                }, 500);
            }
            if (this._betPlayEffect) {
                this._betPlayEffect = false;
                window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.XiaZhu2), false);
                this.otherTime = setTimeout(() => {
                    this._betPlayEffect = true;
                }, 300);
            }
            let _playerSelf = this.players.children[playerSeatId.player_self];
            let _playerSelfJs = _playerSelf.getComponent("RedBlackPlayer");
            if (_data.SeatId != 0) {
                let _str = _playerSelfJs.subGold(_goldNum);
                _playerJs = _player.getComponent("RedBlackPlayer");
                _playerJs.setScore(_str);
            } else {
                _playerSelfJs.subGold(_goldNum);
            }
            //头像摇晃
            this.playerHeadAni(playerSeatId.player_self);
            _chipJs = this.getChip(_data.BetIndex,_data.BetType);

            _chipJs.chip_fiy(
                _playerSelf,
                _betArea.getChildByName("betArea"),
                offPos,
                _angle,
                _data.BetIndex,
            );
            if (_data.SeatId !== 0) {
                _chipJs = this.getChip(_data.BetIndex,_data.BetType);
                _chipJs.chip_fiy(
                    _player,
                    _betArea.getChildByName("betArea"),
                    offPos,
                    _angle,
                    _data.BetIndex,
                );
                //头像摇晃
                this.playerHeadAni(_seatId);
            }

            //下注成功的闪烁
            let _node = _betArea.getChildByName("betingFlash");
            this.flash(_node, 3);

            //置灰筹码
            this.setChipButton();
        } else {
            if (this._betPlayEffect) {
                this._betPlayEffect = false;
                window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.XiaZhu2), false);
                this.otherTime = setTimeout(() => {
                    this._betPlayEffect = true;
                }, 300);
            }
            _playerJs.subGold(_goldNum);
            //头像摇晃
            this.playerHeadAni(_seatId);
            //其他
            _chipJs = this.getChip(_data.BetIndex,_data.BetType);
            _chipJs.chip_fiy(
                _player,
                _betArea.getChildByName("betArea"),
                offPos,
                _angle,
                _data.BetIndex,
            );

        }
        //神算子下注
        if (_playerJs && _playerJs.getIsMaster()) {
            _playerJs.golIcon_fiy(_betArea.getChildByName("godIcon"));
        }
    }

    //ckm cs -----------------
    num = 0;
    //神算子下注标签
    cstt() {
        let _betArea = this.betingArea[0];
        if (this.num > 6) {
            this.num = 0;
        }
        let _player = this.players.children[this.num];
        ++this.num;
        let _playerJs = _player.getComponent("RedBlackPlayer");
        _playerJs.golIcon_fiy(_betArea.getChildByName("godIcon"));
    }
    //开牌
    ttttrunCard() {
        this.turnCard();
    }
    //神算子换位子
    tttChangeSehng() { }
    //--------------------------

    getPosOff(end_node_move) {
        let _range = end_node_move.getContentSize(); //终点范围
        _range.width = _range.width - 50;//this.node.getContentSize().width / 2;
        _range.height = _range.height - 50;//this.node.getContentSize().height / 2;
        let _offX = Math.ceil(Math.random() * _range.width) - _range.width / 2;
        let _offY = Math.ceil(Math.random() * _range.height) - _range.height / 2;
        return cc.v2(_offX, _offY);
    }

    //开始动画
    StartMovie(StatusTime) {
        // console.log("-------------------111111111111111");
        this.clearAll();
        this.setChipButton();
        this._isNoBet = false;
        this._betPlayEffectIsOne = true;

        window.RedBlack.RedBlackCentrePanel.showAni(showPanelIdType.battleAni);
        window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.QianZou), false);
        this.otherTime = setTimeout(() => {
            window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.RuChang), false);
        }, 500);

        this.otherTime = setTimeout(() => {

            window.RedBlack.RedBlackCentrePanel.hideNoMove(showPanelIdType.battleAni);
            this.clearcardPanel();
            // setTimeout(() => {//发牌
            this.dealCards();
            //开始下注动画
            window.RedBlack.RedBlackCentrePanel.showAniDefault(showPanelIdType.startBet);
            window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.KaisShiXiaZhu), false);
            // }, 300);

        }, 1500);
    }

    //发牌
    dealCards(seatId = 0, cardId = 0) {
        window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.FanPai), false);
        // console.log("发牌: " + seatId + "  " + cardId);
        let self = this;
        let _card = cc.instantiate(this.cardPre);
        _card.setPosition(this.vs.getPosition());
        let _cardJs = _card.getComponent("RedBlackCard");
        let _panel = this.cardPanel[seatId];
        _card.parent = this.node;
        _card.scale = 0.2;
        let _pos = this.cardPanel[seatId].getPosition();
        _pos.x = _pos.x + CARD_POS_X[seatId][cardId];
        let _ac = cc.spawn(cc.scaleTo(fapaiTime, 1, 1), cc.moveTo(fapaiTime, _pos));
        _card.runAction(cc.sequence(_ac, cc.callFunc(() => {
            _card.parent = this.cardPanel[seatId];
            _card.setPosition(CARD_POS_X[seatId][cardId], 0);
            if (cardId == 2) {
                this.cardPanel[seatId].getComponent(cc.Layout).enabled = true;
                this.cardPanel[seatId].active = false;
                this.cardPanelShow[seatId].active = true;
                if (seatId == 1) {
                    // console.warn("牌发完了");
                    return;
                }
                ++seatId;
                cardId = 0;
            } else {
                ++cardId;
            }
            this.dealCards(seatId, cardId);
        })));
    }

    //开牌
    turnCard(seatId = 0, cardId = 0, msg = null) {
        // console.log("开牌: " + seatId + "  " + cardId);
        let self = this;
        let _card = this.cardPanelShow[seatId].children[cardId];
        if (_card == undefined) {
            console.warn("_card == undefined");
            return;
        }
        let _cardJs = _card.getComponent("RedBlackCard");
        let _ac = null;
        if (cardId == 2) {
            _ac = cc.sequence(
                cc.scaleTo(turnCardTime * 2, 1.3, 1.3),
                cc.scaleTo(turnCardTime * 2, 0, 1.3),
                cc.callFunc(() => {
                    _cardJs.setBack(false);
                    window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.FanPai), false);
                }),
                cc.scaleTo(turnCardTime * 2, 1.3, 1.3),//.easing(cc.easeOut(3.0)),
                cc.delayTime(0.2),
                cc.scaleTo(turnCardTime * 1.5, 1, 1),//.easing(cc.easeIn(3.0)),
            );
        } else {
            _ac = cc.sequence(
                cc.scaleTo(turnCardTime, 0, 1).easing(cc.easeIn(3.0)),
                cc.callFunc(() => {
                    _cardJs.setBack(false);
                    window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.FanPai), false);
                }),
                cc.scaleTo(turnCardTime, 1, 1).easing(cc.easeIn(3.0)),
            );
        }
        _card.runAction(cc.sequence(_ac, cc.callFunc(() => {
            if (cardId == 2) {
                this.showResult(msg, seatId, false);
                this.cardPanelShow[seatId].getComponent(cc.Layout).enabled = true;
                if (seatId == 1) {
                    // console.warn("牌翻完了");
                    this.showResult1(msg, false);

                    //如果详情面板是打开的就再请求刷新一次详情
                    console.log("this.centrePanel.children[showPanelIdType.details].active = " +
                        this.centrePanel.children[showPanelIdType.details].active);
                    if (this.centrePanel.children[showPanelIdType.details].active) {
                        //请求详情
                        window.RedBlack.RedBlackMsg.sendMsgRequestGetTrend();
                    }
                    return;
                }
                ++seatId;
                cardId = 0;
            } else {
                ++cardId;
            }
            this.turnCard(seatId, cardId, msg);
        })));
    }

    showResult(msg, cardTypePanelId, isback) {
        //UserWin

        // //胜利闪烁
        let _winId = winId[msg.Win];
        //牌型

        // let _cardsType = ["", "单张", "对子", "顺子", "金花", "顺金", "豹子"];
        this.cardTypePanel[cardTypePanelId].active = true;
        //先隐藏
        for (let i = 0; i < this.cardTypePanel[cardTypePanelId].childrenCount; ++i) {
            this.cardTypePanel[cardTypePanelId].children[i].active = false;
        }
        if (_winId == cardTypePanelId) {
            let _aniNode = this.cardTypePanel[cardTypePanelId].children[msg.WinCardType - 1];
            _aniNode.active = true;
            let _ani = _aniNode.getComponent(cc.Animation);
            let _name = _ani.defaultClip.name;
            _ani.play(_name);

            //牌型音效
            !isback && window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(msg.WinCardType), false);
        } else {
            let _aniNode = this.cardTypePanel[cardTypePanelId].children[msg.LoseCardType - 1];
            _aniNode.active = true;
            let _ani = _aniNode.getComponent(cc.Animation);
            let _name = _ani.defaultClip.name;
            _ani.play(_name);
            //牌型音效
            !isback && window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(msg.LoseCardType), false);
        }
    }

    showResult1(msg, isBack) {
        //UserWin
        //int64 LuckWin = 7; //幸运一击赢钱

        //胜利闪烁
        let _winId = winId[msg.Win];
        let _betArea = this.betingArea[_winId];
        _betArea.getChildByName("winBg").active = true;
        _betArea.getChildByName("winBg").getComponent("RedBlackFlash").flashRepeat(6, 0.3, true);

        //顶部动画
        let _index = 0;
        let _black = this.panelWinOrLoseAnis[1];
        let _red = this.panelWinOrLoseAnis[3];
        if (_winId === 0) {
            this.panelWinOrLoseAnis[0].active = true;
            _black.getComponent(sp.Skeleton).setAnimation(1, "honghei_kingwin", false);
        } else {
            this.panelWinOrLoseAnis[2].active = true;
            _red.getComponent(sp.Skeleton).setAnimation(1, "queen_win", false);
        }

        //刷新走势图
        this.refreshSceneList(_winId, msg.WinCardType);

        //int64 LuckWin = 7; //幸运一击赢钱
        console.warn("msg.LuckWin = " + msg.LuckWin);
        if (msg.IsLuck) {
            let _cardType = msg.LoseCardType;
            if (msg.WinCardType > msg.LoseCardType) {
                _cardType = msg.WinCardType;
            }
            this.betingArea[2].getChildByName("winBg").active = true;
            this.betingArea[2].getChildByName("winBg").getComponent("RedBlackFlash").flashRepeat(6, 0.3, true);
        }

        //筹码回收 int32 Win = 3; // 1表示红胜利，2表示黑方胜利
        let _userWin = msg.UserTotalWin;//msg.UserWinRed + msg.LuckWin + + msg.UserWinBlack;
        let _userBet = msg.UserBetRed + msg.UserBetBlack + + msg.UserBetLuck;
        let _score = msg.UserScore;
        // let _index = _id[msg.Win];

        this.otherTime = setTimeout(() => {
            this.recoveryChip && this.recoveryChip(_userWin, _userBet, _winId, _score, msg);
        }, 2500);
    }

    //赢的前重新创建筹码
    showWinChip() {
        if (this._sceneSettleInfo == null) {
            return;
        }
        for (let i = 0; i < this._sceneSettleInfo.length; ++i) {
            let _data = this._sceneSettleInfo[i];
            let _player = this.players.children[_data.SceneSeatID - 1];
            if (_player.active) {
                this.switchBetArea(allArea.red, _data.RedWin, _data.SceneSeatID - 1, true);
                this.switchBetArea(allArea.black, _data.BlackWin, _data.SceneSeatID - 1, true);
                this.switchBetArea(allArea.lucky, _data.LuckWin, _data.SceneSeatID - 1, true);

                let _userWin = this._sceneSettleInfo[i].UserTotalWin;
                let _userBet = _data.BetRed + _data.BetBlack + _data.BetLuck;
                if (_data.SceneSeatID != 0) {
                    _player.getComponent("RedBlackPlayer").showMoney(_userWin, _userBet);
                    this.playersLabel.getComponent("RedBlackLabelLayer").showMoney(_userWin, _userBet, this.playersLabel.children[_data.SceneSeatID - 1]);
                    _player.getComponent("RedBlackPlayer").setScoreNum(_data.UserScore);
                }
            }
        }
        this._sceneSettleInfo = null;
        //自己有下注这一轮就不让i推出游戏
        this._leveOk = true;
    }

    getLeveOk() {
        return this._leveOk;
    }

    //结算信息 win 1红 2黑
    refreshSettle(msg) {
        this._msg = msg;
        // console.warn("结算信息============");
        let _blackPoker = msg.BlackPoker;
        let _redPoker = msg.RedPoker;
        for (let i = 0; i < _blackPoker.length; ++i) {
            let _card = this.cardPanelShow[0].children[i];
            if (!_card) {
                console.warn("_card = " + _card);
                console.warn("_blackPoker = " + _blackPoker);
                console.warn("_redPoker = " + _redPoker);
                return;
            }
            let _cardJs = _card.getComponent("RedBlackCard");
            let _characters = _blackPoker[i] >> 4;//Math.floor(_blackPoker / 16);
            let _flowerColor = _blackPoker[i] & 0x0f;
            // console.warn("_blackPoker characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);

            _card = this.cardPanelShow[1].children[i];
            _cardJs = _card.getComponent("RedBlackCard");
            _characters = _redPoker[i] >> 4;//Math.floor(_redPoker[i] / 16);
            _flowerColor = _redPoker[i] & 0x0f;//_redPoker[i] % 16;
            // console.warn("_redPoker characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);
        }
        this.turnCard(0, 0, msg);
    }

    //用户回来
    userComeBack(msg) {
        this.onloadScene(msg);
        this._msg = msg;
        // console.warn("结算信息============");
        let _blackPoker = msg.BlackPoker;
        let _redPoker = msg.RedPoker;
        for (let i = 0; i < _blackPoker.length; ++i) {
            let _card = this.cardPanelShow[0].children[i];
            if (!_card) {
                console.warn("_card = " + _card);
                console.warn("_blackPoker = " + _blackPoker);
                console.warn("_redPoker = " + _redPoker);
                return;
            }
            _card.children[0].active = false;
            this.showResult(msg, 0, true);
            let _cardJs = _card.getComponent("RedBlackCard");
            let _characters = _blackPoker[i] >> 4;//Math.floor(_blackPoker / 16);
            let _flowerColor = _blackPoker[i] & 0x0f;
            // console.warn("_blackPoker characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);

            _card = this.cardPanelShow[1].children[i];
            _card.children[0].active = false;
            this.showResult(msg, 1, true);
            _cardJs = _card.getComponent("RedBlackCard");
            _characters = _redPoker[i] >> 4;//Math.floor(_redPoker[i] / 16);
            _flowerColor = _redPoker[i] & 0x0f;//_redPoker[i] % 16;
            // console.warn("_redPoker characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);
        }
        this.showResult1(msg, true);
    }

    // SceneSettleInfo = 12;//场景上的玩家结算信息
    sceneSettleInfo(msg) {
        this._sceneSettleInfo = msg.UserList;
    }

    // BetInfo = 9;		//下注信息消息
    // 玩家进入游戏初始化数据信息
    sceneBetInfo(msg) {
        for (let j = 0; j < this.cardPanelShow.length; ++j) {
            this.cardPanelShow[j].active = true;
            this.cardPanel[j].active = false;
        }
        this.onloadScene(msg);
    }

    onloadScene(msg) {
        this._sceneSettleInfo = null;
        //自己有下注这一轮就不让i推出游戏
        this._leveOk = true;
        this._curSeatId = -2;
        this.clearAll();
        this.betAreaDataArr[0].selfBet = msg.UserBetBlack;
        this.betAreaDataArr[1].selfBet = msg.UserBetRed;
        this.betAreaDataArr[2].selfBet = msg.UserBetLuck;
        this.betAreaDataArr[0].otherBet = msg.Black;
        this.betAreaDataArr[1].otherBet = msg.Red;
        this.betAreaDataArr[2].otherBet = msg.Luck;
        //神算子标签
        if (msg.MasterBetType && msg.MasterBetType != -1) {
            this.betingArea[redBlackLuck[msg.MasterBetType]].getChildByName("godIcon").active = true;
        }

        // int64 UserBetTotal = 7;//玩家总下注
        // ckm cs 暂时这样处理, 服务器没有减去自己的金额，客户端来减
        let _selfJs = this.players.children[playerSeatId.player_self].getComponent("RedBlackPlayer");
        _selfJs.initPlayerSelfData();
        // _selfJs.subGold(msg.UserBetTotal);
        this.setChipButton();

        for (let i = 0; i < this.betAreaDataArr.length; ++i) {
            if (this.betAreaDataArr[i].selfBet > 0) {
                this._isNoBet = true;
            }
            this.switchBetArea(redBlackLuck[i], this.betAreaDataArr[i].otherBet);

            let _betArea = this.betingArea[i];
            console.log("i = this.betAreaDataArr[i].selfBet =" + this.betAreaDataArr[i].selfBet);
            if (this.betAreaDataArr[i].selfBet > 0) {
                _betArea.getChildByName("selfBg").active = true;
            }
            let _numObj = getChipNum(this.betAreaDataArr[i].otherBet, true);
            _betArea.getChildByName("otherBet").getComponent(cc.Label).string
                = _numObj.num + _numObj.zi;
            _numObj = getChipNum(this.betAreaDataArr[i].selfBet, true);
            _betArea.getChildByName("selfBg").getChildByName("selfBet").getComponent(cc.Label).string
                = "下注：" + _numObj.num + _numObj.zi;
        }
    }

    switchBetArea(areaId, gold, seatId = playerSeatId.player_other, isShowWin = false) {
        let _curBetId = chipId.length - 1;
        let _curBet = chipId[_curBetId];
        let _addTime = 0;
        gold = Math.ceil(gold);
        while (gold > 0) {
            if (gold < _curBet) {
                _curBetId -= 1;
                _curBet = chipId[_curBetId];
                continue;
            }
            console.warn("_curBetId = " + _curBetId);
            if (_curBetId < 0) {
                _curBetId = 0;
            }
            if (isShowWin) {
                this.showWinOneChip(areaId, _curBetId, seatId, _addTime);
                _addTime += 0.05;
            } else {
                this.sceneBeting(areaId, _curBetId);
            }
            gold -= _curBet;
        }
    }

    sceneBeting(areaId, betIndex) {
        let _chipJs = this.getChip(betIndex, redBlackLuck[areaId]);
        let _betArea = this.betingArea[redBlackLuck[areaId]];
        let _player = this.players.children[playerSeatId.player_other];
        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));

        let _angle = Math.ceil(Math.random() * 90) - 45;
        _chipJs.chip_fiy(
            _player,
            _betArea.getChildByName("betArea"),
            offPos,
            _angle,
            betIndex);
    }

    //ani
    //头像摇晃
    playerHeadAni(seatId) {
        this.players.children[seatId].getComponent("RedBlackPlayer").headAni(seatId);
    }

    //闪烁
    flash(flashNode: cc.Node, num = 1, delayTime = 0.05) {
        flashNode.getComponent("RedBlackFlash").flash(num, delayTime);
    }

    //胜负图 20
    refreshTrendChart(arr = [0, 1, 0, 1, 1, 1]) {
        this.trendData[0] = [];
        let _len = arr.length;
        if (_len > 20) {
            for (let i = 0; i < 20; ++i) {
                this.trendData[0].unshift(winId[arr[_len - 1 - i]]);//splice(1, 0, winId[arr[i]]);
            }
        } else {
            for (let i = 0; i < _len; ++i) {
                this.trendData[0].push(winId[arr[i]]);
            }
        }
        this.trendChart.removeAllChildren();
        _len = this.trendData[0].length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.trendChartPre);
            item.getComponent("RedBlackTrendChartItem").setTrendChart(this.trendData[0][i]);
            this.trendChart.addChild(item);
        }
        _len > 0 && (this.trendChart.children[_len - 1].getComponent("RedBlackFlash").flash1(3, 0.3, true));
    }

    ////牌型走势图 7
    refreshCardTypeChart(arr = [1, 1, 2, 3, 4, 5, 6, 6]) {
        this.trendData[1] = [];
        let _len = arr.length;
        if (_len > 7) {
            for (let i = 0; i < 7; ++i) {
                this.trendData[1].unshift(arr[_len - 1 - i]);//splice(1, 0, arr[i]);
            }
        } else {
            this.trendData[1] = arr;
        }
        this.cardTypeChart.removeAllChildren();
        _len = this.trendData[1].length;
        for (let i = 0; i < _len; ++i) {
            let item = cc.instantiate(this.trendChartPre);
            item.getComponent("RedBlackTrendChartItem").setCardTypeChart(this.trendData[1][i]);
            this.cardTypeChart.addChild(item);
        }
        _len > 0 && (this.cardTypeChart.children[_len - 1].getComponent("RedBlackFlash").flash1(3, 0.3, true));
    }

    //每局刷新胜负图 20 牌型走势图 7 
    refreshSceneList(trendChartId, cardTypeChartId) {
        console.log("每局刷新胜负图 20 牌型走势图 7 ");
        let item = cc.instantiate(this.trendChartPre);
        item.getComponent("RedBlackTrendChartItem").setTrendChart(trendChartId);
        this.trendChart.addChild(item);
        let _len = this.trendChart.childrenCount;
        if (_len > 20) {
            this.trendChart.runAction(cc.sequence(
                cc.moveBy(0.1, 20, 0),
                cc.callFunc(() => {
                    this.trendChart.children[0].destroy();
                    this.trendChart.x = 9.083;
                }),
            ));
        }
        this.trendChart.children[_len - 1].getComponent("RedBlackFlash").flash1(3, 0.3, true);

        item = cc.instantiate(this.trendChartPre);
        item.getComponent("RedBlackTrendChartItem").setCardTypeChart(cardTypeChartId);
        this.cardTypeChart.addChild(item);
        _len = this.cardTypeChart.childrenCount;
        if (_len > 7) {
            this.cardTypeChart.runAction(cc.sequence(
                cc.moveBy(0.1, 10, 0),
                cc.callFunc(() => {
                    this.cardTypeChart.children[0].destroy();
                    this.cardTypeChart.x = 0;
                }),
            ));
        }
        this.cardTypeChart.children[_len - 1].getComponent("RedBlackFlash").flash1(3, 0.3, true);
    }

    //刷新详情
    refreshDetails(msg) {
        window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.details);
        window.RedBlack.RedBlackDetails.initDetailsData(msg);
    }

    //刷新请下注时间
    refreshBetTime(time = 10000) {
        this.clearTime();
        // console.warn("刷新请下注时间");
        let _time = Math.floor(time / 1000);
        this.betTime.node.active = true;
        if (_time <= 0) {
            _time = 0;
        }
        this.betTime.string = _time + "";
        this.waitTime = setInterval(() => {
            if (_time > 0) {
                //倒计时
                --_time;
                if (_time <= 5) {
                    window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.daojishi), false);
                }
                if (_time === 0) {
                    window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.QianZou), false);
                    setTimeout(() => {
                        window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.RuChang), false);
                    }, 1000);
                }
            } else {
                _time = 0;
            }
            // console.warn("_time = " + _time);
            this.betTime.string = _time + "";
        }, 1000);
    }

    //清除下注时间
    clearTime() {
        // console.warn("清除下注时间");
        this.betTime.node.active = false;
        if (this.waitTime != null || this.waitTime != undefined) {
            clearInterval(this.waitTime);
            this.waitTime = null;
        }
    }

    //清除其他时间
    clearOtherTime() {
        if (this.otherTime != null || this.otherTime != undefined) {
            clearTimeout(this.otherTime);
            this.otherTime = null;
        }
    }

    clearData() {
        this.clearAll();
        this._curBigWinnerSeatId = -1; // 是否是大赢家
        this._curMasterSeatId = -1; // 是否是神算子
        this._curBigWinnerUserId = -1; // 是否是大赢家
        this._curMasterUserId = -1; // 是否是神算子
        // cc.audioEngine.stopAllEffects();
        window.RedBlack.RedBlackCentrePanel.hideAll();
        this.curSelfChooseChipId = -1;
        for (let i = 0; i < this.chipLayout.childrenCount; ++i) {
            this.chipLayout.children[i].getChildByName("select").active = false;
            this.chipLayout.children[i].getChildByName("button").active = true;
        }
        this.setCardBack(true, true);
    }

    //筹码对象池
    putChip(chip: cc.Node) {
        this.chipPool.put(chip);
    }

    getChip(betIndex:number,eType?:number) {
        let _node: cc.Node = null;
        if (this.chipPool.size() <= 0) {
            for (let i = 0; i < 100; ++i) {
                let _chip = cc.instantiate(this.chipPre);
                if (_chip) {
                    this.chipPool.put(_chip);
                } else {
                    console.warn("_chip = " + _chip);
                }
            }
        }
        _node = this.chipPool.get();
        _node.stopAllActions();
        let chipJs = _node.getComponent("RedBlackChipItem");
        chipJs.initChipData(betIndex);
        if(eType != null){
            this.betAreaNodeArr[eType].push(_node);
        }
        return chipJs;
    }

    setTip(str = "redblackPanel", time = 2) {
        let _tipNode = cc.instantiate(this.tipPre);
        _tipNode.parent = this.tipPanel;
        let _len = this.tipPanel.childrenCount;
        if (_len > 4) {
            let _len = this.tipPanel.childrenCount;
            for (let i = _len - 1; i - 4 >= 0; --i) {
                this.tipPanel.children[_len - 1 - i].stopAllActions();
                this.tipPanel.children[_len - 1 - i].destroy();
            }
        }
        let _tipJs = _tipNode.getComponent("RedBlackTip");
        _tipJs.setTip(str, time);
    }

    //初始化筹码
    onloadChipColor() {
        for (let i = 0; i < this.chipLayout.childrenCount; ++i) {
            let _numObj = getChipNum(chipId[i]);
            let _chip = this.chipLayout.children[i];
            let _num = cc.find("lableLayout/num", _chip);
            _num.getComponent(cc.Label).string = _numObj.num + _numObj.zi + '';

            _num = cc.find("select/huangse_chouma/lableLayout/num", _chip);
            _num.getComponent(cc.Label).string = _numObj.num + _numObj.zi + '';
        }
    }

    setUserBetLimit(UserBetLimit) {
        this._userBetLimit = UserBetLimit;
    }

    getBetPlayEffect() {
        return !this._betPlayEffect && !this._betPlayEffectIsOne;
    }

}
