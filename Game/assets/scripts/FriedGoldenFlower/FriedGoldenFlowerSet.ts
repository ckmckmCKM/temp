//设置界面
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerSet extends cc.Component {

    @property(cc.SpriteFrame)
    open_sp: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    close_sp: cc.SpriteFrame = null;
    //状态
    music_state:string = null
    effect_state:string = null
    onLoad() {
        window.GameSettring = this;
        let bg_node = this.node.getChildByName('set-bg');
        window.lts.openLayerAction(bg_node)//
        //组件获取
        this.music_state = cc.sys.localStorage.getItem('isMusicOpen')
        this.effect_state = cc.sys.localStorage.getItem('isEffectOpen')
        let state1 = null
        let state2 = null
        if (window.music_state == null) {
            window.music_state = 'true'
            state1 = true
        }
        else if(window.music_state == 'true'){
            state1 = true
        }
        else if(window.music_state == 'false'){
            state1 = false
        }
        if (window.effect_state == null) {
            window.effect_state = 'true'
            state2 = true
        }
        else if(window.effect_state == 'true'){
            state2 = true
        }
        else if(window.effect_state == 'false'){
            state2 = false
        }

        //判断音乐 音效
        if (window.music_state == 'true') {
            this.node.getChildByName('set-bg').getChildByName('music-fream').getComponent(cc.Sprite).spriteFrame = this.open_sp;
        }
        else {
            this.node.getChildByName('set-bg').getChildByName('music-fream').getComponent(cc.Sprite).spriteFrame = this.close_sp;
        }
        if (window.effect_state == 'true') {
            //this.node.getChildByName('effect-fream').getComponent(cc.Sprite).spriteFrame = 
            this.node.getChildByName('set-bg').getChildByName('effect-fream').getComponent(cc.Sprite).spriteFrame = this.open_sp;
            //this.node.getChildByName('set-bg').getChildByName('sprite-effect').setPosition(cc.v2(130, 10));
        }
        else {
            this.node.getChildByName('set-bg').getChildByName('effect-fream').getComponent(cc.Sprite).spriteFrame = this.close_sp;
            //this.node.getChildByName('set-bg').getChildByName('sprite-effect').setPosition(cc.v2(40, 10));
        }
        //新的写入到文档中
        window.audioMng.setMusicState(state1)
        window.audioMng.setEffectState(state2)
    }

    start() {


    }
    // //图片移动
    // sprite_move(node, state, num) {
    //     let y = null  
    //     if (state == 0) {
    //         y = 100;
    //     }
    //     else {
    //         y = 10;
    //     }
    //     if (num == 1) {
    //         node.runAction(cc.moveTo(0.1, 130, y))
    //     }
    //     else {
    //         node.runAction(cc.moveTo(0.1, 40, y))
    //     }
    // }
    //音乐响应
    music_btn(event, customEventData) {
        this.music_state = cc.sys.localStorage.getItem('isMusicOpen')
        let state = null
        if (this.music_state == 'true') {
            state = false
            this.node.getChildByName('set-bg').getChildByName('music-fream').getComponent(cc.Sprite).spriteFrame = this.close_sp;
            //this.sprite_move(this.node.getChildByName('set-bg').getChildByName('sprite-music'), 0, 2);
        }
        else {
            state = true
            this.node.getChildByName('set-bg').getChildByName('music-fream').getComponent(cc.Sprite).spriteFrame = this.open_sp;
            //this.sprite_move(this.node.getChildByName('set-bg').getChildByName('sprite-music'), 0, 1);
        }
        console.log(this.music_state);      
        //新的写入到文档中
        window.audioMng.setMusicState(state)
    }
    //音效响应
    effect_btn(event, customEventData) {
        this.effect_state = cc.sys.localStorage.getItem('isEffectOpen')
        let state = null
        if (this.effect_state == 'true') {
            state = false
            this.node.getChildByName('set-bg').getChildByName('effect-fream').getComponent(cc.Sprite).spriteFrame = this.close_sp;
            //this.sprite_move(this.node.getChildByName('set-bg').getChildByName('sprite-effect'), 1, 2);
        }
        else {
            state = true
            this.node.getChildByName('set-bg').getChildByName('effect-fream').getComponent(cc.Sprite).spriteFrame = this.open_sp;
            //this.sprite_move(this.node.getChildByName('set-bg').getChildByName('sprite-effect'), 1, 1);
        }
        console.log(this.effect_state); 
        window.audioMng.setEffectState(state)
    }
    //关闭响应
    close(event, customEventData) {
        //window.lts.music(window.effect_mutual, window.effect_state)
        let bg_node = this.node.getChildByName('set-bg');
        window.lts.closeLayerAction(bg_node, function (self) {
            self.node.destroy()
        }, this)//
    }
    // update (dt) {}
}
