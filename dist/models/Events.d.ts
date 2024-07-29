import { UserDetails } from '../models/UserDetails';
export declare class Events {
    'title': string;
    'image': string;
    'date': Date;
    'price': number;
    'description': string;
    'owner': UserDetails;
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
