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

import { Places } from '../models/Places';
import { HttpFile } from '../http/http';

export class EventPayloadDto {
    'title': string;
    'image': string;
    'startDate': Date;
    'endDate': Date;
    'price': number;
    'noOfTickets': number;
    'description': string;
    'place': Places;
    'id'?: string;
    'book'?: string;
    'owner'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "noOfTickets",
            "baseName": "noOfTickets",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "Places",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "book",
            "baseName": "book",
            "type": "string",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventPayloadDto.attributeTypeMap;
    }

    public constructor() {
    }
}
