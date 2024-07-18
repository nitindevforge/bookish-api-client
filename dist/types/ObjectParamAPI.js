"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUploadApi = exports.ObjectFriendsApi = exports.ObjectDefaultApi = exports.ObjectAuthApi = void 0;
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
    ObjectAuthApi.prototype.authControllerUserMeWithHttpInfo = function (param, options) {
        return this.api.authControllerUserMeWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerUserMe = function (param, options) {
        return this.api.authControllerUserMe(param.id, options).toPromise();
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
var ObjectFriendsApi = (function () {
    function ObjectFriendsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFriendsApi(configuration, requestFactory, responseProcessor);
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
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectUploadApi = (function () {
    function ObjectUploadApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableUploadApi(configuration, requestFactory, responseProcessor);
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