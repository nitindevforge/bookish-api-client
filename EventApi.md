# .EventApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateEvent**](EventApi.md#eventControllerCreateEvent) | **POST** /v1/event/create | 
[**eventControllerGetEvents**](EventApi.md#eventControllerGetEvents) | **GET** /v1/event | 
[**eventControllerUpdateEvent**](EventApi.md#eventControllerUpdateEvent) | **PUT** /v1/event/{id} | 


# **eventControllerCreateEvent**
> EventResponseDto eventControllerCreateEvent(eventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventApi(configuration);

let body:.EventApiEventControllerCreateEventRequest = {
  // EventPayloadDto
  eventPayloadDto: {
    name: "name_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    time: "time_example",
    price: 3.14,
    description: "description_example",
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
const apiInstance = new .EventApi(configuration);

let body:any = {};

apiInstance.eventControllerGetEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
const apiInstance = new .EventApi(configuration);

let body:.EventApiEventControllerUpdateEventRequest = {
  // any
  id: null,
  // EventPayloadDto
  eventPayloadDto: {
    name: "name_example",
    image: "image_example",
    date: new Date('1970-01-01T00:00:00.00Z'),
    time: "time_example",
    price: 3.14,
    description: "description_example",
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
 **id** | **any** |  | defaults to undefined


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


