const {ccclass, property} = cc._decorator;

@ccclass
export default class runLogic extends cc.Component {
    // 5列容器
    _panleLayout1 : cc.Node[] =[];
    _panleLayout2 : cc.Node[] =[];

    // 滚动图片资源
    @property([cc.SpriteFrame])
    gameStopIcon: cc.SpriteFrame[] = [];
    // 停止图片资源
    @property([cc.SpriteFrame])
    gameRunRollIcon: cc.SpriteFrame[] = [];

    // 是否滚动
    isRunPanleState : boolean = false;
    // 循环音效
    loopAudio = null;

    rollTimeState = {
        RollAllBeginTime : 0,  // 起步 
        RollSubTime : 0,  // 匀速 
        RollUniformTime : 0, // 减速2
        RollEndTime : 0, // 减速2
    };
  
    onLoad() { 
        window.slotsScene.runLogic = this;  
    }

    // 构造
    start() {  
        // 得到容器 随机重置显示图标
        for (let i = 0; i < 5; i++) {
            this._panleLayout1[i] = this.node.getChildByName("run_1_" + i);
            this._panleLayout2[i] = this.node.getChildByName("run_2_" + i); 
            this.randomSprtieIcon(this._panleLayout1[i],this.gameRunRollIcon);
            this.randomSprtieIcon(this._panleLayout2[i],this.gameStopIcon);
            // this.randomSprtieIcon(this._panleLayout1[i]);
            // this.randomSprtieIcon(this._panleLayout2[i]);
        } 
    }

    // 滚动开始调用
    runPanleBeginFunc(){
        window.audioMng.playEffect(window.slotsScene.audioSource[0],false);
        // 滚动中或者没有快停
        if(this.isRunPanleState == true && window.slotsScene.isStop == false){
            console.log("滚动中");
            return;
        } 
        this.isRunPanleState = true;

        let one = window.slotsScene.roolConfig.returnaddRollCountMode();
 
        this.rollTimeState.RollAllBeginTime = one[0];  
        this.rollTimeState.RollSubTime = one[1];
        this.rollTimeState.RollUniformTime = one[2];
        this.rollTimeState.RollEndTime = one[3]; 
        
        // // 根据模式 调用滚动函数
        // //if(window.slotsScene.roolConfig.isRollMode == true){
            // 次数滚动
            for (let i = 0; i < 5; i++) {   
                this.runPanleHaveFunc(this._panleLayout1[i],i); 
            }
            for (let i = 0; i < 5; i++) {  
                this.runPanleHaveFunc(this._panleLayout2[i],i); 
            }
        //}else{
        //}
    }
    
    // 次数滚动逻辑
    runPanleHaveFunc(rollnode,line){
        let beginTime = window.slotsScene.roolConfig.inRunPanleBeginTime[line];
        // 有填写滚动起始时间，但是没填写完整
        if(beginTime == 0){
            console.log("请填写第" + line + "个起始滚动时间，防止滚动出错");
            return;
        }
        // 没有填写滚动起始时间，默认0
        if(beginTime == null){
            beginTime = 0;
        } 

        
        // 滚动次数
        let rollNumber = 0  
        let timeSub = this.rollTimeState.RollAllBeginTime
        // 滚动列表抬起动作
        let move1 = cc.moveBy(this.rollTimeState.RollAllBeginTime / 2 ,cc.v2(0,50))//.easing(cc.easeExponentialIn());
        let move2 = cc.moveBy(this.rollTimeState.RollAllBeginTime ,cc.v2(0,-550))//.easing(cc.easeExponentialIn());
        let time = cc.delayTime(beginTime);
        let func = cc.callFunc(function(){  
            if(this.loopAudio == null){
                this.loopAudio = window.audioMng.playEffect(window.slotsScene.audioSource[1],true); 
            }
            this.rollFunc(rollnode,rollNumber,line,timeSub);   
        },this); 
        rollnode.runAction(cc.sequence(time,move1,move2,func));
    }

