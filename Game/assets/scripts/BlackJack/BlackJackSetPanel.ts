

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackJackSetPanel extends cc.Component {

    @property(cc.Button)
    btn_MusicCtrl: cc.Button = null;//音乐
    @property(cc.Node)
    spr_MusicON:cc.Node=null;
    @property(cc.Node)
    spr_MusicOFF:cc.Node=null;
    @property(cc.Button)
    btn_EffectCtrl: cc.Button = null;//
    @property(cc.Node)
    spr_EffectON:cc.Node=null;
    @property(cc.Node)
    spr_EffectOFF:cc.Node=null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       cc.log("音乐：", window.audioMng.isMusicOpen);
       cc.log("音效：", window.audioMng.isEffectOpen);
       this.spr_MusicON.active=window.audioMng.isMusicOpen;
       this.spr_MusicOFF.active=!window.audioMng.isMusicOpen;
       this.spr_EffectON.active=window.audioMng.isEffectOpen;
       this.spr_EffectOFF.active=!window.audioMng.isEffectOpen;
       this.node.on('click',()=>{
           this.node.active=false;
       },this);
     
    }

    start () {

    }
    btnMusicCtrl(){
        let isOpen=!window.audioMng.isMusicOpen;
        window.audioMng.setMusicState(isOpen);
        this.spr_MusicON.active=isOpen;
       this.spr_MusicOFF.active=!isOpen;
       cc.log("music:",isOpen);
    }
    btnEffectCtrl(){
        let isOpen=!window.audioMng.isEffectOpen;
        window.audioMng.setEffectState(isOpen);
        this.spr_EffectON.active=isOpen;
       this.spr_EffectOFF.active=!isOpen;
       cc.log("effct:",isOpen);
    }
    btn_close(){
        this.node.active=false;
    }
    // update (dt) {}
}
