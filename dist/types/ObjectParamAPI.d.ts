import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripeCardDeletePayloadDto } from '../models/StripeCardDeletePayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
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
export interface AuthApiAuthControllerUserByIdRequest {
    id: string;
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
    authControllerUserByIdWithHttpInfo(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserById(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<UserResponseDto>;
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
import { EventApiRequestFactory, EventApiResponseProcessor } from "../apis/EventApi";
export interface EventApiEventControllerCreateEventRequest {
    eventPayloadDto: EventPayloadDto;
}
export interface EventApiEventControllerGetEventsRequest {
}
export interface EventApiEventControllerUpdateEventRequest {
    id: any;
    eventPayloadDto: EventPayloadDto;
}
export declare class ObjectEventApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventApiRequestFactory, responseProcessor?: EventApiResponseProcessor);
    eventControllerCreateEventWithHttpInfo(param: EventApiEventControllerCreateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(param: EventApiEventControllerCreateEventRequest, options?: Configuration): Promise<EventResponseDto>;
    eventControllerGetEventsWithHttpInfo(param?: EventApiEventControllerGetEventsRequest, options?: Configuration): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerGetEvents(param?: EventApiEventControllerGetEventsRequest, options?: Configuration): Promise<EventsResponseDto>;
    eventControllerUpdateEventWithHttpInfo(param: EventApiEventControllerUpdateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerUpdateEvent(param: EventApiEventControllerUpdateEventRequest, options?: Configuration): Promise<EventResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export interface FollowerApiFollowerControllerFollowingRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export interface FollowerApiFollowerControllerUnFollowRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export declare class ObjectFollowerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFollowingWithHttpInfo(param: FollowerApiFollowerControllerFollowingRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerFollowing(param: FollowerApiFollowerControllerFollowingRequest, options?: Configuration): Promise<FollowerResponseDto>;
    followerControllerUnFollowWithHttpInfo(param: FollowerApiFollowerControllerUnFollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnFollow(param: FollowerApiFollowerControllerUnFollowRequest, options?: Configuration): Promise<FollowerResponseDto>;
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
    friendControllerGetFriendsWithHttpInfo(param?: FriendsApiFriendControllerGetFriendsRequest, options?: Configuration): Promise<HttpInfo<FriendsResponseDto>>;
    friendControllerGetFriends(param?: FriendsApiFriendControllerGetFriendsRequest, options?: Configuration): Promise<FriendsResponseDto>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export interface PaymentApiStripeControllerCreatePaymentIntentRequest {
    stripePayloadDto: StripePayloadDto;
}
export interface PaymentApiStripeControllerDeleteCardDetailsRequest {
    stripeCardDeletePayloadDto: StripeCardDeletePayloadDto;
}
export interface PaymentApiStripeControllerGetCardListRequest {
}
export declare class ObjectPaymentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    stripeControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiStripeControllerCreatePaymentIntentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    stripeControllerCreatePaymentIntent(param: PaymentApiStripeControllerCreatePaymentIntentRequest, options?: Configuration): Promise<StripeResponseDto>;
    stripeControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiStripeControllerDeleteCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    stripeControllerDeleteCardDetails(param: PaymentApiStripeControllerDeleteCardDetailsRequest, options?: Configuration): Promise<CardListResponseDto>;
    stripeControllerGetCardListWithHttpInfo(param?: PaymentApiStripeControllerGetCardListRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    stripeControllerGetCardList(param?: PaymentApiStripeControllerGetCardListRequest, options?: Configuration): Promise<CardListResponseDto>;
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
