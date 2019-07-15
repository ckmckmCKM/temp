
const { ccclass, property } = cc._decorator;

@ccclass
export default class betsLayer extends cc.Component {

    @property([cc.Label])
    setLabel: cc.Label[] = [];

    @property(cc.Sprite)
    setBetSprite: cc.Sprite = null;

    // 当前选择下注倍数下标
    betsIndex: number = 0;
    // 进度条显示百分比
    betsLenght: number = 0;

    onLoad() {
    }
    // 构造
    start() {
        window.slotsScene.betsLayer = this;

        // if(window.slotsScene.isGameBetsAny.length){

        // }
        this.betsLenght = 1 / window.slotsScene.isGameBetsAny.length;
        this.betsIndex = window.slotsScene.isGameBets;
        this.setBetSprite.getComponent(cc.Sprite).fillRange = (this.betsIndex + 1) * this.betsLenght;
        this.setLabel[0].string = "￥" + (9 * window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        this.setLabel[1].string = "￥" + (window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
    }

    // 按钮
    onCallButton(event, customEventData) {
        window.slotsScene.clikeButton.node.getComponent(cc.AudioSource).play();
        switch (customEventData) {
            case "10": this.closeLayerButtonCall(); break;
            case "11": this.MaxBetsLineButtonCall(); break;
            case "12": this.enterBetsButtonCall(); break;
            case "13": this.subBetsGoldButtonCall(); break;
            case "14": this.addBetsGoldButtonCall(); break;
        }
    }

    // 关闭二级界面
    closeLayerButtonCall() {
        let isScaleTo = cc.scaleTo(0.2, 0);
        let callFunc = cc.callFunc(function () {
            this.node.parent.destroy();
            window.slotsScene.betsLayer = null;
        }, this);
        this.node.runAction(cc.sequence(isScaleTo, callFunc));
    }
    // 最大押注
    MaxBetsLineButtonCall() {
        this.betsIndex = window.slotsScene.isGameBetsAny.length - 1;

        this.setBetSprite.getComponent(cc.Sprite).fillRange = (this.betsIndex + 1) * this.betsLenght;
        this.setLabel[0].string = "￥" + (9 * window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        this.setLabel[1].string = "￥" + (window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
    }
    // 已确认下注
    enterBetsButtonCall() {
        this.closeLayerButtonCall();
        window.slotsScene.isGameBets = this.betsIndex;
        this.setLabel[0].string = "￥" + (9 * window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        this.setLabel[1].string = "￥" + (window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        window.slotsScene.clikeButton.setSlotsSceneBetsTextUpdata()
    }
    // 增加线注金币按钮
    addBetsGoldButtonCall() {
        if (this.betsIndex < window.slotsScene.isGameBetsAny.length - 1) {
            this.betsIndex++;
        } else {
            this.betsIndex = 0;
        }
        this.setBetSprite.getComponent(cc.Sprite).fillRange = (this.betsIndex + 1) * this.betsLenght;
        this.setLabel[0].string = "￥" + (9 * window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        this.setLabel[1].string = "￥" + (window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);

    }
    // 减少线注金币按钮
    subBetsGoldButtonCall() {
        if (this.betsIndex > 0) {
            this.betsIndex--;
        } else {
            this.betsIndex = window.slotsScene.isGameBetsAny.length - 1;
        }
        this.setBetSprite.getComponent(cc.Sprite).fillRange = (this.betsIndex + 1) * this.betsLenght;
        this.setLabel[0].string = "￥" + (9 * window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
        this.setLabel[1].string = "￥" + (window.slotsScene.isGameBetsAny[this.betsIndex] * 0.01).toFixed(2);
    }


}
