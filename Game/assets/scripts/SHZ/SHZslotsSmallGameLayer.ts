const { ccclass, property } = cc._decorator;

@ccclass
export default class smallGame extends cc.Component {

    // 小游戏文本控件 // 0 玩家金币 1 赢得金币 2 押注金币 3 次数
    @property(cc.Node)
    testLayer: cc.Node = null;

    // 小游戏文本控件 // 0 玩家金币 1 赢得金币 2 押注金币 3 次数
    @property([cc.Label])
    smallGameText: cc.Label[] = [];

    // 外圈图标闪光背景节点
    @property([cc.Node])
    isFlashIconBackNode: cc.Node[] = [];
    // 外圈图标闪光背景
    isFlashIconBack = [];
    isFlashIconBG = []

    // 5列容器
    _panleLayout1: cc.Node[] = [];
    _panleLayout2: cc.Node[] = [];
    // 内圈滚动节点
    @property(cc.Node)
    isInnerNode: cc.Node = null;
    t
    // 外圈滚动时间 {0 起始， 1 加速1 ，2 加速2 3 减速1 ，4 减速2，5 终止} 
    @property([cc.Float])
    inFlashEndMoveTime: Float32Array[] = [];

    // 滚动圈数
    @property(cc.Integer)
    allMoveFlashCount: number = 2;

    @property([cc.Integer])
    speedLevelTime: number[] = [];

    // 小游戏可玩总次数
    isMoveSmallGameCount: number = -1;
    // 外圈下标
    moveFlashBack: number = 0;
    // 外圈滚动圈数

    moveFlashCount: number = 2;
    // 外圈结束目标
    msgFlashEndMove: number = -1;
    // 外圈滚动状态
    flashRollState: number = 5;

    // 内圈滚动总共时间
    @property(cc.Integer)
    innerRingRollTime: number = 2;
    // 内圈单列滚动时间
    @property(cc.Integer)
    isInnerRingRollTime: number = 0;
    // 内圈单列递减时间
    @property(cc.Integer)
    isInnerRingRollSubTime: number = 0;

    // 內圈滚动图片资源
    @property([cc.SpriteFrame])
    gameRunRollIcon: cc.SpriteFrame[] = [];
    // 关闭游戏
    @property(cc.Node)
    closeButton: cc.Node = null;

    // 关闭游戏
    @property([cc.SpriteFrame])
    kuang: cc.SpriteFrame[] = [];

    // 内圈停止递归标识
    innerRingRollStop: boolean = false;
    // 内圈是否滚动
    innerRollState: boolean = false;
    // 内圈中间图标
    innerShowIcon: number[] = [];
    // 内圈存储
    innerIconData = [];
    // 赢得金币
    isWinGold: number = 0;
    // 赢得全部金币
    isWinAllGold: number = 0;
    // 小游戏是否结束
    isEndSmallGame: boolean = false;

    onLoad() {
        window.slotsScene.smallGame = this;
    }

    // 构造
    start() {
        this.closeButton.active = false;
        this.closeButton.getComponent(cc.Button).interactable = false;
        // 关闭主界面内容
        window.slotsScene.sceneActive(false);

        // 开启定时器检测自动开始小游戏
        let time = cc.delayTime(8);
        let func = cc.callFunc(function () {
            if (this.testLayer.active == true) {
                this.setInnerRollTime();
            }
        }, this);
        this.node.runAction(cc.sequence(time, func));

        // 得到外圈所有水果背景
        for (let index = 0; index < this.isFlashIconBackNode[0].childrenCount; index++) {
            this.isFlashIconBack[index] = this.isFlashIconBackNode[0].getChildByName("icon" + index);
            this.isFlashIconBG[index] = this.isFlashIconBackNode[1].getChildByName("icon" + index);
            this.isFlashIconBG[index].active = false;
        }
        this.isFlashIconBack[0].getComponent(cc.Sprite).spriteFrame = this.kuang[1];
        this.isFlashIconBack[0].active = true;

        // 得到内圈节点
        for (let index = 0; index < this.isInnerNode.childrenCount / 2; index++) {
            this._panleLayout1[index] = this.isInnerNode.getChildByName("roll_1_" + index);
            this._panleLayout2[index] = this.isInnerNode.getChildByName("roll_2_" + index);
        }
        // 赋值小游戏次数
        this.isMoveSmallGameCount = window.slotsScene.SceneDemo.m_nGeZiGame;
        this.smallGameText[3].string = this.isMoveSmallGameCount.toString();
        this.smallGameText[0].string = window.slotsScene.userData.userGold.toFixed(2)
        let totalbets = window.slotsScene.isGameLine * window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets];
        this.smallGameText[2].string = totalbets.toFixed(2);

