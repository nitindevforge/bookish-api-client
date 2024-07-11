import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    appControllerGetHello(_options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    appControllerGetHelloWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
