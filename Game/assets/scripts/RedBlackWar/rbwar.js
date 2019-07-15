/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ReceiveMessageType enum.
 * @exports ReceiveMessageType
 * @enum {string}
 * @property {number} StartID=0 StartID value
 * @property {number} BetID=1 BetID value
 * @property {number} SitDown=2 SitDown value
 * @property {number} GetTrend=3 GetTrend value
 * @property {number} GetUserListInfo=4 GetUserListInfo value
 */
$root.ReceiveMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "StartID"] = 0;
    values[valuesById[1] = "BetID"] = 1;
    values[valuesById[2] = "SitDown"] = 2;
    values[valuesById[3] = "GetTrend"] = 3;
    values[valuesById[4] = "GetUserListInfo"] = 4;
    return values;
})();

/**
 * SendToClientMessageType enum.
 * @exports SendToClientMessageType
 * @enum {string}
 * @property {number} RestartID=0 RestartID value
 * @property {number} BetRet=1 BetRet value
 * @property {number} BetFailID=2 BetFailID value
 * @property {number} BetSuccessMessageID=3 BetSuccessMessageID value
 * @property {number} SceneID=4 SceneID value
 * @property {number} Status=6 Status value
 * @property {number} Settle=7 Settle value
 * @property {number} SitDownFail=8 SitDownFail value
 * @property {number} BetInfo=9 BetInfo value
 * @property {number} TrendInfo=10 TrendInfo value
 * @property {number} UserListInfo=11 UserListInfo value
 * @property {number} SceneSettleInfo=12 SceneSettleInfo value
 */
$root.SendToClientMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RestartID"] = 0;
    values[valuesById[1] = "BetRet"] = 1;
    values[valuesById[2] = "BetFailID"] = 2;
    values[valuesById[3] = "BetSuccessMessageID"] = 3;
    values[valuesById[4] = "SceneID"] = 4;
    values[valuesById[6] = "Status"] = 6;
    values[valuesById[7] = "Settle"] = 7;
    values[valuesById[8] = "SitDownFail"] = 8;
    values[valuesById[9] = "BetInfo"] = 9;
    values[valuesById[10] = "TrendInfo"] = 10;
    values[valuesById[11] = "UserListInfo"] = 11;
    values[valuesById[12] = "SceneSettleInfo"] = 12;
    return values;
})();

/**
 * GameStatus enum.
 * @exports GameStatus
 * @enum {string}
 * @property {number} StartStatus=0 StartStatus value
 * @property {number} StartMovie=1 StartMovie value
 * @property {number} BetStatus=2 BetStatus value
 * @property {number} EndBetMovie=3 EndBetMovie value
 * @property {number} SettleStatus=4 SettleStatus value
 */
$root.GameStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "StartStatus"] = 0;
    values[valuesById[1] = "StartMovie"] = 1;
    values[valuesById[2] = "BetStatus"] = 2;
    values[valuesById[3] = "EndBetMovie"] = 3;
    values[valuesById[4] = "SettleStatus"] = 4;
    return values;
})();

/**
 * CardsType enum.
 * @exports CardsType
 * @enum {string}
 * @property {number} Normal=0 Normal value
 * @property {number} DanZhang=1 DanZhang value
 * @property {number} DuiZi=2 DuiZi value
 * @property {number} ShunZi=3 ShunZi value
 * @property {number} JinHua=4 JinHua value
 * @property {number} ShunJin=5 ShunJin value
 * @property {number} BaoZi=6 BaoZi value
 */
$root.CardsType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Normal"] = 0;
    values[valuesById[1] = "DanZhang"] = 1;
    values[valuesById[2] = "DuiZi"] = 2;
    values[valuesById[3] = "ShunZi"] = 3;
    values[valuesById[4] = "JinHua"] = 4;
    values[valuesById[5] = "ShunJin"] = 5;
    values[valuesById[6] = "BaoZi"] = 6;
    return values;
})();

