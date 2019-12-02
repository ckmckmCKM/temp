import { LReuseQueue } from '../support/Lqueue' 
const {ccclass, property} = cc._decorator;
@ccclass
export default class LTableView extends cc.Component {
    
    @property({
        type: cc.Size,
        tooltip: "cell的尺寸"
    })
    cellSize: cc.Size = cc.size(0,0);
    
    @property({
        type: cc.Integer,
        tooltip: "cell的个数"
    })
    cellNum: number = 0;

    @property({
        type: cc.Prefab,
        tooltip: "cell的节点"
    })
    cellPref: cc.Prefab = null;

    @property({
        type: cc.Component.EventHandler,
        tooltip: "cell的回调,修改cell属性"
    })
    cellback: cc.Component.EventHandler = new cc.Component.EventHandler();

    private repeat: boolean = true;
    private pre_: cc.Vec2 = cc.v2(0,0);
    private sc_: cc.ScrollView;
    private queue_: LReuseQueue = new LReuseQueue(5);
    
    onLoad () {
        let size = this.node.getContentSize();
        this.sc_ = this.node.getComponent(cc.ScrollView);
        this.sc_.content.setContentSize(size);
        this.node.getChildByName("view").setContentSize(size);

        let event = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = "LTableView";
        event.handler = "scrolling";
        this.sc_.scrollEvents.push(event);
        
        let num = 0;
        if(this.sc_.horizontal) num = Math.floor(size.width/this.cellSize.width)+3;
        else num = Math.floor(size.height/this.cellSize.height)+3;
        for(var i=0; i<num; i++){
            let nd = cc.instantiate(this.cellPref);
            nd.setAnchorPoint(cc.v2(0,1));
            nd.parent = this.sc_.content;
            this.queue_.pushBack(nd);
            nd.active = false;
        }
        this.reload();
    }

    /** 设置cell回到函数 
     * @param: 节点对象，组件名字，函数名字
     */
    setCellback(target:cc.Node, com:string, hand:string){
        this.cellback.target = target;
        this.cellback.component = com;
        this.cellback.handler = hand;
    }

    /** 当收到数据后重新加载 */
    reload(){
        let ctn = 0;
        this.repeat = true;
        let pos = cc.v2(0,0);
        this.sc_.scrollToTopLeft(0);   
        let nd = this.queue_.que.root;     
        let size = this.node.getContentSize();
        if(this.sc_.horizontal){
            this.sc_.content.setContentSize(cc.size(this.cellSize.width*this.cellNum,size.height));
        }else{
            this.sc_.content.setContentSize(cc.size(size.width,this.cellSize.height*this.cellNum));
        }
        while(nd != null){
            if(ctn < this.cellNum){
                nd.obj.active = true;
                if(this.sc_.horizontal) pos.x = ctn*this.cellSize.width;
                else pos.y = -ctn*this.cellSize.height;
                nd.obj.setPosition(pos);
                this.cellback.emit([nd.obj, ctn]);
            }else{
                nd.obj.active = false;
                this.repeat = false;
            }
            nd = nd.next;
            ctn++;
        }
    }
  
    scrolling(scoller:cc.ScrollView, event:any, data:any){
        if(this.repeat == false) return;
        if(event == cc.ScrollView.EventType.SCROLL_BEGAN){
            this.pre_ = this.sc_.getScrollOffset();
        }
        if(event != cc.ScrollView.EventType.SCROLLING) return;

        let nd = null;
        let fixpos = 0;
        let offset = this.sc_.getScrollOffset();
        if(this.sc_.horizontal){
            if(offset.x<this.pre_.x){
                for(var i=0; i<this.cellNum; i++){
                    nd = this.queue_.que.root;
                    if(nd == null) break;
                    if(nd.obj.position.x+offset.x > -this.cellSize.width) break;
                    fixpos = this.queue_.que.last.obj.position.x+this.cellSize.width;
                    let idx = Math.floor(fixpos / this.cellSize.width);
                    if(idx >= this.cellNum) break;
                    nd.obj.setPosition(cc.v2(fixpos, 0));
                    this.queue_.front2Back(); 
                    this.cellback.emit([nd.obj, idx]);
                }
            }else if(offset.x>this.pre_.x){
                let size = this.node.getContentSize();
                for(var i=0; i<this.cellNum; i++){
                    nd = this.queue_.que.last;
                    if(nd == null) break;
                    if(nd.obj.position.x+offset.x < size.width) break;
                    fixpos = this.queue_.que.root.obj.position.x-this.cellSize.width;
                    let idx = Math.floor(fixpos / this.cellSize.width);
                    if(idx < 0) break;
                    nd.obj.setPosition(cc.v2(fixpos, 0));
                    this.queue_.back2Front();
                    this.cellback.emit([nd.obj, idx]);
                }
            }
        }else{
            if(offset.y > this.pre_.y){
                for(var i=0; i<this.cellNum; i++){
                    nd = this.queue_.que.root;
                    if(nd == null) break;
                    if(nd.obj.position.y+offset.y < this.cellSize.height) break;
                    fixpos = this.queue_.que.last.obj.position.y-this.cellSize.height;
                    let idx = Math.floor(-fixpos / this.cellSize.height);
                    if(idx >= this.cellNum) break;
                    nd.obj.setPosition(cc.v2(0, fixpos));
                    this.queue_.front2Back();
                    this.cellback.emit([nd.obj, idx]);
                }
            }else if(offset.y < this.pre_.y){
                let size = this.node.getContentSize();
                for(var i=0; i<this.cellNum; i++){
                    nd = this.queue_.que.last;
                    if(nd == null) break;
                    if(nd.obj.position.y+offset.y > -size.height) break;
                    fixpos = this.queue_.que.root.obj.position.y+this.cellSize.height;
                    let idx = Math.floor(-fixpos / this.cellSize.height);
                    if(idx < 0) break;
                    nd.obj.setPosition(cc.v2(0, fixpos));
                    this.queue_.back2Front();
                    this.cellback.emit([nd.obj, idx]);
                }
            }
        }
    }
}
