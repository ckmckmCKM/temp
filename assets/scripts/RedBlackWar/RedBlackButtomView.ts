

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedBlackButtomView extends cc.Component {


    _canvas: cc.Node = null;
    // @property(cc.Vec2)
    // points: cc.Vec2[] = [];
    @property()
    betArea: Number = 0;

    onLoad() {
        this._canvas = cc.find('Canvas');

        this._canvas.on('touchend', (e) => {
            let location = e.getLocation();
            let isContain = this.check(location);
            //点击下注
            if (isContain) {
                cc.log("this.betArea = " + this.betArea);
                window.RedBlack.RedBlackGamePanel.onClickBetint(this.betArea);
            }
        }, this);
    };

    check(location) {
        let node = this.node;
        let pointInNode = node.convertToNodeSpaceAR(location);
        if (pointInNode.x < -node.width / 2 || pointInNode.x > node.width / 2 || pointInNode.y > node.height / 2 || pointInNode.y < -node.height / 2) {
            return false;
        }

        let i, j, c = false;

        let nvert = this.node.getComponent(cc.PolygonCollider).points.length;
        let testx = pointInNode.x;
        let testy = pointInNode.y;
        let vert = this.node.getComponent(cc.PolygonCollider).points;

        for (i = 0, j = nvert - 1; i < nvert; j = i++) {
            if (((vert[i].y > testy) != (vert[j].y > testy)) &&
                (testx < (vert[j].x - vert[i].x) * (testy - vert[i].y) / (vert[j].y - vert[i].y) + vert[i].x))
                c = !c;
        }

        return c;
    };

}
