class LinkNd{
	obj:any = null;
	pre:any = null;
	next:any = null;

	constructor(obj?:any){
		this.obj = obj ? obj : null;
	}
};

class _Lqueue{
    root:LinkNd = null;
    last:LinkNd = null;
    popFront(){
        if(this.root === null) return null;
        let nd = this.root;
        this.root = nd.next;
        if(this.root === null) this.last = null;
        else this.root.pre = null; 
        return nd;
    }
    popBack(){
        if(this.last === null) return null;
        let nd = this.last;
        this.last = nd.pre;
        if(this.last === null) this.root = null;
        else this.last.next = null;
        return nd;
    }
    pushFront(nd?:LinkNd){
        if(typeof(nd) === 'undefined') nd = new LinkNd();
        nd.pre = null; nd.next = this.root;
        if(this.root){
            this.root.pre = nd;
            this.root = nd;
        }else{
            this.root = nd;
            this.last = nd;
        }
    }
    pushBack(nd?:LinkNd){
        if(typeof(nd) === 'undefined') nd = new LinkNd();
        nd.pre = this.last; nd.next = null;
        if(this.last){
            this.last.next = nd;
            this.last = nd;
        }else{
            this.root = nd;
            this.last = nd;
        }
    }
};

export class LReuseQueue{
    que:_Lqueue;
    reque:_Lqueue;
    maxSize:number;
    constructor(maxSize:number){
        this.maxSize = maxSize;
        this.que = new _Lqueue();
        this.reque = new _Lqueue();
        for(var i=1; i<this.maxSize; i++){
            this.reque.pushBack();
        }
    }
    popFront(){
        let nd = this.que.popFront();
        if(nd === null) return null;
        this.reque.pushFront(nd);
        return nd.obj;        
    }
    popBack(){
        let nd = this.que.popBack();
        if(nd === null) return null;
        this.reque.pushBack(nd);
        return nd.obj;    
    }
    pushFront(obj:any){
        let nd = this.reque.popFront();
        if(nd === null) nd = new LinkNd(obj);
        else nd.obj = obj;
        this.que.pushFront(nd);
    }
    pushBack(obj:any){
        let nd = this.reque.popBack();
        if(nd === null) nd = new LinkNd(obj);
        else nd.obj = obj;
        this.que.pushBack(nd);
    }
    front2Back(){
        let nd = this.que.popFront();
        if(nd === null) return null;
        this.que.pushBack(nd);
    }
    back2Front(){
        let nd = this.que.popBack();
        if(nd === null) return null;
        this.que.pushFront(nd);
    }
    clear(){
        for(var i=0; i<this.maxSize; i++){
            if(this.popFront() === null) break;
        }
        this.que.root = null;
        this.que.last = null;
    }
}