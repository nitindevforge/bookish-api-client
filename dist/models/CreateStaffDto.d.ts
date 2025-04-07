export declare class CreateStaffDto {
    'firstName': string;
    'lastName'?: string;
    'email': string;
    'roles'?: Array<string>;
    'owner': string;
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
