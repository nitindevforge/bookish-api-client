import { AttendeeDTO } from '../models/AttendeeDTO';
export declare class AnalyticsResponseDTO {
    'totalTicketsSold': number;
    'totalSales': number;
    'attendeesList': Array<AttendeeDTO>;
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
