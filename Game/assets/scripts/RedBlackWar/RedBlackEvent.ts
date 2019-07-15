export default class CustomEvent {

    private _bindFuncList:any[];
    private _emitList:any[];
    private static _instance:CustomEvent = null;

    constructor(){
        this._bindFuncList = [];
        this._emitList = [];
    };

    public static getInstance():CustomEvent{
        if (CustomEvent._instance == null)
            CustomEvent._instance = new CustomEvent();

        return CustomEvent._instance;
    };

    /**
     * 设置监听
     * @param {监听的事件的名字} key 
     * @param {监听的回调方法} cbFunc 
     */
    // 设置事件监听
    public on(key:string,cb:(...vars:any[])=>void,target:Object):void{
        if (this._bindFuncList[key] == null)
            this._bindFuncList[key] = [];

        this._bindFuncList[key][cb] == null && this._bindFuncList[key].push([cb,target]);
    };

    
    /**
     * 触发事件监听函数
     * @param {监听的事件的名字} key 
     * @param {调用时传的参数} args 
     */
    // emit事件，发送消息
    public emit(key:string,...vars:any[]):void{
        let _ary = this._bindFuncList[key];
        // 没有注册，先将要发送的消息保存，然后等待事件注册后，再一起emit
        if (_ary == null){
            if (this._emitList[key] == null)
                this._emitList[key] = [];
    
            this._emitList[key].push(vars);
        }

        _ary && _ary.forEach((_it:any[])=>{
            (_it && _it.length == 2) && _it[0].call(_it[1],vars[0],vars[1],vars[2],vars[3],vars[4]);
        });
    };

    // emitAll，将所有消息都emit
    public emitAll():void{
        for (let key in this._emitList) {
            if (this._emitList.hasOwnProperty(key)) {
                let emitAry = this._emitList[key];
                for (let j in emitAry) {
                    if (emitAry.hasOwnProperty(j)) {
                        let args = emitAry[j];// 去除参数
                        let ary = this._bindFuncList[key];// 去除监听的方法
                        // 开始执行事件
                        for (let iterator in ary) {
                            if (ary.hasOwnProperty(iterator)) {
                                try {
                                    ary[iterator][0].call(ary[iterator][1],args);
                                } catch (error) {
    
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        this._emitList = [];
    };
    

    // 清空全部的事件监听
    public removeAll():void{
        this._bindFuncList = [];
        this._emitList = [];
    }
}