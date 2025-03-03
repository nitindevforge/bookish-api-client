import { AttendeeDTO } from '../models/AttendeeDTO';
export declare class EventDTO {
    'eventId': string;
    'eventName': string;
    'attendees': Array<AttendeeDTO>;
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
