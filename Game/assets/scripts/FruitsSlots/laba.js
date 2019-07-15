/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * MsgIDC2S enum.
 * @exports MsgIDC2S
 * @enum {string}
 * @property {number} STARTID=0 STARTID value
 * @property {number} AskSence=1 AskSence value
 * @property {number} Bet=2 Bet value
 * @property {number} XiaMaLi=3 XiaMaLi value
 */
$root.MsgIDC2S = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STARTID"] = 0;
    values[valuesById[1] = "AskSence"] = 1;
    values[valuesById[2] = "Bet"] = 2;
    values[valuesById[3] = "XiaMaLi"] = 3;
    return values;
})();

/**
 * ReMsgIDS2C enum.
 * @exports ReMsgIDS2C
 * @enum {string}
 * @property {number} RESTARTID=0 RESTARTID value
 * @property {number} SenceID=1 SenceID value
 * @property {number} BetRet=2 BetRet value
 * @property {number} BetFailID=3 BetFailID value
 * @property {number} XiaMaLiRet=4 XiaMaLiRet value
 * @property {number} JackpotGold=5 JackpotGold value
 */
$root.ReMsgIDS2C = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RESTARTID"] = 0;
    values[valuesById[1] = "SenceID"] = 1;
    values[valuesById[2] = "BetRet"] = 2;
    values[valuesById[3] = "BetFailID"] = 3;
    values[valuesById[4] = "XiaMaLiRet"] = 4;
    values[valuesById[5] = "JackpotGold"] = 5;
    return values;
})();

