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

import { Book } from '../models/Book';
import { UserDetails } from '../models/UserDetails';
import { HttpFile } from '../http/http';

export class UserBooks {
    'id': string;
    'userId': UserDetails;
    'bookId': Book;
    'status': string;
    'rate': number;
    'review': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "Book",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserBooks.attributeTypeMap;
    }

    public constructor() {
    }
}
