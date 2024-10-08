import { FollowerSuggestion } from '../models/FollowerSuggestion';
export declare class Suggestion {
    'data': Array<FollowerSuggestion>;
    'count': number;
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
