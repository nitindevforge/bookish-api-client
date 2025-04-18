"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageApi = exports.PaymentApi = exports.NielsenBooksApi = exports.FriendsApi = exports.FollowerApi = exports.EventsApi = exports.DeviceApi = exports.DefaultApi = exports.BooksApi = exports.AuthApi = exports.AnalyticsApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
__exportStar(require("./models/all"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var baseapi_1 = require("./apis/baseapi");
Object.defineProperty(exports, "RequiredError", { enumerable: true, get: function () { return baseapi_1.RequiredError; } });
var PromiseAPI_1 = require("./types/PromiseAPI");
Object.defineProperty(exports, "AnalyticsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAnalyticsApi; } });
Object.defineProperty(exports, "AuthApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAuthApi; } });
Object.defineProperty(exports, "BooksApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseBooksApi; } });
Object.defineProperty(exports, "DefaultApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDefaultApi; } });
Object.defineProperty(exports, "DeviceApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDeviceApi; } });
Object.defineProperty(exports, "EventsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseEventsApi; } });
Object.defineProperty(exports, "FollowerApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseFollowerApi; } });
Object.defineProperty(exports, "FriendsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseFriendsApi; } });
Object.defineProperty(exports, "NielsenBooksApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseNielsenBooksApi; } });
Object.defineProperty(exports, "PaymentApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePaymentApi; } });
Object.defineProperty(exports, "StorageApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseStorageApi; } });
//# sourceMappingURL=index.js.map