import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { RecentReadPayloadDto } from '../models/RecentReadPayloadDto';
import { RecentReadResponseDto } from '../models/RecentReadResponseDto';
import { RecentReadsResponseDto } from '../models/RecentReadsResponseDto';
export declare class RecentReadsApiRequestFactory extends BaseAPIRequestFactory {
    recentReadsControllerFindRecentReads(page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    recentReadsControllerRecentRead(recentReadPayloadDto: RecentReadPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class RecentReadsApiResponseProcessor {
    recentReadsControllerFindRecentReadsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecentReadsResponseDto>>;
    recentReadsControllerRecentReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecentReadResponseDto>>;
}
