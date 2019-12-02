
import { showPanelIdType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackRedBlackCentrePanel extends cc.Component {

    @property([cc.Prefab])
    prefabs: cc.Prefab[] = [];
    @property(cc.Node)
    waitNext: cc.Node = null;

    prefabList = [];

    onLoad() {
        window.RedBlack.RedBlackCentrePanel = this;

        for (let i = 0; i < this.prefabs.length && this.prefabs[i]; ++i) {
            let item = cc.instantiate(this.prefabs[i]);
            item.active = false;
            this.prefabList.push(item);
            this.node.addChild(item);
        }
        this.waitNext.active = false;
    }

    hideAll() {
        for (let i = 0; i < this.prefabs.length && this.prefabs[i]; ++i) {
            this.node.children[i].active = false;
        }
        this.waitNext.active = false;
    }

    showScale(index) {
        if (!this.prefabList[index] || this.prefabList[index].active === true) {
            return;
        }
        this.prefabList[index].scale = 0.1;
        this.prefabList[index].active = true;
        this.prefabList[index].runAction(
            cc.scaleTo(0.05, 1));
    }

    showMoveLeft(index, delayTime = 0) {
        if (!this.prefabList[index] || this.prefabList[index].active === true) {
            return;
        }
        this.prefabList[index].scale = 1;
        this.prefabList[index].x = -cc.Canvas.instance.node.getContentSize().width;
        this.prefabList[index].active = true;
        this.prefabList[index].runAction(cc.sequence(
            cc.moveTo(0.3, 0, 0).easing(cc.easeIn(3.0)),
            cc.delayTime(delayTime),
            cc.callFunc(() => {
                if (delayTime != 0) {
                    this.hideMoveLeft(index);
                }
            })
        ));
    }

    showMoveRight(index) {
        if (!this.prefabList[index] || this.prefabList[index].active === true) {
            return;
        }
        this.prefabList[index].scale = 1;
        this.prefabList[index].x = cc.Canvas.instance.node.getContentSize().width;
        this.prefabList[index].active = true;
        this.prefabList[index].runAction(
            cc.moveTo(0.2, 0, 0).easing(cc.easeIn(3.0)),
        );
    }

    hideScale(index) {
        this.prefabList[index].runAction(cc.sequence(
            cc.scaleTo(0.05, 0.1),
            cc.callFunc(() => {
                this.prefabList[index].active = false;
            })
        ));
    }

    hideMoveLeft(index) {
        let _x = cc.Canvas.instance.node.getContentSize().width;
        this.prefabList[index].runAction(cc.sequence(
            cc.moveTo(0.2, _x, 0),
            cc.callFunc(() => {
                this.prefabList[index].active = false;
            })
        ));
    }

    hideMoveRight(index) {
        let _x = -cc.Canvas.instance.node.getContentSize().width;
        this.prefabList[index].runAction(cc.sequence(
            cc.moveTo(0.2, _x, 0),
            cc.callFunc(() => {
                this.prefabList[index].active = false;
            })
        ));
    }

    showIndex(index) {
        // console.log("index = " + index);
        for (let i = 0; i < 3; ++i) {
            if (i <= index) {
                this.prefabList[showPanelIdType.waitNext].getChildByName("dian").children[i].active = true;
            } else {
                this.prefabList[showPanelIdType.waitNext].getChildByName("dian").children[i].active = false;
            }
        }
        return 0;
    };

    showWaitNextAni() {
        this.unscheduleAllCallbacks();
        this.waitNext.active = true;
        let index = -1;
        this.schedule(() => {
            this.showIndex(index);
            ++index;
            if (index >= 3) {
                index = -1;
            }
        }, 0.3);
    }

    hideWaitNextAni() {
        this.waitNext.active = false;
        this.unscheduleAllCallbacks();
    }

    showNoMove(index) {
        this.prefabList[index].active = true;
    }

    hideNoMove(index) {
        this.prefabList[index].active = false;
    }

    showAni(index) {
        this.prefabList[index].active = true;
        let ani1 = this.prefabList[index].getChildByName("hongsediban");
        let ani2 = this.prefabList[index].getChildByName("hongsediban").getChildByName("hongSp");
        ani2.getComponent(sp.Skeleton).setAnimation(1, "honghei_vs", false);
        ani1.getComponent(cc.Animation).play("hongsediban");
        // let _curAni = ani2.getComponent(sp.Skeleton).animation;
    }

    showAniDefault(index) {
        this.prefabList[showPanelIdType.startBet].active = (showPanelIdType.startBet === index);
        this.prefabList[showPanelIdType.stopBet].active = (showPanelIdType.stopBet === index);
        let ani1 = this.prefabList[index].getComponent(cc.Animation);
        if (!ani1) {
            console.error("ani1 = " + ani1 + ' = ' + index);
            return;
        }
        let _name = ani1.defaultClip.name;
        if (!_name) {
            console.error("_name = " + _name + ' = ' + index);
            return;
        }
        ani1.play(_name);
        // let _curAni = ani2.getComponent(sp.Skeleton).animation;
    }

}

