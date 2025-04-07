export declare class UserUpdatePayloadDto {
    'firstName': string;
    'lastName': string;
    'userName': string;
    'interests': Array<string>;
    'email': string;
    'profile': string;
    'followerCount': number;
    'followingCount': number;
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
