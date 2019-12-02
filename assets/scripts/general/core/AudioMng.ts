class AudioMng{
	_musicId: number = null;
	_musicVolume: number;
	_effectVolume: number;

	/** 播放背景音乐 */
    playMusic(clip: cc.AudioClip, loop?:boolean){
		loop = typeof loop !== 'undefined' ? loop : true;
		if(this._musicId !== -1){
			cc.audioEngine.stop(this._musicId);
		}
        this._musicId = cc.audioEngine.play(clip,loop,this._musicVolume);
	}
	/** 播放音效 */
	playEffect(clip: cc.AudioClip, loop?: boolean) {
		loop = typeof loop !== 'undefined' ? loop : false;
		if(this._effectVolume>0){
			return cc.audioEngine.play(clip,loop,this._effectVolume);
		}
		return -1;
	}
	/** 停止音效 */
	stopEffect(effectId: number){
		if(effectId !== -1){
			cc.audioEngine.stop(effectId);
		}
	}
	/** 设置背景声音大小 */
	setMusicVolume(volume){
		this._musicVolume = volume;
		if(this._musicId !== -1){
			cc.audioEngine.setVolume(this._musicId, this._musicVolume);
		}
		//upload to server
	}
	/** 设置音效声音大小 */
	setEffectVolume(volume){
		this._effectVolume = volume;
		//upload to server
	}

    constructor(){
		this._musicId = -1;
		this._musicVolume = 1.0;
		this._effectVolume = 1.0;
    }

}

window.audioMng = new AudioMng();