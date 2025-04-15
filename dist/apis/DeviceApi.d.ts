import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AddDevicePayload } from '../models/AddDevicePayload';
import { DeviceAddResponse } from '../models/DeviceAddResponse';
export declare class DeviceApiRequestFactory extends BaseAPIRequestFactory {
    deviceControllerAddDevice(addDevicePayload: AddDevicePayload, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeviceApiResponseProcessor {
    deviceControllerAddDeviceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeviceAddResponse>>;
}
