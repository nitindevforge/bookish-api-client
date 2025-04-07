export declare class BusinessConnectedAccount {
    'id': string;
    'status': BusinessConnectedAccountStatusEnum;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum BusinessConnectedAccountStatusEnum {
    Pending = "PENDING",
    VerificationRequired = "VERIFICATION_REQUIRED",
    Connected = "CONNECTED"
}
