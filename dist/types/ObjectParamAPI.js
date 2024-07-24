"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUploadApi = exports.ObjectPaymentApi = exports.ObjectFriendsApi = exports.ObjectFollowerApi = exports.ObjectEventsApi = exports.ObjectDefaultApi = exports.ObjectAuthApi = void 0;
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
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectEventsApi = (function () {
    function ObjectEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (param, options) {
        return this.api.eventControllerCreateEventWithHttpInfo(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerCreateEvent = function (param, options) {
        return this.api.eventControllerCreateEvent(param.eventPayloadDto, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerGetEventsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.eventControllerGetEventsWithHttpInfo(param.page, param.limit, options).toPromise();
    };
    ObjectEventsApi.prototype.eventControllerGetEvents = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.eventControllerGetEvents(param.page, param.limit, options).toPromise();
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
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectFollowerApi = (function () {
    function ObjectFollowerApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFollowerApi.prototype.followerControllerFollowingWithHttpInfo = function (param, options) {
        return this.api.followerControllerFollowingWithHttpInfo(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerFollowing = function (param, options) {
        return this.api.followerControllerFollowing(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerUnFollowWithHttpInfo = function (param, options) {
        return this.api.followerControllerUnFollowWithHttpInfo(param.followerPayloadDto, options).toPromise();
    };
    ObjectFollowerApi.prototype.followerControllerUnFollow = function (param, options) {
        return this.api.followerControllerUnFollow(param.followerPayloadDto, options).toPromise();
    };
    return ObjectFollowerApi;
}());
exports.ObjectFollowerApi = ObjectFollowerApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectFriendsApi = (function () {
    function ObjectFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFriendsApi.prototype.friendControllerGetFriendsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.friendControllerGetFriendsWithHttpInfo(param.search, param.page, param.limit, options).toPromise();
    };
    ObjectFriendsApi.prototype.friendControllerGetFriends = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.friendControllerGetFriends(param.search, param.page, param.limit, options).toPromise();
    };
    return ObjectFriendsApi;
}());
exports.ObjectFriendsApi = ObjectFriendsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectPaymentApi = (function () {
    function ObjectPaymentApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPaymentApi.prototype.stripeControllerCreatePaymentIntentWithHttpInfo = function (param, options) {
        return this.api.stripeControllerCreatePaymentIntentWithHttpInfo(param.stripePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.stripeControllerCreatePaymentIntent = function (param, options) {
        return this.api.stripeControllerCreatePaymentIntent(param.stripePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.stripeControllerDeleteCardDetailsWithHttpInfo = function (param, options) {
        return this.api.stripeControllerDeleteCardDetailsWithHttpInfo(param.stripeCardDeletePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.stripeControllerDeleteCardDetails = function (param, options) {
        return this.api.stripeControllerDeleteCardDetails(param.stripeCardDeletePayloadDto, options).toPromise();
    };
    ObjectPaymentApi.prototype.stripeControllerGetCardListWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.stripeControllerGetCardListWithHttpInfo(options).toPromise();
    };
    ObjectPaymentApi.prototype.stripeControllerGetCardList = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.stripeControllerGetCardList(options).toPromise();
    };
    return ObjectPaymentApi;
}());
exports.ObjectPaymentApi = ObjectPaymentApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectUploadApi = (function () {
    function ObjectUploadApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableUploadApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUploadApi.prototype.fileUploadControllerGetPreSignedURLWithHttpInfo = function (param, options) {
        return this.api.fileUploadControllerGetPreSignedURLWithHttpInfo(param.fileUploadPayloadDto, options).toPromise();
    };
    ObjectUploadApi.prototype.fileUploadControllerGetPreSignedURL = function (param, options) {
        return this.api.fileUploadControllerGetPreSignedURL(param.fileUploadPayloadDto, options).toPromise();
    };
    return ObjectUploadApi;
}());
exports.ObjectUploadApi = ObjectUploadApi;
//# sourceMappingURL=ObjectParamAPI.js.map