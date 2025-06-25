"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
var UserDetails = (function () {
    function UserDetails() {
    }
    UserDetails.getAttributeTypeMap = function () {
        return UserDetails.attributeTypeMap;
    };
    UserDetails.discriminator = undefined;
    UserDetails.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "string",
            "format": ""
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "RoleResponseDto",
            "format": ""
        },
        {
            "name": "interests",
            "baseName": "interests",
            "type": "Array<InterestsPayloadDto>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "followers",
            "baseName": "followers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "following",
            "baseName": "following",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "followingCount",
            "baseName": "followingCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "followerCount",
            "baseName": "followerCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "storeName",
            "baseName": "storeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeLogo",
            "baseName": "storeLogo",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return UserDetails;
}());
exports.UserDetails = UserDetails;
//# sourceMappingURL=UserDetails.js.map