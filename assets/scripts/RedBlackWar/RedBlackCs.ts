


/**
 * @param 测试数据
 */
// 牌的值 2~K 对应 2~13  A对应的是14
const hong_hua = [2, 2, 2]; //红的花色
const hei_hua = [1, 1, 1]; //黑的花色
const hong_zi = [14, 2, 3]; //红的字
const hei_zi = [14, 2, 3]; //黑的字

import { rbwar } from "./rbwar";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackCs extends cc.Component {

    //cs
    @property(cc.EditBox)
    red_hua : cc.EditBox = null;
    @property(cc.EditBox)
    red_zi : cc.EditBox = null;
    @property(cc.EditBox)
    black_hua : cc.EditBox = null;
    @property(cc.EditBox)
    black_zi : cc.EditBox = null;

    onLoad() {
    }

    //tempCard = 6;	//测试
    sendMsgRequestTempCard() {
        if (!window.RedBlack.RedBlackMsg.isConnectOk) {
            return;
        }
        console.log("测试");
        for (let i = 0; i < 3; ++i){
            let _data = parseInt(this.red_hua.string.split(',')[i]);
            hong_hua[i] = _data;
            _data = parseInt(this.red_zi.string.split(',')[i]);
            hong_zi[i] = _data;
            _data = parseInt(this.black_hua.string.split(',')[i]);
            hei_hua[i] = _data;
            _data = parseInt(this.black_zi.string.split(',')[i]);
            hei_zi[i] = _data;
        }
        let _tepmCard = this.getCardMsg();
        let msg = rbwar.tempCardMsg.create({
            RedPoker: _tepmCard.red,
            BlackPoker: _tepmCard.black,
        });
        console.log(_tepmCard);
        gameTcp.send(2, rbwar.ReceiveMessageType.tempCard, rbwar.tempCardMsg.encode(msg));
    }

    getCardMsg() {
        let _red = [];
        let _black = [];
        for (let i = 0; i < 3; ++i) {
            let _temp = hong_hua[i] + hong_zi[i] * 16;
            _red.push(_temp);
            _temp = hei_hua[i] + hei_zi[i] * 16;
            _black.push(_temp);
        }
        return {
            red: _red,
            black: _black,
        }
    }

    // update (dt) {}
}
