import * as $protobuf from "protobufjs";
/** CardsType enum. */
namespace CardsType {

    /** Normal value */
    let Normal: number;

    /** BlackJack value */
    let BlackJack: number;

    /** FiveDragon value */
    let FiveDragon: number;

    /** Point21 value */
    let Point21: number;

    /** Other value */
    let Other: number;

    /** Bust value */
    let Bust: number;
}

/** Represents a StatusMessage. */
export class StatusMessage implements IStatusMessage {

    /**
     * Constructs a new StatusMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatusMessage);

    /** StatusMessage Status. */
    public Status: number;

    /** StatusMessage StatusTime. */
    public StatusTime: number;

    /**
     * Creates a new StatusMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StatusMessage instance
     */
    public static create(properties?: IStatusMessage): StatusMessage;

    /**
     * Encodes the specified StatusMessage message. Does not implicitly {@link StatusMessage.verify|verify} messages.
     * @param message StatusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StatusMessage message, length delimited. Does not implicitly {@link StatusMessage.verify|verify} messages.
     * @param message StatusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StatusMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StatusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusMessage;

    /**
     * Decodes a StatusMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StatusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusMessage;

    /**
     * Verifies a StatusMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StatusMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StatusMessage
     */
    public static fromObject(object: { [k: string]: any }): StatusMessage;

    /**
     * Creates a plain object from a StatusMessage message. Also converts values to other types if specified.
     * @param message StatusMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StatusMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a CurrentSeat. */
export class CurrentSeat implements ICurrentSeat {

    /**
     * Constructs a new CurrentSeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICurrentSeat);

    /** CurrentSeat Seat. */
    public Seat: number;

    /**
     * Creates a new CurrentSeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CurrentSeat instance
     */
    public static create(properties?: ICurrentSeat): CurrentSeat;

    /**
     * Encodes the specified CurrentSeat message. Does not implicitly {@link CurrentSeat.verify|verify} messages.
     * @param message CurrentSeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICurrentSeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CurrentSeat message, length delimited. Does not implicitly {@link CurrentSeat.verify|verify} messages.
     * @param message CurrentSeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICurrentSeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CurrentSeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CurrentSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CurrentSeat;

    /**
     * Decodes a CurrentSeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CurrentSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CurrentSeat;

    /**
     * Verifies a CurrentSeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CurrentSeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CurrentSeat
     */
    public static fromObject(object: { [k: string]: any }): CurrentSeat;

    /**
     * Creates a plain object from a CurrentSeat message. Also converts values to other types if specified.
     * @param message CurrentSeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CurrentSeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CurrentSeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BetFailMessage. */
export class BetFailMessage implements IBetFailMessage {

    /**
     * Constructs a new BetFailMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBetFailMessage);

    /** BetFailMessage FailMessage. */
    public FailMessage: string;

    /**
     * Creates a new BetFailMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetFailMessage instance
     */
    public static create(properties?: IBetFailMessage): BetFailMessage;

    /**
     * Encodes the specified BetFailMessage message. Does not implicitly {@link BetFailMessage.verify|verify} messages.
     * @param message BetFailMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBetFailMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BetFailMessage message, length delimited. Does not implicitly {@link BetFailMessage.verify|verify} messages.
     * @param message BetFailMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBetFailMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetFailMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BetFailMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BetFailMessage;

    /**
     * Decodes a BetFailMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BetFailMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BetFailMessage;

    /**
     * Verifies a BetFailMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BetFailMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BetFailMessage
     */
    public static fromObject(object: { [k: string]: any }): BetFailMessage;

    /**
     * Creates a plain object from a BetFailMessage message. Also converts values to other types if specified.
     * @param message BetFailMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BetFailMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BetFailMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BetSuccessMessage. */
export class BetSuccessMessage implements IBetSuccessMessage {

    /**
     * Constructs a new BetSuccessMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBetSuccessMessage);

    /** BetSuccessMessage SeatId. */
    public SeatId: number;

    /** BetSuccessMessage BetIndex. */
    public BetIndex: number;

    /** BetSuccessMessage BetCardsIndex. */
    public BetCardsIndex: number;

    /** BetSuccessMessage UserID. */
    public UserID: (number|Long);

    /** BetSuccessMessage BetNum. */
    public BetNum: (number|Long);

    /**
     * Creates a new BetSuccessMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetSuccessMessage instance
     */
    public static create(properties?: IBetSuccessMessage): BetSuccessMessage;

