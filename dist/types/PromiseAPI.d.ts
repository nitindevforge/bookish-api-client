import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadResponse } from '../models/OtpEntityPayloadResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SearchUserResponseDto } from '../models/SearchUserResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<PasswordChangeResponseDto>;
    authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerForgetPasswordWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>>;
    authControllerForgetPassword(_options?: Configuration): Promise<void>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Promise<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadResponse: OtpEntityPayloadResponse, _options?: Configuration): Promise<HttpInfo<void>>;
    authControllerVerifyOtp(otpEntityPayloadResponse: OtpEntityPayloadResponse, _options?: Configuration): Promise<void>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetHelloWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>>;
    appControllerGetHello(_options?: Configuration): Promise<void>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export declare class PromiseFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    userControllerGetSearchUserWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<SearchUserResponseDto>>;
    userControllerGetSearchUser(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<SearchUserResponseDto>;
}
