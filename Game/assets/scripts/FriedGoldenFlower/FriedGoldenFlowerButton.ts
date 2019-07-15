
//炸金花操作按钮响应回调
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerButton extends cc.Component {
    //筹码图片
    @property(cc.SpriteFrame)
    chip_sprite: cc.SpriteFrame[] = [];
    //比牌用子弹 //40度 0-3 75度 0-4 -60度 0-2  -80度0-1 
    onLoad() {
        window.GameButton = this;
    }

    start() {

    }
    //加注按钮
    fill_btn(event, customEventData) {
        //console.log('加注按钮：' + customEventData);      
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;
        window.GameSend.playerspeak_send(window.GameScene.my_id, 'raise', window.GameScene.fill_this_lv[customEventData - 1])
        //console.log(customEventData);       
    }
    //跟住按钮
    call_btn(event, customEventData) {
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;
        window.GameSend.playerspeak_send(window.GameScene.my_id, 'follow')
    }
    //全压按钮
    all_in_btn(event, customEventData) {
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;
        window.GameSend.playerspeak_send(window.GameScene.my_id,'all_in')
    }
    //比牌按钮阶段1按钮 点比牌按钮
    than_card_one_btn(event, customEventData) {
        //发送比牌信息
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;
        window.GameSend.playerthan_one_send(window.GameScene.my_id);
    }
    //比牌按钮阶段2按钮 点击选中的人
    than_card_two_btn(event, customEventData) {
        window.GameScene.than_card_state = 1;
        //点击选人后把数据初始化
        window.GameScene.than_card_node.active = false    
        window.GameScene.than_card_node.zIndex = 0
        for (let i = 0; i < window.GameScene.game_player.length; ++i) {
            window.GameScene.game_player[i].zIndex = 0
        }
        window.GameSend.playerthan_two_send(window.GameScene.my_id, window.GameScene.gameplayer_this[customEventData].userId)  
    }
    //看牌按钮
    see_card_btn(event, customEventData) {
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;
        window.GameScene.look_card_state = 1
        window.GameSend.playerspeak_send(window.GameScene.my_id, 'see_cards')
    }
    //弃牌按钮
    dis_card_btn(event, customEventData) {
        window.GameScene.player_operation_node.active = false;
        window.GameScene.else_operation_node.active = false;     
        window.GameSend.playerspeak_send(window.GameScene.my_id,'give_up')
    }
    //跟到底按钮
    with_what_btn(event, customEventData) {
        // window.GameScene.player_operation_node.active = false;
        // window.GameScene.else_operation_node.active = false;
        if (window.GameScene.follow_all_state == 0){
            //console.log('更到底');            
            window.GameSend.playerspeak_send(window.GameScene.my_id, 'follow_all_the_way')
        }
        else if(window.GameScene.follow_all_state == 1){
            //console.log('取消更到底');
            window.GameSend.playerspeak_send(window.GameScene.my_id, 'cancel_follow')
        }
        
    }
    // update (dt) {}
}
