import * as $protobuf from "protobufjs";
/** CardsType enum. */
namespace CardsType {

    /** Normal value */
    let Normal: number;

    /** DanZhang value */
    let DanZhang: number;

    /** DuiZi value */
    let DuiZi: number;

    /** ShunZi value */
    let ShunZi: number;

    /** JinHua value */
    let JinHua: number;

    /** ShunJin value */
    let ShunJin: number;

    /** BaoZi value */
    let BaoZi: number;
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

    /** BetSuccessMessage BetType. */
    public BetType: number;

    /** BetSuccessMessage UserID. */
    public UserID: (number|Long);

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

/** Represents a Bet. */
export class Bet implements IBet {

    /**
     * Constructs a new Bet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet);

    /** Bet BetType. */
    public BetType: number;

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

    /** SeatUser UserID. */
    public UserID: (number|Long);

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

/** Represents a Red. */
export class Red implements IRed {

    /**
     * Constructs a new Red.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRed);

    /** Red Card. */
    public Card: Uint8Array;

    /**
     * Creates a new Red instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Red instance
     */
    public static create(properties?: IRed): Red;

    /**
     * Encodes the specified Red message. Does not implicitly {@link Red.verify|verify} messages.
     * @param message Red message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Red message, length delimited. Does not implicitly {@link Red.verify|verify} messages.
     * @param message Red message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Red message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Red
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Red;

    /**
     * Decodes a Red message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Red
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Red;

    /**
     * Verifies a Red message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Red message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Red
     */
    public static fromObject(object: { [k: string]: any }): Red;

    /**
     * Creates a plain object from a Red message. Also converts values to other types if specified.
     * @param message Red
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Red, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Red to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Black. */
export class Black implements IBlack {

    /**
     * Constructs a new Black.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlack);

    /** Black Card. */
    public Card: Uint8Array;

    /**
     * Creates a new Black instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Black instance
     */
    public static create(properties?: IBlack): Black;

    /**
     * Encodes the specified Black message. Does not implicitly {@link Black.verify|verify} messages.
     * @param message Black message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Black message, length delimited. Does not implicitly {@link Black.verify|verify} messages.
     * @param message Black message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Black message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Black
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Black;

    /**
     * Decodes a Black message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Black
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Black;

    /**
     * Verifies a Black message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Black message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Black
     */
    public static fromObject(object: { [k: string]: any }): Black;

    /**
     * Creates a plain object from a Black message. Also converts values to other types if specified.
     * @param message Black
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Black, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Black to JSON.
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

    /** SettleMsg RedPoker. */
    public RedPoker: Uint8Array;

    /** SettleMsg BlackPoker. */
    public BlackPoker: Uint8Array;

    /** SettleMsg Win. */
    public Win: number;

    /** SettleMsg WinCardType. */
    public WinCardType: number;

    /** SettleMsg UserWin. */
    public UserWin: (number|Long);

    /** SettleMsg LoseCardType. */
    public LoseCardType: number;

    /** SettleMsg LuckWin. */
    public LuckWin: (number|Long);

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

/** Represents a SceneBetInfo. */
export class SceneBetInfo implements ISceneBetInfo {

    /**
     * Constructs a new SceneBetInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISceneBetInfo);

    /** SceneBetInfo Red. */
    public Red: (number|Long);

    /** SceneBetInfo Black. */
    public Black: (number|Long);

    /** SceneBetInfo Luck. */
    public Luck: (number|Long);

    /** SceneBetInfo UserBetRed. */
    public UserBetRed: (number|Long);

    /** SceneBetInfo UserBetBlack. */
    public UserBetBlack: (number|Long);

    /** SceneBetInfo UserBetLuck. */
    public UserBetLuck: (number|Long);

    /** SceneBetInfo UserBetTotal. */
    public UserBetTotal: (number|Long);

    /** SceneBetInfo MasterBetType. */
    public MasterBetType: number;

    /**
     * Creates a new SceneBetInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SceneBetInfo instance
     */
    public static create(properties?: ISceneBetInfo): SceneBetInfo;

    /**
     * Encodes the specified SceneBetInfo message. Does not implicitly {@link SceneBetInfo.verify|verify} messages.
     * @param message SceneBetInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISceneBetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SceneBetInfo message, length delimited. Does not implicitly {@link SceneBetInfo.verify|verify} messages.
     * @param message SceneBetInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISceneBetInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SceneBetInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SceneBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SceneBetInfo;

    /**
     * Decodes a SceneBetInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SceneBetInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SceneBetInfo;

    /**
     * Verifies a SceneBetInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SceneBetInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SceneBetInfo
     */
    public static fromObject(object: { [k: string]: any }): SceneBetInfo;

    /**
     * Creates a plain object from a SceneBetInfo message. Also converts values to other types if specified.
     * @param message SceneBetInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SceneBetInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SceneBetInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Trend. */
export class Trend implements ITrend {

    /**
     * Constructs a new Trend.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrend);

    /** Trend Win. */
    public Win: number[];

    /** Trend WinCardType. */
    public WinCardType: number[];

    /**
     * Creates a new Trend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Trend instance
     */
    public static create(properties?: ITrend): Trend;

    /**
     * Encodes the specified Trend message. Does not implicitly {@link Trend.verify|verify} messages.
     * @param message Trend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Trend message, length delimited. Does not implicitly {@link Trend.verify|verify} messages.
     * @param message Trend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Trend message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Trend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trend;

    /**
     * Decodes a Trend message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Trend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trend;

    /**
     * Verifies a Trend message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Trend message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Trend
     */
    public static fromObject(object: { [k: string]: any }): Trend;

    /**
     * Creates a plain object from a Trend message. Also converts values to other types if specified.
     * @param message Trend
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Trend, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Trend to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserInfo. */
export class UserInfo implements IUserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserInfo);

    /** UserInfo NikeName. */
    public NikeName: string;

    /** UserInfo UserGlod. */
    public UserGlod: (number|Long);

    /** UserInfo BetGold. */
    public BetGold: (number|Long);

    /** UserInfo WinCount. */
    public WinCount: number;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserInfo instance
     */
    public static create(properties?: IUserInfo): UserInfo;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param message UserInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInfo;

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;

    /**
     * Verifies a UserInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserInfo
     */
    public static fromObject(object: { [k: string]: any }): UserInfo;

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @param message UserInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserList. */
export class UserList implements IUserList {

    /**
     * Constructs a new UserList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserList);

    /** UserList UserList. */
    public UserList: IUserInfo[];

    /**
     * Creates a new UserList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserList instance
     */
    public static create(properties?: IUserList): UserList;

    /**
     * Encodes the specified UserList message. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserList message, length delimited. Does not implicitly {@link UserList.verify|verify} messages.
     * @param message UserList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserList;

    /**
     * Decodes a UserList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserList;

    /**
     * Verifies a UserList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserList
     */
    public static fromObject(object: { [k: string]: any }): UserList;

    /**
     * Creates a plain object from a UserList message. Also converts values to other types if specified.
     * @param message UserList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
