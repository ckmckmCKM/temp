class base64{
    _table= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

    encode(data){
        var bin = data;
        if(typeof(bin) == "string"){
            bin = this.convary(bin);
        }else{
            bin = Array.from(data);
        }
        var codes = [];
        var un = 0;
        un = bin.length % 3;
        if (un == 1)
            bin.push(0, 0);
        else if (un == 2)
            bin.push(0);
        for (var i = 2; i < bin.length; i += 3) {
            var c = bin[i - 2] << 16;
            c |= bin[i - 1] << 8;
            c |= bin[i];
            codes.push(this._table[c >> 18 & 0x3f]);
            codes.push(this._table[c >> 12 & 0x3f]);
            codes.push(this._table[c >> 6 & 0x3f]);
            codes.push(this._table[c & 0x3f]);
        }
        if (un >= 1) {
            codes[codes.length - 1] = "=";
            bin.pop();
        }
        if (un == 1) {
            codes[codes.length - 2] = "=";
            bin.pop();
        }
        return codes.join("");
    }

    decode(base64Str,isStr) {
        var i = 0;
        var bin = [];
        var x = 0, code = 0, eq = 0;
        while (i < base64Str.length) {
            var c = base64Str.charAt(i++);
            var idx = this._table.indexOf(c);
            if (idx == -1) {
                switch (c) {
                    case '=': idx = 0; eq++; break;
                    case ' ':
                    case '\n':
                    case "\r":
                    case '\t':
                        continue;
                    default:
                        throw { "message": "\u65E0\u6548\u7F16\u7801\uFF1A" + c };
                }
            }
            if (eq > 0 && idx != 0)
                throw { "message": "\u7F16\u7801\u683C\u5F0F\u9519\u8BEF\uFF01" };

            code = code << 6 | idx;
            if (++x != 4)
                continue;
            bin.push(code >> 16);
            bin.push(code >> 8 & 0xff);
            bin.push(code & 0xff)
            code = x = 0;
        }
        if (code != 0)
            throw { "message": "\u7F16\u7801\u6570\u636E\u957F\u5EA6\u9519\u8BEF" };
        if (eq == 1)
            bin.pop();
        else if (eq == 2) {
            bin.pop();
            bin.pop();
        } else if (eq > 2)
            throw { "message": "\u7F16\u7801\u683C\u5F0F\u9519\u8BEF\uFF01" };

        if(isStr) return this.convstr(bin);
        return new Uint8Array(bin);
    }

    convary(str){
        let ary = [];
        str = str.replace(/\r\n/g,"\n");
        for (var n = 0; n < str.length; n++) {
            var c = str.charCodeAt(n);
            if (c < 128) {
                ary.push(c);
            } else if((c > 127) && (c < 2048)) {
                ary.push((c >> 6) | 192);
                ary.push((c & 63) | 128);
            } else {
                ary.push((c >> 12) | 224);
                ary.push(((c >> 6) & 63) | 128);
                ary.push((c & 63) | 128);
            }
        }
        return ary;
    }
 
    convstr(ary) {
        var i = 0;
        var str = "";
        var c,c1,c2,c3;
        while ( i < ary.length ) {
            c = ary[i];
            if (c < 128) {
                str += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = ary[i+1];
                str += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = ary[i+1];
                c3 = ary[i+2];
                str += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return str;
    }
}

window.base64 = new base64();

