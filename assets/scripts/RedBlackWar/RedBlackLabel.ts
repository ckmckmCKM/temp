
import { getChipNum } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackLabel extends cc.Component {

    @property(cc.Label)
    win: cc.Label = null;
    @property(cc.Label)
    lose: cc.Label = null;
    // @property(cc.Node)
    // zi: cc.Node = null;
    // @property(cc.SpriteFrame)
    // loseSp: cc.SpriteFrame[] = [];
    // @property(cc.SpriteFrame)
    // winSp: cc.SpriteFrame[] = [];

    setLable(num = 0) {
        let _numObj = getChipNum(Math.abs(num), true);
        this.win.string = (num >= 0 ? "+" : "") + _numObj.num + _numObj.zi;
        this.lose.string = (num < 0 ? "-" : "") + _numObj.num + _numObj.zi;
        this.win.node.active = (num >= 0);
        this.lose.node.active = !(num >= 0);
        // console.error("num = " + num);
        // console.error("_numObj.num = " + _numObj.num);
        // if (_numObj.zi !== "") {
        //     this.zi.active = true;
        //     if (num >= 0) {
        //         this.zi.getComponent(cc.Sprite).spriteFrame = (_numObj.zi === "万" ? this.winSp[0] : this.winSp[1])
        //     } else {
        //         this.zi.getComponent(cc.Sprite).spriteFrame = (_numObj.zi === "万" ? this.loseSp[0] : this.loseSp[1])
        //     }
        // } else {
        //     this.zi.active = false;
        // }
    }

}
