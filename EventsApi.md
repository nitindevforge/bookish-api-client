# .EventsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateEvent**](EventsApi.md#eventControllerCreateEvent) | **POST** /v1/event | 
[**eventControllerFindEventById**](EventsApi.md#eventControllerFindEventById) | **GET** /v1/event | 
[**eventControllerFindEvents**](EventsApi.md#eventControllerFindEvents) | **GET** /v1/events | 
[**eventControllerFindMyEvent**](EventsApi.md#eventControllerFindMyEvent) | **GET** /v1/my-event | 
[**eventControllerFindUpcomingMyEvents**](EventsApi.md#eventControllerFindUpcomingMyEvents) | **GET** /v1/my-events | 


# **eventControllerCreateEvent**
> EventResponseDto eventControllerCreateEvent(eventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerCreateEventRequest = {
  // EventPayloadDto
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    price: 3.14,
    description: "description_example",
    id: "id_example",
  },
};

apiInstance.eventControllerCreateEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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

# **eventControllerFindEventById**
> EventResponseDto eventControllerFindEventById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindEventByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.eventControllerFindEventById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindEventsRequest = {
  // number
  page: 3.14,
  // number (optional)
  limit: 3.14,
};

apiInstance.eventControllerFindEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindMyEventRequest = {
  // string
  eventId: "eventId_example",
};

apiInstance.eventControllerFindMyEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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

# **eventControllerFindUpcomingMyEvents**
> MyEventsResponseDto eventControllerFindUpcomingMyEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindUpcomingMyEventsRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
};

apiInstance.eventControllerFindUpcomingMyEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


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


