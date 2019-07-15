const { ccclass, property } = cc._decorator;

@ccclass
export default class roolConfig extends cc.Component {
    // 起始滚动时间差
    @property([cc.Float])
    inRunPanleBeginTime: Float32Array[] = [];

    // 滚动模式正常次数
    @property([cc.Integer])
    isRollModeNormalCount: number[] = [];

    // rollTimeState = {
    //     rollBeginTime : 0,  // 起步
    //     rollAddSpeed1Time : 0,  // 加速1
    //     rollAddSpeed2Time : 0,  // 加速2
    //     rollSpeedTime : 0,  // 匀速
    //     rollSubSpeed1Time : 0, // 减速1
    //     rollSubSpeed2Time : 0, // 减速2
    // }

    // 正常单轴滚动的时间
    @property()
    isRollAllBeginTime: number = 0;
    @property()
    isRollSubTime: number = 0;
    @property()
    isRollUniformTime: number = 0;
    @property()
    isRollEndTime: number = 0;

    // 加速单轴滚动的时间
    @property()
    addRollAllBeginTime: number = 0;
    @property()
    addRollSubTime: number = 0;
    @property()
    addRollUniformTime: number = 0;
    @property()
    addRollEndTime: number = 0;


    // 关闭奖励界面
    @property()
    isWinLayerWaitTime: number = 0;
    // 关闭奖励界面
    @property()
    isWinLayerCloseTime: number = 0;

    // // 免费图片资源
    // @property([cc.Sprite])
    // freeBack: cc.Sprite[];

    // 构造
    start() {
        window.slotsScene.roolConfig = this;
        // 设置默认值滚动模式
        //this.setRollCountMode()


    }

    returnaddRollCountMode() {
        if (!window.slotsScene.isAccelerate) {
            let returnType = [];
            returnType[0] = this.isRollAllBeginTime
            returnType[1] = this.isRollSubTime
            returnType[2] = this.isRollUniformTime
            returnType[3] = this.isRollEndTime

            return returnType//this.inrollBeginTime,this.isrollSpeedTime,this.isrollSubSpeed2Time; addrollSubSpeed2Time1
        } else {
            let returnType = [];
            returnType[0] = this.addRollAllBeginTime
            returnType[1] = this.addRollSubTime
            returnType[2] = this.addRollUniformTime
            returnType[3] = this.addRollEndTime
            return returnType//this.addrollBeginTime,this.addrollSpeedTime,this.addrollSubSpeed2Time;
        }

    }

    // 场景消息（包含断线）
    betsSceneDta(data) {
        window.slotsScene.isGameBetsAny = data.BetValue;
        window.slotsScene.isGameBets = window.slotsScene.clikeButton.updataInsufficient_Gold_Coins();
        window.slotsScene.clikeButton.setSlotsSceneBetsTextUpdata();
    }

    // 游戏结束结算函数
    autoRoll(nextTime) {
        cc.log("test")
        nextTime = nextTime || 2;
        // 重置是否滚动
        window.slotsScene.runLogic.isRunPanleState = false;
        // 开启消息回掉
        window.slotsScene.isMsgSend = false;
        // 恢复快停
        window.slotsScene.isStop = false;
        if (window.slotsScene.isFreeCount > 0) {
            window.slotsScene.isFree = true;
            if (!window.slotsScene.isSmall) {
                window.slotsScene.clikeButton.monitor_Game_ButtonState(2);
                let time = cc.delayTime(nextTime);
                let func = cc.callFunc(function () {
                    // 发送游戏开始； 
                    if (window.slotsScene.gameState == 2) {
                        window.slotsScene.isFreeCount--;
                        window.slotsScene.clikeButton.onButtonText[1].string = window.slotsScene.isFreeCount;
                        window.slotsScene.endLayer.closeEndLayer();
                        // 发送游戏开始；
                        // 免费游戏字体减少
                        window.slotsScene.SceneDemo.sendMsgRequestBetsResult(window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets]);
                    }
                }, this);
                this.node.runAction(cc.sequence(time, func));
            }
        } else {
            if (window.slotsScene.isFree == true) {
                window.slotsScene.isFree = false;
                window.slotsScene.node.emit("gameFreeSettlementEndCall");
                return;
            }

            window.slotsScene.isFreeCount = 0
            if (!window.slotsScene.isSmall) {
                if (window.slotsScene.gameState == 2 && window.slotsScene.isAutoState && window.slotsScene.isAutoConut > 0) {
                    // 自动游戏
                    let time = cc.delayTime(nextTime);
                    let func = cc.callFunc(function () {

                        if (window.slotsScene.isAutoConut > 0) {
                            window.slotsScene.endLayer.senceLayerTest(null, null, "老子有钱，任意旋转");
                            if (window.slotsScene.isAutoConut <= 90) {
                                window.slotsScene.isAutoConut--;
                            }
                            window.slotsScene.clikeButton.setAutoButtonLableText();
                            window.slotsScene.clikeButton.monitor_Game_ButtonState(0);
                            window.slotsScene.endLayer.closeEndLayer();
                            window.slotsScene.SceneDemo.sendMsgRequestBetsResult(window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets]);
                        } else {
                            window.slotsScene.isAutoConut = 0;
                            window.slotsScene.isAutoState = false;
                            window.slotsScene.gameState = 0;
                            window.slotsScene.clikeButton.monitor_Game_ButtonState(1);
                            window.slotsScene.clikeButton.monitor_Bets_Auto_ButtonState(true);
                        }

                        // 发送游戏开始； 
                        //window.slotsScene.runLogic.runPanleBeginFunc()
                    }, this);
                    this.node.runAction(cc.sequence(time, func));
                } else {
                    window.slotsScene.isAutoConut = 0;
                    window.slotsScene.isAutoState = false;
                    window.slotsScene.gameState = 0;
                    window.slotsScene.clikeButton.monitor_Game_ButtonState(1);
                    window.slotsScene.clikeButton.monitor_Bets_Auto_ButtonState(true);
                }
            }
        }
    }

}
