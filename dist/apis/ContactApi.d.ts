import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ContactDetails } from '../models/ContactDetails';
import { ContactDetailsDto } from '../models/ContactDetailsDto';
export declare class ContactApiRequestFactory extends BaseAPIRequestFactory {
    contactControllerSyncContacts(contactDetails: Array<ContactDetails>, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContactApiResponseProcessor {
    contactControllerSyncContactsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContactDetailsDto>>;
}
