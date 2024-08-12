"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStorageApi = exports.ObjectPaymentApi = exports.ObjectFriendsApi = exports.ObjectFollowerApi = exports.ObjectEventsApi = exports.ObjectDefaultApi = exports.ObjectBooksApi = exports.ObjectAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype.authControllerChangePasswordWithHttpInfo = function (param, options) {
        return this.api.authControllerChangePasswordWithHttpInfo(param.changePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerChangePassword = function (param, options) {
        return this.api.authControllerChangePassword(param.changePayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateUserWithHttpInfo = function (param, options) {
        return this.api.authControllerCreateUserWithHttpInfo(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerCreateUser = function (param, options) {
        return this.api.authControllerCreateUser(param.signupPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerForgetPasswordWithHttpInfo = function (param, options) {
        return this.api.authControllerForgetPasswordWithHttpInfo(param.forgetPasswordPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerForgetPassword = function (param, options) {
        return this.api.authControllerForgetPassword(param.forgetPasswordPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetActivityWithHttpInfo = function (param, options) {
        return this.api.authControllerGetActivityWithHttpInfo(param.page, param.limit, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetActivity = function (param, options) {
        return this.api.authControllerGetActivity(param.page, param.limit, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetInterestsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetInterestsWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetInterests = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerGetInterests(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLoginWithHttpInfo = function (param, options) {
        return this.api.authControllerLoginWithHttpInfo(param.loginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLogin = function (param, options) {
        return this.api.authControllerLogin(param.loginPayloadDto, options).toPromise();
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
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectBooksApi = (function () {
    function ObjectBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBooksApi.prototype.bookControllerAddBookWithHttpInfo = function (param, options) {
        return this.api.bookControllerAddBookWithHttpInfo(param.bookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerAddBook = function (param, options) {
        return this.api.bookControllerAddBook(param.bookPayloadDto, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookByIdWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBookByIdWithHttpInfo(param.id, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookById = function (param, options) {
        return this.api.bookControllerFindBookById(param.id, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookReviewBaseWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBookReviewBaseWithHttpInfo(param.type, param.page, param.limit, param.search, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBookReviewBase = function (param, options) {
        return this.api.bookControllerFindBookReviewBase(param.type, param.page, param.limit, param.search, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBooksWithHttpInfo = function (param, options) {
        return this.api.bookControllerFindBooksWithHttpInfo(param.search, param.page, param.limit, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindBooks = function (param, options) {
        return this.api.bookControllerFindBooks(param.search, param.page, param.limit, options).toPromise();
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
        return this.api.bookControllerFindUserBookReviewsWithHttpInfo(param.bookId, param.page, param.limit, options).toPromise();
    };
    ObjectBooksApi.prototype.bookControllerFindUserBookReviews = function (param, options) {
        return this.api.bookControllerFindUserBookReviews(param.bookId, param.page, param.limit, options).toPromise();
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
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectEventsApi = (function () {
    function ObjectEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerCreateEventWithHttpInfo(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerCreateEvent = function (param, options) {
        return this.api.eventControllerCreateEvent(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFinMyEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerFinMyEventWithHttpInfo(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFinMyEvent = function (param, options) {
        return this.api.eventControllerFinMyEvent(param.eventId, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFinMyEventsWithHttpInfo = function (param, options) {
        return this.api.eventControllerFinMyEventsWithHttpInfo(param.page, param.limit, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFinMyEvents = function (param, options) {
        return this.api.eventControllerFinMyEvents(param.page, param.limit, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventByIdWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindEventByIdWithHttpInfo(param.id, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventById = function (param, options) {
        return this.api.eventControllerFindEventById(param.id, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEventsWithHttpInfo = function (param, options) {
        return this.api.eventControllerFindEventsWithHttpInfo(param.page, param.limit, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerFindEvents = function (param, options) {
        return this.api.eventControllerFindEvents(param.page, param.limit, options).toPromise();
    };
    return ObjectEventsApi;
}());
exports.ObjectEventsApi = ObjectEventsApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectFollowerApi = (function () {
    function ObjectFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
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
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectFriendsApi = (function () {
    function ObjectFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectPaymentApi = (function () {
    function ObjectPaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentWithHttpInfo = function (param, options) {
        return this.api.paymentControllerCreatePaymentWithHttpInfo(param.stripePaymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePayment = function (param, options) {
        return this.api.paymentControllerCreatePayment(param.stripePaymentPayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentIntentWithHttpInfo = function (param, options) {
        return this.api.paymentControllerCreatePaymentIntentWithHttpInfo(param.stripeCreatePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.paymentControllerCreatePaymentIntent = function (param, options) {
        return this.api.paymentControllerCreatePaymentIntent(param.stripeCreatePayloadDto, options).toPromise();
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
    return ObjectPaymentApi;
}());
exports.ObjectPaymentApi = ObjectPaymentApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectStorageApi = (function () {
    function ObjectStorageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectStorageApi.prototype.fileUploadControllerGetPreSignedURLWithHttpInfo = function (param, options) {
        return this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(param.fileUploadPayloadDto, options).toPromise();
    };
    ObjectStorageApi.prototype.fileUploadControllerGetPreSignedURL = function (param, options) {
        return this.api.fileUploadControllerGetPreSignedURL(param.fileUploadPayloadDto, options).toPromise();
    };
    return ObjectStorageApi;
}());
exports.ObjectStorageApi = ObjectStorageApi;
//# sourceMappingURL=ObjectParamAPI.js.map