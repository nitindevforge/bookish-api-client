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
exports.ObjectSerializer = void 0;
__exportStar(require("../models/Address"), exports);
__exportStar(require("../models/BillingDetails"), exports);
__exportStar(require("../models/Card"), exports);
__exportStar(require("../models/CardChecks"), exports);
__exportStar(require("../models/CardList"), exports);
__exportStar(require("../models/CardListResponseDto"), exports);
__exportStar(require("../models/CardNetwork"), exports);
__exportStar(require("../models/CardSecure"), exports);
__exportStar(require("../models/ChangePayloadDto"), exports);
__exportStar(require("../models/EventPayloadDto"), exports);
__exportStar(require("../models/EventResponseDto"), exports);
__exportStar(require("../models/Events"), exports);
__exportStar(require("../models/EventsList"), exports);
__exportStar(require("../models/EventsResponseDto"), exports);
__exportStar(require("../models/FileUploadPayloadDto"), exports);
__exportStar(require("../models/Follower"), exports);
__exportStar(require("../models/FollowerPayloadDto"), exports);
__exportStar(require("../models/FollowerResponseDto"), exports);
__exportStar(require("../models/ForgetPasswordEntityResponse"), exports);
__exportStar(require("../models/ForgetPasswordEntityResponseDto"), exports);
__exportStar(require("../models/ForgetPasswordPayloadDto"), exports);
__exportStar(require("../models/FriendsResponse"), exports);
__exportStar(require("../models/FriendsResponseDto"), exports);
__exportStar(require("../models/InterestsPayloadDto"), exports);
__exportStar(require("../models/InterestsResponseDto"), exports);
__exportStar(require("../models/LoginPayloadDto"), exports);
__exportStar(require("../models/OtpEntityPayloadDto"), exports);
__exportStar(require("../models/PasswordChangeResponse"), exports);
__exportStar(require("../models/PasswordChangeResponseDto"), exports);
__exportStar(require("../models/PermissionResponseDto"), exports);
__exportStar(require("../models/RoleResponseDto"), exports);
__exportStar(require("../models/SignupPayloadDto"), exports);
__exportStar(require("../models/StripeCardDeletePayloadDto"), exports);
__exportStar(require("../models/StripePayloadDto"), exports);
__exportStar(require("../models/StripeResponse"), exports);
__exportStar(require("../models/StripeResponseDto"), exports);
__exportStar(require("../models/UserDetails"), exports);
__exportStar(require("../models/UserResponse"), exports);
__exportStar(require("../models/UserResponseDto"), exports);
__exportStar(require("../models/UserRolePayloadDto"), exports);
__exportStar(require("../models/UserUpdatePayloadDto"), exports);
var Address_1 = require("../models/Address");
var BillingDetails_1 = require("../models/BillingDetails");
var Card_1 = require("../models/Card");
var CardChecks_1 = require("../models/CardChecks");
var CardList_1 = require("../models/CardList");
var CardListResponseDto_1 = require("../models/CardListResponseDto");
var CardNetwork_1 = require("../models/CardNetwork");
var CardSecure_1 = require("../models/CardSecure");
var ChangePayloadDto_1 = require("../models/ChangePayloadDto");
var EventPayloadDto_1 = require("../models/EventPayloadDto");
var EventResponseDto_1 = require("../models/EventResponseDto");
var Events_1 = require("../models/Events");
var EventsList_1 = require("../models/EventsList");
var EventsResponseDto_1 = require("../models/EventsResponseDto");
var FileUploadPayloadDto_1 = require("../models/FileUploadPayloadDto");
var Follower_1 = require("../models/Follower");
var FollowerPayloadDto_1 = require("../models/FollowerPayloadDto");
var FollowerResponseDto_1 = require("../models/FollowerResponseDto");
var ForgetPasswordEntityResponse_1 = require("../models/ForgetPasswordEntityResponse");
var ForgetPasswordEntityResponseDto_1 = require("../models/ForgetPasswordEntityResponseDto");
var ForgetPasswordPayloadDto_1 = require("../models/ForgetPasswordPayloadDto");
var FriendsResponse_1 = require("../models/FriendsResponse");
var FriendsResponseDto_1 = require("../models/FriendsResponseDto");
var InterestsPayloadDto_1 = require("../models/InterestsPayloadDto");
var InterestsResponseDto_1 = require("../models/InterestsResponseDto");
var LoginPayloadDto_1 = require("../models/LoginPayloadDto");
var OtpEntityPayloadDto_1 = require("../models/OtpEntityPayloadDto");
var PasswordChangeResponse_1 = require("../models/PasswordChangeResponse");
var PasswordChangeResponseDto_1 = require("../models/PasswordChangeResponseDto");
var PermissionResponseDto_1 = require("../models/PermissionResponseDto");
var RoleResponseDto_1 = require("../models/RoleResponseDto");
var SignupPayloadDto_1 = require("../models/SignupPayloadDto");
var StripeCardDeletePayloadDto_1 = require("../models/StripeCardDeletePayloadDto");
var StripePayloadDto_1 = require("../models/StripePayloadDto");
var StripeResponse_1 = require("../models/StripeResponse");
var StripeResponseDto_1 = require("../models/StripeResponseDto");
var UserDetails_1 = require("../models/UserDetails");
var UserResponse_1 = require("../models/UserResponse");
var UserResponseDto_1 = require("../models/UserResponseDto");
var UserRolePayloadDto_1 = require("../models/UserRolePayloadDto");
var UserUpdatePayloadDto_1 = require("../models/UserUpdatePayloadDto");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([]);
var typeMap = {
    "Address": Address_1.Address,
    "BillingDetails": BillingDetails_1.BillingDetails,
    "Card": Card_1.Card,
    "CardChecks": CardChecks_1.CardChecks,
    "CardList": CardList_1.CardList,
    "CardListResponseDto": CardListResponseDto_1.CardListResponseDto,
    "CardNetwork": CardNetwork_1.CardNetwork,
    "CardSecure": CardSecure_1.CardSecure,
    "ChangePayloadDto": ChangePayloadDto_1.ChangePayloadDto,
    "EventPayloadDto": EventPayloadDto_1.EventPayloadDto,
    "EventResponseDto": EventResponseDto_1.EventResponseDto,
    "Events": Events_1.Events,
    "EventsList": EventsList_1.EventsList,
    "EventsResponseDto": EventsResponseDto_1.EventsResponseDto,
    "FileUploadPayloadDto": FileUploadPayloadDto_1.FileUploadPayloadDto,
    "Follower": Follower_1.Follower,
    "FollowerPayloadDto": FollowerPayloadDto_1.FollowerPayloadDto,
    "FollowerResponseDto": FollowerResponseDto_1.FollowerResponseDto,
    "ForgetPasswordEntityResponse": ForgetPasswordEntityResponse_1.ForgetPasswordEntityResponse,
    "ForgetPasswordEntityResponseDto": ForgetPasswordEntityResponseDto_1.ForgetPasswordEntityResponseDto,
    "ForgetPasswordPayloadDto": ForgetPasswordPayloadDto_1.ForgetPasswordPayloadDto,
    "FriendsResponse": FriendsResponse_1.FriendsResponse,
    "FriendsResponseDto": FriendsResponseDto_1.FriendsResponseDto,
    "InterestsPayloadDto": InterestsPayloadDto_1.InterestsPayloadDto,
    "InterestsResponseDto": InterestsResponseDto_1.InterestsResponseDto,
    "LoginPayloadDto": LoginPayloadDto_1.LoginPayloadDto,
    "OtpEntityPayloadDto": OtpEntityPayloadDto_1.OtpEntityPayloadDto,
    "PasswordChangeResponse": PasswordChangeResponse_1.PasswordChangeResponse,
    "PasswordChangeResponseDto": PasswordChangeResponseDto_1.PasswordChangeResponseDto,
    "PermissionResponseDto": PermissionResponseDto_1.PermissionResponseDto,
    "RoleResponseDto": RoleResponseDto_1.RoleResponseDto,
    "SignupPayloadDto": SignupPayloadDto_1.SignupPayloadDto,
    "StripeCardDeletePayloadDto": StripeCardDeletePayloadDto_1.StripeCardDeletePayloadDto,
    "StripePayloadDto": StripePayloadDto_1.StripePayloadDto,
    "StripeResponse": StripeResponse_1.StripeResponse,
    "StripeResponseDto": StripeResponseDto_1.StripeResponseDto,
    "UserDetails": UserDetails_1.UserDetails,
    "UserResponse": UserResponse_1.UserResponse,
    "UserResponseDto": UserResponseDto_1.UserResponseDto,
    "UserRolePayloadDto": UserRolePayloadDto_1.UserRolePayloadDto,
    "UserUpdatePayloadDto": UserUpdatePayloadDto_1.UserUpdatePayloadDto,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map