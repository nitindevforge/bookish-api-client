import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { MyFriendsResponseDto } from '../models/MyFriendsResponseDto';
export declare class FollowerApiRequestFactory extends BaseAPIRequestFactory {
    followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
    followerControllerMyFriends(page: number, limit: number, search?: string, _options?: Configuration): Promise<RequestContext>;
    followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class FollowerApiResponseProcessor {
    followerControllerFollowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerMyFriendsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyFriendsResponseDto>>;
    followerControllerUnfollowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
}
