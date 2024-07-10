import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { SearchUserResponseDto } from '../models/SearchUserResponseDto';
export declare class FriendsApiRequestFactory extends BaseAPIRequestFactory {
    userControllerGetSearchUser(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class FriendsApiResponseProcessor {
    userControllerGetSearchUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchUserResponseDto>>;
}
