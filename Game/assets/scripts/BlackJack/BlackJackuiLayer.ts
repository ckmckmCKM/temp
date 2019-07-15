

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackJackuiLayer extends cc.Component {

    /*//帮助面板*/
    @property(cc.Node)
    helpPanel:cc.Node=null;
    @property([cc.Node])
    help_Iteams: cc.Node[] = [];
    @property(cc.ScrollView)
    help_ScrollView:cc.ScrollView=null;
    //-----------------
    @property(cc.Node)
    hallPanel:cc.Node=null;
    @property(cc.Node)
    gamePanel:cc.Node=null;
    //-----------
    @property(cc.Node)//设置面板
    setPanel:cc.Node=null;
    @property(cc.Node)//房间信息child[0]最小下注-1最大下注
    roomInfo:cc.Node=null;
    @property([cc.Node])//玩家的座位
    seatNodes:cc.Node[]=[];
    @property(cc.Node)
    bankerPaiNode: cc.Node=null;//庄家牌节点
    @property(cc.Node)
    bankerNode: cc.Node=null;//庄家节点
    @property(cc.Node)//发牌的开始位置节点
    node_faPai:cc.Node=null;
    //-----------button--
    @property(cc.Node)//下注选择筹码按钮组
    btnChipsNodes:cc.Node=null;
    @property(cc.Node)//要牌停牌双倍按钮组--0分牌-1双倍-2停牌-3要牌
    chooseBtnNodes:cc.Node=null;
    @property(cc.Button)
    btn_comfirmBet:cc.Button=null;//确认下注
    @property(cc.Button)
    btn_repeatBet:cc.Button=null;//重复下注
    


    
    onLoad () {
    }

    start() {
      
    }
    playerBtns(state) {//玩家操作按钮控制--0操作完了||还没开始--1下注阶段 --2要牌阶段
        switch (state) {
            case 0:
                this.btnChipsNodes.active = false;
                this.chooseBtnNodes.active = false;
                this.btn_comfirmBet.node.active = false;
                this.btn_repeatBet.node.active = false;
                break;
            case 1:
                this.btnChipsNodes.active = true;
                this.chooseBtnNodes.active = false;
                this.btn_comfirmBet.node.active = true;
                this.btn_repeatBet.node.active = true;
                this.cheackBtnsState(1,this.btnChipsNodes);//下注筹码按钮
                break;
            case 2:
                this.btnChipsNodes.active = false;
                this.chooseBtnNodes.active = true;
                this.btn_comfirmBet.node.active = false;
                this.btn_repeatBet.node.active = false;
                this.cheackBtnsState(2,this.chooseBtnNodes);//--要牌停牌双倍按钮
                break;
                default:
                        break;
        }
    }
    cheackBtnsState(state,btnNodes){//检查按钮状态
        if(state===1){//下注阶段
            for(let i=0;i<4;++i){
                let isHaveMoney=window.blackJackMsg.userData.userCoin>window.blackJackMsg.roomInfo.minBet*i;
                btnNodes.child[i].getComponent(cc.Button).interactable=isHaveMoney;
            }
            //是否可重复下注********
            
        }else{
            //分牌**
            //双倍
            let isHave=window.blackJackMsg.userData.userCoin> window.blackJackMsg.gameLayer.firstBetNum;
            btnNodes.child[1].getComponent(cc.Button).interactable=isHave;
            //停牌、要牌每次操作都可以点
            
        }
    }
    changeHelpPanel(event, customEventData) {
        // cc.log(event);
        // cc.log(customEventData);
        this.help_ScrollView.scrollToTop(0.01);
        switch (customEventData) {
            case "0":
                this.help_Iteams[0].active = true;
                this.help_Iteams[1].active = false;
                this.help_Iteams[2].active = false;
                break;
            case "1":
                this.help_Iteams[0].active = false;
                this.help_Iteams[1].active = true;
                this.help_Iteams[2].active = false;
                break;
            case "2":
                this.help_Iteams[0].active = false;
                this.help_Iteams[1].active = false;
                this.help_Iteams[2].active = true;
                break;
            default:
                break;

        }
    }
    closeHelpPanel(){
        this.helpPanel.active=false;
    }
    openHelpPanel(){
        this.help_ScrollView.scrollToTop(0.01);
        this.helpPanel.active=true;
    }
    openSetPanel(){
        this.setPanel.active=true;
    }
    closeSetPanel(){
        this.setPanel.active=false;
    }
    backHall(){
        this.gamePanel.active=false;
        this.hallPanel.active=true;
    }
   

    // update (dt) {}
}
