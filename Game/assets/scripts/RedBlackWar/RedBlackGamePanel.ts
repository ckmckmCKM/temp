
import {
    battleAniSpeed, showPanelType, showPanelIdType, chipId,
    allArea, playerSeatId, cardCharacterType, cardFlowerColor, winId,
    fapaiTime, turnCardTime, redBlackLuck
} from "./RedBlackCfg";

const CARD_POS_X = [[-70, 0, 70], [70, 0, -70]];

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackGamePanel extends cc.Component {

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
    cardTypePanel: cc.Node[] = []; //牌型显示 black 0 red 1
    @property(cc.Node)
    players: cc.Node = null; //玩家座位节点 顺序排列
    @property(cc.Node)
    playersDown: cc.Node = null; //玩家点击座位 顺序排列
    @property(cc.Prefab)
    trendChartPre: cc.Prefab = null;
    @property(cc.Node)
    trendChart: cc.Node = null;
    @property(cc.Node)
    cardTypeChart: cc.Node = null;
    @property(cc.Label)
    betTime: cc.Label = null;

    /**
     * @param black_red_lucky所有区域对象的数据
     */
    betAreaDataArr = [];
    betAreaNodeArr = []; //black_red_lucky所有区域对象节点

    curSelfChooseChipId: number = 0; //自己选择的筹码下标
    chipPool: cc.NodePool; //自己选择的筹码下标
    playerSelfSeatId = 0; //自己的座位id
    trendData = []; //走势图数组 0 输赢 1 牌型
    waitTime = null;
    _curSeatId = 0;
    _sceneSettleInfo = null;


    //ckm cs
    curSeatId = playerSeatId.player_left_1;

    onLoad() {
        // 初始化玩家信息
        // this.players.children[playerSeatId.player_self].getComponent("RedBlackPlayer").initPlayerSelfData();
        window.RedBlack.RedBlackGamePanel = this;
        this.chipPool = new cc.NodePool();
        this.clearAll();
        this.chipLayout.children[0].getChildByName("select").active = true;

        // for (let i = 0; i < this.chipLayout.childrenCount; ++i) {
        //     this.chipLayout.children[i].getChildByName("num").getComponent(cc.Label).string
        //         = chipId[i] + "";
        // }

        //ckm cs
        //发牌
        // this.dealCards();
        // this.playerHeadAni(this.curSeatId);
        // let _player = this.players.children[this.curSeatId];
        // _player.getComponent("RedBlackPlayer").showMoney(12345);
        // _player.getChildByName("dafuhaotubiao").active = true;
        // this.refreshCardTypeChart();
        // this.refreshTrendChart();
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
            _betArea.getChildByName("selfBet").getComponent(cc.Label).string = "下注：0";
            // _betArea.getChildByName("winBg").getComponent("RedBlackFlash").flashForever(1);
        }
        for (let i = 0; i < 3; ++i) {
            this.betAreaNodeArr[i] = [];
            this.betAreaDataArr[i] = {
                selfBet: 0,
                otherBet: 0,
            };
        }
        //玩家信息
        //玩家坐下
        // this.clerarDown();
    }

    //筹码回收 msg.UserWin, msg.Win
    recoveryChip(userWin, winindex) {
        let _player = this.players.children[playerSeatId.player_other];
        let _playerSelf = this.players.children[playerSeatId.player_self];
        _playerSelf.getComponent("RedBlackPlayer").showMoney(userWin);
        // if (this._curSeatId != 0) {
        //     _playerSelf = this.players.children[this._curSeatId];
        //     _playerSelf.getComponent("RedBlackPlayer").showMoney(userWin);
        // }
        if (userWin > 0){
            this.switchBetArea(winindex, userWin, playerSeatId.player_self, true);
        }
        for (let i = 0; i < this.betAreaNodeArr.length; ++i) {
            let _betArea = this.betAreaNodeArr[i];
            // if (userWin > 0 && i === winindex) {
            //     _player = this.players.children[playerSeatId.player_self];
            // }
            //  else {
            //     _player = this.players.children[playerSeatId.player_other];
            // }
            for (let j = 0; j < _betArea.length; ++j) {
                let _chip = _betArea[j];
                let _chipJs = _chip.getComponent("RedBlackChipItem");
                _chipJs.chip_recovery(_player);
            }
        }
    }

    showWinOneChip(areaId, _curBetId, seatId){

        let _chipNode = this.getChip();//cc.instantiate(this.chipPre);
        let _betIndex = _curBetId;
        let _chipJs = _chipNode.getComponent("RedBlackChipItem");
        let _betArea = this.betingArea[areaId];
        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));
        
        let _player = this.players.children[seatId];
        // console.log("seatId = " + seatId);
        _chipJs.chip_fiy_win(
            _betArea.getChildByName("betArea"),
            _player,
            offPos,
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
            // this.players.children[i].active = false;
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

    //坐下成功 场景消息处理
    refreshScene(msg) {
        let _userData = msg.UserData;
        this.clerarDown();
        for (let i = 0; i < _userData.length; ++i) {
            if (_userData[i].UserID == window.playerMng.userId) {
                this._curSeatId = _userData[i].SeatId - 1;
                let _player = this.players.children[playerSeatId.player_self];
                if (_userData[i].SeatId != 0) {
                    let _seatId = _userData[i].SeatId - 1;
                    _player.getComponent("RedBlackPlayer").initPlayerData(_userData[i], true);
                    _player = this.players.children[_seatId];
                    _player.getComponent("RedBlackPlayer").initPlayerData(_userData[i]);
                    this.setPlayerIsDawn(true, _seatId);
                }else{
                    _player.getComponent("RedBlackPlayer").initPlayerData(_userData[i], true);
                }
            } else {
                let _seatId = _userData[i].SeatId - 1;
                let _player = this.players.children[_seatId];
                _player.getComponent("RedBlackPlayer").initPlayerData(_userData[i]);
                this.setPlayerIsDawn(true, _seatId);
            }
        }
    }

    //点击下注 
    onClickBetint(event, customEventData) {
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

        let _chipNode = this.getChip();//cc.instantiate(this.chipPre);
        this.betAreaNodeArr[_data.BetType].push(_chipNode);

        let _isSelf = _data.UserID == window.playerMng.userId;
        let _goldNum = chipId[_data.BetIndex];
        if (_isSelf) {
            this.betAreaDataArr[_data.BetType].selfBet += _goldNum;
            this.betAreaDataArr[_data.BetType].otherBet += _goldNum;
        } else {
            this.betAreaDataArr[_data.BetType].otherBet += _goldNum;
        }
        let _chipJs = _chipNode.getComponent("RedBlackChipItem");
        let _betArea = this.betingArea[_data.BetType];
        _betArea.getChildByName("otherBet").getComponent(cc.Label).string
            = this.betAreaDataArr[_data.BetType].otherBet + "";
        _betArea.getChildByName("selfBet").getComponent(cc.Label).string
            = "下注：" + this.betAreaDataArr[_data.BetType].selfBet;

        let _seatId = _data.SeatId - 1;
        if (_data.SeatId === 0){
            _seatId = playerSeatId.player_other;
        }
        let _player = this.players.children[_seatId];
        let _playerJs = _player.getComponent("RedBlackPlayer");
        //判断是不是自己下注
        //自己
        let offPos = this.getPosOff(_betArea.getChildByName("betArea"));
        _chipJs.initChipData(_data.BetIndex, _isSelf);
        if (_isSelf) {
            let _playerSelf = this.players.children[playerSeatId.player_self];
            let _playerSelfJs = _playerSelf.getComponent("RedBlackPlayer");
            if (_data.SeatId != 0){
                let _str = _playerSelfJs.subGold(_goldNum);
                _playerJs = _player.getComponent("RedBlackPlayer");
                // _playerJs.subGold(_goldNum);
                _playerJs.setScore(_str);
            }else{
                _playerSelfJs.subGold(_goldNum);
            }
            //头像摇晃
            this.playerHeadAni(playerSeatId.player_self);
            _chipJs.chip_fiy(
                // this.chipLayout.children[_data.BetIndex],
                _playerSelf,
                _betArea.getChildByName("betArea"),
                offPos,
                _data.BetIndex,
                );
            if (_data.SeatId !== 0) {
                _chipNode = this.getChip();//cc.instantiate(this.chipPre);
                this.betAreaNodeArr[_data.BetType].push(_chipNode);
                _chipJs = _chipNode.getComponent("RedBlackChipItem");
                console.log("offPos = " + offPos);
                _chipJs.chip_fiy(
                    _player,
                    _betArea.getChildByName("betArea"),
                    offPos,
                    _data.BetIndex,
                );
            }

            //下注成功的闪烁
            let _node = _betArea.getChildByName("betingFlash");
            this.flash(_node, 3);

            // //神算子下注
            // _playerSelfJs.golIcon_fiy(_betArea.getChildByName("godIcon"));
        } else {
            _playerJs.subGold(_goldNum);
            //头像摇晃
            this.playerHeadAni(_seatId);
            //其他
            _chipJs.chip_fiy(
                _player,
                _betArea.getChildByName("betArea"),
                offPos,
                _data.BetIndex,
                );

        }
        //神算子下注
        if (_playerJs && _playerJs.getIsMaster()) {
            _playerJs.golIcon_fiy(_betArea.getChildByName("godIcon"));
        }
    }

    getPosOff(end_node_move){
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
        //请求详情
        window.RedBlack.RedBlackMsg.sendMsgRequestGetTrend();
        this.clearAll();
        for (let i = 0; i < 3; ++i) {
            let _card = this.cardPanel[0].children[i];
            if (!_card){
                console.error("_card = " + _card);
                break;
            }
            _card.stopAllActions();
            _card = this.cardPanel[0].children[i];
            _card.stopAllActions();
        }
        this.clearcardPanel();
        
        window.RedBlack.RedBlackCentrePanel.showNoMove(showPanelIdType.battleAni);

        setTimeout(() => {
            
        window.RedBlack.RedBlackCentrePanel.hideNoMove(showPanelIdType.battleAni);
            //发牌
            window.RedBlack.RedBlackGamePanel.dealCards();
            //开始下注动画
            window.RedBlack.RedBlackCentrePanel.showMoveLeft(showPanelIdType.startBet, 0.5);
        }, 1500);
    }

    //发牌
    dealCards(seatId = 0, cardId = 0) {
        // console.log("发牌: " + seatId + "  " + cardId);
        let self = this;
        let _card = cc.instantiate(self.cardPre);
        _card.setPosition(self.vs.getPosition());
        let _cardJs = _card.getComponent("RedBlackCard");
        let _panel = self.cardPanel[seatId];
        _card.parent = self.node;
        _card.scale = 0.2;
        let _pos = self.cardPanel[seatId].getPosition();
        _pos.x = _pos.x + CARD_POS_X[seatId][cardId];
        let _ac = cc.spawn(cc.scaleTo(fapaiTime, 1, 1), cc.moveTo(fapaiTime, _pos));
        _card.runAction(cc.sequence(_ac, cc.callFunc(() => {
            _card.parent = self.cardPanel[seatId];
            _card.setPosition(CARD_POS_X[seatId][cardId], 0);
            if (cardId == 2) {
                self.cardPanel[seatId].getComponent(cc.Layout).enabled = true;
                if (seatId == 1) {
                    //牌发完了
                    // console.log("牌发完了");
                    return;
                }
                ++seatId;
                cardId = 0;
            } else {
                ++cardId;
            }
            self.dealCards(seatId, cardId);
        })));
    }

    //开牌
    turnCard(seatId = 0, cardId = 0, msg = null) {
        // console.log("开牌: " + seatId + "  " + cardId);
        let self = this;
        let _card = self.cardPanel[seatId].children[cardId];
        if (_card == undefined) {
            console.warn("_card == undefined");
            return;
        }
        let _cardJs = _card.getComponent("RedBlackCard");
        let _ac = null;
        if (cardId == 2) {
            _ac = cc.sequence(
                cc.scaleTo(turnCardTime, 0.5, 1.2),
                cc.callFunc(() => {
                    _cardJs.setBack(false);
                }),
                cc.scaleTo(turnCardTime, 1, 1));
        } else {
            _ac = cc.sequence(
                cc.scaleTo(turnCardTime, 0.5, 1),
                cc.callFunc(() => {
                    _cardJs.setBack(false);
                }),
                cc.scaleTo(turnCardTime, 1, 1));
        }
        _card.runAction(cc.sequence(_ac, cc.callFunc(() => {
            if (cardId == 2) {
                self.showResult(msg, seatId);
                self.cardPanel[seatId].getComponent(cc.Layout).enabled = true;
                if (seatId == 1) {
                    // //牌翻完了
                    // console.log("牌翻完了");
                    // self.clearcardPanel();
                    self.showResult1(msg);
                    return;
                }
                ++seatId;
                cardId = 0;
            } else {
                ++cardId;
            }
            self.turnCard(seatId, cardId, msg);
        })));
    }

    showResult(msg, cardTypePanelId) {
        //UserWin

        // //胜利闪烁
        let _winId = winId[msg.Win];
        //牌型

        let _cardsType = ["", "单张", "对子", "顺子", "金花", "顺金", "豹子"];
        this.cardTypePanel[cardTypePanelId].active = true;
        if (_winId == cardTypePanelId) {
            this.cardTypePanel[cardTypePanelId].getComponent(cc.Label).string
                = _cardsType[msg.WinCardType];//赢的牌的类型
        } else {
            this.cardTypePanel[cardTypePanelId].getComponent(cc.Label).string
                = _cardsType[msg.LoseCardType];//输的一方的牌类型
        }
    }

    showResult1(msg) {
        //UserWin
        //int64 LuckWin = 7; //幸运一击赢钱

        //胜利闪烁
        let _winId = winId[msg.Win];
        let _betArea = this.betingArea[_winId];
        _betArea.getChildByName("winBg").active = true;
        _betArea.getChildByName("winBg").getComponent("RedBlackFlash").flash(3, 0.1);

        //int64 LuckWin = 7; //幸运一击赢钱
        if (msg.LuckWin > 1){
            this.betingArea[2].getChildByName("winBg").active = true;
            this.betingArea[2].getChildByName("winBg").getComponent("RedBlackFlash").flash(3, 0.1);
        }

        //筹码回收 int32 Win = 3; // 1表示红胜利，2表示黑方胜利
        const _id = [0, 1, 0];
        let _userWin = msg.UserWin+msg.LuckWin;
        let _index = _id[msg.Win];
        setTimeout(() => {
            this.recoveryChip && this.recoveryChip(_userWin, _index);
            //赢的前重新创建筹码
            // if(_userWin > 0){
                this.showWinChip();
            // }
        }, 1000);
    }

    //赢的前重新创建筹码
    showWinChip(){
        if (this._sceneSettleInfo == null) {
            return;
        }
        let _userWin = 0;
        for (let i = 0; i < this._sceneSettleInfo.length; ++i){
            let _data = this._sceneSettleInfo[i];
            this.switchBetArea(allArea.red, _data.RedWin, _data.SceneSeatID - 1, true);
            this.switchBetArea(allArea.black, _data.BlackWin, _data.SceneSeatID - 1, true);
            this.switchBetArea(allArea.lucky, _data.LuckWin, _data.SceneSeatID - 1, true);
            
            let _userWin = 0;
            if (_data.RedWin > 0) {
                _userWin += _data.RedWin;
            }
            if (_data.BlackWin > 0) {
                _userWin += _data.BlackWin;
            }
            if (_data.LuckWin > 0) {
                _userWin += _data.LuckWin;
            }
            if (_data.SceneSeatID != 0) {
                if (_data.UserID == window.playerMng.userId) {
                    // let _player = this.players.children[_data.SceneSeatID - 1];
                    // _player.getComponent("RedBlackPlayer").showMoney(_userWin);
                    // let _playerData = _player.getComponent("RedBlackPlayer").getPlayerData();
                    // let _str = _userWin + _playerData.Score + "";
                    // _player.getComponent("RedBlackPlayer").setScore(_str); 
                    
                    let _player = this.players.children[playerSeatId.player_self];
                    _player.getComponent("RedBlackPlayer").addGold(_userWin);
                    let _str = _player.getChildByName("score").getComponent(cc.Label).string;
                    console.error(_str);
                    _player.getComponent("RedBlackPlayer").setScore(_str);

                    _player = this.players.children[_data.SceneSeatID - 1];
                    _player.getComponent("RedBlackPlayer").showMoney(_userWin);
                    _player.getComponent("RedBlackPlayer").setScore(_str);
                } else {
                    let _player = this.players.children[_data.SceneSeatID - 1];
                    _player.getComponent("RedBlackPlayer").addGold(_userWin);
                    _player.getComponent("RedBlackPlayer").showMoney(_userWin);
                }
            }
        }
        this._sceneSettleInfo = null;
    }

    //结算信息 win 1红 2黑
    refreshSettle(msg) {
        console.log("结算信息============");
        let _blackPoker = msg.BlackPoker;
        let _redPoker = msg.RedPoker;
        for (let i = 0; i < _blackPoker.length; ++i) {
            let _card = this.cardPanel[0].children[i];
            let _cardJs = _card.getComponent("RedBlackCard");
            let _characters = _blackPoker[i] >> 4;//Math.floor(_blackPoker / 16);
            let _flowerColor = _blackPoker[i] & 0x0f;
            // console.log("characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);

            _card = this.cardPanel[1].children[i];
            _cardJs = _card.getComponent("RedBlackCard");
            _characters = _redPoker[i] >> 4;//Math.floor(_redPoker[i] / 16);
            _flowerColor = _redPoker[i] & 0x0f;//_redPoker[i] % 16;
            // console.log("characters = " + _characters + "  flowerColor = " + _flowerColor);
            _cardJs.initCardData(_characters, _flowerColor);
        }
    }

    // SceneSettleInfo = 12;//场景上的玩家结算信息
    sceneSettleInfo(msg){
        this._sceneSettleInfo = msg.UserList;
    }

    // BetInfo = 9;		//下注信息消息
    // 玩家进入游戏初始化数据信息
    sceneBetInfo(msg) {
        this.clearAll();
        this.betAreaDataArr[0].selfBet += msg.UserBetBlack;
        this.betAreaDataArr[1].selfBet += msg.UserBetRed;
        this.betAreaDataArr[2].selfBet += msg.UserBetLuck;
        this.betAreaDataArr[0].otherBet += msg.Black;
        this.betAreaDataArr[1].otherBet += msg.Red;
        this.betAreaDataArr[2].otherBet += msg.Luck;
        //神算子标签
        if (msg.MasterBetType != -1) {
            this.betingArea[redBlackLuck[msg.MasterBetType]].getChildByName("godIcon").active = true;
        }

        // int64 UserBetTotal = 7;//玩家总下注
        // ckm cs 暂时这样处理, 服务器没有减去自己的金额，客户端来减
        this.players.children[playerSeatId.player_self].
            getComponent("RedBlackPlayer").subGold(msg.UserBetTotal);
            

        for (let i = 0; i < this.betAreaDataArr.length; ++i){
            this.switchBetArea(redBlackLuck[i], this.betAreaDataArr[i].selfBet);
            this.switchBetArea(redBlackLuck[i], this.betAreaDataArr[i].otherBet);
            
            let _betArea = this.betingArea[i];
            _betArea.getChildByName("otherBet").getComponent(cc.Label).string
                = this.betAreaDataArr[i].otherBet + "";
            _betArea.getChildByName("selfBet").getComponent(cc.Label).string
                = "下注：" + this.betAreaDataArr[i].selfBet;
        }
    }

    switchBetArea(areaId, gold, seatId = playerSeatId.player_other, isShowWin = false){
        let _curBetId = chipId.length - 1;
        let _curBet = chipId[_curBetId];
        while(gold > 0){
            if(gold < _curBet){
                _curBetId -= 1;
                _curBet = chipId[_curBetId];
                continue;
            }
            gold -= _curBet;
            // console.log("gold = " + gold);
            if (isShowWin) {
                this.showWinOneChip(areaId, _curBetId, seatId);
            } else {
                this.sceneBeting(areaId, _curBetId);
            }
        }
    }

    sceneBeting(areaId, betIndex) {
        let _chipNode = this.getChip();//cc.instantiate(this.chipPre);
        this.betAreaNodeArr[areaId].push(_chipNode);

        let _chipJs = _chipNode.getComponent("RedBlackChipItem");
        let _betArea = this.betingArea[redBlackLuck[areaId]];
        let _player = this.players.children[playerSeatId.player_other];
        let _playerJs = _player.getComponent("RedBlackPlayer");
        _chipJs.initChipData(betIndex, false);

        _chipJs.chip_fiy(
            _player,
            _betArea.getChildByName("betArea"),
            betIndex);
    }

    //ani
    //头像摇晃
    playerHeadAni(seatId) {
        this.players.children[seatId].getComponent("RedBlackPlayer").headAni();
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
    }

    //刷新详情
    refreshDetails(msg) {
        window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.details);
        window.RedBlack.RedBlackDetails.initDetailsData(msg);
    }

    //刷新请下注时间
    refreshBetTime(time = 10000) {
        // console.log("刷新请下注时间");
        this.clearTime();
        let _time = Math.floor(time / 1000);
        this.betTime.node.active = true;
        this.betTime.string = _time + "";
        this.waitTime = setInterval(() => {
            // console.log("_time = " + _time);
            this.betTime.string = _time + "";
            if (_time > 0) {
                //倒计时
                --_time;
            }
        }, 1000);
    }

    //清除时间
    clearTime() {
        // console.log("清除时间");
        this.betTime.node.active = false;
        if (this.waitTime != null || this.waitTime != undefined) {
            clearInterval(this.waitTime);
            this.waitTime = null;
        }
    }

    //筹码对象池
    putChip(chip: cc.Node) {
        this.chipPool.put(chip);
    }

    getChip() {
        let _node: cc.Node = null;
        if (this.chipPool.size() <= 0) {
            for (let i = 0; i < 100; ++i) {
                let _chip = cc.instantiate(this.chipPre);
                if (_chip) {
                    this.chipPool.put(_chip);
                } else {
                    console.error("_chip = " + _chip);
                }
            }
        }
        _node = this.chipPool.get();
        return _node;
    }

}
