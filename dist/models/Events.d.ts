import { Location } from '../models/Location';
import { Places } from '../models/Places';
import { UserDetails } from '../models/UserDetails';
export declare class Events {
    'id': string;
    'title': string;
    'image': string;
    'date': Date;
    'price': number;
    'noOfTickets': number;
    'place': Places;
    'description': string;
    'location': Location;
    'owner': UserDetails;
    'createdAt': Date;
    'updatedAt': Date;
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
