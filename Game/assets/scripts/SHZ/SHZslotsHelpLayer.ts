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
export default class helpLayer extends cc.Component {

    

    onLoad() {
    }
    // 构造
    start() {  
        this.node.runAction(cc.scaleTo(0.2,1)); 
        window.slotsScene.helpLayer = this; 
    }

    // 按钮
    onCallButton(event,customEventData){
        window.audioMng.playEffect(window.slotsScene.audioSource[1],false);
        switch(customEventData)
        {
            case "10": this.closeLayerButtonCall(); break;
        }
    }

    // 关闭二级界面
    closeLayerButtonCall(){ 
        let isScaleTo = cc.scaleTo(0.2,0);
        let callFunc = cc.callFunc(function(){ 
            this.node.parent.destroy();
            window.slotsScene.helpLayer = null;
        },this);
        this.node.runAction(cc.sequence( isScaleTo,callFunc));
    }

}
