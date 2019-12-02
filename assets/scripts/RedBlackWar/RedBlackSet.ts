
const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackSet extends cc.Component {

    @property(cc.Node)
    music: cc.Node = null;
    @property(cc.Node)
    sound: cc.Node = null;
    @property([cc.Node])
    jinying: cc.Node[] = [];

    onLoad() {
        let _music = window.audioMng._musicVolume;
        let _sound = window.audioMng._effectVolume;
        this.music.getComponent(cc.Slider).progress = _music;
        this.music.getChildByName("pro").getComponent(cc.ProgressBar).progress = _music;
        this.sound.getComponent(cc.Slider).progress = _sound;
        this.sound.getChildByName("pro").getComponent(cc.ProgressBar).progress = _sound;
        if (_music === 0) {
            this.jinying[0].active = true;
        } else {
            this.jinying[0].active = false;
        }
        if (_sound === 0) {
            this.jinying[1].active = true;
        } else {
            this.jinying[1].active = false;
        }
    }

    onClick(toggle, customEventData) {
        let _bar = toggle.node.getComponent(cc.Slider).progress;
        if (customEventData == "music") {
            window.audioMng.setMusicVolume(_bar);
            this.music.getComponent(cc.Slider).progress = _bar;
            this.music.getChildByName("pro").getComponent(cc.ProgressBar).progress = _bar;
            if (_bar === 0) {
                this.jinying[0].active = true;
            } else {
                this.jinying[0].active = false;
            }
        } else {
            window.audioMng.setEffectVolume(_bar);
            this.sound.getComponent(cc.Slider).progress = _bar;
            this.sound.getChildByName("pro").getComponent(cc.ProgressBar).progress = _bar;
            if (_bar === 0) {
                this.jinying[1].active = true;
            } else {
                this.jinying[1].active = false;
            }
        }
    }

}
