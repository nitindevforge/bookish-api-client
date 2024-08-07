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
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, _options?: Configuration): Observable<HttpInfo<ActivityResponseDto>> {
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
    public authControllerGetActivity(page: number, limit: number, _options?: Configuration): Observable<ActivityResponseDto> {
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
     * @param id 
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserFollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.authControllerUserFollowers(id, _options);

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
     * @param id 
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<BookResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBookById(id, _options);

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
     * @param type 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(type: string, page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<BooksReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBookReviewBase(type, page, limit, search, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookReviewBaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param type 
     * @param page 
     * @param limit 
     * @param search 
     */
    public bookControllerFindBookReviewBase(type: string, page: number, limit: number, search?: string, _options?: Configuration): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindBookReviewBaseWithHttpInfo(type, page, limit, search, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public bookControllerFindBooksWithHttpInfo(search: string, page: number, limit: number, _options?: Configuration): Observable<HttpInfo<BooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindBooks(search, page, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Observable<BooksResponseDto> {
        return this.bookControllerFindBooksWithHttpInfo(search, page, limit, _options).pipe(map((apiResponse: HttpInfo<BooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReview(bookId, status, rate, review, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<UserBookReviewResponseDto> {
        return this.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<UserBookReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<HttpInfo<BookReviewCountResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Observable<BookReviewCountResponseDto> {
        return this.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<BookReviewCountResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, _options?: Configuration): Observable<HttpInfo<UserBooksResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviews(bookId, page, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, _options?: Configuration): Observable<UserBooksResponseDto> {
        return this.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, _options).pipe(map((apiResponse: HttpInfo<UserBooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const requestContextPromise = this.requestFactory.bookControllerUserBookMark(userBookPayloadDto, _options);

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
     * @param id 
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EventResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindEventById(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public eventControllerFindEventById(id: string, _options?: Configuration): Observable<EventResponseDto> {
        return this.eventControllerFindEventByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page 
     * @param limit 
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: Configuration): Observable<HttpInfo<EventsResponseDto>> {
        const requestContextPromise = this.requestFactory.eventControllerFindEvents(page, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param limit 
     */
    public eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Observable<EventsResponseDto> {
        return this.eventControllerFindEventsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<EventsResponseDto>) => apiResponse.data));
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
     * @param page 
     * @param limit 
     * @param search 
     */
    public followerControllerAllMyFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<MyFriendsResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerAllMyFriends(page, limit, search, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerAllMyFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public followerControllerAllMyFriends(page: number, limit: number, search?: string, _options?: Configuration): Observable<MyFriendsResponseDto> {
        return this.followerControllerAllMyFriendsWithHttpInfo(page, limit, search, _options).pipe(map((apiResponse: HttpInfo<MyFriendsResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Observable<HttpInfo<FollowerResponseDto>> {
        const requestContextPromise = this.requestFactory.followerControllerFollow(followerPayloadDto, _options);

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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param search 
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Observable<HttpInfo<FriendsResponseDto>> {
        const requestContextPromise = this.requestFactory.friendControllerFindFriends(page, limit, search, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.friendControllerFindFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Observable<FriendsResponseDto> {
        return this.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options).pipe(map((apiResponse: HttpInfo<FriendsResponseDto>) => apiResponse.data));
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
     * @param stripePaymentPayloadDto 
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Observable<HttpInfo<PaymentResponseDto>> {
        const requestContextPromise = this.requestFactory.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);

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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
