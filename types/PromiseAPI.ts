import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SearchUserResponseDto } from '../models/SearchUserResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { UserDetails } from '../models/UserDetails';
import { UserResponse } from '../models/UserResponse';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>> {
        const result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<PasswordChangeResponseDto> {
        const result = this.api.authControllerChangePassword(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerCreateUser(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerLogin(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMe(_options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserMe(_options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public appControllerGetHelloWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appControllerGetHelloWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public appControllerGetHello(_options?: Configuration): Promise<void> {
        const result = this.api.appControllerGetHello(_options);
        return result.toPromise();
    }


}



import { ObservableFriendsApi } from './ObservableAPI';

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class PromiseFriendsApi {
    private api: ObservableFriendsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public userControllerGetSearchUserWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<SearchUserResponseDto>> {
        const result = this.api.userControllerGetSearchUserWithHttpInfo(search, page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public userControllerGetSearchUser(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<SearchUserResponseDto> {
        const result = this.api.userControllerGetSearchUser(search, page, limit, _options);
        return result.toPromise();
    }


}



