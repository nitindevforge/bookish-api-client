# .BooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookControllerAddBook**](BooksApi.md#bookControllerAddBook) | **POST** /v1/book | 
[**bookControllerAddMyGoodReadsBooks**](BooksApi.md#bookControllerAddMyGoodReadsBooks) | **POST** /v1/books/add-goodreads | 
[**bookControllerFindBookById**](BooksApi.md#bookControllerFindBookById) | **GET** /v1/book | 
[**bookControllerFindBookByStatus**](BooksApi.md#bookControllerFindBookByStatus) | **POST** /v1/books/by-status | 
[**bookControllerFindBookReviewBase**](BooksApi.md#bookControllerFindBookReviewBase) | **POST** /v1/books/type | 
[**bookControllerFindBooks**](BooksApi.md#bookControllerFindBooks) | **GET** /v1/books | 
[**bookControllerFindGoodReads**](BooksApi.md#bookControllerFindGoodReads) | **POST** /v1/books/goodreads | 
[**bookControllerFindUserBookReview**](BooksApi.md#bookControllerFindUserBookReview) | **GET** /v1/user/book/review | 
[**bookControllerFindUserBookReviewCount**](BooksApi.md#bookControllerFindUserBookReviewCount) | **GET** /v1/book/review/count | 
[**bookControllerFindUserBookReviews**](BooksApi.md#bookControllerFindUserBookReviews) | **GET** /v1/book/review | 
[**bookControllerFindUserWhichReadBook**](BooksApi.md#bookControllerFindUserWhichReadBook) | **GET** /v1/book/reader | 
[**bookControllerUserBookMark**](BooksApi.md#bookControllerUserBookMark) | **POST** /v1/user/book | 


# **bookControllerAddBook**
> BookResponseDto bookControllerAddBook(bookPayloadDto)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerAddBookRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerAddBookRequest = {
  
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

const data = await apiInstance.bookControllerAddBook(request);
console.log('API called successfully. Returned data:', data);
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

# **bookControllerAddMyGoodReadsBooks**
> BooksStatusResponseDto bookControllerAddMyGoodReadsBooks(requestBody)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerAddMyGoodReadsBooksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerAddMyGoodReadsBooksRequest = {
  
  requestBody: [
    "requestBody_example",
  ],
};

const data = await apiInstance.bookControllerAddMyGoodReadsBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


### Return type

**BooksStatusResponseDto**

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
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindBookByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindBookByIdRequest = {
  
  id: "id_example",
};

const data = await apiInstance.bookControllerFindBookById(request);
console.log('API called successfully. Returned data:', data);
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

# **bookControllerFindBookByStatus**
> BooksReviewResponseDto bookControllerFindBookByStatus(bookByStatusDto)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindBookByStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindBookByStatusRequest = {
  
  bookByStatusDto: {
    search: "search_example",
    status: "status_example",
    page: 3.14,
    limit: 3.14,
    userId: "userId_example",
  },
};

const data = await apiInstance.bookControllerFindBookByStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookByStatusDto** | **BookByStatusDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindBookReviewBase**
> BooksReviewResponseDto bookControllerFindBookReviewBase(userBookStatusQueryDto)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindBookReviewBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindBookReviewBaseRequest = {
  
  userBookStatusQueryDto: {
    type: "type_example",
    rate: 3.14,
    search: "search_example",
    page: 3.14,
    limit: 3.14,
    userId: "userId_example",
  },
};

const data = await apiInstance.bookControllerFindBookReviewBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookStatusQueryDto** | **UserBookStatusQueryDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindBooks**
> BooksResponseDto bookControllerFindBooks()


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindBooksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindBooksRequest = {
  
  rate: 3.14,
  
  page: 3.14,
  
  limit: 3.14,
  
  search: "search_example",
};

const data = await apiInstance.bookControllerFindBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate** | [**number**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


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

# **bookControllerFindGoodReads**
> BooksReviewResponseDto bookControllerFindGoodReads(goodReadsBookPayloadDto)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindGoodReadsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindGoodReadsRequest = {
  
  goodReadsBookPayloadDto: {
    books: [
      "books_example",
    ],
    add: true,
  },
};

const data = await apiInstance.bookControllerFindGoodReads(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goodReadsBookPayloadDto** | **GoodReadsBookPayloadDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindUserBookReview**
> UserBookReviewResponseDto bookControllerFindUserBookReview()


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindUserBookReviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindUserBookReviewRequest = {
  
  bookId: "bookId_example",
  
  status: "status_example",
  
  rate: 3.14,
  
  review: "review_example",
};

const data = await apiInstance.bookControllerFindUserBookReview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserBookReviewResponseDto**

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
> BookReviewCountResponseDto bookControllerFindUserBookReviewCount()


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindUserBookReviewCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindUserBookReviewCountRequest = {
  
  bookId: "bookId_example",
  
  status: "status_example",
  
  rate: 3.14,
  
  review: "review_example",
};

const data = await apiInstance.bookControllerFindUserBookReviewCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**BookReviewCountResponseDto**

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
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerFindUserBookReviewsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerFindUserBookReviewsRequest = {
  
  bookId: "bookId_example",
  
  page: 3.14,
  
  limit: 3.14,
  
  rate: [],
};

const data = await apiInstance.bookControllerFindUserBookReviews(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **rate** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


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

# **bookControllerFindUserWhichReadBook**
> UserBooksResponseDto bookControllerFindUserWhichReadBook()


### Example


```typescript
import { createConfiguration, BooksApi } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request = {};

const data = await apiInstance.bookControllerFindUserWhichReadBook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
> UserBookReviewResponseDto bookControllerUserBookMark(userBookPayloadDto)


### Example


```typescript
import { createConfiguration, BooksApi } from '';
import type { BooksApiBookControllerUserBookMarkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BooksApi(configuration);

const request: BooksApiBookControllerUserBookMarkRequest = {
  
  userBookPayloadDto: {
    bookId: "bookId_example",
    status: "status_example",
    rate: 3.14,
    review: "review_example",
  },
};

const data = await apiInstance.bookControllerUserBookMark(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookPayloadDto** | **UserBookPayloadDto**|  |


### Return type

**UserBookReviewResponseDto**

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


