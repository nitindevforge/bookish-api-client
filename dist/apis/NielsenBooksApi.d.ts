import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class NielsenBooksApiRequestFactory extends BaseAPIRequestFactory {
    nielsenBooksControllerGetNielsenBooks(_options?: Configuration): Promise<RequestContext>;
}
export declare class NielsenBooksApiResponseProcessor {
    nielsenBooksControllerGetNielsenBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
