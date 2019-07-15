// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class winLayer extends cc.Component {

    // 点击事件
    clikeLayout: boolean = true;

    @property(cc.Node)
    layoutAtlas: cc.Node = null;
    @property(cc.Prefab)
    isPrefab: cc.Prefab = null;
    onLoad() {
        window.slotsScene.winLayer = this;
    }

    start() {
        // if(window.slotsScene.SceneDemo.m_nWinPeiLv > 5){
        //     window.slotsScene.clikeButton.monitor_ButtonInteractableState(0,false)
        //     window.slotsScene.clikeButton.monitor_ButtonInteractableState(1,false)
        //     window.slotsScene.clikeButton.monitor_ButtonInteractableState(2,false)
        // } 
        this.node.on("endGameWinLayer", function (event) {
            let closeTime = cc.delayTime(event);
            let fadeOut = cc.fadeOut(event);
            let closeFunc = cc.callFunc(function () {

                window.slotsScene.clikeButton.monitor_ButtonInteractableState(0,true)
                window.slotsScene.clikeButton.monitor_ButtonInteractableState(1,true)
                window.slotsScene.clikeButton.monitor_ButtonInteractableState(2,true)
                
                window.slotsScene.userData["userGold"] = window.slotsScene.SceneDemo.m_nCurrGold;  
                window.slotsScene.clikeButton.setUserGoldUpdata();
                window.slotsScene.endLayer.senceLayerTest(window.slotsScene.SceneDemo.m_nRewardLine.length,window.slotsScene.SceneDemo.m_nWinGold);

                if(window.slotsScene.SceneDemo.m_nGeZiGame > 0){
                    // 小游戏切换
                    window.slotsScene.node.emit("gameSmallSwitchCall")
                }else if (window.slotsScene.isFreeCount == 0 && window.slotsScene.SceneDemo.freeCountWinGold > 0) {
                    // 进入免费游戏结算 
                    window.slotsScene.node.emit("gameFreeSettlementEndCall");
                } else if (window.slotsScene.SceneDemo.m_bFreeGame == true) {
                    // 进入免费游戏转场
                    window.slotsScene.node.emit("gameFreeSwitchCall");
                } else {
                    window.slotsScene.node.emit("gameOverSettlementCall", 1)
                }
                
                this.node.destroy();
                window.slotsScene.winLayer = null;   
            }, this);
            this.node.runAction(cc.sequence(closeTime,fadeOut, closeFunc));
        }, this);

        this.clikeLayout = false;

        window.audioMng.playEffect(window.slotsScene.audioSource[9],false);
        window.audioMng.playEffect(window.slotsScene.audioSource[10],false);
        // 金币滚动
        this.goldRollTime(this.layoutAtlas.getComponent(cc.Label), 0 ,window.slotsScene.SceneDemo.m_nWinGold);

    }

    goldRollTime(node: cc.Label, bigenGold: number, endGold: number) {
        if (endGold <= 0) { return; }; 
        let rollnumber =endGold * 0.02// / 3// Math.ceil();
        let addGold = 0;
        let time = cc.delayTime(0.02)
        let Func = cc.callFunc(function () {
            bigenGold += rollnumber;
            
            if(bigenGold >= endGold){ 
                this.node.stopAllActions();
                this.layoutAtlas.getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.m_nWinGold.toFixed(2));
                this.node.emit("endGameWinLayer",window.slotsScene.roolConfig.isWinLayerWaitTime)
            }else{
                let goldTest = this.numAddPoint(bigenGold.toFixed(2))   
                 node.string = goldTest//toFixed(2);
            } 
        }, this);
        this.node.runAction(cc.repeatForever(cc.sequence(time, Func)))
    }

    numAddPoint(vl:number):string{
        var numStr = "";
        var str = vl.toString();
        var len = str.length;
        for (var i = 0; i < len; i++){
            if(str[i]=="."){
                numStr += "/";
                i++;
            }else if((len - i) % 3 === 0 && i > 0 && (str[i]!=".")){
                numStr += ".";
            }
            numStr += str[i];
        }
        return numStr;
    }

    onButtontCall() {
        if (this.clikeLayout == false) {
            this.clikeLayout = true;
            this.node.stopAllActions();

            this.layoutAtlas.getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.m_nWinGold.toFixed(2));
            cc.log("123")
            this.node.emit("endGameWinLayer",window.slotsScene.roolConfig.isWinLayerCloseTime) 
        }else{
            
        }
    }

}
