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
import { HttpFile } from '../http/http';

export class Books {
    'data': Array<Book>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Book>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Books.attributeTypeMap;
    }

    public constructor() {
    }
}

