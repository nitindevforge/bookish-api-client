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

export class CardChecks {
    'addressLine1Check': string;
    'addressPostalCodeCheck': string;
    'cvcCheck': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLine1Check",
            "baseName": "address_line1_check",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressPostalCodeCheck",
            "baseName": "address_postal_code_check",
            "type": "string",
            "format": ""
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardChecks.attributeTypeMap;
    }

    public constructor() {
    }
}
