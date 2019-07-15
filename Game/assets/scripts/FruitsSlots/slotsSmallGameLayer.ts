const { ccclass, property } = cc._decorator;

@ccclass
export default class smallGame extends cc.Component {

    // 小游戏文本控件 // 0 玩家金币 1 赢得金币 2 押注金币 3 次数
    @property(cc.Node)
    testLayer: cc.Node = null;

    // 小游戏文本控件 // 0 玩家金币 1 赢得金币 2 押注金币 3 次数
    @property([cc.Label])
    smallGameText: cc.Label[] = [];

    // 外圈图标闪光背景节点
    @property(cc.Node)
    isFlashIconBackNode: cc.Node = null;
    // 外圈图标闪光背景
    isFlashIconBack = [];

    // 5列容器
    _panleLayout1: cc.Node[] = [];
    _panleLayout2: cc.Node[] = [];
    // 内圈滚动节点
    @property(cc.Node)
    isInnerNode: cc.Node = null;

    // 外圈滚动时间 {0 起始， 1 加速1 ，2 加速2 3 减速1 ，4 减速2，5 终止}
    @property([cc.Float])
    inFlashEndMoveTime: Float32Array[] = [];

    // 滚动圈数
    @property(cc.Integer)
    allMoveFlashCount: number = 2;

    @property([cc.Integer])
    speedLevelTime: number[] = [];node: any;
;

    // // 滚动圈数
    // @property(cc.Integer)
    // allMoveFlashCount: number = 0;

    // 小游戏可玩总次数
    isMoveSmallGameCount: number = -1;
    // 外圈下标
    moveFlashBack: number = 0;
    // 外圈滚动圈数
    moveFlashCount: number = 0;
    // 外圈结束目标
    msgFlashEndMove: number = -1;
    // 外圈滚动状态
    flashRollState: number = 5;

    // 内圈滚动总共时间
    @property(cc.Integer)
    innerRingRollTime: number = 2;
    // 内圈单列滚动时间
    @property(cc.Integer)
    isInnerRingRollTime: number = 0;
    // 内圈单列递减时间
    @property(cc.Integer)
    isInnerRingRollSubTime: number = 0;


    // 內圈滚动图片资源
    @property([cc.SpriteFrame])
    gameRunRollIcon: cc.SpriteFrame[] = [];

    // 关闭游戏
    @property(cc.Node)
    closeButton: cc.Node = null;

    innerRingRollStop: boolean = false;
    innerShowIcon : number[] = [];
    isWinGold : number = 0;
    isWinAllGold : number = 0;
    isEndSmallGame : boolean = false;
    onLoad() {
        window.slotsScene.smallGame = this;
    }

