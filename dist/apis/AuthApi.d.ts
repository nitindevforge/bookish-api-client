import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerGetActivity(page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    authControllerGetInterests(_options?: Configuration): Promise<RequestContext>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUserById(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerUserFollowers(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerUserMe(_options?: Configuration): Promise<RequestContext>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    authControllerChangePasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerCreateUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerForgetPasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerGetActivityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetInterestsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerLoginWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserFollowersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserFollowerResponseDto>>;
    authControllerUserMeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerVerifyOtpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
}