    /**
     * Encodes the specified BetSuccessMessage message. Does not implicitly {@link BetSuccessMessage.verify|verify} messages.
     * @param message BetSuccessMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBetSuccessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BetSuccessMessage message, length delimited. Does not implicitly {@link BetSuccessMessage.verify|verify} messages.
     * @param message BetSuccessMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBetSuccessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetSuccessMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BetSuccessMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BetSuccessMessage;

    /**
     * Decodes a BetSuccessMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BetSuccessMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BetSuccessMessage;

    /**
     * Verifies a BetSuccessMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BetSuccessMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BetSuccessMessage
     */
    public static fromObject(object: { [k: string]: any }): BetSuccessMessage;

    /**
     * Creates a plain object from a BetSuccessMessage message. Also converts values to other types if specified.
     * @param message BetSuccessMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BetSuccessMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BetSuccessMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a FaPai. */
export class FaPai implements IFaPai {

    /**
     * Constructs a new FaPai.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFaPai);

    /** FaPai UserPaiInfoArr. */
    public UserPaiInfoArr: IUserPaiInfo[];

    /** FaPai Cards. */
    public Cards: Uint8Array;

    /**
     * Creates a new FaPai instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FaPai instance
     */
    public static create(properties?: IFaPai): FaPai;

    /**
     * Encodes the specified FaPai message. Does not implicitly {@link FaPai.verify|verify} messages.
     * @param message FaPai message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFaPai, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FaPai message, length delimited. Does not implicitly {@link FaPai.verify|verify} messages.
     * @param message FaPai message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFaPai, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FaPai message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FaPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FaPai;

    /**
     * Decodes a FaPai message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FaPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FaPai;

    /**
     * Verifies a FaPai message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FaPai message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FaPai
     */
    public static fromObject(object: { [k: string]: any }): FaPai;

    /**
     * Creates a plain object from a FaPai message. Also converts values to other types if specified.
     * @param message FaPai
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FaPai, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FaPai to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a FaPaiOne. */
export class FaPaiOne implements IFaPaiOne {

    /**
     * Constructs a new FaPaiOne.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFaPaiOne);

    /** FaPaiOne SeatId. */
    public SeatId: number;

    /** FaPaiOne Cards. */
    public Cards: Uint8Array;

    /**
     * Creates a new FaPaiOne instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FaPaiOne instance
     */
    public static create(properties?: IFaPaiOne): FaPaiOne;

    /**
     * Encodes the specified FaPaiOne message. Does not implicitly {@link FaPaiOne.verify|verify} messages.
     * @param message FaPaiOne message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFaPaiOne, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FaPaiOne message, length delimited. Does not implicitly {@link FaPaiOne.verify|verify} messages.
     * @param message FaPaiOne message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFaPaiOne, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FaPaiOne message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FaPaiOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FaPaiOne;

    /**
     * Decodes a FaPaiOne message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FaPaiOne
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FaPaiOne;

    /**
     * Verifies a FaPaiOne message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FaPaiOne message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FaPaiOne
     */
    public static fromObject(object: { [k: string]: any }): FaPaiOne;

    /**
     * Creates a plain object from a FaPaiOne message. Also converts values to other types if specified.
     * @param message FaPaiOne
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FaPaiOne, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FaPaiOne to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserPaiInfo. */
export class UserPaiInfo implements IUserPaiInfo {

    /**
     * Constructs a new UserPaiInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserPaiInfo);

    /** UserPaiInfo SeatId. */
    public SeatId: number;

    /** UserPaiInfo CardArr. */
    public CardArr: Uint8Array;

    /**
     * Creates a new UserPaiInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserPaiInfo instance
     */
    public static create(properties?: IUserPaiInfo): UserPaiInfo;

    /**
     * Encodes the specified UserPaiInfo message. Does not implicitly {@link UserPaiInfo.verify|verify} messages.
     * @param message UserPaiInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserPaiInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserPaiInfo message, length delimited. Does not implicitly {@link UserPaiInfo.verify|verify} messages.
     * @param message UserPaiInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserPaiInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserPaiInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserPaiInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPaiInfo;

    /**
     * Decodes a UserPaiInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserPaiInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPaiInfo;

    /**
     * Verifies a UserPaiInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserPaiInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserPaiInfo
     */
    public static fromObject(object: { [k: string]: any }): UserPaiInfo;

    /**
     * Creates a plain object from a UserPaiInfo message. Also converts values to other types if specified.
     * @param message UserPaiInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserPaiInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserPaiInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ZhuangJiaAnPai. */
export class ZhuangJiaAnPai implements IZhuangJiaAnPai {

