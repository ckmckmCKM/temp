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

    isGoWinLayerTime: number = 1;

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
        nextTime = nextTime || 2;
        window.slotsScene.runLogic.isRunPanleState = false;
        window.slotsScene.isStop = false;
        window.slotsScene.isMsgSend = false;
        if (window.slotsScene.isFreeCount > 0) {
            window.slotsScene.isFree = true;
            if (!window.slotsScene.isSmall) {
                window.slotsScene.clikeButton.monitor_Game_ButtonState(2);
                let time = cc.delayTime(nextTime);
                let func = cc.callFunc(function () {
                    // 发送游戏开始； 
                    if (window.slotsScene.gameState == 2) {
                        window.slotsScene.endLayer.senceLayerTest(null, null, "免费旋转中！");
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
                            window.slotsScene.endLayer.closeEndLayer();
                            // if(window.slotsScene.clikeButton.deductionUserGold()){
                            window.slotsScene.endLayer.senceLayerTest(null, null, "老子有钱，任意旋转");
                            if (window.slotsScene.isAutoConut <= 90) {
                                window.slotsScene.isAutoConut--;
                                window.slotsScene.clikeButton.setAutoButtonLableText();
                            }
                            window.slotsScene.clikeButton.monitor_Game_ButtonState(0); 
                            window.slotsScene.SceneDemo.sendMsgRequestBetsResult(window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets]);
                            // }else{
                            //     // 得到金币是否满足游戏最低挡位
                            //     let returnBest = window.slotsScene.clikeButton.updataInsufficient_Gold_Coins();
                            //     let text = "";
                            //     if(returnBest != 0){
                            //         text = "金币不足,已降至最低挡位!";
                            //     }else{
                            //         text = "金币不足,请充值!";
                            //         window.slotsScene.isGameBets = 0;
                            //     }
                            //     window.slotsScene.isAutoConut = 0;
                            //     window.slotsScene.isAutoState = false; 
                            //     window.slotsScene.gameState = 0; 
                            //     window.slotsScene.clikeButton.monitor_Bets_Auto_ButtonState(true);
                            //     window.slotsScene.endLayer.senceLayerTest(null, null, "金币不足,请充值!")
                            //     window.slotsScene.clikeButton.monitor_Game_ButtonState(1);
                            //     let setscene = cc.instantiate(window.slotsScene.partLayer[4]); 
                            //     window.slotsScene.node.addChild(setscene,70);
                            //     window.slotsScene.slotsPrompt.setPromptLayer(text,returnBest);
                            // }
                        } else {
                            window.slotsScene.isAutoConut = 0;
                            window.slotsScene.isAutoState = false;
                            window.slotsScene.gameState = 0;
                            window.slotsScene.clikeButton.monitor_Game_ButtonState(1);
                            window.slotsScene.clikeButton.monitor_Bets_Auto_ButtonState(true);
                        }
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
