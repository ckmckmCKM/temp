
import { battleAniSpeed, showPanelType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackBattleAni extends cc.Component {

    @property(cc.Node)
    left: cc.Node = null;
    @property(cc.Node)
    right: cc.Node = null;

    speed: number = battleAniSpeed.speed;
    canvasWidth: number = null;
    isRun: string = "in";

    onLoad() {
        this.canvasWidth = cc.Canvas.instance.node.getContentSize().width * 0.7;
        // this.node.active = false;
    }

    update() {
        if (this.right.x <= 0 && this.isRun === "in") {
            // console.log("ani 11111");
            this.left.x = this.right.x = 0;
            this.isRun = "stop";

            //ckm 显示碰撞特效

        } else if (this.right.x > this.canvasWidth &&  this.isRun === "out") {
            // console.log("ani 22222");
            this.node.active = false;
        } else if(this.isRun === "in"){
            // console.log("ani = " + this.isRun);
            this.left.x += this.speed;
            this.right.x -= this.speed;
            this.speed += battleAniSpeed.spee_add;
        } else if(this.isRun === "out"){
            // console.log("ani = " + this.isRun);
            this.left.x -= this.speed;
            this.right.x += this.speed;
            this.speed += battleAniSpeed.spee_add;
        }
    }

    init() {
        this.node.active = true;
        this.isRun = "in";
        this.left.x = -this.canvasWidth;
        this.right.x = this.canvasWidth;
        this.speed = battleAniSpeed.speed;
    }

    //ckm cs
    onStart(){
        this.init();
    }

    //ckm cs
    onOver(){
        this.isRun = "out";
        this.speed = battleAniSpeed.speed;
    }

}
