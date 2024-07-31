"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowerResponseDto = void 0;
var UserFollowerResponseDto = (function () {
    function UserFollowerResponseDto() {
    }
    UserFollowerResponseDto.getAttributeTypeMap = function () {
        return UserFollowerResponseDto.attributeTypeMap;
    };
    UserFollowerResponseDto.discriminator = undefined;
    UserFollowerResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserFollower",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserFollowerResponseDto;
}());
exports.UserFollowerResponseDto = UserFollowerResponseDto;
//# sourceMappingURL=UserFollowerResponseDto.js.map