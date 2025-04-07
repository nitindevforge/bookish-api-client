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

import { Events } from '../models/Events';
import { UserDetails } from '../models/UserDetails';
import { HttpFile } from '../http/http';

export class BookMarkEventListDTO {
    'id': string;
    'eventId': Events;
    'userId': UserDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "Events",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BookMarkEventListDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

