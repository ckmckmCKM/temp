
import { showPanelIdType, showPanelType, cardCharacterType } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackButtonLayer extends cc.Component {

    //ckm cs
    // @property(cc.Node)
    // btns: cc.Node = null;
    // btn(){
    //     this.btns.active = !this.btns.active;
    // }

    onClickOpenButton(event, customEventData) {
        switch (customEventData) {
            case "help":
                window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.help);
                break;
            case "set":
                window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.set);
                break;
            case "playerList":
                // window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.playerList);
                window.RedBlack.RedBlackMsg.sendMsgRequestGetUserListInfo();
                window.RedBlack.RedBlackCentrePanel.showNoMove(showPanelIdType.quanquan);
                break;
            case "details":
                // window.RedBlack.RedBlackCentrePanel.showScale(showPanelIdType.details);
                window.RedBlack.RedBlackMsg.isDetails = true;
                window.RedBlack.RedBlackMsg.sendMsgRequestGetTrend();
                break;
            //ckm cs
            case "startBet":
                window.RedBlack.RedBlackCentrePanel.showMoveLeft(showPanelIdType.startBet);
                break;
            case "stopBet":
                window.RedBlack.RedBlackCentrePanel.showMoveLeft(showPanelIdType.stopBet);
                break;
        }
    }

    onClickCloseButton(event, customEventData) {
        switch (customEventData) {
            case "helpClose":
                window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.help);

                break;
            case "setClose":
                window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.set);
                break;
            case "playerListClose":
                window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.playerList);
                break;
            case "detailsClose":
                window.RedBlack.RedBlackMsg.isDetails = false;
                window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.details);
                break;
            //ckm cs
            case "startBetClose":
                window.RedBlack.RedBlackCentrePanel.hideMoveLeft(showPanelIdType.startBet);
                break;
            case "stopBetClose":
                window.RedBlack.RedBlackCentrePanel.hideMoveLeft(showPanelIdType.stopBet);
                break;
        }
    }

}
