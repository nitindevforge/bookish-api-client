import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadResponse } from '../models/OtpEntityPayloadResponse';
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

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerChangePasswordRequest {
    /**
     * 
     * @type ChangePayloadDto
     * @memberof AuthApiauthControllerChangePassword
     */
    changePayloadDto: ChangePayloadDto
}

export interface AuthApiAuthControllerCreateUserRequest {
    /**
     * 
     * @type SignupPayloadDto
     * @memberof AuthApiauthControllerCreateUser
     */
    signupPayloadDto: SignupPayloadDto
}

export interface AuthApiAuthControllerForgetPasswordRequest {
    /**
     * 
     * @type ForgetPasswordPayloadDto
     * @memberof AuthApiauthControllerForgetPassword
     */
    forgetPasswordPayloadDto: ForgetPasswordPayloadDto
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type LoginPayloadDto
     * @memberof AuthApiauthControllerLogin
     */
    loginPayloadDto: LoginPayloadDto
}

export interface AuthApiAuthControllerUserMeRequest {
}

export interface AuthApiAuthControllerUserRoleUpdateRequest {
    /**
     * 
     * @type UserRolePayloadDto
     * @memberof AuthApiauthControllerUserRoleUpdate
     */
    userRolePayloadDto: UserRolePayloadDto
}

export interface AuthApiAuthControllerVerifyOtpRequest {
    /**
     * 
     * @type OtpEntityPayloadResponse
     * @memberof AuthApiauthControllerVerifyOtp
     */
    otpEntityPayloadResponse: OtpEntityPayloadResponse
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerChangePasswordWithHttpInfo(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>> {
        return this.api.authControllerChangePasswordWithHttpInfo(param.changePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerChangePassword(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<PasswordChangeResponseDto> {
        return this.api.authControllerChangePassword(param.changePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateUserWithHttpInfo(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerCreateUserWithHttpInfo(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateUser(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerCreateUser(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerForgetPasswordWithHttpInfo(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerForgetPassword(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerLoginWithHttpInfo(param.loginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerLogin(param.loginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserMeWithHttpInfo(param: AuthApiAuthControllerUserMeRequest = {}, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserMeWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserMe(param: AuthApiAuthControllerUserMeRequest = {}, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerUserMe( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserRoleUpdateWithHttpInfo(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserRoleUpdateWithHttpInfo(param.userRolePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserRoleUpdate(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerUserRoleUpdate(param.userRolePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtpWithHttpInfo(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerVerifyOtpWithHttpInfo(param.otpEntityPayloadResponse,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtp(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerVerifyOtp(param.otpEntityPayloadResponse,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAppControllerGetHelloRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public appControllerGetHelloWithHttpInfo(param: DefaultApiAppControllerGetHelloRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appControllerGetHelloWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public appControllerGetHello(param: DefaultApiAppControllerGetHelloRequest = {}, options?: Configuration): Promise<void> {
        return this.api.appControllerGetHello( options).toPromise();
    }

}

import { ObservableFriendsApi } from "./ObservableAPI";
import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";

export interface FriendsApiUserControllerGetSearchUserRequest {
    /**
     * 
     * @type string
     * @memberof FriendsApiuserControllerGetSearchUser
     */
    search?: string
    /**
     * 
     * @type number
     * @memberof FriendsApiuserControllerGetSearchUser
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof FriendsApiuserControllerGetSearchUser
     */
    limit?: number
}

export class ObjectFriendsApi {
    private api: ObservableFriendsApi

    public constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public userControllerGetSearchUserWithHttpInfo(param: FriendsApiUserControllerGetSearchUserRequest = {}, options?: Configuration): Promise<HttpInfo<SearchUserResponseDto>> {
        return this.api.userControllerGetSearchUserWithHttpInfo(param.search, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userControllerGetSearchUser(param: FriendsApiUserControllerGetSearchUserRequest = {}, options?: Configuration): Promise<SearchUserResponseDto> {
        return this.api.userControllerGetSearchUser(param.search, param.page, param.limit,  options).toPromise();
    }

}
