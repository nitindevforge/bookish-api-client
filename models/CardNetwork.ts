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

import { HttpFile } from '../http/http';

export class CardNetwork {
    'available': Array<string>;
    'preferred': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "preferred",
            "baseName": "preferred",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardNetwork.attributeTypeMap;
    }

    public constructor() {
    }
}
