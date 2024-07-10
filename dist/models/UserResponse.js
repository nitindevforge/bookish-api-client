"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
var UserResponse = (function () {
    function UserResponse() {
    }
    UserResponse.getAttributeTypeMap = function () {
        return UserResponse.attributeTypeMap;
    };
    UserResponse.discriminator = undefined;
    UserResponse.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }
    ];
    return UserResponse;
}());
exports.UserResponse = UserResponse;
//# sourceMappingURL=UserResponse.js.map