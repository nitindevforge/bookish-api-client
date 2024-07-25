# .FollowerApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**followerControllerFollowerSuggestion**](FollowerApi.md#followerControllerFollowerSuggestion) | **GET** /v1/follower/suggestions | 
[**followerControllerFollowing**](FollowerApi.md#followerControllerFollowing) | **POST** /v1/follower/following | 
[**followerControllerUnFollow**](FollowerApi.md#followerControllerUnFollow) | **POST** /v1/follower/unfollow | 


# **followerControllerFollowerSuggestion**
> FollowerSuggestionResponseDto followerControllerFollowerSuggestion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerFollowerSuggestionRequest = {
  // number (optional)
  page: 3.14,
  // number (optional)
  limit: 3.14,
};

apiInstance.followerControllerFollowerSuggestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**FollowerSuggestionResponseDto**

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

# **followerControllerFollowing**
> FollowerResponseDto followerControllerFollowing(followerPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerFollowingRequest = {
  // FollowerPayloadDto
  followerPayloadDto: {
    follower: "follower_example",
  },
};

apiInstance.followerControllerFollowing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **followerPayloadDto** | **FollowerPayloadDto**|  |


### Return type

**FollowerResponseDto**

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

# **followerControllerUnFollow**
> FollowerResponseDto followerControllerUnFollow(followerPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerUnFollowRequest = {
  // FollowerPayloadDto
  followerPayloadDto: {
    follower: "follower_example",
  },
};

apiInstance.followerControllerUnFollow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **followerPayloadDto** | **FollowerPayloadDto**|  |


### Return type

**FollowerResponseDto**

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


