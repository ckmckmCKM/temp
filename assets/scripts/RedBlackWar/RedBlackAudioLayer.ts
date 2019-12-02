
const { ccclass, property } = cc._decorator;

const AUDIO_STRING = ["dianji", "cardType/danzhang", "cardType/duizi", "cardType/shunzi",
    "cardType/jinhua", "cardType/shunjin", "cardType/baozi", "fanpai", "jiesuanchouma",
    "kaishixiazhu", "qianzou", "ruchang", "tingzhixiazhu", "xiazhu1", "xiazhu2",
     "daojishi", "dianji", "VS", "Win_m", "Win_w", "Number"];

@ccclass
export default class RedBlackAudioLayer extends cc.Component {

    // @property([cc.AudioClip])
    // audios: cc.AudioClip[] = [];

    audioClips = [];

    onLoad() {
        window.RedBlack = window.RedBlack || {};
        window.RedBlack.RedBlackAudioLayer = this;
        this.loadAudio(0, this, this.loadAudio);
        // let _len = AUDIO_STRING.length;//this.audios.length;
        // for (let i = 0; i < _len; ++i) {
        //     let _str = "./RedBlackWar/mp3/" + AUDIO_STRING[i]
        //     cc.loader.loadRes(_str, cc.AudioClip, (err: Error, res: any) => {
        //         if (err != null)
        //             throw new Error(err.message);

        //         this.audioClips.push(res);
        //     });
        // }
    }

    loadAudio(index = 0, self = null, cb?: (index, self, cb) => void) {
        let _len = AUDIO_STRING.length;//this.audios.length;
        if (index >= _len) {
            return;
        }
        let _str = "./RedBlackWar/mp3/" + AUDIO_STRING[index];
        cc.loader.loadRes(_str, cc.AudioClip, (err: Error, res: any) => {
            if (err != null)
                throw new Error(err.message);

            self.audioClips.push(res);
            // if (index === 0){
            //     window.audioMng.playMusic(window.RedBlack.RedBlackAudioLayer.getAudio(AudioType.Bg), true);
            // }
            // console.warn(_str);
            ++index;
            cb && cb(index, self, cb);
        });
    }

    getAudio(id) {
        return this.audioClips[id];
    }

}
