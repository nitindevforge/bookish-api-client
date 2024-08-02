import { Rating } from '../models/Rating';
export declare class Review {
    'id': string;
    'totalRatingCount': number;
    'rating': Array<Rating>;
    'totalRating': number;
    'averageRating': number;
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
