import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadResponse } from '../models/OtpEntityPayloadResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SearchUserResponseDto } from '../models/SearchUserResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiAuthControllerChangePasswordRequest {
    changePayloadDto: ChangePayloadDto;
}
export interface AuthApiAuthControllerCreateUserRequest {
    signupPayloadDto: SignupPayloadDto;
}
export interface AuthApiAuthControllerForgetPasswordRequest {
    forgetPasswordPayloadDto: ForgetPasswordPayloadDto;
}
export interface AuthApiAuthControllerLoginRequest {
    loginPayloadDto: LoginPayloadDto;
}
export interface AuthApiAuthControllerUserMeRequest {
}
export interface AuthApiAuthControllerUserRoleUpdateRequest {
    userRolePayloadDto: UserRolePayloadDto;
}
export interface AuthApiAuthControllerVerifyOtpRequest {
    otpEntityPayloadResponse: OtpEntityPayloadResponse;
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerChangePasswordWithHttpInfo(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<PasswordChangeResponseDto>;
    authControllerCreateUserWithHttpInfo(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<void>;
    authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserMeWithHttpInfo(param?: AuthApiAuthControllerUserMeRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMe(param?: AuthApiAuthControllerUserMeRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerVerifyOtp(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<void>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiAppControllerGetHelloRequest {
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetHelloWithHttpInfo(param?: DefaultApiAppControllerGetHelloRequest, options?: Configuration): Promise<HttpInfo<void>>;
    appControllerGetHello(param?: DefaultApiAppControllerGetHelloRequest, options?: Configuration): Promise<void>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export interface FriendsApiUserControllerGetSearchUserRequest {
    search?: string;
    page?: number;
    limit?: number;
}
export declare class ObjectFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    userControllerGetSearchUserWithHttpInfo(param?: FriendsApiUserControllerGetSearchUserRequest, options?: Configuration): Promise<HttpInfo<SearchUserResponseDto>>;
    userControllerGetSearchUser(param?: FriendsApiUserControllerGetSearchUserRequest, options?: Configuration): Promise<SearchUserResponseDto>;
}
