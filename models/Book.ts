/**
 * Bookish API
 * The bookish API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { HttpFile } from '../http/http';

export class Book {
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

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "cover",
            "baseName": "cover",
            "type": "string",
            "format": ""
        },
        {
            "name": "iSBN13",
            "baseName": "ISBN13",
            "type": "string",
            "format": ""
        },
        {
            "name": "genre",
            "baseName": "genre",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "AuthorResponseDto",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
            "format": ""
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateAt",
            "baseName": "updateAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publicationDate",
            "baseName": "publicationDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Book.attributeTypeMap;
    }

    public constructor() {
    }
}