    /**
     * Constructs a new ZhuangJiaAnPai.
     * @param [properties] Properties to set
     */
    constructor(properties?: IZhuangJiaAnPai);

    /** ZhuangJiaAnPai Cards. */
    public Cards: Uint8Array;

    /**
     * Creates a new ZhuangJiaAnPai instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZhuangJiaAnPai instance
     */
    public static create(properties?: IZhuangJiaAnPai): ZhuangJiaAnPai;

    /**
     * Encodes the specified ZhuangJiaAnPai message. Does not implicitly {@link ZhuangJiaAnPai.verify|verify} messages.
     * @param message ZhuangJiaAnPai message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IZhuangJiaAnPai, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ZhuangJiaAnPai message, length delimited. Does not implicitly {@link ZhuangJiaAnPai.verify|verify} messages.
     * @param message ZhuangJiaAnPai message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IZhuangJiaAnPai, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZhuangJiaAnPai message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ZhuangJiaAnPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZhuangJiaAnPai;

    /**
     * Decodes a ZhuangJiaAnPai message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ZhuangJiaAnPai
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZhuangJiaAnPai;

    /**
     * Verifies a ZhuangJiaAnPai message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ZhuangJiaAnPai message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ZhuangJiaAnPai
     */
    public static fromObject(object: { [k: string]: any }): ZhuangJiaAnPai;

    /**
     * Creates a plain object from a ZhuangJiaAnPai message. Also converts values to other types if specified.
     * @param message ZhuangJiaAnPai
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ZhuangJiaAnPai, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ZhuangJiaAnPai to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a HandCards. */
export class HandCards implements IHandCards {

    /**
     * Constructs a new HandCards.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandCards);

    /** HandCards Cards. */
    public Cards: Uint8Array;

    /**
     * Creates a new HandCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandCards instance
     */
    public static create(properties?: IHandCards): HandCards;

    /**
     * Encodes the specified HandCards message. Does not implicitly {@link HandCards.verify|verify} messages.
     * @param message HandCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HandCards message, length delimited. Does not implicitly {@link HandCards.verify|verify} messages.
     * @param message HandCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandCards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HandCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HandCards;

    /**
     * Decodes a HandCards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HandCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HandCards;

    /**
     * Verifies a HandCards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HandCards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HandCards
     */
    public static fromObject(object: { [k: string]: any }): HandCards;

    /**
     * Creates a plain object from a HandCards message. Also converts values to other types if specified.
     * @param message HandCards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HandCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HandCards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SeatUser. */
export class SeatUser implements ISeatUser {

    /**
     * Constructs a new SeatUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISeatUser);

    /** SeatUser Nick. */
    public Nick: string;

    /** SeatUser Head. */
    public Head: number;

    /** SeatUser Score. */
    public Score: (number|Long);

    /** SeatUser IsBigWinner. */
    public IsBigWinner: boolean;

    /** SeatUser IsMaster. */
    public IsMaster: boolean;

    /** SeatUser SeatId. */
    public SeatId: number;

    /** SeatUser Cards0. */
    public Cards0: Uint8Array;

    /** SeatUser Cards1. */
    public Cards1: Uint8Array;

    /** SeatUser CardsBet0. */
    public CardsBet0: (number|Long);

    /** SeatUser CardsBet1. */
    public CardsBet1: (number|Long);

    /** SeatUser IsBuyInsure. */
    public IsBuyInsure: boolean;

    /**
     * Creates a new SeatUser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeatUser instance
     */
    public static create(properties?: ISeatUser): SeatUser;

    /**
     * Encodes the specified SeatUser message. Does not implicitly {@link SeatUser.verify|verify} messages.
     * @param message SeatUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISeatUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SeatUser message, length delimited. Does not implicitly {@link SeatUser.verify|verify} messages.
     * @param message SeatUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISeatUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SeatUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SeatUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SeatUser;

    /**
     * Decodes a SeatUser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SeatUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SeatUser;

    /**
     * Verifies a SeatUser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SeatUser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SeatUser
     */
    public static fromObject(object: { [k: string]: any }): SeatUser;

    /**
     * Creates a plain object from a SeatUser message. Also converts values to other types if specified.
     * @param message SeatUser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SeatUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SeatUser to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SceneMessage. */
export class SceneMessage implements ISceneMessage {

