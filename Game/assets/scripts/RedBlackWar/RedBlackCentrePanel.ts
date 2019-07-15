
import { showPanelIdType, showPanelType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackRedBlackCentrePanel extends cc.Component {

    @property([cc.Prefab])
    prefabs: cc.Prefab[] = [];

    prefabList = [];

    onLoad() {
        window.RedBlack.RedBlackCentrePanel = this;

        for (let i = 0; i < this.prefabs.length && this.prefabs[i]; ++i) {
            let item = cc.instantiate(this.prefabs[i]);
            //ckm cs
            // if (i != showPanelIdType.battleAni){
                item.active = false;
            // }
            this.prefabList.push(item);
            this.node.addChild(item);
        }
    }

    // show(index, showType) {
    //     if (!this.prefabList[index] || this.prefabList[index].active === true) {
    //         return;
    //     }
    //     switch (showType) {
    //         case showPanelType.scale: this.showScale(index); break;
    //         case showPanelType.moveLeft: this.showMoveLeft(index); break;
    //     }
    // }

    showScale(index) {
        if (!this.prefabList[index] || this.prefabList[index].active === true) {
            return;
        }
        this.prefabList[index].scale = 0.1;
        this.prefabList[index].active = true;
        this.prefabList[index].runAction(
            cc.scaleTo(0.1, 1));
    }

    showMoveLeft(index, delayTime = 0) {
        if (!this.prefabList[index] || this.prefabList[index].active === true) {
            return;
        }
        this.prefabList[index].scale = 1;
        this.prefabList[index].x = -cc.Canvas.instance.node.getContentSize().width;
        this.prefabList[index].active = true;
        this.prefabList[index].runAction(cc.sequence(
            cc.moveTo(0.2, 0, 0),
            cc.delayTime(delayTime),
            cc.callFunc(()=>{
                if(delayTime != 0){
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
            cc.moveTo(0.2, 0, 0)
        );
    }

    // hide(index, showType) {
    //     switch (showType) {
    //         case showPanelType.scale: this.hideScale(index); break;
    //         case showPanelType.moveLeft: this.hideMoveLeft(index); break;
    //     }
    // }

    hideScale(index) {
        this.prefabList[index].runAction(cc.sequence(
            cc.scaleTo(0.1, 0.1),
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

    showIndex(index){
        // console.log("index = " + index);
        for(let i = 0; i < 3; ++i){
            if(i <= index){
                this.prefabList[showPanelIdType.waitNext].getChildByName("dian").children[i].active = true;
            }else{
                this.prefabList[showPanelIdType.waitNext].getChildByName("dian").children[i].active = false;
            }
        }
        return 0;
    };

    showWaitNextAni(){
        this.unscheduleAllCallbacks();
        this.prefabList[showPanelIdType.waitNext].active = true;
        let index = -1;
        this.schedule(()=>{
            this.showIndex(index);
            ++index;
            if (index>=3){
                index = -1;
            }
        },0.3);
    }

    hideWaitNextAni(){
        this.prefabList[showPanelIdType.waitNext].active = false;
        this.unscheduleAllCallbacks();
    }

    showNoMove(index){
        this.prefabList[index].active = true;
    }
    
    hideNoMove(index){
        this.prefabList[index].active = false;
    }

    // update (dt) {}
}

