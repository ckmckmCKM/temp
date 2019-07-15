const {ccclass, property} = cc._decorator;

@ccclass
export default class autoLayer extends cc.Component {
    @property(cc.Label)
    setLabel : cc.Label = null;

    
    // 构造
    start() {  
        this.node.runAction(cc.scaleTo(0.2,1)); 
        window.slotsScene.autoLayer = this; 
        // 设置默认自动次数
        window.slotsScene.isAutoConut = 10;
        this.setLabel.string = window.slotsScene.isAutoConut + "次旋转";
    }

    // 统一按钮监听事件
    onButtontCall(event,customEventData){  
        window.slotsScene.clikeButton.node.getComponent(cc.AudioSource).play();
        // 响应前先检测设置界面是否生效
        //this.ListSetLayerCall();
        switch(customEventData)
        { 
            case "10": this.closeLayerButtonCall(); break;
            case "15": this.autoBeginButtonCall(); break;
            case "16": this.SliderCallFunc(event); break;  
        } 
    }
    // 关闭按钮
    closeLayerButtonCall(){
        let isScaleTo = cc.scaleTo(0.2,0);
        let callFunc = cc.callFunc(function(){ 
            this.node.parent.destroy();
            window.slotsScene.autoLayer = null;
        },this);
        this.node.runAction(cc.sequence( isScaleTo,callFunc));
    }
    // 自动游戏开始按钮
    autoBeginButtonCall(){
        // 没有设置自动次数不进行任何操作
        if(window.slotsScene.isAutoConut == 0){
            return;
        }
        window.slotsScene.gameState = 2
        window.slotsScene.isAutoState = true
        //window.slotsScene.clikeButton.monitor_Bets_Auto_ButtonState(false); 
        window.slotsScene.clikeButton.monitor_Game_ButtonState(0);
        window.slotsScene.clikeButton.setAutoButtonLableText();
        window.slotsScene.endLayer.closeEndLayer();

        if(window.slotsScene.runLogic.isRunPanleState == false){
            window.slotsScene.SceneDemo.sendMsgRequestBetsResult(window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets]); 
        } 

        this.closeLayerButtonCall()
    }

    // 滑动条监听
    SliderCallFunc(event){ 
        window.slotsScene.isAutoConut = event.progress.toFixed(1) * 100 + 10;
        if(window.slotsScene.isAutoConut >= 100){
            this.setLabel.string = "无限旋转";
        }else{
            this.setLabel.string = window.slotsScene.isAutoConut + "次旋转";
        }
    }
}