        this.smallGameText[1].string = "0.00";

        this.node.on("monitorSmallGameMsg", function (gameCount: number, OutIndex: number, InIcon: Number[], Gold: number, Exit: boolean) {
            cc.log("gameCount == " + gameCount + "    OutIndex == " + OutIndex + "    Gold == " + Gold)
            cc.log(InIcon)
            this.isMoveSmallGameCount = gameCount;
            this.isWinGold = Gold;
            this.isWinAllGold = this.isWinGold + this.isWinAllGold
            this.msgFlashEndMove = OutIndex; // Math.ceil(Math.random() * 23);
            this.innerShowIcon = InIcon;
            this.isEndSmallGame = Exit;
        }, this)
    }

    // 设置内圈滚动开始，已经停止定时器
    setInnerRollTime() {
        this.testLayer.active = false;
        window.audioMng.playEffect(window.slotsScene.audioSource[1], false);
        cc.log("setInnerRollTime 设置内圈滚动开始，已经停止定时器")
        // 内圈继续滚动
        for (let index = 0; index < 4; index++) {
            this.moveInnerIconBackLogicFunc(this._panleLayout1[index], index, this.isInnerRingRollTime);
            this.moveInnerIconBackLogicFunc(this._panleLayout2[index], index, this.isInnerRingRollTime);
        }
        window.slotsScene.SceneDemo.sendMsgRequestSmallResult();
        this.moveOneFlashIconBackLogicFunc(this.inFlashEndMoveTime[0])

    }
    // 内圈滚动逻辑
    moveInnerIconBackLogicFunc(Rollnode, line, timeRoll) {
        if (this.innerRingRollStop == true) {
            let moveto = null;
            let func = cc.callFunc(function () {
                if (Rollnode.y > 132 || Rollnode.y < -132) {
                    if (line == 3) {
                        // 内圈滚动完毕 
                        this.innerRingRollStop = false;
                        this.innerRollState = true;
                    }
                    Rollnode.y = 137
                } else {
                    Rollnode.y = 0
                }
            }, this);
            if (Rollnode.y > 132 || Rollnode.y < -132) {
                Rollnode.y = 137;
                moveto = cc.moveTo(this.isInnerRingRollTime, cc.v2(Rollnode.x, 0));
                // 赋值结果 
                Rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[this.innerShowIcon[line]];
                this.innerIconData.push(Rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame)
            } else {
                Rollnode.y = 0
                moveto = cc.moveTo(this.isInnerRingRollTime, cc.v2(Rollnode.x, -137))
            }
            Rollnode.runAction(cc.sequence(moveto, func));
        } else {

            timeRoll = timeRoll - this.isInnerRingRollSubTime
            if (timeRoll < this.isInnerRingRollSubTime) {
                timeRoll = this.isInnerRingRollSubTime
            }
            let moveto = null;
            if (Rollnode.y > 132 || Rollnode.y < -132) {
                Rollnode.y = 137;
                moveto = cc.moveTo(timeRoll, cc.v2(Rollnode.x, 0));
                // 随机结果
                let num1 = Math.ceil(Math.random() * 7) - 1;
                Rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[num1];
            } else {
                Rollnode.y = 0
                moveto = cc.moveTo(timeRoll, cc.v2(Rollnode.x, -137))
            }
            Rollnode.runAction(moveto);
            let time = cc.delayTime(timeRoll);
            let func = cc.callFunc(function () {
                this.moveInnerIconBackLogicFunc(Rollnode, line, timeRoll);
            }, this);
            Rollnode.runAction(cc.sequence(time, func));
        }
    }
    // 外圈缓慢起步
    moveOneFlashIconBackLogicFunc(time) {
        window.audioMng.playEffect(window.slotsScene.audioSource[30], false);
        this.node.stopActionByTag(9);
        let moveCount = 0;
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景  
            //this.isFlashIconBack[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            this.isFlashIconBG[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;
            moveCount++;

            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            //this.isFlashIconBack[this.moveFlashBack].active = true;
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];
            if (moveCount == this.speedLevelTime[0]) {
                this.node.stopActionByTag(9);
                this.moveTwoFlashIconBackLogicFunc(this.inFlashEndMoveTime[1])
            }
        }, this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }
    // 外圈滚动逻辑
    moveTwoFlashIconBackLogicFunc(time, speedSarget) {
        this.source = window.audioMng.playEffect(window.slotsScene.audioSource[31], true);
        let moveCount = 0;
        // 递归滚动时间
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            //this.isFlashIconBack[this.moveFlashBack].active = false;
            this.isFlashIconBG[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            // 控件下标自增
            this.moveFlashBack++;
            moveCount++;

            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];
            if (moveCount == this.speedLevelTime[1]) {
                this.moveThereFlashIconBackLogicFunc(this.inFlashEndMoveTime[2])
            }

        }, this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }
    // 外圈匀速
    moveThereFlashIconBackLogicFunc(time) {
        this.node.stopActionByTag(9);
        cc.log("外圈匀速")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            //this.isFlashIconBack[this.moveFlashBack].active = false;
            this.isFlashIconBG[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            // 控件下标自增
            this.moveFlashBack++;

            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            //this.isFlashIconBack[this.moveFlashBack].active = true;
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];
            if (this.moveFlashCount >= this.allMoveFlashCount && this.msgFlashEndMove != -1) {
                this.moveOneSubIconBackLogicFunc(this.inFlashEndMoveTime[3])
            }

        }, this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    //外圈减速1
    moveOneSubIconBackLogicFunc(time) {
        this.node.stopActionByTag(9);
        cc.log("外圈减速1")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBG[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            // 控件下标自增
            this.moveFlashBack++;

            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景 
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];

            if (this.msgFlashEndMove + 23 - this.moveFlashBack == this.speedLevelTime[2] && this.msgFlashEndMove != -1) {
                this.moveTwoSubIconBackLogicFunc(this.inFlashEndMoveTime[4]);
            } else if (this.msgFlashEndMove - this.moveFlashBack == this.speedLevelTime[2] && this.msgFlashEndMove != -1) {
                this.moveTwoSubIconBackLogicFunc(this.inFlashEndMoveTime[4]);
            }
        }, this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    //外圈减速2
    moveTwoSubIconBackLogicFunc(time) {
        if (this.source != null) {
            window.audioMng.stopEffect(this.source);
        }
        window.audioMng.playEffect(window.slotsScene.audioSource[32], false);
        this.node.stopActionByTag(9);
        cc.log("外圈减速1")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBG[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            // 控件下标自增
            this.moveFlashBack++;
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景 
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];

            if (this.msgFlashEndMove + 23 - this.moveFlashBack == this.speedLevelTime[3] && this.msgFlashEndMove != -1) {
                this.innerRingRollStop = true;
                this.moveStopSubIconBackLogicFunc(this.inFlashEndMoveTime[5]);
            } else if (this.msgFlashEndMove - this.moveFlashBack == this.speedLevelTime[3] && this.msgFlashEndMove != -1) {
                this.innerRingRollStop = true;
                this.moveStopSubIconBackLogicFunc(this.inFlashEndMoveTime[5]);
            }
        }, this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    // 外圈停止
    moveStopSubIconBackLogicFunc(time) {

        this.node.stopActionByTag(9);
        cc.log("外圈停止")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBG[this.moveFlashBack].active = false;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[0];
            // 控件下标自增
            this.moveFlashBack++;
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode[0].childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            window.audioMng.playEffect(window.slotsScene.audioSource[33], false);
            // 显示滚动背景 
            this.isFlashIconBG[this.moveFlashBack].active = true;
            this.isFlashIconBack[this.moveFlashBack].getComponent(cc.Sprite).spriteFrame = this.kuang[1];
            if (this.moveFlashBack == this.msgFlashEndMove) {
                let fadeOut = cc.fadeOut(0.2)
                let fadeIn = cc.fadeIn(0.2)
                let forever = cc.repeatForever(cc.sequence(fadeOut, fadeIn))
                forever.setTag(92)
                this.isFlashIconBack[this.moveFlashBack].runAction(forever)
                //炸弹音效
                if (this.moveFlashBack == 0 || this.moveFlashBack == 7 ||
                    this.moveFlashBack == 13 || this.moveFlashBack == 20) {
                } else {
                    //中奖音效
                    cc.log(this.isFlashIconBackNode[2].getChildByName("icon" + this.moveFlashBack).getComponent(cc.Sprite).spriteFrame)
                    if (this.isWinGold > 0) {
                        let ret = 0;
                        let spriteframe = this.isFlashIconBackNode[2].getChildByName("icon" + this.moveFlashBack).getComponent(cc.Sprite).spriteFrame.name;
                        for (let i = 0; i < 4; i++) {
                            cc.log("***** = " + this.innerIconData[i].name)
                            if (this.innerIconData[i].name == spriteframe) {
                                ret = ret + 1;
                            }
                        }
                        if (ret > 0) {
                            let animation = this.isFlashIconBackNode[2].getChildByName("icon" + this.moveFlashBack).getComponent(cc.Animation).play()
                            this.isFlashIconBackNode[2].getChildByName("icon" + this.moveFlashBack).getComponent(cc.AudioSource).play()
                            animation.wrapMode = false;

                            // 赢得金币
                            //this.smallGameText[1].string = this.isWinAllGold.toFixed(2);
                            let runNumber = 0
                            if (this.isWinGold != this.isWinAllGold) {
                                runNumber = this.isWinGold
                            }
                            window.audioMng.playEffect(window.slotsScene.audioSource[5], false);
                            this.goldRollTime(this.smallGameText[1], runNumber, this.isWinAllGold)
                        }
                    }
                }
                this.node.stopActionByTag(9);
                if (this.isEndSmallGame == true) {  //
                    // 次数
                    this.smallGameText[3].string = this.isMoveSmallGameCount;
                    //小游戏结束 
                    this.goGameEndLayer(10, 1);

                } else {
                    // 次数
                    this.smallGameText[3].string = this.isMoveSmallGameCount;
                    this.moveFlashCount = 0;
                    this.msgFlashEndMove = -1;
                    let moveTime1 = cc.delayTime(1);
                    let moveFunc1 = cc.callFunc(function () {
                        this.innerIconData = [];
                        this.isFlashIconBack[this.moveFlashBack].stopActionByTag(92)
                        this.isFlashIconBack[this.moveFlashBack].opacity = 255;
                        this.setInnerRollTime();
                    }, this);
                    this.node.runAction(cc.sequence(moveTime1, moveFunc1));
                }
            }

        }, this);
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    // 点击关闭游戏
    closeButtonLayer() {
        cc.log("closeButtonLayer 点击关闭游戏")
        let Time = cc.delayTime(1);
        let Func = cc.callFunc(function () {
            window.audioMng.playEffect(window.slotsScene.audioSource[7], false);
            window.slotsScene.sceneActive(true)
            this.node.destroy();
            window.slotsScene.smallGame = null;
            window.slotsScene.isSmall = false;
            if (window.slotsScene.isAutoConut > 0) {
                window.slotsScene.gameState = 2;
            } else {
                window.slotsScene.gameState = 0;
            }
            window.slotsScene.node.emit("gameOverSettlementCall", 1)
            window.slotsScene.endLayer.slotsEndLayer(0);
        }, this);
        this.node.runAction(cc.sequence(Time, Func));
    }

    // 结算界面调用
    goGameEndLayer(id, time) {
        window.audioMng.playEffect(window.slotsScene.audioSource[3], false);
        let waitTime = cc.delayTime(time);
        let callFunc = cc.callFunc(function () {
            this.closeButton.active = true;
            this.closeButton.getComponent(cc.Button).interactable = true;

            let setscene = cc.instantiate(window.slotsScene.partLayer[id]);
            window.slotsScene.smallGame.node.addChild(setscene, 70);


            setscene.getChildByName("Back").getChildByName("one").getComponent(cc.Label).string = window.slotsScene.SceneDemo.m_nWinGold.toFixed(2);
            setscene.getChildByName("Back").getChildByName("tow").getComponent(cc.Label).string = this.isWinAllGold.toFixed(2);

            // 刷新金币
            window.slotsScene.userData["userGold"] = window.slotsScene.userData["userGold"] + this.isWinAllGold;
            window.slotsScene.clikeButton.setUserGoldUpdata();

            let Time = cc.delayTime(10);
            let Func = cc.callFunc(function () {
                window.slotsScene.sceneActive(true)
                this.node.destroy();
                window.slotsScene.smallGame = null;
                window.slotsScene.isSmall = false;
                if (window.slotsScene.isAutoConut > 0) {
                    window.slotsScene.gameState = 2;
                } else {
                    window.slotsScene.gameState = 0;
                }
                window.slotsScene.endLayer.slotsEndLayer(0);
                window.slotsScene.node.emit("gameOverSettlementCall", 1)
            }, this);
            this.node.runAction(cc.sequence(Time, Func));

        }, this);
        this.node.runAction(cc.sequence(waitTime, callFunc));
    }

    goldRollTime(node: cc.Label, bigenGold: number, endGold: number) {
        if (endGold <= 0) { return; };
        let rollnumber = endGold * 0.05 /// 3// Math.ceil();  100*0.01= 1*0.02  20 *0.01 0.1
        let addGold = 0;
        let time = cc.delayTime(0.02)
        let Func = cc.callFunc(function () {
            bigenGold += rollnumber;

            if (bigenGold >= endGold) {
                this.node.stopActionByTag(99)
                node.string = endGold.toFixed(2)
            } else {
                let goldTest = bigenGold.toFixed(2)
                node.string = goldTest//toFixed(2);
            }
        }, this);
        let tag = cc.repeatForever(cc.sequence(time, Func))
        tag.setTag(99)
        this.node.runAction(tag)
    }
}
