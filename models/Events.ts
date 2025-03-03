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

import { Location } from '../models/Location';
import { Places } from '../models/Places';
import { UserDetails } from '../models/UserDetails';
import { HttpFile } from '../http/http';

export class Events {
    'id': string;
    'title': string;
    'image': string;
    'date': Date;
    'price': number;
    'noOfTickets': number;
    'place': Places;
    'description': string;
    'location': Location;
    'owner': UserDetails;
    'createdAt': Date;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
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
            "name": "date",
            "baseName": "date",
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
            "name": "place",
            "baseName": "place",
            "type": "Places",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Location",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "UserDetails",
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
        return Events.attributeTypeMap;
    }

    public constructor() {
    }
}
