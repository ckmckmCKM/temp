var STATE_ENUM = {
    sNull: 0,   //无状态
    sRun: 1,    //转动
    sStop: 2,   //停止
    sStopEND: 3, //停止完成
};

cc.Class({
    extends: cc.Component,
    
    properties: {
        speed: {
            default: 18, 
            tooltip: "转动速度",
        },

        interval: {
            default: 0.2, 
            tooltip: "两列转动间隔时间",
        },

        quickInterval: {
            default: 1.0, 
            tooltip: "快转延迟时间",
        },

        bouncePer: {
            default: 0.5, 
            tooltip: "回弹比例，相对于一个格子高度的比例，小于0.1不回弹",
        },

        clips: {
            default: [],
            type: cc.AudioClip,
            tooltip: "第一个转动音效，\n第二个停止音效，\n第三个快转音效.",
        },

        stopCall: {
            default: null,
            type: cc.Component.EventHandler,
            tooltip: "当完全停止回调", 
        },

        frameAry: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "图标的图片,\n注意，需要按照顺序加入",
        }, 
    },

    onLoad(){
        this.addSpeedIdx = -1;          //加速转动列
        this.state = STATE_ENUM.sNull;  //整个状态
        this.timeAry = [];              //每一列时间
        this.nodeAry = [];              //图标数组
        this.stateAry = [];             //每一列的状态
        this.resultAry = [];            //结果数组
        this.allCurl = false;           //是否全部旋转

        for(var i = 1; i < 6; i++){
            var rowAry = [];
            for(var j = 1; j < 6; j++){
                var nd = this.node.getChildByName("nd" + i + j);
                nd.stopping = false;
                rowAry.push(nd);
            }
            this.stateAry.push(STATE_ENUM.sNull);
            this.nodeAry.push(rowAry);
            this.timeAry.push(0);
        } 
        this.topy = this.nodeAry[0][0].y;      //最上面的 y值
        this.downy = this.nodeAry[0][4].y;     //最下面的 y值
        this.disy = (this.topy - this.downy) / 4; //每一个间距
    },

    beginGame(){
        if(this.state !== STATE_ENUM.sNull) return;
        this.addSpeedIdx = -1;
        this.allCurl = false;
        this.state = STATE_ENUM.sRun;
        if(this.clips[0]) this.curlId = audioMng.playEffect(this.clips[0], true);
        for(var i = 0; i < 5; i++){
            this.stateAry[i] = STATE_ENUM.sNull;
        }
    },

    stopGame(ary, fastIndex){
        if(this.state !== STATE_ENUM.sRun) return;
        this.addSpeedIdx = fastIndex;
        this.state = STATE_ENUM.sStop;
        this.resultAry = ary;
    },

    rowCurl(row, speed){
        var ary = this.nodeAry[row];
        for (var i = 0; i < 5; i++){
            var nd = ary[i];
            nd.y -= speed;
            if(nd.y <= this.downy){
                nd.y = ary[i === 4 ? 0 : i + 1].y + this.disy;
                let idx = Math.floor(Math.random() * (this.frameAry.length - 1));
                nd.getComponent(cc.Sprite).spriteFrame = this.frameAry[idx];
            } 
        }
    },

    stopRow(obj, row){
        this.timeAry[row] = 0;
        var ary = this.nodeAry[row];
        this.stateAry[row] = STATE_ENUM.sStopEND;
        for(var i = 0; i < 5; i++){
            ary[i].stopping = false;
        }
        if(this.clips[1]){
            audioMng.playEffect(this.clips[1]);
        }
        if(this.addSpeedIdx == (row + 1) && this.clips[2]){
            audioMng.stopEffect(this.curlId);
            this.fastIdx = audioMng.playEffect(this.clips[2], true);
        }
        if(row === 4){ 
            this.state = STATE_ENUM.sNull;
            audioMng.stopEffect(this.curlId);
            audioMng.stopEffect(this.fastIdx);
            for(var i = 0; i < 5; i++){
                this.stateAry[i] = STATE_ENUM.sNull;
            }
            if(this.stopCall){
                this.stopCall.emit();
            }
        }
    },

    rowCurlAndStop(row, speed){
        var stopCount = 0;
        var ary = this.nodeAry[row];
        for(var i = 4; i >= 0; i--){
            var nd = ary[i];
            if(nd.stopping){
                stopCount++;
            }else{
                nd.y -= speed;
                if(nd.y <= this.downy){
                    nd.y = ary[i === 4 ? 0 : i + 1].y + this.disy;
                    var idx = Math.floor(Math.random() * (this.frameAry.length - 1));
                    nd.getComponent(cc.Sprite).spriteFrame = this.frameAry[idx];
                    if(stopCount === (4 - i)){
                        stopCount++;
                        nd.stopping = true;
                        if(i > 0 && i < 4){
                            idx = this.resultAry[row * 3  + i - 1] - 1;
                            nd.getComponent(cc.Sprite).spriteFrame = this.frameAry[idx];
                        }
                        let endy2 = this.topy - i * this.disy;
                        let endy1 = endy2 - this.disy * this.bouncePer;
                        let dis1 = nd.y - endy1;
                        let dis2 = this.disy * this.bouncePer;
                        var act1 = cc.moveBy(dis1 / speed * 0.017, cc.v2(0, -dis1));
                        var act2 = cc.moveBy(dis2 / speed * 0.017, cc.v2(0, dis2));
                        if(stopCount === 5){
                            var callbk = cc.callFunc(this.stopRow, this, row);
                            if(this.bouncePer < 0.1){
                                nd.runAction(cc.sequence(act1, callbk));
                            }else{
                                nd.runAction(cc.sequence(act1, act2, callbk));   
                            }
                        }else{
                            if(this.bouncePer < 0.1){
                                nd.runAction(act1);
                            }else{
                                nd.runAction(cc.sequence(act1, act2));
                            }
                        }
                    }
                }
            }
        }
    },

    update(){
        
        if(this.state === STATE_ENUM.sNull) return;

        var state = this.state;
        if(state === STATE_ENUM.sStop && !this.allCurl){
            state = STATE_ENUM.sRun;
        }
        if(state === STATE_ENUM.sRun){
            for(var i = 0; i < 5; i++){
                var state = this.stateAry[i];
                if(state === STATE_ENUM.sNull){
                    let time = this.timeAry[i] + 0.02;
                    if(time < this.interval * i){
                        this.timeAry[i] = time;
                    }else{
                        state = STATE_ENUM.sRun;
                        this.stateAry[i] = state;
                        this.timeAry[i] = 0;
                        if(i === 4) this.allCurl = true;
                    }
                }
                if(state === STATE_ENUM.sRun){
                    this.rowCurl(i, this.speed);
                }
            }
        }else if(state === STATE_ENUM.sStop){
            if(this.addSpeedIdx > -1){
                var stopIndex = 0;
                for(var i = 0; i < 5; i++){
                    var speed = this.speed;
                    var state = this.stateAry[i];
                    if(state === STATE_ENUM.sRun){
                        if(this.addSpeedIdx <= stopIndex) speed *=2;
                        if(stopIndex === i){
                            if(this.addSpeedIdx <= stopIndex){
                                this.timeAry[i] += 0.02;
                                if(this.timeAry[i] >= this.quickInterval){
                                    this.rowCurlAndStop(i, speed);
                                }else{
                                    this.rowCurl(i, speed);        
                                }
                            }else{
                                this.rowCurlAndStop(i, speed);
                            }
                        }else{
                            this.rowCurl(i, speed);
                        }
                    }else if(state === STATE_ENUM.sStopEND){
                        stopIndex = i + 1;
                    }
                }
            }else{
                for(var i = 0; i < 5; i++){
                    var state = this.stateAry[i];
                    if(state === STATE_ENUM.sRun){
                        var time = this.timeAry[i] + 0.02;
                        if(time < this.interval * i){
                            this.timeAry[i] = time;
                            this.rowCurl(i, this.speed);
                        }else{
                            state = STATE_ENUM.sStop;
                            this.stateAry[i] = state;
                            this.timeAry[i] = 0;
                        }
                    }
                    if(state === STATE_ENUM.sStop){
                        this.rowCurlAndStop(i, this.speed);
                    }
                }
            }
        }
    },

});