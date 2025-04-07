import { Book } from '../models/Book';
import { UserDetails } from '../models/UserDetails';
export declare class UserBooks {
    'id': string;
    'userId': UserDetails;
    'bookId': Book;
    'status': string;
    'rate': number;
    'review': string;
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
