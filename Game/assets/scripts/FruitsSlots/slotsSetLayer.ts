const {ccclass, property} = cc._decorator;

@ccclass
export default class setLayer extends cc.Component {
    // 滚动图片资源
    @property(cc.Button)
    Button: cc.Button = null;

    // 滚动图片资源  0正常加速，1超级加速，2音效开 3音效关 4音乐开 5音乐关
    @property([cc.SpriteFrame])
    SpriteFrame: cc.SpriteFrame[] = [];

    onLoad() {
    }
    // 构造
    start() {  
        this.node.runAction(cc.scaleTo(0.2,1)); 
        window.slotsScene.setLayer = this; 
        if(!window.slotsScene.isAccelerate){
            this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[0]; 
        }else{
            this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[1];
        } 
    }

    // 按钮
    onCallButton(event,customEventData){ 
        //window.slotsScene.clikeButton.node.getComponent(cc.AudioSource).play();
        switch(customEventData)
        {
            case "5": this.closeSetLayerCall(); break;
            case "6": this.opneHelpLayerCall(); break;
            case "7": this.musicButtonCall(); break; 
            case "8": this.accelerateButtonCall(); break;  
            case "9": this.effButtonCall(); break;  
        }
    }

    // 关闭设置层
    closeSetLayerCall(){  
        //window.slotsScene.clikeButton.ListSetLayerCall();
        window.slotsScene.clikeButton.Button[window.slotsScene.clikeButton.Button.length-1].node.active = true;
        // // 删除
         this.node.destroy();
        // // 清除
         window.slotsScene.setLayer = null;
    }

    // 打开帮助界面
    opneHelpLayerCall(){ 
        window.slotsScene.clikeButton.ListSetLayerCall();
        let setscene = cc.instantiate(window.slotsScene.partLayer[3]); 
        window.slotsScene.node.addChild(setscene,70);
    }
    // 音效按钮
    effButtonCall(){
        // if(!window.slotsScene.isAccelerate){
        //     this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[0];
        // }else{
        //     this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[1];
        // }
    }
    // 音乐按钮
    musicButtonCall(){
        // if(!window.slotsScene.isAccelerate){
        //     this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[0];
        // }else{
        //     this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[1];
        // }
    }
    
    // 游戏加速
    accelerateButtonCall(){
        // 游戏加速
        window.slotsScene.isAccelerate = !window.slotsScene.isAccelerate;
        if(!window.slotsScene.isAccelerate){
            this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[0];
        }else{
            this.Button.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.SpriteFrame[1];
        }  
    }
}
