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

import { InterestsPayloadDto } from '../models/InterestsPayloadDto';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { HttpFile } from '../http/http';

export class UserDetails {
    'id': string;
    'firstName': string;
    'lastName': string;
    'userName': string;
    'profile': string;
    'userType': RoleResponseDto;
    'interests': Array<InterestsPayloadDto>;
    'email': string;
    'followers': Array<string>;
    'createdAt': Date;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
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
            "name": "profile",
            "baseName": "profile",
            "type": "string",
            "format": ""
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "RoleResponseDto",
            "format": ""
        },
        {
            "name": "interests",
            "baseName": "interests",
            "type": "Array<InterestsPayloadDto>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "followers",
            "baseName": "followers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return UserDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