$root.StatusMessage = (function() {

    /**
     * Properties of a StatusMessage.
     * @exports IStatusMessage
     * @interface IStatusMessage
     * @property {number|null} [Status] StatusMessage Status
     * @property {number|null} [StatusTime] StatusMessage StatusTime
     */

    /**
     * Constructs a new StatusMessage.
     * @exports StatusMessage
     * @classdesc Represents a StatusMessage.
     * @implements IStatusMessage
     * @constructor
     * @param {IStatusMessage=} [properties] Properties to set
     */
    function StatusMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StatusMessage Status.
     * @member {number} Status
     * @memberof StatusMessage
     * @instance
     */
    StatusMessage.prototype.Status = 0;

    /**
     * StatusMessage StatusTime.
     * @member {number} StatusTime
     * @memberof StatusMessage
     * @instance
     */
    StatusMessage.prototype.StatusTime = 0;

    /**
     * Creates a new StatusMessage instance using the specified properties.
     * @function create
     * @memberof StatusMessage
     * @static
     * @param {IStatusMessage=} [properties] Properties to set
     * @returns {StatusMessage} StatusMessage instance
     */
    StatusMessage.create = function create(properties) {
        return new StatusMessage(properties);
    };

    /**
     * Encodes the specified StatusMessage message. Does not implicitly {@link StatusMessage.verify|verify} messages.
     * @function encode
     * @memberof StatusMessage
     * @static
     * @param {IStatusMessage} message StatusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatusMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Status != null && message.hasOwnProperty("Status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Status);
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.StatusTime);
        return writer;
    };

    /**
     * Encodes the specified StatusMessage message, length delimited. Does not implicitly {@link StatusMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StatusMessage
     * @static
     * @param {IStatusMessage} message StatusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatusMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StatusMessage message from the specified reader or buffer.
     * @function decode
     * @memberof StatusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StatusMessage} StatusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatusMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Status = reader.int32();
                break;
            case 2:
                message.StatusTime = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StatusMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StatusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StatusMessage} StatusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatusMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StatusMessage message.
     * @function verify
     * @memberof StatusMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StatusMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Status != null && message.hasOwnProperty("Status"))
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            if (!$util.isInteger(message.StatusTime))
                return "StatusTime: integer expected";
        return null;
    };

    /**
     * Creates a StatusMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StatusMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StatusMessage} StatusMessage
     */
    StatusMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.StatusMessage)
            return object;
        var message = new $root.StatusMessage();
        if (object.Status != null)
            message.Status = object.Status | 0;
        if (object.StatusTime != null)
            message.StatusTime = object.StatusTime | 0;
        return message;
    };

    /**
     * Creates a plain object from a StatusMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StatusMessage
     * @static
     * @param {StatusMessage} message StatusMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StatusMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Status = 0;
            object.StatusTime = 0;
        }
        if (message.Status != null && message.hasOwnProperty("Status"))
            object.Status = message.Status;
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            object.StatusTime = message.StatusTime;
        return object;
    };

    /**
     * Converts this StatusMessage to JSON.
     * @function toJSON
     * @memberof StatusMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StatusMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StatusMessage;
})();

$root.BetFailMessage = (function() {

    /**
     * Properties of a BetFailMessage.
     * @exports IBetFailMessage
     * @interface IBetFailMessage
     * @property {string|null} [FailMessage] BetFailMessage FailMessage
     */

    /**
     * Constructs a new BetFailMessage.
     * @exports BetFailMessage
     * @classdesc Represents a BetFailMessage.
     * @implements IBetFailMessage
     * @constructor
     * @param {IBetFailMessage=} [properties] Properties to set
     */
    function BetFailMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BetFailMessage FailMessage.
     * @member {string} FailMessage
     * @memberof BetFailMessage
     * @instance
     */
    BetFailMessage.prototype.FailMessage = "";

    /**
     * Creates a new BetFailMessage instance using the specified properties.
     * @function create
     * @memberof BetFailMessage
     * @static
     * @param {IBetFailMessage=} [properties] Properties to set
     * @returns {BetFailMessage} BetFailMessage instance
     */
    BetFailMessage.create = function create(properties) {
        return new BetFailMessage(properties);
    };

    /**
     * Encodes the specified BetFailMessage message. Does not implicitly {@link BetFailMessage.verify|verify} messages.
     * @function encode
     * @memberof BetFailMessage
     * @static
     * @param {IBetFailMessage} message BetFailMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetFailMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.FailMessage != null && message.hasOwnProperty("FailMessage"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.FailMessage);
        return writer;
    };

    /**
     * Encodes the specified BetFailMessage message, length delimited. Does not implicitly {@link BetFailMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BetFailMessage
     * @static
     * @param {IBetFailMessage} message BetFailMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetFailMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BetFailMessage message from the specified reader or buffer.
     * @function decode
     * @memberof BetFailMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BetFailMessage} BetFailMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetFailMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BetFailMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.FailMessage = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BetFailMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BetFailMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BetFailMessage} BetFailMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetFailMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BetFailMessage message.
     * @function verify
     * @memberof BetFailMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BetFailMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.FailMessage != null && message.hasOwnProperty("FailMessage"))
            if (!$util.isString(message.FailMessage))
                return "FailMessage: string expected";
        return null;
    };

    /**
     * Creates a BetFailMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BetFailMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BetFailMessage} BetFailMessage
     */
    BetFailMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.BetFailMessage)
            return object;
        var message = new $root.BetFailMessage();
        if (object.FailMessage != null)
            message.FailMessage = String(object.FailMessage);
        return message;
    };

    /**
     * Creates a plain object from a BetFailMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BetFailMessage
     * @static
     * @param {BetFailMessage} message BetFailMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BetFailMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.FailMessage = "";
        if (message.FailMessage != null && message.hasOwnProperty("FailMessage"))
            object.FailMessage = message.FailMessage;
        return object;
    };

    /**
     * Converts this BetFailMessage to JSON.
     * @function toJSON
     * @memberof BetFailMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BetFailMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BetFailMessage;
})();

$root.BetSuccessMessage = (function() {

    /**
     * Properties of a BetSuccessMessage.
     * @exports IBetSuccessMessage
     * @interface IBetSuccessMessage
     * @property {number|null} [SeatId] BetSuccessMessage SeatId
     * @property {number|null} [BetIndex] BetSuccessMessage BetIndex
     * @property {number|null} [BetType] BetSuccessMessage BetType
     * @property {number|Long|null} [UserID] BetSuccessMessage UserID
     */

    /**
     * Constructs a new BetSuccessMessage.
     * @exports BetSuccessMessage
     * @classdesc Represents a BetSuccessMessage.
     * @implements IBetSuccessMessage
     * @constructor
     * @param {IBetSuccessMessage=} [properties] Properties to set
     */
    function BetSuccessMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BetSuccessMessage SeatId.
     * @member {number} SeatId
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.SeatId = 0;

    /**
     * BetSuccessMessage BetIndex.
     * @member {number} BetIndex
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.BetIndex = 0;

    /**
     * BetSuccessMessage BetType.
     * @member {number} BetType
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.BetType = 0;

    /**
     * BetSuccessMessage UserID.
     * @member {number|Long} UserID
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BetSuccessMessage instance using the specified properties.
     * @function create
     * @memberof BetSuccessMessage
     * @static
     * @param {IBetSuccessMessage=} [properties] Properties to set
     * @returns {BetSuccessMessage} BetSuccessMessage instance
     */
    BetSuccessMessage.create = function create(properties) {
        return new BetSuccessMessage(properties);
    };

    /**
     * Encodes the specified BetSuccessMessage message. Does not implicitly {@link BetSuccessMessage.verify|verify} messages.
     * @function encode
     * @memberof BetSuccessMessage
     * @static
     * @param {IBetSuccessMessage} message BetSuccessMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetSuccessMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatId);
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetIndex);
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BetType);
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.UserID);
        return writer;
    };

    /**
     * Encodes the specified BetSuccessMessage message, length delimited. Does not implicitly {@link BetSuccessMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BetSuccessMessage
     * @static
     * @param {IBetSuccessMessage} message BetSuccessMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetSuccessMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BetSuccessMessage message from the specified reader or buffer.
     * @function decode
     * @memberof BetSuccessMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BetSuccessMessage} BetSuccessMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetSuccessMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BetSuccessMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.SeatId = reader.int32();
                break;
            case 2:
                message.BetIndex = reader.int32();
                break;
            case 3:
                message.BetType = reader.int32();
                break;
            case 4:
                message.UserID = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BetSuccessMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BetSuccessMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BetSuccessMessage} BetSuccessMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetSuccessMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BetSuccessMessage message.
     * @function verify
     * @memberof BetSuccessMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BetSuccessMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            if (!$util.isInteger(message.SeatId))
                return "SeatId: integer expected";
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            if (!$util.isInteger(message.BetIndex))
                return "BetIndex: integer expected";
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                return "UserID: integer|Long expected";
        return null;
    };

    /**
     * Creates a BetSuccessMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BetSuccessMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BetSuccessMessage} BetSuccessMessage
     */
    BetSuccessMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.BetSuccessMessage)
            return object;
        var message = new $root.BetSuccessMessage();
        if (object.SeatId != null)
            message.SeatId = object.SeatId | 0;
        if (object.BetIndex != null)
            message.BetIndex = object.BetIndex | 0;
        if (object.BetType != null)
            message.BetType = object.BetType | 0;
        if (object.UserID != null)
            if ($util.Long)
                (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
            else if (typeof object.UserID === "string")
                message.UserID = parseInt(object.UserID, 10);
            else if (typeof object.UserID === "number")
                message.UserID = object.UserID;
            else if (typeof object.UserID === "object")
                message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BetSuccessMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BetSuccessMessage
     * @static
     * @param {BetSuccessMessage} message BetSuccessMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BetSuccessMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.SeatId = 0;
            object.BetIndex = 0;
            object.BetType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserID = options.longs === String ? "0" : 0;
        }
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            object.SeatId = message.SeatId;
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            object.BetIndex = message.BetIndex;
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            object.BetType = message.BetType;
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (typeof message.UserID === "number")
                object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
            else
                object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
        return object;
    };

    /**
     * Converts this BetSuccessMessage to JSON.
     * @function toJSON
     * @memberof BetSuccessMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BetSuccessMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BetSuccessMessage;
})();

$root.Bet = (function() {

    /**
     * Properties of a Bet.
     * @exports IBet
     * @interface IBet
     * @property {number|null} [BetType] Bet BetType
     * @property {number|null} [BetIndex] Bet BetIndex
     */

    /**
     * Constructs a new Bet.
     * @exports Bet
     * @classdesc Represents a Bet.
     * @implements IBet
     * @constructor
     * @param {IBet=} [properties] Properties to set
     */
    function Bet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet BetType.
     * @member {number} BetType
     * @memberof Bet
     * @instance
     */
    Bet.prototype.BetType = 0;

    /**
     * Bet BetIndex.
     * @member {number} BetIndex
     * @memberof Bet
     * @instance
     */
    Bet.prototype.BetIndex = 0;

    /**
     * Creates a new Bet instance using the specified properties.
     * @function create
     * @memberof Bet
     * @static
     * @param {IBet=} [properties] Properties to set
     * @returns {Bet} Bet instance
     */
    Bet.create = function create(properties) {
        return new Bet(properties);
    };

    /**
     * Encodes the specified Bet message. Does not implicitly {@link Bet.verify|verify} messages.
     * @function encode
     * @memberof Bet
     * @static
     * @param {IBet} message Bet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetIndex);
        return writer;
    };

    /**
     * Encodes the specified Bet message, length delimited. Does not implicitly {@link Bet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Bet
     * @static
     * @param {IBet} message Bet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Bet message from the specified reader or buffer.
     * @function decode
     * @memberof Bet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet} Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.BetType = reader.int32();
                break;
            case 2:
                message.BetIndex = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Bet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Bet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Bet} Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Bet message.
     * @function verify
     * @memberof Bet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Bet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            if (!$util.isInteger(message.BetIndex))
                return "BetIndex: integer expected";
        return null;
    };

    /**
     * Creates a Bet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Bet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Bet} Bet
     */
    Bet.fromObject = function fromObject(object) {
        if (object instanceof $root.Bet)
            return object;
        var message = new $root.Bet();
        if (object.BetType != null)
            message.BetType = object.BetType | 0;
        if (object.BetIndex != null)
            message.BetIndex = object.BetIndex | 0;
        return message;
    };

    /**
     * Creates a plain object from a Bet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Bet
     * @static
     * @param {Bet} message Bet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Bet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.BetType = 0;
            object.BetIndex = 0;
        }
        if (message.BetType != null && message.hasOwnProperty("BetType"))
            object.BetType = message.BetType;
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            object.BetIndex = message.BetIndex;
        return object;
    };

    /**
     * Converts this Bet to JSON.
     * @function toJSON
     * @memberof Bet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Bet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Bet;
})();

$root.SeatUser = (function() {

    /**
     * Properties of a SeatUser.
     * @exports ISeatUser
     * @interface ISeatUser
     * @property {string|null} [Nick] SeatUser Nick
     * @property {number|null} [Head] SeatUser Head
     * @property {number|Long|null} [Score] SeatUser Score
     * @property {boolean|null} [IsBigWinner] SeatUser IsBigWinner
     * @property {boolean|null} [IsMaster] SeatUser IsMaster
     * @property {number|null} [SeatId] SeatUser SeatId
     * @property {number|Long|null} [UserID] SeatUser UserID
     */

    /**
     * Constructs a new SeatUser.
     * @exports SeatUser
     * @classdesc Represents a SeatUser.
     * @implements ISeatUser
     * @constructor
     * @param {ISeatUser=} [properties] Properties to set
     */
    function SeatUser(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SeatUser Nick.
     * @member {string} Nick
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.Nick = "";

    /**
     * SeatUser Head.
     * @member {number} Head
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.Head = 0;

    /**
     * SeatUser Score.
     * @member {number|Long} Score
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SeatUser IsBigWinner.
     * @member {boolean} IsBigWinner
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.IsBigWinner = false;

    /**
     * SeatUser IsMaster.
     * @member {boolean} IsMaster
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.IsMaster = false;

    /**
     * SeatUser SeatId.
     * @member {number} SeatId
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.SeatId = 0;

    /**
     * SeatUser UserID.
     * @member {number|Long} UserID
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new SeatUser instance using the specified properties.
     * @function create
     * @memberof SeatUser
     * @static
     * @param {ISeatUser=} [properties] Properties to set
     * @returns {SeatUser} SeatUser instance
     */
    SeatUser.create = function create(properties) {
        return new SeatUser(properties);
    };

    /**
     * Encodes the specified SeatUser message. Does not implicitly {@link SeatUser.verify|verify} messages.
     * @function encode
     * @memberof SeatUser
     * @static
     * @param {ISeatUser} message SeatUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SeatUser.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Nick != null && message.hasOwnProperty("Nick"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Nick);
        if (message.Head != null && message.hasOwnProperty("Head"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Head);
        if (message.Score != null && message.hasOwnProperty("Score"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Score);
        if (message.IsBigWinner != null && message.hasOwnProperty("IsBigWinner"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsBigWinner);
        if (message.IsMaster != null && message.hasOwnProperty("IsMaster"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsMaster);
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.SeatId);
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.UserID);
        return writer;
    };

    /**
     * Encodes the specified SeatUser message, length delimited. Does not implicitly {@link SeatUser.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SeatUser
     * @static
     * @param {ISeatUser} message SeatUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SeatUser.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SeatUser message from the specified reader or buffer.
     * @function decode
     * @memberof SeatUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SeatUser} SeatUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SeatUser.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SeatUser();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Nick = reader.string();
                break;
            case 2:
                message.Head = reader.int32();
                break;
            case 3:
                message.Score = reader.int64();
                break;
            case 4:
                message.IsBigWinner = reader.bool();
                break;
            case 5:
                message.IsMaster = reader.bool();
                break;
            case 6:
                message.SeatId = reader.int32();
                break;
            case 7:
                message.UserID = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SeatUser message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SeatUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SeatUser} SeatUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SeatUser.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SeatUser message.
     * @function verify
     * @memberof SeatUser
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SeatUser.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Nick != null && message.hasOwnProperty("Nick"))
            if (!$util.isString(message.Nick))
                return "Nick: string expected";
        if (message.Head != null && message.hasOwnProperty("Head"))
            if (!$util.isInteger(message.Head))
                return "Head: integer expected";
        if (message.Score != null && message.hasOwnProperty("Score"))
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score: integer|Long expected";
        if (message.IsBigWinner != null && message.hasOwnProperty("IsBigWinner"))
            if (typeof message.IsBigWinner !== "boolean")
                return "IsBigWinner: boolean expected";
        if (message.IsMaster != null && message.hasOwnProperty("IsMaster"))
            if (typeof message.IsMaster !== "boolean")
                return "IsMaster: boolean expected";
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            if (!$util.isInteger(message.SeatId))
                return "SeatId: integer expected";
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                return "UserID: integer|Long expected";
        return null;
    };

    /**
     * Creates a SeatUser message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SeatUser
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SeatUser} SeatUser
     */
    SeatUser.fromObject = function fromObject(object) {
        if (object instanceof $root.SeatUser)
            return object;
        var message = new $root.SeatUser();
        if (object.Nick != null)
            message.Nick = String(object.Nick);
        if (object.Head != null)
            message.Head = object.Head | 0;
        if (object.Score != null)
            if ($util.Long)
                (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
            else if (typeof object.Score === "string")
                message.Score = parseInt(object.Score, 10);
            else if (typeof object.Score === "number")
                message.Score = object.Score;
            else if (typeof object.Score === "object")
                message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
        if (object.IsBigWinner != null)
            message.IsBigWinner = Boolean(object.IsBigWinner);
        if (object.IsMaster != null)
            message.IsMaster = Boolean(object.IsMaster);
        if (object.SeatId != null)
            message.SeatId = object.SeatId | 0;
        if (object.UserID != null)
            if ($util.Long)
                (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
            else if (typeof object.UserID === "string")
                message.UserID = parseInt(object.UserID, 10);
            else if (typeof object.UserID === "number")
                message.UserID = object.UserID;
            else if (typeof object.UserID === "object")
                message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a SeatUser message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SeatUser
     * @static
     * @param {SeatUser} message SeatUser
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SeatUser.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Nick = "";
            object.Head = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Score = options.longs === String ? "0" : 0;
            object.IsBigWinner = false;
            object.IsMaster = false;
            object.SeatId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserID = options.longs === String ? "0" : 0;
        }
        if (message.Nick != null && message.hasOwnProperty("Nick"))
            object.Nick = message.Nick;
        if (message.Head != null && message.hasOwnProperty("Head"))
            object.Head = message.Head;
        if (message.Score != null && message.hasOwnProperty("Score"))
            if (typeof message.Score === "number")
                object.Score = options.longs === String ? String(message.Score) : message.Score;
            else
                object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
        if (message.IsBigWinner != null && message.hasOwnProperty("IsBigWinner"))
            object.IsBigWinner = message.IsBigWinner;
        if (message.IsMaster != null && message.hasOwnProperty("IsMaster"))
            object.IsMaster = message.IsMaster;
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            object.SeatId = message.SeatId;
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (typeof message.UserID === "number")
                object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
            else
                object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
        return object;
    };

    /**
     * Converts this SeatUser to JSON.
     * @function toJSON
     * @memberof SeatUser
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SeatUser.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SeatUser;
})();

$root.SceneMessage = (function() {

    /**
     * Properties of a SceneMessage.
     * @exports ISceneMessage
     * @interface ISceneMessage
     * @property {Array.<ISeatUser>|null} [UserData] SceneMessage UserData
     */

    /**
     * Constructs a new SceneMessage.
     * @exports SceneMessage
     * @classdesc Represents a SceneMessage.
     * @implements ISceneMessage
     * @constructor
     * @param {ISceneMessage=} [properties] Properties to set
     */
    function SceneMessage(properties) {
        this.UserData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SceneMessage UserData.
     * @member {Array.<ISeatUser>} UserData
     * @memberof SceneMessage
     * @instance
     */
    SceneMessage.prototype.UserData = $util.emptyArray;

    /**
     * Creates a new SceneMessage instance using the specified properties.
     * @function create
     * @memberof SceneMessage
     * @static
     * @param {ISceneMessage=} [properties] Properties to set
     * @returns {SceneMessage} SceneMessage instance
     */
    SceneMessage.create = function create(properties) {
        return new SceneMessage(properties);
    };

    /**
     * Encodes the specified SceneMessage message. Does not implicitly {@link SceneMessage.verify|verify} messages.
     * @function encode
     * @memberof SceneMessage
     * @static
     * @param {ISceneMessage} message SceneMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserData != null && message.UserData.length)
            for (var i = 0; i < message.UserData.length; ++i)
                $root.SeatUser.encode(message.UserData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SceneMessage message, length delimited. Does not implicitly {@link SceneMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SceneMessage
     * @static
     * @param {ISceneMessage} message SceneMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SceneMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SceneMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SceneMessage} SceneMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SceneMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.UserData && message.UserData.length))
                    message.UserData = [];
                message.UserData.push($root.SeatUser.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SceneMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SceneMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SceneMessage} SceneMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SceneMessage message.
     * @function verify
     * @memberof SceneMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SceneMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserData != null && message.hasOwnProperty("UserData")) {
            if (!Array.isArray(message.UserData))
                return "UserData: array expected";
            for (var i = 0; i < message.UserData.length; ++i) {
                var error = $root.SeatUser.verify(message.UserData[i]);
                if (error)
                    return "UserData." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SceneMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SceneMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SceneMessage} SceneMessage
     */
    SceneMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SceneMessage)
            return object;
        var message = new $root.SceneMessage();
        if (object.UserData) {
            if (!Array.isArray(object.UserData))
                throw TypeError(".SceneMessage.UserData: array expected");
            message.UserData = [];
            for (var i = 0; i < object.UserData.length; ++i) {
                if (typeof object.UserData[i] !== "object")
                    throw TypeError(".SceneMessage.UserData: object expected");
                message.UserData[i] = $root.SeatUser.fromObject(object.UserData[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SceneMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SceneMessage
     * @static
     * @param {SceneMessage} message SceneMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SceneMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.UserData = [];
        if (message.UserData && message.UserData.length) {
            object.UserData = [];
            for (var j = 0; j < message.UserData.length; ++j)
                object.UserData[j] = $root.SeatUser.toObject(message.UserData[j], options);
        }
        return object;
    };

    /**
     * Converts this SceneMessage to JSON.
     * @function toJSON
     * @memberof SceneMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SceneMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SceneMessage;
})();

$root.UserSitDown = (function() {

    /**
     * Properties of a UserSitDown.
     * @exports IUserSitDown
     * @interface IUserSitDown
     * @property {number|null} [ChairNo] UserSitDown ChairNo
     */

    /**
     * Constructs a new UserSitDown.
     * @exports UserSitDown
     * @classdesc Represents a UserSitDown.
     * @implements IUserSitDown
     * @constructor
     * @param {IUserSitDown=} [properties] Properties to set
     */
    function UserSitDown(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserSitDown ChairNo.
     * @member {number} ChairNo
     * @memberof UserSitDown
     * @instance
     */
    UserSitDown.prototype.ChairNo = 0;

    /**
     * Creates a new UserSitDown instance using the specified properties.
     * @function create
     * @memberof UserSitDown
     * @static
     * @param {IUserSitDown=} [properties] Properties to set
     * @returns {UserSitDown} UserSitDown instance
     */
    UserSitDown.create = function create(properties) {
        return new UserSitDown(properties);
    };

    /**
     * Encodes the specified UserSitDown message. Does not implicitly {@link UserSitDown.verify|verify} messages.
     * @function encode
     * @memberof UserSitDown
     * @static
     * @param {IUserSitDown} message UserSitDown message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSitDown.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ChairNo != null && message.hasOwnProperty("ChairNo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ChairNo);
        return writer;
    };

    /**
     * Encodes the specified UserSitDown message, length delimited. Does not implicitly {@link UserSitDown.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserSitDown
     * @static
     * @param {IUserSitDown} message UserSitDown message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSitDown.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserSitDown message from the specified reader or buffer.
     * @function decode
     * @memberof UserSitDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserSitDown} UserSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSitDown.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserSitDown();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ChairNo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserSitDown message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserSitDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserSitDown} UserSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSitDown.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserSitDown message.
     * @function verify
     * @memberof UserSitDown
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserSitDown.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ChairNo != null && message.hasOwnProperty("ChairNo"))
            if (!$util.isInteger(message.ChairNo))
                return "ChairNo: integer expected";
        return null;
    };

    /**
     * Creates a UserSitDown message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserSitDown
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserSitDown} UserSitDown
     */
    UserSitDown.fromObject = function fromObject(object) {
        if (object instanceof $root.UserSitDown)
            return object;
        var message = new $root.UserSitDown();
        if (object.ChairNo != null)
            message.ChairNo = object.ChairNo | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserSitDown message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserSitDown
     * @static
     * @param {UserSitDown} message UserSitDown
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserSitDown.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ChairNo = 0;
        if (message.ChairNo != null && message.hasOwnProperty("ChairNo"))
            object.ChairNo = message.ChairNo;
        return object;
    };

    /**
     * Converts this UserSitDown to JSON.
     * @function toJSON
     * @memberof UserSitDown
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserSitDown.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserSitDown;
})();

$root.UserSitDownFail = (function() {

    /**
     * Properties of a UserSitDownFail.
     * @exports IUserSitDownFail
     * @interface IUserSitDownFail
     * @property {number|null} [FailNo] UserSitDownFail FailNo
     */

    /**
     * Constructs a new UserSitDownFail.
     * @exports UserSitDownFail
     * @classdesc Represents a UserSitDownFail.
     * @implements IUserSitDownFail
     * @constructor
     * @param {IUserSitDownFail=} [properties] Properties to set
     */
    function UserSitDownFail(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserSitDownFail FailNo.
     * @member {number} FailNo
     * @memberof UserSitDownFail
     * @instance
     */
    UserSitDownFail.prototype.FailNo = 0;

    /**
     * Creates a new UserSitDownFail instance using the specified properties.
     * @function create
     * @memberof UserSitDownFail
     * @static
     * @param {IUserSitDownFail=} [properties] Properties to set
     * @returns {UserSitDownFail} UserSitDownFail instance
     */
    UserSitDownFail.create = function create(properties) {
        return new UserSitDownFail(properties);
    };

    /**
     * Encodes the specified UserSitDownFail message. Does not implicitly {@link UserSitDownFail.verify|verify} messages.
     * @function encode
     * @memberof UserSitDownFail
     * @static
     * @param {IUserSitDownFail} message UserSitDownFail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSitDownFail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.FailNo != null && message.hasOwnProperty("FailNo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FailNo);
        return writer;
    };

    /**
     * Encodes the specified UserSitDownFail message, length delimited. Does not implicitly {@link UserSitDownFail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserSitDownFail
     * @static
     * @param {IUserSitDownFail} message UserSitDownFail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSitDownFail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserSitDownFail message from the specified reader or buffer.
     * @function decode
     * @memberof UserSitDownFail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserSitDownFail} UserSitDownFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSitDownFail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserSitDownFail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.FailNo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserSitDownFail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserSitDownFail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserSitDownFail} UserSitDownFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSitDownFail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserSitDownFail message.
     * @function verify
     * @memberof UserSitDownFail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserSitDownFail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.FailNo != null && message.hasOwnProperty("FailNo"))
            if (!$util.isInteger(message.FailNo))
                return "FailNo: integer expected";
        return null;
    };

    /**
     * Creates a UserSitDownFail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserSitDownFail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserSitDownFail} UserSitDownFail
     */
    UserSitDownFail.fromObject = function fromObject(object) {
        if (object instanceof $root.UserSitDownFail)
            return object;
        var message = new $root.UserSitDownFail();
        if (object.FailNo != null)
            message.FailNo = object.FailNo | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserSitDownFail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserSitDownFail
     * @static
     * @param {UserSitDownFail} message UserSitDownFail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserSitDownFail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.FailNo = 0;
        if (message.FailNo != null && message.hasOwnProperty("FailNo"))
            object.FailNo = message.FailNo;
        return object;
    };

    /**
     * Converts this UserSitDownFail to JSON.
     * @function toJSON
     * @memberof UserSitDownFail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserSitDownFail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserSitDownFail;
})();

$root.Red = (function() {

    /**
     * Properties of a Red.
     * @exports IRed
     * @interface IRed
     * @property {Uint8Array|null} [Card] Red Card
     */

    /**
     * Constructs a new Red.
     * @exports Red
     * @classdesc Represents a Red.
     * @implements IRed
     * @constructor
     * @param {IRed=} [properties] Properties to set
     */
    function Red(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Red Card.
     * @member {Uint8Array} Card
     * @memberof Red
     * @instance
     */
    Red.prototype.Card = $util.newBuffer([]);

    /**
     * Creates a new Red instance using the specified properties.
     * @function create
     * @memberof Red
     * @static
     * @param {IRed=} [properties] Properties to set
     * @returns {Red} Red instance
     */
    Red.create = function create(properties) {
        return new Red(properties);
    };

    /**
     * Encodes the specified Red message. Does not implicitly {@link Red.verify|verify} messages.
     * @function encode
     * @memberof Red
     * @static
     * @param {IRed} message Red message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Red.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Card != null && message.hasOwnProperty("Card"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Card);
        return writer;
    };

    /**
     * Encodes the specified Red message, length delimited. Does not implicitly {@link Red.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Red
     * @static
     * @param {IRed} message Red message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Red.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Red message from the specified reader or buffer.
     * @function decode
     * @memberof Red
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Red} Red
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Red.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Red();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Card = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Red message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Red
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Red} Red
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Red.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Red message.
     * @function verify
     * @memberof Red
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Red.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Card != null && message.hasOwnProperty("Card"))
            if (!(message.Card && typeof message.Card.length === "number" || $util.isString(message.Card)))
                return "Card: buffer expected";
        return null;
    };

    /**
     * Creates a Red message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Red
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Red} Red
     */
    Red.fromObject = function fromObject(object) {
        if (object instanceof $root.Red)
            return object;
        var message = new $root.Red();
        if (object.Card != null)
            if (typeof object.Card === "string")
                $util.base64.decode(object.Card, message.Card = $util.newBuffer($util.base64.length(object.Card)), 0);
            else if (object.Card.length)
                message.Card = object.Card;
        return message;
    };

    /**
     * Creates a plain object from a Red message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Red
     * @static
     * @param {Red} message Red
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Red.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.Card = "";
            else {
                object.Card = [];
                if (options.bytes !== Array)
                    object.Card = $util.newBuffer(object.Card);
            }
        if (message.Card != null && message.hasOwnProperty("Card"))
            object.Card = options.bytes === String ? $util.base64.encode(message.Card, 0, message.Card.length) : options.bytes === Array ? Array.prototype.slice.call(message.Card) : message.Card;
        return object;
    };

    /**
     * Converts this Red to JSON.
     * @function toJSON
     * @memberof Red
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Red.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Red;
})();

$root.Black = (function() {

    /**
     * Properties of a Black.
     * @exports IBlack
     * @interface IBlack
     * @property {Uint8Array|null} [Card] Black Card
     */

    /**
     * Constructs a new Black.
     * @exports Black
     * @classdesc Represents a Black.
     * @implements IBlack
     * @constructor
     * @param {IBlack=} [properties] Properties to set
     */
    function Black(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Black Card.
     * @member {Uint8Array} Card
     * @memberof Black
     * @instance
     */
    Black.prototype.Card = $util.newBuffer([]);

    /**
     * Creates a new Black instance using the specified properties.
     * @function create
     * @memberof Black
     * @static
     * @param {IBlack=} [properties] Properties to set
     * @returns {Black} Black instance
     */
    Black.create = function create(properties) {
        return new Black(properties);
    };

    /**
     * Encodes the specified Black message. Does not implicitly {@link Black.verify|verify} messages.
     * @function encode
     * @memberof Black
     * @static
     * @param {IBlack} message Black message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Black.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Card != null && message.hasOwnProperty("Card"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Card);
        return writer;
    };

    /**
     * Encodes the specified Black message, length delimited. Does not implicitly {@link Black.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Black
     * @static
     * @param {IBlack} message Black message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Black.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Black message from the specified reader or buffer.
     * @function decode
     * @memberof Black
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Black} Black
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Black.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Black();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Card = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Black message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Black
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Black} Black
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Black.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Black message.
     * @function verify
     * @memberof Black
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Black.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Card != null && message.hasOwnProperty("Card"))
            if (!(message.Card && typeof message.Card.length === "number" || $util.isString(message.Card)))
                return "Card: buffer expected";
        return null;
    };

    /**
     * Creates a Black message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Black
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Black} Black
     */
    Black.fromObject = function fromObject(object) {
        if (object instanceof $root.Black)
            return object;
        var message = new $root.Black();
        if (object.Card != null)
            if (typeof object.Card === "string")
                $util.base64.decode(object.Card, message.Card = $util.newBuffer($util.base64.length(object.Card)), 0);
            else if (object.Card.length)
                message.Card = object.Card;
        return message;
    };

    /**
     * Creates a plain object from a Black message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Black
     * @static
     * @param {Black} message Black
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Black.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.Card = "";
            else {
                object.Card = [];
                if (options.bytes !== Array)
                    object.Card = $util.newBuffer(object.Card);
            }
        if (message.Card != null && message.hasOwnProperty("Card"))
            object.Card = options.bytes === String ? $util.base64.encode(message.Card, 0, message.Card.length) : options.bytes === Array ? Array.prototype.slice.call(message.Card) : message.Card;
        return object;
    };

    /**
     * Converts this Black to JSON.
     * @function toJSON
     * @memberof Black
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Black.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Black;
})();

$root.SettleMsg = (function() {

    /**
     * Properties of a SettleMsg.
     * @exports ISettleMsg
     * @interface ISettleMsg
     * @property {Uint8Array|null} [RedPoker] SettleMsg RedPoker
     * @property {Uint8Array|null} [BlackPoker] SettleMsg BlackPoker
     * @property {number|null} [Win] SettleMsg Win
     * @property {number|null} [WinCardType] SettleMsg WinCardType
     * @property {number|Long|null} [UserWin] SettleMsg UserWin
     * @property {number|null} [LoseCardType] SettleMsg LoseCardType
     * @property {number|Long|null} [LuckWin] SettleMsg LuckWin
     */

    /**
     * Constructs a new SettleMsg.
     * @exports SettleMsg
     * @classdesc Represents a SettleMsg.
     * @implements ISettleMsg
     * @constructor
     * @param {ISettleMsg=} [properties] Properties to set
     */
    function SettleMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SettleMsg RedPoker.
     * @member {Uint8Array} RedPoker
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.RedPoker = $util.newBuffer([]);

    /**
     * SettleMsg BlackPoker.
     * @member {Uint8Array} BlackPoker
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.BlackPoker = $util.newBuffer([]);

    /**
     * SettleMsg Win.
     * @member {number} Win
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.Win = 0;

    /**
     * SettleMsg WinCardType.
     * @member {number} WinCardType
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.WinCardType = 0;

    /**
     * SettleMsg UserWin.
     * @member {number|Long} UserWin
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.UserWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SettleMsg LoseCardType.
     * @member {number} LoseCardType
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.LoseCardType = 0;

    /**
     * SettleMsg LuckWin.
     * @member {number|Long} LuckWin
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.LuckWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new SettleMsg instance using the specified properties.
     * @function create
     * @memberof SettleMsg
     * @static
     * @param {ISettleMsg=} [properties] Properties to set
     * @returns {SettleMsg} SettleMsg instance
     */
    SettleMsg.create = function create(properties) {
        return new SettleMsg(properties);
    };

    /**
     * Encodes the specified SettleMsg message. Does not implicitly {@link SettleMsg.verify|verify} messages.
     * @function encode
     * @memberof SettleMsg
     * @static
     * @param {ISettleMsg} message SettleMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettleMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.RedPoker);
        if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.BlackPoker);
        if (message.Win != null && message.hasOwnProperty("Win"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Win);
        if (message.WinCardType != null && message.hasOwnProperty("WinCardType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.WinCardType);
        if (message.UserWin != null && message.hasOwnProperty("UserWin"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.UserWin);
        if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LoseCardType);
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.LuckWin);
        return writer;
    };

    /**
     * Encodes the specified SettleMsg message, length delimited. Does not implicitly {@link SettleMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SettleMsg
     * @static
     * @param {ISettleMsg} message SettleMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SettleMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SettleMsg message from the specified reader or buffer.
     * @function decode
     * @memberof SettleMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SettleMsg} SettleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettleMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SettleMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.RedPoker = reader.bytes();
                break;
            case 2:
                message.BlackPoker = reader.bytes();
                break;
            case 3:
                message.Win = reader.int32();
                break;
            case 4:
                message.WinCardType = reader.int32();
                break;
            case 5:
                message.UserWin = reader.int64();
                break;
            case 6:
                message.LoseCardType = reader.int32();
                break;
            case 7:
                message.LuckWin = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SettleMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SettleMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SettleMsg} SettleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SettleMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SettleMsg message.
     * @function verify
     * @memberof SettleMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SettleMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
            if (!(message.RedPoker && typeof message.RedPoker.length === "number" || $util.isString(message.RedPoker)))
                return "RedPoker: buffer expected";
        if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
            if (!(message.BlackPoker && typeof message.BlackPoker.length === "number" || $util.isString(message.BlackPoker)))
                return "BlackPoker: buffer expected";
        if (message.Win != null && message.hasOwnProperty("Win"))
            if (!$util.isInteger(message.Win))
                return "Win: integer expected";
        if (message.WinCardType != null && message.hasOwnProperty("WinCardType"))
            if (!$util.isInteger(message.WinCardType))
                return "WinCardType: integer expected";
        if (message.UserWin != null && message.hasOwnProperty("UserWin"))
            if (!$util.isInteger(message.UserWin) && !(message.UserWin && $util.isInteger(message.UserWin.low) && $util.isInteger(message.UserWin.high)))
                return "UserWin: integer|Long expected";
        if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
            if (!$util.isInteger(message.LoseCardType))
                return "LoseCardType: integer expected";
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            if (!$util.isInteger(message.LuckWin) && !(message.LuckWin && $util.isInteger(message.LuckWin.low) && $util.isInteger(message.LuckWin.high)))
                return "LuckWin: integer|Long expected";
        return null;
    };

    /**
     * Creates a SettleMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SettleMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SettleMsg} SettleMsg
     */
    SettleMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.SettleMsg)
            return object;
        var message = new $root.SettleMsg();
        if (object.RedPoker != null)
            if (typeof object.RedPoker === "string")
                $util.base64.decode(object.RedPoker, message.RedPoker = $util.newBuffer($util.base64.length(object.RedPoker)), 0);
            else if (object.RedPoker.length)
                message.RedPoker = object.RedPoker;
        if (object.BlackPoker != null)
            if (typeof object.BlackPoker === "string")
                $util.base64.decode(object.BlackPoker, message.BlackPoker = $util.newBuffer($util.base64.length(object.BlackPoker)), 0);
            else if (object.BlackPoker.length)
                message.BlackPoker = object.BlackPoker;
        if (object.Win != null)
            message.Win = object.Win | 0;
        if (object.WinCardType != null)
            message.WinCardType = object.WinCardType | 0;
        if (object.UserWin != null)
            if ($util.Long)
                (message.UserWin = $util.Long.fromValue(object.UserWin)).unsigned = false;
            else if (typeof object.UserWin === "string")
                message.UserWin = parseInt(object.UserWin, 10);
            else if (typeof object.UserWin === "number")
                message.UserWin = object.UserWin;
            else if (typeof object.UserWin === "object")
                message.UserWin = new $util.LongBits(object.UserWin.low >>> 0, object.UserWin.high >>> 0).toNumber();
        if (object.LoseCardType != null)
            message.LoseCardType = object.LoseCardType | 0;
        if (object.LuckWin != null)
            if ($util.Long)
                (message.LuckWin = $util.Long.fromValue(object.LuckWin)).unsigned = false;
            else if (typeof object.LuckWin === "string")
                message.LuckWin = parseInt(object.LuckWin, 10);
            else if (typeof object.LuckWin === "number")
                message.LuckWin = object.LuckWin;
            else if (typeof object.LuckWin === "object")
                message.LuckWin = new $util.LongBits(object.LuckWin.low >>> 0, object.LuckWin.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a SettleMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SettleMsg
     * @static
     * @param {SettleMsg} message SettleMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SettleMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.RedPoker = "";
            else {
                object.RedPoker = [];
                if (options.bytes !== Array)
                    object.RedPoker = $util.newBuffer(object.RedPoker);
            }
            if (options.bytes === String)
                object.BlackPoker = "";
            else {
                object.BlackPoker = [];
                if (options.bytes !== Array)
                    object.BlackPoker = $util.newBuffer(object.BlackPoker);
            }
            object.Win = 0;
            object.WinCardType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserWin = options.longs === String ? "0" : 0;
            object.LoseCardType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.LuckWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.LuckWin = options.longs === String ? "0" : 0;
        }
        if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
            object.RedPoker = options.bytes === String ? $util.base64.encode(message.RedPoker, 0, message.RedPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.RedPoker) : message.RedPoker;
        if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
            object.BlackPoker = options.bytes === String ? $util.base64.encode(message.BlackPoker, 0, message.BlackPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.BlackPoker) : message.BlackPoker;
        if (message.Win != null && message.hasOwnProperty("Win"))
            object.Win = message.Win;
        if (message.WinCardType != null && message.hasOwnProperty("WinCardType"))
            object.WinCardType = message.WinCardType;
        if (message.UserWin != null && message.hasOwnProperty("UserWin"))
            if (typeof message.UserWin === "number")
                object.UserWin = options.longs === String ? String(message.UserWin) : message.UserWin;
            else
                object.UserWin = options.longs === String ? $util.Long.prototype.toString.call(message.UserWin) : options.longs === Number ? new $util.LongBits(message.UserWin.low >>> 0, message.UserWin.high >>> 0).toNumber() : message.UserWin;
        if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
            object.LoseCardType = message.LoseCardType;
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            if (typeof message.LuckWin === "number")
                object.LuckWin = options.longs === String ? String(message.LuckWin) : message.LuckWin;
            else
                object.LuckWin = options.longs === String ? $util.Long.prototype.toString.call(message.LuckWin) : options.longs === Number ? new $util.LongBits(message.LuckWin.low >>> 0, message.LuckWin.high >>> 0).toNumber() : message.LuckWin;
        return object;
    };

    /**
     * Converts this SettleMsg to JSON.
     * @function toJSON
     * @memberof SettleMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SettleMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SettleMsg;
})();

$root.SceneBetInfo = (function() {

    /**
     * Properties of a SceneBetInfo.
     * @exports ISceneBetInfo
     * @interface ISceneBetInfo
     * @property {number|Long|null} [Red] SceneBetInfo Red
     * @property {number|Long|null} [Black] SceneBetInfo Black
     * @property {number|Long|null} [Luck] SceneBetInfo Luck
     * @property {number|Long|null} [UserBetRed] SceneBetInfo UserBetRed
     * @property {number|Long|null} [UserBetBlack] SceneBetInfo UserBetBlack
     * @property {number|Long|null} [UserBetLuck] SceneBetInfo UserBetLuck
     * @property {number|Long|null} [UserBetTotal] SceneBetInfo UserBetTotal
     * @property {number|null} [MasterBetType] SceneBetInfo MasterBetType
     */

    /**
     * Constructs a new SceneBetInfo.
     * @exports SceneBetInfo
     * @classdesc Represents a SceneBetInfo.
     * @implements ISceneBetInfo
     * @constructor
     * @param {ISceneBetInfo=} [properties] Properties to set
     */
    function SceneBetInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SceneBetInfo Red.
     * @member {number|Long} Red
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.Red = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo Black.
     * @member {number|Long} Black
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.Black = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo Luck.
     * @member {number|Long} Luck
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.Luck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo UserBetRed.
     * @member {number|Long} UserBetRed
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.UserBetRed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo UserBetBlack.
     * @member {number|Long} UserBetBlack
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.UserBetBlack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo UserBetLuck.
     * @member {number|Long} UserBetLuck
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.UserBetLuck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo UserBetTotal.
     * @member {number|Long} UserBetTotal
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.UserBetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneBetInfo MasterBetType.
     * @member {number} MasterBetType
     * @memberof SceneBetInfo
     * @instance
     */
    SceneBetInfo.prototype.MasterBetType = 0;

    /**
     * Creates a new SceneBetInfo instance using the specified properties.
     * @function create
     * @memberof SceneBetInfo
     * @static
     * @param {ISceneBetInfo=} [properties] Properties to set
     * @returns {SceneBetInfo} SceneBetInfo instance
     */
    SceneBetInfo.create = function create(properties) {
        return new SceneBetInfo(properties);
    };

    /**
     * Encodes the specified SceneBetInfo message. Does not implicitly {@link SceneBetInfo.verify|verify} messages.
     * @function encode
     * @memberof SceneBetInfo
     * @static
     * @param {ISceneBetInfo} message SceneBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneBetInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Red != null && message.hasOwnProperty("Red"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Red);
        if (message.Black != null && message.hasOwnProperty("Black"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Black);
        if (message.Luck != null && message.hasOwnProperty("Luck"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Luck);
        if (message.UserBetRed != null && message.hasOwnProperty("UserBetRed"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.UserBetRed);
        if (message.UserBetBlack != null && message.hasOwnProperty("UserBetBlack"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.UserBetBlack);
        if (message.UserBetLuck != null && message.hasOwnProperty("UserBetLuck"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.UserBetLuck);
        if (message.UserBetTotal != null && message.hasOwnProperty("UserBetTotal"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.UserBetTotal);
        if (message.MasterBetType != null && message.hasOwnProperty("MasterBetType"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.MasterBetType);
        return writer;
    };

    /**
     * Encodes the specified SceneBetInfo message, length delimited. Does not implicitly {@link SceneBetInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SceneBetInfo
     * @static
     * @param {ISceneBetInfo} message SceneBetInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SceneBetInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SceneBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SceneBetInfo} SceneBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneBetInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SceneBetInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Red = reader.int64();
                break;
            case 2:
                message.Black = reader.int64();
                break;
            case 3:
                message.Luck = reader.int64();
                break;
            case 4:
                message.UserBetRed = reader.int64();
                break;
            case 5:
                message.UserBetBlack = reader.int64();
                break;
            case 6:
                message.UserBetLuck = reader.int64();
                break;
            case 7:
                message.UserBetTotal = reader.int64();
                break;
            case 8:
                message.MasterBetType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SceneBetInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SceneBetInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SceneBetInfo} SceneBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneBetInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SceneBetInfo message.
     * @function verify
     * @memberof SceneBetInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SceneBetInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Red != null && message.hasOwnProperty("Red"))
            if (!$util.isInteger(message.Red) && !(message.Red && $util.isInteger(message.Red.low) && $util.isInteger(message.Red.high)))
                return "Red: integer|Long expected";
        if (message.Black != null && message.hasOwnProperty("Black"))
            if (!$util.isInteger(message.Black) && !(message.Black && $util.isInteger(message.Black.low) && $util.isInteger(message.Black.high)))
                return "Black: integer|Long expected";
        if (message.Luck != null && message.hasOwnProperty("Luck"))
            if (!$util.isInteger(message.Luck) && !(message.Luck && $util.isInteger(message.Luck.low) && $util.isInteger(message.Luck.high)))
                return "Luck: integer|Long expected";
        if (message.UserBetRed != null && message.hasOwnProperty("UserBetRed"))
            if (!$util.isInteger(message.UserBetRed) && !(message.UserBetRed && $util.isInteger(message.UserBetRed.low) && $util.isInteger(message.UserBetRed.high)))
                return "UserBetRed: integer|Long expected";
        if (message.UserBetBlack != null && message.hasOwnProperty("UserBetBlack"))
            if (!$util.isInteger(message.UserBetBlack) && !(message.UserBetBlack && $util.isInteger(message.UserBetBlack.low) && $util.isInteger(message.UserBetBlack.high)))
                return "UserBetBlack: integer|Long expected";
        if (message.UserBetLuck != null && message.hasOwnProperty("UserBetLuck"))
            if (!$util.isInteger(message.UserBetLuck) && !(message.UserBetLuck && $util.isInteger(message.UserBetLuck.low) && $util.isInteger(message.UserBetLuck.high)))
                return "UserBetLuck: integer|Long expected";
        if (message.UserBetTotal != null && message.hasOwnProperty("UserBetTotal"))
            if (!$util.isInteger(message.UserBetTotal) && !(message.UserBetTotal && $util.isInteger(message.UserBetTotal.low) && $util.isInteger(message.UserBetTotal.high)))
                return "UserBetTotal: integer|Long expected";
        if (message.MasterBetType != null && message.hasOwnProperty("MasterBetType"))
            if (!$util.isInteger(message.MasterBetType))
                return "MasterBetType: integer expected";
        return null;
    };

    /**
     * Creates a SceneBetInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SceneBetInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SceneBetInfo} SceneBetInfo
     */
    SceneBetInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.SceneBetInfo)
            return object;
        var message = new $root.SceneBetInfo();
        if (object.Red != null)
            if ($util.Long)
                (message.Red = $util.Long.fromValue(object.Red)).unsigned = false;
            else if (typeof object.Red === "string")
                message.Red = parseInt(object.Red, 10);
            else if (typeof object.Red === "number")
                message.Red = object.Red;
            else if (typeof object.Red === "object")
                message.Red = new $util.LongBits(object.Red.low >>> 0, object.Red.high >>> 0).toNumber();
        if (object.Black != null)
            if ($util.Long)
                (message.Black = $util.Long.fromValue(object.Black)).unsigned = false;
            else if (typeof object.Black === "string")
                message.Black = parseInt(object.Black, 10);
            else if (typeof object.Black === "number")
                message.Black = object.Black;
            else if (typeof object.Black === "object")
                message.Black = new $util.LongBits(object.Black.low >>> 0, object.Black.high >>> 0).toNumber();
        if (object.Luck != null)
            if ($util.Long)
                (message.Luck = $util.Long.fromValue(object.Luck)).unsigned = false;
            else if (typeof object.Luck === "string")
                message.Luck = parseInt(object.Luck, 10);
            else if (typeof object.Luck === "number")
                message.Luck = object.Luck;
            else if (typeof object.Luck === "object")
                message.Luck = new $util.LongBits(object.Luck.low >>> 0, object.Luck.high >>> 0).toNumber();
        if (object.UserBetRed != null)
            if ($util.Long)
                (message.UserBetRed = $util.Long.fromValue(object.UserBetRed)).unsigned = false;
            else if (typeof object.UserBetRed === "string")
                message.UserBetRed = parseInt(object.UserBetRed, 10);
            else if (typeof object.UserBetRed === "number")
                message.UserBetRed = object.UserBetRed;
            else if (typeof object.UserBetRed === "object")
                message.UserBetRed = new $util.LongBits(object.UserBetRed.low >>> 0, object.UserBetRed.high >>> 0).toNumber();
        if (object.UserBetBlack != null)
            if ($util.Long)
                (message.UserBetBlack = $util.Long.fromValue(object.UserBetBlack)).unsigned = false;
            else if (typeof object.UserBetBlack === "string")
                message.UserBetBlack = parseInt(object.UserBetBlack, 10);
            else if (typeof object.UserBetBlack === "number")
                message.UserBetBlack = object.UserBetBlack;
            else if (typeof object.UserBetBlack === "object")
                message.UserBetBlack = new $util.LongBits(object.UserBetBlack.low >>> 0, object.UserBetBlack.high >>> 0).toNumber();
        if (object.UserBetLuck != null)
            if ($util.Long)
                (message.UserBetLuck = $util.Long.fromValue(object.UserBetLuck)).unsigned = false;
            else if (typeof object.UserBetLuck === "string")
                message.UserBetLuck = parseInt(object.UserBetLuck, 10);
            else if (typeof object.UserBetLuck === "number")
                message.UserBetLuck = object.UserBetLuck;
            else if (typeof object.UserBetLuck === "object")
                message.UserBetLuck = new $util.LongBits(object.UserBetLuck.low >>> 0, object.UserBetLuck.high >>> 0).toNumber();
        if (object.UserBetTotal != null)
            if ($util.Long)
                (message.UserBetTotal = $util.Long.fromValue(object.UserBetTotal)).unsigned = false;
            else if (typeof object.UserBetTotal === "string")
                message.UserBetTotal = parseInt(object.UserBetTotal, 10);
            else if (typeof object.UserBetTotal === "number")
                message.UserBetTotal = object.UserBetTotal;
            else if (typeof object.UserBetTotal === "object")
                message.UserBetTotal = new $util.LongBits(object.UserBetTotal.low >>> 0, object.UserBetTotal.high >>> 0).toNumber();
        if (object.MasterBetType != null)
            message.MasterBetType = object.MasterBetType | 0;
        return message;
    };

    /**
     * Creates a plain object from a SceneBetInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SceneBetInfo
     * @static
     * @param {SceneBetInfo} message SceneBetInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SceneBetInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Red = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Red = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Black = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Black = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Luck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Luck = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserBetRed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserBetRed = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserBetBlack = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserBetBlack = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserBetLuck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserBetLuck = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserBetTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserBetTotal = options.longs === String ? "0" : 0;
            object.MasterBetType = 0;
        }
        if (message.Red != null && message.hasOwnProperty("Red"))
            if (typeof message.Red === "number")
                object.Red = options.longs === String ? String(message.Red) : message.Red;
            else
                object.Red = options.longs === String ? $util.Long.prototype.toString.call(message.Red) : options.longs === Number ? new $util.LongBits(message.Red.low >>> 0, message.Red.high >>> 0).toNumber() : message.Red;
        if (message.Black != null && message.hasOwnProperty("Black"))
            if (typeof message.Black === "number")
                object.Black = options.longs === String ? String(message.Black) : message.Black;
            else
                object.Black = options.longs === String ? $util.Long.prototype.toString.call(message.Black) : options.longs === Number ? new $util.LongBits(message.Black.low >>> 0, message.Black.high >>> 0).toNumber() : message.Black;
        if (message.Luck != null && message.hasOwnProperty("Luck"))
            if (typeof message.Luck === "number")
                object.Luck = options.longs === String ? String(message.Luck) : message.Luck;
            else
                object.Luck = options.longs === String ? $util.Long.prototype.toString.call(message.Luck) : options.longs === Number ? new $util.LongBits(message.Luck.low >>> 0, message.Luck.high >>> 0).toNumber() : message.Luck;
        if (message.UserBetRed != null && message.hasOwnProperty("UserBetRed"))
            if (typeof message.UserBetRed === "number")
                object.UserBetRed = options.longs === String ? String(message.UserBetRed) : message.UserBetRed;
            else
                object.UserBetRed = options.longs === String ? $util.Long.prototype.toString.call(message.UserBetRed) : options.longs === Number ? new $util.LongBits(message.UserBetRed.low >>> 0, message.UserBetRed.high >>> 0).toNumber() : message.UserBetRed;
        if (message.UserBetBlack != null && message.hasOwnProperty("UserBetBlack"))
            if (typeof message.UserBetBlack === "number")
                object.UserBetBlack = options.longs === String ? String(message.UserBetBlack) : message.UserBetBlack;
            else
                object.UserBetBlack = options.longs === String ? $util.Long.prototype.toString.call(message.UserBetBlack) : options.longs === Number ? new $util.LongBits(message.UserBetBlack.low >>> 0, message.UserBetBlack.high >>> 0).toNumber() : message.UserBetBlack;
        if (message.UserBetLuck != null && message.hasOwnProperty("UserBetLuck"))
            if (typeof message.UserBetLuck === "number")
                object.UserBetLuck = options.longs === String ? String(message.UserBetLuck) : message.UserBetLuck;
            else
                object.UserBetLuck = options.longs === String ? $util.Long.prototype.toString.call(message.UserBetLuck) : options.longs === Number ? new $util.LongBits(message.UserBetLuck.low >>> 0, message.UserBetLuck.high >>> 0).toNumber() : message.UserBetLuck;
        if (message.UserBetTotal != null && message.hasOwnProperty("UserBetTotal"))
            if (typeof message.UserBetTotal === "number")
                object.UserBetTotal = options.longs === String ? String(message.UserBetTotal) : message.UserBetTotal;
            else
                object.UserBetTotal = options.longs === String ? $util.Long.prototype.toString.call(message.UserBetTotal) : options.longs === Number ? new $util.LongBits(message.UserBetTotal.low >>> 0, message.UserBetTotal.high >>> 0).toNumber() : message.UserBetTotal;
        if (message.MasterBetType != null && message.hasOwnProperty("MasterBetType"))
            object.MasterBetType = message.MasterBetType;
        return object;
    };

    /**
     * Converts this SceneBetInfo to JSON.
     * @function toJSON
     * @memberof SceneBetInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SceneBetInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SceneBetInfo;
})();

$root.Trend = (function() {

    /**
     * Properties of a Trend.
     * @exports ITrend
     * @interface ITrend
     * @property {Array.<number>|null} [Win] Trend Win
     * @property {Array.<number>|null} [WinCardType] Trend WinCardType
     */

    /**
     * Constructs a new Trend.
     * @exports Trend
     * @classdesc Represents a Trend.
     * @implements ITrend
     * @constructor
     * @param {ITrend=} [properties] Properties to set
     */
    function Trend(properties) {
        this.Win = [];
        this.WinCardType = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trend Win.
     * @member {Array.<number>} Win
     * @memberof Trend
     * @instance
     */
    Trend.prototype.Win = $util.emptyArray;

    /**
     * Trend WinCardType.
     * @member {Array.<number>} WinCardType
     * @memberof Trend
     * @instance
     */
    Trend.prototype.WinCardType = $util.emptyArray;

    /**
     * Creates a new Trend instance using the specified properties.
     * @function create
     * @memberof Trend
     * @static
     * @param {ITrend=} [properties] Properties to set
     * @returns {Trend} Trend instance
     */
    Trend.create = function create(properties) {
        return new Trend(properties);
    };

    /**
     * Encodes the specified Trend message. Does not implicitly {@link Trend.verify|verify} messages.
     * @function encode
     * @memberof Trend
     * @static
     * @param {ITrend} message Trend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trend.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Win != null && message.Win.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.Win.length; ++i)
                writer.int32(message.Win[i]);
            writer.ldelim();
        }
        if (message.WinCardType != null && message.WinCardType.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.WinCardType.length; ++i)
                writer.int32(message.WinCardType[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified Trend message, length delimited. Does not implicitly {@link Trend.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Trend
     * @static
     * @param {ITrend} message Trend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Trend message from the specified reader or buffer.
     * @function decode
     * @memberof Trend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Trend} Trend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trend.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Win && message.Win.length))
                    message.Win = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.Win.push(reader.int32());
                } else
                    message.Win.push(reader.int32());
                break;
            case 2:
                if (!(message.WinCardType && message.WinCardType.length))
                    message.WinCardType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.WinCardType.push(reader.int32());
                } else
                    message.WinCardType.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Trend message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Trend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Trend} Trend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Trend message.
     * @function verify
     * @memberof Trend
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Trend.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Win != null && message.hasOwnProperty("Win")) {
            if (!Array.isArray(message.Win))
                return "Win: array expected";
            for (var i = 0; i < message.Win.length; ++i)
                if (!$util.isInteger(message.Win[i]))
                    return "Win: integer[] expected";
        }
        if (message.WinCardType != null && message.hasOwnProperty("WinCardType")) {
            if (!Array.isArray(message.WinCardType))
                return "WinCardType: array expected";
            for (var i = 0; i < message.WinCardType.length; ++i)
                if (!$util.isInteger(message.WinCardType[i]))
                    return "WinCardType: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a Trend message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Trend
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Trend} Trend
     */
    Trend.fromObject = function fromObject(object) {
        if (object instanceof $root.Trend)
            return object;
        var message = new $root.Trend();
        if (object.Win) {
            if (!Array.isArray(object.Win))
                throw TypeError(".Trend.Win: array expected");
            message.Win = [];
            for (var i = 0; i < object.Win.length; ++i)
                message.Win[i] = object.Win[i] | 0;
        }
        if (object.WinCardType) {
            if (!Array.isArray(object.WinCardType))
                throw TypeError(".Trend.WinCardType: array expected");
            message.WinCardType = [];
            for (var i = 0; i < object.WinCardType.length; ++i)
                message.WinCardType[i] = object.WinCardType[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a Trend message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Trend
     * @static
     * @param {Trend} message Trend
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Trend.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Win = [];
            object.WinCardType = [];
        }
        if (message.Win && message.Win.length) {
            object.Win = [];
            for (var j = 0; j < message.Win.length; ++j)
                object.Win[j] = message.Win[j];
        }
        if (message.WinCardType && message.WinCardType.length) {
            object.WinCardType = [];
            for (var j = 0; j < message.WinCardType.length; ++j)
                object.WinCardType[j] = message.WinCardType[j];
        }
        return object;
    };

    /**
     * Converts this Trend to JSON.
     * @function toJSON
     * @memberof Trend
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Trend.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Trend;
})();

$root.UserInfo = (function() {

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {string|null} [NikeName] UserInfo NikeName
     * @property {number|Long|null} [UserGlod] UserInfo UserGlod
     * @property {number|Long|null} [BetGold] UserInfo BetGold
     * @property {number|null} [WinCount] UserInfo WinCount
     */

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {IUserInfo=} [properties] Properties to set
     */
    function UserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserInfo NikeName.
     * @member {string} NikeName
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.NikeName = "";

    /**
     * UserInfo UserGlod.
     * @member {number|Long} UserGlod
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.UserGlod = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo BetGold.
     * @member {number|Long} BetGold
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.BetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo WinCount.
     * @member {number} WinCount
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.WinCount = 0;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @function create
     * @memberof UserInfo
     * @static
     * @param {IUserInfo=} [properties] Properties to set
     * @returns {UserInfo} UserInfo instance
     */
    UserInfo.create = function create(properties) {
        return new UserInfo(properties);
    };

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encode
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.NikeName != null && message.hasOwnProperty("NikeName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.NikeName);
        if (message.UserGlod != null && message.hasOwnProperty("UserGlod"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UserGlod);
        if (message.BetGold != null && message.hasOwnProperty("BetGold"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BetGold);
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.WinCount);
        return writer;
    };

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.NikeName = reader.string();
                break;
            case 2:
                message.UserGlod = reader.int64();
                break;
            case 3:
                message.BetGold = reader.int64();
                break;
            case 4:
                message.WinCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfo message.
     * @function verify
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.NikeName != null && message.hasOwnProperty("NikeName"))
            if (!$util.isString(message.NikeName))
                return "NikeName: string expected";
        if (message.UserGlod != null && message.hasOwnProperty("UserGlod"))
            if (!$util.isInteger(message.UserGlod) && !(message.UserGlod && $util.isInteger(message.UserGlod.low) && $util.isInteger(message.UserGlod.high)))
                return "UserGlod: integer|Long expected";
        if (message.BetGold != null && message.hasOwnProperty("BetGold"))
            if (!$util.isInteger(message.BetGold) && !(message.BetGold && $util.isInteger(message.BetGold.low) && $util.isInteger(message.BetGold.high)))
                return "BetGold: integer|Long expected";
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            if (!$util.isInteger(message.WinCount))
                return "WinCount: integer expected";
        return null;
    };

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInfo} UserInfo
     */
    UserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserInfo)
            return object;
        var message = new $root.UserInfo();
        if (object.NikeName != null)
            message.NikeName = String(object.NikeName);
        if (object.UserGlod != null)
            if ($util.Long)
                (message.UserGlod = $util.Long.fromValue(object.UserGlod)).unsigned = false;
            else if (typeof object.UserGlod === "string")
                message.UserGlod = parseInt(object.UserGlod, 10);
            else if (typeof object.UserGlod === "number")
                message.UserGlod = object.UserGlod;
            else if (typeof object.UserGlod === "object")
                message.UserGlod = new $util.LongBits(object.UserGlod.low >>> 0, object.UserGlod.high >>> 0).toNumber();
        if (object.BetGold != null)
            if ($util.Long)
                (message.BetGold = $util.Long.fromValue(object.BetGold)).unsigned = false;
            else if (typeof object.BetGold === "string")
                message.BetGold = parseInt(object.BetGold, 10);
            else if (typeof object.BetGold === "number")
                message.BetGold = object.BetGold;
            else if (typeof object.BetGold === "object")
                message.BetGold = new $util.LongBits(object.BetGold.low >>> 0, object.BetGold.high >>> 0).toNumber();
        if (object.WinCount != null)
            message.WinCount = object.WinCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserInfo
     * @static
     * @param {UserInfo} message UserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.NikeName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserGlod = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserGlod = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BetGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BetGold = options.longs === String ? "0" : 0;
            object.WinCount = 0;
        }
        if (message.NikeName != null && message.hasOwnProperty("NikeName"))
            object.NikeName = message.NikeName;
        if (message.UserGlod != null && message.hasOwnProperty("UserGlod"))
            if (typeof message.UserGlod === "number")
                object.UserGlod = options.longs === String ? String(message.UserGlod) : message.UserGlod;
            else
                object.UserGlod = options.longs === String ? $util.Long.prototype.toString.call(message.UserGlod) : options.longs === Number ? new $util.LongBits(message.UserGlod.low >>> 0, message.UserGlod.high >>> 0).toNumber() : message.UserGlod;
        if (message.BetGold != null && message.hasOwnProperty("BetGold"))
            if (typeof message.BetGold === "number")
                object.BetGold = options.longs === String ? String(message.BetGold) : message.BetGold;
            else
                object.BetGold = options.longs === String ? $util.Long.prototype.toString.call(message.BetGold) : options.longs === Number ? new $util.LongBits(message.BetGold.low >>> 0, message.BetGold.high >>> 0).toNumber() : message.BetGold;
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            object.WinCount = message.WinCount;
        return object;
    };

    /**
     * Converts this UserInfo to JSON.
     * @function toJSON
     * @memberof UserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserInfo;
})();

$root.UserList = (function() {

    /**
     * Properties of a UserList.
     * @exports IUserList
     * @interface IUserList
     * @property {Array.<IUserInfo>|null} [UserList] UserList UserList
     */

    /**
     * Constructs a new UserList.
     * @exports UserList
     * @classdesc Represents a UserList.
     * @implements IUserList
     * @constructor
     * @param {IUserList=} [properties] Properties to set
     */
    function UserList(properties) {
        this.UserList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserList UserList.
     * @member {Array.<IUserInfo>} UserList
     * @memberof UserList
     * @instance
     */
    UserList.prototype.UserList = $util.emptyArray;

    /**
     * Creates a new UserList instance using the specified properties.
     * @function create
     * @memberof UserList
     * @static
     * @param {IUserList=} [properties] Properties to set
     * @returns {UserList} UserList instance
     */
    UserList.create = function create(properties) {
        return new UserList(properties);
    };

    /**
     * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
     * @function encode
     * @memberof UserList
     * @static
     * @param {IUserList} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserList != null && message.UserList.length)
            for (var i = 0; i < message.UserList.length; ++i)
                $root.UserInfo.encode(message.UserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserList
     * @static
     * @param {IUserList} message UserList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @function decode
     * @memberof UserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserList} UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.UserList && message.UserList.length))
                    message.UserList = [];
                message.UserList.push($root.UserInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserList} UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserList message.
     * @function verify
     * @memberof UserList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserList != null && message.hasOwnProperty("UserList")) {
            if (!Array.isArray(message.UserList))
                return "UserList: array expected";
            for (var i = 0; i < message.UserList.length; ++i) {
                var error = $root.UserInfo.verify(message.UserList[i]);
                if (error)
                    return "UserList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserList} UserList
     */
    UserList.fromObject = function fromObject(object) {
        if (object instanceof $root.UserList)
            return object;
        var message = new $root.UserList();
        if (object.UserList) {
            if (!Array.isArray(object.UserList))
                throw TypeError(".UserList.UserList: array expected");
            message.UserList = [];
            for (var i = 0; i < object.UserList.length; ++i) {
                if (typeof object.UserList[i] !== "object")
                    throw TypeError(".UserList.UserList: object expected");
                message.UserList[i] = $root.UserInfo.fromObject(object.UserList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserList
     * @static
     * @param {UserList} message UserList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.UserList = [];
        if (message.UserList && message.UserList.length) {
            object.UserList = [];
            for (var j = 0; j < message.UserList.length; ++j)
                object.UserList[j] = $root.UserInfo.toObject(message.UserList[j], options);
        }
        return object;
    };

    /**
     * Converts this UserList to JSON.
     * @function toJSON
     * @memberof UserList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserList;
})();

$root.SceneUserInfo = (function() {

    /**
     * Properties of a SceneUserInfo.
     * @exports ISceneUserInfo
     * @interface ISceneUserInfo
     * @property {number|Long|null} [UserID] SceneUserInfo UserID
     * @property {number|null} [SceneSeatID] SceneUserInfo SceneSeatID
     * @property {number|Long|null} [RedWin] SceneUserInfo RedWin
     * @property {number|Long|null} [BlackWin] SceneUserInfo BlackWin
     * @property {number|Long|null} [LuckWin] SceneUserInfo LuckWin
     */

    /**
     * Constructs a new SceneUserInfo.
     * @exports SceneUserInfo
     * @classdesc Represents a SceneUserInfo.
     * @implements ISceneUserInfo
     * @constructor
     * @param {ISceneUserInfo=} [properties] Properties to set
     */
    function SceneUserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SceneUserInfo UserID.
     * @member {number|Long} UserID
     * @memberof SceneUserInfo
     * @instance
     */
    SceneUserInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneUserInfo SceneSeatID.
     * @member {number} SceneSeatID
     * @memberof SceneUserInfo
     * @instance
     */
    SceneUserInfo.prototype.SceneSeatID = 0;

    /**
     * SceneUserInfo RedWin.
     * @member {number|Long} RedWin
     * @memberof SceneUserInfo
     * @instance
     */
    SceneUserInfo.prototype.RedWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneUserInfo BlackWin.
     * @member {number|Long} BlackWin
     * @memberof SceneUserInfo
     * @instance
     */
    SceneUserInfo.prototype.BlackWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SceneUserInfo LuckWin.
     * @member {number|Long} LuckWin
     * @memberof SceneUserInfo
     * @instance
     */
    SceneUserInfo.prototype.LuckWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new SceneUserInfo instance using the specified properties.
     * @function create
     * @memberof SceneUserInfo
     * @static
     * @param {ISceneUserInfo=} [properties] Properties to set
     * @returns {SceneUserInfo} SceneUserInfo instance
     */
    SceneUserInfo.create = function create(properties) {
        return new SceneUserInfo(properties);
    };

    /**
     * Encodes the specified SceneUserInfo message. Does not implicitly {@link SceneUserInfo.verify|verify} messages.
     * @function encode
     * @memberof SceneUserInfo
     * @static
     * @param {ISceneUserInfo} message SceneUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneUserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
        if (message.SceneSeatID != null && message.hasOwnProperty("SceneSeatID"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SceneSeatID);
        if (message.RedWin != null && message.hasOwnProperty("RedWin"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.RedWin);
        if (message.BlackWin != null && message.hasOwnProperty("BlackWin"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.BlackWin);
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.LuckWin);
        return writer;
    };

    /**
     * Encodes the specified SceneUserInfo message, length delimited. Does not implicitly {@link SceneUserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SceneUserInfo
     * @static
     * @param {ISceneUserInfo} message SceneUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SceneUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SceneUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SceneUserInfo} SceneUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneUserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SceneUserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.UserID = reader.int64();
                break;
            case 2:
                message.SceneSeatID = reader.int32();
                break;
            case 3:
                message.RedWin = reader.int64();
                break;
            case 4:
                message.BlackWin = reader.int64();
                break;
            case 5:
                message.LuckWin = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SceneUserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SceneUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SceneUserInfo} SceneUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneUserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SceneUserInfo message.
     * @function verify
     * @memberof SceneUserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SceneUserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                return "UserID: integer|Long expected";
        if (message.SceneSeatID != null && message.hasOwnProperty("SceneSeatID"))
            if (!$util.isInteger(message.SceneSeatID))
                return "SceneSeatID: integer expected";
        if (message.RedWin != null && message.hasOwnProperty("RedWin"))
            if (!$util.isInteger(message.RedWin) && !(message.RedWin && $util.isInteger(message.RedWin.low) && $util.isInteger(message.RedWin.high)))
                return "RedWin: integer|Long expected";
        if (message.BlackWin != null && message.hasOwnProperty("BlackWin"))
            if (!$util.isInteger(message.BlackWin) && !(message.BlackWin && $util.isInteger(message.BlackWin.low) && $util.isInteger(message.BlackWin.high)))
                return "BlackWin: integer|Long expected";
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            if (!$util.isInteger(message.LuckWin) && !(message.LuckWin && $util.isInteger(message.LuckWin.low) && $util.isInteger(message.LuckWin.high)))
                return "LuckWin: integer|Long expected";
        return null;
    };

    /**
     * Creates a SceneUserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SceneUserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SceneUserInfo} SceneUserInfo
     */
    SceneUserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.SceneUserInfo)
            return object;
        var message = new $root.SceneUserInfo();
        if (object.UserID != null)
            if ($util.Long)
                (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
            else if (typeof object.UserID === "string")
                message.UserID = parseInt(object.UserID, 10);
            else if (typeof object.UserID === "number")
                message.UserID = object.UserID;
            else if (typeof object.UserID === "object")
                message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
        if (object.SceneSeatID != null)
            message.SceneSeatID = object.SceneSeatID | 0;
        if (object.RedWin != null)
            if ($util.Long)
                (message.RedWin = $util.Long.fromValue(object.RedWin)).unsigned = false;
            else if (typeof object.RedWin === "string")
                message.RedWin = parseInt(object.RedWin, 10);
            else if (typeof object.RedWin === "number")
                message.RedWin = object.RedWin;
            else if (typeof object.RedWin === "object")
                message.RedWin = new $util.LongBits(object.RedWin.low >>> 0, object.RedWin.high >>> 0).toNumber();
        if (object.BlackWin != null)
            if ($util.Long)
                (message.BlackWin = $util.Long.fromValue(object.BlackWin)).unsigned = false;
            else if (typeof object.BlackWin === "string")
                message.BlackWin = parseInt(object.BlackWin, 10);
            else if (typeof object.BlackWin === "number")
                message.BlackWin = object.BlackWin;
            else if (typeof object.BlackWin === "object")
                message.BlackWin = new $util.LongBits(object.BlackWin.low >>> 0, object.BlackWin.high >>> 0).toNumber();
        if (object.LuckWin != null)
            if ($util.Long)
                (message.LuckWin = $util.Long.fromValue(object.LuckWin)).unsigned = false;
            else if (typeof object.LuckWin === "string")
                message.LuckWin = parseInt(object.LuckWin, 10);
            else if (typeof object.LuckWin === "number")
                message.LuckWin = object.LuckWin;
            else if (typeof object.LuckWin === "object")
                message.LuckWin = new $util.LongBits(object.LuckWin.low >>> 0, object.LuckWin.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a SceneUserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SceneUserInfo
     * @static
     * @param {SceneUserInfo} message SceneUserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SceneUserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserID = options.longs === String ? "0" : 0;
            object.SceneSeatID = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.RedWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.RedWin = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BlackWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BlackWin = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.LuckWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.LuckWin = options.longs === String ? "0" : 0;
        }
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (typeof message.UserID === "number")
                object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
            else
                object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
        if (message.SceneSeatID != null && message.hasOwnProperty("SceneSeatID"))
            object.SceneSeatID = message.SceneSeatID;
        if (message.RedWin != null && message.hasOwnProperty("RedWin"))
            if (typeof message.RedWin === "number")
                object.RedWin = options.longs === String ? String(message.RedWin) : message.RedWin;
            else
                object.RedWin = options.longs === String ? $util.Long.prototype.toString.call(message.RedWin) : options.longs === Number ? new $util.LongBits(message.RedWin.low >>> 0, message.RedWin.high >>> 0).toNumber() : message.RedWin;
        if (message.BlackWin != null && message.hasOwnProperty("BlackWin"))
            if (typeof message.BlackWin === "number")
                object.BlackWin = options.longs === String ? String(message.BlackWin) : message.BlackWin;
            else
                object.BlackWin = options.longs === String ? $util.Long.prototype.toString.call(message.BlackWin) : options.longs === Number ? new $util.LongBits(message.BlackWin.low >>> 0, message.BlackWin.high >>> 0).toNumber() : message.BlackWin;
        if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
            if (typeof message.LuckWin === "number")
                object.LuckWin = options.longs === String ? String(message.LuckWin) : message.LuckWin;
            else
                object.LuckWin = options.longs === String ? $util.Long.prototype.toString.call(message.LuckWin) : options.longs === Number ? new $util.LongBits(message.LuckWin.low >>> 0, message.LuckWin.high >>> 0).toNumber() : message.LuckWin;
        return object;
    };

    /**
     * Converts this SceneUserInfo to JSON.
     * @function toJSON
     * @memberof SceneUserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SceneUserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SceneUserInfo;
})();

$root.SceneUserSettle = (function() {

    /**
     * Properties of a SceneUserSettle.
     * @exports ISceneUserSettle
     * @interface ISceneUserSettle
     * @property {Array.<ISceneUserInfo>|null} [UserList] SceneUserSettle UserList
     */

    /**
     * Constructs a new SceneUserSettle.
     * @exports SceneUserSettle
     * @classdesc Represents a SceneUserSettle.
     * @implements ISceneUserSettle
     * @constructor
     * @param {ISceneUserSettle=} [properties] Properties to set
     */
    function SceneUserSettle(properties) {
        this.UserList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SceneUserSettle UserList.
     * @member {Array.<ISceneUserInfo>} UserList
     * @memberof SceneUserSettle
     * @instance
     */
    SceneUserSettle.prototype.UserList = $util.emptyArray;

    /**
     * Creates a new SceneUserSettle instance using the specified properties.
     * @function create
     * @memberof SceneUserSettle
     * @static
     * @param {ISceneUserSettle=} [properties] Properties to set
     * @returns {SceneUserSettle} SceneUserSettle instance
     */
    SceneUserSettle.create = function create(properties) {
        return new SceneUserSettle(properties);
    };

    /**
     * Encodes the specified SceneUserSettle message. Does not implicitly {@link SceneUserSettle.verify|verify} messages.
     * @function encode
     * @memberof SceneUserSettle
     * @static
     * @param {ISceneUserSettle} message SceneUserSettle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneUserSettle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserList != null && message.UserList.length)
            for (var i = 0; i < message.UserList.length; ++i)
                $root.SceneUserInfo.encode(message.UserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SceneUserSettle message, length delimited. Does not implicitly {@link SceneUserSettle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SceneUserSettle
     * @static
     * @param {ISceneUserSettle} message SceneUserSettle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SceneUserSettle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SceneUserSettle message from the specified reader or buffer.
     * @function decode
     * @memberof SceneUserSettle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SceneUserSettle} SceneUserSettle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneUserSettle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SceneUserSettle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.UserList && message.UserList.length))
                    message.UserList = [];
                message.UserList.push($root.SceneUserInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SceneUserSettle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SceneUserSettle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SceneUserSettle} SceneUserSettle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SceneUserSettle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SceneUserSettle message.
     * @function verify
     * @memberof SceneUserSettle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SceneUserSettle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserList != null && message.hasOwnProperty("UserList")) {
            if (!Array.isArray(message.UserList))
                return "UserList: array expected";
            for (var i = 0; i < message.UserList.length; ++i) {
                var error = $root.SceneUserInfo.verify(message.UserList[i]);
                if (error)
                    return "UserList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SceneUserSettle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SceneUserSettle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SceneUserSettle} SceneUserSettle
     */
    SceneUserSettle.fromObject = function fromObject(object) {
        if (object instanceof $root.SceneUserSettle)
            return object;
        var message = new $root.SceneUserSettle();
        if (object.UserList) {
            if (!Array.isArray(object.UserList))
                throw TypeError(".SceneUserSettle.UserList: array expected");
            message.UserList = [];
            for (var i = 0; i < object.UserList.length; ++i) {
                if (typeof object.UserList[i] !== "object")
                    throw TypeError(".SceneUserSettle.UserList: object expected");
                message.UserList[i] = $root.SceneUserInfo.fromObject(object.UserList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SceneUserSettle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SceneUserSettle
     * @static
     * @param {SceneUserSettle} message SceneUserSettle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SceneUserSettle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.UserList = [];
        if (message.UserList && message.UserList.length) {
            object.UserList = [];
            for (var j = 0; j < message.UserList.length; ++j)
                object.UserList[j] = $root.SceneUserInfo.toObject(message.UserList[j], options);
        }
        return object;
    };

    /**
     * Converts this SceneUserSettle to JSON.
     * @function toJSON
     * @memberof SceneUserSettle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SceneUserSettle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SceneUserSettle;
})();

module.exports = $root;
