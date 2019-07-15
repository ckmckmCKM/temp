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
export default class endLayer extends cc.Component {

    @property(cc.Node)
    box: cc.Node;
    boxinfo: cc.Node[] = [];

    @property(cc.Node)
    runnode :cc.Node;

    @property(cc.Node)
    line: cc.Node;
    lineCount: cc.Node[] = [];
    lineGold: cc.Node[] = [];



    // 结束层是否显示
    layerActive: boolean = false;

    onLoad() {
        window.slotsScene.endLayer = this;
    }

    // 构造
    start() {
        this.node.active = this.layerActive;
        // 图标
        for (let i = 0; i < 15; i++) {
            this.boxinfo[i] = this.box.getChildByName("icon_" + i);  
        }
        // 线
        for (let i = 0; i < 9; i++) {
            this.lineCount[i] = this.line.getChildByName("line" + i); 
            this.lineGold[i] = this.lineCount[i].getChildByName("LabelAtlas"); 
            this.lineGold[i].getComponent(cc.Label).string = "";
        }
    }

    // 赋值图片
    setResultImage() {
        for (let index = 0; index < 15; index++) { 
            this.boxinfo[index].getComponent(cc.Sprite).spriteFrame = window.slotsScene.runLogic.gameRunRollIcon[window.slotsScene.SceneDemo.m_nResult[index]];
        }
    }

