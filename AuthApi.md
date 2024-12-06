# .AuthApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerAccountDeletion**](AuthApi.md#authControllerAccountDeletion) | **PUT** /v1/auth/delete | 
[**authControllerChangePassword**](AuthApi.md#authControllerChangePassword) | **PUT** /v1/auth/change-password | 
[**authControllerCreateUser**](AuthApi.md#authControllerCreateUser) | **POST** /v1/auth/signup | 
[**authControllerForgetPassword**](AuthApi.md#authControllerForgetPassword) | **PUT** /v1/auth/forget-password | 
[**authControllerGetActivity**](AuthApi.md#authControllerGetActivity) | **GET** /v1/auth/activities | 
[**authControllerGetEventsActivity**](AuthApi.md#authControllerGetEventsActivity) | **GET** /v1/auth/events/activities | 
[**authControllerGetInterests**](AuthApi.md#authControllerGetInterests) | **GET** /v1/auth/interests | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /v1/auth/login | 
[**authControllerUserById**](AuthApi.md#authControllerUserById) | **GET** /v1/auth/user | 
[**authControllerUserFollowers**](AuthApi.md#authControllerUserFollowers) | **GET** /v1/auth/follower | 
[**authControllerUserMe**](AuthApi.md#authControllerUserMe) | **GET** /v1/auth/user/me | 
[**authControllerUserRoleUpdate**](AuthApi.md#authControllerUserRoleUpdate) | **PUT** /v1/auth/role | 
[**authControllerUserUpdate**](AuthApi.md#authControllerUserUpdate) | **PUT** /v1/auth/user | 
[**authControllerVerifyOtp**](AuthApi.md#authControllerVerifyOtp) | **PUT** /v1/auth/verify-otp | 


# **authControllerAccountDeletion**
> UserDeleteResponseDto authControllerAccountDeletion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerAccountDeletion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserDeleteResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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
    email: "email_example",
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

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
    userName: "userName_example",
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
> ForgetPasswordEntityResponseDto authControllerForgetPassword(forgetPasswordPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerForgetPasswordRequest = {
  // ForgetPasswordPayloadDto
  forgetPasswordPayloadDto: {
    email: "email_example",
  },
};

apiInstance.authControllerForgetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgetPasswordPayloadDto** | **ForgetPasswordPayloadDto**|  |


### Return type

**ForgetPasswordEntityResponseDto**

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

# **authControllerGetActivity**
> ActivityResponseDto authControllerGetActivity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetActivityRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // number (optional)
  longitude: 3.14,
  // number (optional)
  latitude: 3.14,
  // boolean (optional)
  global: true,
};

apiInstance.authControllerGetActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **global** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ActivityResponseDto**

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

# **authControllerGetEventsActivity**
> ActivityResponseDto authControllerGetEventsActivity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetEventsActivityRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // number (optional)
  longitude: 3.14,
  // number (optional)
  latitude: 3.14,
  // boolean (optional)
  global: true,
};

apiInstance.authControllerGetEventsActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **global** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ActivityResponseDto**

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

# **authControllerGetInterests**
> InterestsResponseDto authControllerGetInterests()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerGetInterests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**InterestsResponseDto**

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

# **authControllerUserById**
> UserResponseDto authControllerUserById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUserFollowers**
> UserFollowerResponseDto authControllerUserFollowers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserFollowersRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerUserFollowers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserFollowerResponseDto**

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

# **authControllerUserUpdate**
> UserResponseDto authControllerUserUpdate(userUpdatePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserUpdateRequest = {
  // UserUpdatePayloadDto
  userUpdatePayloadDto: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    userName: "userName_example",
    interests: [
      "interests_example",
    ],
    email: "email_example",
    profile: "profile_example",
    followerCount: 3.14,
    followingCount: 3.14,
  },
};

apiInstance.authControllerUserUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdatePayloadDto** | **UserUpdatePayloadDto**|  |


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
> ForgetPasswordEntityResponseDto authControllerVerifyOtp(otpEntityPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerVerifyOtpRequest = {
  // OtpEntityPayloadDto
  otpEntityPayloadDto: {
    otp: "otp_example",
    email: "email_example",
  },
};

apiInstance.authControllerVerifyOtp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otpEntityPayloadDto** | **OtpEntityPayloadDto**|  |


### Return type

**ForgetPasswordEntityResponseDto**

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


