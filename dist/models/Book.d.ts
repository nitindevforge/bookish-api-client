import { AuthorResponseDto } from '../models/AuthorResponseDto';
export declare class Book {
    'id': string;
    'title': string;
    'cover': string;
    'genre': string;
    'author': AuthorResponseDto;
    'createAt': Date;
    'updateAt': Date;
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
