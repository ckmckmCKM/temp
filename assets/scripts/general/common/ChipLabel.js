
cc.Class({
    extends: cc.Component,

    properties: {
        string: "",
        others: [cc.String],
        frames: [cc.SpriteFrame],
    },

    setFrame(frame){
        this.sp_._spriteFrame = frame;
    },

    onEnable(){
        this.sp_ = this.node.getComponent(cc.Sprite);
        this.sp_._updateAssembler = this.fixUpdateAssem;
        let assem = this.sp_._assembler;
        let sframe = this.sp_._spriteFrame;
        this.sp_._assembler = {}
        this.sp_._assembler.fillBuffers = this.fixFillBuffer.bind(this);
        this.sp_._assembler.createData = assem.createData;
        this.sp_._assembler.updateVerts = assem.updateVerts;
        this.sp_._assembler.updateRenderData = assem.updateRenderData;

        this.info_ = {};
        for(var i = 0; i <= 9; i++){
            this.info_[i.toString()] = this.frames[i];
            this.sp_._spriteFrame = this.frames[i];
            this.sp_._assembler.updateRenderData(this.sp_);
        }
        for(var i = 0; i < this.others.length; i++){
            this.info_[this.others[i]] = this.frames[i+10];
            this.sp_._spriteFrame = this.frames[i+10];
            this.sp_._assembler.updateRenderData(this.sp_);
        }
        this.sp_._spriteFrame = sframe;
        this.sp_._assembler.updateRenderData(this.sp_);
    },

    fixFillBuffer(sprite, renderer){
        let len = this.string.length + 1;
        let data = sprite._renderData._data,
            node = sprite.node,
            color = node._color._val,
            matrix = node._worldMatrix,
            a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05,
            tx = matrix.m12, ty = matrix.m13,    
            buffer = renderer._meshBuffer;

        let offsetInfo = buffer.request(4*len, 6*len);

        let indiceOffset = offsetInfo.indiceOffset,
            vertexOffset = offsetInfo.byteOffset >> 2,
            vertexId = offsetInfo.vertexOffset,
            vbuf = buffer._vData,
            uintbuf = buffer._uintVData,
            ibuf = buffer._iData;

        let data0 = data[0], data3 = data[3],
            vl = data0.x, vr = data3.x,
            vb = data0.y, vt = data3.y;

        let al = a * vl, ar = a * vr,
            bl = b * vl, br = b * vr,
            cb = c * vb, ct = c * vt,
            db = d * vb, dt = d * vt;

        let pts = [];
        pts[0] = al + cb + tx; pts[1] = bl + db + ty;
        pts[2] = ar + cb + tx; pts[3] = br + db + ty;
        pts[4] = al + ct + tx; pts[5] = bl + dt + ty;
        pts[6] = ar + ct + tx; pts[7] = br + dt + ty;

        let uv = sprite._spriteFrame.uv;
        let ary = this.string.split("");
        let idx = 0, idy = 0, yus = 0;
        for(var j = 1; j < 21; j++){
            yus = j%5;
            if(yus == 0) uintbuf[vertexOffset++] = color;
            else if(yus < 3) vbuf[vertexOffset++] = pts[idx++];
            else vbuf[vertexOffset++] = uv[idy++];    
        }
        for(var i = 0; i < len; i++){
            ibuf[indiceOffset++] = vertexId;
            ibuf[indiceOffset++] = vertexId + 1;
            ibuf[indiceOffset++] = vertexId + 2;
            ibuf[indiceOffset++] = vertexId + 1;
            ibuf[indiceOffset++] = vertexId + 3;
            ibuf[indiceOffset++] = vertexId + 2;
            vertexId += 4;
        }
        if(len<2) return;

        let offs = vertexOffset,twid=0,cwid=0,chei=0,
            sx = this.node._scale.x,
            sy = this.node._scale.y,
            prew = sprite._spriteFrame._rect.width,
            preh = sprite._spriteFrame._rect.height,
            ctx=(pts[6]+pts[0])*0.5,
            cty=(pts[7]+pts[1])*0.5;

        for(var i=0; i<len-1; i++){
            let frame = this.info_[ary[i]];
            idx = 0; idy = 0; yus = 0;
            uv = frame.uv;
            cwid = frame._rect.width*sx;
            chei = frame._rect.height*sy;
            pts[0] = twid + ctx;    pts[1] = cty-chei*0.5;
            pts[2] = pts[0]+cwid;   pts[3] = pts[1];
            pts[4] = pts[0];        pts[5] = cty+chei*0.5;
            pts[6] = pts[2];        pts[7] = pts[5];
            twid += cwid;
             for(var j = 1; j < 21; j++){
                yus = j%5;
                if(yus == 0) uintbuf[vertexOffset++] = color;
                else if(yus < 3) vbuf[vertexOffset++] = pts[idx++];
                else vbuf[vertexOffset++] = uv[idy++];    
            }
        }

        let sa=b/sx,ca=d/sy,halfwid=twid*0.5,px=0,py=0;
        for(var i = 0; i < len-1; i++){
            for(var j = 0; j < 4; j++){
                px = vbuf[offs] - halfwid;
                py = vbuf[offs + 1];
                vbuf[offs] = (px-ctx)*ca-(py-cty)*sa+ctx;
                vbuf[offs+1] = (py-cty)*ca+(px-ctx)*sa+cty;
                offs += 5;
            }
        }
    },


    fixUpdateAssem(){

    },
});
