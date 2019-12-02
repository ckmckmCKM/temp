
const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackFlash extends cc.Component {

    flashNum = 0;

    onLoad() {
    }

    flashForever(time = 0.5) {
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.fadeTo(time, 100),
            cc.delayTime(0.2),
            cc.fadeTo(time, 255),
            cc.delayTime(0.2),
            // cc.callFunc(() => {
            //     console.log("000000000000000000");
            // }),

        )));
    }

    flash(num = -1, delayTime = 0.05, active = false) {
        let self = this;
        self.node.active = true;
        self.node.stopAllActions();
        self.node.opacity = 255;
        self.node.runAction(cc.repeatForever(cc.sequence(
            cc.callFunc(()=>{
                self.node.opacity = 255;
                // console.log("1111self.node.opacity = "+self.node.opacity);
            }),
            cc.delayTime(delayTime),
            cc.callFunc(() => {
                self.node.opacity = 0;
                // console.log("22self.node.opacity" +self.node.opacity);
                if (num != -1) {
                    // console.log("self.flashNum = " + self.flashNum);
                    ++self.flashNum;
                    if (self.flashNum === num) {
                        self.node.active = active;
                        self.node.opacity = active ? 255:0;
                        self.flashNum = 0;
                        self.node.stopAllActions();
                    }
                }
            }),
            cc.delayTime(delayTime),

        )));
    }

    flashRepeat(num = -1, delayTime = 0.05, active = false) {
        let _ani = cc.sequence(
            cc.fadeTo(delayTime, 100),
            cc.fadeTo(delayTime, 250),
        )
        this.node.active = true;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.repeat(_ani, num),
            cc.callFunc(() => {
                this.node.active = active;
            }),
        ));
    }

    flash1(num = -1, delayTime = 0.05, active = false) {
        let self = this;
        self.node.active = true;
        self.node.stopAllActions();
        self.node.opacity = 1;
        self.node.runAction(cc.sequence(
            cc.fadeTo(delayTime, 100),
            cc.fadeTo(delayTime, 255),
            cc.fadeTo(delayTime, 100),
            cc.fadeTo(delayTime, 255),
            cc.fadeTo(delayTime, 100),
            cc.callFunc(()=>{
                if(!active){
                    self.node.opacity = 0;
                }else{
                    self.node.opacity = 255;
                }
                self.node.stopAllActions();
            }),
        ));
        // setTimeout(() => {
        //     self.node.stopAllActions();
        //     self.node.opacity = 0;
        // }, delayTime * num * 1200);
    }

}
