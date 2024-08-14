import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FileUploadDto } from '../models/FileUploadDto';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { MyAllFriendsResponseDto } from '../models/MyAllFriendsResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StorageResponseDto } from '../models/StorageResponseDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
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
    authControllerGetActivityWithHttpInfo(page: number, limit: number, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>>;
    authControllerGetActivity(page: number, limit: number, _options?: Configuration): Observable<ActivityResponseDto>;
    authControllerGetInterestsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(_options?: Configuration): Observable<InterestsResponseDto>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserById(id: string, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserFollowerResponseDto>>;
    authControllerUserFollowers(id: string, _options?: Configuration): Observable<UserFollowerResponseDto>;
    authControllerUserMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserMe(_options?: Configuration): Observable<UserResponseDto>;
    authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto>;
}
import { BooksApiRequestFactory, BooksApiResponseProcessor } from "../apis/BooksApi";
export declare class ObservableBooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor);
    bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: Configuration): Observable<HttpInfo<BookResponseDto>>;
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Observable<BookResponseDto>;
    bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<BookResponseDto>>;
    bookControllerFindBookById(id: string, _options?: Configuration): Observable<BookResponseDto>;
    bookControllerFindBookReviewBaseWithHttpInfo(type: string, page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBookReviewBase(type: string, page: number, limit: number, search?: string, _options?: Configuration): Observable<BooksReviewResponseDto>;
    bookControllerFindBooksWithHttpInfo(search: string, page: number, limit: number, _options?: Configuration): Observable<HttpInfo<BooksResponseDto>>;
    bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Observable<BooksResponseDto>;
    bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<UserBookReviewResponseDto>;
    bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<BookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<BookReviewCountResponseDto>;
    bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, _options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, _options?: Configuration): Observable<UserBooksResponseDto>;
    bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Observable<UserBookReviewResponseDto>;
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
    eventControllerFindEventByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerFindEventById(id: string, _options?: Configuration): Observable<EventResponseDto>;
    eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Observable<EventsResponseDto>;
    eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<MyEventResponseDto>>;
    eventControllerFindMyEvent(eventId: string, _options?: Configuration): Observable<MyEventResponseDto>;
    eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<MyEventsResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export declare class ObservableFollowerApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFindMyFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<MyAllFriendsResponseDto>>;
    followerControllerFindMyFriends(page: number, limit: number, search?: string, _options?: Configuration): Observable<MyAllFriendsResponseDto>;
    followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>>;
    followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto>;
    followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>>;
    followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto>;
}
import { FriendsApiRequestFactory, FriendsApiResponseProcessor } from "../apis/FriendsApi";
export declare class ObservableFriendsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor);
    friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<FriendsResponseDto>>;
    friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Observable<FriendsResponseDto>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export declare class ObservablePaymentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<PaymentResponseDto>;
    paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<StripeResponseDto>;
    paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<CardListResponseDto>;
    paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardList(_options?: Configuration): Observable<CardListResponseDto>;
}
import { StorageApiRequestFactory, StorageApiResponseProcessor } from "../apis/StorageApi";
export declare class ObservableStorageApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor);
    storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: Configuration): Observable<HttpInfo<StorageResponseDto>>;
    storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: Configuration): Observable<StorageResponseDto>;
}
