# .AuthApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerAccountDeletion**](AuthApi.md#authControllerAccountDeletion) | **PUT** /v1/auth/delete | 
[**authControllerChangePassword**](AuthApi.md#authControllerChangePassword) | **PUT** /v1/auth/change-password | 
[**authControllerCreateBusinessUser**](AuthApi.md#authControllerCreateBusinessUser) | **POST** /v1/auth/register-business | 
[**authControllerCreateRoles**](AuthApi.md#authControllerCreateRoles) | **POST** /v1/auth/role | 
[**authControllerCreateStaff**](AuthApi.md#authControllerCreateStaff) | **POST** /v1/auth/staff | 
[**authControllerCreateUser**](AuthApi.md#authControllerCreateUser) | **POST** /v1/auth/signup | 
[**authControllerDeleteRole**](AuthApi.md#authControllerDeleteRole) | **DELETE** /v1/auth/role/{id} | 
[**authControllerDeleteStaff**](AuthApi.md#authControllerDeleteStaff) | **DELETE** /v1/auth/staff/{id} | 
[**authControllerForgetPassword**](AuthApi.md#authControllerForgetPassword) | **PUT** /v1/auth/forget-password | 
[**authControllerGetActivity**](AuthApi.md#authControllerGetActivity) | **GET** /v1/auth/activities | 
[**authControllerGetAllStaff**](AuthApi.md#authControllerGetAllStaff) | **GET** /v1/auth/staff | 
[**authControllerGetEventsActivity**](AuthApi.md#authControllerGetEventsActivity) | **GET** /v1/auth/events/activities | 
[**authControllerGetInterests**](AuthApi.md#authControllerGetInterests) | **GET** /v1/auth/interests | 
[**authControllerGetPermission**](AuthApi.md#authControllerGetPermission) | **GET** /v1/auth/permissions | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /v1/auth/login | 
[**authControllerStoreDetailsUpdate**](AuthApi.md#authControllerStoreDetailsUpdate) | **PUT** /v1/auth/store-details | 
[**authControllerUpdateRoles**](AuthApi.md#authControllerUpdateRoles) | **PUT** /v1/auth/update/role/{id} | 
[**authControllerUpdateStaff**](AuthApi.md#authControllerUpdateStaff) | **PUT** /v1/auth/staff/{id} | 
[**authControllerUser**](AuthApi.md#authControllerUser) | **GET** /v1/auth/roles | 
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
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerAccountDeletion(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerChangePasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerChangePasswordRequest = {
  
  changePayloadDto: {
    email: "email_example",
    confirmPassword: "confirmPassword_example",
    newPassword: "newPassword_example",
  },
};

const data = await apiInstance.authControllerChangePassword(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerCreateBusinessUser**
> UserResponseDto authControllerCreateBusinessUser(signupPayloadDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerCreateBusinessUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerCreateBusinessUserRequest = {
  
  signupPayloadDto: {
    userName: "userName_example",
    email: "email_example",
    password: "password_example",
  },
};

const data = await apiInstance.authControllerCreateBusinessUser(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerCreateRoles**
> authControllerCreateRoles(createRoleDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerCreateRolesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerCreateRolesRequest = {
    // Payload to create a new role
  createRoleDto: {
    name: "Admin",
    description: "This role provides administrative access to the system.",
    permissions: ["64c9abefc347e1234567890a","64c9abefc347e1234567890b"],
  },
};

const data = await apiInstance.authControllerCreateRoles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRoleDto** | **CreateRoleDto**| Payload to create a new role |


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

# **authControllerCreateStaff**
> CreateStaffDto authControllerCreateStaff(createStaffDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerCreateStaffRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerCreateStaffRequest = {
  
  createStaffDto: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    roles: ["60d0fe4f5311236168a109ca","60d0fe4f5311236168a109cb"],
  },
};

const data = await apiInstance.authControllerCreateStaff(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStaffDto** | **CreateStaffDto**|  |


### Return type

**CreateStaffDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Staff created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerCreateUser**
> UserResponseDto authControllerCreateUser(signupPayloadDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerCreateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerCreateUserRequest = {
  
  signupPayloadDto: {
    userName: "userName_example",
    email: "email_example",
    password: "password_example",
  },
};

const data = await apiInstance.authControllerCreateUser(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerDeleteRole**
> authControllerDeleteRole()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerDeleteRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerDeleteRoleRequest = {
  
  id: "id_example",
};

const data = await apiInstance.authControllerDeleteRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **authControllerDeleteStaff**
> UserDeleteResponseDto authControllerDeleteStaff()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerDeleteStaffRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerDeleteStaffRequest = {
  
  id: "id_example",
};

const data = await apiInstance.authControllerDeleteStaff(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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
**200** | Staff deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerForgetPassword**
> ForgetPasswordEntityResponseDto authControllerForgetPassword(forgetPasswordPayloadDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerForgetPasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerForgetPasswordRequest = {
  
  forgetPasswordPayloadDto: {
    email: "email_example",
  },
};

const data = await apiInstance.authControllerForgetPassword(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerGetActivityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerGetActivityRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  longitude: 3.14,
  
  latitude: 3.14,
  
  global: true,
};

const data = await apiInstance.authControllerGetActivity(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerGetAllStaff**
> void authControllerGetAllStaff()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerGetAllStaffRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerGetAllStaffRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  search: "search_example",
};

const data = await apiInstance.authControllerGetAllStaff(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All staff retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerGetEventsActivity**
> ActivityResponseDto authControllerGetEventsActivity()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerGetEventsActivityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerGetEventsActivityRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  longitude: 3.14,
  
  latitude: 3.14,
  
  global: true,
};

const data = await apiInstance.authControllerGetEventsActivity(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerGetInterests(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerGetPermission**
> authControllerGetPermission()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerGetPermission(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerLoginRequest = {
  
  loginPayloadDto: {
    email: "email_example",
    password: "password_example",
  },
};

const data = await apiInstance.authControllerLogin(request);
console.log('API called successfully. Returned data:', data);
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

# **authControllerStoreDetailsUpdate**
> UserResponseDto authControllerStoreDetailsUpdate(storeDetailsPayloadDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerStoreDetailsUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerStoreDetailsUpdateRequest = {
  
  storeDetailsPayloadDto: {
    storeName: "storeName_example",
    storeLogo: "storeLogo_example",
  },
};

const data = await apiInstance.authControllerStoreDetailsUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeDetailsPayloadDto** | **StoreDetailsPayloadDto**|  |


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

# **authControllerUpdateRoles**
> authControllerUpdateRoles(updateRoleDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUpdateRolesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUpdateRolesRequest = {
  
  id: "id_example",
  
  updateRoleDto: {
    name: "Moderator",
    description: "This role provides moderation capabilities in the system.",
    permissions: ["64c9abefc347e1234567890b","64c9abefc347e1234567890c"],
  },
};

const data = await apiInstance.authControllerUpdateRoles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRoleDto** | **UpdateRoleDto**|  |
 **id** | [**string**] |  | defaults to undefined


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

# **authControllerUpdateStaff**
> void authControllerUpdateStaff(updateStaffDto)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUpdateStaffRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUpdateStaffRequest = {
  
  id: "id_example",
  
  updateStaffDto: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    roles: ["60d0fe4f5311236168a109ca","60d0fe4f5311236168a109cb"],
  },
};

const data = await apiInstance.authControllerUpdateStaff(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStaffDto** | **UpdateStaffDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Staff updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUser**
> authControllerUser()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUserRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  allRoles: true,
  
  search: "search_example",
};

const data = await apiInstance.authControllerUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **allRoles** | [**boolean**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


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

# **authControllerUserById**
> UserResponseDto authControllerUserById()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUserByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUserByIdRequest = {
  
  id: "id_example",
};

const data = await apiInstance.authControllerUserById(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUserFollowersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUserFollowersRequest = {
  
  id: "id_example",
};

const data = await apiInstance.authControllerUserFollowers(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authControllerUserMe(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUserRoleUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUserRoleUpdateRequest = {
  
  userRolePayloadDto: {
    role: "role_example",
  },
};

const data = await apiInstance.authControllerUserRoleUpdate(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerUserUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerUserUpdateRequest = {
  
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

const data = await apiInstance.authControllerUserUpdate(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthControllerVerifyOtpRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthControllerVerifyOtpRequest = {
  
  otpEntityPayloadDto: {
    otp: "otp_example",
    email: "email_example",
  },
};

const data = await apiInstance.authControllerVerifyOtp(request);
console.log('API called successfully. Returned data:', data);
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