    /**
     * Constructs a new SceneMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISceneMessage);

    /** SceneMessage UserData. */
    public UserData: ISeatUser[];

    /** SceneMessage GameStatus. */
    public GameStatus: number;

    /** SceneMessage CurrentAskSeat. */
    public CurrentAskSeat: number;

    /**
     * Creates a new SceneMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SceneMessage instance
     */
    public static create(properties?: ISceneMessage): SceneMessage;

    /**
     * Encodes the specified SceneMessage message. Does not implicitly {@link SceneMessage.verify|verify} messages.
     * @param message SceneMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISceneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SceneMessage message, length delimited. Does not implicitly {@link SceneMessage.verify|verify} messages.
     * @param message SceneMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISceneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SceneMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SceneMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SceneMessage;

    /**
     * Decodes a SceneMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SceneMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SceneMessage;

    /**
     * Verifies a SceneMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SceneMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SceneMessage
     */
    public static fromObject(object: { [k: string]: any }): SceneMessage;

    /**
     * Creates a plain object from a SceneMessage message. Also converts values to other types if specified.
     * @param message SceneMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SceneMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SceneMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserSitDown. */
export class UserSitDown implements IUserSitDown {

    /**
     * Constructs a new UserSitDown.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSitDown);

    /** UserSitDown ChairNo. */
    public ChairNo: number;

    /**
     * Creates a new UserSitDown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSitDown instance
     */
    public static create(properties?: IUserSitDown): UserSitDown;

    /**
     * Encodes the specified UserSitDown message. Does not implicitly {@link UserSitDown.verify|verify} messages.
     * @param message UserSitDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSitDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserSitDown message, length delimited. Does not implicitly {@link UserSitDown.verify|verify} messages.
     * @param message UserSitDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserSitDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSitDown message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSitDown;

    /**
     * Decodes a UserSitDown message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSitDown;

    /**
     * Verifies a UserSitDown message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserSitDown message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserSitDown
     */
    public static fromObject(object: { [k: string]: any }): UserSitDown;

    /**
     * Creates a plain object from a UserSitDown message. Also converts values to other types if specified.
     * @param message UserSitDown
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserSitDown, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserSitDown to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserSitDownFail. */
export class UserSitDownFail implements IUserSitDownFail {

    /**
     * Constructs a new UserSitDownFail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSitDownFail);

    /** UserSitDownFail FailNo. */
    public FailNo: number;

    /**
     * Creates a new UserSitDownFail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSitDownFail instance
     */
    public static create(properties?: IUserSitDownFail): UserSitDownFail;

    /**
     * Encodes the specified UserSitDownFail message. Does not implicitly {@link UserSitDownFail.verify|verify} messages.
     * @param message UserSitDownFail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSitDownFail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserSitDownFail message, length delimited. Does not implicitly {@link UserSitDownFail.verify|verify} messages.
     * @param message UserSitDownFail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserSitDownFail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSitDownFail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSitDownFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSitDownFail;

    /**
     * Decodes a UserSitDownFail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserSitDownFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSitDownFail;

    /**
     * Verifies a UserSitDownFail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserSitDownFail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserSitDownFail
     */
    public static fromObject(object: { [k: string]: any }): UserSitDownFail;

    /**
     * Creates a plain object from a UserSitDownFail message. Also converts values to other types if specified.
     * @param message UserSitDownFail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserSitDownFail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserSitDownFail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SettleMsg. */
export class SettleMsg implements ISettleMsg {

    /**
     * Constructs a new SettleMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISettleMsg);

    /** SettleMsg UserId. */
    public UserId: number;

    /** SettleMsg UserWinLoss. */
    public UserWinLoss: (number|Long);

    /** SettleMsg ZhuangWinLoss. */
    public ZhuangWinLoss: (number|Long);

    /**
     * Creates a new SettleMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SettleMsg instance
     */
    public static create(properties?: ISettleMsg): SettleMsg;

    /**
     * Encodes the specified SettleMsg message. Does not implicitly {@link SettleMsg.verify|verify} messages.
     * @param message SettleMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISettleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SettleMsg message, length delimited. Does not implicitly {@link SettleMsg.verify|verify} messages.
     * @param message SettleMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISettleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SettleMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SettleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SettleMsg;

    /**
     * Decodes a SettleMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SettleMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SettleMsg;

    /**
     * Verifies a SettleMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SettleMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SettleMsg
     */
    public static fromObject(object: { [k: string]: any }): SettleMsg;

