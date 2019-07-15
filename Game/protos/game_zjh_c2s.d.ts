import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** Properties of a C2SIntoGame. */
    interface IC2SIntoGame {

        /** C2SIntoGame userId */
        userId?: (number|null);

        /** C2SIntoGame userName */
        userName?: (string|null);
    }

    /** Represents a C2SIntoGame. */
    class C2SIntoGame implements IC2SIntoGame {

        /**
         * Constructs a new C2SIntoGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2SIntoGame);

        /** C2SIntoGame userId. */
        public userId: number;

        /** C2SIntoGame userName. */
        public userName: string;

        /**
         * Creates a new C2SIntoGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SIntoGame instance
         */
        public static create(properties?: msg.IC2SIntoGame): msg.C2SIntoGame;

        /**
         * Encodes the specified C2SIntoGame message. Does not implicitly {@link msg.C2SIntoGame.verify|verify} messages.
         * @param message C2SIntoGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2SIntoGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2SIntoGame message, length delimited. Does not implicitly {@link msg.C2SIntoGame.verify|verify} messages.
         * @param message C2SIntoGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2SIntoGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SIntoGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2SIntoGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2SIntoGame;

        /**
         * Decodes a C2SIntoGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2SIntoGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2SIntoGame;

        /**
         * Verifies a C2SIntoGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2SIntoGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2SIntoGame
         */
        public static fromObject(object: { [k: string]: any }): msg.C2SIntoGame;

        /**
         * Creates a plain object from a C2SIntoGame message. Also converts values to other types if specified.
         * @param message C2SIntoGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2SIntoGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2SIntoGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2SUserAction. */
    interface IC2SUserAction {

        /** C2SUserAction userId */
        userId?: (number|null);

        /** C2SUserAction option */
        option?: (string|null);

        /** C2SUserAction amount */
        amount?: (number|Long|null);
    }

    /** Represents a C2SUserAction. */
    class C2SUserAction implements IC2SUserAction {

        /**
         * Constructs a new C2SUserAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2SUserAction);

        /** C2SUserAction userId. */
        public userId: number;

        /** C2SUserAction option. */
        public option: string;

        /** C2SUserAction amount. */
        public amount: (number|Long);

        /**
         * Creates a new C2SUserAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SUserAction instance
         */
        public static create(properties?: msg.IC2SUserAction): msg.C2SUserAction;

        /**
         * Encodes the specified C2SUserAction message. Does not implicitly {@link msg.C2SUserAction.verify|verify} messages.
         * @param message C2SUserAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2SUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2SUserAction message, length delimited. Does not implicitly {@link msg.C2SUserAction.verify|verify} messages.
         * @param message C2SUserAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2SUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SUserAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2SUserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2SUserAction;

        /**
         * Decodes a C2SUserAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2SUserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2SUserAction;

        /**
         * Verifies a C2SUserAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2SUserAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2SUserAction
         */
        public static fromObject(object: { [k: string]: any }): msg.C2SUserAction;

        /**
         * Creates a plain object from a C2SUserAction message. Also converts values to other types if specified.
         * @param message C2SUserAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2SUserAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2SUserAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2SCompareCards. */
    interface IC2SCompareCards {

        /** C2SCompareCards firstUserId */
        firstUserId?: (number|null);

        /** C2SCompareCards secondUserId */
        secondUserId?: (number|null);
    }

    /** Represents a C2SCompareCards. */
    class C2SCompareCards implements IC2SCompareCards {

        /**
         * Constructs a new C2SCompareCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2SCompareCards);

        /** C2SCompareCards firstUserId. */
        public firstUserId: number;

        /** C2SCompareCards secondUserId. */
        public secondUserId: number;

        /**
         * Creates a new C2SCompareCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SCompareCards instance
         */
        public static create(properties?: msg.IC2SCompareCards): msg.C2SCompareCards;

        /**
         * Encodes the specified C2SCompareCards message. Does not implicitly {@link msg.C2SCompareCards.verify|verify} messages.
         * @param message C2SCompareCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2SCompareCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2SCompareCards message, length delimited. Does not implicitly {@link msg.C2SCompareCards.verify|verify} messages.
         * @param message C2SCompareCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2SCompareCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SCompareCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2SCompareCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2SCompareCards;

        /**
         * Decodes a C2SCompareCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2SCompareCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2SCompareCards;

        /**
         * Verifies a C2SCompareCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2SCompareCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2SCompareCards
         */
        public static fromObject(object: { [k: string]: any }): msg.C2SCompareCards;

        /**
         * Creates a plain object from a C2SCompareCards message. Also converts values to other types if specified.
         * @param message C2SCompareCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2SCompareCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2SCompareCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
