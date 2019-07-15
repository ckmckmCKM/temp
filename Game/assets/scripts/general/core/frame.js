/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * MSGTYPE enum.
 * @exports MSGTYPE
 * @enum {string}
 * @property {number} VOID=0 VOID value
 * @property {number} MAINCMD=1 MAINCMD value
 * @property {number} SUBCMD=2 SUBCMD value
 */
$root.MSGTYPE = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "VOID"] = 0;
    values[valuesById[1] = "MAINCMD"] = 1;
    values[valuesById[2] = "SUBCMD"] = 2;
    return values;
})();

/**
 * MSGKIND enum.
 * @exports MSGKIND
 * @enum {string}
 * @property {number} VOID1=0 VOID1 value
 * @property {number} LOGIN=1 LOGIN value
 * @property {number} MATCH=2 MATCH value
 * @property {number} READY=3 READY value
 * @property {number} START=4 START value
 * @property {number} END=5 END value
 * @property {number} LEAVE=6 LEAVE value
 */
$root.MSGKIND = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "VOID1"] = 0;
    values[valuesById[1] = "LOGIN"] = 1;
    values[valuesById[2] = "MATCH"] = 2;
    values[valuesById[3] = "READY"] = 3;
    values[valuesById[4] = "START"] = 4;
    values[valuesById[5] = "END"] = 5;
    values[valuesById[6] = "LEAVE"] = 6;
    return values;
})();

/**
 * RESULT enum.
 * @exports RESULT
 * @enum {string}
 * @property {number} VOID2=0 VOID2 value
 * @property {number} SUCCESS=1 SUCCESS value
 * @property {number} ERROR=2 ERROR value
 */
$root.RESULT = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "VOID2"] = 0;
    values[valuesById[1] = "SUCCESS"] = 1;
    values[valuesById[2] = "ERROR"] = 2;
    return values;
})();

/**
 * ErrorType enum.
 * @exports ErrorType
 * @enum {string}
 * @property {number} VOID3=0 VOID3 value
 * @property {number} LoginFaild=1 LoginFaild value
 */
$root.ErrorType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "VOID3"] = 0;
    values[valuesById[1] = "LoginFaild"] = 1;
    return values;
})();

