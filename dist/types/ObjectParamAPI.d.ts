import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendResponseDto } from '../models/FriendResponseDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
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
export interface AuthApiAuthControllerGetInterestsRequest {
}
export interface AuthApiAuthControllerLoginRequest {
    loginPayloadDto: LoginPayloadDto;
}
export interface AuthApiAuthControllerUserMeRequest {
}
export interface AuthApiAuthControllerUserRoleUpdateRequest {
    userRolePayloadDto: UserRolePayloadDto;
}
export interface AuthApiAuthControllerUserUpdateRequest {
    userUpdatePayloadDto: UserUpdatePayloadDto;
}
export interface AuthApiAuthControllerVerifyOtpRequest {
    otpEntityPayloadDto: OtpEntityPayloadDto;
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerChangePasswordWithHttpInfo(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<PasswordChangeResponseDto>;
    authControllerCreateUserWithHttpInfo(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
    authControllerGetInterestsWithHttpInfo(param?: AuthApiAuthControllerGetInterestsRequest, options?: Configuration): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(param?: AuthApiAuthControllerGetInterestsRequest, options?: Configuration): Promise<InterestsResponseDto>;
    authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserMeWithHttpInfo(param?: AuthApiAuthControllerUserMeRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMe(param?: AuthApiAuthControllerUserMeRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserUpdateWithHttpInfo(param: AuthApiAuthControllerUserUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserUpdate(param: AuthApiAuthControllerUserUpdateRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerVerifyOtp(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
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
export interface FriendsApiFriendControllerGetFriendsRequest {
    search?: string;
    page?: number;
    limit?: number;
}
export declare class ObjectFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    friendControllerGetFriendsWithHttpInfo(param?: FriendsApiFriendControllerGetFriendsRequest, options?: Configuration): Promise<HttpInfo<FriendResponseDto>>;
    friendControllerGetFriends(param?: FriendsApiFriendControllerGetFriendsRequest, options?: Configuration): Promise<FriendResponseDto>;
}
import { UploadApiRequestFactory, UploadApiResponseProcessor } from "../apis/UploadApi";
export interface UploadApiFileUploadControllerGetPreSignedURLRequest {
    fileUploadPayloadDto: FileUploadPayloadDto;
}
export declare class ObjectUploadApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UploadApiRequestFactory, responseProcessor?: UploadApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(param: UploadApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(param: UploadApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<void>;
}
