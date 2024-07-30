import { Book } from '../models/Book';
import { UserDetails } from '../models/UserDetails';
export declare class RecentReads {
    'id': string;
    'userId': UserDetails;
    'bookId': Book;
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
