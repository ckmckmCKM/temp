
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackSet extends cc.Component {

    @property(cc.Toggle)
    music: cc.Toggle = null;
    @property(cc.Toggle)
    sound: cc.Toggle = null;

    onLoad(){
        let _music = window.audioMng.isMusicOpen;
        let _sound = window.audioMng.isEffectOpen;
        if(_music){
            this.music.check();
        }else{
            this.music.uncheck();
        }
        if(_sound){
            this.sound.check();
        }else{
            this.sound.uncheck();
        }
    }

    onClickToggle(toggle, customEventData){
        if (customEventData == "music"){
            // console.log("music = " +toggle.isChecked);
            window.audioMng.setMusicState(toggle.isChecked);
        }else{
            // console.log("sound = " +toggle.isChecked);
            window.audioMng.setEffectState(toggle.isChecked);
        }
    }

}