    // 次数递归滚动
    rollFunc(rollnode,rollNumber,line,timeSub) {
        if( rollNumber > window.slotsScene.roolConfig.isRollModeNormalCount[line] || (window.slotsScene.isStop == true && rollNumber >= 2) ){ //
            this.runPanleEndFunc(rollnode,line)
        }else{
            
            // 滚动自增
            rollNumber++; 
 
            // 动态修改滚动时间
            timeSub = timeSub - this.rollTimeState.RollSubTime ;
            if(timeSub < this.rollTimeState.RollUniformTime){
                timeSub = this.rollTimeState.RollUniformTime;
            }
            if( window.slotsScene.roolConfig.isRollModeNormalCount[line] - rollNumber <= 3){
                timeSub = timeSub + this.rollTimeState.RollSubTime
            }
            if(timeSub > this.rollTimeState.RollEndTime){
                timeSub = this.rollTimeState.RollEndTime
            }
            let moveto = null;
            if(rollnode.y > 450 && rollnode.y < 600 || rollnode.y < -250){
                // 滚动进行中修改随机图片
                if(rollNumber + 1 >= window.slotsScene.roolConfig.isRollModeNormalCount[line]){
                    this.randomSprtieIcon(rollnode,this.gameRunRollIcon);
                }else{
                    this.randomSprtieIcon(rollnode,this.gameStopIcon);
                }  
                rollnode.y = 500 ;
                moveto = cc.moveTo(timeSub,cc.v2(rollnode.x,0)); 
            }else{
                rollnode.y = 0 ;
                moveto = cc.moveTo(timeSub,cc.v2(rollnode.x,-500)); 
            }
            rollnode.runAction(moveto);
            let time = cc.delayTime(timeSub);
            let func = cc.callFunc(function(){ 
                this.rollFunc(rollnode,rollNumber,line,timeSub);
            },this);  
            rollnode.runAction(cc.sequence(time,func));
        }
    } 

    // 次数滚动结束
    runPanleEndFunc(rollnode,line){
        if(this.loopAudio!= null && line == 4){
            window.audioMng.stopEffect(this.loopAudio); 
            this.loopAudio = null; 
        }  

        let func = cc.callFunc(function(){ 
            if(rollnode.y > 450 && rollnode.y < 600 || rollnode.y < -250){   
                if(line == 4 ){  
                    //window.slotsScene.gameState = 0;
                    // this.isRunPanleState = false;
                    // window.slotsScene.isStop = false;
                    // 隐藏滚动列表
                    this.node.active = false;
                    // 显示结算列表
                    window.slotsScene.endLayer.node.active = !window.slotsScene.endLayer.layerActive; 
                    let show_type = 0;
                    if(window.slotsScene.SceneDemo.m_nGeZiGame > 0){
                        // 小游戏；
                        show_type = 10;
                    }else if(window.slotsScene.SceneDemo.m_bFreeGame == true){
                        // 免费游戏
                        show_type = 9;
                    }else if(window.slotsScene.isFreeCount == 0 && window.slotsScene.SceneDemo.freeCountWinGold > 0 && window.slotsScene.SceneDemo.m_nWinPeiLv == 0){
                        // 免费游戏结算
                        window.slotsScene.node.emit("gameFreeSettlementEndCall")
                    }else if(window.slotsScene.SceneDemo.m_nWinPeiLv == 0){  //if(window.slotsScene.SceneDemo.m_nWinPeiLv == 0 && window.slotsScene.gameState == 1)
                        window.slotsScene.endLayer.senceLayerTest(null,null,"再接再厉！")
                        window.slotsScene.node.emit("gameOverSettlementCall",1)
                    } 
                    window.slotsScene.endLayer.setResultImage();
                    window.slotsScene.endLayer.slotsEndLayer(show_type);
                } 
                rollnode.y = 500 
            }else{ 
                rollnode.y = 0 
            } 
        },this); 
        if(rollnode.y > 450 && rollnode.y < 600 || rollnode.y < -250){ 
   
             let num4 = Math.ceil(Math.random()*10);  
            rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[window.slotsScene.SceneDemo.listResult[line][0]];
            rollnode.getChildByName("icon_1").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[window.slotsScene.SceneDemo.listResult[line][1]];
            rollnode.getChildByName("icon_2").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[window.slotsScene.SceneDemo.listResult[line][2]];
            rollnode.getChildByName("icon_3").getComponent(cc.Sprite).spriteFrame = this.gameRunRollIcon[num4];
            rollnode.y = 500
        }
        let endTime = this.rollTimeState.RollEndTime;
        if(window.slotsScene.isStop == true){
            endTime = 0.1;
        }
        let moveto1 = cc.moveBy(endTime,cc.v2(0,-600));
        let musicfunc = cc.callFunc(function(){
            window.audioMng.playEffect(window.slotsScene.audioSource[2],false);
        }); 
        let moveto2 = cc.moveBy(endTime,cc.v2(0,100)).easing(cc.easeBackOut()); 
        rollnode.runAction(cc.sequence(moveto1,musicfunc,moveto2,func)); 
    }

