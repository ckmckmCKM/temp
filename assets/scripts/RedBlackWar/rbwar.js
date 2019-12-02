/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rbwar = (function() {

    /**
     * Namespace rbwar.
     * @exports rbwar
     * @namespace
     */
    var rbwar = {};

    /**
     * ReceiveMessageType enum.
     * @name rbwar.ReceiveMessageType
     * @enum {string}
     * @property {number} StartID=0 StartID value
     * @property {number} BetID=1 BetID value
     * @property {number} SitDown=2 SitDown value
     * @property {number} GetTrend=3 GetTrend value
     * @property {number} GetUserListInfo=4 GetUserListInfo value
     * @property {number} StandUp=5 StandUp value
     * @property {number} tempCard=6 tempCard value
     */
    rbwar.ReceiveMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "StartID"] = 0;
        values[valuesById[1] = "BetID"] = 1;
        values[valuesById[2] = "SitDown"] = 2;
        values[valuesById[3] = "GetTrend"] = 3;
        values[valuesById[4] = "GetUserListInfo"] = 4;
        values[valuesById[5] = "StandUp"] = 5;
        values[valuesById[6] = "tempCard"] = 6;
        return values;
    })();

    /**
     * SendToClientMessageType enum.
     * @name rbwar.SendToClientMessageType
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
     * @property {number} ExitRet=13 ExitRet value
     * @property {number} KickOutUser=14 KickOutUser value
     * @property {number} RoomRolesInfo=15 RoomRolesInfo value
     * @property {number} RoomSenceInfo=16 RoomSenceInfo value
     * @property {number} UserComeBack=17 UserComeBack value
     */
    rbwar.SendToClientMessageType = (function() {
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
        values[valuesById[13] = "ExitRet"] = 13;
        values[valuesById[14] = "KickOutUser"] = 14;
        values[valuesById[15] = "RoomRolesInfo"] = 15;
        values[valuesById[16] = "RoomSenceInfo"] = 16;
        values[valuesById[17] = "UserComeBack"] = 17;
        return values;
    })();

    /**
     * GameStatus enum.
     * @name rbwar.GameStatus
     * @enum {string}
     * @property {number} StartStatus=0 StartStatus value
     * @property {number} StartMovie=1 StartMovie value
     * @property {number} BetStatus=2 BetStatus value
     * @property {number} EndBetMovie=3 EndBetMovie value
     * @property {number} SettleStatus=4 SettleStatus value
     */
    rbwar.GameStatus = (function() {
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
     * @name rbwar.CardsType
     * @enum {string}
     * @property {number} Normal=0 Normal value
     * @property {number} DanZhang=1 DanZhang value
     * @property {number} DuiZi=2 DuiZi value
     * @property {number} ShunZi=3 ShunZi value
     * @property {number} JinHua=4 JinHua value
     * @property {number} ShunJin=5 ShunJin value
     * @property {number} BaoZi=6 BaoZi value
     */
    rbwar.CardsType = (function() {
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

    rbwar.StatusMessage = (function() {

        /**
         * Properties of a StatusMessage.
         * @memberof rbwar
         * @interface IStatusMessage
         * @property {number|null} [Status] StatusMessage Status
         * @property {number|null} [StatusTime] StatusMessage StatusTime
         */

        /**
         * Constructs a new StatusMessage.
         * @memberof rbwar
         * @classdesc Represents a StatusMessage.
         * @implements IStatusMessage
         * @constructor
         * @param {rbwar.IStatusMessage=} [properties] Properties to set
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
         * @memberof rbwar.StatusMessage
         * @instance
         */
        StatusMessage.prototype.Status = 0;

        /**
         * StatusMessage StatusTime.
         * @member {number} StatusTime
         * @memberof rbwar.StatusMessage
         * @instance
         */
        StatusMessage.prototype.StatusTime = 0;

        /**
         * Creates a new StatusMessage instance using the specified properties.
         * @function create
         * @memberof rbwar.StatusMessage
         * @static
         * @param {rbwar.IStatusMessage=} [properties] Properties to set
         * @returns {rbwar.StatusMessage} StatusMessage instance
         */
        StatusMessage.create = function create(properties) {
            return new StatusMessage(properties);
        };

        /**
         * Encodes the specified StatusMessage message. Does not implicitly {@link rbwar.StatusMessage.verify|verify} messages.
         * @function encode
         * @memberof rbwar.StatusMessage
         * @static
         * @param {rbwar.IStatusMessage} message StatusMessage message or plain object to encode
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
         * Encodes the specified StatusMessage message, length delimited. Does not implicitly {@link rbwar.StatusMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.StatusMessage
         * @static
         * @param {rbwar.IStatusMessage} message StatusMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StatusMessage message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.StatusMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.StatusMessage} StatusMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.StatusMessage();
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
         * @memberof rbwar.StatusMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.StatusMessage} StatusMessage
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
         * @memberof rbwar.StatusMessage
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
         * @memberof rbwar.StatusMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.StatusMessage} StatusMessage
         */
        StatusMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.StatusMessage)
                return object;
            var message = new $root.rbwar.StatusMessage();
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.StatusTime != null)
                message.StatusTime = object.StatusTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a StatusMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.StatusMessage
         * @static
         * @param {rbwar.StatusMessage} message StatusMessage
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
         * @memberof rbwar.StatusMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatusMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StatusMessage;
    })();

    rbwar.BetFailMessage = (function() {

        /**
         * Properties of a BetFailMessage.
         * @memberof rbwar
         * @interface IBetFailMessage
         * @property {string|null} [FailMessage] BetFailMessage FailMessage
         */

        /**
         * Constructs a new BetFailMessage.
         * @memberof rbwar
         * @classdesc Represents a BetFailMessage.
         * @implements IBetFailMessage
         * @constructor
         * @param {rbwar.IBetFailMessage=} [properties] Properties to set
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
         * @memberof rbwar.BetFailMessage
         * @instance
         */
        BetFailMessage.prototype.FailMessage = "";

        /**
         * Creates a new BetFailMessage instance using the specified properties.
         * @function create
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {rbwar.IBetFailMessage=} [properties] Properties to set
         * @returns {rbwar.BetFailMessage} BetFailMessage instance
         */
        BetFailMessage.create = function create(properties) {
            return new BetFailMessage(properties);
        };

        /**
         * Encodes the specified BetFailMessage message. Does not implicitly {@link rbwar.BetFailMessage.verify|verify} messages.
         * @function encode
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {rbwar.IBetFailMessage} message BetFailMessage message or plain object to encode
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
         * Encodes the specified BetFailMessage message, length delimited. Does not implicitly {@link rbwar.BetFailMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {rbwar.IBetFailMessage} message BetFailMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetFailMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetFailMessage message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.BetFailMessage} BetFailMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetFailMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.BetFailMessage();
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
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.BetFailMessage} BetFailMessage
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
         * @memberof rbwar.BetFailMessage
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
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.BetFailMessage} BetFailMessage
         */
        BetFailMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.BetFailMessage)
                return object;
            var message = new $root.rbwar.BetFailMessage();
            if (object.FailMessage != null)
                message.FailMessage = String(object.FailMessage);
            return message;
        };

        /**
         * Creates a plain object from a BetFailMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.BetFailMessage
         * @static
         * @param {rbwar.BetFailMessage} message BetFailMessage
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
         * @memberof rbwar.BetFailMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetFailMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetFailMessage;
    })();

    rbwar.BetSuccessMessage = (function() {

        /**
         * Properties of a BetSuccessMessage.
         * @memberof rbwar
         * @interface IBetSuccessMessage
         * @property {number|null} [SeatId] BetSuccessMessage SeatId
         * @property {number|null} [BetIndex] BetSuccessMessage BetIndex
         * @property {number|null} [BetType] BetSuccessMessage BetType
         * @property {number|Long|null} [UserID] BetSuccessMessage UserID
         */

        /**
         * Constructs a new BetSuccessMessage.
         * @memberof rbwar
         * @classdesc Represents a BetSuccessMessage.
         * @implements IBetSuccessMessage
         * @constructor
         * @param {rbwar.IBetSuccessMessage=} [properties] Properties to set
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
         * @memberof rbwar.BetSuccessMessage
         * @instance
         */
        BetSuccessMessage.prototype.SeatId = 0;

        /**
         * BetSuccessMessage BetIndex.
         * @member {number} BetIndex
         * @memberof rbwar.BetSuccessMessage
         * @instance
         */
        BetSuccessMessage.prototype.BetIndex = 0;

        /**
         * BetSuccessMessage BetType.
         * @member {number} BetType
         * @memberof rbwar.BetSuccessMessage
         * @instance
         */
        BetSuccessMessage.prototype.BetType = 0;

        /**
         * BetSuccessMessage UserID.
         * @member {number|Long} UserID
         * @memberof rbwar.BetSuccessMessage
         * @instance
         */
        BetSuccessMessage.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetSuccessMessage instance using the specified properties.
         * @function create
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {rbwar.IBetSuccessMessage=} [properties] Properties to set
         * @returns {rbwar.BetSuccessMessage} BetSuccessMessage instance
         */
        BetSuccessMessage.create = function create(properties) {
            return new BetSuccessMessage(properties);
        };

        /**
         * Encodes the specified BetSuccessMessage message. Does not implicitly {@link rbwar.BetSuccessMessage.verify|verify} messages.
         * @function encode
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {rbwar.IBetSuccessMessage} message BetSuccessMessage message or plain object to encode
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
         * Encodes the specified BetSuccessMessage message, length delimited. Does not implicitly {@link rbwar.BetSuccessMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {rbwar.IBetSuccessMessage} message BetSuccessMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetSuccessMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetSuccessMessage message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.BetSuccessMessage} BetSuccessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetSuccessMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.BetSuccessMessage();
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
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.BetSuccessMessage} BetSuccessMessage
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
         * @memberof rbwar.BetSuccessMessage
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
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.BetSuccessMessage} BetSuccessMessage
         */
        BetSuccessMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.BetSuccessMessage)
                return object;
            var message = new $root.rbwar.BetSuccessMessage();
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
         * @memberof rbwar.BetSuccessMessage
         * @static
         * @param {rbwar.BetSuccessMessage} message BetSuccessMessage
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
         * @memberof rbwar.BetSuccessMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetSuccessMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetSuccessMessage;
    })();

    rbwar.Bet = (function() {

        /**
         * Properties of a Bet.
         * @memberof rbwar
         * @interface IBet
         * @property {number|null} [BetType] Bet BetType
         * @property {number|null} [BetIndex] Bet BetIndex
         */

        /**
         * Constructs a new Bet.
         * @memberof rbwar
         * @classdesc Represents a Bet.
         * @implements IBet
         * @constructor
         * @param {rbwar.IBet=} [properties] Properties to set
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
         * @memberof rbwar.Bet
         * @instance
         */
        Bet.prototype.BetType = 0;

        /**
         * Bet BetIndex.
         * @member {number} BetIndex
         * @memberof rbwar.Bet
         * @instance
         */
        Bet.prototype.BetIndex = 0;

        /**
         * Creates a new Bet instance using the specified properties.
         * @function create
         * @memberof rbwar.Bet
         * @static
         * @param {rbwar.IBet=} [properties] Properties to set
         * @returns {rbwar.Bet} Bet instance
         */
        Bet.create = function create(properties) {
            return new Bet(properties);
        };

        /**
         * Encodes the specified Bet message. Does not implicitly {@link rbwar.Bet.verify|verify} messages.
         * @function encode
         * @memberof rbwar.Bet
         * @static
         * @param {rbwar.IBet} message Bet message or plain object to encode
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
         * Encodes the specified Bet message, length delimited. Does not implicitly {@link rbwar.Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.Bet
         * @static
         * @param {rbwar.IBet} message Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bet message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.Bet} Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.Bet();
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
         * @memberof rbwar.Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.Bet} Bet
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
         * @memberof rbwar.Bet
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
         * @memberof rbwar.Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.Bet} Bet
         */
        Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.Bet)
                return object;
            var message = new $root.rbwar.Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.BetIndex != null)
                message.BetIndex = object.BetIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.Bet
         * @static
         * @param {rbwar.Bet} message Bet
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
         * @memberof rbwar.Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bet;
    })();

    rbwar.SeatUser = (function() {

        /**
         * Properties of a SeatUser.
         * @memberof rbwar
         * @interface ISeatUser
         * @property {string|null} [Nick] SeatUser Nick
         * @property {string|null} [Head] SeatUser Head
         * @property {number|Long|null} [Score] SeatUser Score
         * @property {boolean|null} [IsBigWinner] SeatUser IsBigWinner
         * @property {boolean|null} [IsMaster] SeatUser IsMaster
         * @property {number|null} [SeatId] SeatUser SeatId
         * @property {number|Long|null} [UserID] SeatUser UserID
         */

        /**
         * Constructs a new SeatUser.
         * @memberof rbwar
         * @classdesc Represents a SeatUser.
         * @implements ISeatUser
         * @constructor
         * @param {rbwar.ISeatUser=} [properties] Properties to set
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
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.Nick = "";

        /**
         * SeatUser Head.
         * @member {string} Head
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.Head = "";

        /**
         * SeatUser Score.
         * @member {number|Long} Score
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SeatUser IsBigWinner.
         * @member {boolean} IsBigWinner
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.IsBigWinner = false;

        /**
         * SeatUser IsMaster.
         * @member {boolean} IsMaster
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.IsMaster = false;

        /**
         * SeatUser SeatId.
         * @member {number} SeatId
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.SeatId = 0;

        /**
         * SeatUser UserID.
         * @member {number|Long} UserID
         * @memberof rbwar.SeatUser
         * @instance
         */
        SeatUser.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SeatUser instance using the specified properties.
         * @function create
         * @memberof rbwar.SeatUser
         * @static
         * @param {rbwar.ISeatUser=} [properties] Properties to set
         * @returns {rbwar.SeatUser} SeatUser instance
         */
        SeatUser.create = function create(properties) {
            return new SeatUser(properties);
        };

        /**
         * Encodes the specified SeatUser message. Does not implicitly {@link rbwar.SeatUser.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SeatUser
         * @static
         * @param {rbwar.ISeatUser} message SeatUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Nick != null && message.hasOwnProperty("Nick"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Nick);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Head);
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
         * Encodes the specified SeatUser message, length delimited. Does not implicitly {@link rbwar.SeatUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SeatUser
         * @static
         * @param {rbwar.ISeatUser} message SeatUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeatUser message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SeatUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SeatUser} SeatUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeatUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SeatUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Nick = reader.string();
                    break;
                case 2:
                    message.Head = reader.string();
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
         * @memberof rbwar.SeatUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SeatUser} SeatUser
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
         * @memberof rbwar.SeatUser
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
                if (!$util.isString(message.Head))
                    return "Head: string expected";
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
         * @memberof rbwar.SeatUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SeatUser} SeatUser
         */
        SeatUser.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SeatUser)
                return object;
            var message = new $root.rbwar.SeatUser();
            if (object.Nick != null)
                message.Nick = String(object.Nick);
            if (object.Head != null)
                message.Head = String(object.Head);
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
         * @memberof rbwar.SeatUser
         * @static
         * @param {rbwar.SeatUser} message SeatUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SeatUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Nick = "";
                object.Head = "";
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
         * @memberof rbwar.SeatUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SeatUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SeatUser;
    })();

    rbwar.SceneMessage = (function() {

        /**
         * Properties of a SceneMessage.
         * @memberof rbwar
         * @interface ISceneMessage
         * @property {Array.<rbwar.ISeatUser>|null} [UserData] SceneMessage UserData
         */

        /**
         * Constructs a new SceneMessage.
         * @memberof rbwar
         * @classdesc Represents a SceneMessage.
         * @implements ISceneMessage
         * @constructor
         * @param {rbwar.ISceneMessage=} [properties] Properties to set
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
         * @member {Array.<rbwar.ISeatUser>} UserData
         * @memberof rbwar.SceneMessage
         * @instance
         */
        SceneMessage.prototype.UserData = $util.emptyArray;

        /**
         * Creates a new SceneMessage instance using the specified properties.
         * @function create
         * @memberof rbwar.SceneMessage
         * @static
         * @param {rbwar.ISceneMessage=} [properties] Properties to set
         * @returns {rbwar.SceneMessage} SceneMessage instance
         */
        SceneMessage.create = function create(properties) {
            return new SceneMessage(properties);
        };

        /**
         * Encodes the specified SceneMessage message. Does not implicitly {@link rbwar.SceneMessage.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SceneMessage
         * @static
         * @param {rbwar.ISceneMessage} message SceneMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserData != null && message.UserData.length)
                for (var i = 0; i < message.UserData.length; ++i)
                    $root.rbwar.SeatUser.encode(message.UserData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SceneMessage message, length delimited. Does not implicitly {@link rbwar.SceneMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SceneMessage
         * @static
         * @param {rbwar.ISceneMessage} message SceneMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SceneMessage message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SceneMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SceneMessage} SceneMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SceneMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SceneMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserData && message.UserData.length))
                        message.UserData = [];
                    message.UserData.push($root.rbwar.SeatUser.decode(reader, reader.uint32()));
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
         * @memberof rbwar.SceneMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SceneMessage} SceneMessage
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
         * @memberof rbwar.SceneMessage
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
                    var error = $root.rbwar.SeatUser.verify(message.UserData[i]);
                    if (error)
                        return "UserData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SceneMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.SceneMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SceneMessage} SceneMessage
         */
        SceneMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SceneMessage)
                return object;
            var message = new $root.rbwar.SceneMessage();
            if (object.UserData) {
                if (!Array.isArray(object.UserData))
                    throw TypeError(".rbwar.SceneMessage.UserData: array expected");
                message.UserData = [];
                for (var i = 0; i < object.UserData.length; ++i) {
                    if (typeof object.UserData[i] !== "object")
                        throw TypeError(".rbwar.SceneMessage.UserData: object expected");
                    message.UserData[i] = $root.rbwar.SeatUser.fromObject(object.UserData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SceneMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.SceneMessage
         * @static
         * @param {rbwar.SceneMessage} message SceneMessage
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
                    object.UserData[j] = $root.rbwar.SeatUser.toObject(message.UserData[j], options);
            }
            return object;
        };

        /**
         * Converts this SceneMessage to JSON.
         * @function toJSON
         * @memberof rbwar.SceneMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SceneMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SceneMessage;
    })();

    rbwar.UserSitDown = (function() {

        /**
         * Properties of a UserSitDown.
         * @memberof rbwar
         * @interface IUserSitDown
         * @property {number|null} [ChairNo] UserSitDown ChairNo
         */

        /**
         * Constructs a new UserSitDown.
         * @memberof rbwar
         * @classdesc Represents a UserSitDown.
         * @implements IUserSitDown
         * @constructor
         * @param {rbwar.IUserSitDown=} [properties] Properties to set
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
         * @memberof rbwar.UserSitDown
         * @instance
         */
        UserSitDown.prototype.ChairNo = 0;

        /**
         * Creates a new UserSitDown instance using the specified properties.
         * @function create
         * @memberof rbwar.UserSitDown
         * @static
         * @param {rbwar.IUserSitDown=} [properties] Properties to set
         * @returns {rbwar.UserSitDown} UserSitDown instance
         */
        UserSitDown.create = function create(properties) {
            return new UserSitDown(properties);
        };

        /**
         * Encodes the specified UserSitDown message. Does not implicitly {@link rbwar.UserSitDown.verify|verify} messages.
         * @function encode
         * @memberof rbwar.UserSitDown
         * @static
         * @param {rbwar.IUserSitDown} message UserSitDown message or plain object to encode
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
         * Encodes the specified UserSitDown message, length delimited. Does not implicitly {@link rbwar.UserSitDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.UserSitDown
         * @static
         * @param {rbwar.IUserSitDown} message UserSitDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSitDown message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.UserSitDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.UserSitDown} UserSitDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.UserSitDown();
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
         * @memberof rbwar.UserSitDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.UserSitDown} UserSitDown
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
         * @memberof rbwar.UserSitDown
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
         * @memberof rbwar.UserSitDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.UserSitDown} UserSitDown
         */
        UserSitDown.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.UserSitDown)
                return object;
            var message = new $root.rbwar.UserSitDown();
            if (object.ChairNo != null)
                message.ChairNo = object.ChairNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSitDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.UserSitDown
         * @static
         * @param {rbwar.UserSitDown} message UserSitDown
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
         * @memberof rbwar.UserSitDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSitDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSitDown;
    })();

    rbwar.UserSitDownFail = (function() {

        /**
         * Properties of a UserSitDownFail.
         * @memberof rbwar
         * @interface IUserSitDownFail
         * @property {string|null} [FailReaSon] UserSitDownFail FailReaSon
         */

        /**
         * Constructs a new UserSitDownFail.
         * @memberof rbwar
         * @classdesc Represents a UserSitDownFail.
         * @implements IUserSitDownFail
         * @constructor
         * @param {rbwar.IUserSitDownFail=} [properties] Properties to set
         */
        function UserSitDownFail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSitDownFail FailReaSon.
         * @member {string} FailReaSon
         * @memberof rbwar.UserSitDownFail
         * @instance
         */
        UserSitDownFail.prototype.FailReaSon = "";

        /**
         * Creates a new UserSitDownFail instance using the specified properties.
         * @function create
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {rbwar.IUserSitDownFail=} [properties] Properties to set
         * @returns {rbwar.UserSitDownFail} UserSitDownFail instance
         */
        UserSitDownFail.create = function create(properties) {
            return new UserSitDownFail(properties);
        };

        /**
         * Encodes the specified UserSitDownFail message. Does not implicitly {@link rbwar.UserSitDownFail.verify|verify} messages.
         * @function encode
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {rbwar.IUserSitDownFail} message UserSitDownFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownFail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FailReaSon != null && message.hasOwnProperty("FailReaSon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.FailReaSon);
            return writer;
        };

        /**
         * Encodes the specified UserSitDownFail message, length delimited. Does not implicitly {@link rbwar.UserSitDownFail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {rbwar.IUserSitDownFail} message UserSitDownFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownFail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSitDownFail message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.UserSitDownFail} UserSitDownFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownFail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.UserSitDownFail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FailReaSon = reader.string();
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
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.UserSitDownFail} UserSitDownFail
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
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSitDownFail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FailReaSon != null && message.hasOwnProperty("FailReaSon"))
                if (!$util.isString(message.FailReaSon))
                    return "FailReaSon: string expected";
            return null;
        };

        /**
         * Creates a UserSitDownFail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.UserSitDownFail} UserSitDownFail
         */
        UserSitDownFail.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.UserSitDownFail)
                return object;
            var message = new $root.rbwar.UserSitDownFail();
            if (object.FailReaSon != null)
                message.FailReaSon = String(object.FailReaSon);
            return message;
        };

        /**
         * Creates a plain object from a UserSitDownFail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.UserSitDownFail
         * @static
         * @param {rbwar.UserSitDownFail} message UserSitDownFail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSitDownFail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.FailReaSon = "";
            if (message.FailReaSon != null && message.hasOwnProperty("FailReaSon"))
                object.FailReaSon = message.FailReaSon;
            return object;
        };

        /**
         * Converts this UserSitDownFail to JSON.
         * @function toJSON
         * @memberof rbwar.UserSitDownFail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSitDownFail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSitDownFail;
    })();

    rbwar.Red = (function() {

        /**
         * Properties of a Red.
         * @memberof rbwar
         * @interface IRed
         * @property {Uint8Array|null} [Card] Red Card
         */

        /**
         * Constructs a new Red.
         * @memberof rbwar
         * @classdesc Represents a Red.
         * @implements IRed
         * @constructor
         * @param {rbwar.IRed=} [properties] Properties to set
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
         * @memberof rbwar.Red
         * @instance
         */
        Red.prototype.Card = $util.newBuffer([]);

        /**
         * Creates a new Red instance using the specified properties.
         * @function create
         * @memberof rbwar.Red
         * @static
         * @param {rbwar.IRed=} [properties] Properties to set
         * @returns {rbwar.Red} Red instance
         */
        Red.create = function create(properties) {
            return new Red(properties);
        };

        /**
         * Encodes the specified Red message. Does not implicitly {@link rbwar.Red.verify|verify} messages.
         * @function encode
         * @memberof rbwar.Red
         * @static
         * @param {rbwar.IRed} message Red message or plain object to encode
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
         * Encodes the specified Red message, length delimited. Does not implicitly {@link rbwar.Red.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.Red
         * @static
         * @param {rbwar.IRed} message Red message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Red.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Red message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.Red
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.Red} Red
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Red.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.Red();
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
         * @memberof rbwar.Red
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.Red} Red
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
         * @memberof rbwar.Red
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
         * @memberof rbwar.Red
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.Red} Red
         */
        Red.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.Red)
                return object;
            var message = new $root.rbwar.Red();
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
         * @memberof rbwar.Red
         * @static
         * @param {rbwar.Red} message Red
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
         * @memberof rbwar.Red
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Red.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Red;
    })();

    rbwar.Black = (function() {

        /**
         * Properties of a Black.
         * @memberof rbwar
         * @interface IBlack
         * @property {Uint8Array|null} [Card] Black Card
         */

        /**
         * Constructs a new Black.
         * @memberof rbwar
         * @classdesc Represents a Black.
         * @implements IBlack
         * @constructor
         * @param {rbwar.IBlack=} [properties] Properties to set
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
         * @memberof rbwar.Black
         * @instance
         */
        Black.prototype.Card = $util.newBuffer([]);

        /**
         * Creates a new Black instance using the specified properties.
         * @function create
         * @memberof rbwar.Black
         * @static
         * @param {rbwar.IBlack=} [properties] Properties to set
         * @returns {rbwar.Black} Black instance
         */
        Black.create = function create(properties) {
            return new Black(properties);
        };

        /**
         * Encodes the specified Black message. Does not implicitly {@link rbwar.Black.verify|verify} messages.
         * @function encode
         * @memberof rbwar.Black
         * @static
         * @param {rbwar.IBlack} message Black message or plain object to encode
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
         * Encodes the specified Black message, length delimited. Does not implicitly {@link rbwar.Black.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.Black
         * @static
         * @param {rbwar.IBlack} message Black message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Black.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Black message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.Black
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.Black} Black
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Black.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.Black();
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
         * @memberof rbwar.Black
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.Black} Black
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
         * @memberof rbwar.Black
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
         * @memberof rbwar.Black
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.Black} Black
         */
        Black.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.Black)
                return object;
            var message = new $root.rbwar.Black();
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
         * @memberof rbwar.Black
         * @static
         * @param {rbwar.Black} message Black
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
         * @memberof rbwar.Black
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Black.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Black;
    })();

    rbwar.SettleMsg = (function() {

        /**
         * Properties of a SettleMsg.
         * @memberof rbwar
         * @interface ISettleMsg
         * @property {Uint8Array|null} [RedPoker] SettleMsg RedPoker
         * @property {Uint8Array|null} [BlackPoker] SettleMsg BlackPoker
         * @property {number|null} [Win] SettleMsg Win
         * @property {number|null} [WinCardType] SettleMsg WinCardType
         * @property {number|Long|null} [UserWinRed] SettleMsg UserWinRed
         * @property {number|null} [LoseCardType] SettleMsg LoseCardType
         * @property {number|Long|null} [LuckWin] SettleMsg LuckWin
         * @property {number|Long|null} [UserScore] SettleMsg UserScore
         * @property {number|Long|null} [UserWinBlack] SettleMsg UserWinBlack
         * @property {boolean|null} [IsLuck] SettleMsg IsLuck
         * @property {number|Long|null} [Red] SettleMsg Red
         * @property {number|Long|null} [Black] SettleMsg Black
         * @property {number|Long|null} [Luck] SettleMsg Luck
         * @property {number|Long|null} [UserBetRed] SettleMsg UserBetRed
         * @property {number|Long|null} [UserBetBlack] SettleMsg UserBetBlack
         * @property {number|Long|null} [UserBetLuck] SettleMsg UserBetLuck
         * @property {number|Long|null} [UserBetTotal] SettleMsg UserBetTotal
         * @property {number|Long|null} [UserTotalWin] SettleMsg UserTotalWin
         */

        /**
         * Constructs a new SettleMsg.
         * @memberof rbwar
         * @classdesc Represents a SettleMsg.
         * @implements ISettleMsg
         * @constructor
         * @param {rbwar.ISettleMsg=} [properties] Properties to set
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
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.RedPoker = $util.newBuffer([]);

        /**
         * SettleMsg BlackPoker.
         * @member {Uint8Array} BlackPoker
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.BlackPoker = $util.newBuffer([]);

        /**
         * SettleMsg Win.
         * @member {number} Win
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.Win = 0;

        /**
         * SettleMsg WinCardType.
         * @member {number} WinCardType
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.WinCardType = 0;

        /**
         * SettleMsg UserWinRed.
         * @member {number|Long} UserWinRed
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserWinRed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg LoseCardType.
         * @member {number} LoseCardType
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.LoseCardType = 0;

        /**
         * SettleMsg LuckWin.
         * @member {number|Long} LuckWin
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.LuckWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserScore.
         * @member {number|Long} UserScore
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserWinBlack.
         * @member {number|Long} UserWinBlack
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserWinBlack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg IsLuck.
         * @member {boolean} IsLuck
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.IsLuck = false;

        /**
         * SettleMsg Red.
         * @member {number|Long} Red
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.Red = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg Black.
         * @member {number|Long} Black
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.Black = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg Luck.
         * @member {number|Long} Luck
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.Luck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserBetRed.
         * @member {number|Long} UserBetRed
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserBetRed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserBetBlack.
         * @member {number|Long} UserBetBlack
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserBetBlack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserBetLuck.
         * @member {number|Long} UserBetLuck
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserBetLuck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserBetTotal.
         * @member {number|Long} UserBetTotal
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserBetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SettleMsg UserTotalWin.
         * @member {number|Long} UserTotalWin
         * @memberof rbwar.SettleMsg
         * @instance
         */
        SettleMsg.prototype.UserTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SettleMsg instance using the specified properties.
         * @function create
         * @memberof rbwar.SettleMsg
         * @static
         * @param {rbwar.ISettleMsg=} [properties] Properties to set
         * @returns {rbwar.SettleMsg} SettleMsg instance
         */
        SettleMsg.create = function create(properties) {
            return new SettleMsg(properties);
        };

        /**
         * Encodes the specified SettleMsg message. Does not implicitly {@link rbwar.SettleMsg.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SettleMsg
         * @static
         * @param {rbwar.ISettleMsg} message SettleMsg message or plain object to encode
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
            if (message.UserWinRed != null && message.hasOwnProperty("UserWinRed"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.UserWinRed);
            if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LoseCardType);
            if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.LuckWin);
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.UserScore);
            if (message.UserWinBlack != null && message.hasOwnProperty("UserWinBlack"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.UserWinBlack);
            if (message.IsLuck != null && message.hasOwnProperty("IsLuck"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.IsLuck);
            if (message.Red != null && message.hasOwnProperty("Red"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.Red);
            if (message.Black != null && message.hasOwnProperty("Black"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.Black);
            if (message.Luck != null && message.hasOwnProperty("Luck"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.Luck);
            if (message.UserBetRed != null && message.hasOwnProperty("UserBetRed"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.UserBetRed);
            if (message.UserBetBlack != null && message.hasOwnProperty("UserBetBlack"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.UserBetBlack);
            if (message.UserBetLuck != null && message.hasOwnProperty("UserBetLuck"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.UserBetLuck);
            if (message.UserBetTotal != null && message.hasOwnProperty("UserBetTotal"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.UserBetTotal);
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.UserTotalWin);
            return writer;
        };

        /**
         * Encodes the specified SettleMsg message, length delimited. Does not implicitly {@link rbwar.SettleMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SettleMsg
         * @static
         * @param {rbwar.ISettleMsg} message SettleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettleMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettleMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SettleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SettleMsg} SettleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettleMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SettleMsg();
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
                    message.UserWinRed = reader.int64();
                    break;
                case 6:
                    message.LoseCardType = reader.int32();
                    break;
                case 7:
                    message.LuckWin = reader.int64();
                    break;
                case 8:
                    message.UserScore = reader.int64();
                    break;
                case 9:
                    message.UserWinBlack = reader.int64();
                    break;
                case 10:
                    message.IsLuck = reader.bool();
                    break;
                case 11:
                    message.Red = reader.int64();
                    break;
                case 12:
                    message.Black = reader.int64();
                    break;
                case 13:
                    message.Luck = reader.int64();
                    break;
                case 14:
                    message.UserBetRed = reader.int64();
                    break;
                case 15:
                    message.UserBetBlack = reader.int64();
                    break;
                case 16:
                    message.UserBetLuck = reader.int64();
                    break;
                case 17:
                    message.UserBetTotal = reader.int64();
                    break;
                case 18:
                    message.UserTotalWin = reader.int64();
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
         * @memberof rbwar.SettleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SettleMsg} SettleMsg
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
         * @memberof rbwar.SettleMsg
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
            if (message.UserWinRed != null && message.hasOwnProperty("UserWinRed"))
                if (!$util.isInteger(message.UserWinRed) && !(message.UserWinRed && $util.isInteger(message.UserWinRed.low) && $util.isInteger(message.UserWinRed.high)))
                    return "UserWinRed: integer|Long expected";
            if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
                if (!$util.isInteger(message.LoseCardType))
                    return "LoseCardType: integer expected";
            if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
                if (!$util.isInteger(message.LuckWin) && !(message.LuckWin && $util.isInteger(message.LuckWin.low) && $util.isInteger(message.LuckWin.high)))
                    return "LuckWin: integer|Long expected";
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (!$util.isInteger(message.UserScore) && !(message.UserScore && $util.isInteger(message.UserScore.low) && $util.isInteger(message.UserScore.high)))
                    return "UserScore: integer|Long expected";
            if (message.UserWinBlack != null && message.hasOwnProperty("UserWinBlack"))
                if (!$util.isInteger(message.UserWinBlack) && !(message.UserWinBlack && $util.isInteger(message.UserWinBlack.low) && $util.isInteger(message.UserWinBlack.high)))
                    return "UserWinBlack: integer|Long expected";
            if (message.IsLuck != null && message.hasOwnProperty("IsLuck"))
                if (typeof message.IsLuck !== "boolean")
                    return "IsLuck: boolean expected";
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
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                if (!$util.isInteger(message.UserTotalWin) && !(message.UserTotalWin && $util.isInteger(message.UserTotalWin.low) && $util.isInteger(message.UserTotalWin.high)))
                    return "UserTotalWin: integer|Long expected";
            return null;
        };

        /**
         * Creates a SettleMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.SettleMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SettleMsg} SettleMsg
         */
        SettleMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SettleMsg)
                return object;
            var message = new $root.rbwar.SettleMsg();
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
            if (object.UserWinRed != null)
                if ($util.Long)
                    (message.UserWinRed = $util.Long.fromValue(object.UserWinRed)).unsigned = false;
                else if (typeof object.UserWinRed === "string")
                    message.UserWinRed = parseInt(object.UserWinRed, 10);
                else if (typeof object.UserWinRed === "number")
                    message.UserWinRed = object.UserWinRed;
                else if (typeof object.UserWinRed === "object")
                    message.UserWinRed = new $util.LongBits(object.UserWinRed.low >>> 0, object.UserWinRed.high >>> 0).toNumber();
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
            if (object.UserScore != null)
                if ($util.Long)
                    (message.UserScore = $util.Long.fromValue(object.UserScore)).unsigned = false;
                else if (typeof object.UserScore === "string")
                    message.UserScore = parseInt(object.UserScore, 10);
                else if (typeof object.UserScore === "number")
                    message.UserScore = object.UserScore;
                else if (typeof object.UserScore === "object")
                    message.UserScore = new $util.LongBits(object.UserScore.low >>> 0, object.UserScore.high >>> 0).toNumber();
            if (object.UserWinBlack != null)
                if ($util.Long)
                    (message.UserWinBlack = $util.Long.fromValue(object.UserWinBlack)).unsigned = false;
                else if (typeof object.UserWinBlack === "string")
                    message.UserWinBlack = parseInt(object.UserWinBlack, 10);
                else if (typeof object.UserWinBlack === "number")
                    message.UserWinBlack = object.UserWinBlack;
                else if (typeof object.UserWinBlack === "object")
                    message.UserWinBlack = new $util.LongBits(object.UserWinBlack.low >>> 0, object.UserWinBlack.high >>> 0).toNumber();
            if (object.IsLuck != null)
                message.IsLuck = Boolean(object.IsLuck);
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
            if (object.UserTotalWin != null)
                if ($util.Long)
                    (message.UserTotalWin = $util.Long.fromValue(object.UserTotalWin)).unsigned = false;
                else if (typeof object.UserTotalWin === "string")
                    message.UserTotalWin = parseInt(object.UserTotalWin, 10);
                else if (typeof object.UserTotalWin === "number")
                    message.UserTotalWin = object.UserTotalWin;
                else if (typeof object.UserTotalWin === "object")
                    message.UserTotalWin = new $util.LongBits(object.UserTotalWin.low >>> 0, object.UserTotalWin.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SettleMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.SettleMsg
         * @static
         * @param {rbwar.SettleMsg} message SettleMsg
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
                    object.UserWinRed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserWinRed = options.longs === String ? "0" : 0;
                object.LoseCardType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LuckWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LuckWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserWinBlack = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserWinBlack = options.longs === String ? "0" : 0;
                object.IsLuck = false;
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserTotalWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserTotalWin = options.longs === String ? "0" : 0;
            }
            if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
                object.RedPoker = options.bytes === String ? $util.base64.encode(message.RedPoker, 0, message.RedPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.RedPoker) : message.RedPoker;
            if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
                object.BlackPoker = options.bytes === String ? $util.base64.encode(message.BlackPoker, 0, message.BlackPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.BlackPoker) : message.BlackPoker;
            if (message.Win != null && message.hasOwnProperty("Win"))
                object.Win = message.Win;
            if (message.WinCardType != null && message.hasOwnProperty("WinCardType"))
                object.WinCardType = message.WinCardType;
            if (message.UserWinRed != null && message.hasOwnProperty("UserWinRed"))
                if (typeof message.UserWinRed === "number")
                    object.UserWinRed = options.longs === String ? String(message.UserWinRed) : message.UserWinRed;
                else
                    object.UserWinRed = options.longs === String ? $util.Long.prototype.toString.call(message.UserWinRed) : options.longs === Number ? new $util.LongBits(message.UserWinRed.low >>> 0, message.UserWinRed.high >>> 0).toNumber() : message.UserWinRed;
            if (message.LoseCardType != null && message.hasOwnProperty("LoseCardType"))
                object.LoseCardType = message.LoseCardType;
            if (message.LuckWin != null && message.hasOwnProperty("LuckWin"))
                if (typeof message.LuckWin === "number")
                    object.LuckWin = options.longs === String ? String(message.LuckWin) : message.LuckWin;
                else
                    object.LuckWin = options.longs === String ? $util.Long.prototype.toString.call(message.LuckWin) : options.longs === Number ? new $util.LongBits(message.LuckWin.low >>> 0, message.LuckWin.high >>> 0).toNumber() : message.LuckWin;
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (typeof message.UserScore === "number")
                    object.UserScore = options.longs === String ? String(message.UserScore) : message.UserScore;
                else
                    object.UserScore = options.longs === String ? $util.Long.prototype.toString.call(message.UserScore) : options.longs === Number ? new $util.LongBits(message.UserScore.low >>> 0, message.UserScore.high >>> 0).toNumber() : message.UserScore;
            if (message.UserWinBlack != null && message.hasOwnProperty("UserWinBlack"))
                if (typeof message.UserWinBlack === "number")
                    object.UserWinBlack = options.longs === String ? String(message.UserWinBlack) : message.UserWinBlack;
                else
                    object.UserWinBlack = options.longs === String ? $util.Long.prototype.toString.call(message.UserWinBlack) : options.longs === Number ? new $util.LongBits(message.UserWinBlack.low >>> 0, message.UserWinBlack.high >>> 0).toNumber() : message.UserWinBlack;
            if (message.IsLuck != null && message.hasOwnProperty("IsLuck"))
                object.IsLuck = message.IsLuck;
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
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                if (typeof message.UserTotalWin === "number")
                    object.UserTotalWin = options.longs === String ? String(message.UserTotalWin) : message.UserTotalWin;
                else
                    object.UserTotalWin = options.longs === String ? $util.Long.prototype.toString.call(message.UserTotalWin) : options.longs === Number ? new $util.LongBits(message.UserTotalWin.low >>> 0, message.UserTotalWin.high >>> 0).toNumber() : message.UserTotalWin;
            return object;
        };

        /**
         * Converts this SettleMsg to JSON.
         * @function toJSON
         * @memberof rbwar.SettleMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettleMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettleMsg;
    })();

    rbwar.SceneBetInfo = (function() {

        /**
         * Properties of a SceneBetInfo.
         * @memberof rbwar
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
         * @memberof rbwar
         * @classdesc Represents a SceneBetInfo.
         * @implements ISceneBetInfo
         * @constructor
         * @param {rbwar.ISceneBetInfo=} [properties] Properties to set
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
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.Red = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo Black.
         * @member {number|Long} Black
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.Black = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo Luck.
         * @member {number|Long} Luck
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.Luck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo UserBetRed.
         * @member {number|Long} UserBetRed
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.UserBetRed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo UserBetBlack.
         * @member {number|Long} UserBetBlack
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.UserBetBlack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo UserBetLuck.
         * @member {number|Long} UserBetLuck
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.UserBetLuck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo UserBetTotal.
         * @member {number|Long} UserBetTotal
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.UserBetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneBetInfo MasterBetType.
         * @member {number} MasterBetType
         * @memberof rbwar.SceneBetInfo
         * @instance
         */
        SceneBetInfo.prototype.MasterBetType = 0;

        /**
         * Creates a new SceneBetInfo instance using the specified properties.
         * @function create
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {rbwar.ISceneBetInfo=} [properties] Properties to set
         * @returns {rbwar.SceneBetInfo} SceneBetInfo instance
         */
        SceneBetInfo.create = function create(properties) {
            return new SceneBetInfo(properties);
        };

        /**
         * Encodes the specified SceneBetInfo message. Does not implicitly {@link rbwar.SceneBetInfo.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {rbwar.ISceneBetInfo} message SceneBetInfo message or plain object to encode
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
         * Encodes the specified SceneBetInfo message, length delimited. Does not implicitly {@link rbwar.SceneBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {rbwar.ISceneBetInfo} message SceneBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SceneBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SceneBetInfo} SceneBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SceneBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SceneBetInfo();
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
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SceneBetInfo} SceneBetInfo
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
         * @memberof rbwar.SceneBetInfo
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
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SceneBetInfo} SceneBetInfo
         */
        SceneBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SceneBetInfo)
                return object;
            var message = new $root.rbwar.SceneBetInfo();
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
         * @memberof rbwar.SceneBetInfo
         * @static
         * @param {rbwar.SceneBetInfo} message SceneBetInfo
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
         * @memberof rbwar.SceneBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SceneBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SceneBetInfo;
    })();

    rbwar.Trend = (function() {

        /**
         * Properties of a Trend.
         * @memberof rbwar
         * @interface ITrend
         * @property {Array.<number>|null} [Win] Trend Win
         * @property {Array.<number>|null} [WinCardType] Trend WinCardType
         */

        /**
         * Constructs a new Trend.
         * @memberof rbwar
         * @classdesc Represents a Trend.
         * @implements ITrend
         * @constructor
         * @param {rbwar.ITrend=} [properties] Properties to set
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
         * @memberof rbwar.Trend
         * @instance
         */
        Trend.prototype.Win = $util.emptyArray;

        /**
         * Trend WinCardType.
         * @member {Array.<number>} WinCardType
         * @memberof rbwar.Trend
         * @instance
         */
        Trend.prototype.WinCardType = $util.emptyArray;

        /**
         * Creates a new Trend instance using the specified properties.
         * @function create
         * @memberof rbwar.Trend
         * @static
         * @param {rbwar.ITrend=} [properties] Properties to set
         * @returns {rbwar.Trend} Trend instance
         */
        Trend.create = function create(properties) {
            return new Trend(properties);
        };

        /**
         * Encodes the specified Trend message. Does not implicitly {@link rbwar.Trend.verify|verify} messages.
         * @function encode
         * @memberof rbwar.Trend
         * @static
         * @param {rbwar.ITrend} message Trend message or plain object to encode
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
         * Encodes the specified Trend message, length delimited. Does not implicitly {@link rbwar.Trend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.Trend
         * @static
         * @param {rbwar.ITrend} message Trend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trend message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.Trend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.Trend} Trend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.Trend();
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
         * @memberof rbwar.Trend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.Trend} Trend
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
         * @memberof rbwar.Trend
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
         * @memberof rbwar.Trend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.Trend} Trend
         */
        Trend.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.Trend)
                return object;
            var message = new $root.rbwar.Trend();
            if (object.Win) {
                if (!Array.isArray(object.Win))
                    throw TypeError(".rbwar.Trend.Win: array expected");
                message.Win = [];
                for (var i = 0; i < object.Win.length; ++i)
                    message.Win[i] = object.Win[i] | 0;
            }
            if (object.WinCardType) {
                if (!Array.isArray(object.WinCardType))
                    throw TypeError(".rbwar.Trend.WinCardType: array expected");
                message.WinCardType = [];
                for (var i = 0; i < object.WinCardType.length; ++i)
                    message.WinCardType[i] = object.WinCardType[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a Trend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.Trend
         * @static
         * @param {rbwar.Trend} message Trend
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
         * @memberof rbwar.Trend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trend;
    })();

    rbwar.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof rbwar
         * @interface IUserInfo
         * @property {string|null} [NikeName] UserInfo NikeName
         * @property {number|Long|null} [UserGlod] UserInfo UserGlod
         * @property {number|Long|null} [BetGold] UserInfo BetGold
         * @property {number|null} [WinCount] UserInfo WinCount
         * @property {string|null} [Head] UserInfo Head
         */

        /**
         * Constructs a new UserInfo.
         * @memberof rbwar
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {rbwar.IUserInfo=} [properties] Properties to set
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
         * @memberof rbwar.UserInfo
         * @instance
         */
        UserInfo.prototype.NikeName = "";

        /**
         * UserInfo UserGlod.
         * @member {number|Long} UserGlod
         * @memberof rbwar.UserInfo
         * @instance
         */
        UserInfo.prototype.UserGlod = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo BetGold.
         * @member {number|Long} BetGold
         * @memberof rbwar.UserInfo
         * @instance
         */
        UserInfo.prototype.BetGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo WinCount.
         * @member {number} WinCount
         * @memberof rbwar.UserInfo
         * @instance
         */
        UserInfo.prototype.WinCount = 0;

        /**
         * UserInfo Head.
         * @member {string} Head
         * @memberof rbwar.UserInfo
         * @instance
         */
        UserInfo.prototype.Head = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof rbwar.UserInfo
         * @static
         * @param {rbwar.IUserInfo=} [properties] Properties to set
         * @returns {rbwar.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link rbwar.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof rbwar.UserInfo
         * @static
         * @param {rbwar.IUserInfo} message UserInfo message or plain object to encode
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
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Head);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link rbwar.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.UserInfo
         * @static
         * @param {rbwar.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.UserInfo();
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
                case 5:
                    message.Head = reader.string();
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
         * @memberof rbwar.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.UserInfo} UserInfo
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
         * @memberof rbwar.UserInfo
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
            if (message.Head != null && message.hasOwnProperty("Head"))
                if (!$util.isString(message.Head))
                    return "Head: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.UserInfo)
                return object;
            var message = new $root.rbwar.UserInfo();
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
            if (object.Head != null)
                message.Head = String(object.Head);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.UserInfo
         * @static
         * @param {rbwar.UserInfo} message UserInfo
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
                object.Head = "";
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
            if (message.Head != null && message.hasOwnProperty("Head"))
                object.Head = message.Head;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof rbwar.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    rbwar.UserList = (function() {

        /**
         * Properties of a UserList.
         * @memberof rbwar
         * @interface IUserList
         * @property {Array.<rbwar.IUserInfo>|null} [UserList] UserList UserList
         */

        /**
         * Constructs a new UserList.
         * @memberof rbwar
         * @classdesc Represents a UserList.
         * @implements IUserList
         * @constructor
         * @param {rbwar.IUserList=} [properties] Properties to set
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
         * @member {Array.<rbwar.IUserInfo>} UserList
         * @memberof rbwar.UserList
         * @instance
         */
        UserList.prototype.UserList = $util.emptyArray;

        /**
         * Creates a new UserList instance using the specified properties.
         * @function create
         * @memberof rbwar.UserList
         * @static
         * @param {rbwar.IUserList=} [properties] Properties to set
         * @returns {rbwar.UserList} UserList instance
         */
        UserList.create = function create(properties) {
            return new UserList(properties);
        };

        /**
         * Encodes the specified UserList message. Does not implicitly {@link rbwar.UserList.verify|verify} messages.
         * @function encode
         * @memberof rbwar.UserList
         * @static
         * @param {rbwar.IUserList} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserList != null && message.UserList.length)
                for (var i = 0; i < message.UserList.length; ++i)
                    $root.rbwar.UserInfo.encode(message.UserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link rbwar.UserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.UserList
         * @static
         * @param {rbwar.IUserList} message UserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.UserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.UserList} UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.UserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserList && message.UserList.length))
                        message.UserList = [];
                    message.UserList.push($root.rbwar.UserInfo.decode(reader, reader.uint32()));
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
         * @memberof rbwar.UserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.UserList} UserList
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
         * @memberof rbwar.UserList
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
                    var error = $root.rbwar.UserInfo.verify(message.UserList[i]);
                    if (error)
                        return "UserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.UserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.UserList} UserList
         */
        UserList.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.UserList)
                return object;
            var message = new $root.rbwar.UserList();
            if (object.UserList) {
                if (!Array.isArray(object.UserList))
                    throw TypeError(".rbwar.UserList.UserList: array expected");
                message.UserList = [];
                for (var i = 0; i < object.UserList.length; ++i) {
                    if (typeof object.UserList[i] !== "object")
                        throw TypeError(".rbwar.UserList.UserList: object expected");
                    message.UserList[i] = $root.rbwar.UserInfo.fromObject(object.UserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.UserList
         * @static
         * @param {rbwar.UserList} message UserList
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
                    object.UserList[j] = $root.rbwar.UserInfo.toObject(message.UserList[j], options);
            }
            return object;
        };

        /**
         * Converts this UserList to JSON.
         * @function toJSON
         * @memberof rbwar.UserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserList;
    })();

    rbwar.SceneUserInfo = (function() {

        /**
         * Properties of a SceneUserInfo.
         * @memberof rbwar
         * @interface ISceneUserInfo
         * @property {number|Long|null} [UserID] SceneUserInfo UserID
         * @property {number|null} [SceneSeatID] SceneUserInfo SceneSeatID
         * @property {number|Long|null} [RedWin] SceneUserInfo RedWin
         * @property {number|Long|null} [BlackWin] SceneUserInfo BlackWin
         * @property {number|Long|null} [LuckWin] SceneUserInfo LuckWin
         * @property {number|Long|null} [UserScore] SceneUserInfo UserScore
         * @property {number|Long|null} [UserTotalWin] SceneUserInfo UserTotalWin
         * @property {number|Long|null} [BetRed] SceneUserInfo BetRed
         * @property {number|Long|null} [BetBlack] SceneUserInfo BetBlack
         * @property {number|Long|null} [BetLuck] SceneUserInfo BetLuck
         */

        /**
         * Constructs a new SceneUserInfo.
         * @memberof rbwar
         * @classdesc Represents a SceneUserInfo.
         * @implements ISceneUserInfo
         * @constructor
         * @param {rbwar.ISceneUserInfo=} [properties] Properties to set
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
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo SceneSeatID.
         * @member {number} SceneSeatID
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.SceneSeatID = 0;

        /**
         * SceneUserInfo RedWin.
         * @member {number|Long} RedWin
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.RedWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo BlackWin.
         * @member {number|Long} BlackWin
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.BlackWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo LuckWin.
         * @member {number|Long} LuckWin
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.LuckWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo UserScore.
         * @member {number|Long} UserScore
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.UserScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo UserTotalWin.
         * @member {number|Long} UserTotalWin
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.UserTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo BetRed.
         * @member {number|Long} BetRed
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.BetRed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo BetBlack.
         * @member {number|Long} BetBlack
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.BetBlack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SceneUserInfo BetLuck.
         * @member {number|Long} BetLuck
         * @memberof rbwar.SceneUserInfo
         * @instance
         */
        SceneUserInfo.prototype.BetLuck = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SceneUserInfo instance using the specified properties.
         * @function create
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {rbwar.ISceneUserInfo=} [properties] Properties to set
         * @returns {rbwar.SceneUserInfo} SceneUserInfo instance
         */
        SceneUserInfo.create = function create(properties) {
            return new SceneUserInfo(properties);
        };

        /**
         * Encodes the specified SceneUserInfo message. Does not implicitly {@link rbwar.SceneUserInfo.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {rbwar.ISceneUserInfo} message SceneUserInfo message or plain object to encode
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
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.UserScore);
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.UserTotalWin);
            if (message.BetRed != null && message.hasOwnProperty("BetRed"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetRed);
            if (message.BetBlack != null && message.hasOwnProperty("BetBlack"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetBlack);
            if (message.BetLuck != null && message.hasOwnProperty("BetLuck"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.BetLuck);
            return writer;
        };

        /**
         * Encodes the specified SceneUserInfo message, length delimited. Does not implicitly {@link rbwar.SceneUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {rbwar.ISceneUserInfo} message SceneUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SceneUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SceneUserInfo} SceneUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SceneUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SceneUserInfo();
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
                case 6:
                    message.UserScore = reader.int64();
                    break;
                case 7:
                    message.UserTotalWin = reader.int64();
                    break;
                case 8:
                    message.BetRed = reader.int64();
                    break;
                case 9:
                    message.BetBlack = reader.int64();
                    break;
                case 10:
                    message.BetLuck = reader.int64();
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
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SceneUserInfo} SceneUserInfo
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
         * @memberof rbwar.SceneUserInfo
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
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (!$util.isInteger(message.UserScore) && !(message.UserScore && $util.isInteger(message.UserScore.low) && $util.isInteger(message.UserScore.high)))
                    return "UserScore: integer|Long expected";
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                if (!$util.isInteger(message.UserTotalWin) && !(message.UserTotalWin && $util.isInteger(message.UserTotalWin.low) && $util.isInteger(message.UserTotalWin.high)))
                    return "UserTotalWin: integer|Long expected";
            if (message.BetRed != null && message.hasOwnProperty("BetRed"))
                if (!$util.isInteger(message.BetRed) && !(message.BetRed && $util.isInteger(message.BetRed.low) && $util.isInteger(message.BetRed.high)))
                    return "BetRed: integer|Long expected";
            if (message.BetBlack != null && message.hasOwnProperty("BetBlack"))
                if (!$util.isInteger(message.BetBlack) && !(message.BetBlack && $util.isInteger(message.BetBlack.low) && $util.isInteger(message.BetBlack.high)))
                    return "BetBlack: integer|Long expected";
            if (message.BetLuck != null && message.hasOwnProperty("BetLuck"))
                if (!$util.isInteger(message.BetLuck) && !(message.BetLuck && $util.isInteger(message.BetLuck.low) && $util.isInteger(message.BetLuck.high)))
                    return "BetLuck: integer|Long expected";
            return null;
        };

        /**
         * Creates a SceneUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SceneUserInfo} SceneUserInfo
         */
        SceneUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SceneUserInfo)
                return object;
            var message = new $root.rbwar.SceneUserInfo();
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
            if (object.UserScore != null)
                if ($util.Long)
                    (message.UserScore = $util.Long.fromValue(object.UserScore)).unsigned = false;
                else if (typeof object.UserScore === "string")
                    message.UserScore = parseInt(object.UserScore, 10);
                else if (typeof object.UserScore === "number")
                    message.UserScore = object.UserScore;
                else if (typeof object.UserScore === "object")
                    message.UserScore = new $util.LongBits(object.UserScore.low >>> 0, object.UserScore.high >>> 0).toNumber();
            if (object.UserTotalWin != null)
                if ($util.Long)
                    (message.UserTotalWin = $util.Long.fromValue(object.UserTotalWin)).unsigned = false;
                else if (typeof object.UserTotalWin === "string")
                    message.UserTotalWin = parseInt(object.UserTotalWin, 10);
                else if (typeof object.UserTotalWin === "number")
                    message.UserTotalWin = object.UserTotalWin;
                else if (typeof object.UserTotalWin === "object")
                    message.UserTotalWin = new $util.LongBits(object.UserTotalWin.low >>> 0, object.UserTotalWin.high >>> 0).toNumber();
            if (object.BetRed != null)
                if ($util.Long)
                    (message.BetRed = $util.Long.fromValue(object.BetRed)).unsigned = false;
                else if (typeof object.BetRed === "string")
                    message.BetRed = parseInt(object.BetRed, 10);
                else if (typeof object.BetRed === "number")
                    message.BetRed = object.BetRed;
                else if (typeof object.BetRed === "object")
                    message.BetRed = new $util.LongBits(object.BetRed.low >>> 0, object.BetRed.high >>> 0).toNumber();
            if (object.BetBlack != null)
                if ($util.Long)
                    (message.BetBlack = $util.Long.fromValue(object.BetBlack)).unsigned = false;
                else if (typeof object.BetBlack === "string")
                    message.BetBlack = parseInt(object.BetBlack, 10);
                else if (typeof object.BetBlack === "number")
                    message.BetBlack = object.BetBlack;
                else if (typeof object.BetBlack === "object")
                    message.BetBlack = new $util.LongBits(object.BetBlack.low >>> 0, object.BetBlack.high >>> 0).toNumber();
            if (object.BetLuck != null)
                if ($util.Long)
                    (message.BetLuck = $util.Long.fromValue(object.BetLuck)).unsigned = false;
                else if (typeof object.BetLuck === "string")
                    message.BetLuck = parseInt(object.BetLuck, 10);
                else if (typeof object.BetLuck === "number")
                    message.BetLuck = object.BetLuck;
                else if (typeof object.BetLuck === "object")
                    message.BetLuck = new $util.LongBits(object.BetLuck.low >>> 0, object.BetLuck.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SceneUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.SceneUserInfo
         * @static
         * @param {rbwar.SceneUserInfo} message SceneUserInfo
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserTotalWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserTotalWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetRed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetRed = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetBlack = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetBlack = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetLuck = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetLuck = options.longs === String ? "0" : 0;
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
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (typeof message.UserScore === "number")
                    object.UserScore = options.longs === String ? String(message.UserScore) : message.UserScore;
                else
                    object.UserScore = options.longs === String ? $util.Long.prototype.toString.call(message.UserScore) : options.longs === Number ? new $util.LongBits(message.UserScore.low >>> 0, message.UserScore.high >>> 0).toNumber() : message.UserScore;
            if (message.UserTotalWin != null && message.hasOwnProperty("UserTotalWin"))
                if (typeof message.UserTotalWin === "number")
                    object.UserTotalWin = options.longs === String ? String(message.UserTotalWin) : message.UserTotalWin;
                else
                    object.UserTotalWin = options.longs === String ? $util.Long.prototype.toString.call(message.UserTotalWin) : options.longs === Number ? new $util.LongBits(message.UserTotalWin.low >>> 0, message.UserTotalWin.high >>> 0).toNumber() : message.UserTotalWin;
            if (message.BetRed != null && message.hasOwnProperty("BetRed"))
                if (typeof message.BetRed === "number")
                    object.BetRed = options.longs === String ? String(message.BetRed) : message.BetRed;
                else
                    object.BetRed = options.longs === String ? $util.Long.prototype.toString.call(message.BetRed) : options.longs === Number ? new $util.LongBits(message.BetRed.low >>> 0, message.BetRed.high >>> 0).toNumber() : message.BetRed;
            if (message.BetBlack != null && message.hasOwnProperty("BetBlack"))
                if (typeof message.BetBlack === "number")
                    object.BetBlack = options.longs === String ? String(message.BetBlack) : message.BetBlack;
                else
                    object.BetBlack = options.longs === String ? $util.Long.prototype.toString.call(message.BetBlack) : options.longs === Number ? new $util.LongBits(message.BetBlack.low >>> 0, message.BetBlack.high >>> 0).toNumber() : message.BetBlack;
            if (message.BetLuck != null && message.hasOwnProperty("BetLuck"))
                if (typeof message.BetLuck === "number")
                    object.BetLuck = options.longs === String ? String(message.BetLuck) : message.BetLuck;
                else
                    object.BetLuck = options.longs === String ? $util.Long.prototype.toString.call(message.BetLuck) : options.longs === Number ? new $util.LongBits(message.BetLuck.low >>> 0, message.BetLuck.high >>> 0).toNumber() : message.BetLuck;
            return object;
        };

        /**
         * Converts this SceneUserInfo to JSON.
         * @function toJSON
         * @memberof rbwar.SceneUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SceneUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SceneUserInfo;
    })();

    rbwar.SceneUserSettle = (function() {

        /**
         * Properties of a SceneUserSettle.
         * @memberof rbwar
         * @interface ISceneUserSettle
         * @property {Array.<rbwar.ISceneUserInfo>|null} [UserList] SceneUserSettle UserList
         */

        /**
         * Constructs a new SceneUserSettle.
         * @memberof rbwar
         * @classdesc Represents a SceneUserSettle.
         * @implements ISceneUserSettle
         * @constructor
         * @param {rbwar.ISceneUserSettle=} [properties] Properties to set
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
         * @member {Array.<rbwar.ISceneUserInfo>} UserList
         * @memberof rbwar.SceneUserSettle
         * @instance
         */
        SceneUserSettle.prototype.UserList = $util.emptyArray;

        /**
         * Creates a new SceneUserSettle instance using the specified properties.
         * @function create
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {rbwar.ISceneUserSettle=} [properties] Properties to set
         * @returns {rbwar.SceneUserSettle} SceneUserSettle instance
         */
        SceneUserSettle.create = function create(properties) {
            return new SceneUserSettle(properties);
        };

        /**
         * Encodes the specified SceneUserSettle message. Does not implicitly {@link rbwar.SceneUserSettle.verify|verify} messages.
         * @function encode
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {rbwar.ISceneUserSettle} message SceneUserSettle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneUserSettle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserList != null && message.UserList.length)
                for (var i = 0; i < message.UserList.length; ++i)
                    $root.rbwar.SceneUserInfo.encode(message.UserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SceneUserSettle message, length delimited. Does not implicitly {@link rbwar.SceneUserSettle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {rbwar.ISceneUserSettle} message SceneUserSettle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SceneUserSettle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SceneUserSettle message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.SceneUserSettle} SceneUserSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SceneUserSettle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.SceneUserSettle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserList && message.UserList.length))
                        message.UserList = [];
                    message.UserList.push($root.rbwar.SceneUserInfo.decode(reader, reader.uint32()));
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
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.SceneUserSettle} SceneUserSettle
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
         * @memberof rbwar.SceneUserSettle
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
                    var error = $root.rbwar.SceneUserInfo.verify(message.UserList[i]);
                    if (error)
                        return "UserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SceneUserSettle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.SceneUserSettle} SceneUserSettle
         */
        SceneUserSettle.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.SceneUserSettle)
                return object;
            var message = new $root.rbwar.SceneUserSettle();
            if (object.UserList) {
                if (!Array.isArray(object.UserList))
                    throw TypeError(".rbwar.SceneUserSettle.UserList: array expected");
                message.UserList = [];
                for (var i = 0; i < object.UserList.length; ++i) {
                    if (typeof object.UserList[i] !== "object")
                        throw TypeError(".rbwar.SceneUserSettle.UserList: object expected");
                    message.UserList[i] = $root.rbwar.SceneUserInfo.fromObject(object.UserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SceneUserSettle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.SceneUserSettle
         * @static
         * @param {rbwar.SceneUserSettle} message SceneUserSettle
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
                    object.UserList[j] = $root.rbwar.SceneUserInfo.toObject(message.UserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SceneUserSettle to JSON.
         * @function toJSON
         * @memberof rbwar.SceneUserSettle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SceneUserSettle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SceneUserSettle;
    })();

    rbwar.ExitFail = (function() {

        /**
         * Properties of an ExitFail.
         * @memberof rbwar
         * @interface IExitFail
         * @property {string|null} [FailReason] ExitFail FailReason
         */

        /**
         * Constructs a new ExitFail.
         * @memberof rbwar
         * @classdesc Represents an ExitFail.
         * @implements IExitFail
         * @constructor
         * @param {rbwar.IExitFail=} [properties] Properties to set
         */
        function ExitFail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitFail FailReason.
         * @member {string} FailReason
         * @memberof rbwar.ExitFail
         * @instance
         */
        ExitFail.prototype.FailReason = "";

        /**
         * Creates a new ExitFail instance using the specified properties.
         * @function create
         * @memberof rbwar.ExitFail
         * @static
         * @param {rbwar.IExitFail=} [properties] Properties to set
         * @returns {rbwar.ExitFail} ExitFail instance
         */
        ExitFail.create = function create(properties) {
            return new ExitFail(properties);
        };

        /**
         * Encodes the specified ExitFail message. Does not implicitly {@link rbwar.ExitFail.verify|verify} messages.
         * @function encode
         * @memberof rbwar.ExitFail
         * @static
         * @param {rbwar.IExitFail} message ExitFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitFail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FailReason != null && message.hasOwnProperty("FailReason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.FailReason);
            return writer;
        };

        /**
         * Encodes the specified ExitFail message, length delimited. Does not implicitly {@link rbwar.ExitFail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.ExitFail
         * @static
         * @param {rbwar.IExitFail} message ExitFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitFail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitFail message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.ExitFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.ExitFail} ExitFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitFail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.ExitFail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FailReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitFail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rbwar.ExitFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.ExitFail} ExitFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitFail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitFail message.
         * @function verify
         * @memberof rbwar.ExitFail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitFail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FailReason != null && message.hasOwnProperty("FailReason"))
                if (!$util.isString(message.FailReason))
                    return "FailReason: string expected";
            return null;
        };

        /**
         * Creates an ExitFail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.ExitFail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.ExitFail} ExitFail
         */
        ExitFail.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.ExitFail)
                return object;
            var message = new $root.rbwar.ExitFail();
            if (object.FailReason != null)
                message.FailReason = String(object.FailReason);
            return message;
        };

        /**
         * Creates a plain object from an ExitFail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.ExitFail
         * @static
         * @param {rbwar.ExitFail} message ExitFail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitFail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.FailReason = "";
            if (message.FailReason != null && message.hasOwnProperty("FailReason"))
                object.FailReason = message.FailReason;
            return object;
        };

        /**
         * Converts this ExitFail to JSON.
         * @function toJSON
         * @memberof rbwar.ExitFail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitFail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitFail;
    })();

    rbwar.KickOutUserMsg = (function() {

        /**
         * Properties of a KickOutUserMsg.
         * @memberof rbwar
         * @interface IKickOutUserMsg
         * @property {string|null} [KickOutReason] KickOutUserMsg KickOutReason
         */

        /**
         * Constructs a new KickOutUserMsg.
         * @memberof rbwar
         * @classdesc Represents a KickOutUserMsg.
         * @implements IKickOutUserMsg
         * @constructor
         * @param {rbwar.IKickOutUserMsg=} [properties] Properties to set
         */
        function KickOutUserMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickOutUserMsg KickOutReason.
         * @member {string} KickOutReason
         * @memberof rbwar.KickOutUserMsg
         * @instance
         */
        KickOutUserMsg.prototype.KickOutReason = "";

        /**
         * Creates a new KickOutUserMsg instance using the specified properties.
         * @function create
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {rbwar.IKickOutUserMsg=} [properties] Properties to set
         * @returns {rbwar.KickOutUserMsg} KickOutUserMsg instance
         */
        KickOutUserMsg.create = function create(properties) {
            return new KickOutUserMsg(properties);
        };

        /**
         * Encodes the specified KickOutUserMsg message. Does not implicitly {@link rbwar.KickOutUserMsg.verify|verify} messages.
         * @function encode
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {rbwar.IKickOutUserMsg} message KickOutUserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutUserMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.KickOutReason != null && message.hasOwnProperty("KickOutReason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.KickOutReason);
            return writer;
        };

        /**
         * Encodes the specified KickOutUserMsg message, length delimited. Does not implicitly {@link rbwar.KickOutUserMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {rbwar.IKickOutUserMsg} message KickOutUserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickOutUserMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickOutUserMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.KickOutUserMsg} KickOutUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutUserMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.KickOutUserMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.KickOutReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickOutUserMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.KickOutUserMsg} KickOutUserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickOutUserMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickOutUserMsg message.
         * @function verify
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickOutUserMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.KickOutReason != null && message.hasOwnProperty("KickOutReason"))
                if (!$util.isString(message.KickOutReason))
                    return "KickOutReason: string expected";
            return null;
        };

        /**
         * Creates a KickOutUserMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.KickOutUserMsg} KickOutUserMsg
         */
        KickOutUserMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.KickOutUserMsg)
                return object;
            var message = new $root.rbwar.KickOutUserMsg();
            if (object.KickOutReason != null)
                message.KickOutReason = String(object.KickOutReason);
            return message;
        };

        /**
         * Creates a plain object from a KickOutUserMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.KickOutUserMsg
         * @static
         * @param {rbwar.KickOutUserMsg} message KickOutUserMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickOutUserMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.KickOutReason = "";
            if (message.KickOutReason != null && message.hasOwnProperty("KickOutReason"))
                object.KickOutReason = message.KickOutReason;
            return object;
        };

        /**
         * Converts this KickOutUserMsg to JSON.
         * @function toJSON
         * @memberof rbwar.KickOutUserMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickOutUserMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickOutUserMsg;
    })();

    rbwar.RoomRolesInfoMsg = (function() {

        /**
         * Properties of a RoomRolesInfoMsg.
         * @memberof rbwar
         * @interface IRoomRolesInfoMsg
         * @property {Array.<number>|null} [BetArr] RoomRolesInfoMsg BetArr
         * @property {number|Long|null} [UserBetLimit] RoomRolesInfoMsg UserBetLimit
         */

        /**
         * Constructs a new RoomRolesInfoMsg.
         * @memberof rbwar
         * @classdesc Represents a RoomRolesInfoMsg.
         * @implements IRoomRolesInfoMsg
         * @constructor
         * @param {rbwar.IRoomRolesInfoMsg=} [properties] Properties to set
         */
        function RoomRolesInfoMsg(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomRolesInfoMsg BetArr.
         * @member {Array.<number>} BetArr
         * @memberof rbwar.RoomRolesInfoMsg
         * @instance
         */
        RoomRolesInfoMsg.prototype.BetArr = $util.emptyArray;

        /**
         * RoomRolesInfoMsg UserBetLimit.
         * @member {number|Long} UserBetLimit
         * @memberof rbwar.RoomRolesInfoMsg
         * @instance
         */
        RoomRolesInfoMsg.prototype.UserBetLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoomRolesInfoMsg instance using the specified properties.
         * @function create
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {rbwar.IRoomRolesInfoMsg=} [properties] Properties to set
         * @returns {rbwar.RoomRolesInfoMsg} RoomRolesInfoMsg instance
         */
        RoomRolesInfoMsg.create = function create(properties) {
            return new RoomRolesInfoMsg(properties);
        };

        /**
         * Encodes the specified RoomRolesInfoMsg message. Does not implicitly {@link rbwar.RoomRolesInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {rbwar.IRoomRolesInfoMsg} message RoomRolesInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRolesInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArr != null && message.BetArr.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetArr.length; ++i)
                    writer.int32(message.BetArr[i]);
                writer.ldelim();
            }
            if (message.UserBetLimit != null && message.hasOwnProperty("UserBetLimit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UserBetLimit);
            return writer;
        };

        /**
         * Encodes the specified RoomRolesInfoMsg message, length delimited. Does not implicitly {@link rbwar.RoomRolesInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {rbwar.IRoomRolesInfoMsg} message RoomRolesInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRolesInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomRolesInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.RoomRolesInfoMsg} RoomRolesInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRolesInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.RoomRolesInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetArr.push(reader.int32());
                    } else
                        message.BetArr.push(reader.int32());
                    break;
                case 2:
                    message.UserBetLimit = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomRolesInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.RoomRolesInfoMsg} RoomRolesInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRolesInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomRolesInfoMsg message.
         * @function verify
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomRolesInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i)
                    if (!$util.isInteger(message.BetArr[i]))
                        return "BetArr: integer[] expected";
            }
            if (message.UserBetLimit != null && message.hasOwnProperty("UserBetLimit"))
                if (!$util.isInteger(message.UserBetLimit) && !(message.UserBetLimit && $util.isInteger(message.UserBetLimit.low) && $util.isInteger(message.UserBetLimit.high)))
                    return "UserBetLimit: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoomRolesInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.RoomRolesInfoMsg} RoomRolesInfoMsg
         */
        RoomRolesInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.RoomRolesInfoMsg)
                return object;
            var message = new $root.rbwar.RoomRolesInfoMsg();
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".rbwar.RoomRolesInfoMsg.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i)
                    message.BetArr[i] = object.BetArr[i] | 0;
            }
            if (object.UserBetLimit != null)
                if ($util.Long)
                    (message.UserBetLimit = $util.Long.fromValue(object.UserBetLimit)).unsigned = false;
                else if (typeof object.UserBetLimit === "string")
                    message.UserBetLimit = parseInt(object.UserBetLimit, 10);
                else if (typeof object.UserBetLimit === "number")
                    message.UserBetLimit = object.UserBetLimit;
                else if (typeof object.UserBetLimit === "object")
                    message.UserBetLimit = new $util.LongBits(object.UserBetLimit.low >>> 0, object.UserBetLimit.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoomRolesInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.RoomRolesInfoMsg
         * @static
         * @param {rbwar.RoomRolesInfoMsg} message RoomRolesInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomRolesInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserBetLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserBetLimit = options.longs === String ? "0" : 0;
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = message.BetArr[j];
            }
            if (message.UserBetLimit != null && message.hasOwnProperty("UserBetLimit"))
                if (typeof message.UserBetLimit === "number")
                    object.UserBetLimit = options.longs === String ? String(message.UserBetLimit) : message.UserBetLimit;
                else
                    object.UserBetLimit = options.longs === String ? $util.Long.prototype.toString.call(message.UserBetLimit) : options.longs === Number ? new $util.LongBits(message.UserBetLimit.low >>> 0, message.UserBetLimit.high >>> 0).toNumber() : message.UserBetLimit;
            return object;
        };

        /**
         * Converts this RoomRolesInfoMsg to JSON.
         * @function toJSON
         * @memberof rbwar.RoomRolesInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomRolesInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomRolesInfoMsg;
    })();

    rbwar.RoomSenceInfoMsg = (function() {

        /**
         * Properties of a RoomSenceInfoMsg.
         * @memberof rbwar
         * @interface IRoomSenceInfoMsg
         * @property {number|Long|null} [RoomID] RoomSenceInfoMsg RoomID
         * @property {rbwar.ITrend|null} [TrendList] RoomSenceInfoMsg TrendList
         * @property {rbwar.IStatusMessage|null} [GameStatus] RoomSenceInfoMsg GameStatus
         * @property {number|Long|null} [BaseBet] RoomSenceInfoMsg BaseBet
         * @property {number|Long|null} [UserLimit] RoomSenceInfoMsg UserLimit
         */

        /**
         * Constructs a new RoomSenceInfoMsg.
         * @memberof rbwar
         * @classdesc Represents a RoomSenceInfoMsg.
         * @implements IRoomSenceInfoMsg
         * @constructor
         * @param {rbwar.IRoomSenceInfoMsg=} [properties] Properties to set
         */
        function RoomSenceInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomSenceInfoMsg RoomID.
         * @member {number|Long} RoomID
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         */
        RoomSenceInfoMsg.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomSenceInfoMsg TrendList.
         * @member {rbwar.ITrend|null|undefined} TrendList
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         */
        RoomSenceInfoMsg.prototype.TrendList = null;

        /**
         * RoomSenceInfoMsg GameStatus.
         * @member {rbwar.IStatusMessage|null|undefined} GameStatus
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         */
        RoomSenceInfoMsg.prototype.GameStatus = null;

        /**
         * RoomSenceInfoMsg BaseBet.
         * @member {number|Long} BaseBet
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         */
        RoomSenceInfoMsg.prototype.BaseBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomSenceInfoMsg UserLimit.
         * @member {number|Long} UserLimit
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         */
        RoomSenceInfoMsg.prototype.UserLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoomSenceInfoMsg instance using the specified properties.
         * @function create
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {rbwar.IRoomSenceInfoMsg=} [properties] Properties to set
         * @returns {rbwar.RoomSenceInfoMsg} RoomSenceInfoMsg instance
         */
        RoomSenceInfoMsg.create = function create(properties) {
            return new RoomSenceInfoMsg(properties);
        };

        /**
         * Encodes the specified RoomSenceInfoMsg message. Does not implicitly {@link rbwar.RoomSenceInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {rbwar.IRoomSenceInfoMsg} message RoomSenceInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSenceInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomID != null && message.hasOwnProperty("RoomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.RoomID);
            if (message.TrendList != null && message.hasOwnProperty("TrendList"))
                $root.rbwar.Trend.encode(message.TrendList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.GameStatus != null && message.hasOwnProperty("GameStatus"))
                $root.rbwar.StatusMessage.encode(message.GameStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.BaseBet != null && message.hasOwnProperty("BaseBet"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.BaseBet);
            if (message.UserLimit != null && message.hasOwnProperty("UserLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.UserLimit);
            return writer;
        };

        /**
         * Encodes the specified RoomSenceInfoMsg message, length delimited. Does not implicitly {@link rbwar.RoomSenceInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {rbwar.IRoomSenceInfoMsg} message RoomSenceInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomSenceInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomSenceInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.RoomSenceInfoMsg} RoomSenceInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSenceInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.RoomSenceInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomID = reader.int64();
                    break;
                case 2:
                    message.TrendList = $root.rbwar.Trend.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.GameStatus = $root.rbwar.StatusMessage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.BaseBet = reader.int64();
                    break;
                case 5:
                    message.UserLimit = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomSenceInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.RoomSenceInfoMsg} RoomSenceInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomSenceInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomSenceInfoMsg message.
         * @function verify
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomSenceInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomID != null && message.hasOwnProperty("RoomID"))
                if (!$util.isInteger(message.RoomID) && !(message.RoomID && $util.isInteger(message.RoomID.low) && $util.isInteger(message.RoomID.high)))
                    return "RoomID: integer|Long expected";
            if (message.TrendList != null && message.hasOwnProperty("TrendList")) {
                var error = $root.rbwar.Trend.verify(message.TrendList);
                if (error)
                    return "TrendList." + error;
            }
            if (message.GameStatus != null && message.hasOwnProperty("GameStatus")) {
                var error = $root.rbwar.StatusMessage.verify(message.GameStatus);
                if (error)
                    return "GameStatus." + error;
            }
            if (message.BaseBet != null && message.hasOwnProperty("BaseBet"))
                if (!$util.isInteger(message.BaseBet) && !(message.BaseBet && $util.isInteger(message.BaseBet.low) && $util.isInteger(message.BaseBet.high)))
                    return "BaseBet: integer|Long expected";
            if (message.UserLimit != null && message.hasOwnProperty("UserLimit"))
                if (!$util.isInteger(message.UserLimit) && !(message.UserLimit && $util.isInteger(message.UserLimit.low) && $util.isInteger(message.UserLimit.high)))
                    return "UserLimit: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoomSenceInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.RoomSenceInfoMsg} RoomSenceInfoMsg
         */
        RoomSenceInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.RoomSenceInfoMsg)
                return object;
            var message = new $root.rbwar.RoomSenceInfoMsg();
            if (object.RoomID != null)
                if ($util.Long)
                    (message.RoomID = $util.Long.fromValue(object.RoomID)).unsigned = false;
                else if (typeof object.RoomID === "string")
                    message.RoomID = parseInt(object.RoomID, 10);
                else if (typeof object.RoomID === "number")
                    message.RoomID = object.RoomID;
                else if (typeof object.RoomID === "object")
                    message.RoomID = new $util.LongBits(object.RoomID.low >>> 0, object.RoomID.high >>> 0).toNumber();
            if (object.TrendList != null) {
                if (typeof object.TrendList !== "object")
                    throw TypeError(".rbwar.RoomSenceInfoMsg.TrendList: object expected");
                message.TrendList = $root.rbwar.Trend.fromObject(object.TrendList);
            }
            if (object.GameStatus != null) {
                if (typeof object.GameStatus !== "object")
                    throw TypeError(".rbwar.RoomSenceInfoMsg.GameStatus: object expected");
                message.GameStatus = $root.rbwar.StatusMessage.fromObject(object.GameStatus);
            }
            if (object.BaseBet != null)
                if ($util.Long)
                    (message.BaseBet = $util.Long.fromValue(object.BaseBet)).unsigned = false;
                else if (typeof object.BaseBet === "string")
                    message.BaseBet = parseInt(object.BaseBet, 10);
                else if (typeof object.BaseBet === "number")
                    message.BaseBet = object.BaseBet;
                else if (typeof object.BaseBet === "object")
                    message.BaseBet = new $util.LongBits(object.BaseBet.low >>> 0, object.BaseBet.high >>> 0).toNumber();
            if (object.UserLimit != null)
                if ($util.Long)
                    (message.UserLimit = $util.Long.fromValue(object.UserLimit)).unsigned = false;
                else if (typeof object.UserLimit === "string")
                    message.UserLimit = parseInt(object.UserLimit, 10);
                else if (typeof object.UserLimit === "number")
                    message.UserLimit = object.UserLimit;
                else if (typeof object.UserLimit === "object")
                    message.UserLimit = new $util.LongBits(object.UserLimit.low >>> 0, object.UserLimit.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoomSenceInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.RoomSenceInfoMsg
         * @static
         * @param {rbwar.RoomSenceInfoMsg} message RoomSenceInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomSenceInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RoomID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RoomID = options.longs === String ? "0" : 0;
                object.TrendList = null;
                object.GameStatus = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BaseBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BaseBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserLimit = options.longs === String ? "0" : 0;
            }
            if (message.RoomID != null && message.hasOwnProperty("RoomID"))
                if (typeof message.RoomID === "number")
                    object.RoomID = options.longs === String ? String(message.RoomID) : message.RoomID;
                else
                    object.RoomID = options.longs === String ? $util.Long.prototype.toString.call(message.RoomID) : options.longs === Number ? new $util.LongBits(message.RoomID.low >>> 0, message.RoomID.high >>> 0).toNumber() : message.RoomID;
            if (message.TrendList != null && message.hasOwnProperty("TrendList"))
                object.TrendList = $root.rbwar.Trend.toObject(message.TrendList, options);
            if (message.GameStatus != null && message.hasOwnProperty("GameStatus"))
                object.GameStatus = $root.rbwar.StatusMessage.toObject(message.GameStatus, options);
            if (message.BaseBet != null && message.hasOwnProperty("BaseBet"))
                if (typeof message.BaseBet === "number")
                    object.BaseBet = options.longs === String ? String(message.BaseBet) : message.BaseBet;
                else
                    object.BaseBet = options.longs === String ? $util.Long.prototype.toString.call(message.BaseBet) : options.longs === Number ? new $util.LongBits(message.BaseBet.low >>> 0, message.BaseBet.high >>> 0).toNumber() : message.BaseBet;
            if (message.UserLimit != null && message.hasOwnProperty("UserLimit"))
                if (typeof message.UserLimit === "number")
                    object.UserLimit = options.longs === String ? String(message.UserLimit) : message.UserLimit;
                else
                    object.UserLimit = options.longs === String ? $util.Long.prototype.toString.call(message.UserLimit) : options.longs === Number ? new $util.LongBits(message.UserLimit.low >>> 0, message.UserLimit.high >>> 0).toNumber() : message.UserLimit;
            return object;
        };

        /**
         * Converts this RoomSenceInfoMsg to JSON.
         * @function toJSON
         * @memberof rbwar.RoomSenceInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomSenceInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomSenceInfoMsg;
    })();

    rbwar.tempCardMsg = (function() {

        /**
         * Properties of a tempCardMsg.
         * @memberof rbwar
         * @interface ItempCardMsg
         * @property {Uint8Array|null} [RedPoker] tempCardMsg RedPoker
         * @property {Uint8Array|null} [BlackPoker] tempCardMsg BlackPoker
         */

        /**
         * Constructs a new tempCardMsg.
         * @memberof rbwar
         * @classdesc Represents a tempCardMsg.
         * @implements ItempCardMsg
         * @constructor
         * @param {rbwar.ItempCardMsg=} [properties] Properties to set
         */
        function tempCardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tempCardMsg RedPoker.
         * @member {Uint8Array} RedPoker
         * @memberof rbwar.tempCardMsg
         * @instance
         */
        tempCardMsg.prototype.RedPoker = $util.newBuffer([]);

        /**
         * tempCardMsg BlackPoker.
         * @member {Uint8Array} BlackPoker
         * @memberof rbwar.tempCardMsg
         * @instance
         */
        tempCardMsg.prototype.BlackPoker = $util.newBuffer([]);

        /**
         * Creates a new tempCardMsg instance using the specified properties.
         * @function create
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {rbwar.ItempCardMsg=} [properties] Properties to set
         * @returns {rbwar.tempCardMsg} tempCardMsg instance
         */
        tempCardMsg.create = function create(properties) {
            return new tempCardMsg(properties);
        };

        /**
         * Encodes the specified tempCardMsg message. Does not implicitly {@link rbwar.tempCardMsg.verify|verify} messages.
         * @function encode
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {rbwar.ItempCardMsg} message tempCardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tempCardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.RedPoker);
            if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.BlackPoker);
            return writer;
        };

        /**
         * Encodes the specified tempCardMsg message, length delimited. Does not implicitly {@link rbwar.tempCardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {rbwar.ItempCardMsg} message tempCardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tempCardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tempCardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbwar.tempCardMsg} tempCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tempCardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbwar.tempCardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RedPoker = reader.bytes();
                    break;
                case 2:
                    message.BlackPoker = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tempCardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rbwar.tempCardMsg} tempCardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tempCardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tempCardMsg message.
         * @function verify
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tempCardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
                if (!(message.RedPoker && typeof message.RedPoker.length === "number" || $util.isString(message.RedPoker)))
                    return "RedPoker: buffer expected";
            if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
                if (!(message.BlackPoker && typeof message.BlackPoker.length === "number" || $util.isString(message.BlackPoker)))
                    return "BlackPoker: buffer expected";
            return null;
        };

        /**
         * Creates a tempCardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rbwar.tempCardMsg} tempCardMsg
         */
        tempCardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.rbwar.tempCardMsg)
                return object;
            var message = new $root.rbwar.tempCardMsg();
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
            return message;
        };

        /**
         * Creates a plain object from a tempCardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rbwar.tempCardMsg
         * @static
         * @param {rbwar.tempCardMsg} message tempCardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tempCardMsg.toObject = function toObject(message, options) {
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
            }
            if (message.RedPoker != null && message.hasOwnProperty("RedPoker"))
                object.RedPoker = options.bytes === String ? $util.base64.encode(message.RedPoker, 0, message.RedPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.RedPoker) : message.RedPoker;
            if (message.BlackPoker != null && message.hasOwnProperty("BlackPoker"))
                object.BlackPoker = options.bytes === String ? $util.base64.encode(message.BlackPoker, 0, message.BlackPoker.length) : options.bytes === Array ? Array.prototype.slice.call(message.BlackPoker) : message.BlackPoker;
            return object;
        };

        /**
         * Converts this tempCardMsg to JSON.
         * @function toJSON
         * @memberof rbwar.tempCardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tempCardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tempCardMsg;
    })();

    return rbwar;
})();

module.exports = $root;
