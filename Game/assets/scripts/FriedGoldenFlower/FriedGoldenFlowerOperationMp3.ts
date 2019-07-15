//音效播放
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerOperationMp3 extends cc.Component {
     //玩家操作音效
    @property(cc.AudioClip)
    player_operation_effect: cc.AudioClip[] = [];

    onLoad() {
        window.OperationMp3 = this;
    }
    start() {
    }
    //放弃
    discard_mp3(gender) {
        let random = Math.random();
        //男
        if (gender == 0) {        
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[12], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[13], false);
            }
        }
        //女
        else {
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[14], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[15], false);
            }
        }
    }
    //加注
    fill_mp3(gender) {
        //男
        if (gender == 0) {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[8], false);
        }
        //女
        else {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[9], false);
        }
    }
    //跟注
    call_mp3(gender) {
        let random = Math.random();
        //男
        if (gender == 0) {        
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[4], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[5], false);
            }
        }
        //女
        else {
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[6], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[7], false);
            }
        }
    }
    //全压
    allin_mp3(gender) {
        //男
        if (gender == 0) {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[16], false);
        }
        //女
        else {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[17], false);
        }
    }
    //看牌
    lookcard_mp3(gender) {
        //男
        if (gender == 0) {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[10], false);
        }
        //女
        else {
            //播放音效
            window.audioMng.playEffect(this.player_operation_effect[11], false);
        }
    }
    //比牌
    than_mp3(gender) {
        let random = Math.random();
        //男
        if (gender == 0) {        
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[0], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[1], false);
            }
        }
        //女
        else {
            if (random == 0) {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[2], false);
            }
            else {
                //播放音效
                window.audioMng.playEffect(this.player_operation_effect[3], false);
            }
        }
    }
}
