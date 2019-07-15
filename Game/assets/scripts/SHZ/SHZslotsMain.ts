const {ccclass, property} = cc._decorator;

@ccclass
export default class slotsMain extends cc.Component {
    // 定义预设数组属性，将子页面子层级添入此处后续调用
    @property([cc.Prefab])   //  0 菜单，1 下注，2 自动， 3 帮助，4 提示框，
    //5 竖屏spine ,6 比倍進入界面 ，7 比倍界面  8 小游戏login 9 小游戏界面 10 小游戏结算  11 結算 12 自动结算
    partLayer: cc.Prefab[] = [];

    // 游戏主界面文本控件
    @property([cc.Label])
    gameText: cc.Label[] = [];

    // 得到音效资源  (0 游戏背景音乐 , 1按钮,2比倍音效，3转到停止，4转动音效，5結算,6比倍开场，7比倍输，8比倍赢)
    @property([cc.AudioClip])
    audioSource: cc.AudioClip[] = [];

    // 得到免费游戏场景闪烁资源
    @property([cc.Node])
    isFreeShowSprite: cc.Node[] = [];

    // 消息限制
    isMsgSend = false;

    // 押注下标
    @property()
    betsAny : number = 5;

    // 玩家基本信息
    userData = {
        "userName" : "玩家你大爷的",
        "userID" : 5555262,
        "userGold" : 1111111/100,
        "userHeadId" : 5,
    };
 
    // 游戏状态 ( 0:静止状态，1:单点状态，2:停止状态，3:自动状态，4:免费状态，5:选择状态)
    gameState : number = 0;
    // 是否免费状态
    isFree    : boolean = false;
    // 免费次数
    isFreeCount : number = 0;
    // 是否小游戏状态
    isSmall   : boolean = false;
    // 自动游戏次数(如果值为100则是无限)
    isAutoConut : number = 10;
    // 自动状态
    isAutoState : boolean = false; 
    // 是否快停 加速等级 (false:1级加速，true:二级加速) // 菜单界面中按钮设置
    isStop : boolean = false ;
    // 滚动加速
    isAccelerate : boolean = false;
    // 押注线数
    isGameMaxLine : number = 9;
    // 押注金币数组
    isGameBetsAny = [];
    // 当前选择下注倍数下标
    isGameBets : number = 0;
    // 当前押注线数数量
    isGameLine : number = 9;

    // 水浒传专用变量 （比倍流程） 
    isSpecificAry = [];
    // 策划数值
    @property(cc.Label)
    userTipsText :   cc.Label[] = [];
 

    // 进入场景前执行
    onLoad() { 
        cc.log("123")
        // 设置当前游戏得全局变量
        window.slotsScene = this;
    }
    
    // 构造
    start() { 
       // this.isSpecificAry = [0,1,2,1,2,0,0,0,0,1,2,1,1] 
        // 修改下注筹码长度
        this.isGameBetsAny.length = this.betsAny;
        this.isGameBetsAny[0] = 1; 
        this.isGameBetsAny[1] = 2.00; 
        this.isGameBetsAny[2] = 3.00; 
        this.isGameBetsAny[3] = 4.00; 
        this.isGameBetsAny[4] = 5.00;  
        window.slotsScene.clikeButton.setUserGoldUpdata(); 
        window.slotsScene.clikeButton.setSlotsSceneBetsTextUpdata();
        
        this.eventListenersCallFunc()
        window.slotsScene.SceneDemo.sendMsgRequestScene();
    }