$root.UserBet = (function() {

    /**
     * Properties of a UserBet.
     * @exports IUserBet
     * @interface IUserBet
     * @property {number|null} [BetMoney] UserBet BetMoney
     */

    /**
     * Constructs a new UserBet.
     * @exports UserBet
     * @classdesc Represents a UserBet.
     * @implements IUserBet
     * @constructor
     * @param {IUserBet=} [properties] Properties to set
     */
    function UserBet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserBet BetMoney.
     * @member {number} BetMoney
     * @memberof UserBet
     * @instance
     */
    UserBet.prototype.BetMoney = 0;

    /**
     * Creates a new UserBet instance using the specified properties.
     * @function create
     * @memberof UserBet
     * @static
     * @param {IUserBet=} [properties] Properties to set
     * @returns {UserBet} UserBet instance
     */
    UserBet.create = function create(properties) {
        return new UserBet(properties);
    };

    /**
     * Encodes the specified UserBet message. Does not implicitly {@link UserBet.verify|verify} messages.
     * @function encode
     * @memberof UserBet
     * @static
     * @param {IUserBet} message UserBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserBet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetMoney);
        return writer;
    };

    /**
     * Encodes the specified UserBet message, length delimited. Does not implicitly {@link UserBet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserBet
     * @static
     * @param {IUserBet} message UserBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserBet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserBet message from the specified reader or buffer.
     * @function decode
     * @memberof UserBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserBet} UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserBet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserBet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.BetMoney = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserBet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserBet} UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserBet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserBet message.
     * @function verify
     * @memberof UserBet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserBet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
            if (!$util.isInteger(message.BetMoney))
                return "BetMoney: integer expected";
        return null;
    };

    /**
     * Creates a UserBet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserBet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserBet} UserBet
     */
    UserBet.fromObject = function fromObject(object) {
        if (object instanceof $root.UserBet)
            return object;
        var message = new $root.UserBet();
        if (object.BetMoney != null)
            message.BetMoney = object.BetMoney | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserBet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserBet
     * @static
     * @param {UserBet} message UserBet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserBet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.BetMoney = 0;
        if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
            object.BetMoney = message.BetMoney;
        return object;
    };

    /**
     * Converts this UserBet to JSON.
     * @function toJSON
     * @memberof UserBet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserBet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserBet;
})();

$root.BetFail = (function() {

    /**
     * Properties of a BetFail.
     * @exports IBetFail
     * @interface IBetFail
     * @property {number|null} [FailID] BetFail FailID
     * @property {string|null} [Reson] BetFail Reson
     */

    /**
     * Constructs a new BetFail.
     * @exports BetFail
     * @classdesc Represents a BetFail.
     * @implements IBetFail
     * @constructor
     * @param {IBetFail=} [properties] Properties to set
     */
    function BetFail(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BetFail FailID.
     * @member {number} FailID
     * @memberof BetFail
     * @instance
     */
    BetFail.prototype.FailID = 0;

    /**
     * BetFail Reson.
     * @member {string} Reson
     * @memberof BetFail
     * @instance
     */
    BetFail.prototype.Reson = "";

    /**
     * Creates a new BetFail instance using the specified properties.
     * @function create
     * @memberof BetFail
     * @static
     * @param {IBetFail=} [properties] Properties to set
     * @returns {BetFail} BetFail instance
     */
    BetFail.create = function create(properties) {
        return new BetFail(properties);
    };

    /**
     * Encodes the specified BetFail message. Does not implicitly {@link BetFail.verify|verify} messages.
     * @function encode
     * @memberof BetFail
     * @static
     * @param {IBetFail} message BetFail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetFail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.FailID != null && message.hasOwnProperty("FailID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FailID);
        if (message.Reson != null && message.hasOwnProperty("Reson"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Reson);
        return writer;
    };

    /**
     * Encodes the specified BetFail message, length delimited. Does not implicitly {@link BetFail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BetFail
     * @static
     * @param {IBetFail} message BetFail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetFail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BetFail message from the specified reader or buffer.
     * @function decode
     * @memberof BetFail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BetFail} BetFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetFail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BetFail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.FailID = reader.int32();
                break;
            case 2:
                message.Reson = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BetFail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BetFail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BetFail} BetFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetFail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BetFail message.
     * @function verify
     * @memberof BetFail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BetFail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.FailID != null && message.hasOwnProperty("FailID"))
            if (!$util.isInteger(message.FailID))
                return "FailID: integer expected";
        if (message.Reson != null && message.hasOwnProperty("Reson"))
            if (!$util.isString(message.Reson))
                return "Reson: string expected";
        return null;
    };

    /**
     * Creates a BetFail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BetFail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BetFail} BetFail
     */
    BetFail.fromObject = function fromObject(object) {
        if (object instanceof $root.BetFail)
            return object;
        var message = new $root.BetFail();
        if (object.FailID != null)
            message.FailID = object.FailID | 0;
        if (object.Reson != null)
            message.Reson = String(object.Reson);
        return message;
    };

    /**
     * Creates a plain object from a BetFail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BetFail
     * @static
     * @param {BetFail} message BetFail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BetFail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.FailID = 0;
            object.Reson = "";
        }
        if (message.FailID != null && message.hasOwnProperty("FailID"))
            object.FailID = message.FailID;
        if (message.Reson != null && message.hasOwnProperty("Reson"))
            object.Reson = message.Reson;
        return object;
    };

    /**
     * Converts this BetFail to JSON.
     * @function toJSON
     * @memberof BetFail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BetFail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BetFail;
})();

$root.LineInfo = (function() {

    /**
     * Properties of a LineInfo.
     * @exports ILineInfo
     * @interface ILineInfo
     * @property {number|null} [Index] LineInfo Index
     * @property {number|null} [Count] LineInfo Count
     * @property {number|Long|null} [Gold] LineInfo Gold
     */

    /**
     * Constructs a new LineInfo.
     * @exports LineInfo
     * @classdesc Represents a LineInfo.
     * @implements ILineInfo
     * @constructor
     * @param {ILineInfo=} [properties] Properties to set
     */
    function LineInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LineInfo Index.
     * @member {number} Index
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.Index = 0;

    /**
     * LineInfo Count.
     * @member {number} Count
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.Count = 0;

    /**
     * LineInfo Gold.
     * @member {number|Long} Gold
     * @memberof LineInfo
     * @instance
     */
    LineInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new LineInfo instance using the specified properties.
     * @function create
     * @memberof LineInfo
     * @static
     * @param {ILineInfo=} [properties] Properties to set
     * @returns {LineInfo} LineInfo instance
     */
    LineInfo.create = function create(properties) {
        return new LineInfo(properties);
    };

    /**
     * Encodes the specified LineInfo message. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @function encode
     * @memberof LineInfo
     * @static
     * @param {ILineInfo} message LineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LineInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Index != null && message.hasOwnProperty("Index"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
        if (message.Count != null && message.hasOwnProperty("Count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Gold);
        return writer;
    };

    /**
     * Encodes the specified LineInfo message, length delimited. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LineInfo
     * @static
     * @param {ILineInfo} message LineInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LineInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LineInfo message from the specified reader or buffer.
     * @function decode
     * @memberof LineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LineInfo} LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LineInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LineInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Index = reader.int32();
                break;
            case 2:
                message.Count = reader.int32();
                break;
            case 3:
                message.Gold = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LineInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LineInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LineInfo} LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LineInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LineInfo message.
     * @function verify
     * @memberof LineInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LineInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Index != null && message.hasOwnProperty("Index"))
            if (!$util.isInteger(message.Index))
                return "Index: integer expected";
        if (message.Count != null && message.hasOwnProperty("Count"))
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                return "Gold: integer|Long expected";
        return null;
    };

    /**
     * Creates a LineInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LineInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LineInfo} LineInfo
     */
    LineInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.LineInfo)
            return object;
        var message = new $root.LineInfo();
        if (object.Index != null)
            message.Index = object.Index | 0;
        if (object.Count != null)
            message.Count = object.Count | 0;
        if (object.Gold != null)
            if ($util.Long)
                (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
            else if (typeof object.Gold === "string")
                message.Gold = parseInt(object.Gold, 10);
            else if (typeof object.Gold === "number")
                message.Gold = object.Gold;
            else if (typeof object.Gold === "object")
                message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a LineInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LineInfo
     * @static
     * @param {LineInfo} message LineInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LineInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Index = 0;
            object.Count = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Gold = options.longs === String ? "0" : 0;
        }
        if (message.Index != null && message.hasOwnProperty("Index"))
            object.Index = message.Index;
        if (message.Count != null && message.hasOwnProperty("Count"))
            object.Count = message.Count;
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (typeof message.Gold === "number")
                object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
            else
                object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
        return object;
    };

    /**
     * Converts this LineInfo to JSON.
     * @function toJSON
     * @memberof LineInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LineInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LineInfo;
})();

$root.BetRes1 = (function() {

    /**
     * Properties of a BetRes.
     * @exports IBetRes
     * @interface IBetRes
     * @property {number|Long|null} [UserGold] BetRes UserGold
     * @property {Array.<number>|null} [IconArr] BetRes IconArr
     * @property {number|null} [Odds] BetRes Odds
     * @property {number|Long|null} [Gold] BetRes Gold
     * @property {Array.<ILineInfo>|null} [Line] BetRes Line
     * @property {boolean|null} [bEnterFree] BetRes bEnterFree
     * @property {number|null} [FreeGames] BetRes FreeGames
     * @property {number|null} [XiaoMaLi] BetRes XiaoMaLi
     * @property {number|Long|null} [Jackpot] BetRes Jackpot
     * @property {number|null} [Cheat] BetRes Cheat
     * @property {number|Long|null} [BloodPool] BetRes BloodPool
     */

    /**
     * Constructs a new BetRes.
     * @exports BetRes
     * @classdesc Represents a BetRes.
     * @implements IBetRes
     * @constructor
     * @param {IBetRes=} [properties] Properties to set
     */
    function BetRes(properties) {
        this.IconArr = [];
        this.Line = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BetRes UserGold.
     * @member {number|Long} UserGold
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.UserGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BetRes IconArr.
     * @member {Array.<number>} IconArr
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.IconArr = $util.emptyArray;

    /**
     * BetRes Odds.
     * @member {number} Odds
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.Odds = 0;

    /**
     * BetRes Gold.
     * @member {number|Long} Gold
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BetRes Line.
     * @member {Array.<ILineInfo>} Line
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.Line = $util.emptyArray;

    /**
     * BetRes bEnterFree.
     * @member {boolean} bEnterFree
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.bEnterFree = false;

    /**
     * BetRes FreeGames.
     * @member {number} FreeGames
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.FreeGames = 0;

    /**
     * BetRes XiaoMaLi.
     * @member {number} XiaoMaLi
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.XiaoMaLi = 0;

    /**
     * BetRes Jackpot.
     * @member {number|Long} Jackpot
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BetRes Cheat.
     * @member {number} Cheat
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.Cheat = 0;

    /**
     * BetRes BloodPool.
     * @member {number|Long} BloodPool
     * @memberof BetRes
     * @instance
     */
    BetRes.prototype.BloodPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BetRes instance using the specified properties.
     * @function create
     * @memberof BetRes
     * @static
     * @param {IBetRes=} [properties] Properties to set
     * @returns {BetRes} BetRes instance
     */
    BetRes.create = function create(properties) {
        return new BetRes(properties);
    };

    /**
     * Encodes the specified BetRes message. Does not implicitly {@link BetRes.verify|verify} messages.
     * @function encode
     * @memberof BetRes
     * @static
     * @param {IBetRes} message BetRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.UserGold != null && message.hasOwnProperty("UserGold"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserGold);
        if (message.IconArr != null && message.IconArr.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.IconArr.length; ++i)
                writer.int32(message.IconArr[i]);
            writer.ldelim();
        }
        if (message.Odds != null && message.hasOwnProperty("Odds"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Odds);
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Gold);
        if (message.Line != null && message.Line.length)
            for (var i = 0; i < message.Line.length; ++i)
                $root.LineInfo.encode(message.Line[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.bEnterFree != null && message.hasOwnProperty("bEnterFree"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.bEnterFree);
        if (message.FreeGames != null && message.hasOwnProperty("FreeGames"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.FreeGames);
        if (message.XiaoMaLi != null && message.hasOwnProperty("XiaoMaLi"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.XiaoMaLi);
        if (message.Jackpot != null && message.hasOwnProperty("Jackpot"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.Jackpot);
        if (message.Cheat != null && message.hasOwnProperty("Cheat"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Cheat);
        if (message.BloodPool != null && message.hasOwnProperty("BloodPool"))
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.BloodPool);
        return writer;
    };

    /**
     * Encodes the specified BetRes message, length delimited. Does not implicitly {@link BetRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BetRes
     * @static
     * @param {IBetRes} message BetRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BetRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BetRes message from the specified reader or buffer.
     * @function decode
     * @memberof BetRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BetRes} BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BetRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.UserGold = reader.int64();
                break;
            case 2:
                if (!(message.IconArr && message.IconArr.length))
                    message.IconArr = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.IconArr.push(reader.int32());
                } else
                    message.IconArr.push(reader.int32());
                break;
            case 3:
                message.Odds = reader.int32();
                break;
            case 4:
                message.Gold = reader.int64();
                break;
            case 5:
                if (!(message.Line && message.Line.length))
                    message.Line = [];
                message.Line.push($root.LineInfo.decode(reader, reader.uint32()));
                break;
            case 6:
                message.bEnterFree = reader.bool();
                break;
            case 7:
                message.FreeGames = reader.int32();
                break;
            case 8:
                message.XiaoMaLi = reader.int32();
                break;
            case 9:
                message.Jackpot = reader.int64();
                break;
            case 10:
                message.Cheat = reader.int32();
                break;
            case 11:
                message.BloodPool = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BetRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BetRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BetRes} BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BetRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BetRes message.
     * @function verify
     * @memberof BetRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BetRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.UserGold != null && message.hasOwnProperty("UserGold"))
            if (!$util.isInteger(message.UserGold) && !(message.UserGold && $util.isInteger(message.UserGold.low) && $util.isInteger(message.UserGold.high)))
                return "UserGold: integer|Long expected";
        if (message.IconArr != null && message.hasOwnProperty("IconArr")) {
            if (!Array.isArray(message.IconArr))
                return "IconArr: array expected";
            for (var i = 0; i < message.IconArr.length; ++i)
                if (!$util.isInteger(message.IconArr[i]))
                    return "IconArr: integer[] expected";
        }
        if (message.Odds != null && message.hasOwnProperty("Odds"))
            if (!$util.isInteger(message.Odds))
                return "Odds: integer expected";
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                return "Gold: integer|Long expected";
        if (message.Line != null && message.hasOwnProperty("Line")) {
            if (!Array.isArray(message.Line))
                return "Line: array expected";
            for (var i = 0; i < message.Line.length; ++i) {
                var error = $root.LineInfo.verify(message.Line[i]);
                if (error)
                    return "Line." + error;
            }
        }
        if (message.bEnterFree != null && message.hasOwnProperty("bEnterFree"))
            if (typeof message.bEnterFree !== "boolean")
                return "bEnterFree: boolean expected";
        if (message.FreeGames != null && message.hasOwnProperty("FreeGames"))
            if (!$util.isInteger(message.FreeGames))
                return "FreeGames: integer expected";
        if (message.XiaoMaLi != null && message.hasOwnProperty("XiaoMaLi"))
            if (!$util.isInteger(message.XiaoMaLi))
                return "XiaoMaLi: integer expected";
        if (message.Jackpot != null && message.hasOwnProperty("Jackpot"))
            if (!$util.isInteger(message.Jackpot) && !(message.Jackpot && $util.isInteger(message.Jackpot.low) && $util.isInteger(message.Jackpot.high)))
                return "Jackpot: integer|Long expected";
        if (message.Cheat != null && message.hasOwnProperty("Cheat"))
            if (!$util.isInteger(message.Cheat))
                return "Cheat: integer expected";
        if (message.BloodPool != null && message.hasOwnProperty("BloodPool"))
            if (!$util.isInteger(message.BloodPool) && !(message.BloodPool && $util.isInteger(message.BloodPool.low) && $util.isInteger(message.BloodPool.high)))
                return "BloodPool: integer|Long expected";
        return null;
    };

    /**
     * Creates a BetRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BetRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BetRes} BetRes
     */
    BetRes.fromObject = function fromObject(object) {
        if (object instanceof $root.BetRes)
            return object;
        var message = new $root.BetRes();
        if (object.UserGold != null)
            if ($util.Long)
                (message.UserGold = $util.Long.fromValue(object.UserGold)).unsigned = false;
            else if (typeof object.UserGold === "string")
                message.UserGold = parseInt(object.UserGold, 10);
            else if (typeof object.UserGold === "number")
                message.UserGold = object.UserGold;
            else if (typeof object.UserGold === "object")
                message.UserGold = new $util.LongBits(object.UserGold.low >>> 0, object.UserGold.high >>> 0).toNumber();
        if (object.IconArr) {
            if (!Array.isArray(object.IconArr))
                throw TypeError(".BetRes.IconArr: array expected");
            message.IconArr = [];
            for (var i = 0; i < object.IconArr.length; ++i)
                message.IconArr[i] = object.IconArr[i] | 0;
        }
        if (object.Odds != null)
            message.Odds = object.Odds | 0;
        if (object.Gold != null)
            if ($util.Long)
                (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
            else if (typeof object.Gold === "string")
                message.Gold = parseInt(object.Gold, 10);
            else if (typeof object.Gold === "number")
                message.Gold = object.Gold;
            else if (typeof object.Gold === "object")
                message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
        if (object.Line) {
            if (!Array.isArray(object.Line))
                throw TypeError(".BetRes.Line: array expected");
            message.Line = [];
            for (var i = 0; i < object.Line.length; ++i) {
                if (typeof object.Line[i] !== "object")
                    throw TypeError(".BetRes.Line: object expected");
                message.Line[i] = $root.LineInfo.fromObject(object.Line[i]);
            }
        }
        if (object.bEnterFree != null)
            message.bEnterFree = Boolean(object.bEnterFree);
        if (object.FreeGames != null)
            message.FreeGames = object.FreeGames | 0;
        if (object.XiaoMaLi != null)
            message.XiaoMaLi = object.XiaoMaLi | 0;
        if (object.Jackpot != null)
            if ($util.Long)
                (message.Jackpot = $util.Long.fromValue(object.Jackpot)).unsigned = false;
            else if (typeof object.Jackpot === "string")
                message.Jackpot = parseInt(object.Jackpot, 10);
            else if (typeof object.Jackpot === "number")
                message.Jackpot = object.Jackpot;
            else if (typeof object.Jackpot === "object")
                message.Jackpot = new $util.LongBits(object.Jackpot.low >>> 0, object.Jackpot.high >>> 0).toNumber();
        if (object.Cheat != null)
            message.Cheat = object.Cheat | 0;
        if (object.BloodPool != null)
            if ($util.Long)
                (message.BloodPool = $util.Long.fromValue(object.BloodPool)).unsigned = false;
            else if (typeof object.BloodPool === "string")
                message.BloodPool = parseInt(object.BloodPool, 10);
            else if (typeof object.BloodPool === "number")
                message.BloodPool = object.BloodPool;
            else if (typeof object.BloodPool === "object")
                message.BloodPool = new $util.LongBits(object.BloodPool.low >>> 0, object.BloodPool.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BetRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BetRes
     * @static
     * @param {BetRes} message BetRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BetRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.IconArr = [];
            object.Line = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UserGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.UserGold = options.longs === String ? "0" : 0;
            object.Odds = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Gold = options.longs === String ? "0" : 0;
            object.bEnterFree = false;
            object.FreeGames = 0;
            object.XiaoMaLi = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Jackpot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Jackpot = options.longs === String ? "0" : 0;
            object.Cheat = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BloodPool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BloodPool = options.longs === String ? "0" : 0;
        }
        if (message.UserGold != null && message.hasOwnProperty("UserGold"))
            if (typeof message.UserGold === "number")
                object.UserGold = options.longs === String ? String(message.UserGold) : message.UserGold;
            else
                object.UserGold = options.longs === String ? $util.Long.prototype.toString.call(message.UserGold) : options.longs === Number ? new $util.LongBits(message.UserGold.low >>> 0, message.UserGold.high >>> 0).toNumber() : message.UserGold;
        if (message.IconArr && message.IconArr.length) {
            object.IconArr = [];
            for (var j = 0; j < message.IconArr.length; ++j)
                object.IconArr[j] = message.IconArr[j];
        }
        if (message.Odds != null && message.hasOwnProperty("Odds"))
            object.Odds = message.Odds;
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (typeof message.Gold === "number")
                object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
            else
                object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
        if (message.Line && message.Line.length) {
            object.Line = [];
            for (var j = 0; j < message.Line.length; ++j)
                object.Line[j] = $root.LineInfo.toObject(message.Line[j], options);
        }
        if (message.bEnterFree != null && message.hasOwnProperty("bEnterFree"))
            object.bEnterFree = message.bEnterFree;
        if (message.FreeGames != null && message.hasOwnProperty("FreeGames"))
            object.FreeGames = message.FreeGames;
        if (message.XiaoMaLi != null && message.hasOwnProperty("XiaoMaLi"))
            object.XiaoMaLi = message.XiaoMaLi;
        if (message.Jackpot != null && message.hasOwnProperty("Jackpot"))
            if (typeof message.Jackpot === "number")
                object.Jackpot = options.longs === String ? String(message.Jackpot) : message.Jackpot;
            else
                object.Jackpot = options.longs === String ? $util.Long.prototype.toString.call(message.Jackpot) : options.longs === Number ? new $util.LongBits(message.Jackpot.low >>> 0, message.Jackpot.high >>> 0).toNumber() : message.Jackpot;
        if (message.Cheat != null && message.hasOwnProperty("Cheat"))
            object.Cheat = message.Cheat;
        if (message.BloodPool != null && message.hasOwnProperty("BloodPool"))
            if (typeof message.BloodPool === "number")
                object.BloodPool = options.longs === String ? String(message.BloodPool) : message.BloodPool;
            else
                object.BloodPool = options.longs === String ? $util.Long.prototype.toString.call(message.BloodPool) : options.longs === Number ? new $util.LongBits(message.BloodPool.low >>> 0, message.BloodPool.high >>> 0).toNumber() : message.BloodPool;
        return object;
    };

    /**
     * Converts this BetRes to JSON.
     * @function toJSON
     * @memberof BetRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BetRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BetRes;
})();

$root.XiaoMaLiRes = (function() {

    /**
     * Properties of a XiaoMaLiRes.
     * @exports IXiaoMaLiRes
     * @interface IXiaoMaLiRes
     * @property {number|null} [Times] XiaoMaLiRes Times
     * @property {number|null} [OutIndex] XiaoMaLiRes OutIndex
     * @property {Array.<number>|null} [InIcon] XiaoMaLiRes InIcon
     * @property {number|Long|null} [Gold] XiaoMaLiRes Gold
     * @property {boolean|null} [Exit] XiaoMaLiRes Exit
     */

    /**
     * Constructs a new XiaoMaLiRes.
     * @exports XiaoMaLiRes
     * @classdesc Represents a XiaoMaLiRes.
     * @implements IXiaoMaLiRes
     * @constructor
     * @param {IXiaoMaLiRes=} [properties] Properties to set
     */
    function XiaoMaLiRes(properties) {
        this.InIcon = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XiaoMaLiRes Times.
     * @member {number} Times
     * @memberof XiaoMaLiRes
     * @instance
     */
    XiaoMaLiRes.prototype.Times = 0;

    /**
     * XiaoMaLiRes OutIndex.
     * @member {number} OutIndex
     * @memberof XiaoMaLiRes
     * @instance
     */
    XiaoMaLiRes.prototype.OutIndex = 0;

    /**
     * XiaoMaLiRes InIcon.
     * @member {Array.<number>} InIcon
     * @memberof XiaoMaLiRes
     * @instance
     */
    XiaoMaLiRes.prototype.InIcon = $util.emptyArray;

    /**
     * XiaoMaLiRes Gold.
     * @member {number|Long} Gold
     * @memberof XiaoMaLiRes
     * @instance
     */
    XiaoMaLiRes.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XiaoMaLiRes Exit.
     * @member {boolean} Exit
     * @memberof XiaoMaLiRes
     * @instance
     */
    XiaoMaLiRes.prototype.Exit = false;

    /**
     * Creates a new XiaoMaLiRes instance using the specified properties.
     * @function create
     * @memberof XiaoMaLiRes
     * @static
     * @param {IXiaoMaLiRes=} [properties] Properties to set
     * @returns {XiaoMaLiRes} XiaoMaLiRes instance
     */
    XiaoMaLiRes.create = function create(properties) {
        return new XiaoMaLiRes(properties);
    };

    /**
     * Encodes the specified XiaoMaLiRes message. Does not implicitly {@link XiaoMaLiRes.verify|verify} messages.
     * @function encode
     * @memberof XiaoMaLiRes
     * @static
     * @param {IXiaoMaLiRes} message XiaoMaLiRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XiaoMaLiRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Times != null && message.hasOwnProperty("Times"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Times);
        if (message.OutIndex != null && message.hasOwnProperty("OutIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.OutIndex);
        if (message.InIcon != null && message.InIcon.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.InIcon.length; ++i)
                writer.int32(message.InIcon[i]);
            writer.ldelim();
        }
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Gold);
        if (message.Exit != null && message.hasOwnProperty("Exit"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Exit);
        return writer;
    };

    /**
     * Encodes the specified XiaoMaLiRes message, length delimited. Does not implicitly {@link XiaoMaLiRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XiaoMaLiRes
     * @static
     * @param {IXiaoMaLiRes} message XiaoMaLiRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XiaoMaLiRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XiaoMaLiRes message from the specified reader or buffer.
     * @function decode
     * @memberof XiaoMaLiRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XiaoMaLiRes} XiaoMaLiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XiaoMaLiRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XiaoMaLiRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Times = reader.int32();
                break;
            case 2:
                message.OutIndex = reader.int32();
                break;
            case 3:
                if (!(message.InIcon && message.InIcon.length))
                    message.InIcon = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.InIcon.push(reader.int32());
                } else
                    message.InIcon.push(reader.int32());
                break;
            case 4:
                message.Gold = reader.int64();
                break;
            case 5:
                message.Exit = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XiaoMaLiRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XiaoMaLiRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XiaoMaLiRes} XiaoMaLiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XiaoMaLiRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XiaoMaLiRes message.
     * @function verify
     * @memberof XiaoMaLiRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XiaoMaLiRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Times != null && message.hasOwnProperty("Times"))
            if (!$util.isInteger(message.Times))
                return "Times: integer expected";
        if (message.OutIndex != null && message.hasOwnProperty("OutIndex"))
            if (!$util.isInteger(message.OutIndex))
                return "OutIndex: integer expected";
        if (message.InIcon != null && message.hasOwnProperty("InIcon")) {
            if (!Array.isArray(message.InIcon))
                return "InIcon: array expected";
            for (var i = 0; i < message.InIcon.length; ++i)
                if (!$util.isInteger(message.InIcon[i]))
                    return "InIcon: integer[] expected";
        }
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                return "Gold: integer|Long expected";
        if (message.Exit != null && message.hasOwnProperty("Exit"))
            if (typeof message.Exit !== "boolean")
                return "Exit: boolean expected";
        return null;
    };

    /**
     * Creates a XiaoMaLiRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XiaoMaLiRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XiaoMaLiRes} XiaoMaLiRes
     */
    XiaoMaLiRes.fromObject = function fromObject(object) {
        if (object instanceof $root.XiaoMaLiRes)
            return object;
        var message = new $root.XiaoMaLiRes();
        if (object.Times != null)
            message.Times = object.Times | 0;
        if (object.OutIndex != null)
            message.OutIndex = object.OutIndex | 0;
        if (object.InIcon) {
            if (!Array.isArray(object.InIcon))
                throw TypeError(".XiaoMaLiRes.InIcon: array expected");
            message.InIcon = [];
            for (var i = 0; i < object.InIcon.length; ++i)
                message.InIcon[i] = object.InIcon[i] | 0;
        }
        if (object.Gold != null)
            if ($util.Long)
                (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
            else if (typeof object.Gold === "string")
                message.Gold = parseInt(object.Gold, 10);
            else if (typeof object.Gold === "number")
                message.Gold = object.Gold;
            else if (typeof object.Gold === "object")
                message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
        if (object.Exit != null)
            message.Exit = Boolean(object.Exit);
        return message;
    };

    /**
     * Creates a plain object from a XiaoMaLiRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XiaoMaLiRes
     * @static
     * @param {XiaoMaLiRes} message XiaoMaLiRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XiaoMaLiRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.InIcon = [];
        if (options.defaults) {
            object.Times = 0;
            object.OutIndex = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Gold = options.longs === String ? "0" : 0;
            object.Exit = false;
        }
        if (message.Times != null && message.hasOwnProperty("Times"))
            object.Times = message.Times;
        if (message.OutIndex != null && message.hasOwnProperty("OutIndex"))
            object.OutIndex = message.OutIndex;
        if (message.InIcon && message.InIcon.length) {
            object.InIcon = [];
            for (var j = 0; j < message.InIcon.length; ++j)
                object.InIcon[j] = message.InIcon[j];
        }
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (typeof message.Gold === "number")
                object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
            else
                object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
        if (message.Exit != null && message.hasOwnProperty("Exit"))
            object.Exit = message.Exit;
        return object;
    };

    /**
     * Converts this XiaoMaLiRes to JSON.
     * @function toJSON
     * @memberof XiaoMaLiRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XiaoMaLiRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XiaoMaLiRes;
})();

$root.Sence = (function() {

    /**
     * Properties of a Sence.
     * @exports ISence
     * @interface ISence
     * @property {number|Long|null} [Gold] Sence Gold
     * @property {Array.<number>|null} [BetValue] Sence BetValue
     * @property {number|Long|null} [JackpotGold] Sence JackpotGold
     */

    /**
     * Constructs a new Sence.
     * @exports Sence
     * @classdesc Represents a Sence.
     * @implements ISence
     * @constructor
     * @param {ISence=} [properties] Properties to set
     */
    function Sence(properties) {
        this.BetValue = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Sence Gold.
     * @member {number|Long} Gold
     * @memberof Sence
     * @instance
     */
    Sence.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Sence BetValue.
     * @member {Array.<number>} BetValue
     * @memberof Sence
     * @instance
     */
    Sence.prototype.BetValue = $util.emptyArray;

    /**
     * Sence JackpotGold.
     * @member {number|Long} JackpotGold
     * @memberof Sence
     * @instance
     */
    Sence.prototype.JackpotGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Sence instance using the specified properties.
     * @function create
     * @memberof Sence
     * @static
     * @param {ISence=} [properties] Properties to set
     * @returns {Sence} Sence instance
     */
    Sence.create = function create(properties) {
        return new Sence(properties);
    };

    /**
     * Encodes the specified Sence message. Does not implicitly {@link Sence.verify|verify} messages.
     * @function encode
     * @memberof Sence
     * @static
     * @param {ISence} message Sence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sence.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Gold);
        if (message.BetValue != null && message.BetValue.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.BetValue.length; ++i)
                writer.int32(message.BetValue[i]);
            writer.ldelim();
        }
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.JackpotGold);
        return writer;
    };

    /**
     * Encodes the specified Sence message, length delimited. Does not implicitly {@link Sence.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Sence
     * @static
     * @param {ISence} message Sence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sence.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Sence message from the specified reader or buffer.
     * @function decode
     * @memberof Sence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Sence} Sence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sence.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Gold = reader.int64();
                break;
            case 2:
                if (!(message.BetValue && message.BetValue.length))
                    message.BetValue = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.BetValue.push(reader.int32());
                } else
                    message.BetValue.push(reader.int32());
                break;
            case 3:
                message.JackpotGold = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Sence message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Sence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Sence} Sence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sence.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Sence message.
     * @function verify
     * @memberof Sence
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Sence.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                return "Gold: integer|Long expected";
        if (message.BetValue != null && message.hasOwnProperty("BetValue")) {
            if (!Array.isArray(message.BetValue))
                return "BetValue: array expected";
            for (var i = 0; i < message.BetValue.length; ++i)
                if (!$util.isInteger(message.BetValue[i]))
                    return "BetValue: integer[] expected";
        }
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            if (!$util.isInteger(message.JackpotGold) && !(message.JackpotGold && $util.isInteger(message.JackpotGold.low) && $util.isInteger(message.JackpotGold.high)))
                return "JackpotGold: integer|Long expected";
        return null;
    };

    /**
     * Creates a Sence message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Sence
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Sence} Sence
     */
    Sence.fromObject = function fromObject(object) {
        if (object instanceof $root.Sence)
            return object;
        var message = new $root.Sence();
        if (object.Gold != null)
            if ($util.Long)
                (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
            else if (typeof object.Gold === "string")
                message.Gold = parseInt(object.Gold, 10);
            else if (typeof object.Gold === "number")
                message.Gold = object.Gold;
            else if (typeof object.Gold === "object")
                message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
        if (object.BetValue) {
            if (!Array.isArray(object.BetValue))
                throw TypeError(".Sence.BetValue: array expected");
            message.BetValue = [];
            for (var i = 0; i < object.BetValue.length; ++i)
                message.BetValue[i] = object.BetValue[i] | 0;
        }
        if (object.JackpotGold != null)
            if ($util.Long)
                (message.JackpotGold = $util.Long.fromValue(object.JackpotGold)).unsigned = false;
            else if (typeof object.JackpotGold === "string")
                message.JackpotGold = parseInt(object.JackpotGold, 10);
            else if (typeof object.JackpotGold === "number")
                message.JackpotGold = object.JackpotGold;
            else if (typeof object.JackpotGold === "object")
                message.JackpotGold = new $util.LongBits(object.JackpotGold.low >>> 0, object.JackpotGold.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Sence message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Sence
     * @static
     * @param {Sence} message Sence
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Sence.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.BetValue = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Gold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.JackpotGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.JackpotGold = options.longs === String ? "0" : 0;
        }
        if (message.Gold != null && message.hasOwnProperty("Gold"))
            if (typeof message.Gold === "number")
                object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
            else
                object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
        if (message.BetValue && message.BetValue.length) {
            object.BetValue = [];
            for (var j = 0; j < message.BetValue.length; ++j)
                object.BetValue[j] = message.BetValue[j];
        }
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            if (typeof message.JackpotGold === "number")
                object.JackpotGold = options.longs === String ? String(message.JackpotGold) : message.JackpotGold;
            else
                object.JackpotGold = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotGold) : options.longs === Number ? new $util.LongBits(message.JackpotGold.low >>> 0, message.JackpotGold.high >>> 0).toNumber() : message.JackpotGold;
        return object;
    };

    /**
     * Converts this Sence to JSON.
     * @function toJSON
     * @memberof Sence
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Sence.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Sence;
})();

$root.JackpotInfo = (function() {

    /**
     * Properties of a JackpotInfo.
     * @exports IJackpotInfo
     * @interface IJackpotInfo
     * @property {number|Long|null} [JackpotGold] JackpotInfo JackpotGold
     */

    /**
     * Constructs a new JackpotInfo.
     * @exports JackpotInfo
     * @classdesc Represents a JackpotInfo.
     * @implements IJackpotInfo
     * @constructor
     * @param {IJackpotInfo=} [properties] Properties to set
     */
    function JackpotInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JackpotInfo JackpotGold.
     * @member {number|Long} JackpotGold
     * @memberof JackpotInfo
     * @instance
     */
    JackpotInfo.prototype.JackpotGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new JackpotInfo instance using the specified properties.
     * @function create
     * @memberof JackpotInfo
     * @static
     * @param {IJackpotInfo=} [properties] Properties to set
     * @returns {JackpotInfo} JackpotInfo instance
     */
    JackpotInfo.create = function create(properties) {
        return new JackpotInfo(properties);
    };

    /**
     * Encodes the specified JackpotInfo message. Does not implicitly {@link JackpotInfo.verify|verify} messages.
     * @function encode
     * @memberof JackpotInfo
     * @static
     * @param {IJackpotInfo} message JackpotInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JackpotInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.JackpotGold);
        return writer;
    };

    /**
     * Encodes the specified JackpotInfo message, length delimited. Does not implicitly {@link JackpotInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JackpotInfo
     * @static
     * @param {IJackpotInfo} message JackpotInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JackpotInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JackpotInfo message from the specified reader or buffer.
     * @function decode
     * @memberof JackpotInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JackpotInfo} JackpotInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JackpotInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JackpotInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.JackpotGold = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JackpotInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JackpotInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JackpotInfo} JackpotInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JackpotInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JackpotInfo message.
     * @function verify
     * @memberof JackpotInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JackpotInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            if (!$util.isInteger(message.JackpotGold) && !(message.JackpotGold && $util.isInteger(message.JackpotGold.low) && $util.isInteger(message.JackpotGold.high)))
                return "JackpotGold: integer|Long expected";
        return null;
    };

    /**
     * Creates a JackpotInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JackpotInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JackpotInfo} JackpotInfo
     */
    JackpotInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.JackpotInfo)
            return object;
        var message = new $root.JackpotInfo();
        if (object.JackpotGold != null)
            if ($util.Long)
                (message.JackpotGold = $util.Long.fromValue(object.JackpotGold)).unsigned = false;
            else if (typeof object.JackpotGold === "string")
                message.JackpotGold = parseInt(object.JackpotGold, 10);
            else if (typeof object.JackpotGold === "number")
                message.JackpotGold = object.JackpotGold;
            else if (typeof object.JackpotGold === "object")
                message.JackpotGold = new $util.LongBits(object.JackpotGold.low >>> 0, object.JackpotGold.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a JackpotInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JackpotInfo
     * @static
     * @param {JackpotInfo} message JackpotInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JackpotInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.JackpotGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.JackpotGold = options.longs === String ? "0" : 0;
        if (message.JackpotGold != null && message.hasOwnProperty("JackpotGold"))
            if (typeof message.JackpotGold === "number")
                object.JackpotGold = options.longs === String ? String(message.JackpotGold) : message.JackpotGold;
            else
                object.JackpotGold = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotGold) : options.longs === Number ? new $util.LongBits(message.JackpotGold.low >>> 0, message.JackpotGold.high >>> 0).toNumber() : message.JackpotGold;
        return object;
    };

    /**
     * Converts this JackpotInfo to JSON.
     * @function toJSON
     * @memberof JackpotInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JackpotInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JackpotInfo;
})();

module.exports = $root;
