import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
export declare class FriendsApiRequestFactory extends BaseAPIRequestFactory {
    friendControllerFindFriends(search: string, page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class FriendsApiResponseProcessor {
    friendControllerFindFriendsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FriendsResponseDto>>;
}
