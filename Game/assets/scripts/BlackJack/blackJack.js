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
 * @property {number} SitDown=1 SitDown value
 * @property {number} Bet=2 Bet value
 * @property {number} AskDo=3 AskDo value
 * @property {number} BuyInsure=4 BuyInsure value
 * @property {number} BetOver=5 BetOver value
 */
$root.ReceiveMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "StartID"] = 0;
    values[valuesById[1] = "SitDown"] = 1;
    values[valuesById[2] = "Bet"] = 2;
    values[valuesById[3] = "AskDo"] = 3;
    values[valuesById[4] = "BuyInsure"] = 4;
    values[valuesById[5] = "BetOver"] = 5;
    return values;
})();

/**
 * SendToClientMessageType enum.
 * @exports SendToClientMessageType
 * @enum {string}
 * @property {number} RestartID=0 RestartID value
 * @property {number} BetRet=1 BetRet value
 * @property {number} BetFail=2 BetFail value
 * @property {number} BetSuccessMessageID=3 BetSuccessMessageID value
 * @property {number} SceneMessage=4 SceneMessage value
 * @property {number} AskDo=5 AskDo value
 * @property {number} Status=6 Status value
 * @property {number} Settle=7 Settle value
 * @property {number} SitDownFail=8 SitDownFail value
 * @property {number} BuyInsure=9 BuyInsure value
 * @property {number} FaPai=10 FaPai value
 * @property {number} ZhuangJiaAnPai=11 ZhuangJiaAnPai value
 * @property {number} CurrentSeat=12 CurrentSeat value
 */
$root.SendToClientMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RestartID"] = 0;
    values[valuesById[1] = "BetRet"] = 1;
    values[valuesById[2] = "BetFail"] = 2;
    values[valuesById[3] = "BetSuccessMessageID"] = 3;
    values[valuesById[4] = "SceneMessage"] = 4;
    values[valuesById[5] = "AskDo"] = 5;
    values[valuesById[6] = "Status"] = 6;
    values[valuesById[7] = "Settle"] = 7;
    values[valuesById[8] = "SitDownFail"] = 8;
    values[valuesById[9] = "BuyInsure"] = 9;
    values[valuesById[10] = "FaPai"] = 10;
    values[valuesById[11] = "ZhuangJiaAnPai"] = 11;
    values[valuesById[12] = "CurrentSeat"] = 12;
    return values;
})();

/**
 * GameStatus enum.
 * @exports GameStatus
 * @enum {string}
 * @property {number} StartStatus=0 StartStatus value
 * @property {number} BetStatus=1 BetStatus value
 * @property {number} FirstRoundFaPai=2 FirstRoundFaPai value
 * @property {number} SecondRoundFaPai=3 SecondRoundFaPai value
 * @property {number} Result=4 Result value
 */
$root.GameStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "StartStatus"] = 0;
    values[valuesById[1] = "BetStatus"] = 1;
    values[valuesById[2] = "FirstRoundFaPai"] = 2;
    values[valuesById[3] = "SecondRoundFaPai"] = 3;
    values[valuesById[4] = "Result"] = 4;
    return values;
})();

/**
 * CardsType enum.
 * @exports CardsType
 * @enum {string}
 * @property {number} Normal=0 Normal value
 * @property {number} BlackJack=1 BlackJack value
 * @property {number} FiveDragon=2 FiveDragon value
 * @property {number} Point21=3 Point21 value
 * @property {number} Other=4 Other value
 * @property {number} Bust=5 Bust value
 */
$root.CardsType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Normal"] = 0;
    values[valuesById[1] = "BlackJack"] = 1;
    values[valuesById[2] = "FiveDragon"] = 2;
    values[valuesById[3] = "Point21"] = 3;
    values[valuesById[4] = "Other"] = 4;
    values[valuesById[5] = "Bust"] = 5;
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

