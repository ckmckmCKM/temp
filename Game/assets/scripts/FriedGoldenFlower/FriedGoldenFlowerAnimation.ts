
//动画函数
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerAnimation extends cc.Component {

    onLoad() {

    }

    start() {
    }
    //动画回调
    animation_monitor(string) {
        //console.log('动画回调----------------------------------');
        if (string == 'bomb'){
            //console.log('baozha');
        }
        else if(string == 'win'){
            console.log('tanxiao1111111');          
            window.GameScene.win.destroy();
            window.GameScene.close_an_account()
        }
        else if(string == 'lose'){
            console.log('tanxiao2222222');          
            window.GameScene.lose.destroy()
            window.GameScene.close_an_account()
        }
    }
    // update (dt) {}
}
