# .BooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookControllerAddBook**](BooksApi.md#bookControllerAddBook) | **POST** /v1/book | 
[**bookControllerFindBookById**](BooksApi.md#bookControllerFindBookById) | **GET** /v1/book | 
[**bookControllerFindBookReviewBase**](BooksApi.md#bookControllerFindBookReviewBase) | **GET** /v1/books/type | 
[**bookControllerFindBooks**](BooksApi.md#bookControllerFindBooks) | **GET** /v1/books | 
[**bookControllerFindUserBookReview**](BooksApi.md#bookControllerFindUserBookReview) | **GET** /v1/user/book/review | 
[**bookControllerFindUserBookReviewCount**](BooksApi.md#bookControllerFindUserBookReviewCount) | **GET** /v1/book/review/count | 
[**bookControllerFindUserBookReviews**](BooksApi.md#bookControllerFindUserBookReviews) | **GET** /v1/book/review | 
[**bookControllerFindUserBooks**](BooksApi.md#bookControllerFindUserBooks) | **GET** /v1/user/books/review | 
[**bookControllerUserBookMark**](BooksApi.md#bookControllerUserBookMark) | **POST** /v1/user/book | 


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
    language: "language_example",
    pages: 3.14,
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

# **bookControllerFindBookById**
> BookResponseDto bookControllerFindBookById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBookByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.bookControllerFindBookById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**BookResponseDto**

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

# **bookControllerFindBookReviewBase**
> BooksReviewResponseDto bookControllerFindBookReviewBase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBookReviewBaseRequest = {
  // string
  type: "type_example",
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string (optional)
  search: "search_example",
};

apiInstance.bookControllerFindBookReviewBase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindBooks**
> BooksResponseDto bookControllerFindBooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBooksRequest = {
  // string
  search: "search_example",
  // number
  page: 3.14,
  // number
  limit: 3.14,
};

apiInstance.bookControllerFindBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


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

# **bookControllerFindUserBookReview**
> UserBookResponseDto bookControllerFindUserBookReview()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewRequest = {
  // string
  bookId: "bookId_example",
  // string (optional)
  status: "status_example",
  // number (optional)
  rate: 3.14,
  // string (optional)
  review: "review_example",
};

apiInstance.bookControllerFindUserBookReview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserBookResponseDto**

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

# **bookControllerFindUserBookReviewCount**
> UserBookReviewCountResponseDto bookControllerFindUserBookReviewCount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewCountRequest = {
  // string
  bookId: "bookId_example",
  // string (optional)
  status: "status_example",
  // number (optional)
  rate: 3.14,
  // string (optional)
  review: "review_example",
};

apiInstance.bookControllerFindUserBookReviewCount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserBookReviewCountResponseDto**

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

# **bookControllerFindUserBookReviews**
> UserBooksResponseDto bookControllerFindUserBookReviews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewsRequest = {
  // string
  bookId: "bookId_example",
  // number
  page: 3.14,
  // number
  limit: 3.14,
};

apiInstance.bookControllerFindUserBookReviews(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**UserBooksResponseDto**

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

# **bookControllerFindUserBooks**
> UserBooksResponseDto bookControllerFindUserBooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBooksRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string (optional)
  status: "status_example",
};

apiInstance.bookControllerFindUserBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserBooksResponseDto**

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

# **bookControllerUserBookMark**
> UserBookResponseDto bookControllerUserBookMark(userBookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerUserBookMarkRequest = {
  // UserBookPayloadDto
  userBookPayloadDto: {
    bookId: "bookId_example",
    status: "status_example",
    rate: 3.14,
    review: "review_example",
  },
};

apiInstance.bookControllerUserBookMark(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookPayloadDto** | **UserBookPayloadDto**|  |


### Return type

**UserBookResponseDto**

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


