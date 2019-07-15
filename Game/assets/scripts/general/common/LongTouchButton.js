
cc.Class({
    extends: cc.Component,

    properties: {
        longTouchMaxTime: {
            default: 1.2,
            tooltip: "长按时长",
        },

        interactable: {
            default: true, 
            tooltip: "按钮响应是否有效",
            notify() {
                if(this.interactable){
                    this._sprite.setState(cc.Sprite.State.NORMAL);
                }else{
                    this._sprite.setState(cc.Sprite.State.GRAY);
                }
            }
        },

        normalAry: {
            default: [],
            type: [cc.SpriteFrame], 
            tooltip: "第一套初始显示，\n第二套停止显示，\n第三套长按后显示",
        }, 

        pressedAry: {
            default: [],
            type: [cc.SpriteFrame], 
            tooltip: "第一套初始按下显示，\n第二套停止按下显示，\n第三套长按后按下显示\n如果没有点击图片默认放大1.1倍",
        }, 

        clickEvents: {
            default: [],
            type: [cc.Component.EventHandler],
            tooltip: "第一套初始按下回调，\n第二套点击停止回调，\n第三套长按后回调", 
        },
    },

    onLoad () {
        this.state = 0;
        this.longTime = 0;
        this.isLongTouch = false;
        this.isExecLong = false;
        this._sprite = this.node.getComponent(cc.Sprite);
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    },

    // state 0 开始，1停止，2自动
    changeState(bPress, state){
        this.state = (typeof(state) === "undefined" ? this.state : state);
        var frame = bPress ? this.pressedAry[this.state] : this.normalAry[this.state];
        if(frame){
            this.node.scale = 1.0;
            this._sprite.spriteFrame = frame;
        }else{
            this.node.scale = bPress ? 1.1 : 1.0;
        } 
    },

    _onTouchBegan(event){
        if(!this.interactable) return;
        if(this.state === 0){
            this.longTime = 0;
            this.isLongTouch = true;
        }
        this.isExecLong = false;
        this.changeState(true);
    },

    _onTouchMove(event){
        if(!this.interactable) return;
        let hit = this.node._hitTest(event.touch.getLocation());
        this.changeState(hit);
        if(hit){
            if(this.state === 0) this.isLongTouch = true;
        }else{
            this.longTime = 0;
            this.isLongTouch = false;
        }
    },

    _onTouchEnded(event){
        if(!this.interactable) return;
        if(this.isExecLong) return;
        if(this.state === 2) this.state = 1;
        if(this.clickEvents[this.state]){
            this.clickEvents[this.state].emit([this]);    
        }
        if(this.state === 1) this.state = 0;
        else this.state = 1; 
        this.changeState(false);
        this.isLongTouch = false;
    },

    _onTouchCancel(event){
        this.isLongTouch = false;
    },

    update(dt){
        if(this.isLongTouch){
            this.longTime += 0.02;
            if(this.longTime >= this.longTouchMaxTime){
                this.state = 2;
                this.isExecLong = true;
                this.isLongTouch = false;
                if(this.clickEvents[this.state]){
                    this.clickEvents[this.state].emit([this]);
                }
                this.changeState(false);
            }
        }
    },

    onDestroy(){
        this.node.targetOff(this);
    }, 
});