    // 构造
    start() {
        this.closeButton.active = false;
        this.closeButton.getComponent(cc.Button).interactable = false;
         
        // 关闭主界面内容
        this.sceneActive(false);

        let time = cc.delayTime(8);
        let func = cc.callFunc(function(){
            if(this.testLayer.active == true){
                this.setInnerRollTime();
            } 
        },this);
        this.node.runAction(cc.sequence(time,func));

        // 得到外圈所有水果背景
        for (let index = 0; index < this.isFlashIconBackNode.childrenCount; index++) {
            this.isFlashIconBack[index] = this.isFlashIconBackNode.getChildByName("icon" + index);
            this.isFlashIconBack[index].active = false;
        }
        this.isFlashIconBack[0].active = true;
        
        // 得到内圈节点
        for (let index = 0; index < this.isInnerNode.childrenCount / 2; index++) {
            this._panleLayout1[index] = this.isInnerNode.getChildByName("roll_1_" + index);
            this._panleLayout2[index] = this.isInnerNode.getChildByName("roll_2_" + index); 
            //this.moveInnerIconBackLogicFunc(this._panleLayout1[index], index);
            //this.moveInnerIconBackLogicFunc(this._panleLayout2[index], index);
        }
        // 赋值小游戏次数
        this.isMoveSmallGameCount = window.slotsScene.SceneDemo.m_nGeZiGame;
        this.smallGameText[3].string = this.isMoveSmallGameCount.toString();
        this.smallGameText[0].string = "￥" + window.slotsScene.userData.userGold.toFixed(2)
        let totalbets = window.slotsScene.isGameLine * window.slotsScene.isGameBetsAny[window.slotsScene.isGameBets];
        this.smallGameText[2].string = "￥" + totalbets.toFixed(2);

        this.smallGameText[1].string = "￥0.00" ;
 
        this.node.on("monitorSmallGameMsg",function(gameCount:number,OutIndex:number,InIcon:Number[],Gold:number,Exit:boolean){
            cc.log("gameCount == " + gameCount + "    OutIndex == " + OutIndex + "    Gold == " + Gold) 
            this.isMoveSmallGameCount = gameCount;
            this.isWinGold = this.isWinGold + Gold; 
            this.isWinAllGold = this.isWinGold
            this.msgFlashEndMove = OutIndex; // Math.ceil(Math.random() * 23);
            this.innerShowIcon = InIcon; 
            this.isEndSmallGame = Exit; 
        },this)
    }   
    // 主界面显示与否
    sceneActive(state){
        window.slotsScene.node.getChildByName("gameButtonNode").active = state;
        window.slotsScene.node.getChildByName("gameDataNode").active = state;
        window.slotsScene.node.getChildByName("runIcon").active = state; 
        window.slotsScene.node.getChildByName("winLineLayer").active = state; 
        if(window.slotsScene.setLayer != null){
            // 显示设置界面
            window.slotsScene.clikeButton.Button[window.slotsScene.clikeButton.Button.length - 1].node.active = true;
            window.slotsScene.setLayer.node.destroy();
            window.slotsScene.setLayer = null;
        }
    }
    // 设置内圈滚动开始，已经停止定时器
    setInnerRollTime(event){ 
        this.testLayer.active = false;
        // 内圈继续滚动
        for (let index = 0; index < this.isInnerNode.childrenCount / 2; index++) { 
            this.moveInnerIconBackLogicFunc(this._panleLayout1[index], index,this.isInnerRingRollTime);
            this.moveInnerIconBackLogicFunc(this._panleLayout2[index], index,this.isInnerRingRollTime);
        }
        window.slotsScene.SceneDemo.sendMsgRequestSmallResult();
        this.moveOneFlashIconBackLogicFunc(this.inFlashEndMoveTime[0])

    }
    // 内圈滚动逻辑
    moveInnerIconBackLogicFunc(Rollnode, line,timeRoll) {
        if (this.innerRingRollStop == true) {
            let moveto = null;
            let func = cc.callFunc(function(){ 
                if(Rollnode.y > 95 || Rollnode.y < -95) {  
                    if(line == 3){
                        // 内圈滚动完毕 
                        this.innerRingRollStop = false
                    }                     
                    Rollnode.y = 110 
                }else{ 
                    Rollnode.y = 0 
                } 
            },this);  
            if (Rollnode.y > 95 || Rollnode.y < -95) { 
                Rollnode.y = 110;
                moveto = cc.moveTo(this.isInnerRingRollTime, cc.v2(Rollnode.x, 0));
                // 赋值结果
                //let num1 = 1//Math.ceil(Math.random()*8);
                Rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[this.innerShowIcon[line]];
            }else{
                Rollnode.y = 0
                moveto = cc.moveTo(this.isInnerRingRollTime, cc.v2(Rollnode.x, -100))
            }
            Rollnode.runAction(cc.sequence(moveto,func));
        } else {

            timeRoll = timeRoll - this.isInnerRingRollSubTime
            if(timeRoll < this.isInnerRingRollSubTime){
                timeRoll = this.isInnerRingRollSubTime
            }
            let moveto = null;
            if (Rollnode.y > 95 || Rollnode.y < -95) {
                Rollnode.y = 100;
                moveto = cc.moveTo(timeRoll, cc.v2(Rollnode.x, 0));
                // 随机结果
                let num1 = Math.ceil(Math.random()*7)-1;
                Rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[num1];
            } else {
                Rollnode.y = 0
                moveto = cc.moveTo(timeRoll, cc.v2(Rollnode.x, -100))
            }
            Rollnode.runAction(moveto);
            let time = cc.delayTime(timeRoll);
            let func = cc.callFunc(function () {
                this.moveInnerIconBackLogicFunc(Rollnode, line,timeRoll);
            }, this);
            Rollnode.runAction(cc.sequence(time, func));
        }
    }
    // 外圈缓慢起步
    moveOneFlashIconBackLogicFunc(time){
        this.node.stopActionByTag(9);
        let moveCount = 0;
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;
            moveCount++;

            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);

            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = true;
            if(moveCount == this.speedLevelTime[0]){
                this.node.stopActionByTag(9);
                this.moveTwoFlashIconBackLogicFunc(this.inFlashEndMoveTime[1])
            }   
        },this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }
    // 外圈滚动逻辑
    moveTwoFlashIconBackLogicFunc(time, speedSarget) {
        let moveCount = 0;
        // 递归滚动时间
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;
            moveCount++;
            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = true;
            if(moveCount == this.speedLevelTime[1]){ 
                this.moveThereFlashIconBackLogicFunc(this.inFlashEndMoveTime[2])
            }   

        },this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }
     // 外圈匀速
     moveThereFlashIconBackLogicFunc(time){
        this.node.stopActionByTag(9);
        cc.log("外圈匀速")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;  
            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);
           
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = true; 
            if(this.moveFlashCount >= this.allMoveFlashCount && this.msgFlashEndMove != -1){ 
                this.moveOneSubIconBackLogicFunc(this.inFlashEndMoveTime[3])
            }   

        },this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    //外圈减速1
    moveOneSubIconBackLogicFunc(time){
        this.node.stopActionByTag(9); 
        cc.log("外圈减速1")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;  
            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景 
            this.isFlashIconBack[this.moveFlashBack].active = true;
            
                if(this.msgFlashEndMove  + 23 - this.moveFlashBack == this.speedLevelTime[2] && this.msgFlashEndMove != -1){
                    this.moveTwoSubIconBackLogicFunc(this.inFlashEndMoveTime[4]);
                }else if(this.msgFlashEndMove - this.moveFlashBack == this.speedLevelTime[2] && this.msgFlashEndMove != -1 ){
                    this.moveTwoSubIconBackLogicFunc(this.inFlashEndMoveTime[4]);
                }  
        },this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }    

    //外圈减速2
    moveTwoSubIconBackLogicFunc(time){
        
        this.node.stopActionByTag(9);
        cc.log("外圈减速1")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++;   
            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景 
            this.isFlashIconBack[this.moveFlashBack].active = true;
 
            if(this.msgFlashEndMove  + 23 - this.moveFlashBack == this.speedLevelTime[3]  && this.msgFlashEndMove != -1){
                this.innerRingRollStop = true;
                this.moveStopSubIconBackLogicFunc(this.inFlashEndMoveTime[5]);
            }else if(this.msgFlashEndMove - this.moveFlashBack == this.speedLevelTime[3] && this.msgFlashEndMove != -1 ){
                this.innerRingRollStop = true;
                this.moveStopSubIconBackLogicFunc(this.inFlashEndMoveTime[5]); 
        }
        },this)
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }   

    // 外圈停止
    moveStopSubIconBackLogicFunc(time){
        this.node.stopActionByTag(9);
        cc.log("外圈停止")
        let moveTime = cc.delayTime(time);
        let moveFunc = cc.callFunc(function () {
            // 隐藏滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = false;
            // 控件下标自增
            this.moveFlashBack++; 
            window.audioMng.playEffect(window.slotsScene.audioSource[4],false);
            // 判断是否自增到一圈
            if (this.moveFlashBack >= this.isFlashIconBackNode.childrenCount) {
                // 控件下标归零
                this.moveFlashBack = 0;
                // 滚动圈数自增
                this.moveFlashCount++;
            }
            // 显示滚动背景
            this.isFlashIconBack[this.moveFlashBack].active = true;
 
            if(this.moveFlashBack == this.msgFlashEndMove){
                let fadeOut = cc.fadeOut(0.2)
                let fadeIn = cc.fadeIn(0.2) 
                let forever = cc.repeatForever(cc.sequence(fadeOut,fadeIn))
                forever.setTag(92)
                this.isFlashIconBack[this.moveFlashBack].runAction(forever)

                //炸弹音效
                if(this.moveFlashBack == 0 || this.moveFlashBack == 6 ||
                     this.moveFlashBack == 12 || this.moveFlashBack == 18){
                    window.audioMng.playEffect(window.slotsScene.audioSource[6],false);
                }else{
                    //中奖音效
                    window.audioMng.playEffect(window.slotsScene.audioSource[5],false);
                }
                this.node.stopActionByTag(9);
                if (this.isEndSmallGame == true) {
                    //小游戏结束 
                    this.goGameEndLayer(12,1); 

                } else {
                    // 赢得金币
                    this.smallGameText[1].string = this.isWinGold.toFixed(2);
                    // 次数
                    this.smallGameText[3].string = this.isMoveSmallGameCount;
                    this.moveFlashCount = 0;
                    this.msgFlashEndMove = -1;

                    let moveTime1 = cc.delayTime(2);
                    let moveFunc1 = cc.callFunc(function () {
                        this.isFlashIconBack[this.moveFlashBack].stopActionByTag(92)
                        this.setInnerRollTime(); 
                    }, this);
                    this.node.runAction(cc.sequence(moveTime1, moveFunc1));
                } 
            }
 
        }, this);
        let moveForever = cc.repeatForever(cc.sequence(moveTime, moveFunc))
        // 动画标签
        moveForever.setTag(9)
        this.node.runAction(moveForever);
    }

    // 点击关闭游戏
    closeButtonLayer(){
        let Time = cc.delayTime(1);
        let Func = cc.callFunc(function () {
            window.audioMng.playEffect(window.slotsScene.audioSource[7],false);
            this.sceneActive(true)
            this.node.destroy();
            window.slotsScene.smallGame = null;
            window.slotsScene.isSmall = false;
            if (window.slotsScene.isAutoConut > 0) {
                window.slotsScene.gameState = 2;
            } else {
                window.slotsScene.gameState = 0;
            }
            window.slotsScene.node.emit("gameOverSettlementCall", 1)
        }, this);
        this.node.runAction(cc.sequence(Time, Func));
    }

    // 结算界面调用
    goGameEndLayer(id,time){
        window.audioMng.playEffect(window.slotsScene.audioSource[3],false);
        let waitTime = cc.delayTime(time);
        let callFunc = cc.callFunc(function(){

            this.isFlashIconBack[this.moveFlashBack].stopActionByTag(92)
            this.closeButton.active = true;
            this.closeButton.interactable = true;

            let setscene = cc.instantiate(window.slotsScene.partLayer[id]); 
            window.slotsScene.smallGame.node.addChild(setscene,70); 
            window.audioMng.playEffect(window.slotsScene.audioSource[7],false);
            setscene.getChildByName("Back").getChildByName("one").getComponent(cc.Label).string = window.slotsScene.SceneDemo.m_nWinGold.toFixed(2);
            setscene.getChildByName("Back").getChildByName("tow").getComponent(cc.Label).string = this.isWinAllGold.toFixed(2);

            // 刷新金币
            window.slotsScene.userData["userGold"] =  window.slotsScene.userData["userGold"] + this.isWinAllGold;  
            window.slotsScene.clikeButton.setUserGoldUpdata();

            let Time = cc.delayTime(10);
            let Func = cc.callFunc(function(){
                window.audioMng.playEffect(window.slotsScene.audioSource[7],false);
                this.sceneActive(true)
                this.node.destroy();
                window.slotsScene.smallGame = null;
                window.slotsScene.isSmall = false;
                if(window.slotsScene.isAutoConut > 0){
                    window.slotsScene.gameState = 2;
                }else{
                    window.slotsScene.gameState = 0;
                }
                window.slotsScene.node.emit("gameOverSettlementCall", 1)
            },this);
            this.node.runAction(cc.sequence(Time, Func));

        },this);
        this.node.runAction(cc.sequence(waitTime, callFunc));
    }
}
