import { AuthorResponseDto } from '../models/AuthorResponseDto';
export declare class Book {
    'id': string;
    'title': string;
    'cover': string;
    'iSBN13': string;
    'genre': string;
    'description': string;
    'author': AuthorResponseDto;
    'language': string;
    'pages': number;
    'createAt': Date;
    'updateAt': Date;
    'date': Date;
    'publicationDate': string;
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
