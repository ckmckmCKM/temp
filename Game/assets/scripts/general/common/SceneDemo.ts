//import { MsgID, UserBet } from '../../FruitsSlots/laba';

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneDemo extends cc.Component {    

    start () {
        this.node.on("GameMsg",function(mCmd:number, buff:any){ 
            /*
            if(mCmd === MsgID.Bet){
                let msg = UserBet.decode(buff);
                cc.log("单线押注金币 :",msg.BetMoney);
                
            }
            */
        }); 
        /*

        //玩家数据  
        cc.log("player gold:"+playerMng.gold);
        //lts非常用静态函数(LTools.ts)
        cc.log("gold:"+lts.numAddPoint(1234567));
        //常用公共函数(common.ts)
        //发送 proto对象obj
        // gameTcp.send(1,obj);
        // long 类型（金币相关都用long）
        cc.log("a:"+Long.fromValue(12998334334343));
        */
    }

    sendMsgTest(desc:string){
        /*
        let msg = UserBet.create({BetMoney:123});
        gameTcp.send(2,MsgID.Bet,UserBet.encode(msg));
        */
    }
}

