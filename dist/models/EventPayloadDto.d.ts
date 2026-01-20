import { Places } from '../models/Places';
export declare class EventPayloadDto {
    'title': string;
    'image': string;
    'startDate': Date;
    'endDate': Date;
    'price': number;
    'noOfTickets': number;
    'description': string;
    'place': Places;
    'id'?: string;
    'book'?: string;
    'owner'?: string;
    'link'?: string;
    'timezone'?: string;
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
