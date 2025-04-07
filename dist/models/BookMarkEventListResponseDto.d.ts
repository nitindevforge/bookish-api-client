import { BookMarkEventListDTO } from '../models/BookMarkEventListDTO';
export declare class BookMarkEventListResponseDto {
    'data': Array<BookMarkEventListDTO>;
    'isSuccess': boolean;
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
