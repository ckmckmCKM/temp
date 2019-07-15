import 'PlayerMng'
import { MSGKIND } from './frame';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {    
    
    @property(cc.Sprite)
    bgImg: cc.Sprite = null;

    start(){
        if(this.bgImg){
            var inst = this;
            if(cc.sys.isNative){
                cc.view.setResizeCallback(function(){
                    inst.fixNativeFrame();
                });
            }else{
                this.fixWebFrame();
                window.onresize = function(){
                    inst.fixWebFrame();
                }
            }
        }
        this.node.on("FrameMsg", function(mCmd:number, buff:any){
            if(mCmd === MSGKIND.LOGIN){
                playerMng.loginSuccess(buff);
            }else if(mCmd == MSGKIND.MATCH){
                playerMng.matchSuccess(buff);
            }else if(mCmd == MSGKIND.READY){
                playerMng.readySuccess();
            }
        });
        playerMng.connect();
    }

    fixWebFrame(){
        let size = cc.Canvas.instance.designResolution;
        cc.view.setFrameSize(window.innerWidth,window.innerHeight);
        if(window.innerWidth>window.innerHeight){
            if(size.width<size.height){
                cc.log("changeLandspace");
                this.node.emit("changeLandspace",true);
                cc.Canvas.instance.designResolution = cc.size(1334,750);
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            this.bgImg.node.scale = window.innerWidth/(1334*cc.view.getScaleX());
        }else{
            if(size.width>size.height){
                cc.log("changePartis");
                this.node.emit("changeLandspace",false);
                cc.Canvas.instance.designResolution = cc.size(750,1334);
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            this.bgImg.node.scale = window.innerHeight/(1334*cc.view.getScaleY());
        }
        this.node.emit("fullSceneScale",this.bgImg.node.scale);
    }

    fixNativeFrame(){
        let size = cc.Canvas.instance.designResolution;
        let rect = cc.game.canvas.getBoundingClientRect();
        if(rect.width>rect.height){
            if(size.width<size.height){
                cc.log("changeLandspace");
                this.node.emit("changeLandspace",true);
                cc.Canvas.instance.designResolution = cc.size(1334,750);
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            this.bgImg.node.scale = rect.width/(1334*cc.view.getScaleX());
        }else{
            if(size.width>size.height){
                cc.log("changePartis");
                this.node.emit("changeLandspace",false);
                cc.Canvas.instance.designResolution = cc.size(750,1334);
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            this.bgImg.node.scale = rect.height/(1334*cc.view.getScaleY());
        }
        this.node.emit("fullSceneScale",this.bgImg.node.scale);
    }
}