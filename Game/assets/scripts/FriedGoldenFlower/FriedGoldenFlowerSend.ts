import { C2SIntoGame ,C2SUserAction,C2SCompareCards} from './game_zjh_c2s';
//枚举消息类型
enum RecvC2S {
    cs2enterinfo = 0, //进入游戏
    c2SUserAction = 1, //玩家发言
    cs2GameThanCard_TWO = 2, //玩家比牌2
    cs2GameQuit = 3,     //玩家离开游戏
    cs2GameThanCard_ONE = 5, //玩家比牌1
    cs2DealCard = 6, //玩家发牌结束
}
//客户端发送消息
const { ccclass, property } = cc._decorator;

@ccclass
export default class FriedGoldenFlowerSend extends cc.Component {


    onLoad() {
        window.GameSend = this
    }

    start() {
        //this.enter_into()       
    }
    //进入游戏消息
    enter_into(id) {
        //console.log('消息发送--' + RecvC2S.cs2enterinfo);
        let data = C2SIntoGame.create({ userId: id, userName: 'tanxiao'+id});
        //console.log(data);
        gameTcp.send(2, RecvC2S.cs2enterinfo, C2SIntoGame.encode(data));
    }
    //玩家发言
    playerspeak_send(userId,state,amount) {
        //console.log('玩家发言');
        let data = C2SUserAction.create({ userId: userId, option: state,amount:amount});
        //console.log(data);
        gameTcp.send(2, RecvC2S.c2SUserAction, C2SUserAction.encode(data));
    }
    //玩家比牌2
    playerthan_two_send(my_userId,by_userId) {
        console.log('玩家比牌2'+my_userId);
        console.log('玩家比牌2'+by_userId);
        let data = C2SCompareCards.create({ firstUserId: my_userId, secondUserId: by_userId});
        //console.log(data);
        gameTcp.send(2, RecvC2S.cs2GameThanCard_TWO, C2SCompareCards.encode(data));
    }
    //玩家比牌1
    playerthan_one_send(my_userId) {
        console.log('玩家比牌1');
        let data = C2SIntoGame.create({ userId: my_userId,userName: my_userId});
        //console.log(data);
        gameTcp.send(2, RecvC2S.cs2GameThanCard_ONE, C2SIntoGame.encode(data));
    }
    //玩家发送发牌结束
    deal_card_send(my_userId) {
        //console.log('玩家发送发牌结束'+my_userId);        
         let data1 = C2SIntoGame.create({ userId: Number(my_userId),userName: my_userId});
         //console.log(data1);
         gameTcp.send(2, RecvC2S.cs2DealCard, C2SIntoGame.encode(data1));  
    }
    //玩家离开游戏
    quit_send(my_userId) {
        //console.log('玩家离开游戏'+RecvC2S.cs2GameQuit);
        let data = C2SIntoGame.create({ userId: my_userId,userName: my_userId});
        //console.log(data);
        gameTcp.send(2, RecvC2S.cs2GameQuit, C2SIntoGame.encode(data));
    }
    
    
    // update (dt) {}
}
