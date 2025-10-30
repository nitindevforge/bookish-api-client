"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStorageApi = exports.ObjectPaymentApi = exports.ObjectNielsenBooksApi = exports.ObjectFriendsApi = exports.ObjectFollowerApi = exports.ObjectEventsApi = exports.ObjectDeviceApi = exports.ObjectDefaultApi = exports.ObjectBooksApi = exports.ObjectAuthApi = exports.ObjectAnalyticsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAnalyticsApi = (function () {
    function ObjectAnalyticsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAnalyticsApi.prototype.analyticsControllerGetAnalyticsWithHttpInfo = function (param, options) {
        return this.api.analyticsControllerGetAnalyticsWithHttpInfo(param.userId, options).toPromise();
    };
    ObjectAnalyticsApi.prototype.analyticsControllerGetAnalytics = function (param, options) {
        return this.api.analyticsControllerGetAnalytics(param.userId, options).toPromise();
    };
    return ObjectAnalyticsApi;
}());
exports.ObjectAnalyticsApi = ObjectAnalyticsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype.authControllerAccountDeletionWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerAccountDeletionWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerAccountDeletion = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerAccountDeletion(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerAppfeepercentageUpdateWithHttpInfo = function (param, options) {
        return this.api.authControllerAppfeepercentageUpdateWithHttpInfo(param.appfeepercentageUpdatePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerAppfeepercentageUpdate = function (param, options) {
        return this.api.authControllerAppfeepercentageUpdate(param.appfeepercentageUpdatePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerChangePasswordWithHttpInfo = function (param, options) {
        return this.api.authControllerChangePasswordWithHttpInfo(param.changePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerChangePassword = function (param, options) {
        return this.api.authControllerChangePassword(param.changePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateBusinessUserWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateBusinessUserWithHttpInfo(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateBusinessUser = function (param, options) {
        return this.api.authControllerCreateBusinessUser(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateRolesWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateRolesWithHttpInfo(param.createRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateRoles = function (param, options) {
        return this.api.authControllerCreateRoles(param.createRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateStaffWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateStaffWithHttpInfo(param.createStaffDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateStaff = function (param, options) {
        return this.api.authControllerCreateStaff(param.createStaffDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateStaffRoleWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateStaffRoleWithHttpInfo(param.createStaffRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateStaffRole = function (param, options) {
        return this.api.authControllerCreateStaffRole(param.createStaffRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateUserWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateUserWithHttpInfo(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateUser = function (param, options) {
        return this.api.authControllerCreateUser(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteRoleWithHttpInfo = function (param, options) {
        return this.api.authControllerDeleteRoleWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteRole = function (param, options) {
        return this.api.authControllerDeleteRole(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteStaffWithHttpInfo = function (param, options) {
        return this.api.authControllerDeleteStaffWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteStaff = function (param, options) {
        return this.api.authControllerDeleteStaff(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteStaffRoleWithHttpInfo = function (param, options) {
        return this.api.authControllerDeleteStaffRoleWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerDeleteStaffRole = function (param, options) {
        return this.api.authControllerDeleteStaffRole(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerForgetPasswordWithHttpInfo = function (param, options) {
        return this.api.authControllerForgetPasswordWithHttpInfo(param.forgetPasswordPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerForgetPassword = function (param, options) {
        return this.api.authControllerForgetPassword(param.forgetPasswordPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAchievementWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetAchievementWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAchievement = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetAchievement(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetActivityWithHttpInfo = function (param, options) {
        return this.api.authControllerGetActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetActivity = function (param, options) {
        return this.api.authControllerGetActivity(param.page, param.limit, param.longitude, param.latitude, param.global, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAllStaffWithHttpInfo = function (param, options) {
        return this.api.authControllerGetAllStaffWithHttpInfo(param.page, param.ownerId, param.limit, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAllStaff = function (param, options) {
        return this.api.authControllerGetAllStaff(param.page, param.ownerId, param.limit, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAllusersWithHttpInfo = function (param, options) {
        return this.api.authControllerGetAllusersWithHttpInfo(param.page, param.limit, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetAllusers = function (param, options) {
        return this.api.authControllerGetAllusers(param.page, param.limit, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetEventsActivityWithHttpInfo = function (param, options) {
        return this.api.authControllerGetEventsActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetEventsActivity = function (param, options) {
        return this.api.authControllerGetEventsActivity(param.page, param.limit, param.longitude, param.latitude, param.global, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetEventsActivityByTypeWithHttpInfo = function (param, options) {
        return this.api.authControllerGetEventsActivityByTypeWithHttpInfo(param.page, param.limit, param.type, param.userId, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetEventsActivityByType = function (param, options) {
        return this.api.authControllerGetEventsActivityByType(param.page, param.limit, param.type, param.userId, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetInterestsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetInterestsWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetInterests = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetInterests(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetPermissionWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetPermissionWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetPermission = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetPermission(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetStaffWithHttpInfo = function (param, options) {
        return this.api.authControllerGetStaffWithHttpInfo(param.email, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetStaff = function (param, options) {
        return this.api.authControllerGetStaff(param.email, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetStaffRoleWithHttpInfo = function (param, options) {
        return this.api.authControllerGetStaffRoleWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetStaffRole = function (param, options) {
        return this.api.authControllerGetStaffRole(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLoginWithHttpInfo = function (param, options) {
        return this.api.authControllerLoginWithHttpInfo(param.loginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLogin = function (param, options) {
        return this.api.authControllerLogin(param.loginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSignOutWithHttpInfo = function (param, options) {
        return this.api.authControllerSignOutWithHttpInfo(param.loggedOutPayloadDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSignOut = function (param, options) {
        return this.api.authControllerSignOut(param.loggedOutPayloadDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerStaffRolesWithHttpInfo = function (param, options) {
        return this.api.authControllerStaffRolesWithHttpInfo(param.page, param.limit, param.allRoles, param.ownerId, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerStaffRoles = function (param, options) {
        return this.api.authControllerStaffRoles(param.page, param.limit, param.allRoles, param.ownerId, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSuperAdminLoginloginWithHttpInfo = function (param, options) {
        return this.api.authControllerSuperAdminLoginloginWithHttpInfo(param.superAdminLoginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSuperAdminLoginlogin = function (param, options) {
        return this.api.authControllerSuperAdminLoginlogin(param.superAdminLoginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSyncUserInfoWithHttpInfo = function (param, options) {
        return this.api.authControllerSyncUserInfoWithHttpInfo(param.userSyncDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerSyncUserInfo = function (param, options) {
        return this.api.authControllerSyncUserInfo(param.userSyncDTO, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateWithHttpInfo = function (param, options) {
        return this.api.authControllerUpdateWithHttpInfo(param.storeDetailsPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdate = function (param, options) {
        return this.api.authControllerUpdate(param.storeDetailsPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateRolesWithHttpInfo = function (param, options) {
        return this.api.authControllerUpdateRolesWithHttpInfo(param.id, param.updateRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateRoles = function (param, options) {
        return this.api.authControllerUpdateRoles(param.id, param.updateRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateStaffWithHttpInfo = function (param, options) {
        return this.api.authControllerUpdateStaffWithHttpInfo(param.id, param.updateStaffDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateStaff = function (param, options) {
        return this.api.authControllerUpdateStaff(param.id, param.updateStaffDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateStaffRolesWithHttpInfo = function (param, options) {
        return this.api.authControllerUpdateStaffRolesWithHttpInfo(param.id, param.updateStaffRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUpdateStaffRoles = function (param, options) {
        return this.api.authControllerUpdateStaffRoles(param.id, param.updateStaffRoleDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserWithHttpInfo = function (param, options) {
        return this.api.authControllerUserWithHttpInfo(param.page, param.limit, param.allRoles, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUser = function (param, options) {
        return this.api.authControllerUser(param.page, param.limit, param.allRoles, param.search, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserByIdWithHttpInfo = function (param, options) {
        return this.api.authControllerUserByIdWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserById = function (param, options) {
        return this.api.authControllerUserById(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserFollowersWithHttpInfo = function (param, options) {
        return this.api.authControllerUserFollowersWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserFollowers = function (param, options) {
        return this.api.authControllerUserFollowers(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserMeWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerUserMeWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserMe = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerUserMe(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserRoleUpdateWithHttpInfo = function (param, options) {
        return this.api.authControllerUserRoleUpdateWithHttpInfo(param.userRolePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserRoleUpdate = function (param, options) {
        return this.api.authControllerUserRoleUpdate(param.userRolePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserUpdateWithHttpInfo = function (param, options) {
        return this.api.authControllerUserUpdateWithHttpInfo(param.userUpdatePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserUpdate = function (param, options) {
        return this.api.authControllerUserUpdate(param.userUpdatePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerVerifyOtpWithHttpInfo = function (param, options) {
        return this.api.authControllerVerifyOtpWithHttpInfo(param.otpEntityPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerVerifyOtp = function (param, options) {
        return this.api.authControllerVerifyOtp(param.otpEntityPayloadDto, options).toPromise();
    };
    return ObjectAuthApi;
}());
exports.ObjectAuthApi = ObjectAuthApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectBooksApi = (function () {
    function ObjectBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBooksApi.prototype.bookControllerAddBookWithHttpInfo = function (param, options) {
        return this.api.bookControllerAddBookWithHttpInfo(param.bookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddBook = function (param, options) {
        return this.api.bookControllerAddBook(param.bookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddMyGoodReadsBooksWithHttpInfo = function (param, options) {
        return this.api.bookControllerAddMyGoodReadsBooksWithHttpInfo(param.requestBody, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddMyGoodReadsBooks = function (param, options) {
        return this.api.bookControllerAddMyGoodReadsBooks(param.requestBody, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddReadingGoalWithHttpInfo = function (param, options) {
        return this.api.bookControllerAddReadingGoalWithHttpInfo(param.readingGoalPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddReadingGoal = function (param, options) {
        return this.api.bookControllerAddReadingGoal(param.readingGoalPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddTopBookWithHttpInfo = function (param, options) {
        return this.api.bookControllerAddTopBookWithHttpInfo(param.topBookPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddTopBook = function (param, options) {
        return this.api.bookControllerAddTopBook(param.topBookPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookByIdWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBookByIdWithHttpInfo(param.id, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookById = function (param, options) {
        return this.api.bookControllerFindBookById(param.id, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookByStatusWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBookByStatusWithHttpInfo(param.bookByStatusDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookByStatus = function (param, options) {
        return this.api.bookControllerFindBookByStatus(param.bookByStatusDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookReviewBaseWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBookReviewBaseWithHttpInfo(param.userBookStatusQueryDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookReviewBase = function (param, options) {
        return this.api.bookControllerFindBookReviewBase(param.userBookStatusQueryDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBooksWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBooksWithHttpInfo(param.rate, param.page, param.limit, param.search, param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBooks = function (param, options) {
        return this.api.bookControllerFindBooks(param.rate, param.page, param.limit, param.search, param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindGoodReadsWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindGoodReadsWithHttpInfo(param.goodReadsBookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindGoodReads = function (param, options) {
        return this.api.bookControllerFindGoodReads(param.goodReadsBookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindReadingGoalWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindReadingGoalWithHttpInfo(param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindReadingGoal = function (param, options) {
        return this.api.bookControllerFindReadingGoal(param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindTopBooksWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindTopBooksWithHttpInfo(param.rate, param.page, param.limit, param.search, param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindTopBooks = function (param, options) {
        return this.api.bookControllerFindTopBooks(param.rate, param.page, param.limit, param.search, param.user, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviewWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindUserBookReviewWithHttpInfo(param.bookId, param.status, param.rate, param.review, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReview = function (param, options) {
        return this.api.bookControllerFindUserBookReview(param.bookId, param.status, param.rate, param.review, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviewCountWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindUserBookReviewCountWithHttpInfo(param.bookId, param.status, param.rate, param.review, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviewCount = function (param, options) {
        return this.api.bookControllerFindUserBookReviewCount(param.bookId, param.status, param.rate, param.review, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviewsWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindUserBookReviewsWithHttpInfo(param.bookId, param.page, param.limit, param.userId, param.rate, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviews = function (param, options) {
        return this.api.bookControllerFindUserBookReviews(param.bookId, param.page, param.limit, param.userId, param.rate, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserWhichReadBookWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.bookControllerFindUserWhichReadBookWithHttpInfo(options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserWhichReadBook = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.bookControllerFindUserWhichReadBook(options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerRemoveTopBookWithHttpInfo = function (param, options) {
        return this.api.bookControllerRemoveTopBookWithHttpInfo(param.topBookPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerRemoveTopBook = function (param, options) {
        return this.api.bookControllerRemoveTopBook(param.topBookPayload, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerUserBookMarkWithHttpInfo = function (param, options) {
        return this.api.bookControllerUserBookMarkWithHttpInfo(param.userBookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerUserBookMark = function (param, options) {
        return this.api.bookControllerUserBookMark(param.userBookPayloadDto, options).toPromise();
    };
    return ObjectBooksApi;
}());
exports.ObjectBooksApi = ObjectBooksApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.appControllerGetHelloWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.appControllerGetHelloWithHttpInfo(options).toPromise();
    };
    ObjectDefaultApi.prototype.appControllerGetHello = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.appControllerGetHello(options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectDeviceApi = (function () {
    function ObjectDeviceApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDeviceApi.prototype.deviceControllerAddDeviceWithHttpInfo = function (param, options) {
        return this.api.deviceControllerAddDeviceWithHttpInfo(param.addDevicePayload, options).toPromise();
    };
    ObjectDeviceApi.prototype.deviceControllerAddDevice = function (param, options) {
        return this.api.deviceControllerAddDevice(param.addDevicePayload, options).toPromise();
    };
    return ObjectDeviceApi;
}());
exports.ObjectDeviceApi = ObjectDeviceApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectEventsApi = (function () {
    function ObjectEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEventsApi.prototype.eventControllerBookMarkEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerBookMarkEventWithHttpInfo(param.bookMarkEventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerBookMarkEvent = function (param, options) {
        return this.api.eventControllerBookMarkEvent(param.bookMarkEventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerBookMarkEventListWithHttpInfo = function (param, options) {
        return this.api.eventControllerBookMarkEventListWithHttpInfo(param.page, param.limit, param.userId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerBookMarkEventList = function (param, options) {
        return this.api.eventControllerBookMarkEventList(param.page, param.limit, param.userId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerCreateEventWithHttpInfo(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerCreateEvent = function (param, options) {
        return this.api.eventControllerCreateEvent(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerDeleteBookMarkEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerDeleteBookMarkEventWithHttpInfo(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerDeleteBookMarkEvent = function (param, options) {
        return this.api.eventControllerDeleteBookMarkEvent(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerDeleteEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerDeleteEventWithHttpInfo(param.id, param.withBookedEvent, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerDeleteEvent = function (param, options) {
        return this.api.eventControllerDeleteEvent(param.id, param.withBookedEvent, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindCustomerOfEventsWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindCustomerOfEventsWithHttpInfo(param.userId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindCustomerOfEvents = function (param, options) {
        return this.api.eventControllerFindCustomerOfEvents(param.userId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventByIdWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindEventByIdWithHttpInfo(param.id, param.withBookedEvent, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventById = function (param, options) {
        return this.api.eventControllerFindEventById(param.id, param.withBookedEvent, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventsWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindEventsWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.userId, param.search, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEvents = function (param, options) {
        return this.api.eventControllerFindEvents(param.page, param.limit, param.longitude, param.latitude, param.userId, param.search, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindMyEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindMyEventWithHttpInfo(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindMyEvent = function (param, options) {
        return this.api.eventControllerFindMyEvent(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindMyUpcomingEventsWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(param.page, param.limit, param.type, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindMyUpcomingEvents = function (param, options) {
        return this.api.eventControllerFindMyUpcomingEvents(param.page, param.limit, param.type, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindSearchPlacesWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindSearchPlacesWithHttpInfo(param.locationPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindSearchPlaces = function (param, options) {
        return this.api.eventControllerFindSearchPlaces(param.locationPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerGetBookMarkEventStatusWithHttpInfo = function (param, options) {
        return this.api.eventControllerGetBookMarkEventStatusWithHttpInfo(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerGetBookMarkEventStatus = function (param, options) {
        return this.api.eventControllerGetBookMarkEventStatus(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerUpdateEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerUpdateEventWithHttpInfo(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerUpdateEvent = function (param, options) {
        return this.api.eventControllerUpdateEvent(param.eventPayloadDto, options).toPromise();
    };
    return ObjectEventsApi;
}());
exports.ObjectEventsApi = ObjectEventsApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectFollowerApi = (function () {
    function ObjectFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFollowerApi.prototype.followerControllerFindMyFriendsWithHttpInfo = function (param, options) {
        return this.api.followerControllerFindMyFriendsWithHttpInfo(param.myFriendPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerFindMyFriends = function (param, options) {
        return this.api.followerControllerFindMyFriends(param.myFriendPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerFollowWithHttpInfo = function (param, options) {
        return this.api.followerControllerFollowWithHttpInfo(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerFollow = function (param, options) {
        return this.api.followerControllerFollow(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerUnfollowWithHttpInfo = function (param, options) {
        return this.api.followerControllerUnfollowWithHttpInfo(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerUnfollow = function (param, options) {
        return this.api.followerControllerUnfollow(param.followerPayloadDto, options).toPromise();
    };
    return ObjectFollowerApi;
}());
exports.ObjectFollowerApi = ObjectFollowerApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectFriendsApi = (function () {
    function ObjectFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFriendsApi.prototype.friendControllerFindFriendsWithHttpInfo = function (param, options) {
        return this.api.friendControllerFindFriendsWithHttpInfo(param.page, param.limit, param.search, options).toPromise();
    };
    ObjectFriendsApi.prototype.friendControllerFindFriends = function (param, options) {
        return this.api.friendControllerFindFriends(param.page, param.limit, param.search, options).toPromise();
    };
    return ObjectFriendsApi;
}());
exports.ObjectFriendsApi = ObjectFriendsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectNielsenBooksApi = (function () {
    function ObjectNielsenBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo = function (param, options) {
        return this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(param.id, param.body, options).toPromise();
    };
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookById = function (param, options) {
        return this.api.nielsenBooksControllerGetNielsenBookById(param.id, param.body, options).toPromise();
    };
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo = function (param, options) {
        return this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(param.id, options).toPromise();
    };
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookImageById = function (param, options) {
        return this.api.nielsenBooksControllerGetNielsenBookImageById(param.id, options).toPromise();
    };
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBooksWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo(options).toPromise();
    };
    ObjectNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBooks = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.nielsenBooksControllerGetNielsenBooks(options).toPromise();
    };
    return ObjectNielsenBooksApi;
}());
exports.ObjectNielsenBooksApi = ObjectNielsenBooksApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectPaymentApi = (function () {
    function ObjectPaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPaymentApi.prototype.paymentControllerConnectAccountWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerConnectAccountWithHttpInfo(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerConnectAccount = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerConnectAccount(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreateAccountVerificationLinkWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreateAccountVerificationLink = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerCreateAccountVerificationLink(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentWithHttpInfo = function (param, options) {
        return this.api.paymentControllerCreatePaymentWithHttpInfo(param.stripePaymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePayment = function (param, options) {
        return this.api.paymentControllerCreatePayment(param.stripePaymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentIntentWithHttpInfo = function (param, options) {
        return this.api.paymentControllerCreatePaymentIntentWithHttpInfo(param.stripePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentIntent = function (param, options) {
        return this.api.paymentControllerCreatePaymentIntent(param.stripePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerDeleteCardDetailsWithHttpInfo = function (param, options) {
        return this.api.paymentControllerDeleteCardDetailsWithHttpInfo(param.paymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerDeleteCardDetails = function (param, options) {
        return this.api.paymentControllerDeleteCardDetails(param.paymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerGetCardListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerGetCardListWithHttpInfo(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerGetCardList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerGetCardList(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerRetrieveConnectedAccountWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo(options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerRetrieveConnectedAccount = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.paymentControllerRetrieveConnectedAccount(options).toPromise();
    };
    return ObjectPaymentApi;
}());
exports.ObjectPaymentApi = ObjectPaymentApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectStorageApi = (function () {
    function ObjectStorageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectStorageApi.prototype.storageControllerGetPreSignedURLWithHttpInfo = function (param, options) {
        return this.api.storageControllerGetPreSignedURLWithHttpInfo(param.fileUploadDto, options).toPromise();
    };
    ObjectStorageApi.prototype.storageControllerGetPreSignedURL = function (param, options) {
        return this.api.storageControllerGetPreSignedURL(param.fileUploadDto, options).toPromise();
    };
    return ObjectStorageApi;
}());
exports.ObjectStorageApi = ObjectStorageApi;
//# sourceMappingURL=ObjectParamAPI.js.map