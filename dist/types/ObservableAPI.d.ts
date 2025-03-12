import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { BookMarkEventListResponseDto } from '../models/BookMarkEventListResponseDto';
import { BookMarkEventPayloadDto } from '../models/BookMarkEventPayloadDto';
import { BookMarkEventStatusResponseDto } from '../models/BookMarkEventStatusResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { BusinessConnectedAccount } from '../models/BusinessConnectedAccount';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { CreateBookMarkEventResponseDto } from '../models/CreateBookMarkEventResponseDto';
import { CreateRoleDto } from '../models/CreateRoleDto';
import { CreateStaffDto } from '../models/CreateStaffDto';
import { DeleteBookMarkEventResponseDto } from '../models/DeleteBookMarkEventResponseDto';
import { EventDeleteResponseDto } from '../models/EventDeleteResponseDto';
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
import { LocationPayloadDto } from '../models/LocationPayloadDto';
import { LocationPlacesResponseDto } from '../models/LocationPlacesResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { MyAllFriendsResponseDto } from '../models/MyAllFriendsResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
import { MyFriendPayloadDto } from '../models/MyFriendPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StorageResponseDto } from '../models/StorageResponseDto';
import { StoreDetailsPayloadDto } from '../models/StoreDetailsPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UpdateRoleDto } from '../models/UpdateRoleDto';
import { UpdateStaffDto } from '../models/UpdateStaffDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBookStatusQueryDto } from '../models/UserBookStatusQueryDto';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserDeleteResponseDto } from '../models/UserDeleteResponseDto';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
import { VerificationLinkResponseDTO } from '../models/VerificationLinkResponseDTO';
import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor } from "../apis/AnalyticsApi";
export declare class ObservableAnalyticsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AnalyticsApiRequestFactory, responseProcessor?: AnalyticsApiResponseProcessor);
    analyticsControllerGetAnalyticsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AnalyticsResponseDTO>>;
    analyticsControllerGetAnalytics(_options?: Configuration): Observable<AnalyticsResponseDTO>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerAccountDeletionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserDeleteResponseDto>>;
    authControllerAccountDeletion(_options?: Configuration): Observable<UserDeleteResponseDto>;
    authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<PasswordChangeResponseDto>;
    authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: Configuration): Observable<void>;
    authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: Configuration): Observable<HttpInfo<CreateStaffDto>>;
    authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: Configuration): Observable<CreateStaffDto>;
    authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerDeleteRoleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerDeleteRole(id: string, _options?: Configuration): Observable<void>;
    authControllerDeleteStaffWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserDeleteResponseDto>>;
    authControllerDeleteStaff(id: string, _options?: Configuration): Observable<UserDeleteResponseDto>;
    authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto>;
    authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>>;
    authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, _options?: Configuration): Observable<ActivityResponseDto>;
    authControllerGetAllStaffWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerGetAllStaff(page: number, limit: number, search?: string, _options?: Configuration): Observable<void>;
    authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>>;
    authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, _options?: Configuration): Observable<ActivityResponseDto>;
    authControllerGetInterestsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(_options?: Configuration): Observable<InterestsResponseDto>;
    authControllerGetPermissionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>>;
    authControllerGetPermission(_options?: Configuration): Observable<void>;
    authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>>;
    authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Observable<UserResponseDto>;
    authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Observable<void>;
    authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Observable<void>;
    authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Observable<HttpInfo<void>>;
    authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Observable<void>;
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
    bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Observable<BooksReviewResponseDto>;
    bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<BooksResponseDto>>;
    bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Observable<BooksResponseDto>;
    bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<UserBookReviewResponseDto>;
    bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<BookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<BookReviewCountResponseDto>;
    bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: Configuration): Observable<UserBooksResponseDto>;
    bookControllerFindUserWhichReadBookWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserWhichReadBook(_options?: Configuration): Observable<UserBooksResponseDto>;
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
    eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Observable<HttpInfo<CreateBookMarkEventResponseDto>>;
    eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Observable<CreateBookMarkEventResponseDto>;
    eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: Configuration): Observable<HttpInfo<BookMarkEventListResponseDto>>;
    eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: Configuration): Observable<BookMarkEventListResponseDto>;
    eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto>;
    eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<DeleteBookMarkEventResponseDto>>;
    eventControllerDeleteBookMarkEvent(eventId: string, _options?: Configuration): Observable<DeleteBookMarkEventResponseDto>;
    eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<HttpInfo<EventDeleteResponseDto>>;
    eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<EventDeleteResponseDto>;
    eventControllerFindCustomerOfEventsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerFindCustomerOfEvents(_options?: Configuration): Observable<LocationPlacesResponseDto>;
    eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<EventResponseDto>;
    eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Observable<EventsResponseDto>;
    eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<MyEventResponseDto>>;
    eventControllerFindMyEvent(eventId: string, _options?: Configuration): Observable<MyEventResponseDto>;
    eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<MyEventsResponseDto>;
    eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Observable<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Observable<LocationPlacesResponseDto>;
    eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<BookMarkEventStatusResponseDto>>;
    eventControllerGetBookMarkEventStatus(eventId: string, _options?: Configuration): Observable<BookMarkEventStatusResponseDto>;
    eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>>;
    eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export declare class ObservableFollowerApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Observable<HttpInfo<MyAllFriendsResponseDto>>;
    followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Observable<MyAllFriendsResponseDto>;
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
import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor } from "../apis/NielsenBooksApi";
export declare class ObservableNielsenBooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NielsenBooksApiRequestFactory, responseProcessor?: NielsenBooksApiResponseProcessor);
    nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: Configuration): Observable<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: Configuration): Observable<void>;
    nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: Configuration): Observable<void>;
    nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBooks(_options?: Configuration): Observable<void>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export declare class ObservablePaymentApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    paymentControllerConnectAccountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BusinessConnectedAccount>>;
    paymentControllerConnectAccount(_options?: Configuration): Observable<BusinessConnectedAccount>;
    paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: Configuration): Observable<HttpInfo<VerificationLinkResponseDTO>>;
    paymentControllerCreateAccountVerificationLink(_options?: Configuration): Observable<VerificationLinkResponseDTO>;
    paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<PaymentResponseDto>;
    paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<StripeResponseDto>;
    paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<CardListResponseDto>;
    paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardList(_options?: Configuration): Observable<CardListResponseDto>;
    paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BusinessConnectedAccount>>;
    paymentControllerRetrieveConnectedAccount(_options?: Configuration): Observable<BusinessConnectedAccount>;
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
