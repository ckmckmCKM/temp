const { ccclass, property } = cc._decorator;

@ccclass
export default class BlackJackgameLayer extends cc.Component {
    @property(cc.Prefab)
    paiPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    chipPrefab: cc.Prefab = null;//筹码预制
    //-----------本地测试用
    @property(cc.Node)
    setPaiNode: cc.Node = null;//牌移动到终点
    @property(cc.Node)//wode 另一幅牌
    setPaiNode1: cc.Node = null;

    // @property(cc.AudioClip)//背景音乐
    // bg_music:cc.AudioClip=null;
    //--------------------------
    @property([cc.SpriteFrame])//筹码图片集
    chipSpriteFrame:cc.SpriteFrame[]=[];
    @property(cc.SpriteFrame)
    paiSpriteSF: cc.SpriteFrame = null;
    cardPool: any = null;//牌的对象池
    chipsPool: any = null;//筹码对现池
    firstBetNum: Number = 0;

    ctor() {
    }
    onLoad() {
        this.firstBetNum = 0;
        //30张牌对象
        this.cardPool = new cc.NodePool();
        for (let i = 0; i < 30; ++i) {
            let card = cc.instantiate(this.paiPrefab);
            this.cardPool.put(card);
        }
        //60筹码对象
        this.chipsPool = new cc.NodePool();
        for (let i = 0; i < 60; ++i) {
            let chip = cc.instantiate(this.chipPrefab);
            this.chipsPool.put(chip);
        }


    }
    //牌
    getCard() {//取对象
        let card = null;
        if (this.cardPool.size() > 0) {
            card = this.cardPool.get();
        } else {
            card = cc.instantiate(this.paiPrefab);
        }
        return card;
    }
    putCard(card) {//存入对象池中
        this.cardPool.put(card);
    }
    //筹码
    getChipNode() {//取对象
        let chip = null;
        if (this.chipsPool.size() > 0) {
            chip = this.chipsPool.get();
        } else {
            chip = cc.instantiate(this.chipPrefab);
        }
        return chip;
    }
    putChipNode(chip) {//存入对象池中
        this.chipsPool.put(chip);
    }


