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

import { MyEventsResponse } from '../models/MyEventsResponse';
import { HttpFile } from '../http/http';

export class MyEventResponseDto {
    'data': MyEventsResponse;
    'isSuccess': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "MyEventsResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MyEventResponseDto.attributeTypeMap;
    }

    public constructor() {
    }
}
