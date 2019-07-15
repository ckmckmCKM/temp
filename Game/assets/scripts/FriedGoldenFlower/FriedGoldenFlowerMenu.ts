
//游戏规则界面
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerMenu extends cc.Component {

    onLoad() {
        window.GameMenu = this;
        let bg_node = this.node.getChildByName('rule-bg');
        window.lts.openLayerAction(bg_node)//
    }

    start() {

    }
    //关闭响应
    close(event, customEventData) {
        //window.lts.music(window.effect_mutual, window.effect_state)
        let bg_node = this.node.getChildByName('rule-bg');
        window.lts.closeLayerAction(bg_node, function (self) {
            self.node.destroy()
        }, this)//
    }
    // update (dt) {}
}
