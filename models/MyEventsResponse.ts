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
import { HttpFile } from '../http/http';

export class MyEventsResponse {
    'id': string;
    'eventId': Events;
    'userId': string;
    'paymentId': string;

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
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MyEventsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
