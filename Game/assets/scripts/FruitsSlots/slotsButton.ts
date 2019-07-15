// 游戏按钮全部回调
const {ccclass, property} = cc._decorator;

@ccclass
export default class clikeButton extends cc.Component {
    // 当前按钮点击监听
    _onBtnToun : boolean = true;

    // 得到全部按钮(0 自动)
    @property([cc.Button])
    Button: cc.Button[] = [];

    // 按钮上文本
    @property([cc.Label])
    onButtonText : cc.Label[] = [];

    // @property([cc.SpriteFrame])
    // ButtonSprite : cc.SpriteFrame[] = [];

    onLoad() { 
        window.slotsScene.clikeButton = this; 
    }
  
    // 统一按钮监听事件
    onButtontCall(event,customEventData){  
        // 响应前先检测设置界面是否生效
        window.slotsScene.clikeButton.node.getComponent(cc.AudioSource).play();
        this.ListSetLayerCall(); 
        switch(customEventData)
        {
            // 设置按钮响应
            case "0": this.setButtonCall(); break; 
            case "1": this.stopAutoButtonCall(); break;
            case "2": this.beginButtonCall(); break;
            case "3": this.betsButtonCall(); break;
            case "4": this.autoButtonCall(); break; 
            case "9": this.freeModeQuickStopCall(); break;  
            //case "10":this.updataOverallReturnHall(event);break;
        } 
    }
    // 游戏开始
    beginButtonCall(){ 
        // 判断是否可以快停
        if(window.slotsScene.runLogic.isRunPanleState == true){ 
            window.slotsScene.isStop = true
            window.slotsScene.endLayer.senceLayerTest(null,null,"快速停止中，请稍后")
            //this.Button[1].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonSprite[1];
        }else{ 
            // 判断金币是否足够
            //if(this.deductionUserGold()){
                //this.Button[1].node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonSprite[0];
                //window.slotsScene.runLogic.runPanleBeginFunc()
                //this.monitor_Bets_Auto_ButtonState(false);
                window.slotsScene.gameState = 1
                window.slotsScene.endLayer.closeEndLayer();
                window.slotsScene.endLayer.senceLayerTest(null, null, "点击旋转，快速停止")
                window.slotsScene.SceneDemo.sendMsgRequestBetsResult(window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets]);
            // }else{
            //     // 得到金币是否满足游戏最低挡位
            //     let returnBest = this.updataInsufficient_Gold_Coins();
            //     let text = "";
            //     if(returnBest != 0){
            //         text = "金币不足,已降至最低挡位!";
            //     }else{
            //         text = "金币不足,请充值!";
            //         window.slotsScene.isGameBets = 0;
            //     }
            //     window.slotsScene.endLayer.senceLayerTest(null, null, "金币不足,请充值!")
            //     window.slotsScene.clikeButton.monitor_Game_ButtonState(1);
            //     let setscene = cc.instantiate(window.slotsScene.partLayer[4]); 
            //     window.slotsScene.node.addChild(setscene,70);
            //     window.slotsScene.slotsPrompt.setPromptLayer(text,returnBest);
            // }
        } 
    } 
    // 停止游戏自动
    stopAutoButtonCall(){
        if(window.slotsScene.isAutoConut > 0 && window.slotsScene.isAutoState == true){
            window.slotsScene.isAutoConut = 0;
            window.slotsScene.isAutoState = false;
            this.monitor_Game_ButtonState(1);
            window.slotsScene.gameState = 0;
        }
    }

    // 免费游戏快停
    freeModeQuickStopCall(){
        if(window.slotsScene.isFree == true && window.slotsScene.isFreeCount > 0 
            && window.slotsScene.gameState == 4 && this.Button[2].node.active == true){
                window.slotsScene.isStop = true
        }else{
            return;
        }
    }
  
    // 设置界面
    setButtonCall(){
        // 隐藏设置界面
        this.Button[this.Button.length-1].node.active = false;
        // 设置
        let setscene = cc.instantiate(window.slotsScene.partLayer[0]);  
        let btn = window.slotsScene.node.getChildByName("gameButtonNode").getChildByName("set") ;
        setscene.x = btn.x 
        window.slotsScene.node.addChild(setscene,70);   
    }
    // 下注界面
    betsButtonCall(){ 
        if(window.slotsScene.gameState != 0){
            this.textButtonTips("游戏正在进行中！")
        }else{
            let setscene = cc.instantiate(window.slotsScene.partLayer[1]);  
            window.slotsScene.node.addChild(setscene,70);
        }
    }
    // 自动界面
    autoButtonCall(){ 
        if(window.slotsScene.gameState != 0){
            this.textButtonTips("游戏正在进行中！")
        }else{
            let setscene = cc.instantiate(window.slotsScene.partLayer[2]); 
            window.slotsScene.node.addChild(setscene,70);
        }
    }

    // 监听二级界面未关闭
    ListSetLayerCall(){
        // 设置
        if(window.slotsScene.setLayer != null){
            // 显示设置界面
            window.slotsScene.clikeButton.Button[this.Button.length-1].node.active = true;
            window.slotsScene.setLayer.node.destroy();
            window.slotsScene.setLayer = null;
        }
        // 小奖
        if(window.slotsScene.winLayer != null){
            window.slotsScene.winLayer.onButtontCall();
        }
        // // 下注
        // if(window.slotsScene.betsLayer != null){
        //     window.slotsScene.betsLayer.node.destroy();
        //     window.slotsScene.betsLayer = null;
        // } 
        // // 自动
        // if(window.slotsScene.autoLayer != null){
        //     window.slotsScene.autoLayer.node.destroy();
        //     window.slotsScene.autoLayer = null;
        // }
        // // 小奖
        // if(window.slotsScene.winLayer != null){
        //     window.slotsScene.winLayer.node.destroy();
        //     window.slotsScene.winLayer = null;
        // }
    }

    // 监听 下注3 自动4 按钮 状态
    monitor_Bets_Auto_ButtonState(state){  
        for(let i = 3; i < this.Button.length - 1; i++){
            this.Button[i].node.getComponent(cc.Button).interactable = state;
        }
    }
    // 监听自动0、常规1、免费2按钮切换
    monitor_Game_ButtonState(index){  
        for(let i = 0; i < 3; i++){
            if(index == i ){ 
                this.Button[i].node.active = true; 
            }else{
                this.Button[i].node.active = false;
                //this.Button[i].node.getComponent(cc.Button).interactable = false;
            }
        }
        if(index == 1){
            this.Button[0].node.getChildByName("Sprite").stopAllActions();
            this.Button[2].node.getChildByName("Sprite").stopAllActions();
        }else if(index == 0){
            let animation = this.Button[0].node.getChildByName("Sprite").getComponent(cc.Animation)//.play()
            animation.play();
            this.Button[2].node.getChildByName("Sprite").stopAllActions();
        }else if(index == 2){
            this.Button[2].node.getChildByName("Sprite").getComponent(cc.Animation).play()
            this.Button[0].node.getChildByName("Sprite").stopAllActions();
        }
    }
    // 自動，常規，免費按鈕 狀態
    monitor_ButtonInteractableState(index,state){
        //this.Button[index].node.active = state;
        this.Button[index].node.getComponent(cc.Button).interactable = state;
    }
    // 设置自动按钮下文本显示
    setAutoButtonLableText(){
        if(window.slotsScene.isAutoConut < 100){
            this.onButtonText[0].string = window.slotsScene.isAutoConut;
        }else{
            this.onButtonText[0].string = "无限";
            window.slotsScene.endLayer.senceLayerTest(null,null,"老子有钱，任意旋转");
        }
    }

    // 扣除玩家下注金币
    deductionUserGold(){
        let totalbets = window.slotsScene.isGameLine * window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets] * 0.01;
        // 金币不足
        if(window.slotsScene.userData["userGold"] < totalbets){
            console.log("金币不足"); 
            return false;
        }else{
            window.slotsScene.userData["userGold"] = window.slotsScene.userData["userGold"] - totalbets
        }
        this.setUserGoldUpdata()
        return true;
    }

    // 金币不足后刷新下注倍数
    updataInsufficient_Gold_Coins(){
        for (let i = window.slotsScene.isGameBetsAny.length - 1; i > -1; i--) {            
            if(window.slotsScene.userData["userGold"] > (window.slotsScene.isGameLine * window.slotsScene.isGameBetsAny[i] * 0.01)){ 
                return i;  
            }
        } 
        return 0;
    }

    // 设置主界面线、单线押注、总押注金币 
    setSlotsSceneBetsTextUpdata(){
        if(window.slotsScene.isGameLine == 0 ){
            window.slotsScene.isGameLine = window.slotsScene.isGameMaxLine
        } 
        window.slotsScene.gameText[3].string = "￥" + (window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets] * 0.01).toFixed(2);
        let totalbets = window.slotsScene.isGameLine * window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets];
        window.slotsScene.gameText[2].string = "￥" + (totalbets * 0.01).toFixed(2);
    }
    // 刷新金币
    setUserGoldUpdata(){
        let gold = window.slotsScene.userData["userGold"].toFixed(2);
        window.slotsScene.gameText[1].string = "￥" + gold.toString();
    }
    // // 刷新返回大厅坐标
    // updataOverallReturnHall(event){
    //     console.log(event); 
    // }

    textButtonTips(str){   
        let fadeIn = cc.fadeIn(0.2)
        let time = cc.delayTime(0.5)
        let fadeOut = cc.fadeOut(0.5)
        window.slotsScene.isFreeShowSprite[2].getChildByName("Label").getComponent(cc.Label).string = str;
        window.slotsScene.isFreeShowSprite[2].runAction(cc.sequence(fadeIn,time,fadeOut))
    }
}
