# .AuthApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerChangePassword**](AuthApi.md#authControllerChangePassword) | **PUT** /v1/auth/change-password | 
[**authControllerCreateUser**](AuthApi.md#authControllerCreateUser) | **POST** /v1/auth/signup | 
[**authControllerForgetPassword**](AuthApi.md#authControllerForgetPassword) | **PUT** /v1/auth/forget-password | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /v1/auth/login | 
[**authControllerUserMe**](AuthApi.md#authControllerUserMe) | **PUT** /v1/auth/user | 
[**authControllerUserRoleUpdate**](AuthApi.md#authControllerUserRoleUpdate) | **PUT** /v1/auth/role | 
[**authControllerVerifyOtp**](AuthApi.md#authControllerVerifyOtp) | **PUT** /v1/auth/verify-otp | 


# **authControllerChangePassword**
> PasswordChangeResponseDto authControllerChangePassword(changePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerChangePasswordRequest = {
  // ChangePayloadDto
  changePayloadDto: {
    confirmPassword: "confirmPassword_example",
    newPassword: "newPassword_example",
  },
};

apiInstance.authControllerChangePassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePayloadDto** | **ChangePayloadDto**|  |


### Return type

**PasswordChangeResponseDto**

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

# **authControllerCreateUser**
> UserResponseDto authControllerCreateUser(signupPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateUserRequest = {
  // SignupPayloadDto
  signupPayloadDto: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    email: "email_example",
    password: "password_example",
  },
};

apiInstance.authControllerCreateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupPayloadDto** | **SignupPayloadDto**|  |


### Return type

**UserResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerForgetPassword**
> authControllerForgetPassword()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerForgetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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

# **authControllerLogin**
> UserResponseDto authControllerLogin(loginPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerLoginRequest = {
  // LoginPayloadDto
  loginPayloadDto: {
    email: "email_example",
    password: "password_example",
  },
};

apiInstance.authControllerLogin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginPayloadDto** | **LoginPayloadDto**|  |


### Return type

**UserResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUserMe**
> UserResponseDto authControllerUserMe()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerUserMe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserResponseDto**

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

# **authControllerUserRoleUpdate**
> UserResponseDto authControllerUserRoleUpdate(userRolePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserRoleUpdateRequest = {
  // UserRolePayloadDto
  userRolePayloadDto: {
    role: "role_example",
  },
};

apiInstance.authControllerUserRoleUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRolePayloadDto** | **UserRolePayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerVerifyOtp**
> authControllerVerifyOtp(otpEntityPayloadResponse)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerVerifyOtpRequest = {
  // OtpEntityPayloadResponse
  otpEntityPayloadResponse: {
    otp: "otp_example",
  },
};

apiInstance.authControllerVerifyOtp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otpEntityPayloadResponse** | **OtpEntityPayloadResponse**|  |


### Return type

void (empty response body)

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


