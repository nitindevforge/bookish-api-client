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

export class AttendeeDTO {
    /**
    * First name of the attendee
    */
    'firstName': string;
    /**
    * Last name of the attendee
    */
    'lastName': string;
    /**
    * Email of the attendee
    */
    'email': string;
    /**
    * user Name of the attendee
    */
    'userName': string;
    /**
    * ID of the event
    */
    'eventId': string;
    /**
    * Name of the event
    */
    'eventTitle': string;

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
            "name": "email",
            "baseName": "email",
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
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventTitle",
            "baseName": "eventTitle",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AttendeeDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

