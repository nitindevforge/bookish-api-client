import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
export declare class AnalyticsApiRequestFactory extends BaseAPIRequestFactory {
    analyticsControllerGetAnalytics(_options?: Configuration): Promise<RequestContext>;
}
export declare class AnalyticsApiResponseProcessor {
    analyticsControllerGetAnalyticsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticsResponseDTO>>;
}
