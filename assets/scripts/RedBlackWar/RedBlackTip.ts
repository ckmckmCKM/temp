

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackTip extends cc.Component {

    @property(cc.Label)
    tipLable: cc.Label = null;
    _startOpacity = false;


    setTip(str = "123", delayTime = 2) {
        this.tipLable.string = str;
        this._startOpacity = false;
        this.node.opacity = 255;
        setTimeout(() => {
            this._startOpacity = true;
        }, delayTime * 1000);
    }

    update() {
        if (this.node.opacity <= 100) {
            this.node.opacity = 101;
        } else {
            this.node.opacity -= 1;
        }
        if (this._startOpacity) {
            this.node.destroy();
        }
    }

}
