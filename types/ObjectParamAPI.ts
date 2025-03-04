import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { Address } from '../models/Address';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { AttendeeDTO } from '../models/AttendeeDTO';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
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
import { CreateRoleDto } from '../models/CreateRoleDto';
import { CreateStaffDto } from '../models/CreateStaffDto';
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

import { ObservableAnalyticsApi } from "./ObservableAPI";
import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";

export interface AnalyticsApiAnalyticsControllerGetAnalyticsRequest {
}

export class ObjectAnalyticsApi {
    private api: ObservableAnalyticsApi

    public constructor(configuration: Configuration, requestFactory?: AnalyticsApiRequestFactory, responseProcessor?: AnalyticsApiResponseProcessor) {
        this.api = new ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(param: AnalyticsApiAnalyticsControllerGetAnalyticsRequest = {}, options?: Configuration): Promise<HttpInfo<AnalyticsResponseDTO>> {
        return this.api.analyticsControllerGetAnalyticsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public analyticsControllerGetAnalytics(param: AnalyticsApiAnalyticsControllerGetAnalyticsRequest = {}, options?: Configuration): Promise<AnalyticsResponseDTO> {
        return this.api.analyticsControllerGetAnalytics( options).toPromise();
    }

}

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerAccountDeletionRequest {
}

export interface AuthApiAuthControllerChangePasswordRequest {
    /**
     * 
     * @type ChangePayloadDto
     * @memberof AuthApiauthControllerChangePassword
     */
    changePayloadDto: ChangePayloadDto
}

export interface AuthApiAuthControllerCreateBusinessUserRequest {
    /**
     * 
     * @type SignupPayloadDto
     * @memberof AuthApiauthControllerCreateBusinessUser
     */
    signupPayloadDto: SignupPayloadDto
}

export interface AuthApiAuthControllerCreateRolesRequest {
    /**
     * Payload to create a new role
     * @type CreateRoleDto
     * @memberof AuthApiauthControllerCreateRoles
     */
    createRoleDto: CreateRoleDto
}

export interface AuthApiAuthControllerCreateStaffRequest {
    /**
     * 
     * @type CreateStaffDto
     * @memberof AuthApiauthControllerCreateStaff
     */
    createStaffDto: CreateStaffDto
}

export interface AuthApiAuthControllerCreateUserRequest {
    /**
     * 
     * @type SignupPayloadDto
     * @memberof AuthApiauthControllerCreateUser
     */
    signupPayloadDto: SignupPayloadDto
}

export interface AuthApiAuthControllerDeleteRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerDeleteRole
     */
    id: string
}

export interface AuthApiAuthControllerDeleteStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerDeleteStaff
     */
    id: string
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
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    longitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    latitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerGetActivity
     */
    global?: boolean
}

export interface AuthApiAuthControllerGetAllStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllStaff
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllStaff
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetAllStaff
     */
    search?: string
}

export interface AuthApiAuthControllerGetEventsActivityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    longitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    latitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    global?: boolean
}

export interface AuthApiAuthControllerGetInterestsRequest {
}

export interface AuthApiAuthControllerGetPermissionRequest {
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type LoginPayloadDto
     * @memberof AuthApiauthControllerLogin
     */
    loginPayloadDto: LoginPayloadDto
}

export interface AuthApiAuthControllerStoreDetailsUpdateRequest {
    /**
     * 
     * @type StoreDetailsPayloadDto
     * @memberof AuthApiauthControllerStoreDetailsUpdate
     */
    storeDetailsPayloadDto: StoreDetailsPayloadDto
}

export interface AuthApiAuthControllerUpdateRolesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUpdateRoles
     */
    id: string
    /**
     * 
     * @type UpdateRoleDto
     * @memberof AuthApiauthControllerUpdateRoles
     */
    updateRoleDto: UpdateRoleDto
}

export interface AuthApiAuthControllerUpdateStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUpdateStaff
     */
    id: string
    /**
     * 
     * @type UpdateStaffDto
     * @memberof AuthApiauthControllerUpdateStaff
     */
    updateStaffDto: UpdateStaffDto
}

export interface AuthApiAuthControllerUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerUser
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerUser
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerUser
     */
    allRoles?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUser
     */
    search?: string
}

export interface AuthApiAuthControllerUserByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUserById
     */
    id: string
}

