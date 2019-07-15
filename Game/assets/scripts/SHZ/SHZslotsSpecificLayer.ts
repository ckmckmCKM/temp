// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class specificLayer extends cc.Component {

    GoldText: cc.Node = null;
    BetsText: cc.Node = null;
    // 骰寶值
    Dice1 : number = 0;
    Dice2 : number = 0;
    // 記錄金幣
    winBets: number = 0;

    // 点击区域下注元宝显示（小 和 大）
    @property([cc.Sprite])
    yuanBaoSprite: cc.Sprite[] = [];
    // 预制体 (摇塞子，赢，输)
    @property([cc.Node])
    partLayer: cc.Node[] = [];

    // 大骰寶
    @property([cc.Node])
    bibeiSaiZi: cc.Node[] = []; 

    // 大骰寶
    @property(cc.Prefab)
    isPrefab: cc.Prefab = null;
    
 
    @property([cc.SpriteFrame])
    saiziSprite : cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    yaosaiziSprite : cc.SpriteFrame[] = []; 

    @property([cc.SpriteFrame])
    specificArySprite : cc.SpriteFrame[] = [];

    onLoad() {
        if(window.slotsScene.specificLayer == null){
            window.slotsScene.specificLayer = this;
        }
    }
    sendSpecificMsg(event, customEventData) {
        
        
        window.slotsScene.setsceneLayer.getChildByName("xiazhu").active = false;
        window.slotsScene.setsceneLayer.getChildByName("small").active = false;
        window.slotsScene.setsceneLayer.getChildByName("big").active = false;
        window.slotsScene.setsceneLayer.getChildByName("he").active = false;
        
        cc.log(window.slotsScene.setsceneLayer.getChildByName("he"))
        switch (customEventData) {
            case "0": this.sendMsg(1); window.audioMng.playEffect(window.slotsScene.audioSource[34],false);break;//window.slotsScene.SceneDemo.sendMsgSpecificResult(1);break;  // 小 interactable
            case "1": this.sendMsg(2); window.audioMng.playEffect(window.slotsScene.audioSource[34],false);break;  // 大
            case "2": this.sendMsg(0); window.audioMng.playEffect(window.slotsScene.audioSource[34],false);break;  // 和
            case "3": this.closeLayer(); window.audioMng.playEffect(window.slotsScene.audioSource[1],false); break;  // 收分
        }
    }

    sendMsg(id) {
        this.yuanBaoSprite[id].node.active = true;
        window.slotsScene.SceneDemo.sendMsgSpecificResult(id);
        //this.openCard(1)
    }

    // 摇塞子
    openCard(Dice1,Dice2,Gold) {
        window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").active = false;

        window.audioMng.playEffect(window.slotsScene.audioSource[9], false);
        //let setscene = cc.instantiate(this.partLayer[0]);
        this.partLayer[0].active = true
        this.partLayer[0].getComponent(cc.Animation).play();  

        window.slotsScene.specificLayer.winBets = Gold;
        cc.log(Gold)
        cc.log(this.winBets);
        window.slotsScene.specificLayer.Dice1 = Dice1
        window.slotsScene.specificLayer.Dice2 = Dice2
        // setscene.destroy();
        // setscene = null;

        
    }

    // 前端实现比倍走势图 
    specificAryTrend(stata) {
        let posx = -420; 
        cc.log(window.slotsScene.isSpecificAry.length)
        for (let i = 0; i < window.slotsScene.isSpecificAry.length ; i++) {
            if (window.slotsScene.isSpecificAry[i] != null) {  
                let spriteframe = window.slotsScene.specificLayer.specificArySprite[window.slotsScene.isSpecificAry[i]];

                if(window.slotsScene.isSpecificAry.length >= 14){
                    if(i >= 13){
                        let node = cc.instantiate(this.isPrefab);
                        node.x = i * 70 - 420;
                        node.getComponent(cc.Sprite).spriteFrame = spriteframe;
                        cc.log(node)
                        this.partLayer[3].addChild(node,70);
                        let moveby = cc.moveBy(0.5,cc.v2(-70,0))
                        let callfunc = cc.callFunc(function(){
                            window.slotsScene.isSpecificAry.shift();
                            window.slotsScene.specificLayer.partLayer[3].children.shift();
                        })
                        this.partLayer[3].children[i].runAction(cc.sequence(moveby,callfunc));
                    }else{
                        let moveby = cc.moveBy(0.5,cc.v2(-70,0))
                        this.partLayer[3].children[i].runAction(moveby);
                    }
                }else{

                    if(this.partLayer[3].children[i] == null){
                        cc.log("123")
                        let node = cc.instantiate(this.isPrefab);
                        node.x =  i * 70 - 420; 
                        node.getComponent(cc.Sprite).spriteFrame = spriteframe;
                        this.partLayer[3].addChild(node,70);
                    } 
                }
            } else {
                return;
            }
        }
        //cc.log(window.slotsScene.specificLayer.partLayer[3].children)
    }

    // 结果
    kai1111jiang() { 
        window.slotsScene.specificLayer.partLayer[0].active = false;
        if(window.slotsScene.specificLayer.winBets > 0){
            window.slotsScene.specificLayer.partLayer[2].active = true;
            window.slotsScene.specificLayer.partLayer[2].getComponent(cc.Animation).play();
        }else{
            window.slotsScene.specificLayer.partLayer[1].active = true;
            window.slotsScene.specificLayer.partLayer[1].getComponent(cc.Animation).play();
        }
 
        let test = window.slotsScene.specificLayer.Dice1 + window.slotsScene.specificLayer.Dice2;
        if(test == 7){
            window.slotsScene.isSpecificAry.push(0)
        }else if(test <= 6){
            window.slotsScene.isSpecificAry.push(1)
        }else if(test >= 8){    
            window.slotsScene.isSpecificAry.push(2)
        }

        // // 判断长度
        // if(window.slotsScene.isSpecificAry.length - 1 >= 13){
        //     window.slotsScene.isSpecificAry.shift()
        // }

        window.slotsScene.specificLayer.bibeiSaiZi[2].active = true
        window.slotsScene.specificLayer.bibeiSaiZi[2].getComponent(cc.Sprite).spriteFrame = window.slotsScene.specificLayer.yaosaiziSprite[test - 2]; 
        


        let waitTime = cc.delayTime(0.5);
        let waitFunc = cc.callFunc(function(){
            if(window.slotsScene.specificLayer.winBets > 0){
                window.audioMng.playEffect(window.slotsScene.audioSource[7], false);
            }else{
                window.audioMng.playEffect(window.slotsScene.audioSource[8], false);
            }
            window.slotsScene.setsceneLayer.getChildByName("winGold").getComponent(cc.Label).string = window.slotsScene.specificLayer.winBets.toFixed(2)
            window.slotsScene.specificLayer.bibeiSaiZi[0].active = true
            window.slotsScene.specificLayer.bibeiSaiZi[0].getComponent(cc.Sprite).spriteFrame = window.slotsScene.specificLayer.saiziSprite[ window.slotsScene.specificLayer.Dice1 - 1];
            window.slotsScene.specificLayer.bibeiSaiZi[1].active = true
            window.slotsScene.specificLayer.bibeiSaiZi[1].getComponent(cc.Sprite).spriteFrame = window.slotsScene.specificLayer.saiziSprite[ window.slotsScene.specificLayer.Dice2 - 1];
            window.slotsScene.specificLayer.specificAryTrend(true);

            let test = window.slotsScene.specificLayer.Dice1 + window.slotsScene.specificLayer.Dice2;

            window.audioMng.playEffect(window.slotsScene.audioSource[8 + test], false);

        });
        let waitTime1 = cc.delayTime(2);
        let waitFunc1 = cc.callFunc(function(){
            cc.log(window.slotsScene.specificLayer.winBets);
            if(window.slotsScene.specificLayer.winBets > 0){

                window.slotsScene.setsceneLayer.getChildByName("winGold").getComponent(cc.Label).string = window.slotsScene.specificLayer.winBets.toFixed(2)
                
                for(let i = 0; i < 3; i++){
                    window.slotsScene.specificLayer.partLayer[i].active = false;
                    window.slotsScene.specificLayer.bibeiSaiZi[i].active = false;
                    window.slotsScene.specificLayer.yuanBaoSprite[i].node.active = false;
                } 
                window.slotsScene.setsceneLayer.getChildByName("small").interactable = true;
                window.slotsScene.setsceneLayer.getChildByName("big").interactable = true;
                window.slotsScene.setsceneLayer.getChildByName("he").interactable = true;
                window.slotsScene.setsceneLayer.getChildByName("small").active = true;
                window.slotsScene.setsceneLayer.getChildByName("big").active = true;
                window.slotsScene.setsceneLayer.getChildByName("he").active = true;
                window.slotsScene.setsceneLayer.getChildByName("xiazhu").active = true;
                window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").active = true;
                window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").getComponent(cc.Animation).play();
            }else{

                let gold = window.slotsScene.userData.userGold + window.slotsScene.specificLayer.winBets
                window.slotsScene.setsceneLayer.getChildByName("gold").getComponent(cc.Label).string = gold.toFixed(2)
                window.slotsScene.specificLayer.closeLayer();
            }
            

        });
        window.slotsScene.specificLayer.node.runAction(cc.sequence(waitTime,waitFunc,waitTime1,waitFunc1));
        // let setscene = cc.instantiate(this.partLayer[1]);
        // setscene.x = window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").x
        // setscene.y = window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").y  // Sprite2
        // //setscene.getChildByName("Sprite2").getComponent(cc.Sprite).spriteFrame = ;
        // setscene.getComponent(cc.Animation).play();
        // this.node.addChild(setscene, 69);
    }

    // 关闭页面
    closeLayer() {

        window.audioMng.stopMusic()
        window.audioMng.playMusic(window.slotsScene.audioSource[0], false);

        window.slotsScene.userData["userGold"] = window.slotsScene.userData["userGold"] + window.slotsScene.specificLayer.winBets;
        window.slotsScene.specificLayer.node.destroy();
        window.slotsScene.specificLayer = null;
        window.slotsScene.sceneActive(true)  
        window.slotsScene.node.emit("gameOverSettlementCall",0)
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(0, true)
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(1, true)
        window.slotsScene.clikeButton.monitor_ButtonInteractableState(2, true)
    }
    // 进入比倍界面Login
    goSpecificShowEvent() {
        window.slotsScene.sceneActive(false)
        window.slotsScene.specificLayer = null;
        // 显示比倍预设
        window.slotsScene.setsceneLayer = cc.instantiate(window.slotsScene.partLayer[7]);
        window.slotsScene.node.addChild(window.slotsScene.setsceneLayer, 69);

        window.audioMng.stopMusic()
        window.audioMng.playMusic(window.slotsScene.audioSource[2], true);

        this.GoldText = window.slotsScene.setsceneLayer.getChildByName("gold");
        this.BetsText = window.slotsScene.setsceneLayer.getChildByName("winGold");
        this.GoldText.getComponent(cc.Label).string = window.slotsScene.userData.userGold.toFixed(2)
        cc.log(window.slotsScene.SceneDemo.m_nWinGold)
        this.BetsText.getComponent(cc.Label).string = window.slotsScene.SceneDemo.m_nWinGold.toFixed(2)
        this.winBets = window.slotsScene.SceneDemo.m_nWinGold
    }
    // 删除过程
    destroyLoginLayer() {
        // 删除过场预设
        window.slotsScene.setscene.destroy();
        window.slotsScene.setscene = null;

        //let waitTime = cc.delayTime(1);
        //let waitFunc = cc.callFunc(function(){
        window.slotsScene.setsceneLayer.getChildByName("waitCardAnimation").getComponent(cc.Animation).play();
        window.audioMng.playEffect(window.slotsScene.audioSource[6], false);
        window.slotsScene.specificLayer.specificAryTrend(false); 

    }
}
