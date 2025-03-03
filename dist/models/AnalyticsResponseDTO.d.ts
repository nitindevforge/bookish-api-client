import { EventDTO } from '../models/EventDTO';
export declare class AnalyticsResponseDTO {
    'totalTicketsSold': number;
    'totalSales': number;
    'attendeesList': Array<EventDTO>;
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
