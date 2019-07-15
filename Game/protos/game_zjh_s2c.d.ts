import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** Properties of a S2CMsg. */
    interface IS2CMsg {

        /** S2CMsg mainCmd */
        mainCmd?: (number|null);

        /** S2CMsg subCmd */
        subCmd?: (number|null);

        /** S2CMsg buff */
        buff?: (Uint8Array|null);
    }

    /** Represents a S2CMsg. */
    class S2CMsg implements IS2CMsg {

        /**
         * Constructs a new S2CMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CMsg);

        /** S2CMsg mainCmd. */
        public mainCmd: number;

        /** S2CMsg subCmd. */
        public subCmd: number;

        /** S2CMsg buff. */
        public buff: Uint8Array;

        /**
         * Creates a new S2CMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CMsg instance
         */
        public static create(properties?: msg.IS2CMsg): msg.S2CMsg;

        /**
         * Encodes the specified S2CMsg message. Does not implicitly {@link msg.S2CMsg.verify|verify} messages.
         * @param message S2CMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CMsg message, length delimited. Does not implicitly {@link msg.S2CMsg.verify|verify} messages.
         * @param message S2CMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CMsg;

        /**
         * Decodes a S2CMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CMsg;

        /**
         * Verifies a S2CMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CMsg
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CMsg;

        /**
         * Creates a plain object from a S2CMsg message. Also converts values to other types if specified.
         * @param message S2CMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CTableInfo. */
    interface IS2CTableInfo {

        /** S2CTableInfo tableId */
        tableId?: (number|null);

        /** S2CTableInfo tableName */
        tableName?: (string|null);

        /** S2CTableInfo curStatus */
        curStatus?: (number|null);

        /** S2CTableInfo round */
        round?: (number|null);

        /** S2CTableInfo poolAmount */
        poolAmount?: (number|Long|null);

        /** S2CTableInfo totalRound */
        totalRound?: (number|null);

        /** S2CTableInfo minAction */
        minAction?: (number|Long|null);

        /** S2CTableInfo maxAction */
        maxAction?: (number|Long|null);

        /** S2CTableInfo userInfoArr */
        userInfoArr?: (msg.IS2CUserInfo[]|null);

        /** S2CTableInfo triggerTime */
        triggerTime?: (number|null);

        /** S2CTableInfo triggerEvent */
        triggerEvent?: (string|null);

        /** S2CTableInfo curUserInfo */
        curUserInfo?: (msg.IS2CUserInfo|null);

        /** S2CTableInfo banker */
        banker?: (msg.IS2CUserInfo|null);

        /** S2CTableInfo raiseAmount */
        raiseAmount?: (number[]|null);
    }

    /** Represents a S2CTableInfo. */
    class S2CTableInfo implements IS2CTableInfo {

        /**
         * Constructs a new S2CTableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CTableInfo);

        /** S2CTableInfo tableId. */
        public tableId: number;

        /** S2CTableInfo tableName. */
        public tableName: string;

        /** S2CTableInfo curStatus. */
        public curStatus: number;

        /** S2CTableInfo round. */
        public round: number;

        /** S2CTableInfo poolAmount. */
        public poolAmount: (number|Long);

        /** S2CTableInfo totalRound. */
        public totalRound: number;

        /** S2CTableInfo minAction. */
        public minAction: (number|Long);

        /** S2CTableInfo maxAction. */
        public maxAction: (number|Long);

        /** S2CTableInfo userInfoArr. */
        public userInfoArr: msg.IS2CUserInfo[];

        /** S2CTableInfo triggerTime. */
        public triggerTime: number;

        /** S2CTableInfo triggerEvent. */
        public triggerEvent: string;

        /** S2CTableInfo curUserInfo. */
        public curUserInfo?: (msg.IS2CUserInfo|null);

        /** S2CTableInfo banker. */
        public banker?: (msg.IS2CUserInfo|null);

        /** S2CTableInfo raiseAmount. */
        public raiseAmount: number[];

        /**
         * Creates a new S2CTableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CTableInfo instance
         */
        public static create(properties?: msg.IS2CTableInfo): msg.S2CTableInfo;

        /**
         * Encodes the specified S2CTableInfo message. Does not implicitly {@link msg.S2CTableInfo.verify|verify} messages.
         * @param message S2CTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CTableInfo message, length delimited. Does not implicitly {@link msg.S2CTableInfo.verify|verify} messages.
         * @param message S2CTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CTableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CTableInfo;

        /**
         * Decodes a S2CTableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CTableInfo;

        /**
         * Verifies a S2CTableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CTableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CTableInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CTableInfo;

        /**
         * Creates a plain object from a S2CTableInfo message. Also converts values to other types if specified.
         * @param message S2CTableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CTableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CTableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CCompareRes. */
    interface IS2CCompareRes {

        /** S2CCompareRes winId */
        winId?: (number|null);

        /** S2CCompareRes loseIds */
        loseIds?: (number[]|null);

        /** S2CCompareRes firstAmount */
        firstAmount?: (number|Long|null);

        /** S2CCompareRes firstId */
        firstId?: (number|null);
    }

    /** Represents a S2CCompareRes. */
    class S2CCompareRes implements IS2CCompareRes {

        /**
         * Constructs a new S2CCompareRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CCompareRes);

        /** S2CCompareRes winId. */
        public winId: number;

        /** S2CCompareRes loseIds. */
        public loseIds: number[];

        /** S2CCompareRes firstAmount. */
        public firstAmount: (number|Long);

        /** S2CCompareRes firstId. */
        public firstId: number;

        /**
         * Creates a new S2CCompareRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CCompareRes instance
         */
        public static create(properties?: msg.IS2CCompareRes): msg.S2CCompareRes;

        /**
         * Encodes the specified S2CCompareRes message. Does not implicitly {@link msg.S2CCompareRes.verify|verify} messages.
         * @param message S2CCompareRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CCompareRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CCompareRes message, length delimited. Does not implicitly {@link msg.S2CCompareRes.verify|verify} messages.
         * @param message S2CCompareRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CCompareRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CCompareRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CCompareRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CCompareRes;

        /**
         * Decodes a S2CCompareRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CCompareRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CCompareRes;

        /**
         * Verifies a S2CCompareRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CCompareRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CCompareRes
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CCompareRes;

        /**
         * Creates a plain object from a S2CCompareRes message. Also converts values to other types if specified.
         * @param message S2CCompareRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CCompareRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CCompareRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CUserInfo. */
    interface IS2CUserInfo {

        /** S2CUserInfo userId */
        userId?: (number|null);

        /** S2CUserInfo userName */
        userName?: (string|null);

        /** S2CUserInfo ticker */
        ticker?: (number|Long|null);

        /** S2CUserInfo head */
        head?: (string|null);

        /** S2CUserInfo amount */
        amount?: (number|Long|null);

        /** S2CUserInfo curActionAmount */
        curActionAmount?: (number|Long|null);

        /** S2CUserInfo chairId */
        chairId?: (number|null);

        /** S2CUserInfo curRaiseAmount */
        curRaiseAmount?: (number|null);

        /** S2CUserInfo curStatus */
        curStatus?: (number|null);

        /** S2CUserInfo followAmount */
        followAmount?: (number|Long|null);

        /** S2CUserInfo allInAmount */
        allInAmount?: (number|Long|null);
    }

    /** Represents a S2CUserInfo. */
    class S2CUserInfo implements IS2CUserInfo {

        /**
         * Constructs a new S2CUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CUserInfo);

        /** S2CUserInfo userId. */
        public userId: number;

        /** S2CUserInfo userName. */
        public userName: string;

        /** S2CUserInfo ticker. */
        public ticker: (number|Long);

        /** S2CUserInfo head. */
        public head: string;

        /** S2CUserInfo amount. */
        public amount: (number|Long);

        /** S2CUserInfo curActionAmount. */
        public curActionAmount: (number|Long);

        /** S2CUserInfo chairId. */
        public chairId: number;

        /** S2CUserInfo curRaiseAmount. */
        public curRaiseAmount: number;

        /** S2CUserInfo curStatus. */
        public curStatus: number;

        /** S2CUserInfo followAmount. */
        public followAmount: (number|Long);

        /** S2CUserInfo allInAmount. */
        public allInAmount: (number|Long);

        /**
         * Creates a new S2CUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CUserInfo instance
         */
        public static create(properties?: msg.IS2CUserInfo): msg.S2CUserInfo;

        /**
         * Encodes the specified S2CUserInfo message. Does not implicitly {@link msg.S2CUserInfo.verify|verify} messages.
         * @param message S2CUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CUserInfo message, length delimited. Does not implicitly {@link msg.S2CUserInfo.verify|verify} messages.
         * @param message S2CUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CUserInfo;

        /**
         * Decodes a S2CUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CUserInfo;

        /**
         * Verifies a S2CUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CUserInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CUserInfo;

        /**
         * Creates a plain object from a S2CUserInfo message. Also converts values to other types if specified.
         * @param message S2CUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CUserInfoArr. */
    interface IS2CUserInfoArr {

        /** S2CUserInfoArr userInfoArr */
        userInfoArr?: (msg.IS2CUserInfo[]|null);
    }

    /** Represents a S2CUserInfoArr. */
    class S2CUserInfoArr implements IS2CUserInfoArr {

        /**
         * Constructs a new S2CUserInfoArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CUserInfoArr);

        /** S2CUserInfoArr userInfoArr. */
        public userInfoArr: msg.IS2CUserInfo[];

        /**
         * Creates a new S2CUserInfoArr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CUserInfoArr instance
         */
        public static create(properties?: msg.IS2CUserInfoArr): msg.S2CUserInfoArr;

        /**
         * Encodes the specified S2CUserInfoArr message. Does not implicitly {@link msg.S2CUserInfoArr.verify|verify} messages.
         * @param message S2CUserInfoArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CUserInfoArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CUserInfoArr message, length delimited. Does not implicitly {@link msg.S2CUserInfoArr.verify|verify} messages.
         * @param message S2CUserInfoArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CUserInfoArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CUserInfoArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CUserInfoArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CUserInfoArr;

        /**
         * Decodes a S2CUserInfoArr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CUserInfoArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CUserInfoArr;

        /**
         * Verifies a S2CUserInfoArr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CUserInfoArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CUserInfoArr
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CUserInfoArr;

        /**
         * Creates a plain object from a S2CUserInfoArr message. Also converts values to other types if specified.
         * @param message S2CUserInfoArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CUserInfoArr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CUserInfoArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CUserActionInfo. */
    interface IS2CUserActionInfo {

        /** S2CUserActionInfo userId */
        userId?: (number|null);

        /** S2CUserActionInfo option */
        option?: (string|null);

        /** S2CUserActionInfo amount */
        amount?: (number|Long|null);

        /** S2CUserActionInfo userName */
        userName?: (string|null);

        /** S2CUserActionInfo curAmount */
        curAmount?: (number|Long|null);

        /** S2CUserActionInfo poolAmount */
        poolAmount?: (number|Long|null);
    }

    /** Represents a S2CUserActionInfo. */
    class S2CUserActionInfo implements IS2CUserActionInfo {

        /**
         * Constructs a new S2CUserActionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CUserActionInfo);

        /** S2CUserActionInfo userId. */
        public userId: number;

        /** S2CUserActionInfo option. */
        public option: string;

        /** S2CUserActionInfo amount. */
        public amount: (number|Long);

        /** S2CUserActionInfo userName. */
        public userName: string;

        /** S2CUserActionInfo curAmount. */
        public curAmount: (number|Long);

        /** S2CUserActionInfo poolAmount. */
        public poolAmount: (number|Long);

        /**
         * Creates a new S2CUserActionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CUserActionInfo instance
         */
        public static create(properties?: msg.IS2CUserActionInfo): msg.S2CUserActionInfo;

        /**
         * Encodes the specified S2CUserActionInfo message. Does not implicitly {@link msg.S2CUserActionInfo.verify|verify} messages.
         * @param message S2CUserActionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CUserActionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CUserActionInfo message, length delimited. Does not implicitly {@link msg.S2CUserActionInfo.verify|verify} messages.
         * @param message S2CUserActionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CUserActionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CUserActionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CUserActionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CUserActionInfo;

        /**
         * Decodes a S2CUserActionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CUserActionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CUserActionInfo;

        /**
         * Verifies a S2CUserActionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CUserActionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CUserActionInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CUserActionInfo;

        /**
         * Creates a plain object from a S2CUserActionInfo message. Also converts values to other types if specified.
         * @param message S2CUserActionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CUserActionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CUserActionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CUserSeeCards. */
    interface IS2CUserSeeCards {

        /** S2CUserSeeCards userId */
        userId?: (number|null);

        /** S2CUserSeeCards cards */
        cards?: (Uint8Array|null);

        /** S2CUserSeeCards cardType */
        cardType?: (number|null);
    }

    /** Represents a S2CUserSeeCards. */
    class S2CUserSeeCards implements IS2CUserSeeCards {

        /**
         * Constructs a new S2CUserSeeCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CUserSeeCards);

        /** S2CUserSeeCards userId. */
        public userId: number;

        /** S2CUserSeeCards cards. */
        public cards: Uint8Array;

        /** S2CUserSeeCards cardType. */
        public cardType: number;

        /**
         * Creates a new S2CUserSeeCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CUserSeeCards instance
         */
        public static create(properties?: msg.IS2CUserSeeCards): msg.S2CUserSeeCards;

        /**
         * Encodes the specified S2CUserSeeCards message. Does not implicitly {@link msg.S2CUserSeeCards.verify|verify} messages.
         * @param message S2CUserSeeCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CUserSeeCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CUserSeeCards message, length delimited. Does not implicitly {@link msg.S2CUserSeeCards.verify|verify} messages.
         * @param message S2CUserSeeCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CUserSeeCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CUserSeeCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CUserSeeCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CUserSeeCards;

        /**
         * Decodes a S2CUserSeeCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CUserSeeCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CUserSeeCards;

        /**
         * Verifies a S2CUserSeeCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CUserSeeCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CUserSeeCards
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CUserSeeCards;

        /**
         * Creates a plain object from a S2CUserSeeCards message. Also converts values to other types if specified.
         * @param message S2CUserSeeCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CUserSeeCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CUserSeeCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CEndGame. */
    interface IS2CEndGame {

        /** S2CEndGame winner */
        winner?: (msg.IS2CUserInfo|null);

        /** S2CEndGame winAmount */
        winAmount?: (number|Long|null);

        /** S2CEndGame comparedUserArr */
        comparedUserArr?: (msg.IS2CUserSeeCards[]|null);

        /** S2CEndGame loserAmount */
        loserAmount?: (msg.IS2CUserAmount[]|null);
    }

    /** Represents a S2CEndGame. */
    class S2CEndGame implements IS2CEndGame {

        /**
         * Constructs a new S2CEndGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CEndGame);

        /** S2CEndGame winner. */
        public winner?: (msg.IS2CUserInfo|null);

        /** S2CEndGame winAmount. */
        public winAmount: (number|Long);

        /** S2CEndGame comparedUserArr. */
        public comparedUserArr: msg.IS2CUserSeeCards[];

        /** S2CEndGame loserAmount. */
        public loserAmount: msg.IS2CUserAmount[];

        /**
         * Creates a new S2CEndGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CEndGame instance
         */
        public static create(properties?: msg.IS2CEndGame): msg.S2CEndGame;

        /**
         * Encodes the specified S2CEndGame message. Does not implicitly {@link msg.S2CEndGame.verify|verify} messages.
         * @param message S2CEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CEndGame message, length delimited. Does not implicitly {@link msg.S2CEndGame.verify|verify} messages.
         * @param message S2CEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CEndGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CEndGame;

        /**
         * Decodes a S2CEndGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CEndGame;

        /**
         * Verifies a S2CEndGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CEndGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CEndGame
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CEndGame;

        /**
         * Creates a plain object from a S2CEndGame message. Also converts values to other types if specified.
         * @param message S2CEndGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CEndGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CUserAmount. */
    interface IS2CUserAmount {

        /** S2CUserAmount userId */
        userId?: (number|null);

        /** S2CUserAmount amount */
        amount?: (number|Long|null);
    }

    /** Represents a S2CUserAmount. */
    class S2CUserAmount implements IS2CUserAmount {

        /**
         * Constructs a new S2CUserAmount.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CUserAmount);

        /** S2CUserAmount userId. */
        public userId: number;

        /** S2CUserAmount amount. */
        public amount: (number|Long);

        /**
         * Creates a new S2CUserAmount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CUserAmount instance
         */
        public static create(properties?: msg.IS2CUserAmount): msg.S2CUserAmount;

        /**
         * Encodes the specified S2CUserAmount message. Does not implicitly {@link msg.S2CUserAmount.verify|verify} messages.
         * @param message S2CUserAmount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CUserAmount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CUserAmount message, length delimited. Does not implicitly {@link msg.S2CUserAmount.verify|verify} messages.
         * @param message S2CUserAmount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CUserAmount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CUserAmount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CUserAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CUserAmount;

        /**
         * Decodes a S2CUserAmount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CUserAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CUserAmount;

        /**
         * Verifies a S2CUserAmount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CUserAmount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CUserAmount
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CUserAmount;

        /**
         * Creates a plain object from a S2CUserAmount message. Also converts values to other types if specified.
         * @param message S2CUserAmount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CUserAmount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CUserAmount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CTickerStart. */
    interface IS2CTickerStart {

        /** S2CTickerStart ticker */
        ticker?: (number|null);
    }

    /** Represents a S2CTickerStart. */
    class S2CTickerStart implements IS2CTickerStart {

        /**
         * Constructs a new S2CTickerStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IS2CTickerStart);

        /** S2CTickerStart ticker. */
        public ticker: number;

        /**
         * Creates a new S2CTickerStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CTickerStart instance
         */
        public static create(properties?: msg.IS2CTickerStart): msg.S2CTickerStart;

        /**
         * Encodes the specified S2CTickerStart message. Does not implicitly {@link msg.S2CTickerStart.verify|verify} messages.
         * @param message S2CTickerStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IS2CTickerStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CTickerStart message, length delimited. Does not implicitly {@link msg.S2CTickerStart.verify|verify} messages.
         * @param message S2CTickerStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IS2CTickerStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CTickerStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CTickerStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.S2CTickerStart;

        /**
         * Decodes a S2CTickerStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CTickerStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.S2CTickerStart;

        /**
         * Verifies a S2CTickerStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CTickerStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CTickerStart
         */
        public static fromObject(object: { [k: string]: any }): msg.S2CTickerStart;

        /**
         * Creates a plain object from a S2CTickerStart message. Also converts values to other types if specified.
         * @param message S2CTickerStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.S2CTickerStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CTickerStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
