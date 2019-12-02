import 'PlayerMng'
import { PbFrame } from './frame';

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {    
    
    /** 屏幕是否自动旋转（横竖屏切换） */
    @property
    isNeedRotate: boolean = true;

    /** 背景图片 */
    @property(cc.Sprite)
    bgImg: cc.Sprite = null;

    start(){
        this.scheduleOnce(()=>{
            var inst = this;
            if(this.bgImg){
                if(cc.sys.isMobile){
                    inst.fixMobileWeb();
                    window.onresize = function(){
                        inst.fixMobileWeb();
                    }
                }else if(cc.sys.isNative){
                    let rect = cc.game.canvas.getBoundingClientRect();
                    inst.fixDesktopFrame(rect.width,rect.height);
                    cc.view.setResizeCallback(function(){
                        let rect = cc.game.canvas.getBoundingClientRect();
                        inst.fixDesktopFrame(rect.width,rect.height);
                    });
                }else{
                    inst.fixDesktopFrame(window.innerWidth,window.innerHeight);
                    window.onresize = function(){
                        inst.fixDesktopFrame(window.innerWidth,window.innerHeight);
                    }
                }
            }
        },0.2);
        
        this.node.on("FrameMsg", function(mCmd:number, buff:any){
            if(mCmd === PbFrame.MSGKIND.CONFIG){
                playerMng.getCfgInfo(buff);
            }else if(mCmd == PbFrame.MSGKIND.MATCH){
                playerMng.playerEnter(buff);
            }else if(mCmd == PbFrame.MSGKIND.READY){
                playerMng.readySuccess(buff);
            }else if(mCmd == PbFrame.MSGKIND.LEAVE){
                playerMng.playerLeave(buff);
            }else if(mCmd == PbFrame.MSGKIND.ERROR){
                playerMng.gameError(buff);
            }else if(mCmd == PbFrame.MSGKIND.HANDSEL){
                playerMng.updateHandsel(buff);
            }
        });

        setTimeout(()=>{
            playerMng.connect();
        },2000);
        //这个只是测试以后要删除
        if(!this.node.getComponent("SceneDemo")){
            //this.node.addComponent("SceneAdaptor");
        }
    }

    fixMobileWeb(){
        let realPix = screen.width > screen.height ? screen.width : screen.height;
        realPix = realPix * (cc.view.isRetinaEnabled() ? 2 : 1);
        let rect = cc.game.canvas.getBoundingClientRect();
        let size = cc.Canvas.instance.designResolution;
        if(rect.width>rect.height){
            if(size.width<size.height && this.isNeedRotate){
                this.node.emit("changeLandspace",true);
                cc.Canvas.instance.designResolution = cc.size(1334,750);
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            this.bgImg.node.scale = realPix/(1334*cc.view.getScaleX());
        }else{
            if(size.width>size.height && this.isNeedRotate){
                this.node.emit("changeLandspace",false);
                cc.Canvas.instance.designResolution = cc.size(750,1334);
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            this.bgImg.node.scale = realPix/(1334*cc.view.getScaleY());
        }
        this.node.emit("fullSceneScale",this.bgImg.node.scale);
    }

    fixDesktopFrame(width,height){
        let size = cc.Canvas.instance.designResolution;
        let retina = cc.view.isRetinaEnabled() ? 2 : 1;
        if(cc.sys.isBrowser){
            cc.view.setFrameSize(width,height);
        }
        if(width>height){
            if(size.width<size.height && this.isNeedRotate){
                this.node.emit("changeLandspace",true);
                cc.Canvas.instance.designResolution = cc.size(1334,750);
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            this.bgImg.node.scale = retina*width/(1334*cc.view.getScaleX());
        }else{
            if(size.width>size.height && this.isNeedRotate){
                this.node.emit("changeLandspace",false);
                cc.Canvas.instance.designResolution = cc.size(750,1334);
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            this.bgImg.node.scale = retina*height/(1334*cc.view.getScaleY());
        }
        this.node.emit("fullSceneScale",this.bgImg.node.scale);
    }
}