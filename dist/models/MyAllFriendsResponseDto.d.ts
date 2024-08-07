import { MyFriendsResponse } from '../models/MyFriendsResponse';
export declare class MyAllFriendsResponseDto {
    'data': MyFriendsResponse;
    'isSuccess': boolean;
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