    start() {
        this.initRoom();
        // this.faPaiAction();
        // window.audioMng.playMusic(this.bg_music,true);//播放背景音乐
    }
    //初始化房间信息
    initRoom() {
        window.blackJackMsg.uiLayer.playerBtns(0);
    }
    //进入游戏数据初始化
    initGame() {
        let data={
            "uid":1996023,
            "coin":521,
            "betCoin":20
        }
        window.blackJackMsg.uiLayer.seatNodes[1].getComponent('BlackJackSeat').initEnter(data);//玩家进入房间
    }
    //重连游戏
    reconnectGame() { }
    testfapai(event, customEventData) {
        let parentNode = null;
        // let userInfo=[];
        // userInfo.
        let speed=0.5;//发牌间隔速度
        let count=0;
        let users=window.blackJackMsg.uiLayer.seatNodes;
        for(let j=0;j<2;++j){
            for (let i = 0; i < users.length; ++i) {
                let isbanker=false;
                this.scheduleOnce(function () {
                    if(isbanker){
                        parentNode = window.blackJackMsg.uiLayer.bankerPaiNode;//庄
                        this.faPaiAction(parentNode, true, null);//pai:users[i]
                    }else{
                        parentNode = users[i].getComponent('BlackJackSeat').nd_paiNode0;
                        this.faPaiAction(parentNode, true, null);//pai:users[i]
                    }
                }, (speed * count));
                count++;
            }
        }
        
    }
    testfapai1(event, customEventData) {
        this.faPaiAction(this.setPaiNode1, true, null);
    }
    testFanPai() {
        this.fanPai(this.setPaiNode.children[2], this.paiSpriteSF);
    }
    testdividePai() {
        this.dividePai(this.setPaiNode.children[1], this.setPaiNode1);
    }
    tsetPutChip(event, customEventData) {//测试下注
        cc.log("14545656");
        let chipId=Math.round(Math.random()*3);//随机筹码值
        let chipNum=window.blackJackMsg.roomInfo.chips[chipId];
        // let chipNum=283;
        // if(chipNum>window.blackJackMsg.roomInfo.chips[3]){//服务器发的下注数额大于基本最大下注=》有人全下操作
        //     this.cheackAllChipPut(chipNum);
        //     return;
        // }

        this.putChip(1, chipNum, 1);
    }
    //发牌=>>>>@parentNode:要发牌人位置的牌的父节点  @isShow：是否翻牌  @paiSprite:牌面的纹理图点 @intervalX x轴间隔
    faPaiAction(parentNode, isShow, paiSprite) {
        //---------本地测试数据
        isShow = true;
        if (!paiSprite) {
            paiSprite = this.paiSpriteSF;
        }
        if (!parentNode) {
            parentNode = this.setPaiNode;
        }
        //-------------
        let intervalX = parentNode.childrenCount * 30 + 22;//64*86牌的间隔22//庄*32+(75*105)间隔26
        let pai = this.getCard();
        pai.parent = parentNode;
        let paiPos = this.converPosition(window.blackJackMsg.uiLayer.node_faPai, pai);
        pai.position = paiPos;
        let pos = this.converPosition(parentNode, pai);
        pai.scale = 0.5;
        let move1 = cc.rotateBy(0.5, 360 * 3);
        let move2 = cc.scaleTo(0.5, 1, 1);
        let move3 = cc.moveTo(0.5, cc.v2(pos.x + intervalX, pos.y));
        let action1 = cc.spawn(move1, move2, move3);
        let call = !isShow ? null : cc.callFunc(() => {
            cc.log("**********");
            this.fanPai(pai, paiSprite);
        });
        pai.runAction(cc.sequence(action1, call));
    }
    //翻牌 =>>>>@paiNode:要翻的牌节点  @paiSprite牌面的纹理图点
    fanPai(paiNode, paiSprite) {
        cc.log("翻牌操作!");
        let action1 = cc.scaleTo(0.1, 0, 1);
        let action2 = cc.scaleTo(0.1, 1, 1);
        let call = cc.callFunc(() => {
            paiNode.getComponent(cc.Sprite).spriteFrame = paiSprite;
            paiNode.runAction(action2);
        });
        paiNode.runAction(cc.sequence(action1, call));
    }
    //
    //分牌操作 @paiNode要移动的牌节点  @toMoveNode移动到目标点的节点
    dividePai(paiNode, toMoveNode) {
        toMoveNode.active = true;
        paiNode.parent = toMoveNode;
        paiNode.setPosition(30, 0);
    }
    putChip(seatId, chipNum, Num) {//下注-@seatId哪个座位id-@chipNum筹码数值//从身上飞到池子里
        chipNum ? chipNum : 0;
        let chipId=window.blackJackMsg.roomInfo.chips.indexOf(chipNum);
        if(chipId<0){
            cc.warn("房间筹码配置信息：",window.blackJackMsg.roomInfo.chips);
            cc.warn("筹码值chipNum索引不到:",chipNum);
            return;
        }
        let starPos = window.blackJackMsg.uiLayer.seatNodes[seatId].getComponent('BlackJackSeat').spr_coin;
        let endPos = window.blackJackMsg.uiLayer.seatNodes[seatId].getComponent('BlackJackSeat').coinPool;
        for(let i=0;i<Num;++i){
            //循环下多少个筹码
            let chip = this.getChipNode();
            chip.parent = endPos;
            let paiPos = this.converPosition(starPos, chip);//转换成生成的位置
            chip.position = paiPos;
            let pos = this.converPosition(endPos, chip);//转换成移动到目标位置
    
            chip.getComponent(cc.Sprite).spriteFrame=this.chipSpriteFrame[chipId];//根据数据得到对应的图片
            // let move = cc.rotateBy(0.5, this.randomTwoNum(0, 360));
            //Math.round(Math.randow()*40)-20//[-20,20]*************[5,15]
            let move1 = cc.moveTo(0.5, cc.v2(pos.x + Math.round(Math.random() * 40) - 20, pos.y + Math.round(Math.random() * 40) -20)).easing(cc.easeOut(1.0));
            // let action1 = cc.spawn(move, move1);
            let call = cc.callFunc(() => {
                chip.runAction(cc.rotateBy(0.2,this.randomTwoNum(0, 180)));
            });
            chip.runAction(cc.sequence(move1, call));
            this.firstBetNum += chipNum;
        }
    }
    testFlyToBack(){
        let poolNode=window.blackJackMsg.uiLayer.seatNodes[1].getComponent('BlackJackSeat').coinPool;
        let endNode=window.blackJackMsg.uiLayer.seatNodes[1].getComponent('BlackJackSeat').spr_coin;
        this.coinsFlyToBack(poolNode,endNode,null);
    }
    coinsFlyToBack(poolNode,endNode,chioNum){//从池子飞到玩家或庄家身上
        for(let i=poolNode.childrenCount-1;i>=0;--i){
            let chip =poolNode.children[i];
            let endPos=this.converPosition(endNode,chip);
            let move=cc.moveTo(0.5,endPos);
            let call=cc.callFunc(()=>{
                this.putChipNode(chip);
            });
            chip.runAction(cc.sequence(move,call));
        }
    }
    testBankerCoinsToPlayer(){
        let endNode=window.blackJackMsg.uiLayer.seatNodes[1].getComponent('BlackJackSeat').spr_coin;
        this.BankerCoinsToPlayer(endNode,null);
    }
    BankerCoinsToPlayer(endnode,chipNum){//从庄身上飞到玩家上  
        let bankerNode=window.blackJackMsg.uiLayer.bankerNode;
        let chip = this.getChipNode();
        chip.parent = endnode;
        let paiPos = this.converPosition(bankerNode, chip);//转换成生成的位置
        chip.position = paiPos;
        let pos = this.converPosition(endnode, chip);//转换成移动到目标位置
        let move =cc.moveTo(0.5,pos);
        let call=cc.callFunc(()=>{
            this.putChipNode(chip);
        });
        chip.runAction(cc.sequence(move,call));
    }


