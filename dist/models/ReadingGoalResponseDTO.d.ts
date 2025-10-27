import { ReadingGoalResponse } from '../models/ReadingGoalResponse';
export declare class ReadingGoalResponseDTO {
    'data': ReadingGoalResponse;
    'isSuccess': boolean;
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
