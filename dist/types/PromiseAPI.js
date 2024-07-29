"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseStorageApi = exports.PromisePaymentApi = exports.PromiseFriendsApi = exports.PromiseFollowerApi = exports.PromiseEventsApi = exports.PromiseDefaultApi = exports.PromiseBooksApi = exports.PromiseAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype.authControllerChangePasswordWithHttpInfo = function (changePayloadDto, _options) {
        var result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerChangePassword = function (changePayloadDto, _options) {
        var result = this.api.authControllerChangePassword(changePayloadDto, _options);
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
    PromiseAuthApi.prototype.authControllerForgetPasswordWithHttpInfo = function (forgetPasswordPayloadDto, _options) {
        var result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerForgetPassword = function (forgetPasswordPayloadDto, _options) {
        var result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetActivityWithHttpInfo = function (page, limit, _options) {
        var result = this.api.authControllerGetActivityWithHttpInfo(page, limit, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetActivity = function (page, limit, _options) {
        var result = this.api.authControllerGetActivity(page, limit, _options);
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
    PromiseAuthApi.prototype.authControllerLoginWithHttpInfo = function (loginPayloadDto, _options) {
        var result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, _options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLogin = function (loginPayloadDto, _options) {
        var result = this.api.authControllerLogin(loginPayloadDto, _options);
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
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseBooksApi = (function () {
    function PromiseBooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBooksApi.prototype.bookControllerAddBookWithHttpInfo = function (bookPayloadDto, _options) {
        var result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerAddBook = function (bookPayloadDto, _options) {
        var result = this.api.bookControllerAddBook(bookPayloadDto, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBooksWithHttpInfo = function (search, page, limit, _options) {
        var result = this.api.bookControllerFindBooksWithHttpInfo(search, page, limit, _options);
        return result.toPromise();
    };
    PromiseBooksApi.prototype.bookControllerFindBooks = function (search, page, limit, _options) {
        var result = this.api.bookControllerFindBooks(search, page, limit, _options);
        return result.toPromise();
    };
    return PromiseBooksApi;
}());
exports.PromiseBooksApi = PromiseBooksApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseEventsApi = (function () {
    function PromiseEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerCreateEvent = function (eventPayloadDto, _options) {
        var result = this.api.eventControllerCreateEvent(eventPayloadDto, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerGetEventsWithHttpInfo = function (page, limit, _options) {
        var result = this.api.eventControllerGetEventsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    };
    PromiseEventsApi.prototype.eventControllerGetEvents = function (page, limit, _options) {
        var result = this.api.eventControllerGetEvents(page, limit, _options);
        return result.toPromise();
    };
    return PromiseEventsApi;
}());
exports.PromiseEventsApi = PromiseEventsApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseFollowerApi = (function () {
    function PromiseFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
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
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseFriendsApi = (function () {
    function PromiseFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_7 = require("./ObservableAPI");
var PromisePaymentApi = (function () {
    function PromisePaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }
    PromisePaymentApi.prototype.stripeControllerCreatePaymentIntentWithHttpInfo = function (stripePayloadDto, _options) {
        var result = this.api.stripeControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.stripeControllerCreatePaymentIntent = function (stripePayloadDto, _options) {
        var result = this.api.stripeControllerCreatePaymentIntent(stripePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.stripeControllerDeleteCardDetailsWithHttpInfo = function (stripeCardDeletePayloadDto, _options) {
        var result = this.api.stripeControllerDeleteCardDetailsWithHttpInfo(stripeCardDeletePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.stripeControllerDeleteCardDetails = function (stripeCardDeletePayloadDto, _options) {
        var result = this.api.stripeControllerDeleteCardDetails(stripeCardDeletePayloadDto, _options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.stripeControllerGetCardListWithHttpInfo = function (_options) {
        var result = this.api.stripeControllerGetCardListWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePaymentApi.prototype.stripeControllerGetCardList = function (_options) {
        var result = this.api.stripeControllerGetCardList(_options);
        return result.toPromise();
    };
    return PromisePaymentApi;
}());
exports.PromisePaymentApi = PromisePaymentApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseStorageApi = (function () {
    function PromiseStorageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }
    PromiseStorageApi.prototype.fileUploadControllerGetPreSignedURLWithHttpInfo = function (fileUploadPayloadDto, _options) {
        var result = this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto, _options);
        return result.toPromise();
    };
    PromiseStorageApi.prototype.fileUploadControllerGetPreSignedURL = function (fileUploadPayloadDto, _options) {
        var result = this.api.fileUploadControllerGetPreSignedURL(fileUploadPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseStorageApi;
}());
exports.PromiseStorageApi = PromiseStorageApi;
//# sourceMappingURL=PromiseAPI.js.map