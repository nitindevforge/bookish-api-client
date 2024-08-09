import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { FileUploadDto } from '../models/FileUploadDto';
export declare class StorageApiRequestFactory extends BaseAPIRequestFactory {
    storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class StorageApiResponseProcessor {
    storageControllerGetPreSignedURLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
}
