import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { BillingDetails } from '../models/BillingDetails';
import { Card } from '../models/Card';
import { CardChecks } from '../models/CardChecks';
import { CardList } from '../models/CardList';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { CardNetwork } from '../models/CardNetwork';
import { CardSecure } from '../models/CardSecure';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { Events } from '../models/Events';
import { EventsList } from '../models/EventsList';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { ForgetPasswordEntityResponse } from '../models/ForgetPasswordEntityResponse';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendsResponse } from '../models/FriendsResponse';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
import { InterestsPayloadDto } from '../models/InterestsPayloadDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripeCardDeletePayloadDto } from '../models/StripeCardDeletePayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserDetails } from '../models/UserDetails';
import { UserResponse } from '../models/UserResponse';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';

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

export interface AuthApiAuthControllerGetInterestsRequest {
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type LoginPayloadDto
     * @memberof AuthApiauthControllerLogin
     */
    loginPayloadDto: LoginPayloadDto
}

export interface AuthApiAuthControllerUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof AuthApiauthControllerUserById
     */
    id: string
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

export interface AuthApiAuthControllerUserUpdateRequest {
    /**
     * 
     * @type UserUpdatePayloadDto
     * @memberof AuthApiauthControllerUserUpdate
     */
    userUpdatePayloadDto: UserUpdatePayloadDto
}

