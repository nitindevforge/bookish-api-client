import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
export declare class StorageApiRequestFactory extends BaseAPIRequestFactory {
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class StorageApiResponseProcessor {
    fileUploadControllerGetPreSignedURLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