    // 结算动画逻辑
    slotsEndLayer(show_type) {
        let slef = this;
        // window.slotsScene.SceneDemo
        // 如果没有中奖，或者没有连线
        if( show_type == 0 && window.slotsScene.SceneDemo.m_nRewardLine.length <= 0) { 
                //window.slotsScene.node.emit("gameOverSettlementCall",1);  
                return;
        }
 
        let run_scale_action = function (index) {
            let ScaleAction = cc.scaleBy(0.5, 0.7);
            let actionBack = ScaleAction.reverse();
            let seq = cc.sequence(ScaleAction, actionBack);
            slef.boxinfo[Number(index)].runAction(cc.repeatForever(seq));
            slef.boxinfo[Number(index)].color = new cc.Color(255, 255, 255);
        }

        let stop_scale_action = function () {
            for (let i = 0; i < 15; i++) {
                slef.boxinfo[i].stopAllActions();
                slef.boxinfo[i].setScale(1);
                slef.boxinfo[i].color = cc.color(178, 178, 178);
            }
        }

        // 显示全部线
        let showLineCount = function (line) { 
            for (let i = 0; i < slef.lineCount.length; i++) {
                if (line == i && slef.lineCount[i].active == false) {
                    slef.lineCount[Number(i)].active = true;
                    slef.lineCount[Number(i)].opacity = 255;
                    slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange = 1;
                    slef.lineGold[Number(i)].getComponent(cc.Label).string = ""; 
                }
            }
        } 
         // 显示线并且显示金币
         let showLineCountAndGold = function (line, gold) {
            for (let i = 0; i < slef.lineCount.length; i++) {
                if (line.Index == i && slef.lineCount[i].active == false) {
                    slef.lineCount[Number(i)].active = true;
                    slef.lineCount[Number(i)].opacity = 255;

                    let fillRangeSub = 0.2
                    slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange = 0;
                    // if(line.Start == 0){
                    //     slef.lineCount[Number(i)].getComponent(cc.Sprite).fillStart = 0;
                    // }else{
                    //     slef.lineCount[Number(i)].getComponent(cc.Sprite).fillStart = 1; 
                    //     fillRangeSub = -0.2;
                    // }
                    cc.log("56789")
                    let fillRangTime = cc.delayTime(0.1);
                    let fillRangFunc = cc.callFunc(function(){
                        slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange = fillRangeSub + slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange;

                        if(slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange >= 0.5){
                            slef.lineGold[Number(i)].active = true;
                            slef.lineGold[Number(i)].getComponent(cc.Label).string = slef.numAddPoint(gold.toFixed(2));
                        }
                        if(slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange == 1){
                                slef.lineCount[Number(i)].stopAllActions();
                                slef.lineCount[Number(i)].runAction(cc.repeatForever(cc.sequence(cc.fadeIn(0.2),cc.delayTime(1),cc.fadeOut(0.5))));
                        }

                    });
                    slef.lineCount[Number(i)].runAction(cc.repeatForever(cc.sequence(fillRangTime,fillRangFunc)));
                    
                    
                }
            }
        }
        // 隐藏线
        let activeLineCount = function () {
            cc.log("1234")
            for (let i = 0; i < slef.lineCount.length; i++) {
                slef.lineCount[Number(i)].active = false;
                slef.lineCount[Number(i)].getComponent(cc.Sprite).fillRange = 0;
                slef.lineCount[Number(i)].opacity = 255;
                slef.lineGold[Number(i)].getComponent(cc.Label).string = "";
            }
        } 

        // 全部中奖图标
        let all_win_box = [];  // number  all_win_box[0]
        // 中间线下标，（用于播放中奖连线图标）
        let All_line = [];
        // 单条中奖线
        let box_by_lineGold = [];
        // 单条中间图标
        let box_by_icon = [];
 

        // 根据赢得倍率显示中奖特效 
        // if(window.slotsScene.SceneDemo.m_nWinPeiLv > 15){
        //     this.goGameEndLayer(9,window.slotsScene.roolConfig.isGoWinLayerTime) ;
        // }else if(window.slotsScene.SceneDemo.m_nWinPeiLv > 10){
        //     this.goGameEndLayer(8,window.slotsScene.roolConfig.isGoWinLayerTime) 
        // }else if(window.slotsScene.SceneDemo.m_nWinPeiLv > 5){
        //     this.goGameEndLayer(7,window.slotsScene.roolConfig.isGoWinLayerTime)
        // }else if(window.slotsScene.SceneDemo.m_nWinPeiLv > 0){
        this.goGameEndLayer(14,window.slotsScene.roolConfig.isGoWinLayerTime)
        // }

        for (let i = 0; i < window.slotsScene.SceneDemo.m_nRewardLine.length; i++) {
            // 存全部中奖线数
            All_line.push(window.slotsScene.SceneDemo.m_nRewardLine[i]);
            // 存全部中奖线对应引得的金币、
            box_by_lineGold.push(window.slotsScene.SceneDemo.m_nRewardLine[i].Gold)
            let winBox = []
            for (let k = 0; k < window.slotsScene.SceneDemo.m_nRewardLine[i].Count; k++) {
                winBox.push(window.slotsScene.SceneDemo.linePosition[window.slotsScene.SceneDemo.m_nRewardLine[i].Index][k]);
                all_win_box.push(window.slotsScene.SceneDemo.linePosition[window.slotsScene.SceneDemo.m_nRewardLine[i].Index][k])
            }
            box_by_icon.push(winBox); 
        } 
        stop_scale_action();
        activeLineCount();
        for (let i = 0; i < all_win_box.length; i++) {
            run_scale_action(all_win_box[i]); 
        }
        for(let i = 0; i < All_line.length ; i++){
            if(All_line.length == 1){
                showLineCountAndGold(All_line[i],box_by_lineGold[i]);
            }else{
                showLineCount(All_line[i].Index);
            } 
        }
        // 特殊奖励 并且没有中奖
        if(show_type != 0 && window.slotsScene.SceneDemo.m_nWinPeiLv == 0 ){
            // 得出特殊奖励ICON下标
            let specialIcon = [];
            for(let i = 0; i < all_win_box.length ;i++){
                if(show_type == window.slotsScene.SceneDemo.m_nResult[all_win_box[i]]){
                    specialIcon.push(all_win_box[i]);
                }
            }
            // 免费游戏
            if(show_type == 9){
                window.slotsScene.node.emit("gameFreeSwitchCall");
                // 小游戏
            }else if(show_type == 10){ 
                window.slotsScene.node.emit("gameSmallSwitchCall");
            }
        } 
 
        if (box_by_icon.length !=0) {
            let loopEvent = [];
            for (let i = 0; i < box_by_icon.length; i++) {
                let loopTime = cc.delayTime(2);
                loopEvent.push(loopTime);

                let temp_box_table = box_by_icon[i];
                let action_box_by_line_fun = function () {
                    stop_scale_action();
                    activeLineCount();
                    showLineCountAndGold(All_line[i], box_by_lineGold[i]);
                    for (let k = 0; k < temp_box_table.length; k++) {
                        let index = temp_box_table[k];
                        run_scale_action(index);
                    }
                }
                let callFunc = cc.callFunc(function () {
                    action_box_by_line_fun();
                }, this);
                loopEvent.push(callFunc);
            }
            let loopTime = cc.delayTime(2);
            loopEvent.push(loopTime);
            //let seq = ;
            this.runnode.runAction(cc.repeatForever(cc.sequence(loopEvent)));
        } 
    }

    closeEndLayer(){
        this.runnode.stopAllActions();
        this.node.stopAllActions(); 
        window.slotsScene.runLogic.node.active = true;
        this.node.active = this.layerActive;
        for (let i = 0; i < this.boxinfo.length; i++) {
            this.boxinfo[i].stopAllActions();
            this.boxinfo[i].setScale(1);
            this.boxinfo[i].color = cc.color(255, 255, 255);
        }
        for (let i = 0; i < this.lineCount.length; i++) {
            this.lineCount[Number(i)].active = false;
            this.lineCount[Number(i)].opacity = 255;
            this.lineCount[Number(i)].getComponent(cc.Sprite).fillRange = 0;
            this.lineGold[Number(i)].getComponent(cc.Label).string = "";
        } 
    }

