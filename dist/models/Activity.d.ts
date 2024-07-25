import { UserDetails } from '../models/UserDetails';
export declare class Activity {
    'id': string;
    'userId': UserDetails;
    'type': string;
    'message': string;
    'meta': any;
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
