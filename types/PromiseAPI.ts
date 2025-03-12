import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { Address } from '../models/Address';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { AttendeeDTO } from '../models/AttendeeDTO';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
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
import { DeleteBookMarkEventResponseDto } from '../models/DeleteBookMarkEventResponseDto';
import { EventDTO } from '../models/EventDTO';
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
import { ObservableAnalyticsApi } from './ObservableAPI';

import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";
export class PromiseAnalyticsApi {
    private api: ObservableAnalyticsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalyticsApiRequestFactory,
        responseProcessor?: AnalyticsApiResponseProcessor
    ) {
        this.api = new ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalyticsResponseDTO>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.analyticsControllerGetAnalyticsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public analyticsControllerGetAnalytics(_options?: PromiseConfigurationOptions): Promise<AnalyticsResponseDTO> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.analyticsControllerGetAnalytics(observableOptions);
        return result.toPromise();
    }


}



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
    public authControllerAccountDeletionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerAccountDeletionWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerAccountDeletion(_options?: PromiseConfigurationOptions): Promise<UserDeleteResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerAccountDeletion(observableOptions);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PasswordChangeResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: PromiseConfigurationOptions): Promise<PasswordChangeResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerChangePassword(changePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateBusinessUser(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateRolesWithHttpInfo(createRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateRoles(createRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateStaffDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateStaffWithHttpInfo(createStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: PromiseConfigurationOptions): Promise<CreateStaffDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateStaff(createStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerCreateUser(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteRoleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerDeleteRoleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteRole(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerDeleteRole(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerDeleteStaffWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaff(id: string, _options?: PromiseConfigurationOptions): Promise<UserDeleteResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerDeleteStaff(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: PromiseConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<ActivityResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetActivity(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaffWithHttpInfo(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetAllStaffWithHttpInfo(page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaff(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetAllStaff(page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<ActivityResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetEventsActivity(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<InterestsResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetInterestsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterests(_options?: PromiseConfigurationOptions): Promise<InterestsResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetInterests(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermissionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetPermissionWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermission(_options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerGetPermission(observableOptions);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerLogin(loginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdate(storeDetailsPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdateRoles(id, updateRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUpdateStaff(id, updateStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserWithHttpInfo(page, limit, allRoles, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUser(page, limit, allRoles, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserById(id: string, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserFollowerResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserFollowersWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserFollowers(id: string, _options?: PromiseConfigurationOptions): Promise<UserFollowerResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserFollowers(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserMeWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMe(_options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserMe(observableOptions);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerUserUpdate(userUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: PromiseConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, observableOptions);
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
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: PromiseConfigurationOptions): Promise<BookResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerAddBook(bookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBookByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public bookControllerFindBookById(id: string, _options?: PromiseConfigurationOptions): Promise<BookResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBookById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: PromiseConfigurationOptions): Promise<BooksReviewResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBookReviewBase(userBookStatusQueryDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<BooksResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindBooks(rate, page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<UserBookReviewResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReview(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookReviewCountResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<BookReviewCountResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReviewCount(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [rate]
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, rate, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [rate]
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, rate?: Array<number>, _options?: PromiseConfigurationOptions): Promise<UserBooksResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserBookReviews(bookId, page, limit, rate, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserWhichReadBookWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBook(_options?: PromiseConfigurationOptions): Promise<UserBooksResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerFindUserWhichReadBook(observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserBookReviewResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.bookControllerUserBookMark(userBookPayloadDto, observableOptions);
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
    public appControllerGetHelloWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.appControllerGetHelloWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public appControllerGetHello(_options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.appControllerGetHello(observableOptions);
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
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateBookMarkEventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: PromiseConfigurationOptions): Promise<CreateBookMarkEventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerBookMarkEvent(bookMarkEventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookMarkEventListResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerBookMarkEventListWithHttpInfo(page, limit, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: PromiseConfigurationOptions): Promise<BookMarkEventListResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerBookMarkEventList(page, limit, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerCreateEvent(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteBookMarkEventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerDeleteBookMarkEventWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEvent(eventId: string, _options?: PromiseConfigurationOptions): Promise<DeleteBookMarkEventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerDeleteBookMarkEvent(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventDeleteResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<EventDeleteResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerDeleteEvent(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<LocationPlacesResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindCustomerOfEventsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public eventControllerFindCustomerOfEvents(_options?: PromiseConfigurationOptions): Promise<LocationPlacesResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindCustomerOfEvents(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindEventById(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventsResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindEventsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     */
    public eventControllerFindEvents(page: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<EventsResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindEvents(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyEventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindMyEventWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEvent(eventId: string, _options?: PromiseConfigurationOptions): Promise<MyEventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindMyEvent(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyEventsResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: PromiseConfigurationOptions): Promise<MyEventsResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindMyUpcomingEvents(page, limit, type, observableOptions);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LocationPlacesResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: PromiseConfigurationOptions): Promise<LocationPlacesResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerFindSearchPlaces(locationPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookMarkEventStatusResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerGetBookMarkEventStatusWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatus(eventId: string, _options?: PromiseConfigurationOptions): Promise<BookMarkEventStatusResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerGetBookMarkEventStatus(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.eventControllerUpdateEvent(eventPayloadDto, observableOptions);
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
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: PromiseConfigurationOptions): Promise<MyAllFriendsResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerFindMyFriends(myFriendPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerFollowWithHttpInfo(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerFollow(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerUnfollowWithHttpInfo(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.followerControllerUnfollow(followerPayloadDto, observableOptions);
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
     * @param [search]
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FriendsResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.friendControllerFindFriendsWithHttpInfo(page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<FriendsResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.friendControllerFindFriends(page, limit, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNielsenBooksApi } from './ObservableAPI';

import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";
export class PromiseNielsenBooksApi {
    private api: ObservableNielsenBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NielsenBooksApiRequestFactory,
        responseProcessor?: NielsenBooksApiResponseProcessor
    ) {
        this.api = new ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBookById(id, body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBookImageById(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooks(_options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.nielsenBooksControllerGetNielsenBooks(observableOptions);
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
     */
    public paymentControllerConnectAccountWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerConnectAccountWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerConnectAccount(_options?: PromiseConfigurationOptions): Promise<BusinessConnectedAccount> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerConnectAccount(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<VerificationLinkResponseDTO>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLink(_options?: PromiseConfigurationOptions): Promise<VerificationLinkResponseDTO> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreateAccountVerificationLink(observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<PaymentResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreatePayment(stripePaymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StripeResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: PromiseConfigurationOptions): Promise<StripeResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerCreatePaymentIntent(stripePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<CardListResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerDeleteCardDetails(paymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerGetCardListWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardList(_options?: PromiseConfigurationOptions): Promise<CardListResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerGetCardList(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccount(_options?: PromiseConfigurationOptions): Promise<BusinessConnectedAccount> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.paymentControllerRetrieveConnectedAccount(observableOptions);
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
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StorageResponseDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: PromiseConfigurationOptions): Promise<StorageResponseDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.storageControllerGetPreSignedURL(fileUploadDto, observableOptions);
        return result.toPromise();
    }


}



