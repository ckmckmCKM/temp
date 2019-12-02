
import { AudioType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackButton extends cc.Component {

    // @property([cc.AudioClip])
    // audios: cc.AudioClip[] = [];

    onLoad() {
        // window.RedBlack.RedBlackAudioLayer = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this._play.bind(this), this);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._play.bind(this), this);
    }

    _play() {
        if (window.RedBlack.RedBlackGamePanel && window.RedBlack.RedBlackGamePanel.getBetPlayEffect()) {
            return;
        }
        window.audioMng.playEffect(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.dianji), false);
    }

}
