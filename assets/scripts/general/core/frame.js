/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PbFrame = (function() {

    /**
     * Namespace PbFrame.
     * @exports PbFrame
     * @namespace
     */
    var PbFrame = {};

    /**
     * MSGTYPE enum.
     * @name PbFrame.MSGTYPE
     * @enum {string}
     * @property {number} VOID=0 VOID value
     * @property {number} MAINCMD=1 MAINCMD value
     * @property {number} SUBCMD=2 SUBCMD value
     */
    PbFrame.MSGTYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "VOID"] = 0;
        values[valuesById[1] = "MAINCMD"] = 1;
        values[valuesById[2] = "SUBCMD"] = 2;
        return values;
    })();

    /**
     * ErrorType enum.
     * @name PbFrame.ErrorType
     * @enum {string}
     * @property {number} VOID3=0 VOID3 value
     * @property {number} LoginFaild=1 LoginFaild value
     * @property {number} MatchFaild=2 MatchFaild value
     * @property {number} ServefError=3 ServefError value
     * @property {number} ServerFull=4 ServerFull value
     * @property {number} EntranceRestrict=5 EntranceRestrict value
     * @property {number} Kicked=6 Kicked value
     * @property {number} ShutDown=7 ShutDown value
     */
    PbFrame.ErrorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "VOID3"] = 0;
        values[valuesById[1] = "LoginFaild"] = 1;
        values[valuesById[2] = "MatchFaild"] = 2;
        values[valuesById[3] = "ServefError"] = 3;
        values[valuesById[4] = "ServerFull"] = 4;
        values[valuesById[5] = "EntranceRestrict"] = 5;
        values[valuesById[6] = "Kicked"] = 6;
        values[valuesById[7] = "ShutDown"] = 7;
        return values;
    })();

    /**
     * MSGKIND enum.
     * @name PbFrame.MSGKIND
     * @enum {string}
     * @property {number} VOID1=0 VOID1 value
     * @property {number} LOGIN=1 LOGIN value
     * @property {number} MATCH=2 MATCH value
     * @property {number} READY=3 READY value
     * @property {number} START=4 START value
     * @property {number} END=5 END value
     * @property {number} LEAVE=6 LEAVE value
     * @property {number} GAME=7 GAME value
     * @property {number} ROBOT=8 ROBOT value
     * @property {number} CONFIG=9 CONFIG value
     * @property {number} ERROR=10 ERROR value
     * @property {number} HANDSEL=11 HANDSEL value
     */
    PbFrame.MSGKIND = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "VOID1"] = 0;
        values[valuesById[1] = "LOGIN"] = 1;
        values[valuesById[2] = "MATCH"] = 2;
        values[valuesById[3] = "READY"] = 3;
        values[valuesById[4] = "START"] = 4;
        values[valuesById[5] = "END"] = 5;
        values[valuesById[6] = "LEAVE"] = 6;
        values[valuesById[7] = "GAME"] = 7;
        values[valuesById[8] = "ROBOT"] = 8;
        values[valuesById[9] = "CONFIG"] = 9;
        values[valuesById[10] = "ERROR"] = 10;
        values[valuesById[11] = "HANDSEL"] = 11;
        return values;
    })();

    PbFrame.FrameMsg = (function() {

        /**
         * Properties of a FrameMsg.
         * @memberof PbFrame
         * @interface IFrameMsg
         * @property {number|null} [mainCmd] FrameMsg mainCmd
         * @property {number|null} [subCmd] FrameMsg subCmd
         * @property {Uint8Array|null} [buff] FrameMsg buff
         * @property {number|Long|null} [Time] FrameMsg Time
         */

        /**
         * Constructs a new FrameMsg.
         * @memberof PbFrame
         * @classdesc Represents a FrameMsg.
         * @implements IFrameMsg
         * @constructor
         * @param {PbFrame.IFrameMsg=} [properties] Properties to set
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
         * @memberof PbFrame.FrameMsg
         * @instance
         */
        FrameMsg.prototype.mainCmd = 0;

        /**
         * FrameMsg subCmd.
         * @member {number} subCmd
         * @memberof PbFrame.FrameMsg
         * @instance
         */
        FrameMsg.prototype.subCmd = 0;

        /**
         * FrameMsg buff.
         * @member {Uint8Array} buff
         * @memberof PbFrame.FrameMsg
         * @instance
         */
        FrameMsg.prototype.buff = $util.newBuffer([]);

        /**
         * FrameMsg Time.
         * @member {number|Long} Time
         * @memberof PbFrame.FrameMsg
         * @instance
         */
        FrameMsg.prototype.Time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FrameMsg instance using the specified properties.
         * @function create
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {PbFrame.IFrameMsg=} [properties] Properties to set
         * @returns {PbFrame.FrameMsg} FrameMsg instance
         */
        FrameMsg.create = function create(properties) {
            return new FrameMsg(properties);
        };

        /**
         * Encodes the specified FrameMsg message. Does not implicitly {@link PbFrame.FrameMsg.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {PbFrame.IFrameMsg} message FrameMsg message or plain object to encode
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
            if (message.Time != null && message.hasOwnProperty("Time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Time);
            return writer;
        };

        /**
         * Encodes the specified FrameMsg message, length delimited. Does not implicitly {@link PbFrame.FrameMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {PbFrame.IFrameMsg} message FrameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.FrameMsg} FrameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.FrameMsg();
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
                case 4:
                    message.Time = reader.int64();
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
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.FrameMsg} FrameMsg
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
         * @memberof PbFrame.FrameMsg
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
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (!$util.isInteger(message.Time) && !(message.Time && $util.isInteger(message.Time.low) && $util.isInteger(message.Time.high)))
                    return "Time: integer|Long expected";
            return null;
        };

        /**
         * Creates a FrameMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.FrameMsg} FrameMsg
         */
        FrameMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.FrameMsg)
                return object;
            var message = new $root.PbFrame.FrameMsg();
            if (object.mainCmd != null)
                message.mainCmd = object.mainCmd | 0;
            if (object.subCmd != null)
                message.subCmd = object.subCmd | 0;
            if (object.buff != null)
                if (typeof object.buff === "string")
                    $util.base64.decode(object.buff, message.buff = $util.newBuffer($util.base64.length(object.buff)), 0);
                else if (object.buff.length)
                    message.buff = object.buff;
            if (object.Time != null)
                if ($util.Long)
                    (message.Time = $util.Long.fromValue(object.Time)).unsigned = false;
                else if (typeof object.Time === "string")
                    message.Time = parseInt(object.Time, 10);
                else if (typeof object.Time === "number")
                    message.Time = object.Time;
                else if (typeof object.Time === "object")
                    message.Time = new $util.LongBits(object.Time.low >>> 0, object.Time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FrameMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.FrameMsg
         * @static
         * @param {PbFrame.FrameMsg} message FrameMsg
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Time = options.longs === String ? "0" : 0;
            }
            if (message.mainCmd != null && message.hasOwnProperty("mainCmd"))
                object.mainCmd = message.mainCmd;
            if (message.subCmd != null && message.hasOwnProperty("subCmd"))
                object.subCmd = message.subCmd;
            if (message.buff != null && message.hasOwnProperty("buff"))
                object.buff = options.bytes === String ? $util.base64.encode(message.buff, 0, message.buff.length) : options.bytes === Array ? Array.prototype.slice.call(message.buff) : message.buff;
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (typeof message.Time === "number")
                    object.Time = options.longs === String ? String(message.Time) : message.Time;
                else
                    object.Time = options.longs === String ? $util.Long.prototype.toString.call(message.Time) : options.longs === Number ? new $util.LongBits(message.Time.low >>> 0, message.Time.high >>> 0).toNumber() : message.Time;
            return object;
        };

        /**
         * Converts this FrameMsg to JSON.
         * @function toJSON
         * @memberof PbFrame.FrameMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrameMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FrameMsg;
    })();

    PbFrame.S2CGeneralError = (function() {

        /**
         * Properties of a S2CGeneralError.
         * @memberof PbFrame
         * @interface IS2CGeneralError
         * @property {PbFrame.ErrorType|null} [eType] S2CGeneralError eType
         * @property {string|null} [descript] S2CGeneralError descript
         */

        /**
         * Constructs a new S2CGeneralError.
         * @memberof PbFrame
         * @classdesc Represents a S2CGeneralError.
         * @implements IS2CGeneralError
         * @constructor
         * @param {PbFrame.IS2CGeneralError=} [properties] Properties to set
         */
        function S2CGeneralError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CGeneralError eType.
         * @member {PbFrame.ErrorType} eType
         * @memberof PbFrame.S2CGeneralError
         * @instance
         */
        S2CGeneralError.prototype.eType = 0;

        /**
         * S2CGeneralError descript.
         * @member {string} descript
         * @memberof PbFrame.S2CGeneralError
         * @instance
         */
        S2CGeneralError.prototype.descript = "";

        /**
         * Creates a new S2CGeneralError instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {PbFrame.IS2CGeneralError=} [properties] Properties to set
         * @returns {PbFrame.S2CGeneralError} S2CGeneralError instance
         */
        S2CGeneralError.create = function create(properties) {
            return new S2CGeneralError(properties);
        };

        /**
         * Encodes the specified S2CGeneralError message. Does not implicitly {@link PbFrame.S2CGeneralError.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {PbFrame.IS2CGeneralError} message S2CGeneralError message or plain object to encode
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
         * Encodes the specified S2CGeneralError message, length delimited. Does not implicitly {@link PbFrame.S2CGeneralError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {PbFrame.IS2CGeneralError} message S2CGeneralError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CGeneralError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CGeneralError message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CGeneralError} S2CGeneralError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CGeneralError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CGeneralError();
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
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CGeneralError} S2CGeneralError
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
         * @memberof PbFrame.S2CGeneralError
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
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
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
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CGeneralError} S2CGeneralError
         */
        S2CGeneralError.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CGeneralError)
                return object;
            var message = new $root.PbFrame.S2CGeneralError();
            switch (object.eType) {
            case "VOID3":
            case 0:
                message.eType = 0;
                break;
            case "LoginFaild":
            case 1:
                message.eType = 1;
                break;
            case "MatchFaild":
            case 2:
                message.eType = 2;
                break;
            case "ServefError":
            case 3:
                message.eType = 3;
                break;
            case "ServerFull":
            case 4:
                message.eType = 4;
                break;
            case "EntranceRestrict":
            case 5:
                message.eType = 5;
                break;
            case "Kicked":
            case 6:
                message.eType = 6;
                break;
            case "ShutDown":
            case 7:
                message.eType = 7;
                break;
            }
            if (object.descript != null)
                message.descript = String(object.descript);
            return message;
        };

        /**
         * Creates a plain object from a S2CGeneralError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CGeneralError
         * @static
         * @param {PbFrame.S2CGeneralError} message S2CGeneralError
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
                object.eType = options.enums === String ? $root.PbFrame.ErrorType[message.eType] : message.eType;
            if (message.descript != null && message.hasOwnProperty("descript"))
                object.descript = message.descript;
            return object;
        };

        /**
         * Converts this S2CGeneralError to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CGeneralError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CGeneralError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CGeneralError;
    })();

    PbFrame.S2CReady = (function() {

        /**
         * Properties of a S2CReady.
         * @memberof PbFrame
         * @interface IS2CReady
         * @property {number|Long|null} [userId] S2CReady userId
         */

        /**
         * Constructs a new S2CReady.
         * @memberof PbFrame
         * @classdesc Represents a S2CReady.
         * @implements IS2CReady
         * @constructor
         * @param {PbFrame.IS2CReady=} [properties] Properties to set
         */
        function S2CReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CReady userId.
         * @member {number|Long} userId
         * @memberof PbFrame.S2CReady
         * @instance
         */
        S2CReady.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2CReady instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CReady
         * @static
         * @param {PbFrame.IS2CReady=} [properties] Properties to set
         * @returns {PbFrame.S2CReady} S2CReady instance
         */
        S2CReady.create = function create(properties) {
            return new S2CReady(properties);
        };

        /**
         * Encodes the specified S2CReady message. Does not implicitly {@link PbFrame.S2CReady.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CReady
         * @static
         * @param {PbFrame.IS2CReady} message S2CReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified S2CReady message, length delimited. Does not implicitly {@link PbFrame.S2CReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CReady
         * @static
         * @param {PbFrame.IS2CReady} message S2CReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CReady message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CReady} S2CReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.S2CReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CReady} S2CReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CReady message.
         * @function verify
         * @memberof PbFrame.S2CReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a S2CReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CReady} S2CReady
         */
        S2CReady.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CReady)
                return object;
            var message = new $root.PbFrame.S2CReady();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a S2CReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CReady
         * @static
         * @param {PbFrame.S2CReady} message S2CReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this S2CReady to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CReady;
    })();

    PbFrame.Handsel = (function() {

        /**
         * Properties of a Handsel.
         * @memberof PbFrame
         * @interface IHandsel
         * @property {number|Long|null} [roomid] Handsel roomid
         * @property {number|Long|null} [curr] Handsel curr
         */

        /**
         * Constructs a new Handsel.
         * @memberof PbFrame
         * @classdesc Represents a Handsel.
         * @implements IHandsel
         * @constructor
         * @param {PbFrame.IHandsel=} [properties] Properties to set
         */
        function Handsel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Handsel roomid.
         * @member {number|Long} roomid
         * @memberof PbFrame.Handsel
         * @instance
         */
        Handsel.prototype.roomid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Handsel curr.
         * @member {number|Long} curr
         * @memberof PbFrame.Handsel
         * @instance
         */
        Handsel.prototype.curr = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Handsel instance using the specified properties.
         * @function create
         * @memberof PbFrame.Handsel
         * @static
         * @param {PbFrame.IHandsel=} [properties] Properties to set
         * @returns {PbFrame.Handsel} Handsel instance
         */
        Handsel.create = function create(properties) {
            return new Handsel(properties);
        };

        /**
         * Encodes the specified Handsel message. Does not implicitly {@link PbFrame.Handsel.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.Handsel
         * @static
         * @param {PbFrame.IHandsel} message Handsel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Handsel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomid);
            if (message.curr != null && message.hasOwnProperty("curr"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.curr);
            return writer;
        };

        /**
         * Encodes the specified Handsel message, length delimited. Does not implicitly {@link PbFrame.Handsel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.Handsel
         * @static
         * @param {PbFrame.IHandsel} message Handsel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Handsel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Handsel message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.Handsel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.Handsel} Handsel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Handsel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.Handsel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomid = reader.int64();
                    break;
                case 2:
                    message.curr = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Handsel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.Handsel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.Handsel} Handsel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Handsel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Handsel message.
         * @function verify
         * @memberof PbFrame.Handsel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Handsel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isInteger(message.roomid) && !(message.roomid && $util.isInteger(message.roomid.low) && $util.isInteger(message.roomid.high)))
                    return "roomid: integer|Long expected";
            if (message.curr != null && message.hasOwnProperty("curr"))
                if (!$util.isInteger(message.curr) && !(message.curr && $util.isInteger(message.curr.low) && $util.isInteger(message.curr.high)))
                    return "curr: integer|Long expected";
            return null;
        };

        /**
         * Creates a Handsel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.Handsel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.Handsel} Handsel
         */
        Handsel.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.Handsel)
                return object;
            var message = new $root.PbFrame.Handsel();
            if (object.roomid != null)
                if ($util.Long)
                    (message.roomid = $util.Long.fromValue(object.roomid)).unsigned = false;
                else if (typeof object.roomid === "string")
                    message.roomid = parseInt(object.roomid, 10);
                else if (typeof object.roomid === "number")
                    message.roomid = object.roomid;
                else if (typeof object.roomid === "object")
                    message.roomid = new $util.LongBits(object.roomid.low >>> 0, object.roomid.high >>> 0).toNumber();
            if (object.curr != null)
                if ($util.Long)
                    (message.curr = $util.Long.fromValue(object.curr)).unsigned = false;
                else if (typeof object.curr === "string")
                    message.curr = parseInt(object.curr, 10);
                else if (typeof object.curr === "number")
                    message.curr = object.curr;
                else if (typeof object.curr === "object")
                    message.curr = new $util.LongBits(object.curr.low >>> 0, object.curr.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Handsel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.Handsel
         * @static
         * @param {PbFrame.Handsel} message Handsel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Handsel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.curr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.curr = options.longs === String ? "0" : 0;
            }
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (typeof message.roomid === "number")
                    object.roomid = options.longs === String ? String(message.roomid) : message.roomid;
                else
                    object.roomid = options.longs === String ? $util.Long.prototype.toString.call(message.roomid) : options.longs === Number ? new $util.LongBits(message.roomid.low >>> 0, message.roomid.high >>> 0).toNumber() : message.roomid;
            if (message.curr != null && message.hasOwnProperty("curr"))
                if (typeof message.curr === "number")
                    object.curr = options.longs === String ? String(message.curr) : message.curr;
                else
                    object.curr = options.longs === String ? $util.Long.prototype.toString.call(message.curr) : options.longs === Number ? new $util.LongBits(message.curr.low >>> 0, message.curr.high >>> 0).toNumber() : message.curr;
            return object;
        };

        /**
         * Converts this Handsel to JSON.
         * @function toJSON
         * @memberof PbFrame.Handsel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Handsel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Handsel;
    })();

    PbFrame.S2CHandsel = (function() {

        /**
         * Properties of a S2CHandsel.
         * @memberof PbFrame
         * @interface IS2CHandsel
         * @property {Array.<PbFrame.IHandsel>|null} [Handsels] S2CHandsel Handsels
         */

        /**
         * Constructs a new S2CHandsel.
         * @memberof PbFrame
         * @classdesc Represents a S2CHandsel.
         * @implements IS2CHandsel
         * @constructor
         * @param {PbFrame.IS2CHandsel=} [properties] Properties to set
         */
        function S2CHandsel(properties) {
            this.Handsels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CHandsel Handsels.
         * @member {Array.<PbFrame.IHandsel>} Handsels
         * @memberof PbFrame.S2CHandsel
         * @instance
         */
        S2CHandsel.prototype.Handsels = $util.emptyArray;

        /**
         * Creates a new S2CHandsel instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {PbFrame.IS2CHandsel=} [properties] Properties to set
         * @returns {PbFrame.S2CHandsel} S2CHandsel instance
         */
        S2CHandsel.create = function create(properties) {
            return new S2CHandsel(properties);
        };

        /**
         * Encodes the specified S2CHandsel message. Does not implicitly {@link PbFrame.S2CHandsel.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {PbFrame.IS2CHandsel} message S2CHandsel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CHandsel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Handsels != null && message.Handsels.length)
                for (var i = 0; i < message.Handsels.length; ++i)
                    $root.PbFrame.Handsel.encode(message.Handsels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2CHandsel message, length delimited. Does not implicitly {@link PbFrame.S2CHandsel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {PbFrame.IS2CHandsel} message S2CHandsel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CHandsel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CHandsel message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CHandsel} S2CHandsel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CHandsel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CHandsel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Handsels && message.Handsels.length))
                        message.Handsels = [];
                    message.Handsels.push($root.PbFrame.Handsel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CHandsel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CHandsel} S2CHandsel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CHandsel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CHandsel message.
         * @function verify
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CHandsel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Handsels != null && message.hasOwnProperty("Handsels")) {
                if (!Array.isArray(message.Handsels))
                    return "Handsels: array expected";
                for (var i = 0; i < message.Handsels.length; ++i) {
                    var error = $root.PbFrame.Handsel.verify(message.Handsels[i]);
                    if (error)
                        return "Handsels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a S2CHandsel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CHandsel} S2CHandsel
         */
        S2CHandsel.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CHandsel)
                return object;
            var message = new $root.PbFrame.S2CHandsel();
            if (object.Handsels) {
                if (!Array.isArray(object.Handsels))
                    throw TypeError(".PbFrame.S2CHandsel.Handsels: array expected");
                message.Handsels = [];
                for (var i = 0; i < object.Handsels.length; ++i) {
                    if (typeof object.Handsels[i] !== "object")
                        throw TypeError(".PbFrame.S2CHandsel.Handsels: object expected");
                    message.Handsels[i] = $root.PbFrame.Handsel.fromObject(object.Handsels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a S2CHandsel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CHandsel
         * @static
         * @param {PbFrame.S2CHandsel} message S2CHandsel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CHandsel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Handsels = [];
            if (message.Handsels && message.Handsels.length) {
                object.Handsels = [];
                for (var j = 0; j < message.Handsels.length; ++j)
                    object.Handsels[j] = $root.PbFrame.Handsel.toObject(message.Handsels[j], options);
            }
            return object;
        };

        /**
         * Converts this S2CHandsel to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CHandsel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CHandsel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CHandsel;
    })();

    PbFrame.Config = (function() {

        /**
         * Properties of a Config.
         * @memberof PbFrame
         * @interface IConfig
         * @property {number|Long|null} [RoomId] Config RoomId
         * @property {number|Long|null} [EntranceRestrictions] Config EntranceRestrictions
         * @property {number|Long|null} [Pool] Config Pool
         * @property {number|null} [Level] Config Level
         * @property {string|null} [AdviceConfig] Config AdviceConfig
         */

        /**
         * Constructs a new Config.
         * @memberof PbFrame
         * @classdesc Represents a Config.
         * @implements IConfig
         * @constructor
         * @param {PbFrame.IConfig=} [properties] Properties to set
         */
        function Config(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Config RoomId.
         * @member {number|Long} RoomId
         * @memberof PbFrame.Config
         * @instance
         */
        Config.prototype.RoomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Config EntranceRestrictions.
         * @member {number|Long} EntranceRestrictions
         * @memberof PbFrame.Config
         * @instance
         */
        Config.prototype.EntranceRestrictions = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Config Pool.
         * @member {number|Long} Pool
         * @memberof PbFrame.Config
         * @instance
         */
        Config.prototype.Pool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Config Level.
         * @member {number} Level
         * @memberof PbFrame.Config
         * @instance
         */
        Config.prototype.Level = 0;

        /**
         * Config AdviceConfig.
         * @member {string} AdviceConfig
         * @memberof PbFrame.Config
         * @instance
         */
        Config.prototype.AdviceConfig = "";

        /**
         * Creates a new Config instance using the specified properties.
         * @function create
         * @memberof PbFrame.Config
         * @static
         * @param {PbFrame.IConfig=} [properties] Properties to set
         * @returns {PbFrame.Config} Config instance
         */
        Config.create = function create(properties) {
            return new Config(properties);
        };

        /**
         * Encodes the specified Config message. Does not implicitly {@link PbFrame.Config.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.Config
         * @static
         * @param {PbFrame.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.RoomId);
            if (message.EntranceRestrictions != null && message.hasOwnProperty("EntranceRestrictions"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.EntranceRestrictions);
            if (message.Pool != null && message.hasOwnProperty("Pool"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Pool);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Level);
            if (message.AdviceConfig != null && message.hasOwnProperty("AdviceConfig"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.AdviceConfig);
            return writer;
        };

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link PbFrame.Config.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.Config
         * @static
         * @param {PbFrame.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.Config();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int64();
                    break;
                case 2:
                    message.EntranceRestrictions = reader.int64();
                    break;
                case 3:
                    message.Pool = reader.int64();
                    break;
                case 4:
                    message.Level = reader.int32();
                    break;
                case 5:
                    message.AdviceConfig = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Config message.
         * @function verify
         * @memberof PbFrame.Config
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Config.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId) && !(message.RoomId && $util.isInteger(message.RoomId.low) && $util.isInteger(message.RoomId.high)))
                    return "RoomId: integer|Long expected";
            if (message.EntranceRestrictions != null && message.hasOwnProperty("EntranceRestrictions"))
                if (!$util.isInteger(message.EntranceRestrictions) && !(message.EntranceRestrictions && $util.isInteger(message.EntranceRestrictions.low) && $util.isInteger(message.EntranceRestrictions.high)))
                    return "EntranceRestrictions: integer|Long expected";
            if (message.Pool != null && message.hasOwnProperty("Pool"))
                if (!$util.isInteger(message.Pool) && !(message.Pool && $util.isInteger(message.Pool.low) && $util.isInteger(message.Pool.high)))
                    return "Pool: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.AdviceConfig != null && message.hasOwnProperty("AdviceConfig"))
                if (!$util.isString(message.AdviceConfig))
                    return "AdviceConfig: string expected";
            return null;
        };

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.Config
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.Config} Config
         */
        Config.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.Config)
                return object;
            var message = new $root.PbFrame.Config();
            if (object.RoomId != null)
                if ($util.Long)
                    (message.RoomId = $util.Long.fromValue(object.RoomId)).unsigned = false;
                else if (typeof object.RoomId === "string")
                    message.RoomId = parseInt(object.RoomId, 10);
                else if (typeof object.RoomId === "number")
                    message.RoomId = object.RoomId;
                else if (typeof object.RoomId === "object")
                    message.RoomId = new $util.LongBits(object.RoomId.low >>> 0, object.RoomId.high >>> 0).toNumber();
            if (object.EntranceRestrictions != null)
                if ($util.Long)
                    (message.EntranceRestrictions = $util.Long.fromValue(object.EntranceRestrictions)).unsigned = false;
                else if (typeof object.EntranceRestrictions === "string")
                    message.EntranceRestrictions = parseInt(object.EntranceRestrictions, 10);
                else if (typeof object.EntranceRestrictions === "number")
                    message.EntranceRestrictions = object.EntranceRestrictions;
                else if (typeof object.EntranceRestrictions === "object")
                    message.EntranceRestrictions = new $util.LongBits(object.EntranceRestrictions.low >>> 0, object.EntranceRestrictions.high >>> 0).toNumber();
            if (object.Pool != null)
                if ($util.Long)
                    (message.Pool = $util.Long.fromValue(object.Pool)).unsigned = false;
                else if (typeof object.Pool === "string")
                    message.Pool = parseInt(object.Pool, 10);
                else if (typeof object.Pool === "number")
                    message.Pool = object.Pool;
                else if (typeof object.Pool === "object")
                    message.Pool = new $util.LongBits(object.Pool.low >>> 0, object.Pool.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = object.Level | 0;
            if (object.AdviceConfig != null)
                message.AdviceConfig = String(object.AdviceConfig);
            return message;
        };

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.Config
         * @static
         * @param {PbFrame.Config} message Config
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Config.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RoomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RoomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.EntranceRestrictions = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EntranceRestrictions = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Pool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Pool = options.longs === String ? "0" : 0;
                object.Level = 0;
                object.AdviceConfig = "";
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (typeof message.RoomId === "number")
                    object.RoomId = options.longs === String ? String(message.RoomId) : message.RoomId;
                else
                    object.RoomId = options.longs === String ? $util.Long.prototype.toString.call(message.RoomId) : options.longs === Number ? new $util.LongBits(message.RoomId.low >>> 0, message.RoomId.high >>> 0).toNumber() : message.RoomId;
            if (message.EntranceRestrictions != null && message.hasOwnProperty("EntranceRestrictions"))
                if (typeof message.EntranceRestrictions === "number")
                    object.EntranceRestrictions = options.longs === String ? String(message.EntranceRestrictions) : message.EntranceRestrictions;
                else
                    object.EntranceRestrictions = options.longs === String ? $util.Long.prototype.toString.call(message.EntranceRestrictions) : options.longs === Number ? new $util.LongBits(message.EntranceRestrictions.low >>> 0, message.EntranceRestrictions.high >>> 0).toNumber() : message.EntranceRestrictions;
            if (message.Pool != null && message.hasOwnProperty("Pool"))
                if (typeof message.Pool === "number")
                    object.Pool = options.longs === String ? String(message.Pool) : message.Pool;
                else
                    object.Pool = options.longs === String ? $util.Long.prototype.toString.call(message.Pool) : options.longs === Number ? new $util.LongBits(message.Pool.low >>> 0, message.Pool.high >>> 0).toNumber() : message.Pool;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.AdviceConfig != null && message.hasOwnProperty("AdviceConfig"))
                object.AdviceConfig = message.AdviceConfig;
            return object;
        };

        /**
         * Converts this Config to JSON.
         * @function toJSON
         * @memberof PbFrame.Config
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Config.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Config;
    })();

    PbFrame.S2CConfig = (function() {

        /**
         * Properties of a S2CConfig.
         * @memberof PbFrame
         * @interface IS2CConfig
         * @property {number|Long|null} [userId] S2CConfig userId
         * @property {string|null} [head] S2CConfig head
         * @property {number|Long|null} [gold] S2CConfig gold
         * @property {string|null} [nickName] S2CConfig nickName
         * @property {string|null} [sign] S2CConfig sign
         * @property {number|null} [vipLevel] S2CConfig vipLevel
         * @property {string|null} [version] S2CConfig version
         * @property {number|null} [sex] S2CConfig sex
         * @property {string|null} [address] S2CConfig address
         * @property {Array.<PbFrame.IConfig>|null} [Configs] S2CConfig Configs
         */

        /**
         * Constructs a new S2CConfig.
         * @memberof PbFrame
         * @classdesc Represents a S2CConfig.
         * @implements IS2CConfig
         * @constructor
         * @param {PbFrame.IS2CConfig=} [properties] Properties to set
         */
        function S2CConfig(properties) {
            this.Configs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CConfig userId.
         * @member {number|Long} userId
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2CConfig head.
         * @member {string} head
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.head = "";

        /**
         * S2CConfig gold.
         * @member {number|Long} gold
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2CConfig nickName.
         * @member {string} nickName
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.nickName = "";

        /**
         * S2CConfig sign.
         * @member {string} sign
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.sign = "";

        /**
         * S2CConfig vipLevel.
         * @member {number} vipLevel
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.vipLevel = 0;

        /**
         * S2CConfig version.
         * @member {string} version
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.version = "";

        /**
         * S2CConfig sex.
         * @member {number} sex
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.sex = 0;

        /**
         * S2CConfig address.
         * @member {string} address
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.address = "";

        /**
         * S2CConfig Configs.
         * @member {Array.<PbFrame.IConfig>} Configs
         * @memberof PbFrame.S2CConfig
         * @instance
         */
        S2CConfig.prototype.Configs = $util.emptyArray;

        /**
         * Creates a new S2CConfig instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {PbFrame.IS2CConfig=} [properties] Properties to set
         * @returns {PbFrame.S2CConfig} S2CConfig instance
         */
        S2CConfig.create = function create(properties) {
            return new S2CConfig(properties);
        };

        /**
         * Encodes the specified S2CConfig message. Does not implicitly {@link PbFrame.S2CConfig.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {PbFrame.IS2CConfig} message S2CConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.head != null && message.hasOwnProperty("head"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.head);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gold);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vipLevel);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.version);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sex);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.address);
            if (message.Configs != null && message.Configs.length)
                for (var i = 0; i < message.Configs.length; ++i)
                    $root.PbFrame.Config.encode(message.Configs[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2CConfig message, length delimited. Does not implicitly {@link PbFrame.S2CConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {PbFrame.IS2CConfig} message S2CConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CConfig message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CConfig} S2CConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.head = reader.string();
                    break;
                case 3:
                    message.gold = reader.int64();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                case 5:
                    message.sign = reader.string();
                    break;
                case 6:
                    message.vipLevel = reader.int32();
                    break;
                case 7:
                    message.version = reader.string();
                    break;
                case 8:
                    message.sex = reader.int32();
                    break;
                case 9:
                    message.address = reader.string();
                    break;
                case 10:
                    if (!(message.Configs && message.Configs.length))
                        message.Configs = [];
                    message.Configs.push($root.PbFrame.Config.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CConfig} S2CConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CConfig message.
         * @function verify
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                if (!$util.isInteger(message.vipLevel))
                    return "vipLevel: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.Configs != null && message.hasOwnProperty("Configs")) {
                if (!Array.isArray(message.Configs))
                    return "Configs: array expected";
                for (var i = 0; i < message.Configs.length; ++i) {
                    var error = $root.PbFrame.Config.verify(message.Configs[i]);
                    if (error)
                        return "Configs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a S2CConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CConfig} S2CConfig
         */
        S2CConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CConfig)
                return object;
            var message = new $root.PbFrame.S2CConfig();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.head != null)
                message.head = String(object.head);
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.vipLevel != null)
                message.vipLevel = object.vipLevel | 0;
            if (object.version != null)
                message.version = String(object.version);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.address != null)
                message.address = String(object.address);
            if (object.Configs) {
                if (!Array.isArray(object.Configs))
                    throw TypeError(".PbFrame.S2CConfig.Configs: array expected");
                message.Configs = [];
                for (var i = 0; i < object.Configs.length; ++i) {
                    if (typeof object.Configs[i] !== "object")
                        throw TypeError(".PbFrame.S2CConfig.Configs: object expected");
                    message.Configs[i] = $root.PbFrame.Config.fromObject(object.Configs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a S2CConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CConfig
         * @static
         * @param {PbFrame.S2CConfig} message S2CConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Configs = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.head = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
                object.nickName = "";
                object.sign = "";
                object.vipLevel = 0;
                object.version = "";
                object.sex = 0;
                object.address = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                object.vipLevel = message.vipLevel;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.Configs && message.Configs.length) {
                object.Configs = [];
                for (var j = 0; j < message.Configs.length; ++j)
                    object.Configs[j] = $root.PbFrame.Config.toObject(message.Configs[j], options);
            }
            return object;
        };

        /**
         * Converts this S2CConfig to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CConfig;
    })();

    PbFrame.C2SFMatch = (function() {

        /**
         * Properties of a C2SFMatch.
         * @memberof PbFrame
         * @interface IC2SFMatch
         * @property {number|Long|null} [RoomId] C2SFMatch RoomId
         */

        /**
         * Constructs a new C2SFMatch.
         * @memberof PbFrame
         * @classdesc Represents a C2SFMatch.
         * @implements IC2SFMatch
         * @constructor
         * @param {PbFrame.IC2SFMatch=} [properties] Properties to set
         */
        function C2SFMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2SFMatch RoomId.
         * @member {number|Long} RoomId
         * @memberof PbFrame.C2SFMatch
         * @instance
         */
        C2SFMatch.prototype.RoomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2SFMatch instance using the specified properties.
         * @function create
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {PbFrame.IC2SFMatch=} [properties] Properties to set
         * @returns {PbFrame.C2SFMatch} C2SFMatch instance
         */
        C2SFMatch.create = function create(properties) {
            return new C2SFMatch(properties);
        };

        /**
         * Encodes the specified C2SFMatch message. Does not implicitly {@link PbFrame.C2SFMatch.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {PbFrame.IC2SFMatch} message C2SFMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SFMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.RoomId);
            return writer;
        };

        /**
         * Encodes the specified C2SFMatch message, length delimited. Does not implicitly {@link PbFrame.C2SFMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {PbFrame.IC2SFMatch} message C2SFMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SFMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2SFMatch message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.C2SFMatch} C2SFMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SFMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.C2SFMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2SFMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.C2SFMatch} C2SFMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SFMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2SFMatch message.
         * @function verify
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2SFMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId) && !(message.RoomId && $util.isInteger(message.RoomId.low) && $util.isInteger(message.RoomId.high)))
                    return "RoomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2SFMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.C2SFMatch} C2SFMatch
         */
        C2SFMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.C2SFMatch)
                return object;
            var message = new $root.PbFrame.C2SFMatch();
            if (object.RoomId != null)
                if ($util.Long)
                    (message.RoomId = $util.Long.fromValue(object.RoomId)).unsigned = false;
                else if (typeof object.RoomId === "string")
                    message.RoomId = parseInt(object.RoomId, 10);
                else if (typeof object.RoomId === "number")
                    message.RoomId = object.RoomId;
                else if (typeof object.RoomId === "object")
                    message.RoomId = new $util.LongBits(object.RoomId.low >>> 0, object.RoomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2SFMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.C2SFMatch
         * @static
         * @param {PbFrame.C2SFMatch} message C2SFMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2SFMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RoomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RoomId = options.longs === String ? "0" : 0;
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (typeof message.RoomId === "number")
                    object.RoomId = options.longs === String ? String(message.RoomId) : message.RoomId;
                else
                    object.RoomId = options.longs === String ? $util.Long.prototype.toString.call(message.RoomId) : options.longs === Number ? new $util.LongBits(message.RoomId.low >>> 0, message.RoomId.high >>> 0).toNumber() : message.RoomId;
            return object;
        };

        /**
         * Converts this C2SFMatch to JSON.
         * @function toJSON
         * @memberof PbFrame.C2SFMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2SFMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2SFMatch;
    })();

    PbFrame.S2CEnter = (function() {

        /**
         * Properties of a S2CEnter.
         * @memberof PbFrame
         * @interface IS2CEnter
         * @property {number|Long|null} [userId] S2CEnter userId
         * @property {string|null} [head] S2CEnter head
         * @property {number|Long|null} [gold] S2CEnter gold
         * @property {string|null} [nickName] S2CEnter nickName
         * @property {string|null} [sign] S2CEnter sign
         * @property {number|null} [tableId] S2CEnter tableId
         * @property {number|null} [setId] S2CEnter setId
         */

        /**
         * Constructs a new S2CEnter.
         * @memberof PbFrame
         * @classdesc Represents a S2CEnter.
         * @implements IS2CEnter
         * @constructor
         * @param {PbFrame.IS2CEnter=} [properties] Properties to set
         */
        function S2CEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CEnter userId.
         * @member {number|Long} userId
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2CEnter head.
         * @member {string} head
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.head = "";

        /**
         * S2CEnter gold.
         * @member {number|Long} gold
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2CEnter nickName.
         * @member {string} nickName
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.nickName = "";

        /**
         * S2CEnter sign.
         * @member {string} sign
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.sign = "";

        /**
         * S2CEnter tableId.
         * @member {number} tableId
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.tableId = 0;

        /**
         * S2CEnter setId.
         * @member {number} setId
         * @memberof PbFrame.S2CEnter
         * @instance
         */
        S2CEnter.prototype.setId = 0;

        /**
         * Creates a new S2CEnter instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {PbFrame.IS2CEnter=} [properties] Properties to set
         * @returns {PbFrame.S2CEnter} S2CEnter instance
         */
        S2CEnter.create = function create(properties) {
            return new S2CEnter(properties);
        };

        /**
         * Encodes the specified S2CEnter message. Does not implicitly {@link PbFrame.S2CEnter.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {PbFrame.IS2CEnter} message S2CEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.head != null && message.hasOwnProperty("head"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.head);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.gold);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.tableId);
            if (message.setId != null && message.hasOwnProperty("setId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.setId);
            return writer;
        };

        /**
         * Encodes the specified S2CEnter message, length delimited. Does not implicitly {@link PbFrame.S2CEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {PbFrame.IS2CEnter} message S2CEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CEnter message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CEnter} S2CEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.head = reader.string();
                    break;
                case 3:
                    message.gold = reader.int64();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                case 5:
                    message.sign = reader.string();
                    break;
                case 6:
                    message.tableId = reader.int32();
                    break;
                case 7:
                    message.setId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CEnter} S2CEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CEnter message.
         * @function verify
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isInteger(message.tableId))
                    return "tableId: integer expected";
            if (message.setId != null && message.hasOwnProperty("setId"))
                if (!$util.isInteger(message.setId))
                    return "setId: integer expected";
            return null;
        };

        /**
         * Creates a S2CEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CEnter} S2CEnter
         */
        S2CEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CEnter)
                return object;
            var message = new $root.PbFrame.S2CEnter();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.head != null)
                message.head = String(object.head);
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.tableId != null)
                message.tableId = object.tableId | 0;
            if (object.setId != null)
                message.setId = object.setId | 0;
            return message;
        };

        /**
         * Creates a plain object from a S2CEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CEnter
         * @static
         * @param {PbFrame.S2CEnter} message S2CEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.head = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
                object.nickName = "";
                object.sign = "";
                object.tableId = 0;
                object.setId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.setId != null && message.hasOwnProperty("setId"))
                object.setId = message.setId;
            return object;
        };

        /**
         * Converts this S2CEnter to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CEnter;
    })();

    PbFrame.S2CLeave = (function() {

        /**
         * Properties of a S2CLeave.
         * @memberof PbFrame
         * @interface IS2CLeave
         * @property {number|Long|null} [userId] S2CLeave userId
         */

        /**
         * Constructs a new S2CLeave.
         * @memberof PbFrame
         * @classdesc Represents a S2CLeave.
         * @implements IS2CLeave
         * @constructor
         * @param {PbFrame.IS2CLeave=} [properties] Properties to set
         */
        function S2CLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CLeave userId.
         * @member {number|Long} userId
         * @memberof PbFrame.S2CLeave
         * @instance
         */
        S2CLeave.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2CLeave instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {PbFrame.IS2CLeave=} [properties] Properties to set
         * @returns {PbFrame.S2CLeave} S2CLeave instance
         */
        S2CLeave.create = function create(properties) {
            return new S2CLeave(properties);
        };

        /**
         * Encodes the specified S2CLeave message. Does not implicitly {@link PbFrame.S2CLeave.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {PbFrame.IS2CLeave} message S2CLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified S2CLeave message, length delimited. Does not implicitly {@link PbFrame.S2CLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {PbFrame.IS2CLeave} message S2CLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CLeave message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CLeave} S2CLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CLeave} S2CLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CLeave message.
         * @function verify
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a S2CLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CLeave} S2CLeave
         */
        S2CLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CLeave)
                return object;
            var message = new $root.PbFrame.S2CLeave();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a S2CLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CLeave
         * @static
         * @param {PbFrame.S2CLeave} message S2CLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this S2CLeave to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CLeave;
    })();

    PbFrame.S2CTest = (function() {

        /**
         * Properties of a S2CTest.
         * @memberof PbFrame
         * @interface IS2CTest
         * @property {number|Long|null} [userId] S2CTest userId
         * @property {string|null} [connect] S2CTest connect
         */

        /**
         * Constructs a new S2CTest.
         * @memberof PbFrame
         * @classdesc Represents a S2CTest.
         * @implements IS2CTest
         * @constructor
         * @param {PbFrame.IS2CTest=} [properties] Properties to set
         */
        function S2CTest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CTest userId.
         * @member {number|Long} userId
         * @memberof PbFrame.S2CTest
         * @instance
         */
        S2CTest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * S2CTest connect.
         * @member {string} connect
         * @memberof PbFrame.S2CTest
         * @instance
         */
        S2CTest.prototype.connect = "";

        /**
         * Creates a new S2CTest instance using the specified properties.
         * @function create
         * @memberof PbFrame.S2CTest
         * @static
         * @param {PbFrame.IS2CTest=} [properties] Properties to set
         * @returns {PbFrame.S2CTest} S2CTest instance
         */
        S2CTest.create = function create(properties) {
            return new S2CTest(properties);
        };

        /**
         * Encodes the specified S2CTest message. Does not implicitly {@link PbFrame.S2CTest.verify|verify} messages.
         * @function encode
         * @memberof PbFrame.S2CTest
         * @static
         * @param {PbFrame.IS2CTest} message S2CTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.connect != null && message.hasOwnProperty("connect"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.connect);
            return writer;
        };

        /**
         * Encodes the specified S2CTest message, length delimited. Does not implicitly {@link PbFrame.S2CTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PbFrame.S2CTest
         * @static
         * @param {PbFrame.IS2CTest} message S2CTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CTest message from the specified reader or buffer.
         * @function decode
         * @memberof PbFrame.S2CTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PbFrame.S2CTest} S2CTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PbFrame.S2CTest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.connect = reader.string();
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
         * @memberof PbFrame.S2CTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PbFrame.S2CTest} S2CTest
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
         * @memberof PbFrame.S2CTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.connect != null && message.hasOwnProperty("connect"))
                if (!$util.isString(message.connect))
                    return "connect: string expected";
            return null;
        };

        /**
         * Creates a S2CTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PbFrame.S2CTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PbFrame.S2CTest} S2CTest
         */
        S2CTest.fromObject = function fromObject(object) {
            if (object instanceof $root.PbFrame.S2CTest)
                return object;
            var message = new $root.PbFrame.S2CTest();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.connect != null)
                message.connect = String(object.connect);
            return message;
        };

        /**
         * Creates a plain object from a S2CTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PbFrame.S2CTest
         * @static
         * @param {PbFrame.S2CTest} message S2CTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CTest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.connect = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.connect != null && message.hasOwnProperty("connect"))
                object.connect = message.connect;
            return object;
        };

        /**
         * Converts this S2CTest to JSON.
         * @function toJSON
         * @memberof PbFrame.S2CTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CTest;
    })();

    return PbFrame;
})();

module.exports = $root;
