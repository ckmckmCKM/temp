import * as $protobuf from "protobufjs";
/** ReMsgIDS2C enum. */
namespace ReMsgIDS2C {

    /** RESTARTID value */
    let RESTARTID: number;

    /** SenceID value */
    let SenceID: number;

    /** BetRet value */
    let BetRet: number;

    /** BetFailID value */
    let BetFailID: number;

    /** XiaMaLiRet value */
    let XiaMaLiRet: number;

    /** BiBeiRet value */
    let BiBeiRet: number;
}

/** Represents a UserBet. */
export class UserBet implements IUserBet {

    /**
     * Constructs a new UserBet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserBet);

    /** UserBet BetMoney. */
    public BetMoney: number;

    /**
     * Creates a new UserBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserBet instance
     */
    public static create(properties?: IUserBet): UserBet;

    /**
     * Encodes the specified UserBet message. Does not implicitly {@link UserBet.verify|verify} messages.
     * @param message UserBet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserBet message, length delimited. Does not implicitly {@link UserBet.verify|verify} messages.
     * @param message UserBet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserBet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserBet;

    /**
     * Decodes a UserBet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserBet;

    /**
     * Verifies a UserBet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserBet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserBet
     */
    public static fromObject(object: { [k: string]: any }): UserBet;

    /**
     * Creates a plain object from a UserBet message. Also converts values to other types if specified.
     * @param message UserBet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserBet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserBet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BetFail. */
export class BetFail implements IBetFail {

    /**
     * Constructs a new BetFail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBetFail);

    /** BetFail FailID. */
    public FailID: number;

    /** BetFail Reson. */
    public Reson: string;

    /**
     * Creates a new BetFail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetFail instance
     */
    public static create(properties?: IBetFail): BetFail;

    /**
     * Encodes the specified BetFail message. Does not implicitly {@link BetFail.verify|verify} messages.
     * @param message BetFail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBetFail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BetFail message, length delimited. Does not implicitly {@link BetFail.verify|verify} messages.
     * @param message BetFail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBetFail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetFail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BetFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BetFail;

    /**
     * Decodes a BetFail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BetFail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BetFail;

    /**
     * Verifies a BetFail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BetFail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BetFail
     */
    public static fromObject(object: { [k: string]: any }): BetFail;

    /**
     * Creates a plain object from a BetFail message. Also converts values to other types if specified.
     * @param message BetFail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BetFail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BetFail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a LineInfo. */
export class LineInfo implements ILineInfo {

    /**
     * Constructs a new LineInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILineInfo);

    /** LineInfo Index. */
    public Index: number;

    /** LineInfo Count. */
    public Count: number;

    /** LineInfo Gold. */
    public Gold: (number|Long);

    /** LineInfo Start. */
    public Start: number;

    /**
     * Creates a new LineInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LineInfo instance
     */
    public static create(properties?: ILineInfo): LineInfo;

    /**
     * Encodes the specified LineInfo message. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @param message LineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LineInfo message, length delimited. Does not implicitly {@link LineInfo.verify|verify} messages.
     * @param message LineInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LineInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LineInfo;

    /**
     * Decodes a LineInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LineInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LineInfo;

    /**
     * Verifies a LineInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LineInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LineInfo
     */
    public static fromObject(object: { [k: string]: any }): LineInfo;

    /**
     * Creates a plain object from a LineInfo message. Also converts values to other types if specified.
     * @param message LineInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LineInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BetRes. */
export class BetRes implements IBetRes {

    /**
     * Constructs a new BetRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBetRes);

    /** BetRes UserGold. */
    public UserGold: (number|Long);

    /** BetRes IconArr. */
    public IconArr: number[];

    /** BetRes Odds. */
    public Odds: number;

    /** BetRes Gold. */
    public Gold: (number|Long);

    /** BetRes Line. */
    public Line: ILineInfo[];

    /** BetRes XiaoMaLi. */
    public XiaoMaLi: number;

    /** BetRes Cheat. */
    public Cheat: number;

    /** BetRes BloodPool. */
    public BloodPool: (number|Long);

    /**
     * Creates a new BetRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BetRes instance
     */
    public static create(properties?: IBetRes): BetRes;

    /**
     * Encodes the specified BetRes message. Does not implicitly {@link BetRes.verify|verify} messages.
     * @param message BetRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBetRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BetRes message, length delimited. Does not implicitly {@link BetRes.verify|verify} messages.
     * @param message BetRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBetRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BetRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BetRes;

    /**
     * Decodes a BetRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BetRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BetRes;

    /**
     * Verifies a BetRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BetRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BetRes
     */
    public static fromObject(object: { [k: string]: any }): BetRes;

    /**
     * Creates a plain object from a BetRes message. Also converts values to other types if specified.
     * @param message BetRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BetRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BetRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a XiaoMaLiRes. */
export class XiaoMaLiRes implements IXiaoMaLiRes {

    /**
     * Constructs a new XiaoMaLiRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IXiaoMaLiRes);

    /** XiaoMaLiRes Times. */
    public Times: number;

