# .NielsenBooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nielsenBooksControllerGetNielsenBooks**](NielsenBooksApi.md#nielsenBooksControllerGetNielsenBooks) | **GET** /v1/nielsen/books | 


# **nielsenBooksControllerGetNielsenBooks**
> nielsenBooksControllerGetNielsenBooks()


### Example


```typescript
import { createConfiguration, NielsenBooksApi } from '';

const configuration = createConfiguration();
const apiInstance = new NielsenBooksApi(configuration);

const request = {};

const data = await apiInstance.nielsenBooksControllerGetNielsenBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


