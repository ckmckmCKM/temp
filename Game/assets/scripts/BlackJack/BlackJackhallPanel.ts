// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackJackhallPanel extends cc.Component {

    @property(cc.Node)
    gamePanel: cc.Node=null;

   

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {

    }
    enterGame(event, customEventData){
        cc.log("进入游戏：---",customEventData);
        this.node.active=false;
        this.gamePanel.active=true;
    }

    // update (dt) {}
}
