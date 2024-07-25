"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUploadApi = exports.PromisePaymentApi = exports.PromiseFriendsApi = exports.PromiseFollowerApi = exports.PromiseEventsApi = exports.PromiseDefaultApi = exports.PromiseAuthApi = void 0;
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
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseEventsApi = (function () {
    function PromiseEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableEventsApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseFollowerApi = (function () {
    function PromiseFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFollowerApi.prototype.followerControllerFollowerSuggestionWithHttpInfo = function (_options) {
        var result = this.api.followerControllerFollowerSuggestionWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFollowerSuggestion = function (_options) {
        var result = this.api.followerControllerFollowerSuggestion(_options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFollowingWithHttpInfo = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerFollowingWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerFollowing = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerFollowing(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerUnFollowWithHttpInfo = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerUnFollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    };
    PromiseFollowerApi.prototype.followerControllerUnFollow = function (followerPayloadDto, _options) {
        var result = this.api.followerControllerUnFollow(followerPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseFollowerApi;
}());
exports.PromiseFollowerApi = PromiseFollowerApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseFriendsApi = (function () {
    function PromiseFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFriendsApi.prototype.friendControllerGetFriendsWithHttpInfo = function (search, page, limit, _options) {
        var result = this.api.friendControllerGetFriendsWithHttpInfo(search, page, limit, _options);
        return result.toPromise();
    };
    PromiseFriendsApi.prototype.friendControllerGetFriends = function (search, page, limit, _options) {
        var result = this.api.friendControllerGetFriends(search, page, limit, _options);
        return result.toPromise();
    };
    return PromiseFriendsApi;
}());
exports.PromiseFriendsApi = PromiseFriendsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromisePaymentApi = (function () {
    function PromisePaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseUploadApi = (function () {
    function PromiseUploadApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableUploadApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUploadApi.prototype.fileUploadControllerGetPreSignedURLWithHttpInfo = function (fileUploadPayloadDto, _options) {
        var result = this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(fileUploadPayloadDto, _options);
        return result.toPromise();
    };
    PromiseUploadApi.prototype.fileUploadControllerGetPreSignedURL = function (fileUploadPayloadDto, _options) {
        var result = this.api.fileUploadControllerGetPreSignedURL(fileUploadPayloadDto, _options);
        return result.toPromise();
    };
    return PromiseUploadApi;
}());
exports.PromiseUploadApi = PromiseUploadApi;
//# sourceMappingURL=PromiseAPI.js.map