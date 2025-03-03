import { PermissionResponseDto } from '../models/PermissionResponseDto';
export declare class RoleResponseDto {
    'id': string;
    'name': string;
    'description': string;
    'permissions': Array<PermissionResponseDto>;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
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
