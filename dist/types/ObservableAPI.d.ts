import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export declare class ObservableEventsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto>;
    eventControllerGetEventsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>>;
    eventControllerGetEvents(page?: number, limit?: number, _options?: Configuration): Observable<EventsResponseDto>;
    eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export declare class ObservableFollowerApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFollowingWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>>;
    followerControllerFollowing(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto>;
    followerControllerUnFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>>;
    followerControllerUnFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto>;
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
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export declare class ObservablePaymentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<HttpInfo<StripeResponseDto>>;
    stripeControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<StripeResponseDto>;
    stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Observable<CardListResponseDto>;
    stripeControllerGetCardListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    stripeControllerGetCardList(_options?: Configuration): Observable<CardListResponseDto>;
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
