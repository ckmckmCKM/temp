
import { cardType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

//ckm cs 
const COLOR = [cc.color(0, 0, 0), cc.color(255, 0, 0)];

@ccclass
export default class RedBlackDetails extends cc.Component {



    @property(cc.Node)
    CardTypeChartZiNode: cc.Node = null;
    @property([cc.SpriteFrame])
    trendChart: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    CardTypeChartBg: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    CardTypeChartZi: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    CardBrandRoad: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    trendChart1: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    CardBrandRoadTable: cc.SpriteFrame[] = [];

    onLoad() {
    }

    setBrandRoad(index) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.CardBrandRoad[index];
    }

    setBrandRoadTable(index) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.CardBrandRoadTable[index];
    }

    setTrendChart(index) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.trendChart[index];
        this.CardTypeChartZiNode.active = false;
    }

    setTrendChart1(index) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.trendChart1[index];
        this.CardTypeChartZiNode.active = false;
    }

    setCardTypeChart(index) {
        this.node.getComponent(cc.Sprite).spriteFrame =
            (index == cardType.DanZhang ? this.CardTypeChartBg[0] : this.CardTypeChartBg[1]);
        this.CardTypeChartZiNode.getComponent(cc.Sprite).spriteFrame = this.CardTypeChartZi[index - 1];
        this.CardTypeChartZiNode.active = true;
    }

}
