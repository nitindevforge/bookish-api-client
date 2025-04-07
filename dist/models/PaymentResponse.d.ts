import { UserDetails } from '../models/UserDetails';
export declare class PaymentResponse {
    'id': string;
    'paymentId': string;
    'userId': UserDetails;
    static readonly discriminator: string | undefined;
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
