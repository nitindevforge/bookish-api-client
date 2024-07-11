import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadResponse } from '../models/OtpEntityPayloadResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUserMe(_options?: Configuration): Promise<RequestContext>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerVerifyOtp(otpEntityPayloadResponse: OtpEntityPayloadResponse, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    authControllerChangePasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerCreateUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerForgetPasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerLoginWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerVerifyOtpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
