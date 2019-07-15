
import { showPanelIdType, showPanelType, cardCharacterType, AudioType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackAudioLayer extends cc.Component {

    @property([cc.AudioClip])
    audios: cc.AudioClip[] = [];

    onLoad(){
        window.RedBlack.RedBlackAudioLayer = this;
    }

    getAudio(id){
        return this.audios[id];
    }

}
