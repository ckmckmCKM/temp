
import { getChipNum, chipId } from "./RedBlackCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackChipItem extends cc.Component {

    @property(cc.SpriteFrame)
    bgSprits: cc.SpriteFrame[] = [];

    initChipData(index) {
        let numStr = this.chipString(chipId[index]);
        
        let chipLabel = this.node.getComponent("ChipLabel");
        chipLabel.off.y = 4;
        chipLabel.string = numStr;
    }

    chip_fiy(begin_node, end_node_move, offPos, angle = 0, sprite_id = 0, scale = 1) {
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/chipMove",_canvas);//cc.Canvas.instance.node.getChildByName("root"); chipMove
        let pos1 = begin_node.convertToWorldSpaceAR(_parent.getPosition());   //得到加载的位置
        pos1 = pos1.sub(_parent.getPosition());
        // console.log("pos1 = " + pos1);
        this.node.setPosition(cc.v2(pos1.x, pos1.y)); //给新节点位置
        this.node.scale = scale;
        this.node.angle = 0;//Math.ceil(Math.random() * 90) - 45;
        _parent.addChild(this.node);  //加载
        this.node.getComponent(cc.Sprite).spriteFrame = this.bgSprits[sprite_id];
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        // console.log("pos = " + pos);
        let _offX = offPos.x;
        let _offY = offPos.y;
        // console.log("_range = " + _range);
        // console.log("_offX = " + _offX + "---_offX = " + _offY);
        let move = cc.moveTo(0.5, pos.x + _offX, pos.y + _offY);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        //cc.rotateBy(0.3, -Math.ceil(Math.random() * 90)), 
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            // window.RedBlack.RedBlackGamePanel.putChip(this.node);
        })));
    }

    chip_recovery(end_node_move, offPos, isActive = true, endShow = false){
        this.node.active = true;
        let _canvas = cc.Canvas.instance.node;
        let _parent = cc.find("root/chipMove",_canvas);
        let pos = end_node_move.convertToWorldSpaceAR(_parent.getPosition());
        pos = pos.sub(_parent.getPosition());
        let _offX = offPos.x;
        let _offY = offPos.y;
        let move = cc.moveTo(0.5,  pos.x + _offX, pos.y + _offY);//移动代码
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            if (isActive) {
                window.RedBlack.RedBlackGamePanel.putChip(this.node);
            }else{
                this.node.active = endShow;
            }
        })));
    }

    chip_fiy_win(begin_node, end_node_move, offPos, addTime = 0, sprite_id = 0, scale = 1) {
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
        let move = cc.moveTo(0.5 + addTime, pos.x, pos.y);
        // let move = cc.moveTo(1, pos.x + Math.ceil(Math.random() * 100), pos.y + Math.ceil(Math.random() * 100));   //移动代码
        this.node.runAction(cc.sequence(move, cc.callFunc(() => {
            window.RedBlack.RedBlackGamePanel.putChip(this.node);
        })));
    }

    chipString(num,isFloat = false){
        let vl = num * 0.01;
        if(vl >= 100000000){
            vl /= 100000000;
            return vl.toString()+"y";
        }else if(vl >= 10000000 && !isFloat){
            vl /= 10000000;
            return vl.toString()+"t";
        }else if(vl >= 1000000 && !isFloat){
            vl /= 1000000;
            return vl.toString()+"m";
        }else if(vl >= 10000){
            vl /= 10000;
            return vl.toString()+"w";
        }else if(vl >= 1000 && !isFloat){
            vl /= 1000;
            return vl.toString()+"q";
        }
        return vl.toString();
    }
}
