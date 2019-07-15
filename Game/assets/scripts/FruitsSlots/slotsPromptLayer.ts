// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class slotsPrompt extends cc.Component {
    // 提示框确定显示
    // 0 金币不足， 1 退出游戏
    _promptShowCallWhy = 0
    // 确定，取消 按钮
    @property([cc.Button])
    Button : cc.Button[] = [];

    @property(cc.Label)
    Label : cc.Label  = null;

    isGameBets : number = 0;

    onLoad() {
        window.slotsScene.slotsPrompt = this; 
    }
    // 构造
    start() {  
        this.node.runAction(cc.scaleTo(0.2,1));   
    }

    // 按钮
    onCallButton(event,customEventData){
        window.slotsScene.clikeButton.node.getComponent(cc.AudioSource).play();
        switch(customEventData)
        {
            case "10": this.closeLayerButtonCall(); break;
            // 提示框监听
            case "11": this.promptSureCall(); break;
            case "12": this.promptCancelCall(); break;
        }
    }

    // 关闭二级界面
    closeLayerButtonCall(){ 
        let isScaleTo = cc.scaleTo(0.2,0);
        let callFunc = cc.callFunc(function(){ 
            this.node.parent.destroy();
            window.slotsScene.slotsPrompt = null;
        },this);
        this.node.runAction(cc.sequence( isScaleTo,callFunc));
    }

    // 设置提示框页面显示
    setPromptLayer(textLable,isGameBets){ 
        this.Label.string = textLable;
        this.isGameBets = isGameBets;
    }

    // 提示框取消
    promptCancelCall(){
        this.closeLayerButtonCall();
    }

    setPromptCancelCallState(state){
        this._promptShowCallWhy = state; 
    }
    getPromptCancelCallState(){ 
        return this._promptShowCallWhy;
    }

    // 提示框确定
    promptSureCall(){
        // 金币不足
        if(this.getPromptCancelCallState() == 0){  
            window.slotsScene.isGameBets = this.isGameBets;
            window.slotsScene.clikeButton.setSlotsSceneBetsTextUpdata();
            this.closeLayerButtonCall();
        }else{
            // 退出游戏
        }
    }
}
