
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

    flash(num = -1, delayTime = 0.05) {
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
                        self.node.active = false;
                        self.flashNum = 0;
                    }
                }
            }),
            cc.delayTime(delayTime),

        )));
    }

}
