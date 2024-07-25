import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { FollowerSuggestionResponseDto } from '../models/FollowerSuggestionResponseDto';
export declare class FollowerApiRequestFactory extends BaseAPIRequestFactory {
    followerControllerFollowerSuggestion(page?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    followerControllerFollowing(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
    followerControllerUnFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class FollowerApiResponseProcessor {
    followerControllerFollowerSuggestionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerSuggestionResponseDto>>;
    followerControllerFollowingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnFollowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
}
