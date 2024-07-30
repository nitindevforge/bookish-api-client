# .RecentReadsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recentReadsControllerFindRecentReads**](RecentReadsApi.md#recentReadsControllerFindRecentReads) | **GET** /v1/recent-reads | 
[**recentReadsControllerRecentRead**](RecentReadsApi.md#recentReadsControllerRecentRead) | **POST** /v1/recent-read | 


# **recentReadsControllerFindRecentReads**
> RecentReadsResponseDto recentReadsControllerFindRecentReads()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RecentReadsApi(configuration);

let body:.RecentReadsApiRecentReadsControllerFindRecentReadsRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
};

apiInstance.recentReadsControllerFindRecentReads(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**RecentReadsResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **recentReadsControllerRecentRead**
> RecentReadResponseDto recentReadsControllerRecentRead(recentReadPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RecentReadsApi(configuration);

let body:.RecentReadsApiRecentReadsControllerRecentReadRequest = {
  // RecentReadPayloadDto
  recentReadPayloadDto: {
    bookId: "bookId_example",
  },
};

apiInstance.recentReadsControllerRecentRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recentReadPayloadDto** | **RecentReadPayloadDto**|  |


### Return type

**RecentReadResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


