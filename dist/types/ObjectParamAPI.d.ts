import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { BookByStatusDto } from '../models/BookByStatusDto';
import { BookMarkEventListResponseDto } from '../models/BookMarkEventListResponseDto';
import { BookMarkEventPayloadDto } from '../models/BookMarkEventPayloadDto';
import { BookMarkEventStatusResponseDto } from '../models/BookMarkEventStatusResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { BooksStatusResponseDto } from '../models/BooksStatusResponseDto';
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
import { GoodReadsBookPayloadDto } from '../models/GoodReadsBookPayloadDto';
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
export interface AnalyticsApiAnalyticsControllerGetAnalyticsRequest {
}
export declare class ObjectAnalyticsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AnalyticsApiRequestFactory, responseProcessor?: AnalyticsApiResponseProcessor);
    analyticsControllerGetAnalyticsWithHttpInfo(param?: AnalyticsApiAnalyticsControllerGetAnalyticsRequest, options?: Configuration): Promise<HttpInfo<AnalyticsResponseDTO>>;
    analyticsControllerGetAnalytics(param?: AnalyticsApiAnalyticsControllerGetAnalyticsRequest, options?: Configuration): Promise<AnalyticsResponseDTO>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiAuthControllerAccountDeletionRequest {
}
export interface AuthApiAuthControllerChangePasswordRequest {
    changePayloadDto: ChangePayloadDto;
}
export interface AuthApiAuthControllerCreateBusinessUserRequest {
    signupPayloadDto: SignupPayloadDto;
}
export interface AuthApiAuthControllerCreateRolesRequest {
    createRoleDto: CreateRoleDto;
}
export interface AuthApiAuthControllerCreateStaffRequest {
    createStaffDto: CreateStaffDto;
}
export interface AuthApiAuthControllerCreateUserRequest {
    signupPayloadDto: SignupPayloadDto;
}
export interface AuthApiAuthControllerDeleteRoleRequest {
    id: string;
}
export interface AuthApiAuthControllerDeleteStaffRequest {
    id: string;
}
export interface AuthApiAuthControllerForgetPasswordRequest {
    forgetPasswordPayloadDto: ForgetPasswordPayloadDto;
}
export interface AuthApiAuthControllerGetActivityRequest {
    page: number;
    limit: number;
    longitude?: number;
    latitude?: number;
    global?: boolean;
    search?: string;
}
export interface AuthApiAuthControllerGetAllStaffRequest {
    page: number;
    limit: number;
    search?: string;
}
export interface AuthApiAuthControllerGetEventsActivityRequest {
    page: number;
    limit: number;
    longitude?: number;
    latitude?: number;
    global?: boolean;
    search?: string;
}
export interface AuthApiAuthControllerGetInterestsRequest {
}
export interface AuthApiAuthControllerGetPermissionRequest {
}
export interface AuthApiAuthControllerLoginRequest {
    loginPayloadDto: LoginPayloadDto;
}
export interface AuthApiAuthControllerUpdateRequest {
    storeDetailsPayloadDto: StoreDetailsPayloadDto;
}
export interface AuthApiAuthControllerUpdateRolesRequest {
    id: string;
    updateRoleDto: UpdateRoleDto;
}
export interface AuthApiAuthControllerUpdateStaffRequest {
    id: string;
    updateStaffDto: UpdateStaffDto;
}
export interface AuthApiAuthControllerUserRequest {
    page: number;
    limit: number;
    allRoles?: boolean;
    search?: string;
}
export interface AuthApiAuthControllerUserByIdRequest {
    id: string;
}
export interface AuthApiAuthControllerUserFollowersRequest {
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
    authControllerAccountDeletionWithHttpInfo(param?: AuthApiAuthControllerAccountDeletionRequest, options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>>;
    authControllerAccountDeletion(param?: AuthApiAuthControllerAccountDeletionRequest, options?: Configuration): Promise<UserDeleteResponseDto>;
    authControllerChangePasswordWithHttpInfo(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerChangePassword(param: AuthApiAuthControllerChangePasswordRequest, options?: Configuration): Promise<PasswordChangeResponseDto>;
    authControllerCreateBusinessUserWithHttpInfo(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateBusinessUser(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerCreateRolesWithHttpInfo(param: AuthApiAuthControllerCreateRolesRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerCreateRoles(param: AuthApiAuthControllerCreateRolesRequest, options?: Configuration): Promise<void>;
    authControllerCreateStaffWithHttpInfo(param: AuthApiAuthControllerCreateStaffRequest, options?: Configuration): Promise<HttpInfo<CreateStaffDto>>;
    authControllerCreateStaff(param: AuthApiAuthControllerCreateStaffRequest, options?: Configuration): Promise<CreateStaffDto>;
    authControllerCreateUserWithHttpInfo(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateUser(param: AuthApiAuthControllerCreateUserRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerDeleteRoleWithHttpInfo(param: AuthApiAuthControllerDeleteRoleRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerDeleteRole(param: AuthApiAuthControllerDeleteRoleRequest, options?: Configuration): Promise<void>;
    authControllerDeleteStaffWithHttpInfo(param: AuthApiAuthControllerDeleteStaffRequest, options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>>;
    authControllerDeleteStaff(param: AuthApiAuthControllerDeleteStaffRequest, options?: Configuration): Promise<UserDeleteResponseDto>;
    authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: Configuration): Promise<ForgetPasswordEntityResponseDto>;
    authControllerGetActivityWithHttpInfo(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetActivity(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<ActivityResponseDto>;
    authControllerGetAllStaffWithHttpInfo(param: AuthApiAuthControllerGetAllStaffRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerGetAllStaff(param: AuthApiAuthControllerGetAllStaffRequest, options?: Configuration): Promise<void>;
    authControllerGetEventsActivityWithHttpInfo(param: AuthApiAuthControllerGetEventsActivityRequest, options?: Configuration): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetEventsActivity(param: AuthApiAuthControllerGetEventsActivityRequest, options?: Configuration): Promise<ActivityResponseDto>;
    authControllerGetInterestsWithHttpInfo(param?: AuthApiAuthControllerGetInterestsRequest, options?: Configuration): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerGetInterests(param?: AuthApiAuthControllerGetInterestsRequest, options?: Configuration): Promise<InterestsResponseDto>;
    authControllerGetPermissionWithHttpInfo(param?: AuthApiAuthControllerGetPermissionRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerGetPermission(param?: AuthApiAuthControllerGetPermissionRequest, options?: Configuration): Promise<void>;
    authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUpdateWithHttpInfo(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUpdate(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUpdateRolesWithHttpInfo(param: AuthApiAuthControllerUpdateRolesRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerUpdateRoles(param: AuthApiAuthControllerUpdateRolesRequest, options?: Configuration): Promise<void>;
    authControllerUpdateStaffWithHttpInfo(param: AuthApiAuthControllerUpdateStaffRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerUpdateStaff(param: AuthApiAuthControllerUpdateStaffRequest, options?: Configuration): Promise<void>;
    authControllerUserWithHttpInfo(param: AuthApiAuthControllerUserRequest, options?: Configuration): Promise<HttpInfo<void>>;
    authControllerUser(param: AuthApiAuthControllerUserRequest, options?: Configuration): Promise<void>;
    authControllerUserByIdWithHttpInfo(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserById(param: AuthApiAuthControllerUserByIdRequest, options?: Configuration): Promise<UserResponseDto>;
    authControllerUserFollowersWithHttpInfo(param: AuthApiAuthControllerUserFollowersRequest, options?: Configuration): Promise<HttpInfo<UserFollowerResponseDto>>;
    authControllerUserFollowers(param: AuthApiAuthControllerUserFollowersRequest, options?: Configuration): Promise<UserFollowerResponseDto>;
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
export interface BooksApiBookControllerAddMyGoodReadsBooksRequest {
    requestBody: Array<string>;
}
export interface BooksApiBookControllerFindBookByIdRequest {
    id: string;
}
export interface BooksApiBookControllerFindBookByStatusRequest {
    bookByStatusDto: BookByStatusDto;
}
export interface BooksApiBookControllerFindBookReviewBaseRequest {
    userBookStatusQueryDto: UserBookStatusQueryDto;
}
export interface BooksApiBookControllerFindBooksRequest {
    rate: number;
    page: number;
    limit: number;
    search?: string;
}
export interface BooksApiBookControllerFindGoodReadsRequest {
    goodReadsBookPayloadDto: GoodReadsBookPayloadDto;
}
export interface BooksApiBookControllerFindUserBookReviewRequest {
    bookId: string;
    status?: string;
    rate?: number;
    review?: string;
}
export interface BooksApiBookControllerFindUserBookReviewCountRequest {
    bookId: string;
    status?: string;
    rate?: number;
    review?: string;
}
export interface BooksApiBookControllerFindUserBookReviewsRequest {
    bookId: string;
    page: number;
    limit: number;
    rate?: Array<number>;
}
export interface BooksApiBookControllerFindUserWhichReadBookRequest {
}
export interface BooksApiBookControllerUserBookMarkRequest {
    userBookPayloadDto: UserBookPayloadDto;
}
export declare class ObjectBooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor);
    bookControllerAddBookWithHttpInfo(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerAddBook(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<BookResponseDto>;
    bookControllerAddMyGoodReadsBooksWithHttpInfo(param: BooksApiBookControllerAddMyGoodReadsBooksRequest, options?: Configuration): Promise<HttpInfo<BooksStatusResponseDto>>;
    bookControllerAddMyGoodReadsBooks(param: BooksApiBookControllerAddMyGoodReadsBooksRequest, options?: Configuration): Promise<BooksStatusResponseDto>;
    bookControllerFindBookByIdWithHttpInfo(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookById(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<BookResponseDto>;
    bookControllerFindBookByStatusWithHttpInfo(param: BooksApiBookControllerFindBookByStatusRequest, options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBookByStatus(param: BooksApiBookControllerFindBookByStatusRequest, options?: Configuration): Promise<BooksReviewResponseDto>;
    bookControllerFindBookReviewBaseWithHttpInfo(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBookReviewBase(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: Configuration): Promise<BooksReviewResponseDto>;
    bookControllerFindBooksWithHttpInfo(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindBooks(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<BooksResponseDto>;
    bookControllerFindGoodReadsWithHttpInfo(param: BooksApiBookControllerFindGoodReadsRequest, options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindGoodReads(param: BooksApiBookControllerFindGoodReadsRequest, options?: Configuration): Promise<BooksReviewResponseDto>;
    bookControllerFindUserBookReviewWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewRequest, options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerFindUserBookReview(param: BooksApiBookControllerFindUserBookReviewRequest, options?: Configuration): Promise<UserBookReviewResponseDto>;
    bookControllerFindUserBookReviewCountWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: Configuration): Promise<HttpInfo<BookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewCount(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: Configuration): Promise<BookReviewCountResponseDto>;
    bookControllerFindUserBookReviewsWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBookReviews(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: Configuration): Promise<UserBooksResponseDto>;
    bookControllerFindUserWhichReadBookWithHttpInfo(param?: BooksApiBookControllerFindUserWhichReadBookRequest, options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserWhichReadBook(param?: BooksApiBookControllerFindUserWhichReadBookRequest, options?: Configuration): Promise<UserBooksResponseDto>;
    bookControllerUserBookMarkWithHttpInfo(param: BooksApiBookControllerUserBookMarkRequest, options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerUserBookMark(param: BooksApiBookControllerUserBookMarkRequest, options?: Configuration): Promise<UserBookReviewResponseDto>;
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
export interface EventsApiEventControllerBookMarkEventRequest {
    bookMarkEventPayloadDto: BookMarkEventPayloadDto;
}
export interface EventsApiEventControllerBookMarkEventListRequest {
    page: number;
    limit?: number;
    userId?: string;
}
export interface EventsApiEventControllerCreateEventRequest {
    eventPayloadDto: EventPayloadDto;
}
export interface EventsApiEventControllerDeleteBookMarkEventRequest {
    eventId: string;
}
export interface EventsApiEventControllerDeleteEventRequest {
    id: string;
    withBookedEvent?: boolean;
}
export interface EventsApiEventControllerFindCustomerOfEventsRequest {
}
export interface EventsApiEventControllerFindEventByIdRequest {
    id: string;
    withBookedEvent?: boolean;
}
export interface EventsApiEventControllerFindEventsRequest {
    page: number;
    limit?: number;
    longitude?: number;
    latitude?: number;
}
export interface EventsApiEventControllerFindMyEventRequest {
    eventId: string;
}
export interface EventsApiEventControllerFindMyUpcomingEventsRequest {
    page: number;
    limit: number;
    type: 'UPCOMING' | 'VISITED';
}
export interface EventsApiEventControllerFindSearchPlacesRequest {
    locationPayloadDto: LocationPayloadDto;
}
export interface EventsApiEventControllerGetBookMarkEventStatusRequest {
    eventId: string;
}
export interface EventsApiEventControllerUpdateEventRequest {
    eventPayloadDto: EventPayloadDto;
}
export declare class ObjectEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    eventControllerBookMarkEventWithHttpInfo(param: EventsApiEventControllerBookMarkEventRequest, options?: Configuration): Promise<HttpInfo<CreateBookMarkEventResponseDto>>;
    eventControllerBookMarkEvent(param: EventsApiEventControllerBookMarkEventRequest, options?: Configuration): Promise<CreateBookMarkEventResponseDto>;
    eventControllerBookMarkEventListWithHttpInfo(param: EventsApiEventControllerBookMarkEventListRequest, options?: Configuration): Promise<HttpInfo<BookMarkEventListResponseDto>>;
    eventControllerBookMarkEventList(param: EventsApiEventControllerBookMarkEventListRequest, options?: Configuration): Promise<BookMarkEventListResponseDto>;
    eventControllerCreateEventWithHttpInfo(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerCreateEvent(param: EventsApiEventControllerCreateEventRequest, options?: Configuration): Promise<EventResponseDto>;
    eventControllerDeleteBookMarkEventWithHttpInfo(param: EventsApiEventControllerDeleteBookMarkEventRequest, options?: Configuration): Promise<HttpInfo<DeleteBookMarkEventResponseDto>>;
    eventControllerDeleteBookMarkEvent(param: EventsApiEventControllerDeleteBookMarkEventRequest, options?: Configuration): Promise<DeleteBookMarkEventResponseDto>;
    eventControllerDeleteEventWithHttpInfo(param: EventsApiEventControllerDeleteEventRequest, options?: Configuration): Promise<HttpInfo<EventDeleteResponseDto>>;
    eventControllerDeleteEvent(param: EventsApiEventControllerDeleteEventRequest, options?: Configuration): Promise<EventDeleteResponseDto>;
    eventControllerFindCustomerOfEventsWithHttpInfo(param?: EventsApiEventControllerFindCustomerOfEventsRequest, options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerFindCustomerOfEvents(param?: EventsApiEventControllerFindCustomerOfEventsRequest, options?: Configuration): Promise<LocationPlacesResponseDto>;
    eventControllerFindEventByIdWithHttpInfo(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventById(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<EventResponseDto>;
    eventControllerFindEventsWithHttpInfo(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindEvents(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<EventsResponseDto>;
    eventControllerFindMyEventWithHttpInfo(param: EventsApiEventControllerFindMyEventRequest, options?: Configuration): Promise<HttpInfo<MyEventResponseDto>>;
    eventControllerFindMyEvent(param: EventsApiEventControllerFindMyEventRequest, options?: Configuration): Promise<MyEventResponseDto>;
    eventControllerFindMyUpcomingEventsWithHttpInfo(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: Configuration): Promise<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindMyUpcomingEvents(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: Configuration): Promise<MyEventsResponseDto>;
    eventControllerFindSearchPlacesWithHttpInfo(param: EventsApiEventControllerFindSearchPlacesRequest, options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerFindSearchPlaces(param: EventsApiEventControllerFindSearchPlacesRequest, options?: Configuration): Promise<LocationPlacesResponseDto>;
    eventControllerGetBookMarkEventStatusWithHttpInfo(param: EventsApiEventControllerGetBookMarkEventStatusRequest, options?: Configuration): Promise<HttpInfo<BookMarkEventStatusResponseDto>>;
    eventControllerGetBookMarkEventStatus(param: EventsApiEventControllerGetBookMarkEventStatusRequest, options?: Configuration): Promise<BookMarkEventStatusResponseDto>;
    eventControllerUpdateEventWithHttpInfo(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>>;
    eventControllerUpdateEvent(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<EventResponseDto>;
}
import { FollowerApiRequestFactory, FollowerApiResponseProcessor } from "../apis/FollowerApi";
export interface FollowerApiFollowerControllerFindMyFriendsRequest {
    myFriendPayloadDto: MyFriendPayloadDto;
}
export interface FollowerApiFollowerControllerFollowRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export interface FollowerApiFollowerControllerUnfollowRequest {
    followerPayloadDto: FollowerPayloadDto;
}
export declare class ObjectFollowerApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor);
    followerControllerFindMyFriendsWithHttpInfo(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: Configuration): Promise<HttpInfo<MyAllFriendsResponseDto>>;
    followerControllerFindMyFriends(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: Configuration): Promise<MyAllFriendsResponseDto>;
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
import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor } from "../apis/NielsenBooksApi";
export interface NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest {
    id: string;
    body: any;
}
export interface NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest {
    id: string;
}
export interface NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest {
}
export declare class ObjectNielsenBooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NielsenBooksApiRequestFactory, responseProcessor?: NielsenBooksApiResponseProcessor);
    nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest, options?: Configuration): Promise<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBookById(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest, options?: Configuration): Promise<void>;
    nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest, options?: Configuration): Promise<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBookImageById(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest, options?: Configuration): Promise<void>;
    nielsenBooksControllerGetNielsenBooksWithHttpInfo(param?: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest, options?: Configuration): Promise<HttpInfo<void>>;
    nielsenBooksControllerGetNielsenBooks(param?: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest, options?: Configuration): Promise<void>;
}
import { PaymentApiRequestFactory, PaymentApiResponseProcessor } from "../apis/PaymentApi";
export interface PaymentApiPaymentControllerConnectAccountRequest {
}
export interface PaymentApiPaymentControllerCreateAccountVerificationLinkRequest {
}
export interface PaymentApiPaymentControllerCreatePaymentRequest {
    stripePaymentPayloadDto: StripePaymentPayloadDto;
}
export interface PaymentApiPaymentControllerCreatePaymentIntentRequest {
    stripePayloadDto: StripePayloadDto;
}
export interface PaymentApiPaymentControllerDeleteCardDetailsRequest {
    paymentPayloadDto: PaymentPayloadDto;
}
export interface PaymentApiPaymentControllerGetCardListRequest {
}
export interface PaymentApiPaymentControllerRetrieveConnectedAccountRequest {
}
export declare class ObjectPaymentApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor);
    paymentControllerConnectAccountWithHttpInfo(param?: PaymentApiPaymentControllerConnectAccountRequest, options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>>;
    paymentControllerConnectAccount(param?: PaymentApiPaymentControllerConnectAccountRequest, options?: Configuration): Promise<BusinessConnectedAccount>;
    paymentControllerCreateAccountVerificationLinkWithHttpInfo(param?: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest, options?: Configuration): Promise<HttpInfo<VerificationLinkResponseDTO>>;
    paymentControllerCreateAccountVerificationLink(param?: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest, options?: Configuration): Promise<VerificationLinkResponseDTO>;
    paymentControllerCreatePaymentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentResponseDto>>;
    paymentControllerCreatePayment(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<PaymentResponseDto>;
    paymentControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>>;
    paymentControllerCreatePaymentIntent(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<StripeResponseDto>;
    paymentControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerDeleteCardDetails(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<CardListResponseDto>;
    paymentControllerGetCardListWithHttpInfo(param?: PaymentApiPaymentControllerGetCardListRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>>;
    paymentControllerGetCardList(param?: PaymentApiPaymentControllerGetCardListRequest, options?: Configuration): Promise<CardListResponseDto>;
    paymentControllerRetrieveConnectedAccountWithHttpInfo(param?: PaymentApiPaymentControllerRetrieveConnectedAccountRequest, options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>>;
    paymentControllerRetrieveConnectedAccount(param?: PaymentApiPaymentControllerRetrieveConnectedAccountRequest, options?: Configuration): Promise<BusinessConnectedAccount>;
}
import { StorageApiRequestFactory, StorageApiResponseProcessor } from "../apis/StorageApi";
export interface StorageApiStorageControllerGetPreSignedURLRequest {
    fileUploadDto: FileUploadDto;
}
export declare class ObjectStorageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor);
    storageControllerGetPreSignedURLWithHttpInfo(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<StorageResponseDto>>;
    storageControllerGetPreSignedURL(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: Configuration): Promise<StorageResponseDto>;
}
