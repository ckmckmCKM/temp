
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackQuan extends cc.Component {

    update(){
        if (this.node.angle <= 0){
            this.node.angle = 360;
        }
        this.node.angle -= 10;
    }

}