    // 创建各事件监听
    eventListenersCallFunc(){
        // 游戏结束结算回调
        this.node.on("gameOverSettlementCall",function(event){ 
            window.slotsScene.roolConfig.autoRoll(event)
        },this); 
        // 调用免费游戏结算回调
        this.node.on("gameFreeSettlementCall",function(event){  
            // 免费游戏结算
            //window.slotsScene.endLayer.freeSettlement(13,0.5);
        },this); 
        // 调用免费转场
        this.node.on("gameFreeSwitchCall",function(event){
        },this);
        // 调用免费游戏结算完成回调（主要处理免费游戏场景更常规游戏场景切换）  
        this.node.on("gameFreeSettlementEndCall",function(event){  
            // 免费游戏结算
            //window.slotsScene.endLayer.freeSettlement(13,2);  
        },this);
        // 小游戏切换
        this.node.on("gameSmallSwitchCall",function(event){  
            window.slotsScene.setscene = cc.instantiate(window.slotsScene.partLayer[8]);
            window.slotsScene.node.addChild(window.slotsScene.setscene,70);

            this.sceneActive(false);
            
            window.slotsScene.endLayer.goSmallGameShowLayer(9,1)
        },this);
        // 彩金池刷新
        this.node.on("UpdatePrizePool",function(event){  
        },this);
        // 下注情况返回 
        this.node.on("returnBets",function(event){  
        },this);
        // 断线监听 
        this.node.on("brokenCall",function(event){  
        },this);
        this.node.on("fullSceneScale", function(scale:number){
            //this.bgImg.node.scale = scale;
            if(window.slotsScene.betsLayer != null){
                window.slotsScene.betsLayer.node.emit("fullSceneScaleSet",scale)
            }
            
        });
        // 横竖屏监听
        this.node.on("changeLandspace",function(event){
            
            if(event){
                cc.log("横屏监听") 
                let diBG = this.node.getChildByName("senceBGNode").getChildByName("diBG");
                diBG.y = -375; 
                
                let runIcon = this.node.getChildByName("runIcon"); 
                let rollBack = this.node.getChildByName("rollBack"); 
                let winLineLayer = this.node.getChildByName("winLineLayer"); 
                runIcon.setScale(1); 
                rollBack.setScale(1); 
                winLineLayer.setScale(1); 
                // let gameDataNode = this.node.getChildByName("gameDataNode");   
                // gameDataNode.y = 0;
                // gameDataNode.setScale(1);

                let gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("mymoney");
                gameDataNode.x = -439;
                gameDataNode.y = -300;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("line");
                gameDataNode.x = -261;
                gameDataNode.y = -300;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("mypay");
                gameDataNode.x = 436;
                gameDataNode.y = -300;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("price");
                gameDataNode.x = 258;
                gameDataNode.y = -300;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("ManyMoney");
                gameDataNode.x = 0;
                gameDataNode.y = -300;


                let btn = this.node.getChildByName("gameButtonNode")
                btn.setScale(1);
                btn = this.node.getChildByName("gameButtonNode").getChildByName("begin");
                btn.x = 576;
                btn.y = -33;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("stopAuto");
                btn.x = 576;
                btn.y = -33;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("free");
                btn.x = 576;
                btn.y = -33;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("Bets");
                btn.x = 576;
                btn.y = 139;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("auto");
                btn.x = 576;
                btn.y = -205; 
                btn = this.node.getChildByName("gameButtonNode").getChildByName("set");
                btn.x = -528;
                btn.y = 324; 
                if(window.slotsScene.spineBack != null ){
                    window.slotsScene.spineBack.destroy();
                    window.slotsScene.spineBack = null;
                }
            }else{ 
                cc.log("竖屏监听")
                let diBG = this.node.getChildByName("senceBGNode").getChildByName("diBG");
                diBG.y = -600; 
                let runIcon = this.node.getChildByName("runIcon"); 
                let rollBack = this.node.getChildByName("rollBack"); 
                let winLineLayer = this.node.getChildByName("winLineLayer"); 
                runIcon.setScale(0.756); 
                rollBack.setScale(0.756); 
                winLineLayer.setScale(0.756); 

                //let gameDataNode = this.node.getChildByName("gameDataNode");   rollBack
                // gameDataNode.y = -300;
                // gameDataNode.setScale(0.75);

                let gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("mymoney");
                gameDataNode.x = -250;
                gameDataNode.y = -500;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("line");
                gameDataNode.x = -100;
                gameDataNode.y = -500;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("mypay");
                gameDataNode.x = 250;
                gameDataNode.y = -500;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("price");
                gameDataNode.x = 100;
                gameDataNode.y = -500;
                gameDataNode = this.node.getChildByName("gameDataNode").getChildByName("ManyMoney");
                gameDataNode.x = 0;
                gameDataNode.y = -400;

                let btn = this.node.getChildByName("gameButtonNode")
                //btn.setScale(0.75);
                btn = this.node.getChildByName("gameButtonNode").getChildByName("begin");
                btn.x = 0;
                btn.y = -280;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("stopAuto");
                btn.x = 0;
                btn.y = -280;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("free");
                btn.x = 0;
                btn.y = -280;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("Bets");
                btn.x = -(window.innerWidth/2)+50;
                btn.y = -280;
                btn = this.node.getChildByName("gameButtonNode").getChildByName("auto");
                btn.x = window.innerWidth/2-50;
                btn.y = -280;

                btn = this.node.getChildByName("gameButtonNode").getChildByName("set");
                btn.x = -477;
                btn.y = 324; 
                
                window.slotsScene.spineBack = cc.instantiate(window.slotsScene.partLayer[5]);
                window.slotsScene.spineBack.x = 0
                window.slotsScene.spineBack.y = 80
                this.node.getChildByName("senceBGNode").getChildByName("gameBG").addChild(window.slotsScene.spineBack, 1);
            }
        },this);
    }
    // 主界面显示与否
    sceneActive(state){
        window.slotsScene.node.getChildByName("gameButtonNode").active = state;
        window.slotsScene.node.getChildByName("gameDataNode").active = state;
        window.slotsScene.node.getChildByName("runIcon").active = state; 
        window.slotsScene.node.getChildByName("rollBack").active = state; 
        window.slotsScene.node.getChildByName("winLineLayer").active = state; 
        if(window.slotsScene.setLayer != null){
            // 显示设置界面
            window.slotsScene.clikeButton.Button[window.slotsScene.clikeButton.Button.length-1].node.active = true;
            window.slotsScene.setLayer.node.destroy();
            window.slotsScene.setLayer = null;
        }
    }
}