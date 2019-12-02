class lts{
    //打印 Object 数据
    static dump(obj:any, desc?:string):void{
        if(!CC_DEBUG) return;
        if(!desc) desc = "";
        cc.log(desc+":");
        cc.log(JSON.stringify(obj));
    }

    //序列帧排序
    static sortFrameAry(frameAry:[cc.SpriteFrame]):[cc.SpriteFrame]{
        frameAry.sort((a,b)=>{
            if(a.name.length < b.name.length) return -1;
            else if(a.name.length > b.name.length) return 1;
            if(a.name > b.name) return 1;
            return -1;
        });
        return frameAry;
    }

    //ip 转 int
    static ip2num(ip:string):number{
        var num = 0;
        var ary = ip.split(".");
        num = Number(ary[0]) * 256 * 256 * 256 + Number(ary[1]) * 256 * 256 + Number(ary[2]) * 256 + Number(ary[3]);
        return (num >>> 0);
    }

    //int 转 ip
    static num2ip(num:number):string{
        var tt = [];
        tt[0] = (num >>> 24) >>> 0;
        tt[1] = ((num << 8) >>> 24) >>> 0;
        tt[2] = (num << 16) >>> 24;
        tt[3] = (num << 24) >>> 24;
        return String(tt[3]) + "." + String(tt[2]) + "." + String(tt[1]) + "." + String(tt[0]);
    }

    // string to uint8Array
    static str2Ary(str: string):Uint8Array{
        var arr = [];
        for (var i = 0, j = str.length; i < j; ++i) {
            arr.push(str.charCodeAt(i));
        }
        var tmpUint8Array = new Uint8Array(arr);
        return tmpUint8Array
    }

    //数字加 逗号
    static numAddPoint(vl:number):string{
        var numStr = "";
        var str = vl.toString();
        var len = str.length;
        for (var i = 0; i < len; i++){
            if((len - i) % 3 === 0 && i > 0 && (str[i]!=".")){
                numStr += ",";
            }
            numStr += str[i];
        }
        return numStr;
    }

    //数字加 斜杠
    static numAddDiagonal(vl:number):string{
        var numStr = "";
        var str = vl.toString();
        var len = str.length;
        for (var i = 0; i < len; i++){
            if((len - i) % 3 === 0 && i > 0){
                numStr += "/";
            }
            numStr += str[i];
        }
        return numStr;
    }

    ///数字加 万，亿
    static numAddWord(vl:number):string{
        var str = vl.toString();
        var fixstr = str;
        if (str.length > 8){
            fixstr = str.substring(0, str.length - 8) + ".";
            fixstr += str.substring(str.length - 8, str.length - 6) + "亿";
        }else{
            fixstr = str.substring(0, str.length - 4) + ".";
            fixstr += str.substring(str.length - 4, str.length - 2) + "万";
        }
        return fixstr;
    }

    //字符串格式化输出 只支持 %f, %d, %02d, %s 
    static strFormat(args:any):string{
        var newStr = "";
        var len = arguments.length;
        console.assert(typeof(arguments[0]) === "string", "strFormat first args must be string");
        if(len == 1){ return arguments[0]; }
        var ary = arguments[0].split(/(%f|%d|%02d|%s)/g);
        for(var sub = "", i = 0, j = 1; i < ary.length; i++){
            sub = ary[i];
            if(sub.length === 0) continue;
            if(!/(%f|%d|%s)/g.test(sub)){
                if(sub === "%02d"){
                    let subStr = arguments[j++].toString();
                    if(subStr.length === 1){
                        newStr += "0" + subStr;
                    }else{
                        newStr += subStr;
                    }
                }else{
                    newStr += sub;
                }
            }else{
                newStr += arguments[j++];
            }
            if(j === len) return newStr;
        }
        return newStr;
    }

    //数字滚动效果  times为动画时长
    static showLabelTurn(nd:any, curNum:number, endNum:number, times:number):void{
        nd.node.stopAllActions();
        nd.node.curNum = curNum;
        nd.node.endNum = endNum;
        // if(curNum instanceof Long){
        //     nd.node.curNum = curNum.toNumber();
        // }
        // if(endNum instanceof Long){
        //     nd.node.endNum = endNum.toNumber();
        // }
        nd.node.perc = Math.ceil(nd.node.endNum * 0.02 / times);
        
        var act1 = cc.delayTime(0.02);
        var act2 = cc.callFunc(function(mroot, nd2){
            mroot.curNum += mroot.perc;
            if(mroot.curNum >= mroot.endNum){
                mroot.stopAllActions();
                mroot.curNum = mroot.endNum;
            }
            nd2.string = mroot.curNum.toString();
        }, nd.node, nd);
        nd.node.runAction(cc.repeatForever(cc.sequence(act1, act2)));
    }
    //打开界面动画
    static openLayerAction(node, func, self): void {
        console.log('展开动画播放');    
        if (node != null){
            node.active = true    
            node.setScale(0.1) //设置缩放
            let actiontime = 0.2;  //时间
            let ac1 = cc.scaleTo(actiontime, 1.1);
            let ac2 = cc.scaleTo(actiontime, 1);
            let seq = cc.sequence(ac1, ac2);
            node.runAction(seq)
        }       
    }
    //关闭界面动画、动画节点 绑定函数 
    static closeLayerAction(node,func,self): void {    
        let actiontime =  0.2;  //时间
        let ac1 = cc.scaleTo(actiontime,0.1);
        let call = cc.callFunc(function () {           
            if (func) {
                func(self)
            }      
        })
        node.runAction(cc.sequence(ac1, call))
    }
    //播放音乐或者停止播放音乐
    static music(node,state): void {     
        state = Number(state)      
        if (state == 1 || state == null){
            console.log('音乐播放----'+state);  
            node.play()
        }   
        else if(state == 0){ 
            console.log('音乐播放----'+state);  
            node.stop()
        }        
    }
}

window.lts = lts;