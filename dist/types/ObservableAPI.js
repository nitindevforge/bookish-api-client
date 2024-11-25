"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableStorageApi = exports.ObservablePaymentApi = exports.ObservableFriendsApi = exports.ObservableFollowerApi = exports.ObservableEventsApi = exports.ObservableDefaultApi = exports.ObservableBooksApi = exports.ObservableAuthApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AuthApi_1 = require("../apis/AuthApi");
var ObservableAuthApi = (function () {
    function ObservableAuthApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApi_1.AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApi_1.AuthApiResponseProcessor();
    }
    ObservableAuthApi.prototype.authControllerAccountDeletionWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerAccountDeletion(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerAccountDeletionWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerAccountDeletion = function (_options) {
        return this.authControllerAccountDeletionWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerChangePasswordWithHttpInfo = function (changePayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerChangePassword(changePayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerChangePasswordWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerChangePassword = function (changePayloadDto, _options) {
        return this.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerCreateUserWithHttpInfo = function (signupPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerCreateUser(signupPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerCreateUserWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerCreateUser = function (signupPayloadDto, _options) {
        return this.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerForgetPasswordWithHttpInfo = function (forgetPasswordPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerForgetPasswordWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerForgetPassword = function (forgetPasswordPayloadDto, _options) {
        return this.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerGetActivityWithHttpInfo = function (page, limit, longitude, latitude, global, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerGetActivity(page, limit, longitude, latitude, global, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerGetActivityWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerGetActivity = function (page, limit, longitude, latitude, global, _options) {
        return this.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerGetInterestsWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerGetInterests(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerGetInterestsWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerGetInterests = function (_options) {
        return this.authControllerGetInterestsWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerLoginWithHttpInfo = function (loginPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerLogin(loginPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerLoginWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerLogin = function (loginPayloadDto, _options) {
        return this.authControllerLoginWithHttpInfo(loginPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerUserByIdWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerUserById(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerUserByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerUserById = function (id, _options) {
        return this.authControllerUserByIdWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerUserFollowersWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerUserFollowers(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerUserFollowersWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerUserFollowers = function (id, _options) {
        return this.authControllerUserFollowersWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerUserMeWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerUserMe(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerUserMeWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerUserMe = function (_options) {
        return this.authControllerUserMeWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerUserRoleUpdateWithHttpInfo = function (userRolePayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerUserRoleUpdate(userRolePayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerUserRoleUpdateWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerUserRoleUpdate = function (userRolePayloadDto, _options) {
        return this.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerUserUpdateWithHttpInfo = function (userUpdatePayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerUserUpdate(userUpdatePayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerUserUpdateWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerUserUpdate = function (userUpdatePayloadDto, _options) {
        return this.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthApi.prototype.authControllerVerifyOtpWithHttpInfo = function (otpEntityPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerVerifyOtp(otpEntityPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.authControllerVerifyOtpWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerVerifyOtp = function (otpEntityPayloadDto, _options) {
        return this.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAuthApi;
}());
exports.ObservableAuthApi = ObservableAuthApi;
var BooksApi_1 = require("../apis/BooksApi");
var ObservableBooksApi = (function () {
    function ObservableBooksApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BooksApi_1.BooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BooksApi_1.BooksApiResponseProcessor();
    }
    ObservableBooksApi.prototype.bookControllerAddBookWithHttpInfo = function (bookPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerAddBook(bookPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerAddBookWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerAddBook = function (bookPayloadDto, _options) {
        return this.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindBookByIdWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindBookById(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindBookByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindBookById = function (id, _options) {
        return this.bookControllerFindBookByIdWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindBookReviewBaseWithHttpInfo = function (type, rate, page, limit, search, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindBookReviewBase(type, rate, page, limit, search, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindBookReviewBaseWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindBookReviewBase = function (type, rate, page, limit, search, _options) {
        return this.bookControllerFindBookReviewBaseWithHttpInfo(type, rate, page, limit, search, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindBooksWithHttpInfo = function (rate, page, limit, search, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindBooks(rate, page, limit, search, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindBooksWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindBooks = function (rate, page, limit, search, _options) {
        return this.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReviewWithHttpInfo = function (bookId, status, rate, review, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindUserBookReview(bookId, status, rate, review, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindUserBookReviewWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReview = function (bookId, status, rate, review, _options) {
        return this.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReviewCountWithHttpInfo = function (bookId, status, rate, review, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindUserBookReviewCountWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReviewCount = function (bookId, status, rate, review, _options) {
        return this.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReviewsWithHttpInfo = function (bookId, page, limit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerFindUserBookReviews(bookId, page, limit, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerFindUserBookReviewsWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerFindUserBookReviews = function (bookId, page, limit, _options) {
        return this.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBooksApi.prototype.bookControllerUserBookMarkWithHttpInfo = function (userBookPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bookControllerUserBookMark(userBookPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bookControllerUserBookMarkWithHttpInfo(rsp); }));
        }));
    };
    ObservableBooksApi.prototype.bookControllerUserBookMark = function (userBookPayloadDto, _options) {
        return this.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBooksApi;
}());
exports.ObservableBooksApi = ObservableBooksApi;
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    ObservableDefaultApi.prototype.appControllerGetHelloWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appControllerGetHello(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.appControllerGetHelloWithHttpInfo(rsp); }));
        }));
    };
    ObservableDefaultApi.prototype.appControllerGetHello = function (_options) {
        return this.appControllerGetHelloWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableDefaultApi;
}());
exports.ObservableDefaultApi = ObservableDefaultApi;
var EventsApi_1 = require("../apis/EventsApi");
var ObservableEventsApi = (function () {
    function ObservableEventsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApi_1.EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApi_1.EventsApiResponseProcessor();
    }
    ObservableEventsApi.prototype.eventControllerCreateEventWithHttpInfo = function (eventPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerCreateEvent(eventPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerCreateEventWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerCreateEvent = function (eventPayloadDto, _options) {
        return this.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerDeleteEventWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerDeleteEvent(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerDeleteEventWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerDeleteEvent = function (id, _options) {
        return this.eventControllerDeleteEventWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerFindEventByIdWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerFindEventById(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerFindEventByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerFindEventById = function (id, _options) {
        return this.eventControllerFindEventByIdWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerFindEventsWithHttpInfo = function (page, limit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerFindEvents(page, limit, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerFindEventsWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerFindEvents = function (page, limit, _options) {
        return this.eventControllerFindEventsWithHttpInfo(page, limit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerFindMyEventWithHttpInfo = function (eventId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerFindMyEvent(eventId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerFindMyEventWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerFindMyEvent = function (eventId, _options) {
        return this.eventControllerFindMyEventWithHttpInfo(eventId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerFindMyUpcomingEventsWithHttpInfo = function (page, limit, type, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerFindMyUpcomingEvents(page, limit, type, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerFindMyUpcomingEventsWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerFindMyUpcomingEvents = function (page, limit, type, _options) {
        return this.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerFindSearchPlacesWithHttpInfo = function (locationPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerFindSearchPlaces(locationPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerFindSearchPlacesWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerFindSearchPlaces = function (locationPayloadDto, _options) {
        return this.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEventsApi.prototype.eventControllerUpdateEventWithHttpInfo = function (eventPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.eventControllerUpdateEvent(eventPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.eventControllerUpdateEventWithHttpInfo(rsp); }));
        }));
    };
    ObservableEventsApi.prototype.eventControllerUpdateEvent = function (eventPayloadDto, _options) {
        return this.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEventsApi;
}());
exports.ObservableEventsApi = ObservableEventsApi;
var FollowerApi_1 = require("../apis/FollowerApi");
var ObservableFollowerApi = (function () {
    function ObservableFollowerApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FollowerApi_1.FollowerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FollowerApi_1.FollowerApiResponseProcessor();
    }
    ObservableFollowerApi.prototype.followerControllerFindMyFriendsWithHttpInfo = function (page, limit, search, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.followerControllerFindMyFriends(page, limit, search, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.followerControllerFindMyFriendsWithHttpInfo(rsp); }));
        }));
    };
    ObservableFollowerApi.prototype.followerControllerFindMyFriends = function (page, limit, search, _options) {
        return this.followerControllerFindMyFriendsWithHttpInfo(page, limit, search, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableFollowerApi.prototype.followerControllerFollowWithHttpInfo = function (followerPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.followerControllerFollow(followerPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.followerControllerFollowWithHttpInfo(rsp); }));
        }));
    };
    ObservableFollowerApi.prototype.followerControllerFollow = function (followerPayloadDto, _options) {
        return this.followerControllerFollowWithHttpInfo(followerPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableFollowerApi.prototype.followerControllerUnfollowWithHttpInfo = function (followerPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.followerControllerUnfollow(followerPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.followerControllerUnfollowWithHttpInfo(rsp); }));
        }));
    };
    ObservableFollowerApi.prototype.followerControllerUnfollow = function (followerPayloadDto, _options) {
        return this.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableFollowerApi;
}());
exports.ObservableFollowerApi = ObservableFollowerApi;
var FriendsApi_1 = require("../apis/FriendsApi");
var ObservableFriendsApi = (function () {
    function ObservableFriendsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FriendsApi_1.FriendsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FriendsApi_1.FriendsApiResponseProcessor();
    }
    ObservableFriendsApi.prototype.friendControllerFindFriendsWithHttpInfo = function (page, limit, search, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.friendControllerFindFriends(page, limit, search, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.friendControllerFindFriendsWithHttpInfo(rsp); }));
        }));
    };
    ObservableFriendsApi.prototype.friendControllerFindFriends = function (page, limit, search, _options) {
        return this.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableFriendsApi;
}());
exports.ObservableFriendsApi = ObservableFriendsApi;
var PaymentApi_1 = require("../apis/PaymentApi");
var ObservablePaymentApi = (function () {
    function ObservablePaymentApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentApi_1.PaymentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentApi_1.PaymentApiResponseProcessor();
    }
    ObservablePaymentApi.prototype.paymentControllerCreatePaymentWithHttpInfo = function (stripePaymentPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.paymentControllerCreatePaymentWithHttpInfo(rsp); }));
        }));
    };
    ObservablePaymentApi.prototype.paymentControllerCreatePayment = function (stripePaymentPayloadDto, _options) {
        return this.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePaymentApi.prototype.paymentControllerCreatePaymentIntentWithHttpInfo = function (stripePayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.paymentControllerCreatePaymentIntent(stripePayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.paymentControllerCreatePaymentIntentWithHttpInfo(rsp); }));
        }));
    };
    ObservablePaymentApi.prototype.paymentControllerCreatePaymentIntent = function (stripePayloadDto, _options) {
        return this.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePaymentApi.prototype.paymentControllerDeleteCardDetailsWithHttpInfo = function (paymentPayloadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.paymentControllerDeleteCardDetails(paymentPayloadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.paymentControllerDeleteCardDetailsWithHttpInfo(rsp); }));
        }));
    };
    ObservablePaymentApi.prototype.paymentControllerDeleteCardDetails = function (paymentPayloadDto, _options) {
        return this.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePaymentApi.prototype.paymentControllerGetCardListWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.paymentControllerGetCardList(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.paymentControllerGetCardListWithHttpInfo(rsp); }));
        }));
    };
    ObservablePaymentApi.prototype.paymentControllerGetCardList = function (_options) {
        return this.paymentControllerGetCardListWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePaymentApi;
}());
exports.ObservablePaymentApi = ObservablePaymentApi;
var StorageApi_1 = require("../apis/StorageApi");
var ObservableStorageApi = (function () {
    function ObservableStorageApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StorageApi_1.StorageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StorageApi_1.StorageApiResponseProcessor();
    }
    ObservableStorageApi.prototype.storageControllerGetPreSignedURLWithHttpInfo = function (fileUploadDto, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.storageControllerGetPreSignedURL(fileUploadDto, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.storageControllerGetPreSignedURLWithHttpInfo(rsp); }));
        }));
    };
    ObservableStorageApi.prototype.storageControllerGetPreSignedURL = function (fileUploadDto, _options) {
        return this.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableStorageApi;
}());
exports.ObservableStorageApi = ObservableStorageApi;
//# sourceMappingURL=ObservableAPI.js.map