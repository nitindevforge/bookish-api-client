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

import { UserFollowers } from '../models/UserFollowers';
import { HttpFile } from '../http/http';

export class UserFollowerResponseDto {
    'data': UserFollowers;
    'isSuccess': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserFollowers",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserFollowerResponseDto.attributeTypeMap;
    }

    public constructor() {
    }
}