    // 结算界面调用
    goGameEndLayer(id,time){
        window.audioMng.playEffect(window.slotsScene.audioSource[3],false);
        let waitTime = cc.delayTime(time);
        let callFunc = cc.callFunc(function(){
            let setscene = cc.instantiate(window.slotsScene.partLayer[id]); 
            window.slotsScene.node.addChild(setscene,70);
        },this);
        this.node.runAction(cc.sequence(waitTime, callFunc));
    }

    // 小游戏转场
    goSmallGameShowLayer(){ 
        this.closeEndLayer();
        window.audioMng.playEffect(window.slotsScene.audioSource[8],false);
        let time = cc.delayTime(1.5)
        let fadeOut = cc.fadeOut(0.5)
        let func = cc.callFunc(function () {
            window.slotsScene.setscene.destroy();
            window.slotsScene.setscene = null;
            window.slotsScene.isSmall = true; 

            let setscene = cc.instantiate(window.slotsScene.partLayer[11]);
            window.slotsScene.node.addChild(setscene, 70);
        }, this);
        window.slotsScene.setscene.runAction(cc.sequence(time,fadeOut, func));
    }

    // 免费游戏结算
    freeSettlement(id,time){
        window.slotsScene.setscene = cc.instantiate(window.slotsScene.partLayer[id]);
        window.slotsScene.node.addChild(window.slotsScene.setscene, 70);
        window.slotsScene.setscene.getChildByName("Back").getChildByName("one").getComponent(cc.Label).string = window.slotsScene.SceneDemo.m_nFreeAllCount;
        window.slotsScene.setscene.getChildByName("Back").getChildByName("tow").getComponent(cc.Label).string = this.numAddPoint(window.slotsScene.SceneDemo.freeCountWinGold.toFixed(2));
        let waitTime = cc.delayTime(time);
        let callFunc = cc.callFunc(function(){ 
            window.slotsScene.setscene.destroy();
            window.slotsScene.setscene = null;
            window.slotsScene.node.stopActionByTag(108)
            if(window.slotsScene.isAutoConut > 0){
                window.slotsScene.gameState = 2;
            }else{
                window.slotsScene.gameState = 0;
            }
            window.slotsScene.isFreeCount = -1;
            window.slotsScene.SceneDemo.freeCountWinGold = 0;
            window.slotsScene.SceneDemo.m_nFreeAllCount = 0;
            window.slotsScene.node.emit("gameOverSettlementCall",1)
        },this);
        window.slotsScene.setscene.runAction(cc.sequence(waitTime, callFunc));
    }

    // 免费游戏转场
    goFreeGameShowLayer(){  
        let time = cc.delayTime(2)
        let fadeOut = cc.fadeOut(0.5)
        let func = cc.callFunc(function () {
            
            window.slotsScene.setscene.destroy();
            window.slotsScene.setscene = null;
            
            window.slotsScene.clikeButton.monitor_Game_ButtonState(2);
            window.slotsScene.isFreeCount = window.slotsScene.isFreeCount + window.slotsScene.SceneDemo.m_nFreetTimes;
            window.slotsScene.clikeButton.onButtonText[1].string = window.slotsScene.isFreeCount;

            window.slotsScene.isFreeShowSprite[0].active = true;
            window.slotsScene.node.stopActionByTag(108)
            let loopTime = cc.delayTime(0.2)
            let loopFunc = cc.callFunc(function () { 
                if (window.slotsScene.isFreeShowSprite[0].active == true) {
                    window.slotsScene.isFreeShowSprite[0].active = false;
                    window.slotsScene.isFreeShowSprite[1].active = true;
                } else {
                    window.slotsScene.isFreeShowSprite[0].active = true;
                    window.slotsScene.isFreeShowSprite[1].active = false;
                }
                //window.slotsScene.node.emit("gameOverSettlementCall",1)
            }, this);
            let tag = cc.repeatForever(cc.sequence(loopTime, loopFunc))
            tag.setTag(108)
            window.slotsScene.node.runAction(tag)
            window.slotsScene.runLogic.isRunPanleState = false; 
            window.slotsScene.SceneDemo.m_nFreeAllCount = window.slotsScene.isFreeCount;
            window.slotsScene.gameState = 2;
            window.slotsScene.node.emit("gameOverSettlementCall", 1) 
        }, this);
        window.slotsScene.setscene.runAction(cc.sequence(time,fadeOut, func));
    }


    senceLayerTest(line,gold,str){
        if(!str){ 
            window.slotsScene.gameText[5].node.active = true;
            window.slotsScene.gameText[4].node.active = true;
            window.slotsScene.gameText[6].node.active = false; 
            window.slotsScene.gameText[4].getComponent(cc.Label).string = "恭喜发财，喜中" + line + "线";
            window.slotsScene.gameText[5].getComponent(cc.Label).string = "￥" + gold.toFixed(2);
        }else{ 
            window.slotsScene.gameText[6].node.active = true;
            window.slotsScene.gameText[6].getComponent(cc.Label).string = str;
            window.slotsScene.gameText[5].node.active = false;
            window.slotsScene.gameText[4].node.active = false;
        }
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
}
