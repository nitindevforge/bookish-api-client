import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { BillingDetails } from '../models/BillingDetails';
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
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FileUploadPayloadDto } from '../models/FileUploadPayloadDto';
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



import { ObservableEventApi } from './ObservableAPI';

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class PromiseEventApi {
    private api: ObservableEventApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
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
     */
    public eventControllerGetEventsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<EventsResponseDto>> {
        const result = this.api.eventControllerGetEventsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public eventControllerGetEvents(_options?: Configuration): Promise<EventsResponseDto> {
        const result = this.api.eventControllerGetEvents(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEventWithHttpInfo(id: any, eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerUpdateEventWithHttpInfo(id, eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEvent(id: any, eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerUpdateEvent(id, eventPayloadDto, _options);
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
     * @param followerPayloadDto 
     */
    public followerControllerFollowingWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerFollowingWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollowing(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerFollowing(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerUnFollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerUnFollow(followerPayloadDto, _options);
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
     * @param search 
     * @param page 
     * @param limit 
     */
    public friendControllerGetFriendsWithHttpInfo(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>> {
        const result = this.api.friendControllerGetFriendsWithHttpInfo(search, page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param search 
     * @param page 
     * @param limit 
     */
    public friendControllerGetFriends(search?: string, page?: number, limit?: number, _options?: Configuration): Promise<FriendsResponseDto> {
        const result = this.api.friendControllerGetFriends(search, page, limit, _options);
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
     * @param stripePayloadDto 
     */
    public stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<HttpInfo<StripeResponseDto>> {
        const result = this.api.stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto 
     */
    public stripeControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<StripeResponseDto> {
        const result = this.api.stripeControllerCreatePaymentIntent(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripeCardDeletePayloadDto 
     */
    public stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripeCardDeletePayloadDto 
     */
    public stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto: StripeCardDeletePayloadDto, _options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto, _options);
        return result.toPromise();
    }

    /**
     */
    public stripeControllerGetCardListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.stripeControllerGetCardListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public stripeControllerGetCardList(_options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.stripeControllerGetCardList(_options);
        return result.toPromise();
    }


}



import { ObservableUploadApi } from './ObservableAPI';

import { UploadApiRequestFactory, UploadApiResponseProcessor} from "../apis/UploadApi";
export class PromiseUploadApi {
    private api: ObservableUploadApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UploadApiRequestFactory,
        responseProcessor?: UploadApiResponseProcessor
    ) {
        this.api = new ObservableUploadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param fileUploadPayloadDto 
     */
    public fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param fileUploadPayloadDto 
     */
    public fileUploadControllerGetPreSignedURL(fileUploadPayloadDto: FileUploadPayloadDto, _options?: Configuration): Promise<void> {
        const result = this.api.fileUploadControllerGetPreSignedURL(fileUploadPayloadDto, _options);
        return result.toPromise();
    }


}



