import { PermissionResponseDto } from '../models/PermissionResponseDto';
export declare class RoleResponseDto {
    'id': string;
    'name': string;
    'permissions': Array<PermissionResponseDto>;
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
