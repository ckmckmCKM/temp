class ButtonSwitch{
    //关
    static button_close(button,self){
        console.log(self.getChildByName(button));
        console.log(self.getChildByName(button).getComponent(cc.Button));
        self.getChildByName(button).getComponent(cc.Button).interactable = false;
        self.getChildByName(button).getChildByName('Background').color = new cc.Color(150, 150, 150);
        self.getChildByName(button).getChildByName('Background').getChildByName('label').getComponent(cc.Label).color = new cc.Color(150, 150, 150);
    }
    //开
    static button_open(button,self){
        self.getChildByName(button).getComponent(cc.Button).interactable = true;
        self.getChildByName(button).getChildByName('Background').color = new cc.Color(255, 255, 255);
        self.getChildByName(button).getChildByName('Background').getChildByName('label').getComponent(cc.Label).color = new cc.Color(255, 233, 232);
    }
    //特殊开 跟到底
    static button_with_open(button,self){
        self.getChildByName(button).getComponent(cc.Button).interactable = true;
        self.getChildByName(button).getChildByName('Background').color = new cc.Color(255, 255, 255);
        self.getChildByName(button).getChildByName('Background').getChildByName('label').getComponent(cc.Label).color = new cc.Color(255, 233, 232);
    }
    //特殊关 跟到底
    static button_with_close(button,self){
        self.getChildByName(button).getComponent(cc.Button).interactable = false;
        self.getChildByName(button).getChildByName('Background').color = new cc.Color(150, 150, 150);
        self.getChildByName(button).getChildByName('Background').getChildByName('label').getComponent(cc.Label).color = new cc.Color(150, 150, 150);
    }
}
window.ButtonSwitch = ButtonSwitch