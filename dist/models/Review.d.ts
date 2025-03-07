import { Rating } from '../models/Rating';
export declare class Review {
    'id': string;
    'totalRatingCount': number;
    'totalRate': number;
    'averageRate': number;
    'rating': Array<Rating>;
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
