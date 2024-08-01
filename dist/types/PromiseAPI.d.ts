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
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookResponseDto } from '../models/UserBookResponseDto';
import { UserBookReviewCountResponseDto } from '../models/UserBookReviewCountResponseDto';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
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
    authControllerGetActivityWithHttpInfo(page: number, limit: number, _options?: Configuration): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetActivity(page: number, limit: number, _options?: Configuration): Promise<ActivityResponseDto>;
    authControllerGetInterestsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(_options?: Configuration): Promise<InterestsResponseDto>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserById(id: string, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserFollowerResponseDto>>;
    authControllerUserFollowers(id: string, _options?: Configuration): Promise<UserFollowerResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Promise<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
}
import { BooksApiRequestFactory, BooksApiResponseProcessor } from "../apis/BooksApi";
export declare class PromiseBooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor);
    bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<BookResponseDto>;
    bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookById(id: string, _options?: Configuration): Promise<BookResponseDto>;
    bookControllerFindBooksWithHttpInfo(search: string, page: number, limit: number, _options?: Configuration): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Promise<BooksResponseDto>;
    bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<UserBookResponseDto>>;
    bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<UserBookResponseDto>;
    bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<UserBookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<UserBookReviewCountResponseDto>;
    bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, _options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, _options?: Configuration): Promise<UserBooksResponseDto>;
    bookControllerFindUserBooksWithHttpInfo(page: number, limit: number, status?: string, _options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBooks(page: number, limit: number, status?: string, _options?: Configuration): Promise<UserBooksResponseDto>;
    bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<HttpInfo<UserBookResponseDto>>;
    bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<UserBookResponseDto>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    appControllerGetHelloWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>>;
    appControllerGetHello(_options?: Configuration): Promise<void>;
}
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export declare class PromiseEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto>;
    eventControllerFindEventByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventById(id: string, _options?: Configuration): Promise<EventResponseDto>;
    eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: Configuration): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<EventsResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export declare class PromiseFollowerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto>;
    followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>>;
    followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export declare class PromiseFriendsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>>;
    friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Promise<FriendsResponseDto>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export declare class PromisePaymentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<PaymentResponseDto>;
    paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<StripeResponseDto>;
    paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<CardListResponseDto>;
    paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardList(_options?: Configuration): Promise<CardListResponseDto>;
}
import { StorageApiRequestFactory, StorageApiResponseProcessor } from "../apis/StorageApi";
export declare class PromiseStorageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor);
    fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<HttpInfo<void>>;
    fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<void>;
}