    /** XiaoMaLiRes OutIndex. */
    public OutIndex: number;

    /** XiaoMaLiRes InIcon. */
    public InIcon: number[];

    /** XiaoMaLiRes Gold. */
    public Gold: (number|Long);

    /** XiaoMaLiRes Exit. */
    public Exit: boolean;

    /**
     * Creates a new XiaoMaLiRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XiaoMaLiRes instance
     */
    public static create(properties?: IXiaoMaLiRes): XiaoMaLiRes;

    /**
     * Encodes the specified XiaoMaLiRes message. Does not implicitly {@link XiaoMaLiRes.verify|verify} messages.
     * @param message XiaoMaLiRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IXiaoMaLiRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified XiaoMaLiRes message, length delimited. Does not implicitly {@link XiaoMaLiRes.verify|verify} messages.
     * @param message XiaoMaLiRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IXiaoMaLiRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a XiaoMaLiRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XiaoMaLiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): XiaoMaLiRes;

    /**
     * Decodes a XiaoMaLiRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XiaoMaLiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): XiaoMaLiRes;

    /**
     * Verifies a XiaoMaLiRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a XiaoMaLiRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XiaoMaLiRes
     */
    public static fromObject(object: { [k: string]: any }): XiaoMaLiRes;

    /**
     * Creates a plain object from a XiaoMaLiRes message. Also converts values to other types if specified.
     * @param message XiaoMaLiRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: XiaoMaLiRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this XiaoMaLiRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Sence. */
export class Sence implements ISence {

    /**
     * Constructs a new Sence.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISence);

    /** Sence Gold. */
    public Gold: (number|Long);

    /** Sence BetValue. */
    public BetValue: number[];

    /**
     * Creates a new Sence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Sence instance
     */
    public static create(properties?: ISence): Sence;

    /**
     * Encodes the specified Sence message. Does not implicitly {@link Sence.verify|verify} messages.
     * @param message Sence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Sence message, length delimited. Does not implicitly {@link Sence.verify|verify} messages.
     * @param message Sence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Sence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Sence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sence;

    /**
     * Decodes a Sence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Sence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sence;

    /**
     * Verifies a Sence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Sence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Sence
     */
    public static fromObject(object: { [k: string]: any }): Sence;

    /**
     * Creates a plain object from a Sence message. Also converts values to other types if specified.
     * @param message Sence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Sence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Sence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a C2SBiBei. */
export class C2SBiBei implements IC2SBiBei {

    /**
     * Constructs a new C2SBiBei.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SBiBei);

    /** C2SBiBei Result. */
    public Result: number;

    /**
     * Creates a new C2SBiBei instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SBiBei instance
     */
    public static create(properties?: IC2SBiBei): C2SBiBei;

    /**
     * Encodes the specified C2SBiBei message. Does not implicitly {@link C2SBiBei.verify|verify} messages.
     * @param message C2SBiBei message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SBiBei, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SBiBei message, length delimited. Does not implicitly {@link C2SBiBei.verify|verify} messages.
     * @param message C2SBiBei message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SBiBei, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SBiBei message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SBiBei
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SBiBei;

    /**
     * Decodes a C2SBiBei message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SBiBei
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SBiBei;

    /**
     * Verifies a C2SBiBei message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SBiBei message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SBiBei
     */
    public static fromObject(object: { [k: string]: any }): C2SBiBei;

    /**
     * Creates a plain object from a C2SBiBei message. Also converts values to other types if specified.
     * @param message C2SBiBei
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SBiBei, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SBiBei to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a S2CBiBeiRes. */
export class S2CBiBeiRes implements IS2CBiBeiRes {

    /**
     * Constructs a new S2CBiBeiRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CBiBeiRes);

    /** S2CBiBeiRes Dice1. */
    public Dice1: number;

    /** S2CBiBeiRes Dice2. */
    public Dice2: number;

    /** S2CBiBeiRes Gold. */
    public Gold: (number|Long);

    /**
     * Creates a new S2CBiBeiRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CBiBeiRes instance
     */
    public static create(properties?: IS2CBiBeiRes): S2CBiBeiRes;

    /**
     * Encodes the specified S2CBiBeiRes message. Does not implicitly {@link S2CBiBeiRes.verify|verify} messages.
     * @param message S2CBiBeiRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CBiBeiRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CBiBeiRes message, length delimited. Does not implicitly {@link S2CBiBeiRes.verify|verify} messages.
     * @param message S2CBiBeiRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CBiBeiRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CBiBeiRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CBiBeiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CBiBeiRes;

    /**
     * Decodes a S2CBiBeiRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CBiBeiRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CBiBeiRes;

    /**
     * Verifies a S2CBiBeiRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CBiBeiRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CBiBeiRes
     */
    public static fromObject(object: { [k: string]: any }): S2CBiBeiRes;

    /**
     * Creates a plain object from a S2CBiBeiRes message. Also converts values to other types if specified.
     * @param message S2CBiBeiRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CBiBeiRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CBiBeiRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
