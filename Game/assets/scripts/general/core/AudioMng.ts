class AudioMng{
    isMusicOpen: boolean;
    isEffectOpen: boolean;

    playMusic(clip,loop){
        loop = typeof loop !== 'undefined' ? loop : true;
        cc.audioEngine.playMusic(clip,loop);
        if (!this.isMusicOpen) {
			this.pauseMusic();
		}
    }

    pauseMusic() {
		cc.audioEngine.pauseMusic();
	}

	resumeMusic() {
		cc.audioEngine.resumeMusic();
	}

	stopMusic(){
		cc.audioEngine.stopMusic();
	}

	stopEffect(idx){
		if(typeof(idx) !== "undefined"){
			cc.audioEngine.stopEffect(idx);
		}
	}

	playEffect(clip,loop) {
		if(this.isEffectOpen){
			loop = typeof loop !== 'undefined' ? loop : false;
			return cc.audioEngine.playEffect(clip, loop);
		}
		return 0;
    }
    
    setEffectState(isOpen) {
		this.isEffectOpen = isOpen;
		cc.sys.localStorage.setItem("isEffectOpen",isOpen);
	}

	setMusicState(isOpen) {
		this.isMusicOpen = isOpen;
		cc.sys.localStorage.setItem("isMusicOpen",isOpen);
		if (isOpen) {
			this.resumeMusic();
		} else {
			this.pauseMusic();
		}
	}

    constructor(){
        this.isEffectOpen = true;
        this.isMusicOpen = true;
    }

}

window.audioMng = new AudioMng();