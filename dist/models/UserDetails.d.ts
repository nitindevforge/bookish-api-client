import { RoleResponseDto } from '../models/RoleResponseDto';
export declare class UserDetails {
    'id': string;
    'firstName': string;
    'lastName': string;
    'userType': RoleResponseDto;
    'email': string;
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