export interface AuthApiAuthControllerUserFollowersRequest {
    /**
     * 
     * Defaults to: undefined
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
    public authControllerAccountDeletionWithHttpInfo(param: AuthApiAuthControllerAccountDeletionRequest = {}, options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>> {
        return this.api.authControllerAccountDeletionWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAccountDeletion(param: AuthApiAuthControllerAccountDeletionRequest = {}, options?: Configuration): Promise<UserDeleteResponseDto> {
        return this.api.authControllerAccountDeletion( options).toPromise();
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
    public authControllerCreateBusinessUserWithHttpInfo(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerCreateBusinessUserWithHttpInfo(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateBusinessUser(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerCreateBusinessUser(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateRolesWithHttpInfo(param: AuthApiAuthControllerCreateRolesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerCreateRolesWithHttpInfo(param.createRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateRoles(param: AuthApiAuthControllerCreateRolesRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerCreateRoles(param.createRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaffWithHttpInfo(param: AuthApiAuthControllerCreateStaffRequest, options?: Configuration): Promise<HttpInfo<CreateStaffDto>> {
        return this.api.authControllerCreateStaffWithHttpInfo(param.createStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaff(param: AuthApiAuthControllerCreateStaffRequest, options?: Configuration): Promise<CreateStaffDto> {
        return this.api.authControllerCreateStaff(param.createStaffDto,  options).toPromise();
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
    public authControllerDeleteRoleWithHttpInfo(param: AuthApiAuthControllerDeleteRoleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerDeleteRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteRole(param: AuthApiAuthControllerDeleteRoleRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerDeleteRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaffWithHttpInfo(param: AuthApiAuthControllerDeleteStaffRequest, options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>> {
        return this.api.authControllerDeleteStaffWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaff(param: AuthApiAuthControllerDeleteStaffRequest, options?: Configuration): Promise<UserDeleteResponseDto> {
        return this.api.authControllerDeleteStaff(param.id,  options).toPromise();
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
        return this.api.authControllerGetActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetActivity(param: AuthApiAuthControllerGetActivityRequest, options?: Configuration): Promise<ActivityResponseDto> {
        return this.api.authControllerGetActivity(param.page, param.limit, param.longitude, param.latitude, param.global,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllStaffWithHttpInfo(param: AuthApiAuthControllerGetAllStaffRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerGetAllStaffWithHttpInfo(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllStaff(param: AuthApiAuthControllerGetAllStaffRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerGetAllStaff(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivityWithHttpInfo(param: AuthApiAuthControllerGetEventsActivityRequest, options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        return this.api.authControllerGetEventsActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivity(param: AuthApiAuthControllerGetEventsActivityRequest, options?: Configuration): Promise<ActivityResponseDto> {
        return this.api.authControllerGetEventsActivity(param.page, param.limit, param.longitude, param.latitude, param.global,  options).toPromise();
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
    public authControllerGetPermissionWithHttpInfo(param: AuthApiAuthControllerGetPermissionRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerGetPermissionWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetPermission(param: AuthApiAuthControllerGetPermissionRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerGetPermission( options).toPromise();
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
    public authControllerStoreDetailsUpdateWithHttpInfo(param: AuthApiAuthControllerStoreDetailsUpdateRequest, options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerStoreDetailsUpdateWithHttpInfo(param.storeDetailsPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerStoreDetailsUpdate(param: AuthApiAuthControllerStoreDetailsUpdateRequest, options?: Configuration): Promise<UserResponseDto> {
        return this.api.authControllerStoreDetailsUpdate(param.storeDetailsPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateRolesWithHttpInfo(param: AuthApiAuthControllerUpdateRolesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerUpdateRolesWithHttpInfo(param.id, param.updateRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateRoles(param: AuthApiAuthControllerUpdateRolesRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerUpdateRoles(param.id, param.updateRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaffWithHttpInfo(param: AuthApiAuthControllerUpdateStaffRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerUpdateStaffWithHttpInfo(param.id, param.updateStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaff(param: AuthApiAuthControllerUpdateStaffRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerUpdateStaff(param.id, param.updateStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserWithHttpInfo(param: AuthApiAuthControllerUserRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerUserWithHttpInfo(param.page, param.limit, param.allRoles, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUser(param: AuthApiAuthControllerUserRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerUser(param.page, param.limit, param.allRoles, param.search,  options).toPromise();
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
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBookById
     */
    id: string
}

export interface BooksApiBookControllerFindBookReviewBaseRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    type: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    rate: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    search?: string
}

export interface BooksApiBookControllerFindBooksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    rate: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBooks
     */
    search?: string
}

export interface BooksApiBookControllerFindUserBookReviewRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    status?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReview
     */
    rate?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewCountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    status?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    rate?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    rate?: Array<number>
}

