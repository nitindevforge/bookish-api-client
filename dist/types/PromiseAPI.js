"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseStorageApi = exports.PromisePaymentApi = exports.PromiseNielsenBooksApi = exports.PromiseFriendsApi = exports.PromiseFollowerApi = exports.PromiseEventsApi = exports.PromiseDefaultApi = exports.PromiseBooksApi = exports.PromiseAuthApi = exports.PromiseAnalyticsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAnalyticsApi = (function () {
    function PromiseAnalyticsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAnalyticsApi.prototype.analyticsControllerGetAnalyticsWithHttpInfo = function (_options) {
        var result = this.api.analyticsControllerGetAnalyticsWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAnalyticsApi.prototype.analyticsControllerGetAnalytics = function (_options) {
        var result = this.api.analyticsControllerGetAnalytics(_options);
        return result.toPromise();
    };
    return PromiseAnalyticsApi;
}());
exports.PromiseAnalyticsApi = PromiseAnalyticsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype.authControllerAccountDeletionWithHttpInfo = function (_options) {
        var result = this.api.authControllerAccountDeletionWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerAccountDeletion = function (_options) {
        var result = this.api.authControllerAccountDeletion(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerChangePasswordWithHttpInfo = function (changePayloadDto, _options) {
        var result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerChangePassword = function (changePayloadDto, _options) {
        var result = this.api.authControllerChangePassword(changePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateBusinessUserWithHttpInfo = function (signupPayloadDto, _options) {
        var result = this.api.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateBusinessUser = function (signupPayloadDto, _options) {
        var result = this.api.authControllerCreateBusinessUser(signupPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateRolesWithHttpInfo = function (createRoleDto, _options) {
        var result = this.api.authControllerCreateRolesWithHttpInfo(createRoleDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateRoles = function (createRoleDto, _options) {
        var result = this.api.authControllerCreateRoles(createRoleDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateStaffWithHttpInfo = function (createStaffDto, _options) {
        var result = this.api.authControllerCreateStaffWithHttpInfo(createStaffDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateStaff = function (createStaffDto, _options) {
        var result = this.api.authControllerCreateStaff(createStaffDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateUserWithHttpInfo = function (signupPayloadDto, _options) {
        var result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerCreateUser = function (signupPayloadDto, _options) {
        var result = this.api.authControllerCreateUser(signupPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerDeleteRoleWithHttpInfo = function (id, _options) {
        var result = this.api.authControllerDeleteRoleWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerDeleteRole = function (id, _options) {
        var result = this.api.authControllerDeleteRole(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerDeleteStaffWithHttpInfo = function (id, _options) {
        var result = this.api.authControllerDeleteStaffWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerDeleteStaff = function (id, _options) {
        var result = this.api.authControllerDeleteStaff(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerForgetPasswordWithHttpInfo = function (forgetPasswordPayloadDto, _options) {
        var result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerForgetPassword = function (forgetPasswordPayloadDto, _options) {
        var result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetActivityWithHttpInfo = function (page, limit, longitude, latitude, global, _options) {
        var result = this.api.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetActivity = function (page, limit, longitude, latitude, global, _options) {
        var result = this.api.authControllerGetActivity(page, limit, longitude, latitude, global, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetAllStaffWithHttpInfo = function (page, limit, search, _options) {
        var result = this.api.authControllerGetAllStaffWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetAllStaff = function (page, limit, search, _options) {
        var result = this.api.authControllerGetAllStaff(page, limit, search, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetEventsActivityWithHttpInfo = function (page, limit, longitude, latitude, global, _options) {
        var result = this.api.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetEventsActivity = function (page, limit, longitude, latitude, global, _options) {
        var result = this.api.authControllerGetEventsActivity(page, limit, longitude, latitude, global, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetInterestsWithHttpInfo = function (_options) {
        var result = this.api.authControllerGetInterestsWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetInterests = function (_options) {
        var result = this.api.authControllerGetInterests(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetPermissionWithHttpInfo = function (_options) {
        var result = this.api.authControllerGetPermissionWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetPermission = function (_options) {
        var result = this.api.authControllerGetPermission(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLoginWithHttpInfo = function (loginPayloadDto, _options) {
        var result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLogin = function (loginPayloadDto, _options) {
        var result = this.api.authControllerLogin(loginPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdateWithHttpInfo = function (storeDetailsPayloadDto, _options) {
        var result = this.api.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdate = function (storeDetailsPayloadDto, _options) {
        var result = this.api.authControllerUpdate(storeDetailsPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdateRolesWithHttpInfo = function (id, updateRoleDto, _options) {
        var result = this.api.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdateRoles = function (id, updateRoleDto, _options) {
        var result = this.api.authControllerUpdateRoles(id, updateRoleDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdateStaffWithHttpInfo = function (id, updateStaffDto, _options) {
        var result = this.api.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUpdateStaff = function (id, updateStaffDto, _options) {
        var result = this.api.authControllerUpdateStaff(id, updateStaffDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserWithHttpInfo = function (page, limit, allRoles, search, _options) {
        var result = this.api.authControllerUserWithHttpInfo(page, limit, allRoles, search, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUser = function (page, limit, allRoles, search, _options) {
        var result = this.api.authControllerUser(page, limit, allRoles, search, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserByIdWithHttpInfo = function (id, _options) {
        var result = this.api.authControllerUserByIdWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserById = function (id, _options) {
        var result = this.api.authControllerUserById(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserFollowersWithHttpInfo = function (id, _options) {
        var result = this.api.authControllerUserFollowersWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserFollowers = function (id, _options) {
        var result = this.api.authControllerUserFollowers(id, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserMeWithHttpInfo = function (_options) {
        var result = this.api.authControllerUserMeWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserMe = function (_options) {
        var result = this.api.authControllerUserMe(_options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserRoleUpdateWithHttpInfo = function (userRolePayloadDto, _options) {
        var result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserRoleUpdate = function (userRolePayloadDto, _options) {
        var result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserUpdateWithHttpInfo = function (userUpdatePayloadDto, _options) {
        var result = this.api.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerUserUpdate = function (userUpdatePayloadDto, _options) {
        var result = this.api.authControllerUserUpdate(userUpdatePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerVerifyOtpWithHttpInfo = function (otpEntityPayloadDto, _options) {
        var result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerVerifyOtp = function (otpEntityPayloadDto, _options) {
        var result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseAuthApi;
}());
exports.PromiseAuthApi = PromiseAuthApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseBooksApi = (function () {
    function PromiseBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBooksApi.prototype.bookControllerAddBookWithHttpInfo = function (bookPayloadDto, _options) {
        var result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerAddBook = function (bookPayloadDto, _options) {
        var result = this.api.bookControllerAddBook(bookPayloadDto, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBookByIdWithHttpInfo = function (id, _options) {
        var result = this.api.bookControllerFindBookByIdWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBookById = function (id, _options) {
        var result = this.api.bookControllerFindBookById(id, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBookReviewBaseWithHttpInfo = function (type, rate, page, limit, search, _options) {
        var result = this.api.bookControllerFindBookReviewBaseWithHttpInfo(type, rate, page, limit, search, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBookReviewBase = function (type, rate, page, limit, search, _options) {
        var result = this.api.bookControllerFindBookReviewBase(type, rate, page, limit, search, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBooksWithHttpInfo = function (rate, page, limit, search, _options) {
        var result = this.api.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBooks = function (rate, page, limit, search, _options) {
        var result = this.api.bookControllerFindBooks(rate, page, limit, search, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReviewWithHttpInfo = function (bookId, status, rate, review, _options) {
        var result = this.api.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReview = function (bookId, status, rate, review, _options) {
        var result = this.api.bookControllerFindUserBookReview(bookId, status, rate, review, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReviewCountWithHttpInfo = function (bookId, status, rate, review, _options) {
        var result = this.api.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReviewCount = function (bookId, status, rate, review, _options) {
        var result = this.api.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReviewsWithHttpInfo = function (bookId, page, limit, rate, _options) {
        var result = this.api.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, rate, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserBookReviews = function (bookId, page, limit, rate, _options) {
        var result = this.api.bookControllerFindUserBookReviews(bookId, page, limit, rate, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserWhichReadBookWithHttpInfo = function (_options) {
        var result = this.api.bookControllerFindUserWhichReadBookWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindUserWhichReadBook = function (_options) {
        var result = this.api.bookControllerFindUserWhichReadBook(_options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerUserBookMarkWithHttpInfo = function (userBookPayloadDto, _options) {
        var result = this.api.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerUserBookMark = function (userBookPayloadDto, _options) {
        var result = this.api.bookControllerUserBookMark(userBookPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseBooksApi;
}());
exports.PromiseBooksApi = PromiseBooksApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.appControllerGetHelloWithHttpInfo = function (_options) {
        var result = this.api.appControllerGetHelloWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.appControllerGetHello = function (_options) {
        var result = this.api.appControllerGetHello(_options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseEventsApi = (function () {
    function PromiseEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerCreateEvent = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerCreateEvent(eventPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerDeleteEventWithHttpInfo = function (id, withBookedEvent, _options) {
        var result = this.api.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerDeleteEvent = function (id, withBookedEvent, _options) {
        var result = this.api.eventControllerDeleteEvent(id, withBookedEvent, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindCustomerOfEventsWithHttpInfo = function (_options) {
        var result = this.api.eventControllerFindCustomerOfEventsWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindCustomerOfEvents = function (_options) {
        var result = this.api.eventControllerFindCustomerOfEvents(_options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindEventByIdWithHttpInfo = function (id, withBookedEvent, _options) {
        var result = this.api.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindEventById = function (id, withBookedEvent, _options) {
        var result = this.api.eventControllerFindEventById(id, withBookedEvent, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindEventsWithHttpInfo = function (page, limit, _options) {
        var result = this.api.eventControllerFindEventsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindEvents = function (page, limit, _options) {
        var result = this.api.eventControllerFindEvents(page, limit, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindMyEventWithHttpInfo = function (eventId, _options) {
        var result = this.api.eventControllerFindMyEventWithHttpInfo(eventId, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindMyEvent = function (eventId, _options) {
        var result = this.api.eventControllerFindMyEvent(eventId, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindMyUpcomingEventsWithHttpInfo = function (page, limit, type, _options) {
        var result = this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindMyUpcomingEvents = function (page, limit, type, _options) {
        var result = this.api.eventControllerFindMyUpcomingEvents(page, limit, type, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindSearchPlacesWithHttpInfo = function (locationPayloadDto, _options) {
        var result = this.api.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerFindSearchPlaces = function (locationPayloadDto, _options) {
        var result = this.api.eventControllerFindSearchPlaces(locationPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerUpdateEventWithHttpInfo = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerUpdateEvent = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerUpdateEvent(eventPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseEventsApi;
}());
exports.PromiseEventsApi = PromiseEventsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseFollowerApi = (function () {
    function PromiseFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFollowerApi.prototype.followerControllerFindMyFriendsWithHttpInfo = function (page, limit, search, _options) {
        var result = this.api.followerControllerFindMyFriendsWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFindMyFriends = function (page, limit, search, _options) {
        var result = this.api.followerControllerFindMyFriends(page, limit, search, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFollowWithHttpInfo = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerFollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFollow = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerFollow(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerUnfollowWithHttpInfo = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerUnfollow = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerUnfollow(followerPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseFollowerApi;
}());
exports.PromiseFollowerApi = PromiseFollowerApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseFriendsApi = (function () {
    function PromiseFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFriendsApi.prototype.friendControllerFindFriendsWithHttpInfo = function (page, limit, search, _options) {
        var result = this.api.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    };
    PromiseFriendsApi.prototype.friendControllerFindFriends = function (page, limit, search, _options) {
        var result = this.api.friendControllerFindFriends(page, limit, search, _options);
        return result.toPromise();
    };
    return PromiseFriendsApi;
}());
exports.PromiseFriendsApi = PromiseFriendsApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseNielsenBooksApi = (function () {
    function PromiseNielsenBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo = function (id, body, _options) {
        var result = this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, _options);
        return result.toPromise();
    };
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookById = function (id, body, _options) {
        var result = this.api.nielsenBooksControllerGetNielsenBookById(id, body, _options);
        return result.toPromise();
    };
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo = function (id, _options) {
        var result = this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBookImageById = function (id, _options) {
        var result = this.api.nielsenBooksControllerGetNielsenBookImageById(id, _options);
        return result.toPromise();
    };
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBooksWithHttpInfo = function (_options) {
        var result = this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseNielsenBooksApi.prototype.nielsenBooksControllerGetNielsenBooks = function (_options) {
        var result = this.api.nielsenBooksControllerGetNielsenBooks(_options);
        return result.toPromise();
    };
    return PromiseNielsenBooksApi;
}());
exports.PromiseNielsenBooksApi = PromiseNielsenBooksApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromisePaymentApi = (function () {
    function PromisePaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }
    PromisePaymentApi.prototype.paymentControllerConnectAccountWithHttpInfo = function (_options) {
        var result = this.api.paymentControllerConnectAccountWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerConnectAccount = function (_options) {
        var result = this.api.paymentControllerConnectAccount(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreateAccountVerificationLinkWithHttpInfo = function (_options) {
        var result = this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreateAccountVerificationLink = function (_options) {
        var result = this.api.paymentControllerCreateAccountVerificationLink(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreatePaymentWithHttpInfo = function (stripePaymentPayloadDto, _options) {
        var result = this.api.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreatePayment = function (stripePaymentPayloadDto, _options) {
        var result = this.api.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreatePaymentIntentWithHttpInfo = function (stripePayloadDto, _options) {
        var result = this.api.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerCreatePaymentIntent = function (stripePayloadDto, _options) {
        var result = this.api.paymentControllerCreatePaymentIntent(stripePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerDeleteCardDetailsWithHttpInfo = function (paymentPayloadDto, _options) {
        var result = this.api.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerDeleteCardDetails = function (paymentPayloadDto, _options) {
        var result = this.api.paymentControllerDeleteCardDetails(paymentPayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerGetCardListWithHttpInfo = function (_options) {
        var result = this.api.paymentControllerGetCardListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerGetCardList = function (_options) {
        var result = this.api.paymentControllerGetCardList(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerRetrieveConnectedAccountWithHttpInfo = function (_options) {
        var result = this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.paymentControllerRetrieveConnectedAccount = function (_options) {
        var result = this.api.paymentControllerRetrieveConnectedAccount(_options);
        return result.toPromise();
    };
    return PromisePaymentApi;
}());
exports.PromisePaymentApi = PromisePaymentApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseStorageApi = (function () {
    function PromiseStorageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }
    PromiseStorageApi.prototype.storageControllerGetPreSignedURLWithHttpInfo = function (fileUploadDto, _options) {
        var result = this.api.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options);
        return result.toPromise();
    };
    PromiseStorageApi.prototype.storageControllerGetPreSignedURL = function (fileUploadDto, _options) {
        var result = this.api.storageControllerGetPreSignedURL(fileUploadDto, _options);
        return result.toPromise();
    };
    return PromiseStorageApi;
}());
exports.PromiseStorageApi = PromiseStorageApi;
//# sourceMappingURL=PromiseAPI.js.map