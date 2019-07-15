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
    layoutAtlas: cc.Node;

    @property(cc.Node)
    isPrefab: cc.Node = null;

    onLoad() {
        window.slotsScene.winLayer = this;
    }

    start() { 
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(0, false)
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(1, false)
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(2, false)
        this.node.on("endGameWinLayer", function (event) {
            window.audioMng.playEffect(window.slotsScene.audioSource[5], false);
            this.isPrefab.active = true

            let closeTime = cc.delayTime(event);
            let fadeOut = cc.fadeOut(0.5);
            let closeFunc = cc.callFunc(function () { 
                window.slotsScene.clikeButton.monitor_ButtonInteractableState(0, true)
                window.slotsScene.clikeButton.monitor_ButtonInteractableState(1, true)
                window.slotsScene.clikeButton.monitor_ButtonInteractableState(2, true)

                window.slotsScene.userData["userGold"] = window.slotsScene.userData["userGold"] + window.slotsScene.SceneDemo.m_nWinGold;
                window.slotsScene.endLayer.senceLayerTest(window.slotsScene.SceneDemo.m_nRewardLine.length,window.slotsScene.SceneDemo.m_nWinGold);
                if (window.slotsScene.SceneDemo.m_nGeZiGame > 0) {
                    // 小游戏切换
                    window.slotsScene.node.emit("gameSmallSwitchCall")
                } else {
                    window.slotsScene.node.emit("gameOverSettlementCall", 1)
                }
                this.node.destroy();
                window.slotsScene.winLayer = null;
            }, this);
            this.node.runAction(cc.sequence(closeTime, fadeOut, closeFunc));
        }, this);

        //this.layoutAtlas.getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.m_nWinGold.toFixed(2));

        this.isPrefab.active = false;
        
        this.clikeLayout = false;

        this.goldRollTime(this.layoutAtlas.getComponent(cc.Label), 0 ,window.slotsScene.SceneDemo.m_nWinGold);

        // if(window.slotsScene.gameState == 2 && window.slotsScene.isAutoState && window.slotsScene.isAutoConut > 0){
        //     this.node.emit("endGameWinLayer",1)
        // }
    }

    goldRollTime(node: cc.Label, bigenGold: number, endGold: number) {
        if (endGold <= 0) { return; };
        let rollnumber = endGold * 0.02 /// 3// Math.ceil();
        let addGold = 0;
        let time = cc.delayTime(0.02)
        let Func = cc.callFunc(function () {
            bigenGold += rollnumber;

            if (bigenGold >= endGold) {
                this.node.stopAllActions();
                this.layoutAtlas.getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.m_nWinGold.toFixed(2));
                this.node.emit("endGameWinLayer", window.slotsScene.roolConfig.isWinLayerWaitTime)
            } else {
                let goldTest = this.numAddPoint(bigenGold.toFixed(2))
                node.string = goldTest//toFixed(2);
            }
        }, this);
        this.node.runAction(cc.repeatForever(cc.sequence(time, Func)))
    }

    numAddPoint(vl: number): string {
        var numStr = "";
        var str = vl.toString();
        var len = str.length;
        for (var i = 0; i < len; i++) {
            if (str[i] == ".") {
                numStr += "/";
                i++;
            } else if ((len - i) % 3 === 0 && i > 0 && (str[i] != ".")) {
                numStr += ".";
            }
            numStr += str[i];
        }
        return numStr;
    }

    // 点击收分
    onButtontCall() {  
        if (this.clikeLayout == false) {
            this.clikeLayout = true;
            this.node.stopAllActions(); 
            this.layoutAtlas.getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.m_nWinGold.toFixed(2));

            this.node.emit("endGameWinLayer", 0.5)
        }
    }

    // 点击比倍
    onButtontSpecificCall() {
        this.node.destroy();
        window.slotsScene.winLayer = null;
        window.slotsScene.endLayer.closeEndLayer();
        window.slotsScene.setscene = cc.instantiate(window.slotsScene.partLayer[6]);
        window.slotsScene.setscene.getComponent(cc.Animation).play();
        window.slotsScene.node.addChild(window.slotsScene.setscene, 70);
    }

}
