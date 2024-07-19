import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
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
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<PasswordChangeResponseDto>;
    authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
    authControllerGetInterestsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(_options?: Configuration): Promise<InterestsResponseDto>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserById(id: string, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Promise<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
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
    friendControllerGetFriendsWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>>;
    friendControllerGetFriends(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<FriendsResponseDto>;
}
import { UploadApiRequestFactory, UploadApiResponseProcessor } from "../apis/UploadApi";
export declare class PromiseUploadApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UploadApiRequestFactory, responseProcessor?: UploadApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<void>;
}
