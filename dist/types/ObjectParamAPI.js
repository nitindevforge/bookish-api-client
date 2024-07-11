"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFriendsApi = exports.ObjectDefaultApi = exports.ObjectAuthApi = void 0;
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
        if (param === void 0) { param = {}; }
        return this.api.authControllerForgetPasswordWithHttpInfo(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerForgetPassword = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.authControllerForgetPassword(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLoginWithHttpInfo = function (param, options) {
        return this.api.authControllerLoginWithHttpInfo(param.loginPayloadDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLogin = function (param, options) {
        return this.api.authControllerLogin(param.loginPayloadDto, options).toPromise();
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
    ObjectAuthApi.prototype.authControllerVerifyOtpWithHttpInfo = function (param, options) {
        return this.api.authControllerVerifyOtpWithHttpInfo(param.otpEntityPayloadResponse, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerVerifyOtp = function (param, options) {
        return this.api.authControllerVerifyOtp(param.otpEntityPayloadResponse, options).toPromise();
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
    ObjectFriendsApi.prototype.userControllerGetSearchUserWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.userControllerGetSearchUserWithHttpInfo(param.search, param.page, param.limit, options).toPromise();
    };
    ObjectFriendsApi.prototype.userControllerGetSearchUser = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.userControllerGetSearchUser(param.search, param.page, param.limit, options).toPromise();
    };
    return ObjectFriendsApi;
}());
exports.ObjectFriendsApi = ObjectFriendsApi;
//# sourceMappingURL=ObjectParamAPI.js.map