import { Book } from '../models/Book';
import { UserDetails } from '../models/UserDetails';
export declare class UserBooks {
    'id': string;
    'userId': UserDetails;
    'bookId': Book;
    'isRead': boolean;
    'rate': number;
    'review': number;
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
