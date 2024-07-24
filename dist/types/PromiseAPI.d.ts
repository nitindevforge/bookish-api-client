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
import { EventApiRequestFactory, EventApiResponseProcessor } from "../apis/EventApi";
export declare class PromiseEventApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventApiRequestFactory, responseProcessor?: EventApiResponseProcessor);
    eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto>;
    eventControllerGetEventsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerGetEvents(_options?: Configuration): Promise<EventsResponseDto>;
    eventControllerUpdateEventWithHttpInfo(id: any, eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerUpdateEvent(id: any, eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export declare class PromiseFollowerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFollowingWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerFollowing(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto>;
    followerControllerUnFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export declare class PromiseFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    friendControllerGetFriendsWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>>;
    friendControllerGetFriends(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<FriendsResponseDto>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export declare class PromisePaymentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    stripeControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<StripeResponseDto>;
    stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Promise<CardListResponseDto>;
    stripeControllerGetCardListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    stripeControllerGetCardList(_options?: Configuration): Promise<CardListResponseDto>;
}
import { UploadApiRequestFactory, UploadApiResponseProcessor } from "../apis/UploadApi";
export declare class PromiseUploadApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UploadApiRequestFactory, responseProcessor?: UploadApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<void>;
}
