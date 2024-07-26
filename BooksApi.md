# .BooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookControllerAddBook**](BooksApi.md#bookControllerAddBook) | **POST** /v1/book | 
[**bookControllerGetBooks**](BooksApi.md#bookControllerGetBooks) | **GET** /v1/books | 


# **bookControllerAddBook**
> BookResponseDto bookControllerAddBook(bookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerAddBookRequest = {
  // BookPayloadDto
  bookPayloadDto: {
    title: "title_example",
    cover: "cover_example",
    description: "description_example",
    genre: "genre_example",
    author: "author_example",
  },
};

apiInstance.bookControllerAddBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookPayloadDto** | **BookPayloadDto**|  |


### Return type

**BookResponseDto**

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

# **bookControllerGetBooks**
> BooksResponseDto bookControllerGetBooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerGetBooksRequest = {
  // string (optional)
  search: "search_example",
  // number (optional)
  page: 3.14,
  // number (optional)
  limit: 3.14,
};

apiInstance.bookControllerGetBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**BooksResponseDto**

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


