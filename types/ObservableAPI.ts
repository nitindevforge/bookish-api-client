import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { Address } from '../models/Address';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { AttendeeDTO } from '../models/AttendeeDTO';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
import { BookByStatusDto } from '../models/BookByStatusDto';
import { BookMarkEventDTO } from '../models/BookMarkEventDTO';
import { BookMarkEventListDTO } from '../models/BookMarkEventListDTO';
import { BookMarkEventListResponseDto } from '../models/BookMarkEventListResponseDto';
import { BookMarkEventPayloadDto } from '../models/BookMarkEventPayloadDto';
import { BookMarkEventStatusResponseDto } from '../models/BookMarkEventStatusResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { Books } from '../models/Books';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { BooksStatusResponseDto } from '../models/BooksStatusResponseDto';
import { BusinessConnectedAccount } from '../models/BusinessConnectedAccount';
import { Card } from '../models/Card';
import { CardChecks } from '../models/CardChecks';
import { CardList } from '../models/CardList';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { CardNetwork } from '../models/CardNetwork';
import { CardSecure } from '../models/CardSecure';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { CreateBookMarkEventResponseDto } from '../models/CreateBookMarkEventResponseDto';
import { CreateRoleDto } from '../models/CreateRoleDto';
import { CreateStaffDto } from '../models/CreateStaffDto';
import { CreateStaffRoleDto } from '../models/CreateStaffRoleDto';
import { DeleteBookMarkEventResponseDto } from '../models/DeleteBookMarkEventResponseDto';
import { EventCustomer } from '../models/EventCustomer';
import { EventCustomerResponseDto } from '../models/EventCustomerResponseDto';
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
import { GoodReadsBookPayloadDto } from '../models/GoodReadsBookPayloadDto';
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
import { MyFriendPayloadDto } from '../models/MyFriendPayloadDto';
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
import { StoreDetailsPayloadDto } from '../models/StoreDetailsPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UpdateRoleDto } from '../models/UpdateRoleDto';
import { UpdateStaffDto } from '../models/UpdateStaffDto';
import { UpdateStaffRoleDto } from '../models/UpdateStaffRoleDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBookStatusQueryDto } from '../models/UserBookStatusQueryDto';
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
import { VerificationLinkResponseDTO } from '../models/VerificationLinkResponseDTO';