$root.CurrentSeat = (function() {

    /**
     * Properties of a CurrentSeat.
     * @exports ICurrentSeat
     * @interface ICurrentSeat
     * @property {number|null} [Seat] CurrentSeat Seat
     * @property {number|null} [StatusTime] CurrentSeat StatusTime
     */

    /**
     * Constructs a new CurrentSeat.
     * @exports CurrentSeat
     * @classdesc Represents a CurrentSeat.
     * @implements ICurrentSeat
     * @constructor
     * @param {ICurrentSeat=} [properties] Properties to set
     */
    function CurrentSeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CurrentSeat Seat.
     * @member {number} Seat
     * @memberof CurrentSeat
     * @instance
     */
    CurrentSeat.prototype.Seat = 0;

    /**
     * CurrentSeat StatusTime.
     * @member {number} StatusTime
     * @memberof CurrentSeat
     * @instance
     */
    CurrentSeat.prototype.StatusTime = 0;

    /**
     * Creates a new CurrentSeat instance using the specified properties.
     * @function create
     * @memberof CurrentSeat
     * @static
     * @param {ICurrentSeat=} [properties] Properties to set
     * @returns {CurrentSeat} CurrentSeat instance
     */
    CurrentSeat.create = function create(properties) {
        return new CurrentSeat(properties);
    };

    /**
     * Encodes the specified CurrentSeat message. Does not implicitly {@link CurrentSeat.verify|verify} messages.
     * @function encode
     * @memberof CurrentSeat
     * @static
     * @param {ICurrentSeat} message CurrentSeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrentSeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Seat != null && message.hasOwnProperty("Seat"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Seat);
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.StatusTime);
        return writer;
    };

    /**
     * Encodes the specified CurrentSeat message, length delimited. Does not implicitly {@link CurrentSeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CurrentSeat
     * @static
     * @param {ICurrentSeat} message CurrentSeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CurrentSeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CurrentSeat message from the specified reader or buffer.
     * @function decode
     * @memberof CurrentSeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CurrentSeat} CurrentSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrentSeat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CurrentSeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Seat = reader.int32();
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
     * Decodes a CurrentSeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CurrentSeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CurrentSeat} CurrentSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CurrentSeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CurrentSeat message.
     * @function verify
     * @memberof CurrentSeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CurrentSeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Seat != null && message.hasOwnProperty("Seat"))
            if (!$util.isInteger(message.Seat))
                return "Seat: integer expected";
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            if (!$util.isInteger(message.StatusTime))
                return "StatusTime: integer expected";
        return null;
    };

    /**
     * Creates a CurrentSeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CurrentSeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CurrentSeat} CurrentSeat
     */
    CurrentSeat.fromObject = function fromObject(object) {
        if (object instanceof $root.CurrentSeat)
            return object;
        var message = new $root.CurrentSeat();
        if (object.Seat != null)
            message.Seat = object.Seat | 0;
        if (object.StatusTime != null)
            message.StatusTime = object.StatusTime | 0;
        return message;
    };

    /**
     * Creates a plain object from a CurrentSeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CurrentSeat
     * @static
     * @param {CurrentSeat} message CurrentSeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CurrentSeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Seat = 0;
            object.StatusTime = 0;
        }
        if (message.Seat != null && message.hasOwnProperty("Seat"))
            object.Seat = message.Seat;
        if (message.StatusTime != null && message.hasOwnProperty("StatusTime"))
            object.StatusTime = message.StatusTime;
        return object;
    };

    /**
     * Converts this CurrentSeat to JSON.
     * @function toJSON
     * @memberof CurrentSeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CurrentSeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CurrentSeat;
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
     * @property {number|null} [BetCardsIndex] BetSuccessMessage BetCardsIndex
     * @property {number|Long|null} [UserID] BetSuccessMessage UserID
     * @property {number|Long|null} [BetNum] BetSuccessMessage BetNum
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
     * BetSuccessMessage BetCardsIndex.
     * @member {number} BetCardsIndex
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.BetCardsIndex = 0;

    /**
     * BetSuccessMessage UserID.
     * @member {number|Long} UserID
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BetSuccessMessage BetNum.
     * @member {number|Long} BetNum
     * @memberof BetSuccessMessage
     * @instance
     */
    BetSuccessMessage.prototype.BetNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BetCardsIndex);
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.UserID);
        if (message.BetNum != null && message.hasOwnProperty("BetNum"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetNum);
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
                message.BetCardsIndex = reader.int32();
                break;
            case 4:
                message.UserID = reader.int64();
                break;
            case 5:
                message.BetNum = reader.int64();
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
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            if (!$util.isInteger(message.BetCardsIndex))
                return "BetCardsIndex: integer expected";
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                return "UserID: integer|Long expected";
        if (message.BetNum != null && message.hasOwnProperty("BetNum"))
            if (!$util.isInteger(message.BetNum) && !(message.BetNum && $util.isInteger(message.BetNum.low) && $util.isInteger(message.BetNum.high)))
                return "BetNum: integer|Long expected";
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
        if (object.BetCardsIndex != null)
            message.BetCardsIndex = object.BetCardsIndex | 0;
        if (object.UserID != null)
            if ($util.Long)
                (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
            else if (typeof object.UserID === "string")
                message.UserID = parseInt(object.UserID, 10);
            else if (typeof object.UserID === "number")
                message.UserID = object.UserID;
            else if (typeof object.UserID === "object")
                message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
        if (object.BetNum != null)
            if ($util.Long)
                (message.BetNum = $util.Long.fromValue(object.BetNum)).unsigned = false;
            else if (typeof object.BetNum === "string")
                message.BetNum = parseInt(object.BetNum, 10);
            else if (typeof object.BetNum === "number")
                message.BetNum = object.BetNum;
            else if (typeof object.BetNum === "object")
                message.BetNum = new $util.LongBits(object.BetNum.low >>> 0, object.BetNum.high >>> 0).toNumber();
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
            object.BetCardsIndex = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserID = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BetNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BetNum = options.longs === String ? "0" : 0;
        }
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            object.SeatId = message.SeatId;
        if (message.BetIndex != null && message.hasOwnProperty("BetIndex"))
            object.BetIndex = message.BetIndex;
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            object.BetCardsIndex = message.BetCardsIndex;
        if (message.UserID != null && message.hasOwnProperty("UserID"))
            if (typeof message.UserID === "number")
                object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
            else
                object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
        if (message.BetNum != null && message.hasOwnProperty("BetNum"))
            if (typeof message.BetNum === "number")
                object.BetNum = options.longs === String ? String(message.BetNum) : message.BetNum;
            else
                object.BetNum = options.longs === String ? $util.Long.prototype.toString.call(message.BetNum) : options.longs === Number ? new $util.LongBits(message.BetNum.low >>> 0, message.BetNum.high >>> 0).toNumber() : message.BetNum;
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

$root.FaPai = (function() {

    /**
     * Properties of a FaPai.
     * @exports IFaPai
     * @interface IFaPai
     * @property {Array.<IUserPaiInfo>|null} [UserPaiInfoArr] FaPai UserPaiInfoArr
     * @property {Uint8Array|null} [Cards] FaPai Cards
     */

    /**
     * Constructs a new FaPai.
     * @exports FaPai
     * @classdesc Represents a FaPai.
     * @implements IFaPai
     * @constructor
     * @param {IFaPai=} [properties] Properties to set
     */
    function FaPai(properties) {
        this.UserPaiInfoArr = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FaPai UserPaiInfoArr.
     * @member {Array.<IUserPaiInfo>} UserPaiInfoArr
     * @memberof FaPai
     * @instance
     */
    FaPai.prototype.UserPaiInfoArr = $util.emptyArray;

    /**
     * FaPai Cards.
     * @member {Uint8Array} Cards
     * @memberof FaPai
     * @instance
     */
    FaPai.prototype.Cards = $util.newBuffer([]);

    /**
     * Creates a new FaPai instance using the specified properties.
     * @function create
     * @memberof FaPai
     * @static
     * @param {IFaPai=} [properties] Properties to set
     * @returns {FaPai} FaPai instance
     */
    FaPai.create = function create(properties) {
        return new FaPai(properties);
    };

    /**
     * Encodes the specified FaPai message. Does not implicitly {@link FaPai.verify|verify} messages.
     * @function encode
     * @memberof FaPai
     * @static
     * @param {IFaPai} message FaPai message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FaPai.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserPaiInfoArr != null && message.UserPaiInfoArr.length)
            for (var i = 0; i < message.UserPaiInfoArr.length; ++i)
                $root.UserPaiInfo.encode(message.UserPaiInfoArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Cards);
        return writer;
    };

    /**
     * Encodes the specified FaPai message, length delimited. Does not implicitly {@link FaPai.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FaPai
     * @static
     * @param {IFaPai} message FaPai message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FaPai.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FaPai message from the specified reader or buffer.
     * @function decode
     * @memberof FaPai
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FaPai} FaPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FaPai.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FaPai();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.UserPaiInfoArr && message.UserPaiInfoArr.length))
                    message.UserPaiInfoArr = [];
                message.UserPaiInfoArr.push($root.UserPaiInfo.decode(reader, reader.uint32()));
                break;
            case 2:
                message.Cards = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FaPai message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FaPai
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FaPai} FaPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FaPai.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FaPai message.
     * @function verify
     * @memberof FaPai
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FaPai.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserPaiInfoArr != null && message.hasOwnProperty("UserPaiInfoArr")) {
            if (!Array.isArray(message.UserPaiInfoArr))
                return "UserPaiInfoArr: array expected";
            for (var i = 0; i < message.UserPaiInfoArr.length; ++i) {
                var error = $root.UserPaiInfo.verify(message.UserPaiInfoArr[i]);
                if (error)
                    return "UserPaiInfoArr." + error;
            }
        }
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                return "Cards: buffer expected";
        return null;
    };

    /**
     * Creates a FaPai message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FaPai
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FaPai} FaPai
     */
    FaPai.fromObject = function fromObject(object) {
        if (object instanceof $root.FaPai)
            return object;
        var message = new $root.FaPai();
        if (object.UserPaiInfoArr) {
            if (!Array.isArray(object.UserPaiInfoArr))
                throw TypeError(".FaPai.UserPaiInfoArr: array expected");
            message.UserPaiInfoArr = [];
            for (var i = 0; i < object.UserPaiInfoArr.length; ++i) {
                if (typeof object.UserPaiInfoArr[i] !== "object")
                    throw TypeError(".FaPai.UserPaiInfoArr: object expected");
                message.UserPaiInfoArr[i] = $root.UserPaiInfo.fromObject(object.UserPaiInfoArr[i]);
            }
        }
        if (object.Cards != null)
            if (typeof object.Cards === "string")
                $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
            else if (object.Cards.length)
                message.Cards = object.Cards;
        return message;
    };

    /**
     * Creates a plain object from a FaPai message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FaPai
     * @static
     * @param {FaPai} message FaPai
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FaPai.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.UserPaiInfoArr = [];
        if (options.defaults)
            if (options.bytes === String)
                object.Cards = "";
            else {
                object.Cards = [];
                if (options.bytes !== Array)
                    object.Cards = $util.newBuffer(object.Cards);
            }
        if (message.UserPaiInfoArr && message.UserPaiInfoArr.length) {
            object.UserPaiInfoArr = [];
            for (var j = 0; j < message.UserPaiInfoArr.length; ++j)
                object.UserPaiInfoArr[j] = $root.UserPaiInfo.toObject(message.UserPaiInfoArr[j], options);
        }
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
        return object;
    };

    /**
     * Converts this FaPai to JSON.
     * @function toJSON
     * @memberof FaPai
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FaPai.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FaPai;
})();

$root.FaPaiOne = (function() {

    /**
     * Properties of a FaPaiOne.
     * @exports IFaPaiOne
     * @interface IFaPaiOne
     * @property {number|null} [SeatId] FaPaiOne SeatId
     * @property {Uint8Array|null} [Cards] FaPaiOne Cards
     */

    /**
     * Constructs a new FaPaiOne.
     * @exports FaPaiOne
     * @classdesc Represents a FaPaiOne.
     * @implements IFaPaiOne
     * @constructor
     * @param {IFaPaiOne=} [properties] Properties to set
     */
    function FaPaiOne(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FaPaiOne SeatId.
     * @member {number} SeatId
     * @memberof FaPaiOne
     * @instance
     */
    FaPaiOne.prototype.SeatId = 0;

    /**
     * FaPaiOne Cards.
     * @member {Uint8Array} Cards
     * @memberof FaPaiOne
     * @instance
     */
    FaPaiOne.prototype.Cards = $util.newBuffer([]);

    /**
     * Creates a new FaPaiOne instance using the specified properties.
     * @function create
     * @memberof FaPaiOne
     * @static
     * @param {IFaPaiOne=} [properties] Properties to set
     * @returns {FaPaiOne} FaPaiOne instance
     */
    FaPaiOne.create = function create(properties) {
        return new FaPaiOne(properties);
    };

    /**
     * Encodes the specified FaPaiOne message. Does not implicitly {@link FaPaiOne.verify|verify} messages.
     * @function encode
     * @memberof FaPaiOne
     * @static
     * @param {IFaPaiOne} message FaPaiOne message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FaPaiOne.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatId);
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Cards);
        return writer;
    };

    /**
     * Encodes the specified FaPaiOne message, length delimited. Does not implicitly {@link FaPaiOne.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FaPaiOne
     * @static
     * @param {IFaPaiOne} message FaPaiOne message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FaPaiOne.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FaPaiOne message from the specified reader or buffer.
     * @function decode
     * @memberof FaPaiOne
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FaPaiOne} FaPaiOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FaPaiOne.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FaPaiOne();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.SeatId = reader.int32();
                break;
            case 2:
                message.Cards = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FaPaiOne message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FaPaiOne
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FaPaiOne} FaPaiOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FaPaiOne.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FaPaiOne message.
     * @function verify
     * @memberof FaPaiOne
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FaPaiOne.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            if (!$util.isInteger(message.SeatId))
                return "SeatId: integer expected";
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                return "Cards: buffer expected";
        return null;
    };

    /**
     * Creates a FaPaiOne message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FaPaiOne
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FaPaiOne} FaPaiOne
     */
    FaPaiOne.fromObject = function fromObject(object) {
        if (object instanceof $root.FaPaiOne)
            return object;
        var message = new $root.FaPaiOne();
        if (object.SeatId != null)
            message.SeatId = object.SeatId | 0;
        if (object.Cards != null)
            if (typeof object.Cards === "string")
                $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
            else if (object.Cards.length)
                message.Cards = object.Cards;
        return message;
    };

    /**
     * Creates a plain object from a FaPaiOne message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FaPaiOne
     * @static
     * @param {FaPaiOne} message FaPaiOne
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FaPaiOne.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.SeatId = 0;
            if (options.bytes === String)
                object.Cards = "";
            else {
                object.Cards = [];
                if (options.bytes !== Array)
                    object.Cards = $util.newBuffer(object.Cards);
            }
        }
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            object.SeatId = message.SeatId;
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
        return object;
    };

    /**
     * Converts this FaPaiOne to JSON.
     * @function toJSON
     * @memberof FaPaiOne
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FaPaiOne.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FaPaiOne;
})();

$root.UserPaiInfo = (function() {

    /**
     * Properties of a UserPaiInfo.
     * @exports IUserPaiInfo
     * @interface IUserPaiInfo
     * @property {number|null} [SeatId] UserPaiInfo SeatId
     * @property {Uint8Array|null} [CardArr] UserPaiInfo CardArr
     */

    /**
     * Constructs a new UserPaiInfo.
     * @exports UserPaiInfo
     * @classdesc Represents a UserPaiInfo.
     * @implements IUserPaiInfo
     * @constructor
     * @param {IUserPaiInfo=} [properties] Properties to set
     */
    function UserPaiInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserPaiInfo SeatId.
     * @member {number} SeatId
     * @memberof UserPaiInfo
     * @instance
     */
    UserPaiInfo.prototype.SeatId = 0;

    /**
     * UserPaiInfo CardArr.
     * @member {Uint8Array} CardArr
     * @memberof UserPaiInfo
     * @instance
     */
    UserPaiInfo.prototype.CardArr = $util.newBuffer([]);

    /**
     * Creates a new UserPaiInfo instance using the specified properties.
     * @function create
     * @memberof UserPaiInfo
     * @static
     * @param {IUserPaiInfo=} [properties] Properties to set
     * @returns {UserPaiInfo} UserPaiInfo instance
     */
    UserPaiInfo.create = function create(properties) {
        return new UserPaiInfo(properties);
    };

    /**
     * Encodes the specified UserPaiInfo message. Does not implicitly {@link UserPaiInfo.verify|verify} messages.
     * @function encode
     * @memberof UserPaiInfo
     * @static
     * @param {IUserPaiInfo} message UserPaiInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserPaiInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatId);
        if (message.CardArr != null && message.hasOwnProperty("CardArr"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.CardArr);
        return writer;
    };

    /**
     * Encodes the specified UserPaiInfo message, length delimited. Does not implicitly {@link UserPaiInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserPaiInfo
     * @static
     * @param {IUserPaiInfo} message UserPaiInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserPaiInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserPaiInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserPaiInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserPaiInfo} UserPaiInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserPaiInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPaiInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.SeatId = reader.int32();
                break;
            case 2:
                message.CardArr = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserPaiInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserPaiInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserPaiInfo} UserPaiInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserPaiInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserPaiInfo message.
     * @function verify
     * @memberof UserPaiInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserPaiInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            if (!$util.isInteger(message.SeatId))
                return "SeatId: integer expected";
        if (message.CardArr != null && message.hasOwnProperty("CardArr"))
            if (!(message.CardArr && typeof message.CardArr.length === "number" || $util.isString(message.CardArr)))
                return "CardArr: buffer expected";
        return null;
    };

    /**
     * Creates a UserPaiInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserPaiInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserPaiInfo} UserPaiInfo
     */
    UserPaiInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.UserPaiInfo)
            return object;
        var message = new $root.UserPaiInfo();
        if (object.SeatId != null)
            message.SeatId = object.SeatId | 0;
        if (object.CardArr != null)
            if (typeof object.CardArr === "string")
                $util.base64.decode(object.CardArr, message.CardArr = $util.newBuffer($util.base64.length(object.CardArr)), 0);
            else if (object.CardArr.length)
                message.CardArr = object.CardArr;
        return message;
    };

    /**
     * Creates a plain object from a UserPaiInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserPaiInfo
     * @static
     * @param {UserPaiInfo} message UserPaiInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserPaiInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.SeatId = 0;
            if (options.bytes === String)
                object.CardArr = "";
            else {
                object.CardArr = [];
                if (options.bytes !== Array)
                    object.CardArr = $util.newBuffer(object.CardArr);
            }
        }
        if (message.SeatId != null && message.hasOwnProperty("SeatId"))
            object.SeatId = message.SeatId;
        if (message.CardArr != null && message.hasOwnProperty("CardArr"))
            object.CardArr = options.bytes === String ? $util.base64.encode(message.CardArr, 0, message.CardArr.length) : options.bytes === Array ? Array.prototype.slice.call(message.CardArr) : message.CardArr;
        return object;
    };

    /**
     * Converts this UserPaiInfo to JSON.
     * @function toJSON
     * @memberof UserPaiInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserPaiInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserPaiInfo;
})();

$root.ZhuangJiaAnPai = (function() {

    /**
     * Properties of a ZhuangJiaAnPai.
     * @exports IZhuangJiaAnPai
     * @interface IZhuangJiaAnPai
     * @property {Uint8Array|null} [Cards] ZhuangJiaAnPai Cards
     */

    /**
     * Constructs a new ZhuangJiaAnPai.
     * @exports ZhuangJiaAnPai
     * @classdesc Represents a ZhuangJiaAnPai.
     * @implements IZhuangJiaAnPai
     * @constructor
     * @param {IZhuangJiaAnPai=} [properties] Properties to set
     */
    function ZhuangJiaAnPai(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZhuangJiaAnPai Cards.
     * @member {Uint8Array} Cards
     * @memberof ZhuangJiaAnPai
     * @instance
     */
    ZhuangJiaAnPai.prototype.Cards = $util.newBuffer([]);

    /**
     * Creates a new ZhuangJiaAnPai instance using the specified properties.
     * @function create
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {IZhuangJiaAnPai=} [properties] Properties to set
     * @returns {ZhuangJiaAnPai} ZhuangJiaAnPai instance
     */
    ZhuangJiaAnPai.create = function create(properties) {
        return new ZhuangJiaAnPai(properties);
    };

    /**
     * Encodes the specified ZhuangJiaAnPai message. Does not implicitly {@link ZhuangJiaAnPai.verify|verify} messages.
     * @function encode
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {IZhuangJiaAnPai} message ZhuangJiaAnPai message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuangJiaAnPai.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Cards);
        return writer;
    };

    /**
     * Encodes the specified ZhuangJiaAnPai message, length delimited. Does not implicitly {@link ZhuangJiaAnPai.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {IZhuangJiaAnPai} message ZhuangJiaAnPai message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZhuangJiaAnPai.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ZhuangJiaAnPai message from the specified reader or buffer.
     * @function decode
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZhuangJiaAnPai} ZhuangJiaAnPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuangJiaAnPai.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZhuangJiaAnPai();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Cards = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ZhuangJiaAnPai message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ZhuangJiaAnPai} ZhuangJiaAnPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZhuangJiaAnPai.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ZhuangJiaAnPai message.
     * @function verify
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZhuangJiaAnPai.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                return "Cards: buffer expected";
        return null;
    };

    /**
     * Creates a ZhuangJiaAnPai message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZhuangJiaAnPai} ZhuangJiaAnPai
     */
    ZhuangJiaAnPai.fromObject = function fromObject(object) {
        if (object instanceof $root.ZhuangJiaAnPai)
            return object;
        var message = new $root.ZhuangJiaAnPai();
        if (object.Cards != null)
            if (typeof object.Cards === "string")
                $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
            else if (object.Cards.length)
                message.Cards = object.Cards;
        return message;
    };

    /**
     * Creates a plain object from a ZhuangJiaAnPai message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZhuangJiaAnPai
     * @static
     * @param {ZhuangJiaAnPai} message ZhuangJiaAnPai
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZhuangJiaAnPai.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.Cards = "";
            else {
                object.Cards = [];
                if (options.bytes !== Array)
                    object.Cards = $util.newBuffer(object.Cards);
            }
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
        return object;
    };

    /**
     * Converts this ZhuangJiaAnPai to JSON.
     * @function toJSON
     * @memberof ZhuangJiaAnPai
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZhuangJiaAnPai.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ZhuangJiaAnPai;
})();

$root.HandCards = (function() {

    /**
     * Properties of a HandCards.
     * @exports IHandCards
     * @interface IHandCards
     * @property {Uint8Array|null} [Cards] HandCards Cards
     */

    /**
     * Constructs a new HandCards.
     * @exports HandCards
     * @classdesc Represents a HandCards.
     * @implements IHandCards
     * @constructor
     * @param {IHandCards=} [properties] Properties to set
     */
    function HandCards(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandCards Cards.
     * @member {Uint8Array} Cards
     * @memberof HandCards
     * @instance
     */
    HandCards.prototype.Cards = $util.newBuffer([]);

    /**
     * Creates a new HandCards instance using the specified properties.
     * @function create
     * @memberof HandCards
     * @static
     * @param {IHandCards=} [properties] Properties to set
     * @returns {HandCards} HandCards instance
     */
    HandCards.create = function create(properties) {
        return new HandCards(properties);
    };

    /**
     * Encodes the specified HandCards message. Does not implicitly {@link HandCards.verify|verify} messages.
     * @function encode
     * @memberof HandCards
     * @static
     * @param {IHandCards} message HandCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandCards.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Cards);
        return writer;
    };

    /**
     * Encodes the specified HandCards message, length delimited. Does not implicitly {@link HandCards.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandCards
     * @static
     * @param {IHandCards} message HandCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandCards.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandCards message from the specified reader or buffer.
     * @function decode
     * @memberof HandCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandCards} HandCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandCards.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandCards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Cards = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HandCards message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandCards} HandCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandCards.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandCards message.
     * @function verify
     * @memberof HandCards
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandCards.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                return "Cards: buffer expected";
        return null;
    };

    /**
     * Creates a HandCards message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandCards
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandCards} HandCards
     */
    HandCards.fromObject = function fromObject(object) {
        if (object instanceof $root.HandCards)
            return object;
        var message = new $root.HandCards();
        if (object.Cards != null)
            if (typeof object.Cards === "string")
                $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
            else if (object.Cards.length)
                message.Cards = object.Cards;
        return message;
    };

    /**
     * Creates a plain object from a HandCards message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandCards
     * @static
     * @param {HandCards} message HandCards
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HandCards.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.Cards = "";
            else {
                object.Cards = [];
                if (options.bytes !== Array)
                    object.Cards = $util.newBuffer(object.Cards);
            }
        if (message.Cards != null && message.hasOwnProperty("Cards"))
            object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
        return object;
    };

    /**
     * Converts this HandCards to JSON.
     * @function toJSON
     * @memberof HandCards
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HandCards.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HandCards;
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
     * @property {Uint8Array|null} [Cards0] SeatUser Cards0
     * @property {Uint8Array|null} [Cards1] SeatUser Cards1
     * @property {number|Long|null} [CardsBet0] SeatUser CardsBet0
     * @property {number|Long|null} [CardsBet1] SeatUser CardsBet1
     * @property {boolean|null} [IsBuyInsure] SeatUser IsBuyInsure
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
     * SeatUser Cards0.
     * @member {Uint8Array} Cards0
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.Cards0 = $util.newBuffer([]);

    /**
     * SeatUser Cards1.
     * @member {Uint8Array} Cards1
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.Cards1 = $util.newBuffer([]);

    /**
     * SeatUser CardsBet0.
     * @member {number|Long} CardsBet0
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.CardsBet0 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SeatUser CardsBet1.
     * @member {number|Long} CardsBet1
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.CardsBet1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SeatUser IsBuyInsure.
     * @member {boolean} IsBuyInsure
     * @memberof SeatUser
     * @instance
     */
    SeatUser.prototype.IsBuyInsure = false;

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
        if (message.Cards0 != null && message.hasOwnProperty("Cards0"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.Cards0);
        if (message.Cards1 != null && message.hasOwnProperty("Cards1"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.Cards1);
        if (message.CardsBet0 != null && message.hasOwnProperty("CardsBet0"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.CardsBet0);
        if (message.CardsBet1 != null && message.hasOwnProperty("CardsBet1"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.CardsBet1);
        if (message.IsBuyInsure != null && message.hasOwnProperty("IsBuyInsure"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.IsBuyInsure);
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
                message.Cards0 = reader.bytes();
                break;
            case 8:
                message.Cards1 = reader.bytes();
                break;
            case 9:
                message.CardsBet0 = reader.int64();
                break;
            case 10:
                message.CardsBet1 = reader.int64();
                break;
            case 11:
                message.IsBuyInsure = reader.bool();
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
        if (message.Cards0 != null && message.hasOwnProperty("Cards0"))
            if (!(message.Cards0 && typeof message.Cards0.length === "number" || $util.isString(message.Cards0)))
                return "Cards0: buffer expected";
        if (message.Cards1 != null && message.hasOwnProperty("Cards1"))
            if (!(message.Cards1 && typeof message.Cards1.length === "number" || $util.isString(message.Cards1)))
                return "Cards1: buffer expected";
        if (message.CardsBet0 != null && message.hasOwnProperty("CardsBet0"))
            if (!$util.isInteger(message.CardsBet0) && !(message.CardsBet0 && $util.isInteger(message.CardsBet0.low) && $util.isInteger(message.CardsBet0.high)))
                return "CardsBet0: integer|Long expected";
        if (message.CardsBet1 != null && message.hasOwnProperty("CardsBet1"))
            if (!$util.isInteger(message.CardsBet1) && !(message.CardsBet1 && $util.isInteger(message.CardsBet1.low) && $util.isInteger(message.CardsBet1.high)))
                return "CardsBet1: integer|Long expected";
        if (message.IsBuyInsure != null && message.hasOwnProperty("IsBuyInsure"))
            if (typeof message.IsBuyInsure !== "boolean")
                return "IsBuyInsure: boolean expected";
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
        if (object.Cards0 != null)
            if (typeof object.Cards0 === "string")
                $util.base64.decode(object.Cards0, message.Cards0 = $util.newBuffer($util.base64.length(object.Cards0)), 0);
            else if (object.Cards0.length)
                message.Cards0 = object.Cards0;
        if (object.Cards1 != null)
            if (typeof object.Cards1 === "string")
                $util.base64.decode(object.Cards1, message.Cards1 = $util.newBuffer($util.base64.length(object.Cards1)), 0);
            else if (object.Cards1.length)
                message.Cards1 = object.Cards1;
        if (object.CardsBet0 != null)
            if ($util.Long)
                (message.CardsBet0 = $util.Long.fromValue(object.CardsBet0)).unsigned = false;
            else if (typeof object.CardsBet0 === "string")
                message.CardsBet0 = parseInt(object.CardsBet0, 10);
            else if (typeof object.CardsBet0 === "number")
                message.CardsBet0 = object.CardsBet0;
            else if (typeof object.CardsBet0 === "object")
                message.CardsBet0 = new $util.LongBits(object.CardsBet0.low >>> 0, object.CardsBet0.high >>> 0).toNumber();
        if (object.CardsBet1 != null)
            if ($util.Long)
                (message.CardsBet1 = $util.Long.fromValue(object.CardsBet1)).unsigned = false;
            else if (typeof object.CardsBet1 === "string")
                message.CardsBet1 = parseInt(object.CardsBet1, 10);
            else if (typeof object.CardsBet1 === "number")
                message.CardsBet1 = object.CardsBet1;
            else if (typeof object.CardsBet1 === "object")
                message.CardsBet1 = new $util.LongBits(object.CardsBet1.low >>> 0, object.CardsBet1.high >>> 0).toNumber();
        if (object.IsBuyInsure != null)
            message.IsBuyInsure = Boolean(object.IsBuyInsure);
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
            if (options.bytes === String)
                object.Cards0 = "";
            else {
                object.Cards0 = [];
                if (options.bytes !== Array)
                    object.Cards0 = $util.newBuffer(object.Cards0);
            }
            if (options.bytes === String)
                object.Cards1 = "";
            else {
                object.Cards1 = [];
                if (options.bytes !== Array)
                    object.Cards1 = $util.newBuffer(object.Cards1);
            }
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.CardsBet0 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.CardsBet0 = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.CardsBet1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.CardsBet1 = options.longs === String ? "0" : 0;
            object.IsBuyInsure = false;
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
        if (message.Cards0 != null && message.hasOwnProperty("Cards0"))
            object.Cards0 = options.bytes === String ? $util.base64.encode(message.Cards0, 0, message.Cards0.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards0) : message.Cards0;
        if (message.Cards1 != null && message.hasOwnProperty("Cards1"))
            object.Cards1 = options.bytes === String ? $util.base64.encode(message.Cards1, 0, message.Cards1.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards1) : message.Cards1;
        if (message.CardsBet0 != null && message.hasOwnProperty("CardsBet0"))
            if (typeof message.CardsBet0 === "number")
                object.CardsBet0 = options.longs === String ? String(message.CardsBet0) : message.CardsBet0;
            else
                object.CardsBet0 = options.longs === String ? $util.Long.prototype.toString.call(message.CardsBet0) : options.longs === Number ? new $util.LongBits(message.CardsBet0.low >>> 0, message.CardsBet0.high >>> 0).toNumber() : message.CardsBet0;
        if (message.CardsBet1 != null && message.hasOwnProperty("CardsBet1"))
            if (typeof message.CardsBet1 === "number")
                object.CardsBet1 = options.longs === String ? String(message.CardsBet1) : message.CardsBet1;
            else
                object.CardsBet1 = options.longs === String ? $util.Long.prototype.toString.call(message.CardsBet1) : options.longs === Number ? new $util.LongBits(message.CardsBet1.low >>> 0, message.CardsBet1.high >>> 0).toNumber() : message.CardsBet1;
        if (message.IsBuyInsure != null && message.hasOwnProperty("IsBuyInsure"))
            object.IsBuyInsure = message.IsBuyInsure;
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
     * @property {number|null} [GameStatus] SceneMessage GameStatus
     * @property {number|null} [CurrentAskSeat] SceneMessage CurrentAskSeat
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
     * SceneMessage GameStatus.
     * @member {number} GameStatus
     * @memberof SceneMessage
     * @instance
     */
    SceneMessage.prototype.GameStatus = 0;

    /**
     * SceneMessage CurrentAskSeat.
     * @member {number} CurrentAskSeat
     * @memberof SceneMessage
     * @instance
     */
    SceneMessage.prototype.CurrentAskSeat = 0;

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
        if (message.GameStatus != null && message.hasOwnProperty("GameStatus"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameStatus);
        if (message.CurrentAskSeat != null && message.hasOwnProperty("CurrentAskSeat"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CurrentAskSeat);
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
            case 2:
                message.GameStatus = reader.int32();
                break;
            case 3:
                message.CurrentAskSeat = reader.int32();
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
        if (message.GameStatus != null && message.hasOwnProperty("GameStatus"))
            if (!$util.isInteger(message.GameStatus))
                return "GameStatus: integer expected";
        if (message.CurrentAskSeat != null && message.hasOwnProperty("CurrentAskSeat"))
            if (!$util.isInteger(message.CurrentAskSeat))
                return "CurrentAskSeat: integer expected";
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
        if (object.GameStatus != null)
            message.GameStatus = object.GameStatus | 0;
        if (object.CurrentAskSeat != null)
            message.CurrentAskSeat = object.CurrentAskSeat | 0;
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
        if (options.defaults) {
            object.GameStatus = 0;
            object.CurrentAskSeat = 0;
        }
        if (message.UserData && message.UserData.length) {
            object.UserData = [];
            for (var j = 0; j < message.UserData.length; ++j)
                object.UserData[j] = $root.SeatUser.toObject(message.UserData[j], options);
        }
        if (message.GameStatus != null && message.hasOwnProperty("GameStatus"))
            object.GameStatus = message.GameStatus;
        if (message.CurrentAskSeat != null && message.hasOwnProperty("CurrentAskSeat"))
            object.CurrentAskSeat = message.CurrentAskSeat;
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

$root.SettleMsg = (function() {

    /**
     * Properties of a SettleMsg.
     * @exports ISettleMsg
     * @interface ISettleMsg
     * @property {number|null} [UserId] SettleMsg UserId
     * @property {number|Long|null} [UserWinLoss] SettleMsg UserWinLoss
     * @property {number|Long|null} [ZhuangWinLoss] SettleMsg ZhuangWinLoss
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
     * SettleMsg UserId.
     * @member {number} UserId
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.UserId = 0;

    /**
     * SettleMsg UserWinLoss.
     * @member {number|Long} UserWinLoss
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.UserWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SettleMsg ZhuangWinLoss.
     * @member {number|Long} ZhuangWinLoss
     * @memberof SettleMsg
     * @instance
     */
    SettleMsg.prototype.ZhuangWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (message.UserId != null && message.hasOwnProperty("UserId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
        if (message.UserWinLoss != null && message.hasOwnProperty("UserWinLoss"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UserWinLoss);
        if (message.ZhuangWinLoss != null && message.hasOwnProperty("ZhuangWinLoss"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ZhuangWinLoss);
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
                message.UserId = reader.int32();
                break;
            case 2:
                message.UserWinLoss = reader.int64();
                break;
            case 3:
                message.ZhuangWinLoss = reader.int64();
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
        if (message.UserId != null && message.hasOwnProperty("UserId"))
            if (!$util.isInteger(message.UserId))
                return "UserId: integer expected";
        if (message.UserWinLoss != null && message.hasOwnProperty("UserWinLoss"))
            if (!$util.isInteger(message.UserWinLoss) && !(message.UserWinLoss && $util.isInteger(message.UserWinLoss.low) && $util.isInteger(message.UserWinLoss.high)))
                return "UserWinLoss: integer|Long expected";
        if (message.ZhuangWinLoss != null && message.hasOwnProperty("ZhuangWinLoss"))
            if (!$util.isInteger(message.ZhuangWinLoss) && !(message.ZhuangWinLoss && $util.isInteger(message.ZhuangWinLoss.low) && $util.isInteger(message.ZhuangWinLoss.high)))
                return "ZhuangWinLoss: integer|Long expected";
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
        if (object.UserId != null)
            message.UserId = object.UserId | 0;
        if (object.UserWinLoss != null)
            if ($util.Long)
                (message.UserWinLoss = $util.Long.fromValue(object.UserWinLoss)).unsigned = false;
            else if (typeof object.UserWinLoss === "string")
                message.UserWinLoss = parseInt(object.UserWinLoss, 10);
            else if (typeof object.UserWinLoss === "number")
                message.UserWinLoss = object.UserWinLoss;
            else if (typeof object.UserWinLoss === "object")
                message.UserWinLoss = new $util.LongBits(object.UserWinLoss.low >>> 0, object.UserWinLoss.high >>> 0).toNumber();
        if (object.ZhuangWinLoss != null)
            if ($util.Long)
                (message.ZhuangWinLoss = $util.Long.fromValue(object.ZhuangWinLoss)).unsigned = false;
            else if (typeof object.ZhuangWinLoss === "string")
                message.ZhuangWinLoss = parseInt(object.ZhuangWinLoss, 10);
            else if (typeof object.ZhuangWinLoss === "number")
                message.ZhuangWinLoss = object.ZhuangWinLoss;
            else if (typeof object.ZhuangWinLoss === "object")
                message.ZhuangWinLoss = new $util.LongBits(object.ZhuangWinLoss.low >>> 0, object.ZhuangWinLoss.high >>> 0).toNumber();
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
            object.UserId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserWinLoss = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.ZhuangWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ZhuangWinLoss = options.longs === String ? "0" : 0;
        }
        if (message.UserId != null && message.hasOwnProperty("UserId"))
            object.UserId = message.UserId;
        if (message.UserWinLoss != null && message.hasOwnProperty("UserWinLoss"))
            if (typeof message.UserWinLoss === "number")
                object.UserWinLoss = options.longs === String ? String(message.UserWinLoss) : message.UserWinLoss;
            else
                object.UserWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.UserWinLoss) : options.longs === Number ? new $util.LongBits(message.UserWinLoss.low >>> 0, message.UserWinLoss.high >>> 0).toNumber() : message.UserWinLoss;
        if (message.ZhuangWinLoss != null && message.hasOwnProperty("ZhuangWinLoss"))
            if (typeof message.ZhuangWinLoss === "number")
                object.ZhuangWinLoss = options.longs === String ? String(message.ZhuangWinLoss) : message.ZhuangWinLoss;
            else
                object.ZhuangWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangWinLoss) : options.longs === Number ? new $util.LongBits(message.ZhuangWinLoss.low >>> 0, message.ZhuangWinLoss.high >>> 0).toNumber() : message.ZhuangWinLoss;
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

$root.Bet = (function() {

    /**
     * Properties of a Bet.
     * @exports IBet
     * @interface IBet
     * @property {number|null} [BetCardsIndex] Bet BetCardsIndex
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
     * Bet BetCardsIndex.
     * @member {number} BetCardsIndex
     * @memberof Bet
     * @instance
     */
    Bet.prototype.BetCardsIndex = 0;

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
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetCardsIndex);
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
                message.BetCardsIndex = reader.int32();
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
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            if (!$util.isInteger(message.BetCardsIndex))
                return "BetCardsIndex: integer expected";
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
        if (object.BetCardsIndex != null)
            message.BetCardsIndex = object.BetCardsIndex | 0;
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
            object.BetCardsIndex = 0;
            object.BetIndex = 0;
        }
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            object.BetCardsIndex = message.BetCardsIndex;
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

$root.AskDo = (function() {

    /**
     * Properties of an AskDo.
     * @exports IAskDo
     * @interface IAskDo
     * @property {number|null} [GetPoker] AskDo GetPoker
     * @property {number|null} [DepartPoker] AskDo DepartPoker
     * @property {number|null} [DoubleBet] AskDo DoubleBet
     * @property {number|null} [Stop] AskDo Stop
     * @property {number|null} [GiveUp] AskDo GiveUp
     */

    /**
     * Constructs a new AskDo.
     * @exports AskDo
     * @classdesc Represents an AskDo.
     * @implements IAskDo
     * @constructor
     * @param {IAskDo=} [properties] Properties to set
     */
    function AskDo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AskDo GetPoker.
     * @member {number} GetPoker
     * @memberof AskDo
     * @instance
     */
    AskDo.prototype.GetPoker = 0;

    /**
     * AskDo DepartPoker.
     * @member {number} DepartPoker
     * @memberof AskDo
     * @instance
     */
    AskDo.prototype.DepartPoker = 0;

    /**
     * AskDo DoubleBet.
     * @member {number} DoubleBet
     * @memberof AskDo
     * @instance
     */
    AskDo.prototype.DoubleBet = 0;

    /**
     * AskDo Stop.
     * @member {number} Stop
     * @memberof AskDo
     * @instance
     */
    AskDo.prototype.Stop = 0;

    /**
     * AskDo GiveUp.
     * @member {number} GiveUp
     * @memberof AskDo
     * @instance
     */
    AskDo.prototype.GiveUp = 0;

    /**
     * Creates a new AskDo instance using the specified properties.
     * @function create
     * @memberof AskDo
     * @static
     * @param {IAskDo=} [properties] Properties to set
     * @returns {AskDo} AskDo instance
     */
    AskDo.create = function create(properties) {
        return new AskDo(properties);
    };

    /**
     * Encodes the specified AskDo message. Does not implicitly {@link AskDo.verify|verify} messages.
     * @function encode
     * @memberof AskDo
     * @static
     * @param {IAskDo} message AskDo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AskDo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.GetPoker != null && message.hasOwnProperty("GetPoker"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GetPoker);
        if (message.DepartPoker != null && message.hasOwnProperty("DepartPoker"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DepartPoker);
        if (message.DoubleBet != null && message.hasOwnProperty("DoubleBet"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.DoubleBet);
        if (message.Stop != null && message.hasOwnProperty("Stop"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Stop);
        if (message.GiveUp != null && message.hasOwnProperty("GiveUp"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.GiveUp);
        return writer;
    };

    /**
     * Encodes the specified AskDo message, length delimited. Does not implicitly {@link AskDo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AskDo
     * @static
     * @param {IAskDo} message AskDo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AskDo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AskDo message from the specified reader or buffer.
     * @function decode
     * @memberof AskDo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AskDo} AskDo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AskDo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AskDo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.GetPoker = reader.int32();
                break;
            case 2:
                message.DepartPoker = reader.int32();
                break;
            case 3:
                message.DoubleBet = reader.int32();
                break;
            case 4:
                message.Stop = reader.int32();
                break;
            case 5:
                message.GiveUp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AskDo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AskDo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AskDo} AskDo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AskDo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AskDo message.
     * @function verify
     * @memberof AskDo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AskDo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.GetPoker != null && message.hasOwnProperty("GetPoker"))
            if (!$util.isInteger(message.GetPoker))
                return "GetPoker: integer expected";
        if (message.DepartPoker != null && message.hasOwnProperty("DepartPoker"))
            if (!$util.isInteger(message.DepartPoker))
                return "DepartPoker: integer expected";
        if (message.DoubleBet != null && message.hasOwnProperty("DoubleBet"))
            if (!$util.isInteger(message.DoubleBet))
                return "DoubleBet: integer expected";
        if (message.Stop != null && message.hasOwnProperty("Stop"))
            if (!$util.isInteger(message.Stop))
                return "Stop: integer expected";
        if (message.GiveUp != null && message.hasOwnProperty("GiveUp"))
            if (!$util.isInteger(message.GiveUp))
                return "GiveUp: integer expected";
        return null;
    };

    /**
     * Creates an AskDo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AskDo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AskDo} AskDo
     */
    AskDo.fromObject = function fromObject(object) {
        if (object instanceof $root.AskDo)
            return object;
        var message = new $root.AskDo();
        if (object.GetPoker != null)
            message.GetPoker = object.GetPoker | 0;
        if (object.DepartPoker != null)
            message.DepartPoker = object.DepartPoker | 0;
        if (object.DoubleBet != null)
            message.DoubleBet = object.DoubleBet | 0;
        if (object.Stop != null)
            message.Stop = object.Stop | 0;
        if (object.GiveUp != null)
            message.GiveUp = object.GiveUp | 0;
        return message;
    };

    /**
     * Creates a plain object from an AskDo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AskDo
     * @static
     * @param {AskDo} message AskDo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AskDo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.GetPoker = 0;
            object.DepartPoker = 0;
            object.DoubleBet = 0;
            object.Stop = 0;
            object.GiveUp = 0;
        }
        if (message.GetPoker != null && message.hasOwnProperty("GetPoker"))
            object.GetPoker = message.GetPoker;
        if (message.DepartPoker != null && message.hasOwnProperty("DepartPoker"))
            object.DepartPoker = message.DepartPoker;
        if (message.DoubleBet != null && message.hasOwnProperty("DoubleBet"))
            object.DoubleBet = message.DoubleBet;
        if (message.Stop != null && message.hasOwnProperty("Stop"))
            object.Stop = message.Stop;
        if (message.GiveUp != null && message.hasOwnProperty("GiveUp"))
            object.GiveUp = message.GiveUp;
        return object;
    };

    /**
     * Converts this AskDo to JSON.
     * @function toJSON
     * @memberof AskDo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AskDo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AskDo;
})();

$root.BuyInsure = (function() {

    /**
     * Properties of a BuyInsure.
     * @exports IBuyInsure
     * @interface IBuyInsure
     * @property {number|null} [Buy] BuyInsure Buy
     * @property {number|null} [NotBuy] BuyInsure NotBuy
     */

    /**
     * Constructs a new BuyInsure.
     * @exports BuyInsure
     * @classdesc Represents a BuyInsure.
     * @implements IBuyInsure
     * @constructor
     * @param {IBuyInsure=} [properties] Properties to set
     */
    function BuyInsure(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BuyInsure Buy.
     * @member {number} Buy
     * @memberof BuyInsure
     * @instance
     */
    BuyInsure.prototype.Buy = 0;

    /**
     * BuyInsure NotBuy.
     * @member {number} NotBuy
     * @memberof BuyInsure
     * @instance
     */
    BuyInsure.prototype.NotBuy = 0;

    /**
     * Creates a new BuyInsure instance using the specified properties.
     * @function create
     * @memberof BuyInsure
     * @static
     * @param {IBuyInsure=} [properties] Properties to set
     * @returns {BuyInsure} BuyInsure instance
     */
    BuyInsure.create = function create(properties) {
        return new BuyInsure(properties);
    };

    /**
     * Encodes the specified BuyInsure message. Does not implicitly {@link BuyInsure.verify|verify} messages.
     * @function encode
     * @memberof BuyInsure
     * @static
     * @param {IBuyInsure} message BuyInsure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuyInsure.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Buy != null && message.hasOwnProperty("Buy"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Buy);
        if (message.NotBuy != null && message.hasOwnProperty("NotBuy"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NotBuy);
        return writer;
    };

    /**
     * Encodes the specified BuyInsure message, length delimited. Does not implicitly {@link BuyInsure.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BuyInsure
     * @static
     * @param {IBuyInsure} message BuyInsure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BuyInsure.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BuyInsure message from the specified reader or buffer.
     * @function decode
     * @memberof BuyInsure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BuyInsure} BuyInsure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuyInsure.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BuyInsure();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Buy = reader.int32();
                break;
            case 2:
                message.NotBuy = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BuyInsure message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BuyInsure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BuyInsure} BuyInsure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BuyInsure.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BuyInsure message.
     * @function verify
     * @memberof BuyInsure
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BuyInsure.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Buy != null && message.hasOwnProperty("Buy"))
            if (!$util.isInteger(message.Buy))
                return "Buy: integer expected";
        if (message.NotBuy != null && message.hasOwnProperty("NotBuy"))
            if (!$util.isInteger(message.NotBuy))
                return "NotBuy: integer expected";
        return null;
    };

    /**
     * Creates a BuyInsure message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BuyInsure
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BuyInsure} BuyInsure
     */
    BuyInsure.fromObject = function fromObject(object) {
        if (object instanceof $root.BuyInsure)
            return object;
        var message = new $root.BuyInsure();
        if (object.Buy != null)
            message.Buy = object.Buy | 0;
        if (object.NotBuy != null)
            message.NotBuy = object.NotBuy | 0;
        return message;
    };

    /**
     * Creates a plain object from a BuyInsure message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BuyInsure
     * @static
     * @param {BuyInsure} message BuyInsure
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BuyInsure.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Buy = 0;
            object.NotBuy = 0;
        }
        if (message.Buy != null && message.hasOwnProperty("Buy"))
            object.Buy = message.Buy;
        if (message.NotBuy != null && message.hasOwnProperty("NotBuy"))
            object.NotBuy = message.NotBuy;
        return object;
    };

    /**
     * Converts this BuyInsure to JSON.
     * @function toJSON
     * @memberof BuyInsure
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BuyInsure.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BuyInsure;
})();

$root.DoubleBet = (function() {

    /**
     * Properties of a DoubleBet.
     * @exports IDoubleBet
     * @interface IDoubleBet
     * @property {number|null} [BetCardsIndex] DoubleBet BetCardsIndex
     * @property {number|Long|null} [CurrentBet] DoubleBet CurrentBet
     */

    /**
     * Constructs a new DoubleBet.
     * @exports DoubleBet
     * @classdesc Represents a DoubleBet.
     * @implements IDoubleBet
     * @constructor
     * @param {IDoubleBet=} [properties] Properties to set
     */
    function DoubleBet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DoubleBet BetCardsIndex.
     * @member {number} BetCardsIndex
     * @memberof DoubleBet
     * @instance
     */
    DoubleBet.prototype.BetCardsIndex = 0;

    /**
     * DoubleBet CurrentBet.
     * @member {number|Long} CurrentBet
     * @memberof DoubleBet
     * @instance
     */
    DoubleBet.prototype.CurrentBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new DoubleBet instance using the specified properties.
     * @function create
     * @memberof DoubleBet
     * @static
     * @param {IDoubleBet=} [properties] Properties to set
     * @returns {DoubleBet} DoubleBet instance
     */
    DoubleBet.create = function create(properties) {
        return new DoubleBet(properties);
    };

    /**
     * Encodes the specified DoubleBet message. Does not implicitly {@link DoubleBet.verify|verify} messages.
     * @function encode
     * @memberof DoubleBet
     * @static
     * @param {IDoubleBet} message DoubleBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DoubleBet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetCardsIndex);
        if (message.CurrentBet != null && message.hasOwnProperty("CurrentBet"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.CurrentBet);
        return writer;
    };

    /**
     * Encodes the specified DoubleBet message, length delimited. Does not implicitly {@link DoubleBet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DoubleBet
     * @static
     * @param {IDoubleBet} message DoubleBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DoubleBet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DoubleBet message from the specified reader or buffer.
     * @function decode
     * @memberof DoubleBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DoubleBet} DoubleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DoubleBet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DoubleBet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.BetCardsIndex = reader.int32();
                break;
            case 2:
                message.CurrentBet = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DoubleBet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DoubleBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DoubleBet} DoubleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DoubleBet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DoubleBet message.
     * @function verify
     * @memberof DoubleBet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DoubleBet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            if (!$util.isInteger(message.BetCardsIndex))
                return "BetCardsIndex: integer expected";
        if (message.CurrentBet != null && message.hasOwnProperty("CurrentBet"))
            if (!$util.isInteger(message.CurrentBet) && !(message.CurrentBet && $util.isInteger(message.CurrentBet.low) && $util.isInteger(message.CurrentBet.high)))
                return "CurrentBet: integer|Long expected";
        return null;
    };

    /**
     * Creates a DoubleBet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DoubleBet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DoubleBet} DoubleBet
     */
    DoubleBet.fromObject = function fromObject(object) {
        if (object instanceof $root.DoubleBet)
            return object;
        var message = new $root.DoubleBet();
        if (object.BetCardsIndex != null)
            message.BetCardsIndex = object.BetCardsIndex | 0;
        if (object.CurrentBet != null)
            if ($util.Long)
                (message.CurrentBet = $util.Long.fromValue(object.CurrentBet)).unsigned = false;
            else if (typeof object.CurrentBet === "string")
                message.CurrentBet = parseInt(object.CurrentBet, 10);
            else if (typeof object.CurrentBet === "number")
                message.CurrentBet = object.CurrentBet;
            else if (typeof object.CurrentBet === "object")
                message.CurrentBet = new $util.LongBits(object.CurrentBet.low >>> 0, object.CurrentBet.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a DoubleBet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DoubleBet
     * @static
     * @param {DoubleBet} message DoubleBet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DoubleBet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.BetCardsIndex = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.CurrentBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.CurrentBet = options.longs === String ? "0" : 0;
        }
        if (message.BetCardsIndex != null && message.hasOwnProperty("BetCardsIndex"))
            object.BetCardsIndex = message.BetCardsIndex;
        if (message.CurrentBet != null && message.hasOwnProperty("CurrentBet"))
            if (typeof message.CurrentBet === "number")
                object.CurrentBet = options.longs === String ? String(message.CurrentBet) : message.CurrentBet;
            else
                object.CurrentBet = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentBet) : options.longs === Number ? new $util.LongBits(message.CurrentBet.low >>> 0, message.CurrentBet.high >>> 0).toNumber() : message.CurrentBet;
        return object;
    };

    /**
     * Converts this DoubleBet to JSON.
     * @function toJSON
     * @memberof DoubleBet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DoubleBet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DoubleBet;
})();

module.exports = $root;
