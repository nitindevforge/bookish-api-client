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

import { CardChecks } from '../models/CardChecks';
import { CardNetwork } from '../models/CardNetwork';
import { CardSecure } from '../models/CardSecure';
import { HttpFile } from '../http/http';

export class Card {
    'brand': string;
    'checks': CardChecks;
    'country': string;
    'displayBrand': string;
    'expMonth': number;
    'expYear': number;
    'fingerprint': string;
    'funding': string;
    'generatedFrom': any;
    'last4': string;
    'networks': CardNetwork;
    'threeDSecureUsage': CardSecure;
    'wallet': any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "checks",
            "baseName": "checks",
            "type": "CardChecks",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayBrand",
            "baseName": "display_brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number",
            "format": ""
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number",
            "format": ""
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string",
            "format": ""
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string",
            "format": ""
        },
        {
            "name": "generatedFrom",
            "baseName": "generated_from",
            "type": "any",
            "format": ""
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string",
            "format": ""
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "CardNetwork",
            "format": ""
        },
        {
            "name": "threeDSecureUsage",
            "baseName": "three_d_secure_usage",
            "type": "CardSecure",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }

    public constructor() {
    }
}

