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

export class UserUpdatePayloadDto {
    'firstName': string;
    'lastName': string;
    'userName': string;
    'interests': Array<string>;
    'email': string;
    'profile': string;
    'followerCount': number;
    'followingCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "interests",
            "baseName": "interests",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "string",
            "format": ""
        },
        {
            "name": "followerCount",
            "baseName": "followerCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "followingCount",
            "baseName": "followingCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserUpdatePayloadDto.attributeTypeMap;
    }

    public constructor() {
    }
}

