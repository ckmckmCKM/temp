import { S2CTableInfo,S2CUserInfo,S2CTickerStart,S2CUserActionInfo,S2CUserSeeCards,S2CUserInfoArr,S2CEndGame,S2CCompareRes} from './game_zjh_s2c';
//游戏消息接收
const {ccclass, property} = cc._decorator;

//服务器枚举消息类型
enum RecvC2S{
    S2C_INTO_ROOM = 0, //进入房间
    S2C_OTHER_INTO_ROOM = 1,//其他人进入房间
    S2C_WAIT_START       = 2,  //当前房间只有1人，等待开赛
    S2C_TICKER_START     = 3, //房间有2人，进入开赛倒计时
    S2C_SEND_CARDS_OK    = 4,  //发牌完毕，玩家开始发言.
    S2C_USER_ACTION      = 5,  //玩家发言 
    S2C_COMPARE_CARDS    = 6,  //比牌
    S2C_LEAVE_TABLE_OK   = 7,  //离开牌桌成功
    S2C_LEAVE_TABLE_NO   = 10004,  //离开牌桌失败
    S2C_CUR_ACTION_USER  = 8,  //当前发言玩家 
    S2C_FINISH_GAME      = 9, // 比赛结束
    S2C_USER_SEE_CARDS   = 10, //玩家看牌         S2CUserSeeCards
    S2C_FINISH_CUR_ROUND = 11, //结束当前轮，返回牌桌信息等 S2CTableInfo
    S2C_TABLE_INFO = 12,       //一局结束后发送 S2CTableInfo
    S2C_START_SEND_CARDS  = 13,  //开始发牌 
    S2C_GET_CAN_COMPARE_LIST       = 14, //获取可比牌的用户列表          S2CUserInfoArr
    S2C_GIVE_UP_CARDS_FOR_SELF = 15, //弃牌给自己看       S2CUserSeeCards
}

@ccclass
export default class FriedGoldenFlowerRecv extends cc.Component {


    onLoad () {
        window.GameRecv = this;
    }

    start () {
        this.node.on("GameMsg",function(mCmd:number, buff:any){
            //进入房间
            if(mCmd === RecvC2S.S2C_INTO_ROOM){
                let msg = S2CTableInfo.decode(buff);             
                //console.log('进入房间---'+msg.userInfoArr.length);    
                window.GameScene.node.emit("gameplayer_enter",msg);
            }
            //其他人进入房间
            else if(mCmd === RecvC2S.S2C_OTHER_INTO_ROOM){
                let msg = S2CUserInfo.decode(buff);
                //cc.log("消息1 7 8---",msg);
                window.GameScene.node.emit("else_gameplayer_enter",msg);
            }
            //当前房间只有1人，等待开赛
            else if(mCmd === RecvC2S.S2C_WAIT_START){
                // let msg = S2CUserInfo.decode(buff);
                //cc.log("消息2---");
                window.GameScene.node.emit("wait_start");
            }
            //房间有2人，进入开赛倒计时
            else if(mCmd === RecvC2S.S2C_TICKER_START){
                let msg = S2CTickerStart.decode(buff);
                //cc.log("消息3---",msg.ticker);
                window.GameScene.node.emit("ticker_start",msg);
            }
            //开始发牌 13
            else if(mCmd === RecvC2S.S2C_START_SEND_CARDS){
                let msg = S2CTableInfo.decode(buff);//
                //cc.log("消息13---"+msg);
                //if (msg.userInfoArr[0].userId == 2){
                    window.GameScene.node.emit("game_deal",msg);//
                //}               
            }
            //发牌完毕，玩家开始发言 8
            else if(mCmd === RecvC2S.S2C_CUR_ACTION_USER){
                let msg = S2CUserInfo.decode(buff); 
                //cc.log("消息8---");
                window.GameScene.node.emit("game_spokesman",msg);//
            }
            //玩家开始发言结果 5
            else if(mCmd === RecvC2S.S2C_USER_ACTION){
                let msg = S2CUserActionInfo.decode(buff); 
                //cc.log("消息5---");
                window.GameScene.node.emit("game_endofthespeech",msg);//
            }
            //玩家看牌结果 10
            else if(mCmd === RecvC2S.S2C_USER_SEE_CARDS){
                let msg = S2CUserSeeCards.decode(buff); 
                //cc.log("消息10---");
                cc.log(msg);
                window.GameScene.node.emit("game_lookcard",msg);//
            }
            //玩家比牌2 6 返回赢家的信息
            else if(mCmd === RecvC2S.S2C_COMPARE_CARDS){
                let msg = S2CCompareRes.decode(buff); 
                //cc.log("6---");
                window.GameScene.node.emit("game_thancard_stagetwo",msg);//
            }
            //玩家比牌1 14
            else if(mCmd === RecvC2S.S2C_GET_CAN_COMPARE_LIST){
                let msg = S2CUserInfoArr.decode(buff); 
                //cc.log("14---");
                window.GameScene.node.emit("game_thancard_stageone",msg);//
            }
            //玩家离开游戏成功
            else if(mCmd === RecvC2S.S2C_LEAVE_TABLE_OK){
                let msg = S2CUserInfo.decode(buff); 
                //cc.log("7---");
                window.GameScene.node.emit("game_quit_OK",msg);//
            }
            //玩家离开游戏失败
            else if(mCmd === RecvC2S.S2C_LEAVE_TABLE_NO){
                cc.log("1004---");
                window.GameScene.node.emit("game_quit_NO");//
            }
            //比赛结束 9
            else if(mCmd === RecvC2S.S2C_FINISH_GAME){
                let msg = S2CEndGame.decode(buff); 
                //cc.log("9---");
                window.GameScene.node.emit("game_end",msg);//
            }
            //结束当前轮数 11 
            else if(mCmd === RecvC2S.S2C_FINISH_CUR_ROUND){
                let msg = S2CTableInfo.decode(buff); 
                //cc.log("11---");
                window.GameScene.node.emit("game_sheaves_end",msg);//
            }
            //结束当前局数 12 
            else if(mCmd === RecvC2S.S2C_TABLE_INFO){
                let msg = S2CTableInfo.decode(buff); 
                //cc.log("12---");
                window.GameScene.node.emit("game_bureau_end",msg);//
            }
            //玩家放弃牌后自动看牌 15
            else if(mCmd === RecvC2S.S2C_GIVE_UP_CARDS_FOR_SELF){
                let msg = S2CUserSeeCards.decode(buff); 
                //cc.log("消息15---");
                window.GameScene.node.emit("game_giveup_card",msg);//
            }
        }); 
    }

    // update (dt) {}
}
