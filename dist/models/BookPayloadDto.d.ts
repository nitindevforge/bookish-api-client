export declare class BookPayloadDto {
    'title': string;
    'cover': string;
    'description': string;
    'genre': string;
    'author': string;
    'language': string;
    'pages': number;
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
