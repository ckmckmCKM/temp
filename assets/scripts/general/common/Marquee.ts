import { LReuseQueue } from '../support/Lqueue' 
const {ccclass, property} = cc._decorator;

@ccclass
export default class Marquee extends cc.Component {

    @property(cc.RichText)
    richLb1: cc.RichText = null;
    @property(cc.RichText)
    richLb2: cc.RichText = null;
    @property(sp.Skeleton)
    effect: sp.Skeleton = null;

    time_: number = 0;          //计时器
    lbHeight: number = 0;       //lb高度
    isFirst: boolean = true;    //正在显示第一个
    queue: LReuseQueue = new LReuseQueue(10);

    start () {
        this.node.opacity = 0;
        this.richLb1.string = "";
        this.richLb2.string = "";
        this.time_ = new Date().getTime();
        this.lbHeight = this.richLb1.node.position.y - this.richLb2.node.position.y;
        cc.Canvas.instance.node.on("marquee", this.addMarquee, this);
        this.schedule(function(dt:number){ this.showMarquee(dt); }, 1);
    }

    addMarquee(msg:string){
        this.queue.pushBack(msg);
    }

    showMarquee(dt:number) {
        let time = new Date().getTime();
        if(time-this.time_ > 5000){
            let msg = this.queue.popFront();
            if(msg === null){
                this.node.runAction(cc.fadeOut(0.3));
                return;
            }
            this.time_ = time;
            let upnd = null;
            let downnd = null;
            if(this.isFirst){
                upnd = this.richLb1;
                downnd = this.richLb2;
            }else{
                upnd = this.richLb2;
                downnd = this.richLb1;
            }
            downnd.string = msg;
            this.node.opacity = 255;
            this.isFirst = !this.isFirst;
            upnd.node.stopAllActions();
            downnd.node.stopAllActions();
            upnd.node.setPosition(cc.v2(0, 0));
            downnd.node.setPosition(cc.v2(0, this.lbHeight));
            this.effect.setAnimation(0, 'animation', true);
            upnd.node.runAction(cc.moveBy(0.3, cc.v2(0,-this.lbHeight)));
            downnd.node.runAction(cc.moveBy(0.3, cc.v2(0,-this.lbHeight)));
        }
    }

    onDestroy(){
        cc.Canvas.instance.node.off("marquee", this.addMarquee, this);
        this.queue.clear();
    }
}
