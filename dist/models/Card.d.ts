import { CardChecks } from '../models/CardChecks';
import { CardNetwork } from '../models/CardNetwork';
import { CardSecure } from '../models/CardSecure';
export declare class Card {
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
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
