class common {
    //等待界面点点的动画渐边效果 //主要节点 变化节点
    static dot_animation(node, frame_node,time) {
        let index = 0
        let dot_state = 0
        //隐函数
        let stealth = function dot_stealth(index, frame_node) {
            let action = cc.fadeOut(time);// 创建一个移动动作
            let call = cc.callFunc(function () {
                //console.log(index);               
                index++;
                if (index >= frame_node.length) {
                    index = 0
                    dot_state = 1
                }
                else {
                    stealth(index, frame_node)
                }
            })
            frame_node[index].runAction(cc.sequence(action, call));// 执行动作
        }
        let appear = function dot_appear(index, frame_node) {
            let action = cc.fadeIn(time);// 创建一个移动动作
            let call = cc.callFunc(function () {
                index++;
                if (index >= frame_node.length) {
                    index = 0
                    dot_state = 0
                }
                else {
                    appear(index, frame_node)
                }
            })
            frame_node[index].runAction(cc.sequence(action, call));// 执行动作
        }
        //显示函数
        let action = cc.delayTime(time);// 创建一个移动动作
        let call = cc.callFunc(function () {
            if (dot_state == 0) {
                dot_state = 2
                stealth(index, frame_node)
            }
            else if (dot_state == 1) {
                dot_state = 2
                appear(index, frame_node)
            }
        })
        node.runAction(cc.repeatForever(cc.sequence(action, call)));// 执行动作
    }
    //筹码的个数
    static chip_number = [];
    //筹码飞行动画 1 筹码的开始位置 2筹码停止到的位置 3图片纹理 4 当前筹码的价值 5筹码的等级 6 绑定节点
    static chip_fiy(begin_node, end_node_move, sprite,value, self,time) {
        //添加精灵
        let chip_new = new cc.Node("chip sprite"); 
        chip_new.setScale(0.7,0.7);
        chip_new.zIndex = 0;
        //得到加载的位置
        let pos1 = begin_node.getPosition()   
        //给新节点位置
        chip_new.setPosition(cc.v2(pos1.x, pos1.y)); 
        //给新节点加精灵组件
        let sp = chip_new.addComponent(cc.Sprite);  
        sp.spriteFrame = sprite;   
        self.addChild(chip_new);  
        //添加文字
        let text_new = new cc.Node("chip text");
        text_new.setPosition(cc.v2(0,-5))    
        text_new.color =  new cc.Color(244, 253, 244);
        let tx = text_new.addComponent(cc.Label);
        tx.fontSize = 22
        tx.string = value+'元';
        chip_new.addChild(text_new); 
        //播放音效
        window.audioMng.playEffect(window.GameScene.music_effect[6],false) 
        //筹码移动
        let pos = end_node_move.getPosition();    
        let move = cc.moveTo(time, pos.x + Math.ceil(Math.random() * 50), pos.y + Math.ceil(Math.random() * 25)); 
        chip_new.runAction(move);
        common.chip_number.push(chip_new)
    }
    //全押的特殊筹码飞行动画 1 筹码的开始位置 2筹码停止到的位置 3图片纹理 4 等级  5 绑定节点
    static chip_fiy_special(begin_node, end_node_move, sprite,lv, self,time) {
        //添加精灵
        let chip_new = new cc.Node("chip sprite"); 
        chip_new.setScale(0.7,0.7);
        chip_new.zIndex = 0;
        //得到加载的位置
        let pos1 = begin_node.getPosition()   
        //给新节点位置
        chip_new.setPosition(cc.v2(pos1.x, pos1.y)); 
        //给新节点加精灵组件
        let sp = chip_new.addComponent(cc.Sprite);  
        sp.spriteFrame = sprite;   
        self.addChild(chip_new);  
        let str = null
        if (lv == 0){
            str = '1元'
        }
        else if(lv == 1){
            str = '10元'
        }
        else if(lv == 2){
            str = '1百'
        }
        else if(lv == 3){
            str = '1千'
        }
        else if(lv == 4){
            str = common.chio_allin_five+'万'
        }
        //添加文字
        let text_new = new cc.Node("chip text");
        text_new.setPosition(cc.v2(0,-5))    
        text_new.color =  new cc.Color(244, 253, 244);
        let tx = text_new.addComponent(cc.Label);
        tx.fontSize = 22
        tx.string = str;
        chip_new.addChild(text_new); 
        //播放音效
        window.audioMng.playEffect(window.GameScene.music_effect[6],false) 
        //筹码移动
        let pos = end_node_move.getPosition();    
        let move = cc.moveTo(time, pos.x + Math.ceil(Math.random() * 70), pos.y + Math.ceil(Math.random() * 35)); 
        chip_new.runAction(move);
        common.chip_number.push(chip_new)
    }
    //操作阶段筹码计算 1上一个玩家的金币数 如果没有就是0 2 比例
    static chip_operation_num = [0, 0, 0] //存储加注 跟住 梭哈的个数
    static gold_lv = [2, 5, 10] //存储加注 跟住 梭哈的个数
    static chip_operation(gold_num) {          
        if (gold_num >= common.gold_lv[2]) {
            let lv1 = gold_num / common.gold_lv[2]
            common.chip_operation_num[2] = parseInt(String(lv1)) ;//第二级的筹码数量
            let lv1_mo = gold_num % common.gold_lv[2]; //取余
            if (lv1_mo >= common.gold_lv[1]) {
                let lv2 = lv1_mo / common.gold_lv[1]
                common.chip_operation_num[1] = parseInt(String(lv2));//第二级的筹码数量
                let lv2_mo = gold_num % common.gold_lv[1]; //取余
                if (lv2_mo >= common.gold_lv[0]) {
                    common.chip_operation_num[0] = parseInt(String(lv2_mo / common.gold_lv[0]));//最小的筹码数量
                }
                else {
                   // console.log('不能出现的情况----' + gold_num);
                }
            }
            else if(lv1_mo >= common.gold_lv[0] ) {
                common.chip_operation_num[0] = parseInt(String(lv1_mo / common.gold_lv[0]));//最小的筹码数量
            }
            else{
               // console.log('出现的情况----' + gold_num);
            }
        }
        else if (gold_num < common.gold_lv[2]) {
            //console.log('gold_lv123123');
            if (gold_num < common.gold_lv[1]) {
                if (gold_num >= common.gold_lv[0]) {
                    common.chip_operation_num[0] = parseInt(String(gold_num / common.gold_lv[0]));//最小的筹码数量
                }
                else {
                    //console.log('不能出现的情况----' + gold_num);
                }
            }
            else if (gold_num >= common.gold_lv[1]) {
                let lv2 = gold_num / common.gold_lv[1]
                common.chip_operation_num[1] = parseInt(String(lv2));//第二级的筹码数量
                let lv2_mo = gold_num % common.gold_lv[1]; //取余
                if (lv2_mo >= common.gold_lv[0]) {
                    common.chip_operation_num[0] = parseInt(String(lv2_mo / common.gold_lv[0]));//最小的筹码数量
                }
                else {
                    //console.log('不能出现的情况----' + gold_num);
                }
            }
        }
        return common.chip_operation_num
    }
    //筹码大于多少后的全押
    static chio_allin =[0,0,0,0]; //下表表示个 十 百 千 
    static chio_allin_five = 0  //对万单独处理
    static chip_operation_allin(gold_num) {    
        //百971
        if (gold_num < 1000){
            //百
            common.chio_allin[2] = common.chip_dispose(gold_num,100)
            gold_num = gold_num - (common.chio_allin[2] *100)
            //十
            common.chio_allin[1] = common.chip_dispose(gold_num,10)
            gold_num = gold_num - (common.chio_allin[1] *10)
            //个
            common.chio_allin[0] = common.chip_dispose(gold_num,1)
        } 
        //千
        else if(gold_num < 10000){
            //千
            common.chio_allin[3] = common.chip_dispose(gold_num, 1000)
            gold_num = gold_num - (common.chio_allin[3] * 1000)
            //百
            common.chio_allin[2] = common.chip_dispose(gold_num, 100)
            gold_num = gold_num - (common.chio_allin[2] * 100)
            //十
            common.chio_allin[1] = common.chip_dispose(gold_num, 10)
            gold_num = gold_num - (common.chio_allin[1] * 10)
            //个
            common.chio_allin[0] = common.chip_dispose(gold_num, 1)
        }
        //万
        else if(gold_num < 100000000){
            common.chio_allin_five = common.chip_dispose(gold_num, 10000)
            gold_num = gold_num - (common.chio_allin_five * 10000)
            //千
            common.chio_allin[3] = common.chip_dispose(gold_num, 1000)
            gold_num = gold_num - (common.chio_allin[3] * 1000)
            //百
            common.chio_allin[2] = common.chip_dispose(gold_num, 100)
            gold_num = gold_num - (common.chio_allin[2] * 100)
            //十
            common.chio_allin[1] = common.chip_dispose(gold_num, 10)
            gold_num = gold_num - (common.chio_allin[1] * 10)
            //个
            common.chio_allin[0] = common.chip_dispose(gold_num, 1)
        }
        else {
            console.log('玩家的钱太多了 没法处理了');            
        }
        return common.chio_allin;
    }
    //筹码处理的调用 1数量 2比例
    static chip_dispose(gold_num,teep){
        //千
        let number = gold_num / teep;
        number = Number(Math.floor(number))
        return number
    }
    ////////////////////////////////////////////////
    //筹码回收动画 1赢家的节点
    static chip_recycle(begin_node,time) {
        let win = begin_node.getPosition()
        for (let i = 0; i < common.chip_number.length; ++i) {
            if (common.chip_number[i] != null) {
                let move = cc.moveTo(time, win.x, win.y);   //移动代码
                let call = cc.callFunc(function () {
                    common.chip_number[i].destroy()
                })
                common.chip_number[i].runAction(cc.sequence(move, call));
            }
        }

    }
    //庄家飞行动画 1庄家飞行终点 2庄家图片纹理 3绑定节点
    static banker_fiy(end_node,pox,poy, sprite, self,time) {
        let chip_new = new cc.Node("chip sprite");  //创建新的node
        let sp = chip_new.addComponent(cc.Sprite);  //给新节点加精灵组件
        sp.spriteFrame = sprite;    //给他新精灵新的 纹理       
        self.addChild(chip_new);  //加载
        let move = cc.moveTo(time,pox , poy );   //移动代码
        let call = cc.callFunc(function () {
            //console.log('删除');
            chip_new.destroy()
            end_node[4].active = true;
        })
        chip_new.runAction(cc.sequence(move, call));
    }
    //存储发牌的信息
    static card_game_end: any= []; 
    static card_cun(num){
        for (let i = 0;i<num;i++){
            common.card_game_end[window.GameScene.gameplayer_this[i].userId] = []
        }        
    }
    //发牌动画 1 牌开始位置 2 牌结束位置 3 牌的纹理 4玩家座位信息 5开始的下表 6有玩家的个数 7场景加注到的节点 8自己的下标
    static card_time = 1 //发牌的次数
    static num_save = 0 //发牌间隔
    static card_x = 0  //牌的x坐标变化
    static card_number = [] //存储发出去的牌
    static card_number_isme = [] //存储自己牌的下表
    static begin_player_index = null //存储开始的玩家下表   
    static card_fiy(begin_node, end_node, sprite, seat, index, people_num, self,time) {
        //查询下一个位置的玩家
        //console.log('////////////////////////////////////////////////////////////////////////');       
        let player_have = function () {                      
            //console.log(index);
            index += 1;
            //大出人数下标上限
            if (index > 4) {
                index = 0
                //console.log('下表重置');
            }
            //判断这个座位玩家是否有人
            if (seat[index] > 0) {
                //console.log(people_num+'有人--'+common.card_time);
                //判断发牌3次3*people_num
                if (common.card_time < 3 * people_num) {
                    if (common.card_time >= people_num) {
                        //console.log('过炉第一轮');
                        //判断第二轮的牌
                        if (people_num * 2  > common.card_time) {
                            if (index == 0) {
                                common.card_x = 101.74
                                //console.log('牌间隔1.0：' + index);
                            }
                            else {
                                common.card_x = 70
                                //console.log('牌间隔1.1：' + index);
                            }
                            common.num_save = common.card_time
                        }
                        //判断第三轮的牌
                        else if (people_num * 2  <= common.card_time) {
                            if (index == 0) {
                                common.card_x = 203.48
                                //console.log('牌间隔2.0：' + index);
                                //console.log(index);
                            }
                            else {
                                common.card_x = 140
                                //console.log('牌间隔2.1' + index);
                                //console.log(index);
                            }
                            common.num_save = 0
                        }                        
                    } 
                    common.card_time += 1; 
                    common.card_fiy(begin_node, end_node, sprite, seat, index, people_num, self,time)
                }
                else {
                    //初始化
                    common.card_time = 1
                    common.card_x = 0
                    common.num_save = 0
                    //发牌结束
                    window.GameScene.card_end()
                    //console.log('--------'+common.card_number.length);
                }
            }
            else if (seat[index] == 0) {
                //console.log('没有人');
                player_have()
            }
        }
        //创建牌飞行的动画
        let st = 'chip sprite'
        let card_new = new cc.Node(st);  //创建新的node
        if (index == 0 ){
            card_new.setScale(cc.v2(0.73,0.73))
        }
        else {
            card_new.setScale(cc.v2(0.5,0.5))
        }       
        let pos1 = begin_node.getPosition()   //得到加载的位置
        card_new.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        let sp = card_new.addComponent(cc.Sprite);  //给新节点加精灵组件
        sp.spriteFrame = sprite;    //给他新精灵新的 纹理
        self.addChild(card_new);  //加载
        let pos = end_node[index].getPosition();    //移动的终点位置
        //console.log('第几次：'+common.card_time+'坐标：'+common.card_x);
        let move = cc.moveTo(time, pos.x + common.card_x, pos.y);   //移动代码
        let call = cc.callFunc(function () {
            //console.log('递归：'+common.card_time);                     
            player_have()//递归回调           
        })
        card_new.runAction(cc.sequence(move, call));
        //播放音效
        window.audioMng.playEffect(window.GameScene.music_effect[2],false)
        
        //存储所有发出去的牌 
        common.card_number.push(card_new);
        //console.log('发出去的牌');       
        //console.log(common.card_number);       
        if (index == 0) {
            //console.log('存储自己的牌' + common.card_number.length);
            common.card_number_isme.push(common.card_number.length);
            //console.log('存储自己的牌---' + common.card_number_isme.length);
        }    
        common.card_game_end[window.GameScene.gameplayer_this[index].userId].push(card_new)
    }
    //收牌 牌动画 1所有的牌 2弃牌回收玩家座位号
    static card_recycle(begin_node,time) {
        let dis = begin_node.getPosition()
        //console.log('手牌长度:'+common.card_number.length);        
        for (let i = 0; i < common.card_number.length; ++i) {
            if (common.card_number[i] != null) {
                let move = cc.moveTo(time, dis.x, dis.y);   //移动代码
                let call = cc.callFunc(function () {
                    common.card_number[i].destroy()
                })
                common.card_number[i].runAction(cc.sequence(move, call));
            }
        }
        //存储的自己牌初始哈
        common.card_number_isme.splice(0,common.card_number_isme.length)    
    }
    //翻牌 自己的动画动画
    static draw_num = 0
    static card_draw(str) {
        //反转1旋转动画
        let sc = cc.scaleTo(0.1, 0, 0.73)
        let call = cc.callFunc(function () {
            //console.log('翻开牌:'+common.card_number[common.card_number_isme[common.draw_num] - 1]);            
            common.card_number[common.card_number_isme[common.draw_num] - 1].getComponent(cc.Sprite).spriteFrame = str[common.draw_num]
            //反转回来动画
            let sc = cc.scaleTo(0.1, 0.73, 0.73)
            let call = cc.callFunc(function () {
                common.draw_num += 1;
                if (common.draw_num > 2) {
                    common.draw_num = 0
                    return;
                }
                else {
                    common.card_draw(str)
                }
            });
            common.card_number[common.card_number_isme[common.draw_num] - 1].runAction(cc.sequence(sc, call));
        });
        //播放音效
        window.audioMng.playEffect(window.GameScene.music_effect[1],false)    
        common.card_number[common.card_number_isme[common.draw_num] - 1].runAction(cc.sequence(sc, call));//缩放到当前倍数节点（时间（s），X轴倍数，Y 轴倍数）
    }
    //翻牌 牌行 1是花色 2是点数 3图集
    static card_data(t, c, card) {
        let str: string;
        if (t == 1) { //方块
            str = card.getSpriteFrame('CU_' + c)
            //console.log('方块');           
        }
        else if (t == 2) { //梅花
            //str = 'helianthus_' + c + '.png'
            str = card.getSpriteFrame('helianthus_' + c)
            //console.log('梅花');
        }
        else if (t == 3) { //红心
            //str = 'HEARTS_' + c + '.png'
            str = card.getSpriteFrame('HEARTS_' + c)
            //console.log('红心');
        }
        else if (t == 4) {//黑桃
            //str = 'Spades_' + c + '.png'
            str = card.getSpriteFrame('Spades_' + c)
            //console.log('黑桃');
        }
        return str
    }
    //提示框移动 1父节点 2加载节点 let num = (info.amount*0.01).toFixed(2)
    static hint_move(node,selt) {
        //点击提升框移动
        let move = cc.instantiate(node);
        selt.addChild(move);
        let pos = move.getPosition()
        let mv = cc.moveTo(0.8,pos.x,pos.y+250);
        let call = cc.callFunc(function(){
            move.destroy()
        })
        move.runAction(cc.sequence(mv,call));
    }
    //金币显示转换
    static gold_transition(gold_num,place) {
        if (place == null){
            place = 0
        }
        let num = (gold_num*0.01).toFixed(place)
        return num
    }
    //头像的剪切
    static head_shear(sp) {
    }
}
window.common = common