import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";
export class ObservableAnalyticsApi {
    private requestFactory: AnalyticsApiRequestFactory;
    private responseProcessor: AnalyticsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalyticsApiRequestFactory,
        responseProcessor?: AnalyticsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalyticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalyticsApiResponseProcessor();
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<AnalyticsResponseDTO>> {
        const requestContextPromise = this.requestFactory.analyticsControllerGetAnalytics(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.analyticsControllerGetAnalyticsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalytics(userId: string, _options?: Configuration): Observable<AnalyticsResponseDTO> {
        return this.analyticsControllerGetAnalyticsWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<AnalyticsResponseDTO>) => apiResponse.data));
    }

}

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     */
    public authControllerAccountDeletionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserDeleteResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerAccountDeletion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerAccountDeletionWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerAccountDeletion(_options?: Configuration): Observable<UserDeleteResponseDto> {
        return this.authControllerAccountDeletionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<HttpInfo<PasswordChangeResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerChangePassword(changePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerChangePasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<PasswordChangeResponseDto> {
        return this.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options).pipe(map((apiResponse: HttpInfo<PasswordChangeResponseDto>) => apiResponse.data));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerCreateBusinessUser(signupPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateBusinessUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerCreateRoles(createRoleDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: Configuration): Observable<void> {
        return this.authControllerCreateRolesWithHttpInfo(createRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: Configuration): Observable<HttpInfo<CreateStaffDto>> {
        const requestContextPromise = this.requestFactory.authControllerCreateStaff(createStaffDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: Configuration): Observable<CreateStaffDto> {
        return this.authControllerCreateStaffWithHttpInfo(createStaffDto, _options).pipe(map((apiResponse: HttpInfo<CreateStaffDto>) => apiResponse.data));
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto: CreateStaffRoleDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerCreateStaffRole(createStaffRoleDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRole(createStaffRoleDto: CreateStaffRoleDto, _options?: Configuration): Observable<void> {
        return this.authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerCreateUser(signupPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteRoleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerDeleteRole(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteRole(id: string, _options?: Configuration): Observable<void> {
        return this.authControllerDeleteRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserDeleteResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerDeleteStaff(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaff(id: string, _options?: Configuration): Observable<UserDeleteResponseDto> {
        return this.authControllerDeleteStaffWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRoleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerDeleteStaffRole(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRole(id: string, _options?: Configuration): Observable<void> {
        return this.authControllerDeleteStaffRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerForgetPassword(forgetPasswordPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerForgetPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto> {
        return this.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options).pipe(map((apiResponse: HttpInfo<ForgetPasswordEntityResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetActivity(page, limit, longitude, latitude, global, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Observable<ActivityResponseDto> {
        return this.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaffWithHttpInfo(page: number, ownerId: string, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerGetAllStaff(page, ownerId, limit, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetAllStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaff(page: number, ownerId: string, limit: number, search?: string, _options?: Configuration): Observable<void> {
        return this.authControllerGetAllStaffWithHttpInfo(page, ownerId, limit, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetEventsActivity(page, limit, longitude, latitude, global, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetEventsActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Observable<ActivityResponseDto> {
        return this.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByTypeWithHttpInfo(page: number, limit: number, type: string, userId?: string, search?: string, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetEventsActivityByType(page, limit, type, userId, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetEventsActivityByTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByType(page: number, limit: number, type: string, userId?: string, search?: string, _options?: Configuration): Observable<ActivityResponseDto> {
        return this.authControllerGetEventsActivityByTypeWithHttpInfo(page, limit, type, userId, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<InterestsResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetInterests(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetInterestsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerGetInterests(_options?: Configuration): Observable<InterestsResponseDto> {
        return this.authControllerGetInterestsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<InterestsResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerGetPermissionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerGetPermission(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetPermissionWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerGetPermission(_options?: Configuration): Observable<void> {
        return this.authControllerGetPermissionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param email
     */
    public authControllerGetStaffWithHttpInfo(email: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerGetStaff(email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param email
     */
    public authControllerGetStaff(email: string, _options?: Configuration): Observable<void> {
        return this.authControllerGetStaffWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerGetStaffRoleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerGetStaffRole(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerGetStaffRole(id: string, _options?: Configuration): Observable<void> {
        return this.authControllerGetStaffRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerLogin(loginPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerLoginWithHttpInfo(loginPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRolesWithHttpInfo(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerStaffRoles(page, limit, allRoles, ownerId, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerStaffRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRoles(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: Configuration): Observable<void> {
        return this.authControllerStaffRolesWithHttpInfo(page, limit, allRoles, ownerId, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUpdate(storeDetailsPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerUpdateRoles(id, updateRoleDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Observable<void> {
        return this.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerUpdateStaff(id, updateStaffDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Observable<void> {
        return this.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRolesWithHttpInfo(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerUpdateStaffRoles(id, updateStaffRoleDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateStaffRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRoles(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: Configuration): Observable<void> {
        return this.authControllerUpdateStaffRolesWithHttpInfo(id, updateStaffRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerUser(page, limit, allRoles, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Observable<void> {
        return this.authControllerUserWithHttpInfo(page, limit, allRoles, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerUserById(id: string, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerUserByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserFollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserFollowers(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserFollowersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerUserFollowers(id: string, _options?: Configuration): Observable<UserFollowerResponseDto> {
        return this.authControllerUserFollowersWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserFollowerResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserMeWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerUserMe(_options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerUserMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserRoleUpdate(userRolePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserRoleUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserUpdate(userUpdatePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Observable<UserResponseDto> {
        return this.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerVerifyOtp(otpEntityPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerVerifyOtpWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Observable<ForgetPasswordEntityResponseDto> {
        return this.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options).pipe(map((apiResponse: HttpInfo<ForgetPasswordEntityResponseDto>) => apiResponse.data));
    }

}

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";
export class ObservableBooksApi {
    private requestFactory: BooksApiRequestFactory;
    private responseProcessor: BooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BooksApiResponseProcessor();
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: Configuration): Observable<HttpInfo<BookResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerAddBook(bookPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddBookWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Observable<BookResponseDto> {
        return this.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<BookResponseDto>) => apiResponse.data));
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<BooksStatusResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerAddMyGoodReadsBooks(requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddMyGoodReadsBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooks(requestBody: Array<string>, _options?: Configuration): Observable<BooksStatusResponseDto> {
        return this.bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<BooksStatusResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<BookResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBookById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public bookControllerFindBookById(id: string, _options?: Configuration): Observable<BookResponseDto> {
        return this.bookControllerFindBookByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<BookResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto: BookByStatusDto, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBookByStatus(bookByStatusDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookByStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatus(bookByStatusDto: BookByStatusDto, _options?: Configuration): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBookReviewBase(userBookStatusQueryDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookReviewBaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<BooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBooks(rate, page, limit, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Observable<BooksResponseDto> {
        return this.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, _options).pipe(map((apiResponse: HttpInfo<BooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindGoodReads(goodReadsBookPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindGoodReadsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReads(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: Configuration): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReview(bookId, status, rate, review, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<UserBookReviewResponseDto> {
        return this.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<UserBookReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<BookReviewCountResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<BookReviewCountResponseDto> {
        return this.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<BookReviewCountResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [rate]
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviews(bookId, page, limit, rate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [rate]
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: Configuration): Observable<UserBooksResponseDto> {
        return this.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, rate, _options).pipe(map((apiResponse: HttpInfo<UserBooksResponseDto>) => apiResponse.data));
    }

    /**
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserWhichReadBook(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserWhichReadBookWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public bookControllerFindUserWhichReadBook(_options?: Configuration): Observable<UserBooksResponseDto> {
        return this.bookControllerFindUserWhichReadBookWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserBooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerUserBookMark(userBookPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerUserBookMarkWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Observable<UserBookReviewResponseDto> {
        return this.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserBookReviewResponseDto>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     */
    public appControllerGetHelloWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appControllerGetHello(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerGetHelloWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public appControllerGetHello(_options?: Configuration): Observable<void> {
        return this.appControllerGetHelloWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Observable<HttpInfo<CreateBookMarkEventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerBookMarkEvent(bookMarkEventPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerBookMarkEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Observable<CreateBookMarkEventResponseDto> {
        return this.eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<CreateBookMarkEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: Configuration): Observable<HttpInfo<BookMarkEventListResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerBookMarkEventList(page, limit, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerBookMarkEventListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: Configuration): Observable<BookMarkEventListResponseDto> {
        return this.eventControllerBookMarkEventListWithHttpInfo(page, limit, userId, _options).pipe(map((apiResponse: HttpInfo<BookMarkEventListResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerCreateEvent(eventPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerCreateEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto> {
        return this.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<DeleteBookMarkEventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerDeleteBookMarkEvent(eventId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerDeleteBookMarkEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEvent(eventId: string, _options?: Configuration): Observable<DeleteBookMarkEventResponseDto> {
        return this.eventControllerDeleteBookMarkEventWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<DeleteBookMarkEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<HttpInfo<EventDeleteResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerDeleteEvent(id, withBookedEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerDeleteEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<EventDeleteResponseDto> {
        return this.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, _options).pipe(map((apiResponse: HttpInfo<EventDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<EventCustomerResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindCustomerOfEvents(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindCustomerOfEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEvents(userId: string, _options?: Configuration): Observable<EventCustomerResponseDto> {
        return this.eventControllerFindCustomerOfEventsWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<EventCustomerResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindEventById(id, withBookedEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: Configuration): Observable<EventResponseDto> {
        return this.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindEvents(page, limit, longitude, latitude, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     */
    public eventControllerFindEvents(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, _options?: Configuration): Observable<EventsResponseDto> {
        return this.eventControllerFindEventsWithHttpInfo(page, limit, longitude, latitude, userId, _options).pipe(map((apiResponse: HttpInfo<EventsResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<MyEventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindMyEvent(eventId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindMyEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEvent(eventId: string, _options?: Configuration): Observable<MyEventResponseDto> {
        return this.eventControllerFindMyEventWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<MyEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<HttpInfo<MyEventsResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindMyUpcomingEvents(page, limit, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindMyUpcomingEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Observable<MyEventsResponseDto> {
        return this.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options).pipe(map((apiResponse: HttpInfo<MyEventsResponseDto>) => apiResponse.data));
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Observable<HttpInfo<LocationPlacesResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindSearchPlaces(locationPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindSearchPlacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Observable<LocationPlacesResponseDto> {
        return this.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options).pipe(map((apiResponse: HttpInfo<LocationPlacesResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: Configuration): Observable<HttpInfo<BookMarkEventStatusResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerGetBookMarkEventStatus(eventId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerGetBookMarkEventStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatus(eventId: string, _options?: Configuration): Observable<BookMarkEventStatusResponseDto> {
        return this.eventControllerGetBookMarkEventStatusWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<BookMarkEventStatusResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerUpdateEvent(eventPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerUpdateEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<EventResponseDto> {
        return this.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

}

import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";
export class ObservableFollowerApi {
    private requestFactory: FollowerApiRequestFactory;
    private responseProcessor: FollowerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowerApiRequestFactory,
        responseProcessor?: FollowerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FollowerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FollowerApiResponseProcessor();
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Observable<HttpInfo<MyAllFriendsResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerFindMyFriends(myFriendPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFindMyFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Observable<MyAllFriendsResponseDto> {
        return this.followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto, _options).pipe(map((apiResponse: HttpInfo<MyAllFriendsResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerFollow(followerPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFollowWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto> {
        return this.followerControllerFollowWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerUnfollow(followerPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerUnfollowWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto> {
        return this.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

}

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class ObservableFriendsApi {
    private requestFactory: FriendsApiRequestFactory;
    private responseProcessor: FriendsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FriendsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FriendsApiResponseProcessor();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<FriendsResponseDto>> {
        const requestContextPromise = this.requestFactory.friendControllerFindFriends(page, limit, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.friendControllerFindFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Observable<FriendsResponseDto> {
        return this.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options).pipe(map((apiResponse: HttpInfo<FriendsResponseDto>) => apiResponse.data));
    }

}

import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";
export class ObservableNielsenBooksApi {
    private requestFactory: NielsenBooksApiRequestFactory;
    private responseProcessor: NielsenBooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NielsenBooksApiRequestFactory,
        responseProcessor?: NielsenBooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NielsenBooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NielsenBooksApiResponseProcessor();
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBookById(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: Configuration): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBookImageById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: Configuration): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBooks(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooks(_options?: Configuration): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";
export class ObservablePaymentApi {
    private requestFactory: PaymentApiRequestFactory;
    private responseProcessor: PaymentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentApiRequestFactory,
        responseProcessor?: PaymentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentApiResponseProcessor();
    }

    /**
     */
    public paymentControllerConnectAccountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BusinessConnectedAccount>> {
        const requestContextPromise = this.requestFactory.paymentControllerConnectAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerConnectAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerConnectAccount(_options?: Configuration): Observable<BusinessConnectedAccount> {
        return this.paymentControllerConnectAccountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BusinessConnectedAccount>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: Configuration): Observable<HttpInfo<VerificationLinkResponseDTO>> {
        const requestContextPromise = this.requestFactory.paymentControllerCreateAccountVerificationLink(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreateAccountVerificationLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLink(_options?: Configuration): Observable<VerificationLinkResponseDTO> {
        return this.paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<VerificationLinkResponseDTO>) => apiResponse.data));
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<PaymentResponseDto>> {
        const requestContextPromise = this.requestFactory.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreatePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<PaymentResponseDto> {
        return this.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options).pipe(map((apiResponse: HttpInfo<PaymentResponseDto>) => apiResponse.data));
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<HttpInfo<StripeResponseDto>> {
        const requestContextPromise = this.requestFactory.paymentControllerCreatePaymentIntent(stripePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreatePaymentIntentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<StripeResponseDto> {
        return this.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options).pipe(map((apiResponse: HttpInfo<StripeResponseDto>) => apiResponse.data));
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<CardListResponseDto>> {
        const requestContextPromise = this.requestFactory.paymentControllerDeleteCardDetails(paymentPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerDeleteCardDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Observable<CardListResponseDto> {
        return this.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CardListResponseDto>> {
        const requestContextPromise = this.requestFactory.paymentControllerGetCardList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerGetCardListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerGetCardList(_options?: Configuration): Observable<CardListResponseDto> {
        return this.paymentControllerGetCardListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BusinessConnectedAccount>> {
        const requestContextPromise = this.requestFactory.paymentControllerRetrieveConnectedAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerRetrieveConnectedAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccount(_options?: Configuration): Observable<BusinessConnectedAccount> {
        return this.paymentControllerRetrieveConnectedAccountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BusinessConnectedAccount>) => apiResponse.data));
    }

}

import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";
export class ObservableStorageApi {
    private requestFactory: StorageApiRequestFactory;
    private responseProcessor: StorageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageApiRequestFactory,
        responseProcessor?: StorageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StorageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StorageApiResponseProcessor();
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: Configuration): Observable<HttpInfo<StorageResponseDto>> {
        const requestContextPromise = this.requestFactory.storageControllerGetPreSignedURL(fileUploadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storageControllerGetPreSignedURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: Configuration): Observable<StorageResponseDto> {
        return this.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options).pipe(map((apiResponse: HttpInfo<StorageResponseDto>) => apiResponse.data));
    }

}
