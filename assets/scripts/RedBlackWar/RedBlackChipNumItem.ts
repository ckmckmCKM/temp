
import { getChipNum, chipId } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

const CHIP_ID = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    ".": 10,
    "千": 11,
    "万": 12,
    "百万": 13,
    "千万": 14,
    "亿": 15,
};

@ccclass
export default class RedBlackChipNumItem extends cc.Component {

    @property(cc.Sprite)
    numSp: cc.Sprite = null;
    @property(cc.SpriteFrame)
    numSprits: cc.SpriteFrame[] = [];

    updateInfo(zi) {
        this.numSp.spriteFrame = this.numSprits[CHIP_ID[zi]];
    }

}
