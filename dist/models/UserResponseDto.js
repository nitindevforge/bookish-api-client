"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
var UserResponseDto = (function () {
    function UserResponseDto() {
    }
    UserResponseDto.getAttributeTypeMap = function () {
        return UserResponseDto.attributeTypeMap;
    };
    UserResponseDto.discriminator = undefined;
    UserResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserResponseDto;
}());
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=UserResponseDto.js.map