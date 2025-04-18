export declare class AttendeeDTO {
    'firstName': string;
    'lastName': string;
    'email': string;
    'userName': string;
    'eventId': string;
    'eventTitle': string;
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
