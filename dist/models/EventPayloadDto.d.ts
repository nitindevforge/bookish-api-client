export declare class EventPayloadDto {
    'title': string;
    'image': string;
    'date': Date;
    'time': string;
    'price': number;
    'description': string;
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
