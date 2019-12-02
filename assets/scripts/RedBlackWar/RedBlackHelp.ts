
const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackHelp extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null;
    @property([cc.SpriteFrame])
    itemSps: cc.SpriteFrame[] = [];

    onclickToggle(event, customEventData){
        let _id = parseInt(customEventData);
        this.item.getComponent(cc.Sprite).spriteFrame = this.itemSps[_id];
    }

}
