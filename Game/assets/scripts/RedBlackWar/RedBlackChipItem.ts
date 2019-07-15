
import { battleAniSpeed, showPanelType, showPanelIdType, allArea, cardType, chipId } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackChipItem extends cc.Component {

    // @property(cc.Node)
    // winPercentage: cc.Node = null;
    @property(cc.Label)
    numLabel: cc.Label = null;

    @property(cc.SpriteFrame)
    bgSprits: cc.SpriteFrame[] = [];

    isSelf:boolean = false;
    num:number = 0;

    initChipData(num, isSelf = false) {
        // this.num = num; 背景和数字合在一起了就不需要这个了
        this.isSelf = isSelf;
        this.numLabel.string = chipId[num] + "";
    }

    chip_fiy(begin_node, end_node_move, offPos, sprite_id = 0, scale = 0.5) {
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/chipMove",_canvas);//cc.Canvas.instance.node.getChildByName("root"); chipMove
        let pos1 = begin_node.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.getPosition());
        // console.log("pos1 = " + pos1);
        this.node.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        this.node.scale = scale;
        _parent.addChild(this.node);  //加载
        this.node.getComponent(cc.Sprite).spriteFrame = this.bgSprits[sprite_id];
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        console.log("pos = " + pos);
        // let _range = end_node_move.getContentSize(); //终点范围
        // _range.width = _range.width - this.node.getContentSize().width / 2;
        // _range.height = _range.height - this.node.getContentSize().height / 2;
        let _offX = offPos.x;//Math.ceil(Math.random() * _range.width) - _range.width / 2;
        let _offY = offPos.y;//Math.ceil(Math.random() * _range.height) - _range.height / 2;
        // console.log("_range = " + _range);
        console.log("_offX = " + _offX + "---_offX = " + _offY);
        let move = cc.moveTo(0.5, pos.x + _offX, pos.y + _offY);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            // window.RedBlack.RedBlackGamePanel.putChip(this.node);
        })));
    }

    chip_recovery(end_node_move){
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/chipMove",_canvas);
        // let pos1 = this.node.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        // pos1 = pos1.sub(_parent.getPosition());
        // console.log("pos1 = " + pos1);
        // this.node.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        // this.node.parent = _parent;
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        let move = cc.moveTo(0.5, pos.x, pos.y);//移动代码
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            window.RedBlack.RedBlackGamePanel.putChip(this.node);
        })));
    }

    chip_fiy_win(begin_node, end_node_move, offPos, sprite_id = 0, scale = 0.5) {
        const areaPos = [cc.v2(443,435), cc.v2(863,435), cc.v2(690,240)];
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/chipMove",_canvas);//cc.Canvas.instance.node.getChildByName("root"); chipMove
        let pos1 = begin_node.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.getPosition());
        pos1.x += Math.ceil(Math.random() * 50) - 50;//offPos.x;
        pos1.y += Math.ceil(Math.random() * 50) - 50;//offPos.y;
        // console.log("pos1 = " + pos1);
        this.node.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置(areaPos[0]);
        this.node.scale = scale;
        _parent.addChild(this.node);  //加载
        this.node.getComponent(cc.Sprite).spriteFrame = this.bgSprits[sprite_id];
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        // console.log("pos = " + pos);
        // console.log("offPos = " + offPos);
        let move = cc.moveTo(0.5, pos.x, pos.y);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            window.RedBlack.RedBlackGamePanel.putChip(this.node);
        })));
    }

}
