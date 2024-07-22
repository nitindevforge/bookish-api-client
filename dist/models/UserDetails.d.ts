import { InterestsPayloadDto } from '../models/InterestsPayloadDto';
import { RoleResponseDto } from '../models/RoleResponseDto';
export declare class UserDetails {
    'id': string;
    'firstName': string;
    'lastName': string;
    'userName': string;
    'profile': string;
    'userType': RoleResponseDto;
    'interests': Array<InterestsPayloadDto>;
    'email': string;
    'followers': Array<string>;
    'following': Array<string>;
    'follower': Array<string>;
    'followingCount': number;
    'followerCount': number;
    'createdAt': Date;
    'updatedAt': Date;
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
