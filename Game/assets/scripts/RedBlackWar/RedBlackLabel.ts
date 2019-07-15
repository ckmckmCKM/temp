
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId} from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackLabel extends cc.Component {

    @property([cc.BitmapFont])
    labelFont: cc.BitmapFont[] = [];

    setLable(num = 0, isWin = false){
        let _label = this.node.getComponent(cc.Label);
        _label.font = (num > 0 ? this.labelFont[0] : this.labelFont[1]);
        _label.string = (num > 0 ? "+" : "") + num + "";
    }

}
