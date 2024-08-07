import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { Address } from '../models/Address';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { Books } from '../models/Books';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
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
import { Follower } from '../models/Follower';
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
import { MetaResponse } from '../models/MetaResponse';
import { MyFriendsResponse } from '../models/MyFriendsResponse';
import { MyFriendsResponseDto } from '../models/MyFriendsResponseDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponse } from '../models/PaymentResponse';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { Rating } from '../models/Rating';
import { Review } from '../models/Review';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBooks } from '../models/UserBooks';
import { UserBooksResponse } from '../models/UserBooksResponse';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserDetails } from '../models/UserDetails';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserFollowers } from '../models/UserFollowers';
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

export interface AuthApiAuthControllerGetActivityRequest {
    /**
     * 
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    page: number
    /**
     * 
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    limit: number
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

export interface AuthApiAuthControllerUserFollowersRequest {
    /**
     * 
     * @type string
     * @memberof AuthApiauthControllerUserFollowers
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
    public authControllerGetActivityWithHttpInfo(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        return this.api.authControllerGetActivityWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetActivity(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<ActivityResponseDto> {
        return this.api.authControllerGetActivity(param.page, param.limit,  options).toPromise();
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
    public authControllerUserFollowersWithHttpInfo(param: AuthApiAuthControllerUserFollowersRequest, options?: Configuration): Promise<HttpInfo<UserFollowerResponseDto>> {
        return this.api.authControllerUserFollowersWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserFollowers(param: AuthApiAuthControllerUserFollowersRequest, options?: Configuration): Promise<UserFollowerResponseDto> {
        return this.api.authControllerUserFollowers(param.id,  options).toPromise();
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

import { ObservableBooksApi } from "./ObservableAPI";
import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";

export interface BooksApiBookControllerAddBookRequest {
    /**
     * 
     * @type BookPayloadDto
     * @memberof BooksApibookControllerAddBook
     */
    bookPayloadDto: BookPayloadDto
}

export interface BooksApiBookControllerFindBookByIdRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindBookById
     */
    id: string
}

export interface BooksApiBookControllerFindBookReviewBaseRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    type: string
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    page: number
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    limit: number
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    search?: string
}

export interface BooksApiBookControllerFindBooksRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindBooks
     */
    search: string
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    page: number
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    limit: number
}

export interface BooksApiBookControllerFindUserBookReviewRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    bookId: string
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    status?: string
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindUserBookReview
     */
    rate?: number
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewCountRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    bookId: string
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    status?: string
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    rate?: number
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewsRequest {
    /**
     * 
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    bookId: string
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    page: number
    /**
     * 
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    limit: number
}

export interface BooksApiBookControllerUserBookMarkRequest {
    /**
     * 
     * @type UserBookPayloadDto
     * @memberof BooksApibookControllerUserBookMark
     */
    userBookPayloadDto: UserBookPayloadDto
}

export class ObjectBooksApi {
    private api: ObservableBooksApi

