# .UploadApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileUploadControllerGetPreSignedURL**](UploadApi.md#fileUploadControllerGetPreSignedURL) | **POST** /v1/upload/file | 


# **fileUploadControllerGetPreSignedURL**
> void fileUploadControllerGetPreSignedURL(fileUploadPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UploadApi(configuration);

let body:.UploadApiFileUploadControllerGetPreSignedURLRequest = {
  // FileUploadPayloadDto
  fileUploadPayloadDto: {
    key: "key_example",
    directory: "directory_example",
  },
};

apiInstance.fileUploadControllerGetPreSignedURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileUploadPayloadDto** | **FileUploadPayloadDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


