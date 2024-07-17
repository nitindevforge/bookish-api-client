import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
export declare class UploadApiRequestFactory extends BaseAPIRequestFactory {
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class UploadApiResponseProcessor {
    fileUploadControllerGetPreSignedURLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
