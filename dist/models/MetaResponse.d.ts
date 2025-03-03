import { Book } from '../models/Book';
import { Events } from '../models/Events';
import { Location } from '../models/Location';
import { UserBooks } from '../models/UserBooks';
import { UserDetails } from '../models/UserDetails';
export declare class MetaResponse {
    'userId': UserDetails;
    'eventId': Events;
    'bookId': Book;
    'reviewBookId': UserBooks;
    'location': Location;
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
