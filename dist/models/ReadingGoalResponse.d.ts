import { UserDetails } from '../models/UserDetails';
export declare class ReadingGoalResponse {
    'id': string;
    'userId': UserDetails;
    'visibility': string;
    'bookReadGoal': number;
    'noOffYear': number;
    'bookReadGoalCount'?: number;
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
