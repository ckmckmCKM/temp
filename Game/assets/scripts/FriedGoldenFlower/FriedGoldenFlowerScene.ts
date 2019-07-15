//炸金花主要界面

const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerScene extends cc.Component {

    //玩家信息
    @property(cc.Node)
    game_player: cc.Node[] = []
    //玩家操作图片
    @property(cc.SpriteFrame)
    player_operation_sf: cc.SpriteFrame[] = []
    //玩家比牌的遮罩
    @property(cc.Node)
    than_card_node: cc.Node = null;
    //下注移动终点
    @property(cc.Node)
    end_move: cc.Node[] = []
    //玩家自己的牌类型图片
    @property(cc.SpriteFrame)
    myplayer_card_state: cc.SpriteFrame[] = []

    //玩家进入游戏显示信息
    @property(cc.Node)
    wait_layout: cc.Node = null;
    //玩家进入游戏显示图片
    @property(cc.SpriteFrame)
    wait_frame: cc.SpriteFrame[] = [];
    //玩家进入游戏显示图片
    @property(cc.Node)
    wait_dot: cc.Node[] = [];

    //设置界面
    @property(cc.Prefab)
    set_node: cc.Prefab = null;
    //规则界面
    @property(cc.Prefab)
    rule_node: cc.Prefab = null;

    //倒计时节点
    @property(cc.Node)
    time_lable: cc.Node = null;
    //倒计时的图片
    @property(cc.SpriteFrame)
    time_SpriteFrame: cc.SpriteFrame[] = [];

    //玩家操作按钮节点
    @property(cc.Node)
    player_operation_node: cc.Node = null;
    //玩家其他操作按钮节点
    @property(cc.Node)
    else_operation_node: cc.Node = null;

    //游戏当前轮数
    at_present_wheel: number = null;
    //轮数
    @property(cc.Label)
    gamewheel_number: cc.Label = null;

    //总下注
    @property(cc.Label)
    bottom_pour_data: cc.Label = null;

    //庄家图片资源存储
    @property(cc.SpriteFrame)
    banker_Frame: cc.SpriteFrame = null;

    // //牌的背面资源
    @property(cc.SpriteFrame)
    card_back: cc.SpriteFrame = null;
    //牌移动的开始和结束节点
    @property(cc.Node)
    card_move_node: cc.Node = null;
    //牌移动到玩家的终点
    @property(cc.Node)
    card_end_move: cc.Node[] = []
    //牌的图集
    @property(cc.SpriteAtlas)
    card_spall: cc.SpriteAtlas = null;

    //离开移动提升框
    @property(cc.Prefab)
    hint_node: cc.Prefab = null;

    //加注按钮3个档位
    @property(cc.Node)
    fill_btn_lable: cc.Node[] = [];
    //跟住按钮的
    @property(cc.Node)
    call_btn_lable: cc.Node = null;

    //比牌  炸弹预制体
    @property(cc.Prefab)
    bomb_prefab: cc.Prefab = null;
    //比牌  炸弹动画预制体
    @property(cc.Prefab)
    bomb_animation_prefab: cc.Prefab = null;

    //消息5操作显示给其他人
    @property(cc.SpriteFrame)
    operation: cc.SpriteFrame[] = [];

    //特殊牌的预制体
    @property(cc.Prefab)
    special_card: cc.Prefab = null;

    //结束获胜动画预制体
    @property(cc.Prefab)
    game_win: cc.Prefab = null;
    //结束失败动画预制体
    @property(cc.Prefab)
    game_lose: cc.Prefab = null;

    //跟到底
    @property(cc.Prefab)
    with_what_prefab: cc.Prefab = null;

    //自己牌型的图片
    @property(cc.SpriteFrame)
    big_card_my: cc.SpriteFrame[] = [];

    //倒计时的指针节点
    @property(cc.Node)
    object: cc.Node[] = [];

    //音乐音效
    @property(cc.AudioClip)
    music_effect: cc.AudioClip[] = [];
    
    // //倒计时的文字数字
    // @property(cc.Node)
    // player_time_lable: cc.Node = null;

    //美女背景动画
    @property(cc.Prefab)
    bg_animation: cc.Prefab = null;
    //红色框
    @property(cc.Prefab)
    red_frame: cc.Prefab = null;
    //红色框
    @property(cc.Prefab)
    head_win_result: cc.Prefab = null;
    /////////////////////////////////////动画配置时间///////////////////////////////
    //开始等待时间
    @property()
    time_begin_wait: number = 0;
    //筹码发送时间
    @property()
    time_chip: number = 0;
    //筹码回收动画
    @property()
    time_chip_recycle: number = 0;
    //庄家飞行时间 
    @property()
    time_banker: number = 0;
    //发牌时间 
    @property()
    time_card_fiy: number = 0;
    //收牌时间 
    @property()
    time_card_recycle: number = 0;
    /////////////////////////////////////动画配置时间/////////////////////////////// 
    // 在玩玩家的人数
    people_num: number = 0;
    // 存储在玩耍的玩家
    gameplayer_this: any = [];
    // 存储当前操作玩家下表
    player_operation: number = null;
    // 存储本地加注等级
    fill_this_lv: number[] = [];
    // 存储本地自己ID
    my_id: number = null;
    // 赢的位置
    win_index: number = null;
    // 赢
    win: cc.Node = null;
    // 输
    lose: cc.Node = null;
    // 存储玩家操作后的动画
    operation_animation: cc.Node[] = [];
    // 存储跟到底的状态
    follow_all_state: number = 0;
    // 存储头像动画
    head_animation: cc.ActionInstant = null;
    //跟到底预制体
    withscene: cc.Node = null; 
    //跟到底预制体
    win_result: cc.Node = null;
    //看牌标志位
    look_card_state: number = 0;
    //梭哈标志位
    allin_card_state: number = 0;
    //玩家比牌标志位
    than_card_state: number = 0;
    //玩家弃牌标志位
    giveup_card_state: number = 0;
    //庄家ID
    banker_userId: number = 0;
    //下表关闭
    time_index: number = 0;
    //最后一轮的标志位
    intheend_state: number = 0;
    //最后一轮的标志位
    red_frame_animation: any = null; 
    //存储信息
    game_result: any = null;
    //开始
    onLoad() {
        window.GameScene = this;
    }

    //开始之后
    start() {
        //注册监听事件
        this.Registerlistenevents()
        window.playerMng.connect()
        //玩家信息存储localZOrder
        for (let i = 0; i < this.game_player.length; ++i) {
            this.game_player[i][0] = this.game_player[i].getChildByName('name')   //玩家名字
            this.game_player[i][1] = this.game_player[i].getChildByName('gold')    //玩家金币
            this.game_player[i][2] = this.game_player[i].getChildByName('mask').getChildByName('head')    //头像
            this.game_player[i][3] = this.game_player[i].getChildByName('state-player')//我操作显示
            this.game_player[i][4] = this.game_player[i].getChildByName('banker')   //庄家标记
            this.game_player[i][5] = this.game_player[i].getChildByName('current')  //当前玩家下注数量
            this.game_player[i][6] = this.game_player[i].getChildByName('card-state')  //牌型
            this.game_player[i][7] = this.game_player[i].getChildByName('gain-gold-lose') //输数字
            this.game_player[i][9] = this.game_player[i].getChildByName('gain-gold-win') //赢数字
            this.game_player[i][10] = this.game_player[i].getChildByName('botton-sprite') //下注框
            this.game_player[i][3].active = false
            this.game_player[i][4].active = false
            this.game_player[i][5].active = false
            this.game_player[i][6].active = false
            this.game_player[i][7].active = false
            this.game_player[i][9].active = false
            this.game_player[i][10].active = false
            this.game_player[i].active = false
            this.object[i].active = false
        }
        //音乐播放
        window.audioMng.playMusic(window.GameScene.music_effect[0], true)
        //倒计时节点隐藏
        this.node.getChildByName('game-player-time').active = false
        //2操作隐藏
        this.player_operation_node.active = false
        this.else_operation_node.active = false
        //开始的状态隐藏
        this.wait_layout.active = false
        //玩家比牌遮罩
        this.than_card_node.active = false
        //自己玩家的牌状态
        this.game_player[0].getChildByName('card-state-my').active = false
        //倒计时的节点隐藏
        this.time_lable.active = false
        //背景动画
        let bganimation = cc.instantiate(this.bg_animation);
        this.node.getChildByName('animation1').addChild(bganimation);    

        
    }
    //设置界面
    set_btn(event, customEventData) {
        //设置预设体 创建
        // let setscene = cc.instantiate(this.set_node);
        // this.node.addChild(setscene);
        window.GameSend.enter_into(4)

    }
    //规则界面
    rule_btn(event, customEventData) {
        window.GameSend.enter_into(5)
        //规则预设体 创建
        // let rulescene = cc.instantiate(this.rule_node);
        // this.node.addChild(rulescene);
    }
    //退出游戏界面
    close_btn(event, customEventData) {
        //玩家发送退出游戏的消息
        window.GameSend.quit_send(this.my_id)
    }

    //注册监听事件
    Registerlistenevents() {
        //玩家自己进入桌子中 0
        this.node.on('gameplayer_enter', function (info) {
            //console.log(info.round);
            this.gameplayer_enter(info)
        }, this);
        //其他玩家自己进入桌子中 1
        this.node.on('else_gameplayer_enter', function (info) {
            this.else_gameplayer_enter(info)
        }, this);
        //只有1个人的时候服务器消息  2
        this.node.on('wait_start', function (info) {
            this.wait_start(info)
        }, this);
        //多于1个人的时候服务器消息  3
        this.node.on('ticker_start', function (info) {
            this.ticker_start(info)
        }, this);
        //游戏发牌 13
        this.node.on('game_deal', function (info) {
            this.game_deal(info)
        }, this);
        //玩家发牌结束 可以发言 8 
        this.node.on('game_spokesman', function (info) {
            this.game_spokesman(info)
        }, this);
        //玩家发言结束  5
        this.node.on('game_endofthespeech', function (info) {
            this.game_endofthespeech(info)
        }, this);
        //玩家看牌消息  10 
        this.node.on('game_lookcard', function (info) {
            this.game_lookcard(info)
        }, this);
        //玩家比牌1消息  14 
        this.node.on('game_thancard_stageone', function (info) {
            this.game_thancard_stageone(info)
        }, this);
        //玩家弃牌有看到牌  15 
        this.node.on('game_giveup_card', function (info) {
            this.game_giveup_card(info)
        }, this);
        //玩家比牌2消息  6  
        this.node.on('game_thancard_stagetwo', function (info) {
            this.game_thancard_stagetwo(info)
        }, this);
        //玩家退出房间  7  
        this.node.on('game_quit_OK', function (info) {
            this.game_quit_OK(info)
        }, this);
        //玩家退出房间  1004  
        this.node.on('game_quit_NO', function (info) {
            this.game_quit_NO()
        }, this);
        //比赛结束  9  
        this.node.on('game_end', function (info) {
            this.game_end(info)
        }, this);
        //一轮结束  11  
        this.node.on('game_sheaves_end', function (info) {
            this.game_sheaves_end(info)
        }, this);
        //比赛结束之后  12  
        this.node.on('game_bureau_end', function (info) {
            this.game_bureau_end(info)
        }, this);
    }
    //自己进入游戏界面界面
    gameplayer_enter(info) {
        window.lts.dump(info)
        //得到自己的游戏ID
        this.my_id = info.userInfoArr[0].userId;
        //游戏轮数
        this.gamewheel_number.string = info.round + '/' + info.totalRound;//'2/20';

        //存储当前轮数
        this.at_present_wheel = info.round
        //总注
        this.bottom_pour_data.string = window.common.gold_transition(info.poolAmount,2);
        //人数打开
        this.gameplayer_this = info.userInfoArr
        //console.log('自己进入游戏界面界面:' + info.totalRound);
        for (let i = 0; i < info.userInfoArr.length; ++i) {
            this.game_player[i].active = true;
            this.game_player[i][0].getComponent(cc.Label).string =  info.userInfoArr[i].userName;
            //金币
            //console.log(this.game_player[i][5].getComponent(cc.Label));

            this.game_player[i][1].getComponent(cc.Label).string =  window.common.gold_transition(info.userInfoArr[i].amount,2);
            // //头像转换
            // let head_sp = info.head //需要转换
            // this.game_player[i][2].getComponent(cc.Sprite).SpriteFrame = head_sp
            //玩家下注
            this.game_player[i][5].getComponent(cc.Label).string = String(info.userInfoArr[i].curActionAmount)
        }
        //加注的信息
        this.fill_this_lv = info.raiseAmount;
        //console.log('加注的3个配置:' + this.fill_this_lv[0]);
        for (let i = 0; i < this.fill_btn_lable.length; ++i) {
            this.fill_btn_lable[i].getComponent(cc.Label).string = '加' + window.common.gold_transition(this.fill_this_lv[i],0) + '元';
            window.common.gold_lv[i] = Number(this.fill_this_lv[i])
        }
        

    }
    //其他玩家进入游戏界面
    else_gameplayer_enter(info) {
        //console.log('其他玩家进入游戏界面');       
        let else_state = 0
        for (let i = 0; i < this.game_player.length; ++i) {
            if (this.game_player[i].active == false && else_state == 0) {
                this.game_player[i].active = true;
                //名字
                this.game_player[i][0].getComponent(cc.Label).string = info.userName;
                //金币
                this.game_player[i][1].getComponent(cc.Label).string = window.common.gold_transition(info.amount,2);
                // //头像转换
                // let head_sp = info.head //需要转换
                // this.game_player[info.chairId][2].getComponent(cc.Sprite).SpriteFrame = head_sp
                //玩家下注
                this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.curActionAmount,2)
                else_state = 1;
                if (info.curStatus == 2){
                    this.game_player[i][3].active = true;
                    this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[5]
                }
            }
        }
        
    }
    //等待其他玩家进入消息2
    wait_start(info) {
        console.log('等待其他玩家进入消息2');
        this.data_initialize()
        //开始的状态隐藏
        //console.log('等待其他玩家进入消息2');
        this.wait_layout.active = true
        //纹理变化
        this.wait_layout.getChildByName('sprite-text').getComponent(cc.Sprite).spriteFrame = this.wait_frame[0];
        //点动画
        window.common.dot_animation(this.node, this.wait_dot,this.time_begin_wait)
    }
    //有其他玩家可以开始游戏 3
    ticker_start(info) {
        console.log('有其他玩家可以开始游戏');
        
        this.data_initialize()
        //开始的状态隐藏
        this.wait_layout.active = false
        //显示
        this.time_lable.active = true
        this.time_lable.getChildByName('time').getComponent(cc.Sprite).spriteFrame = this.time_SpriteFrame[info.ticker - 1]
        //console.log('倒计时时间1:' + info.ticker);
        //计时器
        let fu = function time() {
            info.ticker -= 1;
            this.time_lable.getChildByName('time').getComponent(cc.Sprite).spriteFrame = this.time_SpriteFrame[info.ticker - 1]
            //console.log('倒计时时间2:' + info.ticker);
            if (info.ticker == 0) {
                this.unschedule(fu)
                //console.log('停止计时器');
                this.time_lable.active = false
            }
        }
        this.schedule(fu, 1, 4, 1)
    }
    //游戏发牌 13
    game_deal(info) {
        let self = this;
        //存储的自己牌初始哈
        window.common.card_number.splice(0, window.common.card_number.length)
        //查找庄家.
        let index_num = null//从庄家开始发牌 null;
        //记录当前玩家
        this.gameplayer_this = info.userInfoArr
        //window.lts.dump(info)
        //得到庄家ID
        if (info.banker.userId != null) {
            this.banker_userId = info.banker.userId;
        }
        //console.log(info.userInfoArr.length);
        for (let i = 0; i < info.userInfoArr.length; ++i) {
            //底注筹码飞行动画
            window.common.chip_fiy(this.game_player[i], window.GameScene.end_move[i], window.GameButton.chip_sprite[0], window.common.gold_transition(info.minAction), this.node,this.time_chip);
            //玩家更新金币数
            this.game_player[i][1].getComponent(cc.Label).string = window.common.gold_transition(info.userInfoArr[i].amount,2);
            //玩家下注金币数
            this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.userInfoArr[i].curActionAmount,2);
            this.game_player[i][5].active = true;
            this.game_player[i][10].active = true;
        }
        //总注
        this.bottom_pour_data.string = window.common.gold_transition(info.poolAmount,2);
        // 发牌动画
        let seat = [0, 0, 0, 0, 0];//人数的座位  
        //console.log("人数之后：" + info.userInfoArr.length);
        for (let i = 0; i < info.userInfoArr.length; ++i) {
            this.people_num += 1;
            seat[i] = 1;
        } 
        //开辟
        window.common.card_cun(this.people_num)
        //开辟
        let time = cc.delayTime(0.5)
        let call = cc.callFunc(function(){
            for (let i = 0; i < info.userInfoArr.length; ++i) {
                if (info.banker.userId == info.userInfoArr[i].userId) {
                    index_num = i
                    let pox = null;
                    let poy = null;
                    if (i == 0){
                        pox = -255;
                        poy = -103;
                    }
                    else if(i == 1){
                        pox = 540
                        poy = 13
                    }
                    else if(i == 2){
                        pox = 421
                        poy = 218
                    }
                    else if(i == 3){
                        pox = -421
                        poy = 218
                    }
                    else if(i == 4){
                        pox = -551
                        poy = 13
                    }
                    //庄家飞行动画               
                    window.common.banker_fiy(self.game_player[i],pox,poy, self.banker_Frame, self.node,self.time_banker);
                }
            }
            window.common.card_fiy(self.card_move_node, self.card_end_move, self.card_back, seat, index_num, self.people_num, self.node,self.time_card_fiy)
            //牌的飞行
            window.common.begin_player_index = index_num
        })
        this.node.runAction(cc.sequence(time,call))      
        //游戏轮数
        this.gamewheel_number.string = info.round + '/' + info.totalRound;//'2/20';
    }
    //发牌结束
    card_end() {
        //console.log('玩家发送发牌停止' + this.my_id);
        window.GameSend.deal_card_send(this.my_id)
    }
    //玩家发牌结束后 发言 8
    game_spokesman(info) {
        //console.log('玩家发牌结束 发言'); 222
        //倒计时节点隐藏
        this.node.getChildByName('game-player-time').active = true;
        this.node.getChildByName('game-player-time').zIndex = 1
        //刷新 
        let self = this
        //console.log('当前发言玩家：'+info.userId);       
        for (let i = 0; i < this.gameplayer_this.length; ++i) {
            //console.log('自己的ID'+this.my_id); 
            //console.log('自己的ID'+this.gameplayer_this[i].userId); 
            if (this.gameplayer_this[i].userId == info.userId  ) {
                if (this.than_card_state == 0 && this.giveup_card_state == 0) {
                    if (info.userId == this.my_id) {
                        //判断玩家是否有用跟到底操作
                        // console.log('当前发言玩家：' + this.gameplayer_this[i].userId);
                        //console.log('发言玩家：'+this.follow_all_state );                
                        if (this.follow_all_state == 0) {
                            //得到当前操作玩家下表
                            this.player_operation = i
                            this.player_operation_node.active = true;
                            this.else_operation_node.active = false;
                            //console.log('游戏轮数');
                            //console.log(this.at_present_wheel);
                            if (this.at_present_wheel == 2) {
                                this.player_operation_node.getChildByName('see-card-btn').getComponent(cc.Button).interactable = true
                                this.player_operation_node.getChildByName('see-card-btn').getChildByName('Background').color = new cc.Color(255, 255, 255);
                                window.ButtonSwitch.button_open('see-card-btn', this.player_operation_node);
                            }
                            else if (this.at_present_wheel >= 3) {
                                //console.log('比牌');                           
                                if (this.intheend_state == 0) {
                                    window.ButtonSwitch.button_open('see-card-btn', this.player_operation_node)
                                    window.ButtonSwitch.button_open('than-card-btn', this.player_operation_node)
                                    window.ButtonSwitch.button_open('all-in-btn', this.player_operation_node)
                                }
                            }
                            else {
                                //console.log('其他的');//
                                window.ButtonSwitch.button_close('see-card-btn', this.player_operation_node)
                                window.ButtonSwitch.button_close('than-card-btn', this.player_operation_node)
                                window.ButtonSwitch.button_close('all-in-btn', this.player_operation_node)
                            }
                            //看牌控制
                            if (this.look_card_state == 1) {
                                window.ButtonSwitch.button_close('see-card-btn', this.player_operation_node)
                            }
                            //梭哈控制
                            if (this.allin_card_state == 1) {
                                window.ButtonSwitch.button_close('than-card-btn', this.player_operation_node)
                                window.ButtonSwitch.button_close('all-in-btn', this.player_operation_node)
                                for (let i = 0; i < 3; ++i) {
                                    window.ButtonSwitch.button_close('fill-btn' + (i + 1), this.player_operation_node)
                                }
                            }
                            //梭哈
                            let all_gold = 0
                            if (info.allInAmount != 0 && this.at_present_wheel >= 3) {
                                all_gold = info.allInAmount;
                            }
                            if (this.at_present_wheel < 3) {
                                this.player_operation_node.getChildByName('all-in-btn').getChildByName('Background').getChildByName('label').getComponent(cc.Label).string = '全押';
                            }
                            else {
                                this.player_operation_node.getChildByName('all-in-btn').getChildByName('Background').getChildByName('label').getComponent(cc.Label).string = '全押\n' + window.common.gold_transition(all_gold, 2) + '元';
                            }
                            let call_gold = 0
                            if (info.followAmount != 0) {
                                call_gold = info.followAmount;
                            }
                            //跟住
                            this.player_operation_node.getChildByName('call-btn').getChildByName('Background').getChildByName('label').getComponent(cc.Label).string = '跟注\n' + window.common.gold_transition(call_gold, 2) + '元';

                        }
                        //玩家使用了跟到底
                        else if (this.follow_all_state == 1) {
                            this.player_operation_node.active = false;
                            //this.else_operation_node.active = false;
                        }
                    }
                    else {
                        this.player_operation_node.active = false;
                        this.else_operation_node.active = true;
                    }
                }
                this.object[i].active = true;
                this.time_index = i

                //倒计时               
                this.player_count_down(info.ticker, i, self)
            }
        }
    }
    //倒计时函数
    player_count_down(num, index, self) {
        //倒计时    
        let time_number = num
        self.object[index].getChildByName('time_lable').getComponent(cc.Label).string = String(time_number);
        let time = cc.delayTime(1)
        let call = cc.callFunc(function () {
            if (time_number < 0) {
                //console.log('倒计时到0');               
                self.object[index].active = false;
                //倒计时节点隐藏
                self.node.getChildByName('game-player-time').active = false;
                self.node.getChildByName('game-player-time').zIndex = 0
                self.node.stopActionByTag(100);
            }
            else {
                //console.log(num);
                time_number -= 1;
                self.object[index].getChildByName('time_lable').getComponent(cc.Label).string = String(time_number);
            }
        })
        self.head_animation = cc.repeatForever(cc.sequence(time, call))
        self.head_animation.setTag(100)
        self.node.runAction(self.head_animation)
    }
    //玩家发言回调 5
    game_endofthespeech(info) {
        let xingbie = 0//服务器发送
        //总注
        //console.log('当前下注的值:'+info.minAction);   
        this.node.getChildByName('lastbet-number').getComponent(cc.Label).string = window.common.gold_transition(info.minAction,2)    
        //人便利  
        for (let i = 0; i < this.gameplayer_this.length; ++i) {           
            if (info.userId == this.gameplayer_this[i].userId) {
                this.node.stopActionByTag(100);
                this.object[this.time_index].active = false;
                if (info.option == 'give_up') { //弃牌
                    //音效播放
                    window.OperationMp3.discard_mp3(xingbie)             
                    if (this.operation_animation[i] != null) {
                        this.operation_animation[i].destroy();
                        this.operation_animation[i] = null;
                    }
                    //特殊预制体 
                    if (info.userId != this.my_id) {
                        //console.log('玩家放弃牌2');
                        let special = cc.instantiate(this.special_card);
                        let pos = this.card_end_move[i].getPosition();
                        this.node.addChild(special);
                        special.setPosition(cc.v2(pos.x + 70, pos.y))
                        //console.log(special.getChildByName('baozi_big'));                   
                        special.getChildByName('baozi_big').getComponent(cc.Sprite).spriteFrame = this.operation[0]
                        special.zIndex = 2
                        this.operation_animation[i] = special
                    }
                    else {
                        this.giveup_card_state = 1;
                    }
                    //更新游玩玩家
                }
                else if (info.option == 'raise') { //加注
                    //音效播放
                    window.OperationMp3.fill_mp3(xingbie)  
                    console.log('加注:' + info.amount);
                    this.game_player[i][3].active = true
                    this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[0]
                    //跟新下注信息
                    this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.curAmount,2)
                    //减击毙、
                    let gold = this.game_player[i][1].getComponent(cc.Label).string - window.common.gold_transition(info.amount,2)
                    this.game_player[i][1].getComponent(cc.Label).string = gold.toFixed(2)
                    //筹码飞出
                    let lv = 0
                    //console.log('加注:'+this.fill_this_lv.length);
                    //查找筹码等级
                    for (let k = 0; k < this.fill_this_lv.length; ++k) {                       
                        if (info.minAction >= this.fill_this_lv[k] && k == 0 ) {
                            //console.log(this.fill_this_lv[k]);
                            //console.log('加注1：'+info.amount);
                            lv = 1
                            window.ButtonSwitch.button_close('fill-btn1', this.player_operation_node)
                        }
                        else if(info.minAction >= this.fill_this_lv[k] && k == 1  ){ 
                            //console.log(this.fill_this_lv[k]);
                            //console.log('加注2：'+info.amount);
                            lv = 2
                            window.ButtonSwitch.button_close('fill-btn1', this.player_operation_node)
                            window.ButtonSwitch.button_close('fill-btn2', this.player_operation_node)
                        }
                        else if(info.minAction >= this.fill_this_lv[k] && k == 2 ){
                            //console.log(this.fill_this_lv[k]);
                            //console.log('加注3：'+info.amount);
                            lv = 3
                            window.ButtonSwitch.button_close('fill-btn1', this.player_operation_node)
                            window.ButtonSwitch.button_close('fill-btn2', this.player_operation_node)
                            window.ButtonSwitch.button_close('fill-btn3', this.player_operation_node)
                        }
                    }
                    this.chip_fiy_function(i,lv,info.amount);
                    
                }
                else if (info.option == 'see_cards') {//看牌
                    //音效播放
                    window.OperationMp3.lookcard_mp3(xingbie)    
                    this.game_player[i][3].active = true
                    this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[2]
                    //特殊预制体 
                    if (info.userId != this.my_id) {
                        if (this.operation_animation[i] != null) {
                            this.operation_animation[i].destroy();
                            this.operation_animation[i] = null;
                        }
                        let special = cc.instantiate(this.special_card);
                        let pos = this.card_end_move[i].getPosition();
                        this.node.addChild(special);
                        special.setPosition(cc.v2(pos.x + 70, pos.y))
                        //console.log(special.getChildByName('baozi_big'));                   
                        special.getChildByName('baozi_big').getComponent(cc.Sprite).spriteFrame = this.operation[2]
                        special.zIndex = 2
                        this.operation_animation[i] = special
                        //看牌置灰
                        window.ButtonSwitch.button_close('see-card-btn', this.player_operation_node)
                    }                   
                }
                else if (info.option == 'all_in') {//梭哈
                    //音效播放
                    window.OperationMp3.allin_mp3(xingbie)                  
                    if (this.allin_card_state == 0) {

                        this.game_player[i][3].active = true
                        this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[4]
                        
                        this.allin_card_state = 1
                        //有人全压就初始化跟到底
                        this.follow_all_state = 0
                        //跟新下注信息
                        this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.curAmount,2);
                        //减击毙、
                        let gold = this.game_player[i][1].getComponent(cc.Label).string -window.common.gold_transition(info.amount,2)
                        this.game_player[i][1].getComponent(cc.Label).string = gold.toFixed(2)
                        //筹码飞出
                        let lv = null
                        for (let k = 0; k < this.fill_this_lv.length; ++k) {
                            if (info.amount <= this.fill_this_lv[k] && k== 0) {
                                lv = 1
                            }
                            else if(info.amount <= this.fill_this_lv[k] && k == 1){
                                lv = 2
                            }
                            else if(info.amount == this.fill_this_lv[k] && k == 2){
                                lv = 3
                            }
                        }
                        this.chip_fiy_function(i,lv,info.amount)
                        //红色动画
                        this.red_frame_animation = cc.instantiate(this.red_frame);
                        this.node.getChildByName('animation2').addChild(this.red_frame_animation);
                    }
                }
                else if (info.option == 'follow') {//跟注
                    //音效播放
                    window.OperationMp3.call_mp3(xingbie)  
                    this.game_player[i][3].active = true
                    this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[1]
                    //跟新下注信息
                    this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.curAmount,2);
                    //console.log('跟住:'+this.game_player[i][1].getComponent(cc.Label).string);                    
                    //减击毙、
                    let gold = this.game_player[i][1].getComponent(cc.Label).string - window.common.gold_transition(info.amount,2)
                    this.game_player[i][1].getComponent(cc.Label).string = gold.toFixed(2)
                    //筹码飞出
                    let lv = null
                    for (let k = 0; k < this.fill_this_lv.length; ++k) {
                        if (info.amount <= this.fill_this_lv[k] && k== 0) {
                            lv = 1
                        }
                        else if(info.amount <= this.fill_this_lv[k] && k == 1){
                            lv = 2
                        }
                        else if(info.amount == this.fill_this_lv[k] && k == 2){
                            lv = 3
                        }
                    }
                    this.chip_fiy_function(i,lv,info.amount);
                }
                else if (info.option == 'follow_all_the_way') {//跟到底(不广播)
                    //console.log('玩家进行了更到底操作');
                    //有人全压就初始化
                    this.follow_all_state = 1
                    //跟到底预制体
                    // if (this.withscene == null){
                    this.withscene = cc.instantiate(this.with_what_prefab);
                    this.else_operation_node.getChildByName('with-what-btn').addChild(this.withscene);
                    // }                    
                }
                else if (info.option == 'cancel_follow') {//跟到底(不广播)
                    //有人全压就初始化
                    if (this.withscene != null) {
                        this.withscene.destroy();
                        this.withscene = null;
                    }
                    this.follow_all_state = 0
                }
            }
        }

    }
    //筹码飞行判断逻辑
    chip_fiy_function(index,lv,amount){
        if (amount < this.fill_this_lv[0] ) {
            window.common.chip_fiy(window.GameScene.game_player[index], window.GameScene.end_move[index], window.GameButton.chip_sprite[0], window.common.gold_transition(amount), this.node,this.time_chip);
        }
        else if( amount == (this.fill_this_lv[1] - this.fill_this_lv[0])){
            window.common.chip_fiy(window.GameScene.game_player[index], window.GameScene.end_move[index], window.GameButton.chip_sprite[lv], window.common.gold_transition(amount), this.node,this.time_chip);
        }
        else if(Number(window.common.gold_transition(amount)) < this.fill_this_lv[1]*10){
            //console.log('筹码的价值：'+amount);                        
            let gold = window.common.chip_operation(amount.toFixed(0))     
            //console.log(gold);                    
            for (let g = 0; g < gold.length; g++) {
                for (let k = 0; k < gold[g]; k++) {
                    //console.log('加注发牌');                               
                    window.common.chip_fiy(window.GameScene.game_player[index], window.GameScene.end_move[index], window.GameButton.chip_sprite[g+1], window.common.gold_transition(window.common.gold_lv[g]), this.node,this.time_chip);
                }
            }
        }
        else if (Number(window.common.gold_transition(amount)) >= this.fill_this_lv[1]*10){
            //console.log('筹码的价值：'+info.amount);                        
            //特殊个数处理
            window.common.chio_allin_five = 0
            let begin_char_num = window.common.chip_operation_allin(amount)
            // console.log(begin_char_num);
            // console.log(window.common.chio_allin_five);  
            for (let g = 0; g < begin_char_num.length; g++) {
                for (let k = 0; k < begin_char_num[g]; k++) {
                    window.common.chip_fiy_special(window.GameScene.game_player[index], window.GameScene.end_move[index], window.GameButton.chip_sprite[g],g, this.node,this.time_chip);
                }
            }
            if (window.common.chio_allin_five>0){
                window.common.chip_fiy_special(window.GameScene.game_player[index], window.GameScene.end_move[index], window.GameButton.chip_sprite[3],4, this.node,this.time_chip);
            }
        }
    }
    //玩家看牌操作回调 10
    game_lookcard(info) {
        //牌花色和点数
        window.lts.dump(info)
        let card_str = []
        for (let i = 0; i < 3; ++i) {
            //对区摸是花 --得到花色
            let card_color = info.cards[i] % 16.
            //console.log('花色' + card_color.toFixed(0));
            //对区余是点--得到点数
            let card_num = info.cards[i] / 16
            //console.log('点数' + card_num.toFixed(0));
            //解析牌
            card_str[i] = window.common.card_data(Number(card_color), Math.floor(card_num), this.card_spall)
        }
        //翻牌动画
        window.common.card_draw(card_str)
        //自己的牌型开启
        this.my_card_type_setVisible(info.cardType)
    }
    //玩家弃牌后看牌 15  
    game_giveup_card(info) {
        if (this.look_card_state == 0 && this.than_card_state == 0) {
                 
        }
    }
    //玩家比牌阶段1 14  
    game_thancard_stageone(info) {              
        //如果不少于1个人比牌  
        if (info.userInfoArr.length != 1) {
            this.than_card_node.active = true
            this.than_card_node.zIndex = 1
            //console.log('玩家进行了比牌1');
            window.lts.dump(info)
            //从之后的开始
            for (let i = 0; i < info.userInfoArr.length; ++i) {
                if (info.userInfoArr[i] != null) {
                    for (let k = 0; k < this.gameplayer_this.length; ++k) {
                        if (info.userInfoArr[i].userId == this.gameplayer_this[k].userId) {
                            this.game_player[k].zIndex = 2
                            this.than_card_node.getChildByName('than_btn_' + k).active = true;
                        }
                        else {
                            this.than_card_node.getChildByName('than_btn_' + k).active = false;
                        }
                    }
                }
            }
        }
        else {//如果只有1个人比牌
            let index = null
            for (let i = 0; i < info.userInfoArr.length; ++i) {
                for (let k = 0; k < this.gameplayer_this.length; ++k) {
                    if (info.userInfoArr[i].userId == this.gameplayer_this[k].userId) {
                        index = k
                    }
                }
            }
            //直接比牌
            if (index != null) {
                console.log('比牌');               
                this.than_card_state = 1;
                window.GameSend.playerthan_two_send(window.GameScene.my_id, window.GameScene.gameplayer_this[index].userId)
            }
            else {
                //console.log('比牌的人物下表出现问题');
            }
        }
    }
    //玩家比牌阶段2 6 赢家的信息
    game_thancard_stagetwo(info) {
        window.lts.dump(info) 
        //音效播放
        let xingbie = 0 //发起人的性别
        window.OperationMp3.than_mp3(xingbie)  
        //比牌动画逻辑
        let win_pos = null;
        let lose_up = [];
        for (let i = 0; i < this.gameplayer_this.length; ++i) {
            if (info.winId == this.gameplayer_this[i].userId) {
                win_pos = i
            }
            //发起者扣钱
            if (info.firstId == this.gameplayer_this[i].userId) {
                //状态显示
                this.game_player[i][3].active = true
                this.game_player[i][3].getComponent(cc.Sprite).spriteFrame = this.player_operation_sf[3]

                let money = this.game_player[i][1].getComponent(cc.Label).string * 100;
                //更新金币
                this.game_player[i][1].getComponent(cc.Label).string = window.common.gold_transition(info.firstAmount,2)
                let number = money - info.firstAmount + (this.game_player[i][5].getComponent(cc.Label).string*100);
                console.log('发起人的扣钱:'+number);
                console.log('发起人的扣钱:'+String(number));
                this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(number,2)
                //总注
                let num: number = Number(this.bottom_pour_data.string) + (Number(money) - window.common.gold_transition(info.firstAmount,2));
                let str: string = num.toFixed(2);
                this.bottom_pour_data.string = str;
                //筹码飞出
                let lv = null
                for (let k = 0; k < this.fill_this_lv.length; ++k) {
                    if (info.amount <= this.fill_this_lv[k] && k== 0) {
                        lv = 1
                    }
                    else if(info.amount <= this.fill_this_lv[k] && k == 1){
                        lv = 2
                    }
                    else if(info.amount == this.fill_this_lv[k] && k == 2){
                        lv = 3
                    }
                }    
                this.chip_fiy_function(i,lv,info.amount)            
            }
            for (let k = 0; k < info.loseIds.length; ++k) {              
                if (this.gameplayer_this[i].userId == info.loseIds[k]) {
                    lose_up.push(i)
                }
            }
        }
        this.node.stopActionByTag(100);

        //子弹飞行动画
        let self = this;
        for (let g = 0; g < lose_up.length; ++g) {
            //创建炸弹预制体
            let bullet = cc.instantiate(self.bomb_prefab);
            let win_zuo = self.game_player[win_pos].getPosition();
            bullet.setPosition(cc.v2(win_zuo.x, win_zuo.y));
            self.node.addChild(bullet);
            let pos = self.game_player[lose_up[g]].getPosition();
            let move = cc.moveTo(0.5, pos.x, pos.y);
            let call = cc.callFunc(function () {
                bullet.destroy()
                //播放音效
                window.audioMng.playEffect(self.music_effect[9], false);
                //测试
                let setscene = cc.instantiate(self.bomb_animation_prefab);
                self.game_player[lose_up[g]].addChild(setscene);

                if (self.operation_animation[lose_up[g]] != null) {
                    self.operation_animation[lose_up[g]].destroy();
                    self.operation_animation[lose_up[g]] = null;
                }
                //特殊预制体 
                let special = cc.instantiate(self.special_card);
                let pos = self.card_end_move[lose_up[g]].getPosition();
                self.node.addChild(special);
                special.setPosition(cc.v2(pos.x + 70, pos.y))
                //console.log(special.getChildByName('baozi_big'));                   
                special.getChildByName('baozi_big').getComponent(cc.Sprite).spriteFrame = self.operation[1]
                special.zIndex = 2
                self.operation_animation[lose_up[g]] = special
            })
            bullet.runAction(cc.sequence(move, call));
            //播放音效
            window.audioMng.playEffect(this.music_effect[8], false);
        }
    }
    //玩家退出游戏 7  
    game_quit_OK(info) {
        console.log(this.gameplayer_this.length);
        for (let i = 0; i < this.gameplayer_this.length; ++i) {
            //console.log('游戏推出：' + this.gameplayer_this[i].userId + '----游戏推出：' + info.userId);
            if (info.userId == this.gameplayer_this[i].userId) {
                this.game_player[i].active = false;
                //移除元素
                this.gameplayer_this.splice(i, 1)
            }
        }
    }
    //玩家退出游戏 1004  
    game_quit_NO(info) {
        //点击提升框移动
        window.common.hint_move(this.hint_node, this.node)
    }
    //比赛结束 9  game_end
    game_end(info) {
        window.lts.dump(info)    
        this.game_result = info;
        let self = this ;
        this.node.getChildByName('game-player-time').active = false;
        this.node.getChildByName('game-player-time').zIndex = 0;

        this.player_operation_node.active = false;
        this.else_operation_node.active = false;
        //比牌输赢结果
        let card_str_end = []
        for (let i = 0; i < 3; i++) {
            card_str_end[i] = [];
        }        
        for (let i = 0; i < this.gameplayer_this.length; ++i) {
            for (let g = 0; g < info.comparedUserArr.length; g++) {
                if (this.gameplayer_this[i].userId == info.comparedUserArr[g].userId) {
                    for (let k = 0; k < 3; ++k) {
                        //对区摸是花 --得到花色
                        let card_color = info.comparedUserArr[g].cards[k] % 16.
                        //console.log('第:' + k + '--花色' + card_color.toFixed(0));
                        //对区余是点--得到点数
                        let card_num = info.comparedUserArr[g].cards[k] / 16
                        //console.log('第:' + k + '--点数' + card_num.toFixed(0));
                        //解析牌
                        card_str_end[g][k] = window.common.card_data(Number(card_color),Math.floor(card_num), this.card_spall)
                    }
                }
            }
        }
        //牌转换
        console.log('结算');
        console.log(info.comparedUserArr.length);
        console.log(info.comparedUserArr);
        if (info.comparedUserArr.length > 0) {
            //window.common.card_draw_all()
            //结束翻所有玩家比牌的牌
            let controller = 1
            for (let g = 0; g < info.comparedUserArr.length; ++g) {
                console.log(info.comparedUserArr[g].userId);
                if (this.my_id != info.comparedUserArr[g].userId) {
                    console.log('其他人翻牌：'+g);                   
                    for (let k = 0; k < 3; ++k) {
                        let sc = cc.scaleTo(0.1, 0, 0.5)
                        let call = cc.callFunc(function () {
                            window.common.card_game_end[info.comparedUserArr[g].userId][k].getComponent(cc.Sprite).spriteFrame = card_str_end[g][k];
                            //反转回来动画
                            let sc = cc.scaleTo(0.1, 0.5, 0.5)
                            let call = cc.callFunc(function () {
                                if (self.look_card_state == 1 && controller == 3) {
                                    console.log('其他结算');                                   
                                    self.game_over_card_draw(self, info);
                                }
                                else if (self.look_card_state == 1) {
                                    controller += 1;
                                }
                            });
                            window.common.card_game_end[info.comparedUserArr[g].userId][k].runAction(cc.sequence(sc, call));
                        })                       
                        console.log(window.common.card_game_end[info.comparedUserArr[g].userId][k]);
                        window.common.card_game_end[info.comparedUserArr[g].userId][k].runAction(cc.sequence(sc, call))
                    }
                }
                else if (this.look_card_state == 0) {
                    console.log('自己人翻牌');
                    let card_type = info.comparedUserArr[g].cardtype;
                    for (let k = 0; k < 3; ++k) {
                        let sc = cc.scaleTo(0.1, 0, 0.73)
                        let call = cc.callFunc(function () {
                            window.common.card_game_end[info.comparedUserArr[g].userId][k].getComponent(cc.Sprite).spriteFrame = card_str_end[g][k];
                            //反转回来动画
                            let sc = cc.scaleTo(0.1, 0.73, 0.73)
                            let call = cc.callFunc(function () {
                                //自己的牌型开启
                                if (controller == 3) {
                                    console.log('其他结算');
                                    self.my_card_type_setVisible(card_type)
                                    self.game_over_card_draw(self, info);
                                }
                                controller += 1;                               
                            });
                            window.common.card_game_end[info.comparedUserArr[g].userId][k].runAction(cc.sequence(sc, call));
                        })
                        window.common.card_game_end[info.comparedUserArr[g].userId][k].runAction(cc.sequence(sc, call))
                    }
                }
            }
        }  
        else {
            this.game_over_card_draw(self,info);
        }     
    }
    //游戏结算1阶段 游戏结算 播发效果
    game_over_card_draw(self,info) {
         //延迟0.5秒后在播放结算
         let time = cc.delayTime(0.5)
         let call = cc.callFunc(function () {
             //红框初始化
             if (self.red_frame_animation != null) {
                 self.red_frame_animation.destroy();
                 self.red_frame_animation = null;
             }
             if (self.gameplayer_this[0].userId == info.winner.userId) {
                 //播放赢
                 //console.log('赢了动画');
                 window.audioMng.playEffect(window.GameScene.music_effect[5], false)
                 self.win = cc.instantiate(self.game_win);
                 self.node.addChild(self.win);
             }
             else if (self.gameplayer_this[0].userId != info.winner.userId) {
                 //播放输
                 //console.log('输了动画');
                 window.audioMng.playEffect(window.GameScene.music_effect[4], false)
                 self.lose = cc.instantiate(self.game_lose);
                 self.node.addChild(self.lose);
             }
         })
         self.node.runAction(cc.sequence(time, call))
    }
    my_card_type_setVisible(card_type){
        this.game_player[0].getChildByName('card-state-my').active = true;
        //看牌类型
        let type = 0
        console.log('牌型的type:'+card_type);      
        if (card_type == 1) { type = 0 }
        else if (card_type == 2) { type = 1 }
        else if (card_type == 3) { type = 2 }
        else if (card_type == 4) { type = 2 }
        else if (card_type == 5) { type = 3 }
        else if (card_type == 6) { type = 3 }
        else if (card_type == 7) { type = 4 }
        else if (card_type == 8) { type = 5 }
        this.game_player[0].getChildByName('card-state-my').getComponent(cc.Sprite).spriteFrame = this.myplayer_card_state[type]
        //动画
        let type_animation = null
        if (card_type == 2) { type_animation = 0 }
        else if (card_type == 3) { type_animation = 1 }
        else if (card_type == 4) { type_animation = 2 }
        else if (card_type == 5) { type_animation = 2 }
        else if (card_type == 6) { type_animation = 3 }
        else if (card_type == 7) { type_animation = 3 }
        else if (card_type == 8) { type_animation = 4 }
        //消除
        if (this.operation_animation[0] != null) {
            this.operation_animation[0].destroy();
            this.operation_animation[0] = null;
        }
        //自己的预制体创建
        if (type_animation != null) {
            let special = cc.instantiate(this.special_card);
            let pos = this.card_end_move[0].getPosition();
            this.node.addChild(special);
            special.setPosition(cc.v2(pos.x + 70, pos.y))
            special.getChildByName('baozi_big').getComponent(cc.Sprite).spriteFrame = this.big_card_my[type_animation]
            special.zIndex = 2
            this.operation_animation[0] = special
        }
    }
    //游戏结算2阶段
    close_an_account() {
        //筹码飞回 
        let self = this;
        console.log('筹码飞回：'+this.win_index);   
        //牌上面的特效 
        for (let i = 0; i < 5; ++i) {
            if (this.operation_animation[i] != null) {
                this.operation_animation[i].destroy()
                this.operation_animation[i] = null
            }
        }           
        let win_index = null
        for (let i = 0; i < this.gameplayer_this.length; ++i) {
            //console.log(this.gameplayer_this[i]);
            //赢钱         
            if (this.gameplayer_this[i].userId == this.game_result.winner.userId) {
                win_index = i
                this.game_player[i][9].active = true
                //this.game_player[i][9].getComponent(cc.Label).string = '0'
                console.log('赢');                                
                this.game_player[i][9].getComponent(cc.Label).string = '+' + window.common.gold_transition(this.game_result.winAmount,2)
                console.log(this.game_player[i][9].getComponent(cc.Label).string );
                this.win_index = i
            }
            for (let k = 0; k < this.game_result.loserAmount.length; ++k) {
                if (this.gameplayer_this[i].userId == this.game_result.loserAmount[k].userId) {
                    this.game_player[i][7].active = true
                    //this.game_player[i][7].getComponent(cc.Label).string = '0'
                    console.log('输');                                      
                    this.game_player[i][7].getComponent(cc.Label).string = '-' + window.common.gold_transition(this.game_result.loserAmount[k].amount,2) 
                    console.log(this.game_player[i][7].getComponent(cc.Label).string);
                }
            }
        }
        //自己的牌关闭
        this.game_player[0].getChildByName('card-state-my').active = false

        if (this.win_index != null) {
            //console.log('筹码飞回win：' + this.win_index);
            window.common.chip_recycle(this.game_player[this.win_index], this.time_chip_recycle);
            //牌飞回去
            window.common.card_recycle(this.card_move_node, this.time_card_recycle);
            let tiem = cc.delayTime(0.5);   //移动代码
            let call = cc.callFunc(function () {
                self.win_result = cc.instantiate(self.head_win_result);
                self.game_player[win_index].addChild(self.win_result);
            })
            this.game_player[win_index].runAction(cc.sequence(tiem, call));  
        }                   
    }
    //初始化
    data_initialize() {       
        for (let i = 0; i < this.game_player.length; ++i) {
            this.game_player[i][9].getComponent(cc.Label).string = '0';
            this.game_player[i][9].active = false;
            this.game_player[i][7].getComponent(cc.Label).string = '0';
            this.game_player[i][5].getComponent(cc.Label).string = '0'
            this.game_player[i][5].active = false
            this.game_player[i][10].active = false;
            this.game_player[i][7].active = false;
            this.game_player[i][3].active = false;
            this.game_player[i][4].active = false;
            this.object[i].active = false
        }
        //人数初始化
        this.people_num = 0;
        this.at_present_wheel = 0;
        //看牌标志位
        this.look_card_state = 0;
        this.than_card_state = 0;
        this.follow_all_state = 0;
        //全押的标志位
        this.allin_card_state = 0;

        this.giveup_card_state = 0;
        //ID初始化
        this.banker_userId = null;
        //最后一轮标志位
        this.intheend_state = 0;
        //进度条初始化
        for (let i = 0; i < 3; ++i) {
            window.ButtonSwitch.button_open('fill-btn' + (i + 1), this.player_operation_node)
        }
        window.ButtonSwitch.button_open('all-in-btn', this.player_operation_node)
        window.ButtonSwitch.button_open('than-card-btn', this.player_operation_node)
        window.ButtonSwitch.button_with_open('with-what-btn', this.else_operation_node);
        //最后下注初始化
        this.node.getChildByName('lastbet-number').getComponent(cc.Label).string = '0'
        //看牌置灰
        window.ButtonSwitch.button_open('see-card-btn', this.player_operation_node)
        //游戏轮数
        this.gamewheel_number.string = '0/0' 
        //总注
        this.bottom_pour_data.string = window.common.gold_transition(0,2);
        if (this.withscene != null) { 
            this.withscene.destroy();
            this.withscene = null;
        }
        if (this.win_result != null) { 
            this.win_result.destroy();
            this.win_result = null;
        }
    }
    //结束当前轮数 11  game_end
    game_sheaves_end(info) {
        //跟新轮数
        this.at_present_wheel = info.round
        this.gamewheel_number.string = info.round + '/' + info.totalRound;//'2/20'; 
        //总注
        let num: number = info.poolAmount;
        let str: string = num.toFixed(2);
        this.bottom_pour_data.string = window.common.gold_transition(info.poolAmount,2);
        //最后一轮
        let banker_find_id = null;
        if (info.round == info.totalRound && this.banker_userId != null) {
            console.log('进入最后一轮');
            this.intheend_state = 1
            //播放最后一轮特效
            //在最后一轮找到庄家
            //查找庄家的下一个玩家
            let begin_index = null
            window.ButtonSwitch.button_close('all-in-btn', this.player_operation_node);
            for (let i = 0; i < this.gameplayer_this.length; i++) {
                if (this.gameplayer_this[i].userId == this.banker_userId) {
                    if (i + 1 >= this.gameplayer_this.length) {
                        begin_index = 0
                    }
                    else {
                        begin_index = i + 1
                    }
                }
            }
            //给庄家的下一个玩家开启全压按钮
            if (this.gameplayer_this[begin_index].userId == this.my_id) {
                window.ButtonSwitch.button_open('all-in-btn', this.player_operation_node);
            }
            else {
                window.ButtonSwitch.button_close('all-in-btn', this.player_operation_node);
            }
            for (let i = 0; i < 3; ++i) {
                window.ButtonSwitch.button_close('fill-btn' + (i + 1), this.player_operation_node)
            }
            window.ButtonSwitch.button_close('than-card-btn', this.player_operation_node);
            window.ButtonSwitch.button_with_close('with-what-btn', this.else_operation_node);
        }
    }
    //比赛结束之后 12  game_end
    game_bureau_end(info) {
        this.gamewheel_number.string = info.round + '/' + info.totalRound;//'2/20';   
        //总注
        this.bottom_pour_data.string = window.common.gold_transition(info.poolAmount,2);
        //玩家头像上
        for (let i = 1; i < info.userInfoArr.length; ++i) {
            this.game_player[i][5].getComponent(cc.Label).string = window.common.gold_transition(info.userInfoArr[i].curActionAmount,2);
            this.game_player[i][1].getComponent(cc.Label).string = window.common.gold_transition(info.userInfoArr[i].amount,2);
        }
    }

}