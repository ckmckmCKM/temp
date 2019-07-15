
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, cardData} from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackCard extends cc.Component {

    // @property(cc.Node)
    // winPercentage: cc.Node = null;
    @property(cc.Node)
    back: cc.Node = null;
    @property(cc.SpriteAtlas)
    cardSprits: cc.SpriteAtlas = null;

    initCardData(characters,flowerColor) {
        // this.back.active = false;
        // console.log("characters = "+characters+ "  flowerColor = "+flowerColor);
        let _name = cardData.flowerColor[flowerColor] + cardData.characters[characters];
        // console.log("_name = "+_name);
        this.node.getComponent(cc.Sprite).spriteFrame = this.cardSprits.getSpriteFrame(_name);
    }
    setBack(bool){
        this.back.active = bool;
    }

}
