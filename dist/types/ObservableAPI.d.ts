import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<PasswordChangeResponseDto>;
    authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<void>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Observable<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadResponse: OtpEntityPayloadResponse, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerVerifyOtp(otpEntityPayloadResponse: OtpEntityPayloadResponse, _options?: Configuration): Observable<void>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetHelloWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>>;
    appControllerGetHello(_options?: Configuration): Observable<void>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export declare class ObservableFriendsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    userControllerGetSearchUserWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<SearchUserResponseDto>>;
    userControllerGetSearchUser(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<SearchUserResponseDto>;
}
