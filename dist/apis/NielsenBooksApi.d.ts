import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class NielsenBooksApiRequestFactory extends BaseAPIRequestFactory {
    nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: Configuration): Promise<RequestContext>;
    nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: Configuration): Promise<RequestContext>;
    nielsenBooksControllerGetNielsenBooks(_options?: Configuration): Promise<RequestContext>;
}
export declare class NielsenBooksApiResponseProcessor {
    nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
