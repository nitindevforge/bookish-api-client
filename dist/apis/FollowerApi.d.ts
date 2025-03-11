import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { MyAllFriendsResponseDto } from '../models/MyAllFriendsResponseDto';
export declare class FollowerApiRequestFactory extends BaseAPIRequestFactory {
    followerControllerFindMyFriends(page: number, limit: number, search?: string, id?: string, _options?: Configuration): Promise<RequestContext>;
    followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
    followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class FollowerApiResponseProcessor {
    followerControllerFindMyFriendsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyAllFriendsResponseDto>>;
    followerControllerFollowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnfollowWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FollowerResponseDto>>;
}
