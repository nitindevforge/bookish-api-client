import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
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
import { PaymentDeleteResponseDto } from '../models/PaymentDeleteResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
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
export interface AuthApiAuthControllerGetActivityRequest {
    page: number;
    limit: number;
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
    authControllerGetActivityWithHttpInfo(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetActivity(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<ActivityResponseDto>;
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
import { BooksApiRequestFactory, BooksApiResponseProcessor } from "../apis/BooksApi";
export interface BooksApiBookControllerAddBookRequest {
    bookPayloadDto: BookPayloadDto;
}
export interface BooksApiBookControllerFindBookByIdRequest {
    id: string;
}
export interface BooksApiBookControllerFindBooksRequest {
    search: string;
    page: number;
    limit: number;
}
export declare class ObjectBooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor);
    bookControllerAddBookWithHttpInfo(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerAddBook(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<BookResponseDto>;
    bookControllerFindBookByIdWithHttpInfo(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookById(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<BookResponseDto>;
    bookControllerFindBooksWithHttpInfo(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindBooks(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<BooksResponseDto>;
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
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export interface EventsApiEventControllerCreateEventRequest {
    eventPayloadDto: EventPayloadDto;
}
export interface EventsApiEventControllerFindEventByIdRequest {
    id: string;
}
export interface EventsApiEventControllerFindEventsRequest {
    page: number;
    limit?: number;
}
export declare class ObjectEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    eventControllerCreateEventWithHttpInfo(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<EventResponseDto>;
    eventControllerFindEventByIdWithHttpInfo(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventById(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<EventResponseDto>;
    eventControllerFindEventsWithHttpInfo(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindEvents(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<EventsResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export interface FollowerApiFollowerControllerFollowRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export interface FollowerApiFollowerControllerUnfollowRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export declare class ObjectFollowerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFollowWithHttpInfo(param: FollowerApiFollowerControllerFollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerFollow(param: FollowerApiFollowerControllerFollowRequest, options?: Configuration): Promise<FollowerResponseDto>;
    followerControllerUnfollowWithHttpInfo(param: FollowerApiFollowerControllerUnfollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnfollow(param: FollowerApiFollowerControllerUnfollowRequest, options?: Configuration): Promise<FollowerResponseDto>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export interface FriendsApiFriendControllerFindFriendsRequest {
    page: number;
    limit: number;
    search?: string;
}
export declare class ObjectFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    friendControllerFindFriendsWithHttpInfo(param: FriendsApiFriendControllerFindFriendsRequest, options?: Configuration): Promise<HttpInfo<FriendsResponseDto>>;
    friendControllerFindFriends(param: FriendsApiFriendControllerFindFriendsRequest, options?: Configuration): Promise<FriendsResponseDto>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export interface PaymentApiPaymentControllerCreatePaymentRequest {
    stripePaymentPayloadDto: StripePaymentPayloadDto;
}
export interface PaymentApiPaymentControllerCreatePaymentIntentRequest {
    stripePayloadDto: StripePayloadDto;
}
export interface PaymentApiPaymentControllerDeleteCardDetailsRequest {
    paymentPayloadDto: PaymentPayloadDto;
}
export interface PaymentApiPaymentControllerDeletePaymentRequest {
    paymentPayloadDto: PaymentPayloadDto;
}
export interface PaymentApiPaymentControllerGetCardListRequest {
}
export declare class ObjectPaymentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    paymentControllerCreatePaymentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePayment(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<StripeResponseDto>;
    paymentControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntent(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<StripeResponseDto>;
    paymentControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerDeleteCardDetails(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<CardListResponseDto>;
    paymentControllerDeletePaymentWithHttpInfo(param: PaymentApiPaymentControllerDeletePaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentDeleteResponseDto>>;
    paymentControllerDeletePayment(param: PaymentApiPaymentControllerDeletePaymentRequest, options?: Configuration): Promise<PaymentDeleteResponseDto>;
    paymentControllerGetCardListWithHttpInfo(param?: PaymentApiPaymentControllerGetCardListRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardList(param?: PaymentApiPaymentControllerGetCardListRequest, options?: Configuration): Promise<CardListResponseDto>;
}
import { StorageApiRequestFactory, StorageApiResponseProcessor } from "../apis/StorageApi";
export interface StorageApiFileUploadControllerGetPreSignedURLRequest {
    fileUploadPayloadDto: FileUploadPayloadDto;
}
export declare class ObjectStorageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(param: StorageApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(param: StorageApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<void>;
}
