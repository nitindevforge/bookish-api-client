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

export class ChangePayloadDto {
    'email': string;
    'confirmPassword': string;
    'newPassword': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmPassword",
            "baseName": "confirmPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChangePayloadDto.attributeTypeMap;
    }

    public constructor() {
    }
}