$root.FrameMsg = (function() {

    /**
     * Properties of a FrameMsg.
     * @exports IFrameMsg
     * @interface IFrameMsg
     * @property {number|null} [mainCmd] FrameMsg mainCmd
     * @property {number|null} [subCmd] FrameMsg subCmd
     * @property {Uint8Array|null} [buff] FrameMsg buff
     */

    /**
     * Constructs a new FrameMsg.
     * @exports FrameMsg
     * @classdesc Represents a FrameMsg.
     * @implements IFrameMsg
     * @constructor
     * @param {IFrameMsg=} [properties] Properties to set
     */
    function FrameMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameMsg mainCmd.
     * @member {number} mainCmd
     * @memberof FrameMsg
     * @instance
     */
    FrameMsg.prototype.mainCmd = 0;

    /**
     * FrameMsg subCmd.
     * @member {number} subCmd
     * @memberof FrameMsg
     * @instance
     */
    FrameMsg.prototype.subCmd = 0;

    /**
     * FrameMsg buff.
     * @member {Uint8Array} buff
     * @memberof FrameMsg
     * @instance
     */
    FrameMsg.prototype.buff = $util.newBuffer([]);

    /**
     * Creates a new FrameMsg instance using the specified properties.
     * @function create
     * @memberof FrameMsg
     * @static
     * @param {IFrameMsg=} [properties] Properties to set
     * @returns {FrameMsg} FrameMsg instance
     */
    FrameMsg.create = function create(properties) {
        return new FrameMsg(properties);
    };

    /**
     * Encodes the specified FrameMsg message. Does not implicitly {@link FrameMsg.verify|verify} messages.
     * @function encode
     * @memberof FrameMsg
     * @static
     * @param {IFrameMsg} message FrameMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mainCmd != null && message.hasOwnProperty("mainCmd"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mainCmd);
        if (message.subCmd != null && message.hasOwnProperty("subCmd"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.subCmd);
        if (message.buff != null && message.hasOwnProperty("buff"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.buff);
        return writer;
    };

    /**
     * Encodes the specified FrameMsg message, length delimited. Does not implicitly {@link FrameMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameMsg
     * @static
     * @param {IFrameMsg} message FrameMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameMsg message from the specified reader or buffer.
     * @function decode
     * @memberof FrameMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameMsg} FrameMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mainCmd = reader.int32();
                break;
            case 2:
                message.subCmd = reader.int32();
                break;
            case 3:
                message.buff = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameMsg} FrameMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameMsg message.
     * @function verify
     * @memberof FrameMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mainCmd != null && message.hasOwnProperty("mainCmd"))
            if (!$util.isInteger(message.mainCmd))
                return "mainCmd: integer expected";
        if (message.subCmd != null && message.hasOwnProperty("subCmd"))
            if (!$util.isInteger(message.subCmd))
                return "subCmd: integer expected";
        if (message.buff != null && message.hasOwnProperty("buff"))
            if (!(message.buff && typeof message.buff.length === "number" || $util.isString(message.buff)))
                return "buff: buffer expected";
        return null;
    };

    /**
     * Creates a FrameMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameMsg} FrameMsg
     */
    FrameMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameMsg)
            return object;
        var message = new $root.FrameMsg();
        if (object.mainCmd != null)
            message.mainCmd = object.mainCmd | 0;
        if (object.subCmd != null)
            message.subCmd = object.subCmd | 0;
        if (object.buff != null)
            if (typeof object.buff === "string")
                $util.base64.decode(object.buff, message.buff = $util.newBuffer($util.base64.length(object.buff)), 0);
            else if (object.buff.length)
                message.buff = object.buff;
        return message;
    };

    /**
     * Creates a plain object from a FrameMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameMsg
     * @static
     * @param {FrameMsg} message FrameMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mainCmd = 0;
            object.subCmd = 0;
            if (options.bytes === String)
                object.buff = "";
            else {
                object.buff = [];
                if (options.bytes !== Array)
                    object.buff = $util.newBuffer(object.buff);
            }
        }
        if (message.mainCmd != null && message.hasOwnProperty("mainCmd"))
            object.mainCmd = message.mainCmd;
        if (message.subCmd != null && message.hasOwnProperty("subCmd"))
            object.subCmd = message.subCmd;
        if (message.buff != null && message.hasOwnProperty("buff"))
            object.buff = options.bytes === String ? $util.base64.encode(message.buff, 0, message.buff.length) : options.bytes === Array ? Array.prototype.slice.call(message.buff) : message.buff;
        return object;
    };

    /**
     * Converts this FrameMsg to JSON.
     * @function toJSON
     * @memberof FrameMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FrameMsg;
})();

$root.S2CGeneralError = (function() {

    /**
     * Properties of a S2CGeneralError.
     * @exports IS2CGeneralError
     * @interface IS2CGeneralError
     * @property {ErrorType|null} [eType] S2CGeneralError eType
     * @property {string|null} [descript] S2CGeneralError descript
     */

    /**
     * Constructs a new S2CGeneralError.
     * @exports S2CGeneralError
     * @classdesc Represents a S2CGeneralError.
     * @implements IS2CGeneralError
     * @constructor
     * @param {IS2CGeneralError=} [properties] Properties to set
     */
    function S2CGeneralError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGeneralError eType.
     * @member {ErrorType} eType
     * @memberof S2CGeneralError
     * @instance
     */
    S2CGeneralError.prototype.eType = 0;

    /**
     * S2CGeneralError descript.
     * @member {string} descript
     * @memberof S2CGeneralError
     * @instance
     */
    S2CGeneralError.prototype.descript = "";

    /**
     * Creates a new S2CGeneralError instance using the specified properties.
     * @function create
     * @memberof S2CGeneralError
     * @static
     * @param {IS2CGeneralError=} [properties] Properties to set
     * @returns {S2CGeneralError} S2CGeneralError instance
     */
    S2CGeneralError.create = function create(properties) {
        return new S2CGeneralError(properties);
    };

    /**
     * Encodes the specified S2CGeneralError message. Does not implicitly {@link S2CGeneralError.verify|verify} messages.
     * @function encode
     * @memberof S2CGeneralError
     * @static
     * @param {IS2CGeneralError} message S2CGeneralError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGeneralError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.eType != null && message.hasOwnProperty("eType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eType);
        if (message.descript != null && message.hasOwnProperty("descript"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.descript);
        return writer;
    };

    /**
     * Encodes the specified S2CGeneralError message, length delimited. Does not implicitly {@link S2CGeneralError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGeneralError
     * @static
     * @param {IS2CGeneralError} message S2CGeneralError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGeneralError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGeneralError message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGeneralError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGeneralError} S2CGeneralError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGeneralError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGeneralError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.eType = reader.int32();
                break;
            case 2:
                message.descript = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGeneralError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGeneralError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGeneralError} S2CGeneralError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGeneralError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGeneralError message.
     * @function verify
     * @memberof S2CGeneralError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGeneralError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.eType != null && message.hasOwnProperty("eType"))
            switch (message.eType) {
            default:
                return "eType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.descript != null && message.hasOwnProperty("descript"))
            if (!$util.isString(message.descript))
                return "descript: string expected";
        return null;
    };

    /**
     * Creates a S2CGeneralError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGeneralError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGeneralError} S2CGeneralError
     */
    S2CGeneralError.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGeneralError)
            return object;
        var message = new $root.S2CGeneralError();
        switch (object.eType) {
        case "VOID3":
        case 0:
            message.eType = 0;
            break;
        case "LoginFaild":
        case 1:
            message.eType = 1;
            break;
        }
        if (object.descript != null)
            message.descript = String(object.descript);
        return message;
    };

    /**
     * Creates a plain object from a S2CGeneralError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGeneralError
     * @static
     * @param {S2CGeneralError} message S2CGeneralError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGeneralError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.eType = options.enums === String ? "VOID3" : 0;
            object.descript = "";
        }
        if (message.eType != null && message.hasOwnProperty("eType"))
            object.eType = options.enums === String ? $root.ErrorType[message.eType] : message.eType;
        if (message.descript != null && message.hasOwnProperty("descript"))
            object.descript = message.descript;
        return object;
    };

    /**
     * Converts this S2CGeneralError to JSON.
     * @function toJSON
     * @memberof S2CGeneralError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGeneralError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CGeneralError;
})();

$root.C2SLogin = (function() {

    /**
     * Properties of a C2SLogin.
     * @exports IC2SLogin
     * @interface IC2SLogin
     * @property {number|Long|null} [userId] C2SLogin userId
     * @property {string|null} [equipmentCode] C2SLogin equipmentCode
     * @property {string|null} [gameName] C2SLogin gameName
     */

    /**
     * Constructs a new C2SLogin.
     * @exports C2SLogin
     * @classdesc Represents a C2SLogin.
     * @implements IC2SLogin
     * @constructor
     * @param {IC2SLogin=} [properties] Properties to set
     */
    function C2SLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SLogin userId.
     * @member {number|Long} userId
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * C2SLogin equipmentCode.
     * @member {string} equipmentCode
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.equipmentCode = "";

    /**
     * C2SLogin gameName.
     * @member {string} gameName
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.gameName = "";

    /**
     * Creates a new C2SLogin instance using the specified properties.
     * @function create
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin=} [properties] Properties to set
     * @returns {C2SLogin} C2SLogin instance
     */
    C2SLogin.create = function create(properties) {
        return new C2SLogin(properties);
    };

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @function encode
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin} message C2SLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
        if (message.equipmentCode != null && message.hasOwnProperty("equipmentCode"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.equipmentCode);
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameName);
        return writer;
    };

    /**
     * Encodes the specified C2SLogin message, length delimited. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin} message C2SLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SLogin} C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int64();
                break;
            case 5:
                message.equipmentCode = reader.string();
                break;
            case 7:
                message.gameName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SLogin} C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SLogin message.
     * @function verify
     * @memberof C2SLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.equipmentCode != null && message.hasOwnProperty("equipmentCode"))
            if (!$util.isString(message.equipmentCode))
                return "equipmentCode: string expected";
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            if (!$util.isString(message.gameName))
                return "gameName: string expected";
        return null;
    };

    /**
     * Creates a C2SLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SLogin} C2SLogin
     */
    C2SLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SLogin)
            return object;
        var message = new $root.C2SLogin();
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
        if (object.equipmentCode != null)
            message.equipmentCode = String(object.equipmentCode);
        if (object.gameName != null)
            message.gameName = String(object.gameName);
        return message;
    };

    /**
     * Creates a plain object from a C2SLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SLogin
     * @static
     * @param {C2SLogin} message C2SLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.equipmentCode = "";
            object.gameName = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
        if (message.equipmentCode != null && message.hasOwnProperty("equipmentCode"))
            object.equipmentCode = message.equipmentCode;
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            object.gameName = message.gameName;
        return object;
    };

    /**
     * Converts this C2SLogin to JSON.
     * @function toJSON
     * @memberof C2SLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2SLogin;
})();

$root.S2CLogin = (function() {

    /**
     * Properties of a S2CLogin.
     * @exports IS2CLogin
     * @interface IS2CLogin
     * @property {number|null} [userId] S2CLogin userId
     */

    /**
     * Constructs a new S2CLogin.
     * @exports S2CLogin
     * @classdesc Represents a S2CLogin.
     * @implements IS2CLogin
     * @constructor
     * @param {IS2CLogin=} [properties] Properties to set
     */
    function S2CLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLogin userId.
     * @member {number} userId
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.userId = 0;

    /**
     * Creates a new S2CLogin instance using the specified properties.
     * @function create
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin=} [properties] Properties to set
     * @returns {S2CLogin} S2CLogin instance
     */
    S2CLogin.create = function create(properties) {
        return new S2CLogin(properties);
    };

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @function encode
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin} message S2CLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        return writer;
    };

    /**
     * Encodes the specified S2CLogin message, length delimited. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin} message S2CLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLogin} S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLogin} S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLogin message.
     * @function verify
     * @memberof S2CLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        return null;
    };

    /**
     * Creates a S2CLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLogin} S2CLogin
     */
    S2CLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLogin)
            return object;
        var message = new $root.S2CLogin();
        if (object.userId != null)
            message.userId = object.userId | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLogin
     * @static
     * @param {S2CLogin} message S2CLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userId = 0;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this S2CLogin to JSON.
     * @function toJSON
     * @memberof S2CLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CLogin;
})();

