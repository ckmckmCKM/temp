
import { showPanelIdType, playerSeatId } from "./RedBlackCfg";
import LTableView from "../general/common/LTableView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackPlayerList extends cc.Component {

    private _userDatas = [];
    private tabler: LTableView = null;

    onLoad() {
        window.RedBlack.RedBlackPlayerList = this;
        this.tabler = this.node.getChildByName("TableView").getComponent(LTableView);
        // this.tabler.setCellback(this.node,"RedBlackPlayerList","updateCellInfo");
    }

    initPlayerListData(userDatas) {
        this._userDatas = userDatas;
        this.tabler.cellNum = userDatas.length;
        this.tabler.reload();
    }

    updateCellInfo(nd:cc.Node, idx: number){
        let item = nd.getComponent("RedBlackPlayerItem");
        item.updateInfo(this._userDatas[idx],idx);
    }

    close() {
        window.RedBlack.RedBlackCentrePanel.hideNoMove(showPanelIdType.quanquan);
        window.RedBlack.RedBlackCentrePanel.hideScale(showPanelIdType.playerList);
    }

}