export interface BooksApiBookControllerFindUserWhichReadBookRequest {
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
        return this.api.bookControllerFindBookReviewBaseWithHttpInfo(param.type, param.rate, param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookReviewBase(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: Configuration): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindBookReviewBase(param.type, param.rate, param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooksWithHttpInfo(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<HttpInfo<BooksResponseDto>> {
        return this.api.bookControllerFindBooksWithHttpInfo(param.rate, param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooks(param: BooksApiBookControllerFindBooksRequest, options?: Configuration): Promise<BooksResponseDto> {
        return this.api.bookControllerFindBooks(param.rate, param.page, param.limit, param.search,  options).toPromise();
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
        return this.api.bookControllerFindUserBookReviewsWithHttpInfo(param.bookId, param.page, param.limit, param.rate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviews(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: Configuration): Promise<UserBooksResponseDto> {
        return this.api.bookControllerFindUserBookReviews(param.bookId, param.page, param.limit, param.rate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(param: BooksApiBookControllerFindUserWhichReadBookRequest = {}, options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>> {
        return this.api.bookControllerFindUserWhichReadBookWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserWhichReadBook(param: BooksApiBookControllerFindUserWhichReadBookRequest = {}, options?: Configuration): Promise<UserBooksResponseDto> {
        return this.api.bookControllerFindUserWhichReadBook( options).toPromise();
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

export interface EventsApiEventControllerDeleteEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerDeleteEvent
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EventsApieventControllerDeleteEvent
     */
    withBookedEvent?: boolean
}

export interface EventsApiEventControllerFindCustomerOfEventsRequest {
}

export interface EventsApiEventControllerFindEventByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindEventById
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EventsApieventControllerFindEventById
     */
    withBookedEvent?: boolean
}

export interface EventsApiEventControllerFindEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    limit?: number
}

export interface EventsApiEventControllerFindMyEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindMyEvent
     */
    eventId: string
}

export interface EventsApiEventControllerFindMyUpcomingEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    limit: number
    /**
     * 
     * Defaults to: &#39;UPCOMING&#39;
     * @type &#39;UPCOMING&#39; | &#39;VISITED&#39;
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    type: 'UPCOMING' | 'VISITED'
}

export interface EventsApiEventControllerFindSearchPlacesRequest {
    /**
     * 
     * @type LocationPayloadDto
     * @memberof EventsApieventControllerFindSearchPlaces
     */
    locationPayloadDto: LocationPayloadDto
}

export interface EventsApiEventControllerUpdateEventRequest {
    /**
     * 
     * @type EventPayloadDto
     * @memberof EventsApieventControllerUpdateEvent
     */
    eventPayloadDto: EventPayloadDto
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
    public eventControllerDeleteEventWithHttpInfo(param: EventsApiEventControllerDeleteEventRequest, options?: Configuration): Promise<HttpInfo<EventDeleteResponseDto>> {
        return this.api.eventControllerDeleteEventWithHttpInfo(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerDeleteEvent(param: EventsApiEventControllerDeleteEventRequest, options?: Configuration): Promise<EventDeleteResponseDto> {
        return this.api.eventControllerDeleteEvent(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(param: EventsApiEventControllerFindCustomerOfEventsRequest = {}, options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>> {
        return this.api.eventControllerFindCustomerOfEventsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindCustomerOfEvents(param: EventsApiEventControllerFindCustomerOfEventsRequest = {}, options?: Configuration): Promise<LocationPlacesResponseDto> {
        return this.api.eventControllerFindCustomerOfEvents( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventByIdWithHttpInfo(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerFindEventByIdWithHttpInfo(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventById(param: EventsApiEventControllerFindEventByIdRequest, options?: Configuration): Promise<EventResponseDto> {
        return this.api.eventControllerFindEventById(param.id, param.withBookedEvent,  options).toPromise();
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

    /**
     * @param param the request object
     */
    public eventControllerFindMyEventWithHttpInfo(param: EventsApiEventControllerFindMyEventRequest, options?: Configuration): Promise<HttpInfo<MyEventResponseDto>> {
        return this.api.eventControllerFindMyEventWithHttpInfo(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyEvent(param: EventsApiEventControllerFindMyEventRequest, options?: Configuration): Promise<MyEventResponseDto> {
        return this.api.eventControllerFindMyEvent(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: Configuration): Promise<HttpInfo<MyEventsResponseDto>> {
        return this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(param.page, param.limit, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyUpcomingEvents(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: Configuration): Promise<MyEventsResponseDto> {
        return this.api.eventControllerFindMyUpcomingEvents(param.page, param.limit, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindSearchPlacesWithHttpInfo(param: EventsApiEventControllerFindSearchPlacesRequest, options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>> {
        return this.api.eventControllerFindSearchPlacesWithHttpInfo(param.locationPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindSearchPlaces(param: EventsApiEventControllerFindSearchPlacesRequest, options?: Configuration): Promise<LocationPlacesResponseDto> {
        return this.api.eventControllerFindSearchPlaces(param.locationPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEventWithHttpInfo(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerUpdateEventWithHttpInfo(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEvent(param: EventsApiEventControllerUpdateEventRequest, options?: Configuration): Promise<EventResponseDto> {
        return this.api.eventControllerUpdateEvent(param.eventPayloadDto,  options).toPromise();
    }

}

import { ObservableFollowerApi } from "./ObservableAPI";
import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";

export interface FollowerApiFollowerControllerFindMyFriendsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FollowerApifollowerControllerFindMyFriends
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FollowerApifollowerControllerFindMyFriends
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FollowerApifollowerControllerFindMyFriends
     */
    search?: string
}

export interface FollowerApiFollowerControllerFollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerFollow
     */
    followerPayloadDto: FollowerPayloadDto
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
    public followerControllerFindMyFriendsWithHttpInfo(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: Configuration): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        return this.api.followerControllerFindMyFriendsWithHttpInfo(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFindMyFriends(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: Configuration): Promise<MyAllFriendsResponseDto> {
        return this.api.followerControllerFindMyFriends(param.page, param.limit, param.search,  options).toPromise();
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
     * Defaults to: undefined
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
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

import { ObservableNielsenBooksApi } from "./ObservableAPI";
import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";

export interface NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest {
}

export class ObjectNielsenBooksApi {
    private api: ObservableNielsenBooksApi

    public constructor(configuration: Configuration, requestFactory?: NielsenBooksApiRequestFactory, responseProcessor?: NielsenBooksApiResponseProcessor) {
        this.api = new ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBooks(param: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest = {}, options?: Configuration): Promise<void> {
        return this.api.nielsenBooksControllerGetNielsenBooks( options).toPromise();
    }

}

import { ObservablePaymentApi } from "./ObservableAPI";
import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";

export interface PaymentApiPaymentControllerConnectAccountRequest {
}

export interface PaymentApiPaymentControllerCreateAccountVerificationLinkRequest {
}

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

export interface PaymentApiPaymentControllerRetrieveConnectedAccountRequest {
}

export class ObjectPaymentApi {
    private api: ObservablePaymentApi

    public constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public paymentControllerConnectAccountWithHttpInfo(param: PaymentApiPaymentControllerConnectAccountRequest = {}, options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>> {
        return this.api.paymentControllerConnectAccountWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerConnectAccount(param: PaymentApiPaymentControllerConnectAccountRequest = {}, options?: Configuration): Promise<BusinessConnectedAccount> {
        return this.api.paymentControllerConnectAccount( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(param: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest = {}, options?: Configuration): Promise<HttpInfo<VerificationLinkResponseDTO>> {
        return this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreateAccountVerificationLink(param: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest = {}, options?: Configuration): Promise<VerificationLinkResponseDTO> {
        return this.api.paymentControllerCreateAccountVerificationLink( options).toPromise();
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

    /**
     * @param param the request object
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(param: PaymentApiPaymentControllerRetrieveConnectedAccountRequest = {}, options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>> {
        return this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerRetrieveConnectedAccount(param: PaymentApiPaymentControllerRetrieveConnectedAccountRequest = {}, options?: Configuration): Promise<BusinessConnectedAccount> {
        return this.api.paymentControllerRetrieveConnectedAccount( options).toPromise();
    }

}

import { ObservableStorageApi } from "./ObservableAPI";
import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";

export interface StorageApiStorageControllerGetPreSignedURLRequest {
    /**
     * 
     * @type FileUploadDto
     * @memberof StorageApistorageControllerGetPreSignedURL
     */
    fileUploadDto: FileUploadDto
}

export class ObjectStorageApi {
    private api: ObservableStorageApi

    public constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor) {
        this.api = new ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public storageControllerGetPreSignedURLWithHttpInfo(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: Configuration): Promise<HttpInfo<StorageResponseDto>> {
        return this.api.storageControllerGetPreSignedURLWithHttpInfo(param.fileUploadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storageControllerGetPreSignedURL(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: Configuration): Promise<StorageResponseDto> {
        return this.api.storageControllerGetPreSignedURL(param.fileUploadDto,  options).toPromise();
    }

}
