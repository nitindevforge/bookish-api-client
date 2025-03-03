import { MetaResponse } from '../models/MetaResponse';
import { UserDetails } from '../models/UserDetails';
export declare class Activity {
    'id': string;
    'userId': UserDetails;
    'type': string;
    'message': string;
    'date': Date;
    'meta': MetaResponse;
    'createdAt': Date;
    'updatedAt': Date;
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
