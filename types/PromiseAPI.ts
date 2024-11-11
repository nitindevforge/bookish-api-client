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
import { EventDeleteResponseDto } from '../models/EventDeleteResponseDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { Events } from '../models/Events';
import { EventsList } from '../models/EventsList';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FileUploadDto } from '../models/FileUploadDto';
import { FileUrl } from '../models/FileUrl';
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
import { Location } from '../models/Location';
import { LocationPayloadDto } from '../models/LocationPayloadDto';
import { LocationPlacesResponseDto } from '../models/LocationPlacesResponseDto';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { MetaResponse } from '../models/MetaResponse';
import { MyAllFriendsResponseDto } from '../models/MyAllFriendsResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEvents } from '../models/MyEvents';
import { MyEventsResponse } from '../models/MyEventsResponse';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
import { MyFriendsResponse } from '../models/MyFriendsResponse';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponse } from '../models/PaymentResponse';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { Places } from '../models/Places';
import { Rating } from '../models/Rating';
import { Review } from '../models/Review';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StorageResponseDto } from '../models/StorageResponseDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBooks } from '../models/UserBooks';
import { UserBooksResponse } from '../models/UserBooksResponse';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserDeleteResponseDto } from '../models/UserDeleteResponseDto';
import { UserDetails } from '../models/UserDetails';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserFollowers } from '../models/UserFollowers';
import { UserResponse } from '../models/UserResponse';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public authControllerAccountDeletionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>> {
        const result = this.api.authControllerAccountDeletionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerAccountDeletion(_options?: Configuration): Promise<UserDeleteResponseDto> {
        const result = this.api.authControllerAccountDeletion(_options);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>> {
        const result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<PasswordChangeResponseDto> {
        const result = this.api.authControllerChangePassword(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerCreateUser(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        const result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, _options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        const result = this.api.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, _options?: Configuration): Promise<ActivityResponseDto> {
        const result = this.api.authControllerGetActivity(page, limit, longitude, latitude, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<InterestsResponseDto>> {
        const result = this.api.authControllerGetInterestsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterests(_options?: Configuration): Promise<InterestsResponseDto> {
        const result = this.api.authControllerGetInterests(_options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerLogin(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserById(id: string, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserById(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserFollowerResponseDto>> {
        const result = this.api.authControllerUserFollowersWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserFollowers(id: string, _options?: Configuration): Promise<UserFollowerResponseDto> {
        const result = this.api.authControllerUserFollowers(id, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMe(_options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserMe(_options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto 
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto 
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserUpdate(userUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        const result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, _options);
        return result.toPromise();
    }


}



import { ObservableBooksApi } from './ObservableAPI';

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";
export class PromiseBooksApi {
    private api: ObservableBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param bookPayloadDto 
     */
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        const result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param bookPayloadDto 
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<BookResponseDto> {
        const result = this.api.bookControllerAddBook(bookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        const result = this.api.bookControllerFindBookByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public bookControllerFindBookById(id: string, _options?: Configuration): Promise<BookResponseDto> {
        const result = this.api.bookControllerFindBookById(id, _options);
        return result.toPromise();
    }

    /**
     * @param type 
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(type: string, rate: number, page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        const result = this.api.bookControllerFindBookReviewBaseWithHttpInfo(type, rate, page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param type 
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBookReviewBase(type: string, rate: number, page: number, limit: number, search?: string, _options?: Configuration): Promise<BooksReviewResponseDto> {
        const result = this.api.bookControllerFindBookReviewBase(type, rate, page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<BooksResponseDto>> {
        const result = this.api.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Promise<BooksResponseDto> {
        const result = this.api.bookControllerFindBooks(rate, page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<UserBookReviewResponseDto> {
        const result = this.api.bookControllerFindUserBookReview(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<BookReviewCountResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<BookReviewCountResponseDto> {
        const result = this.api.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, _options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, _options?: Configuration): Promise<UserBooksResponseDto> {
        const result = this.api.bookControllerFindUserBookReviews(bookId, page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const result = this.api.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<UserBookReviewResponseDto> {
        const result = this.api.bookControllerUserBookMark(userBookPayloadDto, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public appControllerGetHelloWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appControllerGetHelloWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public appControllerGetHello(_options?: Configuration): Promise<void> {
        const result = this.api.appControllerGetHello(_options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerCreateEvent(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<EventDeleteResponseDto>> {
        const result = this.api.eventControllerDeleteEventWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eventControllerDeleteEvent(id: string, _options?: Configuration): Promise<EventDeleteResponseDto> {
        const result = this.api.eventControllerDeleteEvent(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerFindEventByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public eventControllerFindEventById(id: string, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerFindEventById(id, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: Configuration): Promise<HttpInfo<EventsResponseDto>> {
        const result = this.api.eventControllerFindEventsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     */
    public eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<EventsResponseDto> {
        const result = this.api.eventControllerFindEvents(page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: Configuration): Promise<HttpInfo<MyEventResponseDto>> {
        const result = this.api.eventControllerFindMyEventWithHttpInfo(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerFindMyEvent(eventId: string, _options?: Configuration): Promise<MyEventResponseDto> {
        const result = this.api.eventControllerFindMyEvent(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<HttpInfo<MyEventsResponseDto>> {
        const result = this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<MyEventsResponseDto> {
        const result = this.api.eventControllerFindMyUpcomingEvents(page, limit, type, _options);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto 
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>> {
        const result = this.api.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto 
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<LocationPlacesResponseDto> {
        const result = this.api.eventControllerFindSearchPlaces(locationPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerUpdateEvent(eventPayloadDto, _options);
        return result.toPromise();
    }


}



import { ObservableFollowerApi } from './ObservableAPI';

import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";
export class PromiseFollowerApi {
    private api: ObservableFollowerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowerApiRequestFactory,
        responseProcessor?: FollowerApiResponseProcessor
    ) {
        this.api = new ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public followerControllerFindMyFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        const result = this.api.followerControllerFindMyFriendsWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public followerControllerFindMyFriends(page: number, limit: number, search?: string, _options?: Configuration): Promise<MyAllFriendsResponseDto> {
        const result = this.api.followerControllerFindMyFriends(page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerFollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerFollow(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerUnfollow(followerPayloadDto, _options);
        return result.toPromise();
    }


}



import { ObservableFriendsApi } from './ObservableAPI';

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class PromiseFriendsApi {
    private api: ObservableFriendsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>> {
        const result = this.api.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Promise<FriendsResponseDto> {
        const result = this.api.friendControllerFindFriends(page, limit, search, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentApi } from './ObservableAPI';

import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";
export class PromisePaymentApi {
    private api: ObservablePaymentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentApiRequestFactory,
        responseProcessor?: PaymentApiResponseProcessor
    ) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param stripePaymentPayloadDto 
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<PaymentResponseDto>> {
        const result = this.api.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto 
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<PaymentResponseDto> {
        const result = this.api.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto 
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<HttpInfo<StripeResponseDto>> {
        const result = this.api.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto 
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<StripeResponseDto> {
        const result = this.api.paymentControllerCreatePaymentIntent(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto 
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto 
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.paymentControllerDeleteCardDetails(paymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.paymentControllerGetCardListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardList(_options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.paymentControllerGetCardList(_options);
        return result.toPromise();
    }


}



import { ObservableStorageApi } from './ObservableAPI';

import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";
export class PromiseStorageApi {
    private api: ObservableStorageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageApiRequestFactory,
        responseProcessor?: StorageApiResponseProcessor
    ) {
        this.api = new ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param fileUploadDto 
     */
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: Configuration): Promise<HttpInfo<StorageResponseDto>> {
        const result = this.api.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options);
        return result.toPromise();
    }

    /**
     * @param fileUploadDto 
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: Configuration): Promise<StorageResponseDto> {
        const result = this.api.storageControllerGetPreSignedURL(fileUploadDto, _options);
        return result.toPromise();
    }


}



