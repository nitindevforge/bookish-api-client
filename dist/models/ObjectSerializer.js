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
__exportStar(require("../models/Activity"), exports);
__exportStar(require("../models/ActivityResponse"), exports);
__exportStar(require("../models/ActivityResponseDto"), exports);
__exportStar(require("../models/Address"), exports);
__exportStar(require("../models/AnalyticsResponseDTO"), exports);
__exportStar(require("../models/AttendeeDTO"), exports);
__exportStar(require("../models/AuthorResponseDto"), exports);
__exportStar(require("../models/BillingDetails"), exports);
__exportStar(require("../models/Book"), exports);
__exportStar(require("../models/BookMarkEventDTO"), exports);
__exportStar(require("../models/BookMarkEventListResponseDto"), exports);
__exportStar(require("../models/BookMarkEventPayloadDto"), exports);
__exportStar(require("../models/BookMarkEventStatusResponseDto"), exports);
__exportStar(require("../models/BookMarkEventsListPayloadDto"), exports);
__exportStar(require("../models/BookPayloadDto"), exports);
__exportStar(require("../models/BookResponseDto"), exports);
__exportStar(require("../models/BookReviewCountResponseDto"), exports);
__exportStar(require("../models/Books"), exports);
__exportStar(require("../models/BooksResponseDto"), exports);
__exportStar(require("../models/BooksReviewResponseDto"), exports);
__exportStar(require("../models/BusinessConnectedAccount"), exports);
__exportStar(require("../models/Card"), exports);
__exportStar(require("../models/CardChecks"), exports);
__exportStar(require("../models/CardList"), exports);
__exportStar(require("../models/CardListResponseDto"), exports);
__exportStar(require("../models/CardNetwork"), exports);
__exportStar(require("../models/CardSecure"), exports);
__exportStar(require("../models/ChangePayloadDto"), exports);
__exportStar(require("../models/CreateBookMarkEventResponseDto"), exports);
__exportStar(require("../models/CreateRoleDto"), exports);
__exportStar(require("../models/CreateStaffDto"), exports);
__exportStar(require("../models/DeleteBookMarkEventResponseDto"), exports);
__exportStar(require("../models/EventDTO"), exports);
__exportStar(require("../models/EventDeleteResponseDto"), exports);
__exportStar(require("../models/EventPayloadDto"), exports);
__exportStar(require("../models/EventResponseDto"), exports);
__exportStar(require("../models/Events"), exports);
__exportStar(require("../models/EventsList"), exports);
__exportStar(require("../models/EventsResponseDto"), exports);
__exportStar(require("../models/FileUploadDto"), exports);
__exportStar(require("../models/FileUrl"), exports);
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
__exportStar(require("../models/Location"), exports);
__exportStar(require("../models/LocationPayloadDto"), exports);
__exportStar(require("../models/LocationPlacesResponseDto"), exports);
__exportStar(require("../models/LoginPayloadDto"), exports);
__exportStar(require("../models/MetaResponse"), exports);
__exportStar(require("../models/MyAllFriendsResponseDto"), exports);
__exportStar(require("../models/MyEventResponseDto"), exports);
__exportStar(require("../models/MyEvents"), exports);
__exportStar(require("../models/MyEventsResponse"), exports);
__exportStar(require("../models/MyEventsResponseDto"), exports);
__exportStar(require("../models/MyFriendsResponse"), exports);
__exportStar(require("../models/OtpEntityPayloadDto"), exports);
__exportStar(require("../models/PasswordChangeResponse"), exports);
__exportStar(require("../models/PasswordChangeResponseDto"), exports);
__exportStar(require("../models/PaymentPayloadDto"), exports);
__exportStar(require("../models/PaymentResponse"), exports);
__exportStar(require("../models/PaymentResponseDto"), exports);
__exportStar(require("../models/PermissionResponseDto"), exports);
__exportStar(require("../models/Places"), exports);
__exportStar(require("../models/Rating"), exports);
__exportStar(require("../models/Review"), exports);
__exportStar(require("../models/RoleResponseDto"), exports);
__exportStar(require("../models/SignupPayloadDto"), exports);
__exportStar(require("../models/StorageResponseDto"), exports);
__exportStar(require("../models/StoreDetailsPayloadDto"), exports);
__exportStar(require("../models/StripePayloadDto"), exports);
__exportStar(require("../models/StripePaymentPayloadDto"), exports);
__exportStar(require("../models/StripeResponse"), exports);
__exportStar(require("../models/StripeResponseDto"), exports);
__exportStar(require("../models/UpdateRoleDto"), exports);
__exportStar(require("../models/UpdateStaffDto"), exports);
__exportStar(require("../models/UserBookPayloadDto"), exports);
__exportStar(require("../models/UserBookReviewResponseDto"), exports);
__exportStar(require("../models/UserBooks"), exports);
__exportStar(require("../models/UserBooksResponse"), exports);
__exportStar(require("../models/UserBooksResponseDto"), exports);
__exportStar(require("../models/UserDeleteResponseDto"), exports);
__exportStar(require("../models/UserDetails"), exports);
__exportStar(require("../models/UserFollowerResponseDto"), exports);
__exportStar(require("../models/UserFollowers"), exports);
__exportStar(require("../models/UserResponse"), exports);
__exportStar(require("../models/UserResponseDto"), exports);
__exportStar(require("../models/UserRolePayloadDto"), exports);
__exportStar(require("../models/UserUpdatePayloadDto"), exports);
__exportStar(require("../models/VerificationLinkResponseDTO"), exports);
var Activity_1 = require("../models/Activity");
var ActivityResponse_1 = require("../models/ActivityResponse");
var ActivityResponseDto_1 = require("../models/ActivityResponseDto");
var Address_1 = require("../models/Address");
var AnalyticsResponseDTO_1 = require("../models/AnalyticsResponseDTO");
var AttendeeDTO_1 = require("../models/AttendeeDTO");
var AuthorResponseDto_1 = require("../models/AuthorResponseDto");
var BillingDetails_1 = require("../models/BillingDetails");
var Book_1 = require("../models/Book");
var BookMarkEventDTO_1 = require("../models/BookMarkEventDTO");
var BookMarkEventListResponseDto_1 = require("../models/BookMarkEventListResponseDto");
var BookMarkEventPayloadDto_1 = require("../models/BookMarkEventPayloadDto");
var BookMarkEventStatusResponseDto_1 = require("../models/BookMarkEventStatusResponseDto");
var BookMarkEventsListPayloadDto_1 = require("../models/BookMarkEventsListPayloadDto");
var BookPayloadDto_1 = require("../models/BookPayloadDto");
var BookResponseDto_1 = require("../models/BookResponseDto");
var BookReviewCountResponseDto_1 = require("../models/BookReviewCountResponseDto");
var Books_1 = require("../models/Books");
var BooksResponseDto_1 = require("../models/BooksResponseDto");
var BooksReviewResponseDto_1 = require("../models/BooksReviewResponseDto");
var BusinessConnectedAccount_1 = require("../models/BusinessConnectedAccount");
var Card_1 = require("../models/Card");
var CardChecks_1 = require("../models/CardChecks");
var CardList_1 = require("../models/CardList");
var CardListResponseDto_1 = require("../models/CardListResponseDto");
var CardNetwork_1 = require("../models/CardNetwork");
var CardSecure_1 = require("../models/CardSecure");
var ChangePayloadDto_1 = require("../models/ChangePayloadDto");
var CreateBookMarkEventResponseDto_1 = require("../models/CreateBookMarkEventResponseDto");
var CreateRoleDto_1 = require("../models/CreateRoleDto");
var CreateStaffDto_1 = require("../models/CreateStaffDto");
var DeleteBookMarkEventResponseDto_1 = require("../models/DeleteBookMarkEventResponseDto");
var EventDTO_1 = require("../models/EventDTO");
var EventDeleteResponseDto_1 = require("../models/EventDeleteResponseDto");
var EventPayloadDto_1 = require("../models/EventPayloadDto");
var EventResponseDto_1 = require("../models/EventResponseDto");
var Events_1 = require("../models/Events");
var EventsList_1 = require("../models/EventsList");
var EventsResponseDto_1 = require("../models/EventsResponseDto");
var FileUploadDto_1 = require("../models/FileUploadDto");
var FileUrl_1 = require("../models/FileUrl");
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
var Location_1 = require("../models/Location");
var LocationPayloadDto_1 = require("../models/LocationPayloadDto");
var LocationPlacesResponseDto_1 = require("../models/LocationPlacesResponseDto");
var LoginPayloadDto_1 = require("../models/LoginPayloadDto");
var MetaResponse_1 = require("../models/MetaResponse");
var MyAllFriendsResponseDto_1 = require("../models/MyAllFriendsResponseDto");
var MyEventResponseDto_1 = require("../models/MyEventResponseDto");
var MyEvents_1 = require("../models/MyEvents");
var MyEventsResponse_1 = require("../models/MyEventsResponse");
var MyEventsResponseDto_1 = require("../models/MyEventsResponseDto");
var MyFriendsResponse_1 = require("../models/MyFriendsResponse");
var OtpEntityPayloadDto_1 = require("../models/OtpEntityPayloadDto");
var PasswordChangeResponse_1 = require("../models/PasswordChangeResponse");
var PasswordChangeResponseDto_1 = require("../models/PasswordChangeResponseDto");
var PaymentPayloadDto_1 = require("../models/PaymentPayloadDto");
var PaymentResponse_1 = require("../models/PaymentResponse");
var PaymentResponseDto_1 = require("../models/PaymentResponseDto");
var PermissionResponseDto_1 = require("../models/PermissionResponseDto");
var Places_1 = require("../models/Places");
var Rating_1 = require("../models/Rating");
var Review_1 = require("../models/Review");
var RoleResponseDto_1 = require("../models/RoleResponseDto");
var SignupPayloadDto_1 = require("../models/SignupPayloadDto");
var StorageResponseDto_1 = require("../models/StorageResponseDto");
var StoreDetailsPayloadDto_1 = require("../models/StoreDetailsPayloadDto");
var StripePayloadDto_1 = require("../models/StripePayloadDto");
var StripePaymentPayloadDto_1 = require("../models/StripePaymentPayloadDto");
var StripeResponse_1 = require("../models/StripeResponse");
var StripeResponseDto_1 = require("../models/StripeResponseDto");
var UpdateRoleDto_1 = require("../models/UpdateRoleDto");
var UpdateStaffDto_1 = require("../models/UpdateStaffDto");
var UserBookPayloadDto_1 = require("../models/UserBookPayloadDto");
var UserBookReviewResponseDto_1 = require("../models/UserBookReviewResponseDto");
var UserBooks_1 = require("../models/UserBooks");
var UserBooksResponse_1 = require("../models/UserBooksResponse");
var UserBooksResponseDto_1 = require("../models/UserBooksResponseDto");
var UserDeleteResponseDto_1 = require("../models/UserDeleteResponseDto");
var UserDetails_1 = require("../models/UserDetails");
var UserFollowerResponseDto_1 = require("../models/UserFollowerResponseDto");
var UserFollowers_1 = require("../models/UserFollowers");
var UserResponse_1 = require("../models/UserResponse");
var UserResponseDto_1 = require("../models/UserResponseDto");
var UserRolePayloadDto_1 = require("../models/UserRolePayloadDto");
var UserUpdatePayloadDto_1 = require("../models/UserUpdatePayloadDto");
var VerificationLinkResponseDTO_1 = require("../models/VerificationLinkResponseDTO");
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
var enumsMap = new Set([
    "BusinessConnectedAccountStatusEnum",
]);
var typeMap = {
    "Activity": Activity_1.Activity,
    "ActivityResponse": ActivityResponse_1.ActivityResponse,
    "ActivityResponseDto": ActivityResponseDto_1.ActivityResponseDto,
    "Address": Address_1.Address,
    "AnalyticsResponseDTO": AnalyticsResponseDTO_1.AnalyticsResponseDTO,
    "AttendeeDTO": AttendeeDTO_1.AttendeeDTO,
    "AuthorResponseDto": AuthorResponseDto_1.AuthorResponseDto,
    "BillingDetails": BillingDetails_1.BillingDetails,
    "Book": Book_1.Book,
    "BookMarkEventDTO": BookMarkEventDTO_1.BookMarkEventDTO,
    "BookMarkEventListResponseDto": BookMarkEventListResponseDto_1.BookMarkEventListResponseDto,
    "BookMarkEventPayloadDto": BookMarkEventPayloadDto_1.BookMarkEventPayloadDto,
    "BookMarkEventStatusResponseDto": BookMarkEventStatusResponseDto_1.BookMarkEventStatusResponseDto,
    "BookMarkEventsListPayloadDto": BookMarkEventsListPayloadDto_1.BookMarkEventsListPayloadDto,
    "BookPayloadDto": BookPayloadDto_1.BookPayloadDto,
    "BookResponseDto": BookResponseDto_1.BookResponseDto,
    "BookReviewCountResponseDto": BookReviewCountResponseDto_1.BookReviewCountResponseDto,
    "Books": Books_1.Books,
    "BooksResponseDto": BooksResponseDto_1.BooksResponseDto,
    "BooksReviewResponseDto": BooksReviewResponseDto_1.BooksReviewResponseDto,
    "BusinessConnectedAccount": BusinessConnectedAccount_1.BusinessConnectedAccount,
    "Card": Card_1.Card,
    "CardChecks": CardChecks_1.CardChecks,
    "CardList": CardList_1.CardList,
    "CardListResponseDto": CardListResponseDto_1.CardListResponseDto,
    "CardNetwork": CardNetwork_1.CardNetwork,
    "CardSecure": CardSecure_1.CardSecure,
    "ChangePayloadDto": ChangePayloadDto_1.ChangePayloadDto,
    "CreateBookMarkEventResponseDto": CreateBookMarkEventResponseDto_1.CreateBookMarkEventResponseDto,
    "CreateRoleDto": CreateRoleDto_1.CreateRoleDto,
    "CreateStaffDto": CreateStaffDto_1.CreateStaffDto,
    "DeleteBookMarkEventResponseDto": DeleteBookMarkEventResponseDto_1.DeleteBookMarkEventResponseDto,
    "EventDTO": EventDTO_1.EventDTO,
    "EventDeleteResponseDto": EventDeleteResponseDto_1.EventDeleteResponseDto,
    "EventPayloadDto": EventPayloadDto_1.EventPayloadDto,
    "EventResponseDto": EventResponseDto_1.EventResponseDto,
    "Events": Events_1.Events,
    "EventsList": EventsList_1.EventsList,
    "EventsResponseDto": EventsResponseDto_1.EventsResponseDto,
    "FileUploadDto": FileUploadDto_1.FileUploadDto,
    "FileUrl": FileUrl_1.FileUrl,
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
    "Location": Location_1.Location,
    "LocationPayloadDto": LocationPayloadDto_1.LocationPayloadDto,
    "LocationPlacesResponseDto": LocationPlacesResponseDto_1.LocationPlacesResponseDto,
    "LoginPayloadDto": LoginPayloadDto_1.LoginPayloadDto,
    "MetaResponse": MetaResponse_1.MetaResponse,
    "MyAllFriendsResponseDto": MyAllFriendsResponseDto_1.MyAllFriendsResponseDto,
    "MyEventResponseDto": MyEventResponseDto_1.MyEventResponseDto,
    "MyEvents": MyEvents_1.MyEvents,
    "MyEventsResponse": MyEventsResponse_1.MyEventsResponse,
    "MyEventsResponseDto": MyEventsResponseDto_1.MyEventsResponseDto,
    "MyFriendsResponse": MyFriendsResponse_1.MyFriendsResponse,
    "OtpEntityPayloadDto": OtpEntityPayloadDto_1.OtpEntityPayloadDto,
    "PasswordChangeResponse": PasswordChangeResponse_1.PasswordChangeResponse,
    "PasswordChangeResponseDto": PasswordChangeResponseDto_1.PasswordChangeResponseDto,
    "PaymentPayloadDto": PaymentPayloadDto_1.PaymentPayloadDto,
    "PaymentResponse": PaymentResponse_1.PaymentResponse,
    "PaymentResponseDto": PaymentResponseDto_1.PaymentResponseDto,
    "PermissionResponseDto": PermissionResponseDto_1.PermissionResponseDto,
    "Places": Places_1.Places,
    "Rating": Rating_1.Rating,
    "Review": Review_1.Review,
    "RoleResponseDto": RoleResponseDto_1.RoleResponseDto,
    "SignupPayloadDto": SignupPayloadDto_1.SignupPayloadDto,
    "StorageResponseDto": StorageResponseDto_1.StorageResponseDto,
    "StoreDetailsPayloadDto": StoreDetailsPayloadDto_1.StoreDetailsPayloadDto,
    "StripePayloadDto": StripePayloadDto_1.StripePayloadDto,
    "StripePaymentPayloadDto": StripePaymentPayloadDto_1.StripePaymentPayloadDto,
    "StripeResponse": StripeResponse_1.StripeResponse,
    "StripeResponseDto": StripeResponseDto_1.StripeResponseDto,
    "UpdateRoleDto": UpdateRoleDto_1.UpdateRoleDto,
    "UpdateStaffDto": UpdateStaffDto_1.UpdateStaffDto,
    "UserBookPayloadDto": UserBookPayloadDto_1.UserBookPayloadDto,
    "UserBookReviewResponseDto": UserBookReviewResponseDto_1.UserBookReviewResponseDto,
    "UserBooks": UserBooks_1.UserBooks,
    "UserBooksResponse": UserBooksResponse_1.UserBooksResponse,
    "UserBooksResponseDto": UserBooksResponseDto_1.UserBooksResponseDto,
    "UserDeleteResponseDto": UserDeleteResponseDto_1.UserDeleteResponseDto,
    "UserDetails": UserDetails_1.UserDetails,
    "UserFollowerResponseDto": UserFollowerResponseDto_1.UserFollowerResponseDto,
    "UserFollowers": UserFollowers_1.UserFollowers,
    "UserResponse": UserResponse_1.UserResponse,
    "UserResponseDto": UserResponseDto_1.UserResponseDto,
    "UserRolePayloadDto": UserRolePayloadDto_1.UserRolePayloadDto,
    "UserUpdatePayloadDto": UserUpdatePayloadDto_1.UserUpdatePayloadDto,
    "VerificationLinkResponseDTO": VerificationLinkResponseDTO_1.VerificationLinkResponseDTO,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), _b = _a[0], type = _b === void 0 ? '' : _b, _c = _a[1], subtype = _c === void 0 ? '' : _c;
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
var nullableSuffix = " | null";
var optionalSuffix = " | undefined";
var arrayPrefix = "Array<";
var arraySuffix = ">";
var mapPrefix = "{ [key: string]: ";
var mapSuffix = "; }";
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
                    var mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType];
                    }
                    else if (typeMap[discriminatorType]) {
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
        else if (type.endsWith(nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
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
        else if (type.endsWith(nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
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
        var _a;
        if (mediaType === undefined) {
            return undefined;
        }
        return ((_a = mediaType.split(";")[0]) !== null && _a !== void 0 ? _a : '').trim().toLowerCase();
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