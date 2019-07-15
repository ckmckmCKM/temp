var Eventor = cc.Class({
    extends: cc.Component,

    ctor: function(){
        this._eventMap = {};
    },

    on: function(key, fc, target){
        if(typeof(this._eventMap[key]) === "undefined"){
            this._eventMap[key] = [];
        }
        this._eventMap[key].push({t: target, f: fc.bind(target),});
    },

    emit: function(key, data){
        var ary = this._eventMap[key];
        if(typeof(ary) === "undefined"){
            return;
        }
        for (var i = 0; i < ary.length; i++){
            ary[i].f(data);
        }
    },

    off: function(target){
        for (var key in this._eventMap){
            var ary = this._eventMap[key];
            if(typeof(ary) !== "undefined"){
                for (var n = 0, i = 0; i < ary.length; i++){
                    if(ary[i - n].t === target){
                        ary.splice(i - n, 1); 
                        n++;
                    }
                }
            }
        }
    },
});

window.eventor = new Eventor();

