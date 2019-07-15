import * as $protobuf from "protobufjs";
/** ErrorType enum. */
namespace ErrorType {

    /** VOID3 value */
    let VOID3: number;

    /** LoginFaild value */
    let LoginFaild: number;
}

/** Represents a FrameMsg. */
export class FrameMsg implements IFrameMsg {

    /**
     * Constructs a new FrameMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameMsg);

    /** FrameMsg mainCmd. */
    public mainCmd: number;

    /** FrameMsg subCmd. */
    public subCmd: number;

    /** FrameMsg buff. */
    public buff: Uint8Array;

    /**
     * Creates a new FrameMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameMsg instance
     */
    public static create(properties?: IFrameMsg): FrameMsg;

    /**
     * Encodes the specified FrameMsg message. Does not implicitly {@link FrameMsg.verify|verify} messages.
     * @param message FrameMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameMsg message, length delimited. Does not implicitly {@link FrameMsg.verify|verify} messages.
     * @param message FrameMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameMsg;

    /**
     * Decodes a FrameMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameMsg;

    /**
     * Verifies a FrameMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameMsg
     */
    public static fromObject(object: { [k: string]: any }): FrameMsg;

    /**
     * Creates a plain object from a FrameMsg message. Also converts values to other types if specified.
     * @param message FrameMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a S2CGeneralError. */
export class S2CGeneralError implements IS2CGeneralError {

    /**
     * Constructs a new S2CGeneralError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGeneralError);

    /** S2CGeneralError eType. */
    public eType: ErrorType;

    /** S2CGeneralError descript. */
    public descript: string;

    /**
     * Creates a new S2CGeneralError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGeneralError instance
     */
    public static create(properties?: IS2CGeneralError): S2CGeneralError;

    /**
     * Encodes the specified S2CGeneralError message. Does not implicitly {@link S2CGeneralError.verify|verify} messages.
     * @param message S2CGeneralError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGeneralError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGeneralError message, length delimited. Does not implicitly {@link S2CGeneralError.verify|verify} messages.
     * @param message S2CGeneralError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGeneralError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGeneralError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGeneralError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGeneralError;

    /**
     * Decodes a S2CGeneralError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGeneralError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGeneralError;

    /**
     * Verifies a S2CGeneralError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGeneralError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGeneralError
     */
    public static fromObject(object: { [k: string]: any }): S2CGeneralError;

    /**
     * Creates a plain object from a S2CGeneralError message. Also converts values to other types if specified.
     * @param message S2CGeneralError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGeneralError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGeneralError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a C2SLogin. */
export class C2SLogin implements IC2SLogin {

    /**
     * Constructs a new C2SLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SLogin);

    /** C2SLogin userId. */
    public userId: (number|Long);

    /** C2SLogin equipmentCode. */
    public equipmentCode: string;

    /** C2SLogin gameName. */
    public gameName: string;

    /**
     * Creates a new C2SLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SLogin instance
     */
    public static create(properties?: IC2SLogin): C2SLogin;

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @param message C2SLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SLogin message, length delimited. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @param message C2SLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SLogin;

    /**
     * Decodes a C2SLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SLogin;

    /**
     * Verifies a C2SLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SLogin
     */
    public static fromObject(object: { [k: string]: any }): C2SLogin;

    /**
     * Creates a plain object from a C2SLogin message. Also converts values to other types if specified.
     * @param message C2SLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a S2CLogin. */
export class S2CLogin implements IS2CLogin {

    /**
     * Constructs a new S2CLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLogin);

    /** S2CLogin userId. */
    public userId: number;

    /**
     * Creates a new S2CLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLogin instance
     */
    public static create(properties?: IS2CLogin): S2CLogin;

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @param message S2CLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLogin message, length delimited. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @param message S2CLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLogin;

    /**
     * Decodes a S2CLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLogin;

    /**
     * Verifies a S2CLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLogin
     */
    public static fromObject(object: { [k: string]: any }): S2CLogin;

    /**
     * Creates a plain object from a S2CLogin message. Also converts values to other types if specified.
     * @param message S2CLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a S2CMatch. */
export class S2CMatch implements IS2CMatch {

    /**
     * Constructs a new S2CMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMatch);

    /** S2CMatch userId. */
    public userId: number;

    /** S2CMatch result. */
    public result: number;

    /** S2CMatch tableNum. */
    public tableNum: number;

    /** S2CMatch chairNum. */
    public chairNum: number;

    /**
     * Creates a new S2CMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMatch instance
     */
    public static create(properties?: IS2CMatch): S2CMatch;

    /**
     * Encodes the specified S2CMatch message. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @param message S2CMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMatch message, length delimited. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @param message S2CMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMatch;

    /**
     * Decodes a S2CMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMatch;

    /**
     * Verifies a S2CMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMatch
     */
    public static fromObject(object: { [k: string]: any }): S2CMatch;

    /**
     * Creates a plain object from a S2CMatch message. Also converts values to other types if specified.
     * @param message S2CMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a S2CTest. */
export class S2CTest implements IS2CTest {

    /**
     * Constructs a new S2CTest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CTest);

    /** S2CTest userId. */
    public userId: number;

    /**
     * Creates a new S2CTest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CTest instance
     */
    public static create(properties?: IS2CTest): S2CTest;

    /**
     * Encodes the specified S2CTest message. Does not implicitly {@link S2CTest.verify|verify} messages.
     * @param message S2CTest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CTest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CTest message, length delimited. Does not implicitly {@link S2CTest.verify|verify} messages.
     * @param message S2CTest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CTest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CTest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CTest;

    /**
     * Decodes a S2CTest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CTest;

    /**
     * Verifies a S2CTest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CTest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CTest
     */
    public static fromObject(object: { [k: string]: any }): S2CTest;

    /**
     * Creates a plain object from a S2CTest message. Also converts values to other types if specified.
     * @param message S2CTest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CTest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