    /**
     * Creates a plain object from a SettleMsg message. Also converts values to other types if specified.
     * @param message SettleMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SettleMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SettleMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Bet. */
export class Bet implements IBet {

    /**
     * Constructs a new Bet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet);

    /** Bet BetCardsIndex. */
    public BetCardsIndex: number;

    /** Bet BetIndex. */
    public BetIndex: number;

    /**
     * Creates a new Bet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet instance
     */
    public static create(properties?: IBet): Bet;

    /**
     * Encodes the specified Bet message. Does not implicitly {@link Bet.verify|verify} messages.
     * @param message Bet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Bet message, length delimited. Does not implicitly {@link Bet.verify|verify} messages.
     * @param message Bet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet;

    /**
     * Decodes a Bet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bet;

    /**
     * Verifies a Bet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Bet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bet
     */
    public static fromObject(object: { [k: string]: any }): Bet;

    /**
     * Creates a plain object from a Bet message. Also converts values to other types if specified.
     * @param message Bet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Bet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AskDo. */
export class AskDo implements IAskDo {

    /**
     * Constructs a new AskDo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAskDo);

    /** AskDo GetPoker. */
    public GetPoker: number;

    /** AskDo DepartPoker. */
    public DepartPoker: number;

    /** AskDo DoubleBet. */
    public DoubleBet: number;

    /** AskDo Stop. */
    public Stop: number;

    /** AskDo GiveUp. */
    public GiveUp: number;

    /**
     * Creates a new AskDo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AskDo instance
     */
    public static create(properties?: IAskDo): AskDo;

    /**
     * Encodes the specified AskDo message. Does not implicitly {@link AskDo.verify|verify} messages.
     * @param message AskDo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAskDo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AskDo message, length delimited. Does not implicitly {@link AskDo.verify|verify} messages.
     * @param message AskDo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAskDo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AskDo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AskDo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AskDo;

    /**
     * Decodes an AskDo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AskDo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AskDo;

    /**
     * Verifies an AskDo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AskDo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AskDo
     */
    public static fromObject(object: { [k: string]: any }): AskDo;

    /**
     * Creates a plain object from an AskDo message. Also converts values to other types if specified.
     * @param message AskDo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AskDo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AskDo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BuyInsure. */
export class BuyInsure implements IBuyInsure {

    /**
     * Constructs a new BuyInsure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBuyInsure);

    /** BuyInsure Buy. */
    public Buy: number;

    /** BuyInsure NotBuy. */
    public NotBuy: number;

    /**
     * Creates a new BuyInsure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuyInsure instance
     */
    public static create(properties?: IBuyInsure): BuyInsure;

    /**
     * Encodes the specified BuyInsure message. Does not implicitly {@link BuyInsure.verify|verify} messages.
     * @param message BuyInsure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBuyInsure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BuyInsure message, length delimited. Does not implicitly {@link BuyInsure.verify|verify} messages.
     * @param message BuyInsure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBuyInsure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuyInsure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BuyInsure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyInsure;

    /**
     * Decodes a BuyInsure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BuyInsure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyInsure;

    /**
     * Verifies a BuyInsure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BuyInsure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BuyInsure
     */
    public static fromObject(object: { [k: string]: any }): BuyInsure;

    /**
     * Creates a plain object from a BuyInsure message. Also converts values to other types if specified.
     * @param message BuyInsure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BuyInsure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BuyInsure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a DoubleBet. */
export class DoubleBet implements IDoubleBet {

    /**
     * Constructs a new DoubleBet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDoubleBet);

    /** DoubleBet BetCardsIndex. */
    public BetCardsIndex: number;

    /** DoubleBet CurrentBet. */
    public CurrentBet: (number|Long);

    /**
     * Creates a new DoubleBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DoubleBet instance
     */
    public static create(properties?: IDoubleBet): DoubleBet;

    /**
     * Encodes the specified DoubleBet message. Does not implicitly {@link DoubleBet.verify|verify} messages.
     * @param message DoubleBet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDoubleBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DoubleBet message, length delimited. Does not implicitly {@link DoubleBet.verify|verify} messages.
     * @param message DoubleBet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDoubleBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DoubleBet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DoubleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DoubleBet;

    /**
     * Decodes a DoubleBet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DoubleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DoubleBet;

    /**
     * Verifies a DoubleBet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DoubleBet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DoubleBet
     */
    public static fromObject(object: { [k: string]: any }): DoubleBet;

    /**
     * Creates a plain object from a DoubleBet message. Also converts values to other types if specified.
     * @param message DoubleBet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DoubleBet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DoubleBet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
