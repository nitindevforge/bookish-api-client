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

export class MyEvents {
    'data': Array<MyEventsResponse>;
    'count': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<MyEventsResponse>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MyEvents.attributeTypeMap;
    }

    public constructor() {
    }
}
