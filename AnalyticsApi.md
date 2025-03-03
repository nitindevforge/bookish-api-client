# .AnalyticsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsControllerGetAnalytics**](AnalyticsApi.md#analyticsControllerGetAnalytics) | **GET** /v1/analytics | 


# **analyticsControllerGetAnalytics**
> AnalyticsResponseDTO analyticsControllerGetAnalytics()


### Example


```typescript
import { createConfiguration, AnalyticsApi } from '';

const configuration = createConfiguration();
const apiInstance = new AnalyticsApi(configuration);

const request = {};

const data = await apiInstance.analyticsControllerGetAnalytics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AnalyticsResponseDTO**

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