export interface AuthApiAuthControllerVerifyOtpRequest {
    /**
     * 
     * @type OtpEntityPayloadDto
     * @memberof AuthApiauthControllerVerifyOtp
     */
    otpEntityPayloadDto: OtpEntityPayloadDto
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
    public authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        return this.api.authControllerForgetPasswordWithHttpInfo(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        return this.api.authControllerForgetPassword(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetInterestsWithHttpInfo(param: AuthApiAuthControllerGetInterestsRequest = {}, options?: Configuration): Promise<HttpInfo<InterestsResponseDto>> {
        return this.api.authControllerGetInterestsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetInterests(param: AuthApiAuthControllerGetInterestsRequest = {}, options?: Configuration): Promise<InterestsResponseDto> {
        return this.api.authControllerGetInterests( options).toPromise();
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
    public authControllerUserByIdWithHttpInfo(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserById(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerUserById(param.id,  options).toPromise();
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
    public authControllerUserUpdateWithHttpInfo(param: AuthApiAuthControllerUserUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserUpdateWithHttpInfo(param.userUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserUpdate(param: AuthApiAuthControllerUserUpdateRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerUserUpdate(param.userUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtpWithHttpInfo(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        return this.api.authControllerVerifyOtpWithHttpInfo(param.otpEntityPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtp(param: AuthApiAuthControllerVerifyOtpRequest, options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        return this.api.authControllerVerifyOtp(param.otpEntityPayloadDto,  options).toPromise();
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

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiEventControllerCreateEventRequest {
    /**
     * 
     * @type EventPayloadDto
     * @memberof EventsApieventControllerCreateEvent
     */
    eventPayloadDto: EventPayloadDto
}

export interface EventsApiEventControllerGetEventsRequest {
    /**
     * 
     * @type number
     * @memberof EventsApieventControllerGetEvents
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof EventsApieventControllerGetEvents
     */
    limit?: number
}

export interface EventsApiEventControllerUpdateEventRequest {
    /**
     * 
     * @type EventPayloadDto
     * @memberof EventsApieventControllerUpdateEvent
     */
    eventPayloadDto: EventPayloadDto
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateEventWithHttpInfo(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerCreateEventWithHttpInfo(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateEvent(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<EventResponseDto> {
        return this.api.eventControllerCreateEvent(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerGetEventsWithHttpInfo(param: EventsApiEventControllerGetEventsRequest = {}, options?: Configuration): Promise<HttpInfo<EventsResponseDto>> {
        return this.api.eventControllerGetEventsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerGetEvents(param: EventsApiEventControllerGetEventsRequest = {}, options?: Configuration): Promise<EventsResponseDto> {
        return this.api.eventControllerGetEvents(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEventWithHttpInfo(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerUpdateEventWithHttpInfo(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEvent(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<EventResponseDto> {
        return this.api.eventControllerUpdateEvent(param.eventPayloadDto,  options).toPromise();
    }

}

import { ObservableFollowerApi } from "./ObservableAPI";
import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";

export interface FollowerApiFollowerControllerFollowingRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerFollowing
     */
    followerPayloadDto: FollowerPayloadDto
}

export interface FollowerApiFollowerControllerUnFollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerUnFollow
     */
    followerPayloadDto: FollowerPayloadDto
}

export class ObjectFollowerApi {
    private api: ObservableFollowerApi

    public constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor) {
        this.api = new ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public followerControllerFollowingWithHttpInfo(param: FollowerApiFollowerControllerFollowingRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerFollowingWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFollowing(param: FollowerApiFollowerControllerFollowingRequest, options?: Configuration): Promise<FollowerResponseDto> {
        return this.api.followerControllerFollowing(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnFollowWithHttpInfo(param: FollowerApiFollowerControllerUnFollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerUnFollowWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnFollow(param: FollowerApiFollowerControllerUnFollowRequest, options?: Configuration): Promise<FollowerResponseDto> {
        return this.api.followerControllerUnFollow(param.followerPayloadDto,  options).toPromise();
    }

}

import { ObservableFriendsApi } from "./ObservableAPI";
import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";

export interface FriendsApiFriendControllerGetFriendsRequest {
    /**
     * 
     * @type string
     * @memberof FriendsApifriendControllerGetFriends
     */
    search?: string
    /**
     * 
     * @type number
     * @memberof FriendsApifriendControllerGetFriends
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof FriendsApifriendControllerGetFriends
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
    public friendControllerGetFriendsWithHttpInfo(param: FriendsApiFriendControllerGetFriendsRequest = {}, options?: Configuration): Promise<HttpInfo<FriendsResponseDto>> {
        return this.api.friendControllerGetFriendsWithHttpInfo(param.search, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public friendControllerGetFriends(param: FriendsApiFriendControllerGetFriendsRequest = {}, options?: Configuration): Promise<FriendsResponseDto> {
        return this.api.friendControllerGetFriends(param.search, param.page, param.limit,  options).toPromise();
    }

}

import { ObservablePaymentApi } from "./ObservableAPI";
import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";

export interface PaymentApiStripeControllerCreatePaymentIntentRequest {
    /**
     * 
     * @type StripePayloadDto
     * @memberof PaymentApistripeControllerCreatePaymentIntent
     */
    stripePayloadDto: StripePayloadDto
}

export interface PaymentApiStripeControllerDeleteCardDetailsRequest {
    /**
     * 
     * @type StripeCardDeletePayloadDto
     * @memberof PaymentApistripeControllerDeleteCardDetails
     */
    stripeCardDeletePayloadDto: StripeCardDeletePayloadDto
}

export interface PaymentApiStripeControllerGetCardListRequest {
}

export class ObjectPaymentApi {
    private api: ObservablePaymentApi

    public constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public stripeControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiStripeControllerCreatePaymentIntentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>> {
        return this.api.stripeControllerCreatePaymentIntentWithHttpInfo(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stripeControllerCreatePaymentIntent(param: PaymentApiStripeControllerCreatePaymentIntentRequest, options?: Configuration): Promise<StripeResponseDto> {
        return this.api.stripeControllerCreatePaymentIntent(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stripeControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiStripeControllerDeleteCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.stripeControllerDeleteCardDetailsWithHttpInfo(param.stripeCardDeletePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stripeControllerDeleteCardDetails(param: PaymentApiStripeControllerDeleteCardDetailsRequest, options?: Configuration): Promise<CardListResponseDto> {
        return this.api.stripeControllerDeleteCardDetails(param.stripeCardDeletePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stripeControllerGetCardListWithHttpInfo(param: PaymentApiStripeControllerGetCardListRequest = {}, options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.stripeControllerGetCardListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stripeControllerGetCardList(param: PaymentApiStripeControllerGetCardListRequest = {}, options?: Configuration): Promise<CardListResponseDto> {
        return this.api.stripeControllerGetCardList( options).toPromise();
    }

}

import { ObservableUploadApi } from "./ObservableAPI";
import { UploadApiRequestFactory, UploadApiResponseProcessor} from "../apis/UploadApi";

export interface UploadApiFileUploadControllerGetPreSignedURLRequest {
    /**
     * 
     * @type FileUploadPayloadDto
     * @memberof UploadApifileUploadControllerGetPreSignedURL
     */
    fileUploadPayloadDto: FileUploadPayloadDto
}

export class ObjectUploadApi {
    private api: ObservableUploadApi

    public constructor(configuration: Configuration, requestFactory?: UploadApiRequestFactory, responseProcessor?: UploadApiResponseProcessor) {
        this.api = new ObservableUploadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public fileUploadControllerGetPreSignedURLWithHttpInfo(param: UploadApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(param.fileUploadPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public fileUploadControllerGetPreSignedURL(param: UploadApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<void> {
        return this.api.fileUploadControllerGetPreSignedURL(param.fileUploadPayloadDto,  options).toPromise();
    }

}
