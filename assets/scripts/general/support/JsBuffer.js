function JsBuffer(bf){
    this._pos = 4;
    if (typeof(bf) == 'undefined'){
        this._bf = new DataView(new ArrayBuffer(1024));
    }else{        
        this._bf = new DataView(bf);
    }
}

var JsBufferProp = JsBuffer.prototype;

JsBufferProp.setMainCmd = function(vl){
    this._bf.setUint16(0, vl, true);
}

JsBufferProp.setSubCmd = function(vl){
    this._bf.setUint16(2, vl, true);
}

JsBufferProp.setInt8 = function(vl){
    this._bf.setUint8(this._pos, vl); this._pos += 1;
}

JsBufferProp.setInt16 = function(vl){
    this._bf.setUint16(this._pos, vl, true); this._pos += 2;
}

JsBufferProp.setInt32 = function(vl){
    this._bf.setUint32(this._pos, vl, true); this._pos += 4;
}

JsBufferProp.setInt64 = function(vl){
	var llv = Long.fromValue(vl);
	this.setInt32(llv.low);
    this.setInt32(llv.high);
}

JsBufferProp.setFloat32 = function(vl){
    this._bf.setFloat32(this._pos, vl, true); this._pos += 4;
}

JsBufferProp.setFloat64 = function(vl){
    this._bf.setFloat64(this._pos, vl, true); this._pos += 8;
}

JsBufferProp.getMainCmd = function(){
    return this._bf.getUint16(0, true);
}

JsBufferProp.getSubCmd = function(){
    return this._bf.getUint16(2, true);
}

JsBufferProp.getInt8 = function(){
    var vl = this._bf.getUint8(this._pos); this._pos += 1;
    return vl;
}

JsBufferProp.getInt16 = function(){
    var vl = this._bf.getUint16(this._pos, true); this._pos += 2;
    return vl;
}

JsBufferProp.getInt32 = function(){
    var vl = this._bf.getUint32(this._pos, true); this._pos += 4;
    return vl;
}

JsBufferProp.getInt64 = function(){
	var low = this.getInt32();
	var high = this.getInt32();
    return new Long(low, high);
}

JsBufferProp.getFloat32 = function(){
    var vl = this._bf.getFloat32(this._pos, true); this._pos += 4;
    return vl;
}

JsBufferProp.getFloat64 = function(){
    var vl = this._bf.getFloat64(this._pos, true); this._pos += 8;
    return vl;
}

JsBufferProp.setString = function(str, len){
	var pos = this._pos;
	for (var i = 0; i < str.length; i++){
		this.setU8Char(str.charCodeAt(i));
	}
    if (typeof(len) !== "undefined" ){
    	this._pos = pos + len;
    }
}

JsBufferProp.setWString = function(str, len){
	var pos = this._pos;
	for (var i = 0; i < str.length; i++){
		this.setU16Char(str.charCodeAt(i));
	}
    if (typeof(len) !== "undefined" ){
    	this._pos = pos + len;
    }
}

JsBufferProp.getString = function(len){
	var str = "";
	var pos = this._pos;
	for(var c, i = 0; i < len; i++){
		c = this.getU8Char();
		if(c === 0) break;
		str += String.fromCharCode(c);
	}
	this._pos = pos + len;
	return str;
}

JsBufferProp.getWString = function(len){
	var str = "";
	var pos = this._pos;
	for(var c, i = 0; i < len/2; i++){
		c = this.getU16Char();
		if(c === 0) break;
		str += String.fromCharCode(c);
	}
	this._pos = pos + len;
	return str;
}

JsBufferProp.getBuffer = function(){
    return this._bf.buffer.slice(0, this._pos);
}

// ---   for string encoding support ----
JsBufferProp.setU8Char = function(c){
    if(c < 0x80){
    	this.setInt8(c);
    }else if(c < 0x800){
    	this.setInt8(0xc0 + (c >>> 6));
    	this.setInt8(0x80 + (c & 0x3f));
    }else if(c < 0x10000){
    	this.setInt8(0xe0 + (c >>> 12));
    	this.setInt8(0x80 + ((c >>> 6) & 0x3f));
    	this.setInt8(0x80 + (c & 0x3f));
    }else if(c < 0x200000){
    	this.setInt8(0xf0 + (c >>> 18));
    	this.setInt8(0x80 + ((c >>> 12) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 6) & 0x3f));
    	this.setInt8(0x80 + (c & 0x3f));
    }else if(c < 0x4000000){
    	this.setInt8(0xf8 + (c >>> 24));
    	this.setInt8(0x80 + ((c >>> 18) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 12) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 6) & 0x3f));
    	this.setInt8(0x80 + (c & 0x3f));
    }else{
    	this.setInt8(0xfc + /* (nChar >>> 30) may be not safe in ECMAScript! */ (nChar / 1073741824));
    	this.setInt8(0x80 + ((c >>> 24) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 18) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 12) & 0x3f));
    	this.setInt8(0x80 + ((c >>> 6) & 0x3f));
    	this.setInt8(0x80 + (c & 0x3f));
    }
}

JsBufferProp.setU16Char = function(c) {
	if(c < 0x10000){
		this.setInt16(c);
	}else{
		this.setInt16(0xD7C0 + (c >>> 10));
		this.setInt16(0xDC00 + (c & 0x3FF));
	}
};

JsBufferProp.getU8Char = function(){
	var c = this.getInt8();
	if(c > 251 && c < 254){
		return (c - 252) * 1073741824 + (this.getInt8() - 128 << 24) + (this.getInt8() - 128 << 18) + (this.getInt8() - 128 << 12) + (this.getInt8() - 128 << 6) + this.getInt8() - 128;
	}else if(c > 247 && c < 252){
		return (c - 248 << 24) + (this.getInt8() - 128 << 18) + (this.getInt8() - 128 << 12) + (this.getInt8() - 128 << 6) + this.getInt8() - 128;
	}else if(c > 239 && c < 248){
		return (c - 240 << 18) + (this.getInt8() - 128 << 12) + (this.getInt8() - 128 << 6) + this.getInt8() - 128;
	}else if(c > 223 && c < 240){
		return (c - 224 << 12) + (this.getInt8() - 128 << 6) + this.getInt8() - 128;
	}else if(c > 191 && c < 224){
		return (c - 192 << 6) + this.getInt8() - 128;
	}
	return c;
}

JsBufferProp.getU16Char = function() {
	var c = this.getInt16();
	if(c > 0xD7BF){
		return (c - 0xD800 << 10) + this.getInt16() + 0x2400;
	}
	return c;
}

JsBufferProp.getU8CharLen = function(nChar){
    return nChar < 0x80 ? 1 : nChar < 0x800 ? 2 : nChar < 0x10000 ? 3 : nChar < 0x200000 ? 4 : nChar < 0x4000000 ? 5 : 6;
}

JsBufferProp.getU16CharLen = function(nChar){
    return nChar < 0x10000 ? 1 : 2;
}

window.JsBuffer = JsBuffer;