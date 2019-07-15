cc.Class({
    extends: cc.Component,

    properties: {
        contain: {
            default: null, 
            type: cc.Node,
            visible: false,
        },

        sprAtlas: {
            default: null,
            type: cc.SpriteAtlas,
            tooltip: "所用图集",
        },

        nmImg: {
            default: "",
            tooltip:  "数字图片前缀",
        },

        ptImg: {
            default: "",
            tooltip:  "逗号(点号)图片",
        },

        yiImg: {
            default: "",
            tooltip:  "亿",
        },

        wanImg: {
            default: "",
            tooltip:  "万",
        },

        flag: {
            default: 0,
            range: [0, 2, 1],
            tooltip: "0普通数字， 1，3位数一个点， 2. 加亿，万",
        }, 

        nmWidth: {
            default: 0,
            visible: false,
        },

        nmHeight: {
            default: 0,
            visible: false,
        },

        nmInfo: {
            default: [],
            visible: false,
        },

        _value: {
            default: "",
            visible: false,
        },

        string: {
            get(){
                return this._value.toString();
            },
            set(vl){
                if(!this.contain) this.init();
                
                this._value = vl.toString();
                this.contain.removeAllChildren();
                if (this.flag === 0){
                    this.setStrNormal(this._value);
                }else if(this.flag === 1){
                    this.setStrPt(this._value);
                }else if(this.flag === 2){
                    this.setStrWord(this._value);
                }
            },
            tooltip: "只能是数字",
        },
	},

    makeNumberSp(name){
        var nd = new cc.Node();
        var sp = nd.addComponent(cc.Sprite);
        sp.spriteFrame = this.sprAtlas.getSpriteFrame(name);
        this.contain.addChild(nd);
        return nd;
    },

    setStrNormal(str){
        var ary = str.split("");
        for (var i = 0; i < ary.length; i++){
            var nd = this.makeNumberSp(this.nmInfo[ary[i]]);
            nd.x = this.nmWidth * (i + 0.5);
            nd.y = - this.nmHeight * 0.5;
        }
        this.contain.x = -this.node.anchorX * this.nmWidth * ary.length;
        this.contain.y = this.node.anchorY * this.nmHeight;
    },

    setStrPt(str){
        var ptWidth = 0;
        var ary = str.split("");
        var len = ary.length;
        for (var i = 0; i < len; i++){
            if((len - i) % 3 === 0){
                var ndpt = this.makeNumberSp(this.nmInfo["p"]);
                ndpt.x = this.nmWidth * (i + 0.5) + ptWidth;
                ndpt.y = - this.nmHeight * 0.5;    
                ptWidth += ndpt.width;
            }
            var nd = this.makeNumberSp(this.nmInfo[ary[i]]);
            nd.x = this.nmWidth * (i + 0.5) + ptWidth;
            nd.y = - this.nmHeight * 0.5;
        }
        this.contain.x = -this.node.anchorX * (this.nmWidth * ary.length + ptWidth);
        this.contain.y = this.node.anchorY * this.nmHeight;
    },

    setStrWord(str){
        var totalWidth = 0;
        var fixstr = str;
        if (str.length > 8){
            fixstr = str.substring(0, str.length - 8) + "p";
            fixstr += str.substring(str.length - 8, str.length - 6) + "y";
        }else if(str.length > 4){
            fixstr = str.substring(0, str.length - 4) + "p";
            fixstr += str.substring(str.length - 4, str.length - 2) + "w";
        }
        var ary = fixstr.split("");
        var len = ary.length;
        for (var i = 0; i < len; i++){
            var nd = this.makeNumberSp(this.nmInfo[ary[i]]);
            nd.x = nd.width *0.5 + totalWidth;
            nd.y = - this.nmHeight * 0.5;
            totalWidth += nd.width;            
        }
        this.contain.x = -this.node.anchorX * totalWidth;
        this.contain.y = this.node.anchorY * this.nmHeight;
    },

    init(){        
        for (var i = 0; i <= 9; i++){
            this.nmInfo[i.toString()] = this.nmImg + i;
        }
        this.nmInfo["p"] = this.ptImg;
        this.nmInfo["w"] = this.yiImg;
        this.nmInfo["y"] = this.wanImg;
        
        this.contain = new cc.Node();
        this.node.addChild(this.contain);

        var nd = new cc.Node();
        var sp = nd.addComponent(cc.Sprite);
        sp.spriteFrame = this.sprAtlas.getSpriteFrame(this.nmInfo["0"]);
        this.nmWidth = nd.width;
        this.nmHeight = nd.height;
    },

});