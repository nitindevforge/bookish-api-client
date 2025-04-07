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

import { UserDetails } from '../models/UserDetails';
import { HttpFile } from '../http/http';

export class PasswordChangeResponse {
    'user': UserDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "UserDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PasswordChangeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

