import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
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
    authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto>;
    authControllerGetInterestsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(_options?: Configuration): Observable<InterestsResponseDto>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserById(id: string, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Observable<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto>;
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
    friendControllerGetFriendsWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<FriendsResponseDto>>;
    friendControllerGetFriends(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<FriendsResponseDto>;
}
import { UploadApiRequestFactory, UploadApiResponseProcessor } from "../apis/UploadApi";
export declare class ObservableUploadApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UploadApiRequestFactory, responseProcessor?: UploadApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Observable<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Observable<void>;
}