    //收牌 =>>>>>清理桌子
    clearDesk() {
        // this.initRoom();
        this.firstBetNum = 0;
        for (let i = 0; i < 5; ++i) {//把玩家的牌清掉放入牌对象池
            let nd_paiNode0 = window.blackJackMsg.uiLayer.seatNodes[i].getComponent('BlackJackSeat').nd_paiNode0;
            let nd_paiNode1 = window.blackJackMsg.uiLayer.seatNodes[i].getComponent('BlackJackSeat').nd_paiNode1;
            for (let j = nd_paiNode0.childrenCount - 1; j >= 0; --j) {
                if (nd_paiNode0.children[j]) {
                    this.putCard(nd_paiNode0.children[j]);
                } else {
                    cc.warn("第:", i, "人的第一幅牌：", "第:", j, "张牌是：", nd_paiNode0.children[j]);
                }
            }
            for (let m = nd_paiNode1.childrenCount - 1; m >= 0; --m) {
                if (nd_paiNode1.children[m]) {
                    this.putCard(nd_paiNode1.children[m]);
                } else {
                    cc.warn("第:", i, "人的第二幅牌：", "第:", m, "张牌是：", nd_paiNode1.children[m]);
                }
            }
            let chipNodes = window.blackJackMsg.uiLayer.seatNodes[i].getComponent('BlackJackSeat').coinPool;
            for (let k = chipNodes.childrenCount - 1; k >= 0; --k) {
                if (chipNodes.children[k]) {
                    this.putChipNode(chipNodes.children[k]);
                } else {
                    cc.warn("第:", i, "人的", "第，", k, "个筹码:", chipNodes.children[k]);
                }
            }
        }
        let bankerPaiNode = window.blackJackMsg.uiLayer.bankerPaiNode;
        for (let j = bankerPaiNode.childrenCount - 1; j >= 0; --j) {
            if (bankerPaiNode.children[j]) {
                this.putCard(bankerPaiNode.children[j]);
            } else {
                cc.warn("庄的：", "第:", j, "张牌是：", bankerPaiNode.children[j]);
            }
        }
    }
    cheackAllChipPut(chipNum){//全下索引出chips对应的id
        // let chipNum=0;
        let chips=window.blackJackMsg.roomInfo.chips
        let chipId=chips.indexOf(chipNum);
        if(chipId>-1){
            this.putChip(1,chipNum,1);
        }else if(chipNum/chips[3]>0){
            let num=Math.floor(chipNum/chips[3]);
             this.putChip(1,chips[3],num);
        }else if(chipNum/chips[2]>0){
            let num=Math.floor(chipNum/chips[2]);
            this.putChip(1,chips[2],num);
        }else if(chipNum/chips[1]>0){
            let num=Math.floor(chipNum/chips[1]);
            this.putChip(1,chips[1],num);
        }else{
            this.putChip(1,chips[0],1);
        }
    }

    //将b的坐标系转为a可以使用的坐标系
    converPosition(a, b) {
        //获取a的世界坐标
        var a2world = a.parent.convertToWorldSpaceAR(a.position);
        // cc.log(a2world);
        return b.parent.convertToNodeSpaceAR(a2world);
    }
    randomTwoNum(min, max) {
		return min + Math.floor(Math.random() * (max - min));
	}
    onDestroy() {
        this.cardPool.clear();
        this.chipsPool.clear();//对象池清空
    }
    // update (dt) {}
}
