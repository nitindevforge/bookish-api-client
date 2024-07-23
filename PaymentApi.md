# .PaymentApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stripeControllerCreatePaymentIntent**](PaymentApi.md#stripeControllerCreatePaymentIntent) | **POST** /v1/payment/create | 
[**stripeControllerGetCardList**](PaymentApi.md#stripeControllerGetCardList) | **GET** /v1/payment/cards | 


# **stripeControllerCreatePaymentIntent**
> StripeResponseDto stripeControllerCreatePaymentIntent(stripePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentApi(configuration);

let body:.PaymentApiStripeControllerCreatePaymentIntentRequest = {
  // StripePayloadDto
  stripePayloadDto: {
    amount: 3.14,
  },
};

apiInstance.stripeControllerCreatePaymentIntent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripePayloadDto** | **StripePayloadDto**|  |


### Return type

**StripeResponseDto**

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

# **stripeControllerGetCardList**
> CardListResponseDto stripeControllerGetCardList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentApi(configuration);

let body:any = {};

apiInstance.stripeControllerGetCardList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CardListResponseDto**

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


