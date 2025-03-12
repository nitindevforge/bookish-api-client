import { Events } from '../models/Events';
import { UserDetails } from '../models/UserDetails';
export declare class BookMarkEventListDTO {
    'id': string;
    'evenId': Events;
    'userId': UserDetails;
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