    public constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public bookControllerAddBookWithHttpInfo(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        return this.api.bookControllerAddBookWithHttpInfo(param.bookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddBook(param: BooksApiBookControllerAddBookRequest, options?: Configuration): Promise<BookResponseDto> {
        return this.api.bookControllerAddBook(param.bookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookByIdWithHttpInfo(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        return this.api.bookControllerFindBookByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookById(param: BooksApiBookControllerFindBookByIdRequest, options?: Configuration): Promise<BookResponseDto> {
        return this.api.bookControllerFindBookById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        return this.api.bookControllerFindBookReviewBaseWithHttpInfo(param.type, param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookReviewBase(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: Configuration): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindBookReviewBase(param.type, param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooksWithHttpInfo(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<HttpInfo<BooksResponseDto>> {
        return this.api.bookControllerFindBooksWithHttpInfo(param.search, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooks(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<BooksResponseDto> {
        return this.api.bookControllerFindBooks(param.search, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewRequest, options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        return this.api.bookControllerFindUserBookReviewWithHttpInfo(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReview(param: BooksApiBookControllerFindUserBookReviewRequest, options?: Configuration): Promise<UserBookReviewResponseDto> {
        return this.api.bookControllerFindUserBookReview(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: Configuration): Promise<HttpInfo<BookReviewCountResponseDto>> {
        return this.api.bookControllerFindUserBookReviewCountWithHttpInfo(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewCount(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: Configuration): Promise<BookReviewCountResponseDto> {
        return this.api.bookControllerFindUserBookReviewCount(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>> {
        return this.api.bookControllerFindUserBookReviewsWithHttpInfo(param.bookId, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviews(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: Configuration): Promise<UserBooksResponseDto> {
        return this.api.bookControllerFindUserBookReviews(param.bookId, param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUserBookMarkWithHttpInfo(param: BooksApiBookControllerUserBookMarkRequest, options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        return this.api.bookControllerUserBookMarkWithHttpInfo(param.userBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUserBookMark(param: BooksApiBookControllerUserBookMarkRequest, options?: Configuration): Promise<UserBookReviewResponseDto> {
        return this.api.bookControllerUserBookMark(param.userBookPayloadDto,  options).toPromise();
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

export interface EventsApiEventControllerFindEventByIdRequest {
    /**
     * 
     * @type string
     * @memberof EventsApieventControllerFindEventById
     */
    id: string
}

export interface EventsApiEventControllerFindEventsRequest {
    /**
     * 
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    page: number
    /**
     * 
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    limit?: number
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
    public eventControllerFindEventByIdWithHttpInfo(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerFindEventByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventById(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<EventResponseDto> {
        return this.api.eventControllerFindEventById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventsWithHttpInfo(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<HttpInfo<EventsResponseDto>> {
        return this.api.eventControllerFindEventsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEvents(param: EventsApiEventControllerFindEventsRequest, options?: Configuration): Promise<EventsResponseDto> {
        return this.api.eventControllerFindEvents(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableFollowerApi } from "./ObservableAPI";
import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";

export interface FollowerApiFollowerControllerFollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerFollow
     */
    followerPayloadDto: FollowerPayloadDto
}

export interface FollowerApiFollowerControllerMyFriendsRequest {
    /**
     * 
     * @type number
     * @memberof FollowerApifollowerControllerMyFriends
     */
    page: number
    /**
     * 
     * @type number
     * @memberof FollowerApifollowerControllerMyFriends
     */
    limit: number
    /**
     * 
     * @type string
     * @memberof FollowerApifollowerControllerMyFriends
     */
    search?: string
}

export interface FollowerApiFollowerControllerUnfollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerUnfollow
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
    public followerControllerFollowWithHttpInfo(param: FollowerApiFollowerControllerFollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerFollowWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFollow(param: FollowerApiFollowerControllerFollowRequest, options?: Configuration): Promise<FollowerResponseDto> {
        return this.api.followerControllerFollow(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerMyFriendsWithHttpInfo(param: FollowerApiFollowerControllerMyFriendsRequest, options?: Configuration): Promise<HttpInfo<MyFriendsResponseDto>> {
        return this.api.followerControllerMyFriendsWithHttpInfo(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerMyFriends(param: FollowerApiFollowerControllerMyFriendsRequest, options?: Configuration): Promise<MyFriendsResponseDto> {
        return this.api.followerControllerMyFriends(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnfollowWithHttpInfo(param: FollowerApiFollowerControllerUnfollowRequest, options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerUnfollowWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnfollow(param: FollowerApiFollowerControllerUnfollowRequest, options?: Configuration): Promise<FollowerResponseDto> {
        return this.api.followerControllerUnfollow(param.followerPayloadDto,  options).toPromise();
    }

}

import { ObservableFriendsApi } from "./ObservableAPI";
import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";

export interface FriendsApiFriendControllerFindFriendsRequest {
    /**
     * 
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    page: number
    /**
     * 
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    limit: number
    /**
     * 
     * @type string
     * @memberof FriendsApifriendControllerFindFriends
     */
    search?: string
}

export class ObjectFriendsApi {
    private api: ObservableFriendsApi

    public constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public friendControllerFindFriendsWithHttpInfo(param: FriendsApiFriendControllerFindFriendsRequest, options?: Configuration): Promise<HttpInfo<FriendsResponseDto>> {
        return this.api.friendControllerFindFriendsWithHttpInfo(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public friendControllerFindFriends(param: FriendsApiFriendControllerFindFriendsRequest, options?: Configuration): Promise<FriendsResponseDto> {
        return this.api.friendControllerFindFriends(param.page, param.limit, param.search,  options).toPromise();
    }

}

import { ObservablePaymentApi } from "./ObservableAPI";
import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";

export interface PaymentApiPaymentControllerCreatePaymentRequest {
    /**
     * 
     * @type StripePaymentPayloadDto
     * @memberof PaymentApipaymentControllerCreatePayment
     */
    stripePaymentPayloadDto: StripePaymentPayloadDto
}

export interface PaymentApiPaymentControllerCreatePaymentIntentRequest {
    /**
     * 
     * @type StripePayloadDto
     * @memberof PaymentApipaymentControllerCreatePaymentIntent
     */
    stripePayloadDto: StripePayloadDto
}

export interface PaymentApiPaymentControllerDeleteCardDetailsRequest {
    /**
     * 
     * @type PaymentPayloadDto
     * @memberof PaymentApipaymentControllerDeleteCardDetails
     */
    paymentPayloadDto: PaymentPayloadDto
}

export interface PaymentApiPaymentControllerGetCardListRequest {
}

export class ObjectPaymentApi {
    private api: ObservablePaymentApi

    public constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<PaymentResponseDto>> {
        return this.api.paymentControllerCreatePaymentWithHttpInfo(param.stripePaymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePayment(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: Configuration): Promise<PaymentResponseDto> {
        return this.api.paymentControllerCreatePayment(param.stripePaymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<HttpInfo<StripeResponseDto>> {
        return this.api.paymentControllerCreatePaymentIntentWithHttpInfo(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentIntent(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: Configuration): Promise<StripeResponseDto> {
        return this.api.paymentControllerCreatePaymentIntent(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.paymentControllerDeleteCardDetailsWithHttpInfo(param.paymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerDeleteCardDetails(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: Configuration): Promise<CardListResponseDto> {
        return this.api.paymentControllerDeleteCardDetails(param.paymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerGetCardListWithHttpInfo(param: PaymentApiPaymentControllerGetCardListRequest = {}, options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.paymentControllerGetCardListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerGetCardList(param: PaymentApiPaymentControllerGetCardListRequest = {}, options?: Configuration): Promise<CardListResponseDto> {
        return this.api.paymentControllerGetCardList( options).toPromise();
    }

}

import { ObservableStorageApi } from "./ObservableAPI";
import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";

export interface StorageApiFileUploadControllerGetPreSignedURLRequest {
    /**
     * 
     * @type FileUploadPayloadDto
     * @memberof StorageApifileUploadControllerGetPreSignedURL
     */
    fileUploadPayloadDto: FileUploadPayloadDto
}

export class ObjectStorageApi {
    private api: ObservableStorageApi

    public constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor) {
        this.api = new ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public fileUploadControllerGetPreSignedURLWithHttpInfo(param: StorageApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(param.fileUploadPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public fileUploadControllerGetPreSignedURL(param: StorageApiFileUploadControllerGetPreSignedURLRequest, options?: Configuration): Promise<void> {
        return this.api.fileUploadControllerGetPreSignedURL(param.fileUploadPayloadDto,  options).toPromise();
    }

}
