# .EventsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerBookMarkEvent**](EventsApi.md#eventControllerBookMarkEvent) | **POST** /v1/bookmark-event | 
[**eventControllerCreateEvent**](EventsApi.md#eventControllerCreateEvent) | **POST** /v1/event | 
[**eventControllerDeleteBookMarkEvent**](EventsApi.md#eventControllerDeleteBookMarkEvent) | **DELETE** /v1/bookmark-event/{eventId} | 
[**eventControllerDeleteEvent**](EventsApi.md#eventControllerDeleteEvent) | **DELETE** /v1/event | 
[**eventControllerFindCustomerOfEvents**](EventsApi.md#eventControllerFindCustomerOfEvents) | **GET** /v1/event-customers | 
[**eventControllerFindEventById**](EventsApi.md#eventControllerFindEventById) | **GET** /v1/event | 
[**eventControllerFindEvents**](EventsApi.md#eventControllerFindEvents) | **GET** /v1/events | 
[**eventControllerFindMyEvent**](EventsApi.md#eventControllerFindMyEvent) | **GET** /v1/my-event | 
[**eventControllerFindMyUpcomingEvents**](EventsApi.md#eventControllerFindMyUpcomingEvents) | **GET** /v1/upcoming/events | 
[**eventControllerFindSearchPlaces**](EventsApi.md#eventControllerFindSearchPlaces) | **POST** /v1/search-places | 
[**eventControllerGetBookMarkEventList**](EventsApi.md#eventControllerGetBookMarkEventList) | **GET** /v1/bookmark-event-list | 
[**eventControllerGetBookMarkEventStatus**](EventsApi.md#eventControllerGetBookMarkEventStatus) | **GET** /v1/bookmark-event-status/{eventId} | 
[**eventControllerUpdateEvent**](EventsApi.md#eventControllerUpdateEvent) | **PUT** /v1/event | 


# **eventControllerBookMarkEvent**
> CreateBookMarkEventResponseDto eventControllerBookMarkEvent(bookMarkEventPayloadDto)


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerBookMarkEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerBookMarkEventRequest = {
  
  bookMarkEventPayloadDto: {
    eventId: "eventId_example",
  },
};

const data = await apiInstance.eventControllerBookMarkEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookMarkEventPayloadDto** | **BookMarkEventPayloadDto**|  |


### Return type

**CreateBookMarkEventResponseDto**

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

# **eventControllerCreateEvent**
> EventResponseDto eventControllerCreateEvent(eventPayloadDto)


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerCreateEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerCreateEventRequest = {
  
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    price: 3.14,
    noOfTickets: 3.14,
    description: "description_example",
    place: {
      label: "label_example",
      value: "value_example",
    },
    id: "id_example",
    book: "book_example",
  },
};

const data = await apiInstance.eventControllerCreateEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventPayloadDto** | **EventPayloadDto**|  |


### Return type

**EventResponseDto**

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

# **eventControllerDeleteBookMarkEvent**
> DeleteBookMarkEventResponseDto eventControllerDeleteBookMarkEvent()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerDeleteBookMarkEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerDeleteBookMarkEventRequest = {
  
  eventId: "eventId_example",
};

const data = await apiInstance.eventControllerDeleteBookMarkEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**DeleteBookMarkEventResponseDto**

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

# **eventControllerDeleteEvent**
> EventDeleteResponseDto eventControllerDeleteEvent()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerDeleteEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerDeleteEventRequest = {
  
  id: "id_example",
  
  withBookedEvent: true,
};

const data = await apiInstance.eventControllerDeleteEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **withBookedEvent** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**EventDeleteResponseDto**

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

# **eventControllerFindCustomerOfEvents**
> LocationPlacesResponseDto eventControllerFindCustomerOfEvents()


### Example


```typescript
import { createConfiguration, EventsApi } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request = {};

const data = await apiInstance.eventControllerFindCustomerOfEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LocationPlacesResponseDto**

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

# **eventControllerFindEventById**
> EventResponseDto eventControllerFindEventById()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerFindEventByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerFindEventByIdRequest = {
  
  id: "id_example",
  
  withBookedEvent: true,
};

const data = await apiInstance.eventControllerFindEventById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **withBookedEvent** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**EventResponseDto**

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

# **eventControllerFindEvents**
> EventsResponseDto eventControllerFindEvents()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerFindEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerFindEventsRequest = {
  
  page: 3.14,
  
  limit: 3.14,
};

const data = await apiInstance.eventControllerFindEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**EventsResponseDto**

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

# **eventControllerFindMyEvent**
> MyEventResponseDto eventControllerFindMyEvent()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerFindMyEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerFindMyEventRequest = {
  
  eventId: "eventId_example",
};

const data = await apiInstance.eventControllerFindMyEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**MyEventResponseDto**

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

# **eventControllerFindMyUpcomingEvents**
> MyEventsResponseDto eventControllerFindMyUpcomingEvents()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerFindMyUpcomingEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerFindMyUpcomingEventsRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  type: "UPCOMING",
};

const data = await apiInstance.eventControllerFindMyUpcomingEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **type** | [**&#39;UPCOMING&#39; | &#39;VISITED&#39;**]**Array<&#39;UPCOMING&#39; &#124; &#39;VISITED&#39;>** |  | defaults to 'UPCOMING'


### Return type

**MyEventsResponseDto**

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

# **eventControllerFindSearchPlaces**
> LocationPlacesResponseDto eventControllerFindSearchPlaces(locationPayloadDto)


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerFindSearchPlacesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerFindSearchPlacesRequest = {
  
  locationPayloadDto: {
    place: "place_example",
  },
};

const data = await apiInstance.eventControllerFindSearchPlaces(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationPayloadDto** | **LocationPayloadDto**|  |


### Return type

**LocationPlacesResponseDto**

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

# **eventControllerGetBookMarkEventList**
> BookMarkEventListResponseDto eventControllerGetBookMarkEventList()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerGetBookMarkEventListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerGetBookMarkEventListRequest = {
  
  page: 3.14,
  
  limit: 3.14,
};

const data = await apiInstance.eventControllerGetBookMarkEventList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**BookMarkEventListResponseDto**

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

# **eventControllerGetBookMarkEventStatus**
> BookMarkEventStatusResponseDto eventControllerGetBookMarkEventStatus()


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerGetBookMarkEventStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerGetBookMarkEventStatusRequest = {
  
  eventId: "eventId_example",
};

const data = await apiInstance.eventControllerGetBookMarkEventStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**BookMarkEventStatusResponseDto**

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

# **eventControllerUpdateEvent**
> EventResponseDto eventControllerUpdateEvent(eventPayloadDto)


### Example


```typescript
import { createConfiguration, EventsApi } from '';
import type { EventsApiEventControllerUpdateEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiEventControllerUpdateEventRequest = {
  
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    price: 3.14,
    noOfTickets: 3.14,
    description: "description_example",
    place: {
      label: "label_example",
      value: "value_example",
    },
    id: "id_example",
    book: "book_example",
  },
};

const data = await apiInstance.eventControllerUpdateEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventPayloadDto** | **EventPayloadDto**|  |


### Return type

**EventResponseDto**

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