$root.S2CMatch = (function() {

    /**
     * Properties of a S2CMatch.
     * @exports IS2CMatch
     * @interface IS2CMatch
     * @property {number|null} [userId] S2CMatch userId
     * @property {number|null} [result] S2CMatch result
     * @property {number|null} [tableNum] S2CMatch tableNum
     * @property {number|null} [chairNum] S2CMatch chairNum
     */

    /**
     * Constructs a new S2CMatch.
     * @exports S2CMatch
     * @classdesc Represents a S2CMatch.
     * @implements IS2CMatch
     * @constructor
     * @param {IS2CMatch=} [properties] Properties to set
     */
    function S2CMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMatch userId.
     * @member {number} userId
     * @memberof S2CMatch
     * @instance
     */
    S2CMatch.prototype.userId = 0;

    /**
     * S2CMatch result.
     * @member {number} result
     * @memberof S2CMatch
     * @instance
     */
    S2CMatch.prototype.result = 0;

    /**
     * S2CMatch tableNum.
     * @member {number} tableNum
     * @memberof S2CMatch
     * @instance
     */
    S2CMatch.prototype.tableNum = 0;

    /**
     * S2CMatch chairNum.
     * @member {number} chairNum
     * @memberof S2CMatch
     * @instance
     */
    S2CMatch.prototype.chairNum = 0;

    /**
     * Creates a new S2CMatch instance using the specified properties.
     * @function create
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch=} [properties] Properties to set
     * @returns {S2CMatch} S2CMatch instance
     */
    S2CMatch.create = function create(properties) {
        return new S2CMatch(properties);
    };

    /**
     * Encodes the specified S2CMatch message. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @function encode
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch} message S2CMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        if (message.tableNum != null && message.hasOwnProperty("tableNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tableNum);
        if (message.chairNum != null && message.hasOwnProperty("chairNum"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.chairNum);
        return writer;
    };

    /**
     * Encodes the specified S2CMatch message, length delimited. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch} message S2CMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMatch message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMatch} S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.result = reader.int32();
                break;
            case 3:
                message.tableNum = reader.int32();
                break;
            case 4:
                message.chairNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMatch} S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMatch message.
     * @function verify
     * @memberof S2CMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isInteger(message.result))
                return "result: integer expected";
        if (message.tableNum != null && message.hasOwnProperty("tableNum"))
            if (!$util.isInteger(message.tableNum))
                return "tableNum: integer expected";
        if (message.chairNum != null && message.hasOwnProperty("chairNum"))
            if (!$util.isInteger(message.chairNum))
                return "chairNum: integer expected";
        return null;
    };

    /**
     * Creates a S2CMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMatch} S2CMatch
     */
    S2CMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMatch)
            return object;
        var message = new $root.S2CMatch();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.result != null)
            message.result = object.result | 0;
        if (object.tableNum != null)
            message.tableNum = object.tableNum | 0;
        if (object.chairNum != null)
            message.chairNum = object.chairNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMatch
     * @static
     * @param {S2CMatch} message S2CMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.result = 0;
            object.tableNum = 0;
            object.chairNum = 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.tableNum != null && message.hasOwnProperty("tableNum"))
            object.tableNum = message.tableNum;
        if (message.chairNum != null && message.hasOwnProperty("chairNum"))
            object.chairNum = message.chairNum;
        return object;
    };

    /**
     * Converts this S2CMatch to JSON.
     * @function toJSON
     * @memberof S2CMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CMatch;
})();

$root.S2CTest = (function() {

    /**
     * Properties of a S2CTest.
     * @exports IS2CTest
     * @interface IS2CTest
     * @property {number|null} [userId] S2CTest userId
     */

    /**
     * Constructs a new S2CTest.
     * @exports S2CTest
     * @classdesc Represents a S2CTest.
     * @implements IS2CTest
     * @constructor
     * @param {IS2CTest=} [properties] Properties to set
     */
    function S2CTest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CTest userId.
     * @member {number} userId
     * @memberof S2CTest
     * @instance
     */
    S2CTest.prototype.userId = 0;

    /**
     * Creates a new S2CTest instance using the specified properties.
     * @function create
     * @memberof S2CTest
     * @static
     * @param {IS2CTest=} [properties] Properties to set
     * @returns {S2CTest} S2CTest instance
     */
    S2CTest.create = function create(properties) {
        return new S2CTest(properties);
    };

    /**
     * Encodes the specified S2CTest message. Does not implicitly {@link S2CTest.verify|verify} messages.
     * @function encode
     * @memberof S2CTest
     * @static
     * @param {IS2CTest} message S2CTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        return writer;
    };

    /**
     * Encodes the specified S2CTest message, length delimited. Does not implicitly {@link S2CTest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CTest
     * @static
     * @param {IS2CTest} message S2CTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CTest message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CTest} S2CTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CTest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CTest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CTest} S2CTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CTest message.
     * @function verify
     * @memberof S2CTest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CTest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        return null;
    };

    /**
     * Creates a S2CTest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CTest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CTest} S2CTest
     */
    S2CTest.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CTest)
            return object;
        var message = new $root.S2CTest();
        if (object.userId != null)
            message.userId = object.userId | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CTest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CTest
     * @static
     * @param {S2CTest} message S2CTest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CTest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userId = 0;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this S2CTest to JSON.
     * @function toJSON
     * @memberof S2CTest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CTest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CTest;
})();

module.exports = $root;
