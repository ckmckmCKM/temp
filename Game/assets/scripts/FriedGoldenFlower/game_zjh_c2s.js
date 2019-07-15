/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.C2SIntoGame = (function() {

    /**
     * Properties of a C2SIntoGame.
     * @exports IC2SIntoGame
     * @interface IC2SIntoGame
     * @property {number|null} [userId] C2SIntoGame userId
     * @property {string|null} [userName] C2SIntoGame userName
     */

    /**
     * Constructs a new C2SIntoGame.
     * @exports C2SIntoGame
     * @classdesc Represents a C2SIntoGame.
     * @implements IC2SIntoGame
     * @constructor
     * @param {IC2SIntoGame=} [properties] Properties to set
     */
    function C2SIntoGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SIntoGame userId.
     * @member {number} userId
     * @memberof C2SIntoGame
     * @instance
     */
    C2SIntoGame.prototype.userId = 0;

    /**
     * C2SIntoGame userName.
     * @member {string} userName
     * @memberof C2SIntoGame
     * @instance
     */
    C2SIntoGame.prototype.userName = "";

    /**
     * Creates a new C2SIntoGame instance using the specified properties.
     * @function create
     * @memberof C2SIntoGame
     * @static
     * @param {IC2SIntoGame=} [properties] Properties to set
     * @returns {C2SIntoGame} C2SIntoGame instance
     */
    C2SIntoGame.create = function create(properties) {
        return new C2SIntoGame(properties);
    };

    /**
     * Encodes the specified C2SIntoGame message. Does not implicitly {@link C2SIntoGame.verify|verify} messages.
     * @function encode
     * @memberof C2SIntoGame
     * @static
     * @param {IC2SIntoGame} message C2SIntoGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SIntoGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
        return writer;
    };

    /**
     * Encodes the specified C2SIntoGame message, length delimited. Does not implicitly {@link C2SIntoGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SIntoGame
     * @static
     * @param {IC2SIntoGame} message C2SIntoGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SIntoGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SIntoGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2SIntoGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SIntoGame} C2SIntoGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SIntoGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SIntoGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.userName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SIntoGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SIntoGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SIntoGame} C2SIntoGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SIntoGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SIntoGame message.
     * @function verify
     * @memberof C2SIntoGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SIntoGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
        return null;
    };

    /**
     * Creates a C2SIntoGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SIntoGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SIntoGame} C2SIntoGame
     */
    C2SIntoGame.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SIntoGame)
            return object;
        var message = new $root.C2SIntoGame();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.userName != null)
            message.userName = String(object.userName);
        return message;
    };

    /**
     * Creates a plain object from a C2SIntoGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SIntoGame
     * @static
     * @param {C2SIntoGame} message C2SIntoGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SIntoGame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.userName = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        return object;
    };

    /**
     * Converts this C2SIntoGame to JSON.
     * @function toJSON
     * @memberof C2SIntoGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SIntoGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2SIntoGame;
})();

$root.C2SUserAction = (function() {

    /**
     * Properties of a C2SUserAction.
     * @exports IC2SUserAction
     * @interface IC2SUserAction
     * @property {number|null} [userId] C2SUserAction userId
     * @property {string|null} [option] C2SUserAction option
     * @property {number|Long|null} [amount] C2SUserAction amount
     */

    /**
     * Constructs a new C2SUserAction.
     * @exports C2SUserAction
     * @classdesc Represents a C2SUserAction.
     * @implements IC2SUserAction
     * @constructor
     * @param {IC2SUserAction=} [properties] Properties to set
     */
    function C2SUserAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SUserAction userId.
     * @member {number} userId
     * @memberof C2SUserAction
     * @instance
     */
    C2SUserAction.prototype.userId = 0;

    /**
     * C2SUserAction option.
     * @member {string} option
     * @memberof C2SUserAction
     * @instance
     */
    C2SUserAction.prototype.option = "";

    /**
     * C2SUserAction amount.
     * @member {number|Long} amount
     * @memberof C2SUserAction
     * @instance
     */
    C2SUserAction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new C2SUserAction instance using the specified properties.
     * @function create
     * @memberof C2SUserAction
     * @static
     * @param {IC2SUserAction=} [properties] Properties to set
     * @returns {C2SUserAction} C2SUserAction instance
     */
    C2SUserAction.create = function create(properties) {
        return new C2SUserAction(properties);
    };

    /**
     * Encodes the specified C2SUserAction message. Does not implicitly {@link C2SUserAction.verify|verify} messages.
     * @function encode
     * @memberof C2SUserAction
     * @static
     * @param {IC2SUserAction} message C2SUserAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUserAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        if (message.option != null && message.hasOwnProperty("option"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.option);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
        return writer;
    };

    /**
     * Encodes the specified C2SUserAction message, length delimited. Does not implicitly {@link C2SUserAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SUserAction
     * @static
     * @param {IC2SUserAction} message C2SUserAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUserAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SUserAction message from the specified reader or buffer.
     * @function decode
     * @memberof C2SUserAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SUserAction} C2SUserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUserAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SUserAction();
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
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SUserAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SUserAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SUserAction} C2SUserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUserAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SUserAction message.
     * @function verify
     * @memberof C2SUserAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SUserAction.verify = function verify(message) {
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
        return null;
    };

    /**
     * Creates a C2SUserAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SUserAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SUserAction} C2SUserAction
     */
    C2SUserAction.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SUserAction)
            return object;
        var message = new $root.C2SUserAction();
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
        return message;
    };

    /**
     * Creates a plain object from a C2SUserAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SUserAction
     * @static
     * @param {C2SUserAction} message C2SUserAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SUserAction.toObject = function toObject(message, options) {
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
        return object;
    };

    /**
     * Converts this C2SUserAction to JSON.
     * @function toJSON
     * @memberof C2SUserAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SUserAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2SUserAction;
})();

$root.C2SCompareCards = (function() {

    /**
     * Properties of a C2SCompareCards.
     * @exports IC2SCompareCards
     * @interface IC2SCompareCards
     * @property {number|null} [firstUserId] C2SCompareCards firstUserId
     * @property {number|null} [secondUserId] C2SCompareCards secondUserId
     */

    /**
     * Constructs a new C2SCompareCards.
     * @exports C2SCompareCards
     * @classdesc Represents a C2SCompareCards.
     * @implements IC2SCompareCards
     * @constructor
     * @param {IC2SCompareCards=} [properties] Properties to set
     */
    function C2SCompareCards(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SCompareCards firstUserId.
     * @member {number} firstUserId
     * @memberof C2SCompareCards
     * @instance
     */
    C2SCompareCards.prototype.firstUserId = 0;

    /**
     * C2SCompareCards secondUserId.
     * @member {number} secondUserId
     * @memberof C2SCompareCards
     * @instance
     */
    C2SCompareCards.prototype.secondUserId = 0;

    /**
     * Creates a new C2SCompareCards instance using the specified properties.
     * @function create
     * @memberof C2SCompareCards
     * @static
     * @param {IC2SCompareCards=} [properties] Properties to set
     * @returns {C2SCompareCards} C2SCompareCards instance
     */
    C2SCompareCards.create = function create(properties) {
        return new C2SCompareCards(properties);
    };

    /**
     * Encodes the specified C2SCompareCards message. Does not implicitly {@link C2SCompareCards.verify|verify} messages.
     * @function encode
     * @memberof C2SCompareCards
     * @static
     * @param {IC2SCompareCards} message C2SCompareCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCompareCards.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.firstUserId != null && message.hasOwnProperty("firstUserId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.firstUserId);
        if (message.secondUserId != null && message.hasOwnProperty("secondUserId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.secondUserId);
        return writer;
    };

    /**
     * Encodes the specified C2SCompareCards message, length delimited. Does not implicitly {@link C2SCompareCards.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SCompareCards
     * @static
     * @param {IC2SCompareCards} message C2SCompareCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCompareCards.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SCompareCards message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCompareCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SCompareCards} C2SCompareCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCompareCards.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SCompareCards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.firstUserId = reader.int32();
                break;
            case 2:
                message.secondUserId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SCompareCards message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SCompareCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SCompareCards} C2SCompareCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCompareCards.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SCompareCards message.
     * @function verify
     * @memberof C2SCompareCards
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SCompareCards.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.firstUserId != null && message.hasOwnProperty("firstUserId"))
            if (!$util.isInteger(message.firstUserId))
                return "firstUserId: integer expected";
        if (message.secondUserId != null && message.hasOwnProperty("secondUserId"))
            if (!$util.isInteger(message.secondUserId))
                return "secondUserId: integer expected";
        return null;
    };

    /**
     * Creates a C2SCompareCards message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SCompareCards
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SCompareCards} C2SCompareCards
     */
    C2SCompareCards.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SCompareCards)
            return object;
        var message = new $root.C2SCompareCards();
        if (object.firstUserId != null)
            message.firstUserId = object.firstUserId | 0;
        if (object.secondUserId != null)
            message.secondUserId = object.secondUserId | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SCompareCards message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SCompareCards
     * @static
     * @param {C2SCompareCards} message C2SCompareCards
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SCompareCards.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.firstUserId = 0;
            object.secondUserId = 0;
        }
        if (message.firstUserId != null && message.hasOwnProperty("firstUserId"))
            object.firstUserId = message.firstUserId;
        if (message.secondUserId != null && message.hasOwnProperty("secondUserId"))
            object.secondUserId = message.secondUserId;
        return object;
    };

    /**
     * Converts this C2SCompareCards to JSON.
     * @function toJSON
     * @memberof C2SCompareCards
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SCompareCards.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2SCompareCards;
})();

module.exports = $root;
