# .EventsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateEvent**](EventsApi.md#eventControllerCreateEvent) | **POST** /v1/event | 
[**eventControllerGetEvents**](EventsApi.md#eventControllerGetEvents) | **GET** /v1/events | 
[**eventControllerUpdateEvent**](EventsApi.md#eventControllerUpdateEvent) | **PUT** /v1/event | 


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
    time: "time_example",
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

# **eventControllerGetEvents**
> EventsResponseDto eventControllerGetEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerGetEventsRequest = {
  // number (optional)
  page: 3.14,
  // number (optional)
  limit: 3.14,
};

apiInstance.eventControllerGetEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
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

# **eventControllerUpdateEvent**
> EventResponseDto eventControllerUpdateEvent(eventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerUpdateEventRequest = {
  // EventPayloadDto
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    time: "time_example",
    price: 3.14,
    description: "description_example",
    id: "id_example",
  },
};

apiInstance.eventControllerUpdateEvent(body).then((data:any) => {
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

