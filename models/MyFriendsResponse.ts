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

export class MyFriendsResponse {
    'users': Array<UserDetails>;
    'count': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<UserDetails>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MyFriendsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