    // 随机生成图标
    randomSprtieIcon(rollnode,data){
        // 随机取整
        let num1 = Math.ceil(Math.random()*10);
        let num2 = Math.ceil(Math.random()*10);
        let num3 = Math.ceil(Math.random()*10);
        let num4 = Math.ceil(Math.random()*10); 
        rollnode.getChildByName("icon_0").getComponent(cc.Sprite).spriteFrame = data[num1];
        rollnode.getChildByName("icon_1").getComponent(cc.Sprite).spriteFrame = data[num2];
        rollnode.getChildByName("icon_2").getComponent(cc.Sprite).spriteFrame = data[num3];
        rollnode.getChildByName("icon_3").getComponent(cc.Sprite).spriteFrame = data[num4];
    }
}


// // 时间滚动
// runPanleTimeFunc(rollnode,line){
//     let beginTime = window.slotsScene.roolConfig.inRunPanleBeginTime[line];
//     // 有填写滚动起始时间，但是没填写完整
//     if(beginTime == 0){
//         console.log("请填写第" + line + "个起始滚动时间，防止滚动出错");
//         return;
//     } 
//     // 没有填写滚动起始时间，默认0
//     if(beginTime == null){
//         beginTime = 0;
//     } 
//     // 滚动次数
//     let rollNumber = 0  
//     let timeSub = window.slotsScene.roolConfig.inRollStateTime
//     // 滚动列表抬起动作
//     let move1 = cc.moveBy(window.slotsScene.roolConfig.inRollStateTime / 2 ,cc.v2(0,50))//.easing(cc.easeExponentialIn());
//     let move2 = cc.moveBy(window.slotsScene.roolConfig.inRollStateTime ,cc.v2(0,-550))//.easing(cc.easeExponentialIn());
//     let time = cc.delayTime(beginTime);
//     let func = cc.callFunc(function(){  
//             this.rollTimeFunc(rollnode,rollNumber,line,timeSub);   
//     },this); 
//     rollnode.runAction(cc.sequence(time,move1,move2,func))
// }   
// // 时间递归滚动
// rollTimeFunc(rollnode,rollNumber,line,timeSub) {
//     if( this.isTimeStop || (window.slotsScene.isStop == true && rollNumber >= 3) ){
//         this.runPanleEndFunc(rollnode,line)
//     }else{

//         // 滚动自增
//         rollNumber++; 
//         // 动态修改滚动时间
//         timeSub = timeSub - window.slotsScene.roolConfig.inRollBeginTime;
//         if(timeSub < window.slotsScene.roolConfig.inRollBeginTime){
//             timeSub = window.slotsScene.roolConfig.inRollBeginTime ;
//         } 
//         let moveto = null;
//         if(rollnode.y > 450 && rollnode.y < 600 || rollnode.y < -250){
//             // 滚动进行中修改随机图片
//             this.randomSprtieIcon(rollnode);
//             rollnode.y = 500 ;
//             moveto = cc.moveTo(timeSub,cc.v2(rollnode.x,0)); 
//         }else{
//             rollnode.y = 0 ;
//             moveto = cc.moveTo(timeSub,cc.v2(rollnode.x,-500)); 
//         }
//         rollnode.runAction(moveto);

//         let time = cc.delayTime(timeSub);
//         let func = cc.callFunc(function(){
//             window.audioMng.playEffect(window.slotsScene.audioSource[1],false);
//             this.rollFunc(rollnode,rollNumber,line,timeSub);
//         },this);  
//         rollnode.runAction(cc.sequence(time,func));
//     }
// } 
