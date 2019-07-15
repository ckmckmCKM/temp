/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.S2CMsg = (function() {

    /**
     * Properties of a S2CMsg.
     * @exports IS2CMsg
     * @interface IS2CMsg
     * @property {number|null} [mainCmd] S2CMsg mainCmd
     * @property {number|null} [subCmd] S2CMsg subCmd
     * @property {Uint8Array|null} [buff] S2CMsg buff
     */

    /**
     * Constructs a new S2CMsg.
     * @exports S2CMsg
     * @classdesc Represents a S2CMsg.
     * @implements IS2CMsg
     * @constructor
     * @param {IS2CMsg=} [properties] Properties to set
     */
    function S2CMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMsg mainCmd.
     * @member {number} mainCmd
     * @memberof S2CMsg
     * @instance
     */
    S2CMsg.prototype.mainCmd = 0;

    /**
     * S2CMsg subCmd.
     * @member {number} subCmd
     * @memberof S2CMsg
     * @instance
     */
    S2CMsg.prototype.subCmd = 0;

    /**
     * S2CMsg buff.
     * @member {Uint8Array} buff
     * @memberof S2CMsg
     * @instance
     */
    S2CMsg.prototype.buff = $util.newBuffer([]);

    /**
     * Creates a new S2CMsg instance using the specified properties.
     * @function create
     * @memberof S2CMsg
     * @static
     * @param {IS2CMsg=} [properties] Properties to set
     * @returns {S2CMsg} S2CMsg instance
     */
    S2CMsg.create = function create(properties) {
        return new S2CMsg(properties);
    };

    /**
     * Encodes the specified S2CMsg message. Does not implicitly {@link S2CMsg.verify|verify} messages.
     * @function encode
     * @memberof S2CMsg
     * @static
     * @param {IS2CMsg} message S2CMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMsg.encode = function encode(message, writer) {
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
     * Encodes the specified S2CMsg message, length delimited. Does not implicitly {@link S2CMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMsg
     * @static
     * @param {IS2CMsg} message S2CMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMsg message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMsg} S2CMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMsg();
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
     * Decodes a S2CMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMsg} S2CMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMsg message.
     * @function verify
     * @memberof S2CMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMsg.verify = function verify(message) {
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
     * Creates a S2CMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMsg} S2CMsg
     */
    S2CMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMsg)
            return object;
        var message = new $root.S2CMsg();
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
     * Creates a plain object from a S2CMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMsg
     * @static
     * @param {S2CMsg} message S2CMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMsg.toObject = function toObject(message, options) {
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
     * Converts this S2CMsg to JSON.
     * @function toJSON
     * @memberof S2CMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CMsg;
})();

