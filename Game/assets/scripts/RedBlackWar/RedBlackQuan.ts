
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, playerSeatId } from "./RedBlackCfg";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackQuan extends cc.Component {

    update(){
        this.node.rotation += 10;
        // console.log("this.node.rotation = " + this.node.rotation);
        if (this.node.rotation >= 360){
            this.node.rotation = 0;
        }
    }

}
