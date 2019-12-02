
const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackLabelLayer extends cc.Component {

    @property(cc.Prefab)
    labelPre: cc.Prefab = null;

    showMoney(money, userBet, parent) {
        let _labelNode = this.node.getChildByName("labelItem");
        if (_labelNode){
            _labelNode.destroy();
        }
        if (userBet === 0 && money === 0) {
            return;
        }
        if (money === 0){
            money = -userBet;
        }
        _labelNode = cc.instantiate(this.labelPre);
        _labelNode.getComponent("RedBlackLabel").setLable(money);
        _labelNode.parent = parent;
        _labelNode.stopAllActions();
        _labelNode.runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(0, 70)),
            cc.delayTime(2),
            cc.callFunc(() => {
                _labelNode.destroy();
            })));
    }

}