$root.S2CTableInfo = (function() {

    /**
     * Properties of a S2CTableInfo.
     * @exports IS2CTableInfo
     * @interface IS2CTableInfo
     * @property {number|null} [tableId] S2CTableInfo tableId
     * @property {string|null} [tableName] S2CTableInfo tableName
     * @property {number|null} [curStatus] S2CTableInfo curStatus
     * @property {number|null} [round] S2CTableInfo round
     * @property {number|Long|null} [poolAmount] S2CTableInfo poolAmount
     * @property {number|null} [totalRound] S2CTableInfo totalRound
     * @property {number|Long|null} [minAction] S2CTableInfo minAction
     * @property {number|Long|null} [maxAction] S2CTableInfo maxAction
     * @property {Array.<IS2CUserInfo>|null} [userInfoArr] S2CTableInfo userInfoArr
     * @property {number|null} [triggerTime] S2CTableInfo triggerTime
     * @property {string|null} [triggerEvent] S2CTableInfo triggerEvent
     * @property {IS2CUserInfo|null} [curUserInfo] S2CTableInfo curUserInfo
     * @property {IS2CUserInfo|null} [banker] S2CTableInfo banker
     * @property {Array.<number|Long>|null} [raiseAmount] S2CTableInfo raiseAmount
     */

    /**
     * Constructs a new S2CTableInfo.
     * @exports S2CTableInfo
     * @classdesc Represents a S2CTableInfo.
     * @implements IS2CTableInfo
     * @constructor
     * @param {IS2CTableInfo=} [properties] Properties to set
     */
    function S2CTableInfo(properties) {
        this.userInfoArr = [];
        this.raiseAmount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CTableInfo tableId.
     * @member {number} tableId
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.tableId = 0;

    /**
     * S2CTableInfo tableName.
     * @member {string} tableName
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.tableName = "";

    /**
     * S2CTableInfo curStatus.
     * @member {number} curStatus
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.curStatus = 0;

    /**
     * S2CTableInfo round.
     * @member {number} round
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.round = 0;

    /**
     * S2CTableInfo poolAmount.
     * @member {number|Long} poolAmount
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.poolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTableInfo totalRound.
     * @member {number} totalRound
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.totalRound = 0;

    /**
     * S2CTableInfo minAction.
     * @member {number|Long} minAction
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.minAction = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTableInfo maxAction.
     * @member {number|Long} maxAction
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.maxAction = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTableInfo userInfoArr.
     * @member {Array.<IS2CUserInfo>} userInfoArr
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.userInfoArr = $util.emptyArray;

    /**
     * S2CTableInfo triggerTime.
     * @member {number} triggerTime
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.triggerTime = 0;

    /**
     * S2CTableInfo triggerEvent.
     * @member {string} triggerEvent
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.triggerEvent = "";

    /**
     * S2CTableInfo curUserInfo.
     * @member {IS2CUserInfo|null|undefined} curUserInfo
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.curUserInfo = null;

    /**
     * S2CTableInfo banker.
     * @member {IS2CUserInfo|null|undefined} banker
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.banker = null;

    /**
     * S2CTableInfo raiseAmount.
     * @member {Array.<number|Long>} raiseAmount
     * @memberof S2CTableInfo
     * @instance
     */
    S2CTableInfo.prototype.raiseAmount = $util.emptyArray;

    /**
     * Creates a new S2CTableInfo instance using the specified properties.
     * @function create
     * @memberof S2CTableInfo
     * @static
     * @param {IS2CTableInfo=} [properties] Properties to set
     * @returns {S2CTableInfo} S2CTableInfo instance
     */
    S2CTableInfo.create = function create(properties) {
        return new S2CTableInfo(properties);
    };

    /**
     * Encodes the specified S2CTableInfo message. Does not implicitly {@link S2CTableInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CTableInfo
     * @static
     * @param {IS2CTableInfo} message S2CTableInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTableInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
        if (message.tableName != null && message.hasOwnProperty("tableName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableName);
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.curStatus);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.round);
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.poolAmount);
        if (message.totalRound != null && message.hasOwnProperty("totalRound"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.minAction);
        if (message.maxAction != null && message.hasOwnProperty("maxAction"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.maxAction);
        if (message.userInfoArr != null && message.userInfoArr.length)
            for (var i = 0; i < message.userInfoArr.length; ++i)
                $root.S2CUserInfo.encode(message.userInfoArr[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.triggerTime != null && message.hasOwnProperty("triggerTime"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.triggerTime);
        if (message.triggerEvent != null && message.hasOwnProperty("triggerEvent"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.triggerEvent);
        if (message.curUserInfo != null && message.hasOwnProperty("curUserInfo"))
            $root.S2CUserInfo.encode(message.curUserInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.banker != null && message.hasOwnProperty("banker"))
            $root.S2CUserInfo.encode(message.banker, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.raiseAmount != null && message.raiseAmount.length) {
            writer.uint32(/* id 14, wireType 2 =*/114).fork();
            for (var i = 0; i < message.raiseAmount.length; ++i)
                writer.int64(message.raiseAmount[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified S2CTableInfo message, length delimited. Does not implicitly {@link S2CTableInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CTableInfo
     * @static
     * @param {IS2CTableInfo} message S2CTableInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTableInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CTableInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTableInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CTableInfo} S2CTableInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTableInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CTableInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tableId = reader.int32();
                break;
            case 2:
                message.tableName = reader.string();
                break;
            case 3:
                message.curStatus = reader.int32();
                break;
            case 4:
                message.round = reader.int32();
                break;
            case 5:
                message.poolAmount = reader.int64();
                break;
            case 6:
                message.totalRound = reader.int32();
                break;
            case 7:
                message.minAction = reader.int64();
                break;
            case 8:
                message.maxAction = reader.int64();
                break;
            case 9:
                if (!(message.userInfoArr && message.userInfoArr.length))
                    message.userInfoArr = [];
                message.userInfoArr.push($root.S2CUserInfo.decode(reader, reader.uint32()));
                break;
            case 10:
                message.triggerTime = reader.int32();
                break;
            case 11:
                message.triggerEvent = reader.string();
                break;
            case 12:
                message.curUserInfo = $root.S2CUserInfo.decode(reader, reader.uint32());
                break;
            case 13:
                message.banker = $root.S2CUserInfo.decode(reader, reader.uint32());
                break;
            case 14:
                if (!(message.raiseAmount && message.raiseAmount.length))
                    message.raiseAmount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.raiseAmount.push(reader.int64());
                } else
                    message.raiseAmount.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CTableInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CTableInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CTableInfo} S2CTableInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTableInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CTableInfo message.
     * @function verify
     * @memberof S2CTableInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CTableInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            if (!$util.isInteger(message.tableId))
                return "tableId: integer expected";
        if (message.tableName != null && message.hasOwnProperty("tableName"))
            if (!$util.isString(message.tableName))
                return "tableName: string expected";
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            if (!$util.isInteger(message.curStatus))
                return "curStatus: integer expected";
        if (message.round != null && message.hasOwnProperty("round"))
            if (!$util.isInteger(message.round))
                return "round: integer expected";
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            if (!$util.isInteger(message.poolAmount) && !(message.poolAmount && $util.isInteger(message.poolAmount.low) && $util.isInteger(message.poolAmount.high)))
                return "poolAmount: integer|Long expected";
        if (message.totalRound != null && message.hasOwnProperty("totalRound"))
            if (!$util.isInteger(message.totalRound))
                return "totalRound: integer expected";
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            if (!$util.isInteger(message.minAction) && !(message.minAction && $util.isInteger(message.minAction.low) && $util.isInteger(message.minAction.high)))
                return "minAction: integer|Long expected";
        if (message.maxAction != null && message.hasOwnProperty("maxAction"))
            if (!$util.isInteger(message.maxAction) && !(message.maxAction && $util.isInteger(message.maxAction.low) && $util.isInteger(message.maxAction.high)))
                return "maxAction: integer|Long expected";
        if (message.userInfoArr != null && message.hasOwnProperty("userInfoArr")) {
            if (!Array.isArray(message.userInfoArr))
                return "userInfoArr: array expected";
            for (var i = 0; i < message.userInfoArr.length; ++i) {
                var error = $root.S2CUserInfo.verify(message.userInfoArr[i]);
                if (error)
                    return "userInfoArr." + error;
            }
        }
        if (message.triggerTime != null && message.hasOwnProperty("triggerTime"))
            if (!$util.isInteger(message.triggerTime))
                return "triggerTime: integer expected";
        if (message.triggerEvent != null && message.hasOwnProperty("triggerEvent"))
            if (!$util.isString(message.triggerEvent))
                return "triggerEvent: string expected";
        if (message.curUserInfo != null && message.hasOwnProperty("curUserInfo")) {
            var error = $root.S2CUserInfo.verify(message.curUserInfo);
            if (error)
                return "curUserInfo." + error;
        }
        if (message.banker != null && message.hasOwnProperty("banker")) {
            var error = $root.S2CUserInfo.verify(message.banker);
            if (error)
                return "banker." + error;
        }
        if (message.raiseAmount != null && message.hasOwnProperty("raiseAmount")) {
            if (!Array.isArray(message.raiseAmount))
                return "raiseAmount: array expected";
            for (var i = 0; i < message.raiseAmount.length; ++i)
                if (!$util.isInteger(message.raiseAmount[i]) && !(message.raiseAmount[i] && $util.isInteger(message.raiseAmount[i].low) && $util.isInteger(message.raiseAmount[i].high)))
                    return "raiseAmount: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a S2CTableInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CTableInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CTableInfo} S2CTableInfo
     */
    S2CTableInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CTableInfo)
            return object;
        var message = new $root.S2CTableInfo();
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.tableName != null)
            message.tableName = String(object.tableName);
        if (object.curStatus != null)
            message.curStatus = object.curStatus | 0;
        if (object.round != null)
            message.round = object.round | 0;
        if (object.poolAmount != null)
            if ($util.Long)
                (message.poolAmount = $util.Long.fromValue(object.poolAmount)).unsigned = false;
            else if (typeof object.poolAmount === "string")
                message.poolAmount = parseInt(object.poolAmount, 10);
            else if (typeof object.poolAmount === "number")
                message.poolAmount = object.poolAmount;
            else if (typeof object.poolAmount === "object")
                message.poolAmount = new $util.LongBits(object.poolAmount.low >>> 0, object.poolAmount.high >>> 0).toNumber();
        if (object.totalRound != null)
            message.totalRound = object.totalRound | 0;
        if (object.minAction != null)
            if ($util.Long)
                (message.minAction = $util.Long.fromValue(object.minAction)).unsigned = false;
            else if (typeof object.minAction === "string")
                message.minAction = parseInt(object.minAction, 10);
            else if (typeof object.minAction === "number")
                message.minAction = object.minAction;
            else if (typeof object.minAction === "object")
                message.minAction = new $util.LongBits(object.minAction.low >>> 0, object.minAction.high >>> 0).toNumber();
        if (object.maxAction != null)
            if ($util.Long)
                (message.maxAction = $util.Long.fromValue(object.maxAction)).unsigned = false;
            else if (typeof object.maxAction === "string")
                message.maxAction = parseInt(object.maxAction, 10);
            else if (typeof object.maxAction === "number")
                message.maxAction = object.maxAction;
            else if (typeof object.maxAction === "object")
                message.maxAction = new $util.LongBits(object.maxAction.low >>> 0, object.maxAction.high >>> 0).toNumber();
        if (object.userInfoArr) {
            if (!Array.isArray(object.userInfoArr))
                throw TypeError(".S2CTableInfo.userInfoArr: array expected");
            message.userInfoArr = [];
            for (var i = 0; i < object.userInfoArr.length; ++i) {
                if (typeof object.userInfoArr[i] !== "object")
                    throw TypeError(".S2CTableInfo.userInfoArr: object expected");
                message.userInfoArr[i] = $root.S2CUserInfo.fromObject(object.userInfoArr[i]);
            }
        }
        if (object.triggerTime != null)
            message.triggerTime = object.triggerTime | 0;
        if (object.triggerEvent != null)
            message.triggerEvent = String(object.triggerEvent);
        if (object.curUserInfo != null) {
            if (typeof object.curUserInfo !== "object")
                throw TypeError(".S2CTableInfo.curUserInfo: object expected");
            message.curUserInfo = $root.S2CUserInfo.fromObject(object.curUserInfo);
        }
        if (object.banker != null) {
            if (typeof object.banker !== "object")
                throw TypeError(".S2CTableInfo.banker: object expected");
            message.banker = $root.S2CUserInfo.fromObject(object.banker);
        }
        if (object.raiseAmount) {
            if (!Array.isArray(object.raiseAmount))
                throw TypeError(".S2CTableInfo.raiseAmount: array expected");
            message.raiseAmount = [];
            for (var i = 0; i < object.raiseAmount.length; ++i)
                if ($util.Long)
                    (message.raiseAmount[i] = $util.Long.fromValue(object.raiseAmount[i])).unsigned = false;
                else if (typeof object.raiseAmount[i] === "string")
                    message.raiseAmount[i] = parseInt(object.raiseAmount[i], 10);
                else if (typeof object.raiseAmount[i] === "number")
                    message.raiseAmount[i] = object.raiseAmount[i];
                else if (typeof object.raiseAmount[i] === "object")
                    message.raiseAmount[i] = new $util.LongBits(object.raiseAmount[i].low >>> 0, object.raiseAmount[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CTableInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CTableInfo
     * @static
     * @param {S2CTableInfo} message S2CTableInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CTableInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.userInfoArr = [];
            object.raiseAmount = [];
        }
        if (options.defaults) {
            object.tableId = 0;
            object.tableName = "";
            object.curStatus = 0;
            object.round = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.poolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.poolAmount = options.longs === String ? "0" : 0;
            object.totalRound = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.minAction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.minAction = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.maxAction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.maxAction = options.longs === String ? "0" : 0;
            object.triggerTime = 0;
            object.triggerEvent = "";
            object.curUserInfo = null;
            object.banker = null;
        }
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            object.tableId = message.tableId;
        if (message.tableName != null && message.hasOwnProperty("tableName"))
            object.tableName = message.tableName;
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            object.curStatus = message.curStatus;
        if (message.round != null && message.hasOwnProperty("round"))
            object.round = message.round;
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            if (typeof message.poolAmount === "number")
                object.poolAmount = options.longs === String ? String(message.poolAmount) : message.poolAmount;
            else
                object.poolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.poolAmount) : options.longs === Number ? new $util.LongBits(message.poolAmount.low >>> 0, message.poolAmount.high >>> 0).toNumber() : message.poolAmount;
        if (message.totalRound != null && message.hasOwnProperty("totalRound"))
            object.totalRound = message.totalRound;
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            if (typeof message.minAction === "number")
                object.minAction = options.longs === String ? String(message.minAction) : message.minAction;
            else
                object.minAction = options.longs === String ? $util.Long.prototype.toString.call(message.minAction) : options.longs === Number ? new $util.LongBits(message.minAction.low >>> 0, message.minAction.high >>> 0).toNumber() : message.minAction;
        if (message.maxAction != null && message.hasOwnProperty("maxAction"))
            if (typeof message.maxAction === "number")
                object.maxAction = options.longs === String ? String(message.maxAction) : message.maxAction;
            else
                object.maxAction = options.longs === String ? $util.Long.prototype.toString.call(message.maxAction) : options.longs === Number ? new $util.LongBits(message.maxAction.low >>> 0, message.maxAction.high >>> 0).toNumber() : message.maxAction;
        if (message.userInfoArr && message.userInfoArr.length) {
            object.userInfoArr = [];
            for (var j = 0; j < message.userInfoArr.length; ++j)
                object.userInfoArr[j] = $root.S2CUserInfo.toObject(message.userInfoArr[j], options);
        }
        if (message.triggerTime != null && message.hasOwnProperty("triggerTime"))
            object.triggerTime = message.triggerTime;
        if (message.triggerEvent != null && message.hasOwnProperty("triggerEvent"))
            object.triggerEvent = message.triggerEvent;
        if (message.curUserInfo != null && message.hasOwnProperty("curUserInfo"))
            object.curUserInfo = $root.S2CUserInfo.toObject(message.curUserInfo, options);
        if (message.banker != null && message.hasOwnProperty("banker"))
            object.banker = $root.S2CUserInfo.toObject(message.banker, options);
        if (message.raiseAmount && message.raiseAmount.length) {
            object.raiseAmount = [];
            for (var j = 0; j < message.raiseAmount.length; ++j)
                if (typeof message.raiseAmount[j] === "number")
                    object.raiseAmount[j] = options.longs === String ? String(message.raiseAmount[j]) : message.raiseAmount[j];
                else
                    object.raiseAmount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.raiseAmount[j]) : options.longs === Number ? new $util.LongBits(message.raiseAmount[j].low >>> 0, message.raiseAmount[j].high >>> 0).toNumber() : message.raiseAmount[j];
        }
        return object;
    };

    /**
     * Converts this S2CTableInfo to JSON.
     * @function toJSON
     * @memberof S2CTableInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CTableInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CTableInfo;
})();

$root.S2CCompareRes = (function() {

    /**
     * Properties of a S2CCompareRes.
     * @exports IS2CCompareRes
     * @interface IS2CCompareRes
     * @property {number|null} [winId] S2CCompareRes winId
     * @property {Array.<number>|null} [loseIds] S2CCompareRes loseIds
     * @property {number|Long|null} [firstAmount] S2CCompareRes firstAmount
     * @property {number|null} [firstId] S2CCompareRes firstId
     */

    /**
     * Constructs a new S2CCompareRes.
     * @exports S2CCompareRes
     * @classdesc Represents a S2CCompareRes.
     * @implements IS2CCompareRes
     * @constructor
     * @param {IS2CCompareRes=} [properties] Properties to set
     */
    function S2CCompareRes(properties) {
        this.loseIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CCompareRes winId.
     * @member {number} winId
     * @memberof S2CCompareRes
     * @instance
     */
    S2CCompareRes.prototype.winId = 0;

    /**
     * S2CCompareRes loseIds.
     * @member {Array.<number>} loseIds
     * @memberof S2CCompareRes
     * @instance
     */
    S2CCompareRes.prototype.loseIds = $util.emptyArray;

    /**
     * S2CCompareRes firstAmount.
     * @member {number|Long} firstAmount
     * @memberof S2CCompareRes
     * @instance
     */
    S2CCompareRes.prototype.firstAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCompareRes firstId.
     * @member {number} firstId
     * @memberof S2CCompareRes
     * @instance
     */
    S2CCompareRes.prototype.firstId = 0;

    /**
     * Creates a new S2CCompareRes instance using the specified properties.
     * @function create
     * @memberof S2CCompareRes
     * @static
     * @param {IS2CCompareRes=} [properties] Properties to set
     * @returns {S2CCompareRes} S2CCompareRes instance
     */
    S2CCompareRes.create = function create(properties) {
        return new S2CCompareRes(properties);
    };

    /**
     * Encodes the specified S2CCompareRes message. Does not implicitly {@link S2CCompareRes.verify|verify} messages.
     * @function encode
     * @memberof S2CCompareRes
     * @static
     * @param {IS2CCompareRes} message S2CCompareRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCompareRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.winId != null && message.hasOwnProperty("winId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.winId);
        if (message.loseIds != null && message.loseIds.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.loseIds.length; ++i)
                writer.int32(message.loseIds[i]);
            writer.ldelim();
        }
        if (message.firstAmount != null && message.hasOwnProperty("firstAmount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.firstAmount);
        if (message.firstId != null && message.hasOwnProperty("firstId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.firstId);
        return writer;
    };

    /**
     * Encodes the specified S2CCompareRes message, length delimited. Does not implicitly {@link S2CCompareRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CCompareRes
     * @static
     * @param {IS2CCompareRes} message S2CCompareRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCompareRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CCompareRes message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCompareRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CCompareRes} S2CCompareRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCompareRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CCompareRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.winId = reader.int32();
                break;
            case 2:
                if (!(message.loseIds && message.loseIds.length))
                    message.loseIds = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.loseIds.push(reader.int32());
                } else
                    message.loseIds.push(reader.int32());
                break;
            case 3:
                message.firstAmount = reader.int64();
                break;
            case 4:
                message.firstId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CCompareRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CCompareRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CCompareRes} S2CCompareRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCompareRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CCompareRes message.
     * @function verify
     * @memberof S2CCompareRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CCompareRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.winId != null && message.hasOwnProperty("winId"))
            if (!$util.isInteger(message.winId))
                return "winId: integer expected";
        if (message.loseIds != null && message.hasOwnProperty("loseIds")) {
            if (!Array.isArray(message.loseIds))
                return "loseIds: array expected";
            for (var i = 0; i < message.loseIds.length; ++i)
                if (!$util.isInteger(message.loseIds[i]))
                    return "loseIds: integer[] expected";
        }
        if (message.firstAmount != null && message.hasOwnProperty("firstAmount"))
            if (!$util.isInteger(message.firstAmount) && !(message.firstAmount && $util.isInteger(message.firstAmount.low) && $util.isInteger(message.firstAmount.high)))
                return "firstAmount: integer|Long expected";
        if (message.firstId != null && message.hasOwnProperty("firstId"))
            if (!$util.isInteger(message.firstId))
                return "firstId: integer expected";
        return null;
    };

    /**
     * Creates a S2CCompareRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CCompareRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CCompareRes} S2CCompareRes
     */
    S2CCompareRes.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CCompareRes)
            return object;
        var message = new $root.S2CCompareRes();
        if (object.winId != null)
            message.winId = object.winId | 0;
        if (object.loseIds) {
            if (!Array.isArray(object.loseIds))
                throw TypeError(".S2CCompareRes.loseIds: array expected");
            message.loseIds = [];
            for (var i = 0; i < object.loseIds.length; ++i)
                message.loseIds[i] = object.loseIds[i] | 0;
        }
        if (object.firstAmount != null)
            if ($util.Long)
                (message.firstAmount = $util.Long.fromValue(object.firstAmount)).unsigned = false;
            else if (typeof object.firstAmount === "string")
                message.firstAmount = parseInt(object.firstAmount, 10);
            else if (typeof object.firstAmount === "number")
                message.firstAmount = object.firstAmount;
            else if (typeof object.firstAmount === "object")
                message.firstAmount = new $util.LongBits(object.firstAmount.low >>> 0, object.firstAmount.high >>> 0).toNumber();
        if (object.firstId != null)
            message.firstId = object.firstId | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CCompareRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CCompareRes
     * @static
     * @param {S2CCompareRes} message S2CCompareRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CCompareRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.loseIds = [];
        if (options.defaults) {
            object.winId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.firstAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.firstAmount = options.longs === String ? "0" : 0;
            object.firstId = 0;
        }
        if (message.winId != null && message.hasOwnProperty("winId"))
            object.winId = message.winId;
        if (message.loseIds && message.loseIds.length) {
            object.loseIds = [];
            for (var j = 0; j < message.loseIds.length; ++j)
                object.loseIds[j] = message.loseIds[j];
        }
        if (message.firstAmount != null && message.hasOwnProperty("firstAmount"))
            if (typeof message.firstAmount === "number")
                object.firstAmount = options.longs === String ? String(message.firstAmount) : message.firstAmount;
            else
                object.firstAmount = options.longs === String ? $util.Long.prototype.toString.call(message.firstAmount) : options.longs === Number ? new $util.LongBits(message.firstAmount.low >>> 0, message.firstAmount.high >>> 0).toNumber() : message.firstAmount;
        if (message.firstId != null && message.hasOwnProperty("firstId"))
            object.firstId = message.firstId;
        return object;
    };

    /**
     * Converts this S2CCompareRes to JSON.
     * @function toJSON
     * @memberof S2CCompareRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CCompareRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CCompareRes;
})();

$root.S2CUserInfo = (function() {

    /**
     * Properties of a S2CUserInfo.
     * @exports IS2CUserInfo
     * @interface IS2CUserInfo
     * @property {number|null} [userId] S2CUserInfo userId
     * @property {string|null} [userName] S2CUserInfo userName
     * @property {number|Long|null} [ticker] S2CUserInfo ticker
     * @property {string|null} [head] S2CUserInfo head
     * @property {number|Long|null} [amount] S2CUserInfo amount
     * @property {number|Long|null} [curActionAmount] S2CUserInfo curActionAmount
     * @property {number|null} [chairId] S2CUserInfo chairId
     * @property {number|null} [curRaiseAmount] S2CUserInfo curRaiseAmount
     * @property {number|null} [curStatus] S2CUserInfo curStatus
     * @property {number|Long|null} [followAmount] S2CUserInfo followAmount
     * @property {number|Long|null} [allInAmount] S2CUserInfo allInAmount
     */

    /**
     * Constructs a new S2CUserInfo.
     * @exports S2CUserInfo
     * @classdesc Represents a S2CUserInfo.
     * @implements IS2CUserInfo
     * @constructor
     * @param {IS2CUserInfo=} [properties] Properties to set
     */
    function S2CUserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserInfo userId.
     * @member {number} userId
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.userId = 0;

    /**
     * S2CUserInfo userName.
     * @member {string} userName
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.userName = "";

    /**
     * S2CUserInfo ticker.
     * @member {number|Long} ticker
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.ticker = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserInfo head.
     * @member {string} head
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.head = "";

    /**
     * S2CUserInfo amount.
     * @member {number|Long} amount
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserInfo curActionAmount.
     * @member {number|Long} curActionAmount
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.curActionAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserInfo chairId.
     * @member {number} chairId
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.chairId = 0;

    /**
     * S2CUserInfo curRaiseAmount.
     * @member {number} curRaiseAmount
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.curRaiseAmount = 0;

    /**
     * S2CUserInfo curStatus.
     * @member {number} curStatus
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.curStatus = 0;

    /**
     * S2CUserInfo followAmount.
     * @member {number|Long} followAmount
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.followAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserInfo allInAmount.
     * @member {number|Long} allInAmount
     * @memberof S2CUserInfo
     * @instance
     */
    S2CUserInfo.prototype.allInAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CUserInfo instance using the specified properties.
     * @function create
     * @memberof S2CUserInfo
     * @static
     * @param {IS2CUserInfo=} [properties] Properties to set
     * @returns {S2CUserInfo} S2CUserInfo instance
     */
    S2CUserInfo.create = function create(properties) {
        return new S2CUserInfo(properties);
    };

    /**
     * Encodes the specified S2CUserInfo message. Does not implicitly {@link S2CUserInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CUserInfo
     * @static
     * @param {IS2CUserInfo} message S2CUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ticker);
        if (message.head != null && message.hasOwnProperty("head"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.head);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
        if (message.curActionAmount != null && message.hasOwnProperty("curActionAmount"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.curActionAmount);
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.chairId);
        if (message.curRaiseAmount != null && message.hasOwnProperty("curRaiseAmount"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.curRaiseAmount);
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.curStatus);
        if (message.followAmount != null && message.hasOwnProperty("followAmount"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.followAmount);
        if (message.allInAmount != null && message.hasOwnProperty("allInAmount"))
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.allInAmount);
        return writer;
    };

    /**
     * Encodes the specified S2CUserInfo message, length delimited. Does not implicitly {@link S2CUserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserInfo
     * @static
     * @param {IS2CUserInfo} message S2CUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserInfo} S2CUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.userName = reader.string();
                break;
            case 3:
                message.ticker = reader.int64();
                break;
            case 4:
                message.head = reader.string();
                break;
            case 5:
                message.amount = reader.int64();
                break;
            case 6:
                message.curActionAmount = reader.int64();
                break;
            case 7:
                message.chairId = reader.int32();
                break;
            case 8:
                message.curRaiseAmount = reader.int32();
                break;
            case 9:
                message.curStatus = reader.int32();
                break;
            case 10:
                message.followAmount = reader.int64();
                break;
            case 11:
                message.allInAmount = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserInfo} S2CUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserInfo message.
     * @function verify
     * @memberof S2CUserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            if (!$util.isInteger(message.ticker) && !(message.ticker && $util.isInteger(message.ticker.low) && $util.isInteger(message.ticker.high)))
                return "ticker: integer|Long expected";
        if (message.head != null && message.hasOwnProperty("head"))
            if (!$util.isString(message.head))
                return "head: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.curActionAmount != null && message.hasOwnProperty("curActionAmount"))
            if (!$util.isInteger(message.curActionAmount) && !(message.curActionAmount && $util.isInteger(message.curActionAmount.low) && $util.isInteger(message.curActionAmount.high)))
                return "curActionAmount: integer|Long expected";
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            if (!$util.isInteger(message.chairId))
                return "chairId: integer expected";
        if (message.curRaiseAmount != null && message.hasOwnProperty("curRaiseAmount"))
            if (!$util.isInteger(message.curRaiseAmount))
                return "curRaiseAmount: integer expected";
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            if (!$util.isInteger(message.curStatus))
                return "curStatus: integer expected";
        if (message.followAmount != null && message.hasOwnProperty("followAmount"))
            if (!$util.isInteger(message.followAmount) && !(message.followAmount && $util.isInteger(message.followAmount.low) && $util.isInteger(message.followAmount.high)))
                return "followAmount: integer|Long expected";
        if (message.allInAmount != null && message.hasOwnProperty("allInAmount"))
            if (!$util.isInteger(message.allInAmount) && !(message.allInAmount && $util.isInteger(message.allInAmount.low) && $util.isInteger(message.allInAmount.high)))
                return "allInAmount: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CUserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserInfo} S2CUserInfo
     */
    S2CUserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserInfo)
            return object;
        var message = new $root.S2CUserInfo();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.userName != null)
            message.userName = String(object.userName);
        if (object.ticker != null)
            if ($util.Long)
                (message.ticker = $util.Long.fromValue(object.ticker)).unsigned = false;
            else if (typeof object.ticker === "string")
                message.ticker = parseInt(object.ticker, 10);
            else if (typeof object.ticker === "number")
                message.ticker = object.ticker;
            else if (typeof object.ticker === "object")
                message.ticker = new $util.LongBits(object.ticker.low >>> 0, object.ticker.high >>> 0).toNumber();
        if (object.head != null)
            message.head = String(object.head);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        if (object.curActionAmount != null)
            if ($util.Long)
                (message.curActionAmount = $util.Long.fromValue(object.curActionAmount)).unsigned = false;
            else if (typeof object.curActionAmount === "string")
                message.curActionAmount = parseInt(object.curActionAmount, 10);
            else if (typeof object.curActionAmount === "number")
                message.curActionAmount = object.curActionAmount;
            else if (typeof object.curActionAmount === "object")
                message.curActionAmount = new $util.LongBits(object.curActionAmount.low >>> 0, object.curActionAmount.high >>> 0).toNumber();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.curRaiseAmount != null)
            message.curRaiseAmount = object.curRaiseAmount | 0;
        if (object.curStatus != null)
            message.curStatus = object.curStatus | 0;
        if (object.followAmount != null)
            if ($util.Long)
                (message.followAmount = $util.Long.fromValue(object.followAmount)).unsigned = false;
            else if (typeof object.followAmount === "string")
                message.followAmount = parseInt(object.followAmount, 10);
            else if (typeof object.followAmount === "number")
                message.followAmount = object.followAmount;
            else if (typeof object.followAmount === "object")
                message.followAmount = new $util.LongBits(object.followAmount.low >>> 0, object.followAmount.high >>> 0).toNumber();
        if (object.allInAmount != null)
            if ($util.Long)
                (message.allInAmount = $util.Long.fromValue(object.allInAmount)).unsigned = false;
            else if (typeof object.allInAmount === "string")
                message.allInAmount = parseInt(object.allInAmount, 10);
            else if (typeof object.allInAmount === "number")
                message.allInAmount = object.allInAmount;
            else if (typeof object.allInAmount === "object")
                message.allInAmount = new $util.LongBits(object.allInAmount.low >>> 0, object.allInAmount.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CUserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserInfo
     * @static
     * @param {S2CUserInfo} message S2CUserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.userName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.ticker = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ticker = options.longs === String ? "0" : 0;
            object.head = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.curActionAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.curActionAmount = options.longs === String ? "0" : 0;
            object.chairId = 0;
            object.curRaiseAmount = 0;
            object.curStatus = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.followAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.followAmount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.allInAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.allInAmount = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            if (typeof message.ticker === "number")
                object.ticker = options.longs === String ? String(message.ticker) : message.ticker;
            else
                object.ticker = options.longs === String ? $util.Long.prototype.toString.call(message.ticker) : options.longs === Number ? new $util.LongBits(message.ticker.low >>> 0, message.ticker.high >>> 0).toNumber() : message.ticker;
        if (message.head != null && message.hasOwnProperty("head"))
            object.head = message.head;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        if (message.curActionAmount != null && message.hasOwnProperty("curActionAmount"))
            if (typeof message.curActionAmount === "number")
                object.curActionAmount = options.longs === String ? String(message.curActionAmount) : message.curActionAmount;
            else
                object.curActionAmount = options.longs === String ? $util.Long.prototype.toString.call(message.curActionAmount) : options.longs === Number ? new $util.LongBits(message.curActionAmount.low >>> 0, message.curActionAmount.high >>> 0).toNumber() : message.curActionAmount;
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.curRaiseAmount != null && message.hasOwnProperty("curRaiseAmount"))
            object.curRaiseAmount = message.curRaiseAmount;
        if (message.curStatus != null && message.hasOwnProperty("curStatus"))
            object.curStatus = message.curStatus;
        if (message.followAmount != null && message.hasOwnProperty("followAmount"))
            if (typeof message.followAmount === "number")
                object.followAmount = options.longs === String ? String(message.followAmount) : message.followAmount;
            else
                object.followAmount = options.longs === String ? $util.Long.prototype.toString.call(message.followAmount) : options.longs === Number ? new $util.LongBits(message.followAmount.low >>> 0, message.followAmount.high >>> 0).toNumber() : message.followAmount;
        if (message.allInAmount != null && message.hasOwnProperty("allInAmount"))
            if (typeof message.allInAmount === "number")
                object.allInAmount = options.longs === String ? String(message.allInAmount) : message.allInAmount;
            else
                object.allInAmount = options.longs === String ? $util.Long.prototype.toString.call(message.allInAmount) : options.longs === Number ? new $util.LongBits(message.allInAmount.low >>> 0, message.allInAmount.high >>> 0).toNumber() : message.allInAmount;
        return object;
    };

    /**
     * Converts this S2CUserInfo to JSON.
     * @function toJSON
     * @memberof S2CUserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CUserInfo;
})();

$root.S2CUserInfoArr = (function() {

    /**
     * Properties of a S2CUserInfoArr.
     * @exports IS2CUserInfoArr
     * @interface IS2CUserInfoArr
     * @property {Array.<IS2CUserInfo>|null} [userInfoArr] S2CUserInfoArr userInfoArr
     */

    /**
     * Constructs a new S2CUserInfoArr.
     * @exports S2CUserInfoArr
     * @classdesc Represents a S2CUserInfoArr.
     * @implements IS2CUserInfoArr
     * @constructor
     * @param {IS2CUserInfoArr=} [properties] Properties to set
     */
    function S2CUserInfoArr(properties) {
        this.userInfoArr = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserInfoArr userInfoArr.
     * @member {Array.<IS2CUserInfo>} userInfoArr
     * @memberof S2CUserInfoArr
     * @instance
     */
    S2CUserInfoArr.prototype.userInfoArr = $util.emptyArray;

    /**
     * Creates a new S2CUserInfoArr instance using the specified properties.
     * @function create
     * @memberof S2CUserInfoArr
     * @static
     * @param {IS2CUserInfoArr=} [properties] Properties to set
     * @returns {S2CUserInfoArr} S2CUserInfoArr instance
     */
    S2CUserInfoArr.create = function create(properties) {
        return new S2CUserInfoArr(properties);
    };

    /**
     * Encodes the specified S2CUserInfoArr message. Does not implicitly {@link S2CUserInfoArr.verify|verify} messages.
     * @function encode
     * @memberof S2CUserInfoArr
     * @static
     * @param {IS2CUserInfoArr} message S2CUserInfoArr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserInfoArr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userInfoArr != null && message.userInfoArr.length)
            for (var i = 0; i < message.userInfoArr.length; ++i)
                $root.S2CUserInfo.encode(message.userInfoArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CUserInfoArr message, length delimited. Does not implicitly {@link S2CUserInfoArr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserInfoArr
     * @static
     * @param {IS2CUserInfoArr} message S2CUserInfoArr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserInfoArr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserInfoArr message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserInfoArr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserInfoArr} S2CUserInfoArr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserInfoArr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserInfoArr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.userInfoArr && message.userInfoArr.length))
                    message.userInfoArr = [];
                message.userInfoArr.push($root.S2CUserInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserInfoArr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserInfoArr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserInfoArr} S2CUserInfoArr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserInfoArr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserInfoArr message.
     * @function verify
     * @memberof S2CUserInfoArr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserInfoArr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userInfoArr != null && message.hasOwnProperty("userInfoArr")) {
            if (!Array.isArray(message.userInfoArr))
                return "userInfoArr: array expected";
            for (var i = 0; i < message.userInfoArr.length; ++i) {
                var error = $root.S2CUserInfo.verify(message.userInfoArr[i]);
                if (error)
                    return "userInfoArr." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CUserInfoArr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserInfoArr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserInfoArr} S2CUserInfoArr
     */
    S2CUserInfoArr.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserInfoArr)
            return object;
        var message = new $root.S2CUserInfoArr();
        if (object.userInfoArr) {
            if (!Array.isArray(object.userInfoArr))
                throw TypeError(".S2CUserInfoArr.userInfoArr: array expected");
            message.userInfoArr = [];
            for (var i = 0; i < object.userInfoArr.length; ++i) {
                if (typeof object.userInfoArr[i] !== "object")
                    throw TypeError(".S2CUserInfoArr.userInfoArr: object expected");
                message.userInfoArr[i] = $root.S2CUserInfo.fromObject(object.userInfoArr[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUserInfoArr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserInfoArr
     * @static
     * @param {S2CUserInfoArr} message S2CUserInfoArr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserInfoArr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.userInfoArr = [];
        if (message.userInfoArr && message.userInfoArr.length) {
            object.userInfoArr = [];
            for (var j = 0; j < message.userInfoArr.length; ++j)
                object.userInfoArr[j] = $root.S2CUserInfo.toObject(message.userInfoArr[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CUserInfoArr to JSON.
     * @function toJSON
     * @memberof S2CUserInfoArr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserInfoArr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CUserInfoArr;
})();

$root.S2CUserActionInfo = (function() {

    /**
     * Properties of a S2CUserActionInfo.
     * @exports IS2CUserActionInfo
     * @interface IS2CUserActionInfo
     * @property {number|null} [userId] S2CUserActionInfo userId
     * @property {string|null} [option] S2CUserActionInfo option
     * @property {number|Long|null} [amount] S2CUserActionInfo amount
     * @property {string|null} [userName] S2CUserActionInfo userName
     * @property {number|Long|null} [curAmount] S2CUserActionInfo curAmount
     * @property {number|Long|null} [poolAmount] S2CUserActionInfo poolAmount
     * @property {number|Long|null} [minAction] S2CUserActionInfo minAction
     */

    /**
     * Constructs a new S2CUserActionInfo.
     * @exports S2CUserActionInfo
     * @classdesc Represents a S2CUserActionInfo.
     * @implements IS2CUserActionInfo
     * @constructor
     * @param {IS2CUserActionInfo=} [properties] Properties to set
     */
    function S2CUserActionInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserActionInfo userId.
     * @member {number} userId
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.userId = 0;

    /**
     * S2CUserActionInfo option.
     * @member {string} option
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.option = "";

    /**
     * S2CUserActionInfo amount.
     * @member {number|Long} amount
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserActionInfo userName.
     * @member {string} userName
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.userName = "";

    /**
     * S2CUserActionInfo curAmount.
     * @member {number|Long} curAmount
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.curAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserActionInfo poolAmount.
     * @member {number|Long} poolAmount
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.poolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUserActionInfo minAction.
     * @member {number|Long} minAction
     * @memberof S2CUserActionInfo
     * @instance
     */
    S2CUserActionInfo.prototype.minAction = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CUserActionInfo instance using the specified properties.
     * @function create
     * @memberof S2CUserActionInfo
     * @static
     * @param {IS2CUserActionInfo=} [properties] Properties to set
     * @returns {S2CUserActionInfo} S2CUserActionInfo instance
     */
    S2CUserActionInfo.create = function create(properties) {
        return new S2CUserActionInfo(properties);
    };

    /**
     * Encodes the specified S2CUserActionInfo message. Does not implicitly {@link S2CUserActionInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CUserActionInfo
     * @static
     * @param {IS2CUserActionInfo} message S2CUserActionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserActionInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.option != null && message.hasOwnProperty("option"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.option);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.userName);
        if (message.curAmount != null && message.hasOwnProperty("curAmount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.curAmount);
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.poolAmount);
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.minAction);
        return writer;
    };

    /**
     * Encodes the specified S2CUserActionInfo message, length delimited. Does not implicitly {@link S2CUserActionInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserActionInfo
     * @static
     * @param {IS2CUserActionInfo} message S2CUserActionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserActionInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserActionInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserActionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserActionInfo} S2CUserActionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserActionInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserActionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.option = reader.string();
                break;
            case 3:
                message.amount = reader.int64();
                break;
            case 4:
                message.userName = reader.string();
                break;
            case 5:
                message.curAmount = reader.int64();
                break;
            case 6:
                message.poolAmount = reader.int64();
                break;
            case 7:
                message.minAction = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserActionInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserActionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserActionInfo} S2CUserActionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserActionInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserActionInfo message.
     * @function verify
     * @memberof S2CUserActionInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserActionInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.option != null && message.hasOwnProperty("option"))
            if (!$util.isString(message.option))
                return "option: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
        if (message.curAmount != null && message.hasOwnProperty("curAmount"))
            if (!$util.isInteger(message.curAmount) && !(message.curAmount && $util.isInteger(message.curAmount.low) && $util.isInteger(message.curAmount.high)))
                return "curAmount: integer|Long expected";
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            if (!$util.isInteger(message.poolAmount) && !(message.poolAmount && $util.isInteger(message.poolAmount.low) && $util.isInteger(message.poolAmount.high)))
                return "poolAmount: integer|Long expected";
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            if (!$util.isInteger(message.minAction) && !(message.minAction && $util.isInteger(message.minAction.low) && $util.isInteger(message.minAction.high)))
                return "minAction: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CUserActionInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserActionInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserActionInfo} S2CUserActionInfo
     */
    S2CUserActionInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserActionInfo)
            return object;
        var message = new $root.S2CUserActionInfo();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.option != null)
            message.option = String(object.option);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        if (object.userName != null)
            message.userName = String(object.userName);
        if (object.curAmount != null)
            if ($util.Long)
                (message.curAmount = $util.Long.fromValue(object.curAmount)).unsigned = false;
            else if (typeof object.curAmount === "string")
                message.curAmount = parseInt(object.curAmount, 10);
            else if (typeof object.curAmount === "number")
                message.curAmount = object.curAmount;
            else if (typeof object.curAmount === "object")
                message.curAmount = new $util.LongBits(object.curAmount.low >>> 0, object.curAmount.high >>> 0).toNumber();
        if (object.poolAmount != null)
            if ($util.Long)
                (message.poolAmount = $util.Long.fromValue(object.poolAmount)).unsigned = false;
            else if (typeof object.poolAmount === "string")
                message.poolAmount = parseInt(object.poolAmount, 10);
            else if (typeof object.poolAmount === "number")
                message.poolAmount = object.poolAmount;
            else if (typeof object.poolAmount === "object")
                message.poolAmount = new $util.LongBits(object.poolAmount.low >>> 0, object.poolAmount.high >>> 0).toNumber();
        if (object.minAction != null)
            if ($util.Long)
                (message.minAction = $util.Long.fromValue(object.minAction)).unsigned = false;
            else if (typeof object.minAction === "string")
                message.minAction = parseInt(object.minAction, 10);
            else if (typeof object.minAction === "number")
                message.minAction = object.minAction;
            else if (typeof object.minAction === "object")
                message.minAction = new $util.LongBits(object.minAction.low >>> 0, object.minAction.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CUserActionInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserActionInfo
     * @static
     * @param {S2CUserActionInfo} message S2CUserActionInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserActionInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.option = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.userName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.curAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.curAmount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.poolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.poolAmount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.minAction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.minAction = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.option != null && message.hasOwnProperty("option"))
            object.option = message.option;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        if (message.curAmount != null && message.hasOwnProperty("curAmount"))
            if (typeof message.curAmount === "number")
                object.curAmount = options.longs === String ? String(message.curAmount) : message.curAmount;
            else
                object.curAmount = options.longs === String ? $util.Long.prototype.toString.call(message.curAmount) : options.longs === Number ? new $util.LongBits(message.curAmount.low >>> 0, message.curAmount.high >>> 0).toNumber() : message.curAmount;
        if (message.poolAmount != null && message.hasOwnProperty("poolAmount"))
            if (typeof message.poolAmount === "number")
                object.poolAmount = options.longs === String ? String(message.poolAmount) : message.poolAmount;
            else
                object.poolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.poolAmount) : options.longs === Number ? new $util.LongBits(message.poolAmount.low >>> 0, message.poolAmount.high >>> 0).toNumber() : message.poolAmount;
        if (message.minAction != null && message.hasOwnProperty("minAction"))
            if (typeof message.minAction === "number")
                object.minAction = options.longs === String ? String(message.minAction) : message.minAction;
            else
                object.minAction = options.longs === String ? $util.Long.prototype.toString.call(message.minAction) : options.longs === Number ? new $util.LongBits(message.minAction.low >>> 0, message.minAction.high >>> 0).toNumber() : message.minAction;
        return object;
    };

    /**
     * Converts this S2CUserActionInfo to JSON.
     * @function toJSON
     * @memberof S2CUserActionInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserActionInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CUserActionInfo;
})();

$root.S2CUserSeeCards = (function() {

    /**
     * Properties of a S2CUserSeeCards.
     * @exports IS2CUserSeeCards
     * @interface IS2CUserSeeCards
     * @property {number|null} [userId] S2CUserSeeCards userId
     * @property {Uint8Array|null} [cards] S2CUserSeeCards cards
     * @property {number|null} [cardType] S2CUserSeeCards cardType
     */

    /**
     * Constructs a new S2CUserSeeCards.
     * @exports S2CUserSeeCards
     * @classdesc Represents a S2CUserSeeCards.
     * @implements IS2CUserSeeCards
     * @constructor
     * @param {IS2CUserSeeCards=} [properties] Properties to set
     */
    function S2CUserSeeCards(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserSeeCards userId.
     * @member {number} userId
     * @memberof S2CUserSeeCards
     * @instance
     */
    S2CUserSeeCards.prototype.userId = 0;

    /**
     * S2CUserSeeCards cards.
     * @member {Uint8Array} cards
     * @memberof S2CUserSeeCards
     * @instance
     */
    S2CUserSeeCards.prototype.cards = $util.newBuffer([]);

    /**
     * S2CUserSeeCards cardType.
     * @member {number} cardType
     * @memberof S2CUserSeeCards
     * @instance
     */
    S2CUserSeeCards.prototype.cardType = 0;

    /**
     * Creates a new S2CUserSeeCards instance using the specified properties.
     * @function create
     * @memberof S2CUserSeeCards
     * @static
     * @param {IS2CUserSeeCards=} [properties] Properties to set
     * @returns {S2CUserSeeCards} S2CUserSeeCards instance
     */
    S2CUserSeeCards.create = function create(properties) {
        return new S2CUserSeeCards(properties);
    };

    /**
     * Encodes the specified S2CUserSeeCards message. Does not implicitly {@link S2CUserSeeCards.verify|verify} messages.
     * @function encode
     * @memberof S2CUserSeeCards
     * @static
     * @param {IS2CUserSeeCards} message S2CUserSeeCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserSeeCards.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.cards != null && message.hasOwnProperty("cards"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cards);
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardType);
        return writer;
    };

    /**
     * Encodes the specified S2CUserSeeCards message, length delimited. Does not implicitly {@link S2CUserSeeCards.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserSeeCards
     * @static
     * @param {IS2CUserSeeCards} message S2CUserSeeCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserSeeCards.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserSeeCards message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserSeeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserSeeCards} S2CUserSeeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserSeeCards.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserSeeCards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.cards = reader.bytes();
                break;
            case 3:
                message.cardType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserSeeCards message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserSeeCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserSeeCards} S2CUserSeeCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserSeeCards.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserSeeCards message.
     * @function verify
     * @memberof S2CUserSeeCards
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserSeeCards.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.cards != null && message.hasOwnProperty("cards"))
            if (!(message.cards && typeof message.cards.length === "number" || $util.isString(message.cards)))
                return "cards: buffer expected";
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            if (!$util.isInteger(message.cardType))
                return "cardType: integer expected";
        return null;
    };

    /**
     * Creates a S2CUserSeeCards message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserSeeCards
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserSeeCards} S2CUserSeeCards
     */
    S2CUserSeeCards.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserSeeCards)
            return object;
        var message = new $root.S2CUserSeeCards();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.cards != null)
            if (typeof object.cards === "string")
                $util.base64.decode(object.cards, message.cards = $util.newBuffer($util.base64.length(object.cards)), 0);
            else if (object.cards.length)
                message.cards = object.cards;
        if (object.cardType != null)
            message.cardType = object.cardType | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CUserSeeCards message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserSeeCards
     * @static
     * @param {S2CUserSeeCards} message S2CUserSeeCards
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserSeeCards.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            if (options.bytes === String)
                object.cards = "";
            else {
                object.cards = [];
                if (options.bytes !== Array)
                    object.cards = $util.newBuffer(object.cards);
            }
            object.cardType = 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.cards != null && message.hasOwnProperty("cards"))
            object.cards = options.bytes === String ? $util.base64.encode(message.cards, 0, message.cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.cards) : message.cards;
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            object.cardType = message.cardType;
        return object;
    };

    /**
     * Converts this S2CUserSeeCards to JSON.
     * @function toJSON
     * @memberof S2CUserSeeCards
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserSeeCards.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CUserSeeCards;
})();

$root.S2CEndGame = (function() {

    /**
     * Properties of a S2CEndGame.
     * @exports IS2CEndGame
     * @interface IS2CEndGame
     * @property {IS2CUserInfo|null} [winner] S2CEndGame winner
     * @property {number|Long|null} [winAmount] S2CEndGame winAmount
     * @property {Array.<IS2CUserSeeCards>|null} [comparedUserArr] S2CEndGame comparedUserArr
     * @property {Array.<IS2CUserAmount>|null} [loserAmount] S2CEndGame loserAmount
     */

    /**
     * Constructs a new S2CEndGame.
     * @exports S2CEndGame
     * @classdesc Represents a S2CEndGame.
     * @implements IS2CEndGame
     * @constructor
     * @param {IS2CEndGame=} [properties] Properties to set
     */
    function S2CEndGame(properties) {
        this.comparedUserArr = [];
        this.loserAmount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CEndGame winner.
     * @member {IS2CUserInfo|null|undefined} winner
     * @memberof S2CEndGame
     * @instance
     */
    S2CEndGame.prototype.winner = null;

    /**
     * S2CEndGame winAmount.
     * @member {number|Long} winAmount
     * @memberof S2CEndGame
     * @instance
     */
    S2CEndGame.prototype.winAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CEndGame comparedUserArr.
     * @member {Array.<IS2CUserSeeCards>} comparedUserArr
     * @memberof S2CEndGame
     * @instance
     */
    S2CEndGame.prototype.comparedUserArr = $util.emptyArray;

    /**
     * S2CEndGame loserAmount.
     * @member {Array.<IS2CUserAmount>} loserAmount
     * @memberof S2CEndGame
     * @instance
     */
    S2CEndGame.prototype.loserAmount = $util.emptyArray;

    /**
     * Creates a new S2CEndGame instance using the specified properties.
     * @function create
     * @memberof S2CEndGame
     * @static
     * @param {IS2CEndGame=} [properties] Properties to set
     * @returns {S2CEndGame} S2CEndGame instance
     */
    S2CEndGame.create = function create(properties) {
        return new S2CEndGame(properties);
    };

    /**
     * Encodes the specified S2CEndGame message. Does not implicitly {@link S2CEndGame.verify|verify} messages.
     * @function encode
     * @memberof S2CEndGame
     * @static
     * @param {IS2CEndGame} message S2CEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEndGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.winner != null && message.hasOwnProperty("winner"))
            $root.S2CUserInfo.encode(message.winner, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.winAmount != null && message.hasOwnProperty("winAmount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.winAmount);
        if (message.comparedUserArr != null && message.comparedUserArr.length)
            for (var i = 0; i < message.comparedUserArr.length; ++i)
                $root.S2CUserSeeCards.encode(message.comparedUserArr[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.loserAmount != null && message.loserAmount.length)
            for (var i = 0; i < message.loserAmount.length; ++i)
                $root.S2CUserAmount.encode(message.loserAmount[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CEndGame message, length delimited. Does not implicitly {@link S2CEndGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEndGame
     * @static
     * @param {IS2CEndGame} message S2CEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEndGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEndGame message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEndGame} S2CEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEndGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEndGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.winner = $root.S2CUserInfo.decode(reader, reader.uint32());
                break;
            case 2:
                message.winAmount = reader.int64();
                break;
            case 3:
                if (!(message.comparedUserArr && message.comparedUserArr.length))
                    message.comparedUserArr = [];
                message.comparedUserArr.push($root.S2CUserSeeCards.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.loserAmount && message.loserAmount.length))
                    message.loserAmount = [];
                message.loserAmount.push($root.S2CUserAmount.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEndGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEndGame} S2CEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEndGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEndGame message.
     * @function verify
     * @memberof S2CEndGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEndGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.winner != null && message.hasOwnProperty("winner")) {
            var error = $root.S2CUserInfo.verify(message.winner);
            if (error)
                return "winner." + error;
        }
        if (message.winAmount != null && message.hasOwnProperty("winAmount"))
            if (!$util.isInteger(message.winAmount) && !(message.winAmount && $util.isInteger(message.winAmount.low) && $util.isInteger(message.winAmount.high)))
                return "winAmount: integer|Long expected";
        if (message.comparedUserArr != null && message.hasOwnProperty("comparedUserArr")) {
            if (!Array.isArray(message.comparedUserArr))
                return "comparedUserArr: array expected";
            for (var i = 0; i < message.comparedUserArr.length; ++i) {
                var error = $root.S2CUserSeeCards.verify(message.comparedUserArr[i]);
                if (error)
                    return "comparedUserArr." + error;
            }
        }
        if (message.loserAmount != null && message.hasOwnProperty("loserAmount")) {
            if (!Array.isArray(message.loserAmount))
                return "loserAmount: array expected";
            for (var i = 0; i < message.loserAmount.length; ++i) {
                var error = $root.S2CUserAmount.verify(message.loserAmount[i]);
                if (error)
                    return "loserAmount." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CEndGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEndGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEndGame} S2CEndGame
     */
    S2CEndGame.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEndGame)
            return object;
        var message = new $root.S2CEndGame();
        if (object.winner != null) {
            if (typeof object.winner !== "object")
                throw TypeError(".S2CEndGame.winner: object expected");
            message.winner = $root.S2CUserInfo.fromObject(object.winner);
        }
        if (object.winAmount != null)
            if ($util.Long)
                (message.winAmount = $util.Long.fromValue(object.winAmount)).unsigned = false;
            else if (typeof object.winAmount === "string")
                message.winAmount = parseInt(object.winAmount, 10);
            else if (typeof object.winAmount === "number")
                message.winAmount = object.winAmount;
            else if (typeof object.winAmount === "object")
                message.winAmount = new $util.LongBits(object.winAmount.low >>> 0, object.winAmount.high >>> 0).toNumber();
        if (object.comparedUserArr) {
            if (!Array.isArray(object.comparedUserArr))
                throw TypeError(".S2CEndGame.comparedUserArr: array expected");
            message.comparedUserArr = [];
            for (var i = 0; i < object.comparedUserArr.length; ++i) {
                if (typeof object.comparedUserArr[i] !== "object")
                    throw TypeError(".S2CEndGame.comparedUserArr: object expected");
                message.comparedUserArr[i] = $root.S2CUserSeeCards.fromObject(object.comparedUserArr[i]);
            }
        }
        if (object.loserAmount) {
            if (!Array.isArray(object.loserAmount))
                throw TypeError(".S2CEndGame.loserAmount: array expected");
            message.loserAmount = [];
            for (var i = 0; i < object.loserAmount.length; ++i) {
                if (typeof object.loserAmount[i] !== "object")
                    throw TypeError(".S2CEndGame.loserAmount: object expected");
                message.loserAmount[i] = $root.S2CUserAmount.fromObject(object.loserAmount[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CEndGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEndGame
     * @static
     * @param {S2CEndGame} message S2CEndGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEndGame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.comparedUserArr = [];
            object.loserAmount = [];
        }
        if (options.defaults) {
            object.winner = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.winAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.winAmount = options.longs === String ? "0" : 0;
        }
        if (message.winner != null && message.hasOwnProperty("winner"))
            object.winner = $root.S2CUserInfo.toObject(message.winner, options);
        if (message.winAmount != null && message.hasOwnProperty("winAmount"))
            if (typeof message.winAmount === "number")
                object.winAmount = options.longs === String ? String(message.winAmount) : message.winAmount;
            else
                object.winAmount = options.longs === String ? $util.Long.prototype.toString.call(message.winAmount) : options.longs === Number ? new $util.LongBits(message.winAmount.low >>> 0, message.winAmount.high >>> 0).toNumber() : message.winAmount;
        if (message.comparedUserArr && message.comparedUserArr.length) {
            object.comparedUserArr = [];
            for (var j = 0; j < message.comparedUserArr.length; ++j)
                object.comparedUserArr[j] = $root.S2CUserSeeCards.toObject(message.comparedUserArr[j], options);
        }
        if (message.loserAmount && message.loserAmount.length) {
            object.loserAmount = [];
            for (var j = 0; j < message.loserAmount.length; ++j)
                object.loserAmount[j] = $root.S2CUserAmount.toObject(message.loserAmount[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CEndGame to JSON.
     * @function toJSON
     * @memberof S2CEndGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEndGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CEndGame;
})();

$root.S2CUserAmount = (function() {

    /**
     * Properties of a S2CUserAmount.
     * @exports IS2CUserAmount
     * @interface IS2CUserAmount
     * @property {number|null} [userId] S2CUserAmount userId
     * @property {number|Long|null} [amount] S2CUserAmount amount
     */

    /**
     * Constructs a new S2CUserAmount.
     * @exports S2CUserAmount
     * @classdesc Represents a S2CUserAmount.
     * @implements IS2CUserAmount
     * @constructor
     * @param {IS2CUserAmount=} [properties] Properties to set
     */
    function S2CUserAmount(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserAmount userId.
     * @member {number} userId
     * @memberof S2CUserAmount
     * @instance
     */
    S2CUserAmount.prototype.userId = 0;

    /**
     * S2CUserAmount amount.
     * @member {number|Long} amount
     * @memberof S2CUserAmount
     * @instance
     */
    S2CUserAmount.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CUserAmount instance using the specified properties.
     * @function create
     * @memberof S2CUserAmount
     * @static
     * @param {IS2CUserAmount=} [properties] Properties to set
     * @returns {S2CUserAmount} S2CUserAmount instance
     */
    S2CUserAmount.create = function create(properties) {
        return new S2CUserAmount(properties);
    };

    /**
     * Encodes the specified S2CUserAmount message. Does not implicitly {@link S2CUserAmount.verify|verify} messages.
     * @function encode
     * @memberof S2CUserAmount
     * @static
     * @param {IS2CUserAmount} message S2CUserAmount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserAmount.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
        return writer;
    };

    /**
     * Encodes the specified S2CUserAmount message, length delimited. Does not implicitly {@link S2CUserAmount.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserAmount
     * @static
     * @param {IS2CUserAmount} message S2CUserAmount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserAmount.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserAmount message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserAmount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserAmount} S2CUserAmount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserAmount.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserAmount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.amount = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserAmount message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserAmount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserAmount} S2CUserAmount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserAmount.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserAmount message.
     * @function verify
     * @memberof S2CUserAmount
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserAmount.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CUserAmount message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserAmount
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserAmount} S2CUserAmount
     */
    S2CUserAmount.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserAmount)
            return object;
        var message = new $root.S2CUserAmount();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CUserAmount message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserAmount
     * @static
     * @param {S2CUserAmount} message S2CUserAmount
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserAmount.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        return object;
    };

    /**
     * Converts this S2CUserAmount to JSON.
     * @function toJSON
     * @memberof S2CUserAmount
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserAmount.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CUserAmount;
})();

$root.S2CTickerStart = (function() {

    /**
     * Properties of a S2CTickerStart.
     * @exports IS2CTickerStart
     * @interface IS2CTickerStart
     * @property {number|null} [ticker] S2CTickerStart ticker
     */

    /**
     * Constructs a new S2CTickerStart.
     * @exports S2CTickerStart
     * @classdesc Represents a S2CTickerStart.
     * @implements IS2CTickerStart
     * @constructor
     * @param {IS2CTickerStart=} [properties] Properties to set
     */
    function S2CTickerStart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CTickerStart ticker.
     * @member {number} ticker
     * @memberof S2CTickerStart
     * @instance
     */
    S2CTickerStart.prototype.ticker = 0;

    /**
     * Creates a new S2CTickerStart instance using the specified properties.
     * @function create
     * @memberof S2CTickerStart
     * @static
     * @param {IS2CTickerStart=} [properties] Properties to set
     * @returns {S2CTickerStart} S2CTickerStart instance
     */
    S2CTickerStart.create = function create(properties) {
        return new S2CTickerStart(properties);
    };

    /**
     * Encodes the specified S2CTickerStart message. Does not implicitly {@link S2CTickerStart.verify|verify} messages.
     * @function encode
     * @memberof S2CTickerStart
     * @static
     * @param {IS2CTickerStart} message S2CTickerStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTickerStart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ticker);
        return writer;
    };

    /**
     * Encodes the specified S2CTickerStart message, length delimited. Does not implicitly {@link S2CTickerStart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CTickerStart
     * @static
     * @param {IS2CTickerStart} message S2CTickerStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CTickerStart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CTickerStart message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTickerStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CTickerStart} S2CTickerStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTickerStart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CTickerStart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ticker = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CTickerStart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CTickerStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CTickerStart} S2CTickerStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTickerStart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CTickerStart message.
     * @function verify
     * @memberof S2CTickerStart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CTickerStart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            if (!$util.isInteger(message.ticker))
                return "ticker: integer expected";
        return null;
    };

    /**
     * Creates a S2CTickerStart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CTickerStart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CTickerStart} S2CTickerStart
     */
    S2CTickerStart.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CTickerStart)
            return object;
        var message = new $root.S2CTickerStart();
        if (object.ticker != null)
            message.ticker = object.ticker | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CTickerStart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CTickerStart
     * @static
     * @param {S2CTickerStart} message S2CTickerStart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CTickerStart.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ticker = 0;
        if (message.ticker != null && message.hasOwnProperty("ticker"))
            object.ticker = message.ticker;
        return object;
    };

    /**
     * Converts this S2CTickerStart to JSON.
     * @function toJSON
     * @memberof S2CTickerStart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CTickerStart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2CTickerStart;
})();

module.exports = $root;
