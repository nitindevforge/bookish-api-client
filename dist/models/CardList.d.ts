import { BillingDetails } from '../models/BillingDetails';
import { Card } from '../models/Card';
export declare class CardList {
    'id': string;
    'object': string;
    'allowRedisplay': string;
    'billingDetails': BillingDetails;
    'card': Card;
    'created': number;
    'customer': any;
    'livemode': boolean;
    'metadata': any;
    'type': string;
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
