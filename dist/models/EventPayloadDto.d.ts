import { Location } from '../models/Location';
export declare class EventPayloadDto {
    'title': string;
    'image': string;
    'date': Date;
    'price': number;
    'noOfTickets': number;
    'description': string;
    'location': Location;
    'id'?: string;
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
