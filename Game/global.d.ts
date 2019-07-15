
declare interface Eventor{
    on(key:string, fc:any, target:any):void;
    emit(key:string, data?:any):void;
    off(target:any):void;
}

declare interface Window {
    playerMng: any;
    lts: any;
    gameTcp: any;
    audioMng: any;
    DeviceUUID: any;
}

declare let eventor: Eventor;
declare let playerMng: PlayerMng;
declare let gameTcp: GameTcp;
declare let audioMng: AudioMng;
declare let DeviceUUID: DeviceUUID;