import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { Address } from '../models/Address';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
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
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StripeCardDeletePayloadDto } from '../models/StripeCardDeletePayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { UserDetails } from '../models/UserDetails';
import { UserResponse } from '../models/UserResponse';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';

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
     * @param changePayloadDto 
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Observable<HttpInfo<PasswordChangeResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerChangePassword(changePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerCreateUser(signupPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Observable<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerForgetPassword(forgetPasswordPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public authControllerGetActivityWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetActivity(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param limit 
     */
    public authControllerGetActivity(page?: number, limit?: number, _options?: Configuration): Observable<ActivityResponseDto> {
        return this.authControllerGetActivityWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<InterestsResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerGetInterests(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param loginPayloadDto 
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerLogin(loginPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param id 
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public authControllerUserMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param search 
     * @param page 
     * @param limit 
     */
    public bookControllerGetBooksWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<BooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerGetBooks(search, page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerGetBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public bookControllerGetBooks(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<BooksResponseDto> {
        return this.bookControllerGetBooksWithHttpInfo(search, page, limit, _options).pipe(map((apiResponse: HttpInfo<BooksResponseDto>) => apiResponse.data));
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param eventPayloadDto 
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerCreateEvent(eventPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param page 
     * @param limit 
     */
    public eventControllerGetEventsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerGetEvents(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerGetEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param limit 
     */
    public eventControllerGetEvents(page?: number, limit?: number, _options?: Configuration): Observable<EventsResponseDto> {
        return this.eventControllerGetEventsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<EventsResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerUpdateEvent(eventPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param followerPayloadDto 
     */
    public followerControllerFollowingWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerFollowing(followerPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFollowingWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollowing(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto> {
        return this.followerControllerFollowingWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerUnFollow(followerPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerUnFollowWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<FollowerResponseDto> {
        return this.followerControllerUnFollowWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
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
     * @param search 
     * @param page 
     * @param limit 
     */
    public friendControllerGetFriendsWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<FriendsResponseDto>> {
        const requestContextPromise = this.requestFactory.friendControllerGetFriends(search, page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.friendControllerGetFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public friendControllerGetFriends(search?: string, page?: number, limit?: number, _options?: Configuration): Observable<FriendsResponseDto> {
        return this.friendControllerGetFriendsWithHttpInfo(search, page, limit, _options).pipe(map((apiResponse: HttpInfo<FriendsResponseDto>) => apiResponse.data));
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
     * @param stripePayloadDto 
     */
    public stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<HttpInfo<StripeResponseDto>> {
        const requestContextPromise = this.requestFactory.stripeControllerCreatePaymentIntent(stripePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stripeControllerCreatePaymentIntentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripePayloadDto 
     */
    public stripeControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Observable<StripeResponseDto> {
        return this.stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options).pipe(map((apiResponse: HttpInfo<StripeResponseDto>) => apiResponse.data));
    }

    /**
     * @param stripeCardDeletePayloadDto 
     */
    public stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Observable<HttpInfo<CardListResponseDto>> {
        const requestContextPromise = this.requestFactory.stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stripeControllerDeleteCardDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripeCardDeletePayloadDto 
     */
    public stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Observable<CardListResponseDto> {
        return this.stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto, _options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

    /**
     */
    public stripeControllerGetCardListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CardListResponseDto>> {
        const requestContextPromise = this.requestFactory.stripeControllerGetCardList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stripeControllerGetCardListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public stripeControllerGetCardList(_options?: Configuration): Observable<CardListResponseDto> {
        return this.stripeControllerGetCardListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

}

import { UploadApiRequestFactory, UploadApiResponseProcessor} from "../apis/UploadApi";
export class ObservableUploadApi {
    private requestFactory: UploadApiRequestFactory;
    private responseProcessor: UploadApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UploadApiRequestFactory,
        responseProcessor?: UploadApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UploadApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UploadApiResponseProcessor();
    }

    /**
     * @param fileUploadPayloadDto 
     */
    public fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.fileUploadControllerGetPreSignedURL(fileUploadPayloadDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fileUploadControllerGetPreSignedURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param fileUploadPayloadDto 
     */
    public fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Observable<void> {
        return this.fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
