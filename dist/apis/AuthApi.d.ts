import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { CreateRoleDto } from '../models/CreateRoleDto';
import { CreateStaffDto } from '../models/CreateStaffDto';
import { CreateStaffRoleDto } from '../models/CreateStaffRoleDto';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { LoggedOutPayloadDTO } from '../models/LoggedOutPayloadDTO';
import { LoggedOutResponse } from '../models/LoggedOutResponse';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StoreDetailsPayloadDto } from '../models/StoreDetailsPayloadDto';
import { UpdateRoleDto } from '../models/UpdateRoleDto';
import { UpdateStaffDto } from '../models/UpdateStaffDto';
import { UpdateStaffRoleDto } from '../models/UpdateStaffRoleDto';
import { UserDeleteResponseDto } from '../models/UserDeleteResponseDto';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserSyncDTO } from '../models/UserSyncDTO';
import { UserSyncResponseDto } from '../models/UserSyncResponseDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    authControllerAccountDeletion(_options?: Configuration): Promise<RequestContext>;
    authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateStaffRole(createStaffRoleDto: CreateStaffRoleDto, _options?: Configuration): Promise<RequestContext>;
    authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerDeleteRole(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerDeleteStaff(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerDeleteStaffRole(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerGetAllStaff(page: number, ownerId: string, limit: number, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerGetEventsActivityByType(page: number, limit: number, type: string, userId?: string, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerGetInterests(_options?: Configuration): Promise<RequestContext>;
    authControllerGetPermission(_options?: Configuration): Promise<RequestContext>;
    authControllerGetStaff(email: string, _options?: Configuration): Promise<RequestContext>;
    authControllerGetStaffRole(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerSignOut(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: Configuration): Promise<RequestContext>;
    authControllerStaffRoles(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerSyncUserInfo(userSyncDTO: UserSyncDTO, _options?: Configuration): Promise<RequestContext>;
    authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUpdateStaffRoles(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Promise<RequestContext>;
    authControllerUserById(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerUserFollowers(id: string, _options?: Configuration): Promise<RequestContext>;
    authControllerUserMe(_options?: Configuration): Promise<RequestContext>;
    authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<RequestContext>;
    authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    authControllerAccountDeletionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserDeleteResponseDto>>;
    authControllerChangePasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PasswordChangeResponseDto>>;
    authControllerCreateBusinessUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerCreateRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerCreateStaffWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateStaffDto>>;
    authControllerCreateStaffRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerCreateUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerDeleteRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerDeleteStaffWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserDeleteResponseDto>>;
    authControllerDeleteStaffRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerForgetPasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
    authControllerGetActivityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetAllStaffWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerGetEventsActivityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetEventsActivityByTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivityResponseDto>>;
    authControllerGetInterestsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InterestsResponseDto>>;
    authControllerGetPermissionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerGetStaffWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerGetStaffRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerLoginWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerSignOutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LoggedOutResponse>>;
    authControllerStaffRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerSyncUserInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserSyncResponseDto>>;
    authControllerUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUpdateRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerUpdateStaffWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerUpdateStaffRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    authControllerUserByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserFollowersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserFollowerResponseDto>>;
    authControllerUserMeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserRoleUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerUserUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResponseDto>>;
    authControllerVerifyOtpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ForgetPasswordEntityResponseDto>>;
}
