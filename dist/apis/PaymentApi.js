"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentApiResponseProcessor = exports.PaymentApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var PaymentApiRequestFactory = (function (_super) {
    __extends(PaymentApiRequestFactory, _super);
    function PaymentApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentApiRequestFactory.prototype.paymentControllerConnectAccount = function (_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v1/payment/connect-account';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerCreateAccountVerificationLink = function (_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v1/payment/verification-link';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerCreatePayment = function (stripePaymentPayloadDto, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (stripePaymentPayloadDto === null || stripePaymentPayloadDto === undefined) {
                            throw new baseapi_1.RequiredError("PaymentApi", "paymentControllerCreatePayment", "stripePaymentPayloadDto");
                        }
                        localVarPath = '/v1/payment';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(stripePaymentPayloadDto, "StripePaymentPayloadDto", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerCreatePaymentIntent = function (stripePayloadDto, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (stripePayloadDto === null || stripePayloadDto === undefined) {
                            throw new baseapi_1.RequiredError("PaymentApi", "paymentControllerCreatePaymentIntent", "stripePayloadDto");
                        }
                        localVarPath = '/v1/payment/intent';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(stripePayloadDto, "StripePayloadDto", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerDeleteCardDetails = function (paymentPayloadDto, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (paymentPayloadDto === null || paymentPayloadDto === undefined) {
                            throw new baseapi_1.RequiredError("PaymentApi", "paymentControllerDeleteCardDetails", "paymentPayloadDto");
                        }
                        localVarPath = '/v1/payment/cards';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(paymentPayloadDto, "PaymentPayloadDto", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerGetCardList = function (_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v1/payment/cards';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PaymentApiRequestFactory.prototype.paymentControllerRetrieveConnectedAccount = function (_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v1/payment/connect-account';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = _config.authMethods["bearer"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    return PaymentApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.PaymentApiRequestFactory = PaymentApiRequestFactory;
var PaymentApiResponseProcessor = (function () {
    function PaymentApiResponseProcessor() {
    }
    PaymentApiResponseProcessor.prototype.paymentControllerConnectAccountWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "BusinessConnectedAccount", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "BusinessConnectedAccount", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerCreateAccountVerificationLinkWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "VerificationLinkResponseDTO", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "VerificationLinkResponseDTO", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerCreatePaymentWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "PaymentResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "PaymentResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerCreatePaymentIntentWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "StripeResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "StripeResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerDeleteCardDetailsWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "CardListResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "CardListResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerGetCardListWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "CardListResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "CardListResponseDto", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    PaymentApiResponseProcessor.prototype.paymentControllerRetrieveConnectedAccountWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "BusinessConnectedAccount", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "BusinessConnectedAccount", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    return PaymentApiResponseProcessor;
}());
exports.PaymentApiResponseProcessor = PaymentApiResponseProcessor;
//# sourceMappingURL=PaymentApi.js.map