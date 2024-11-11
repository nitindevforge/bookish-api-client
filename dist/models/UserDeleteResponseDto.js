"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteResponseDto = void 0;
var UserDeleteResponseDto = (function () {
    function UserDeleteResponseDto() {
    }
    UserDeleteResponseDto.getAttributeTypeMap = function () {
        return UserDeleteResponseDto.attributeTypeMap;
    };
    UserDeleteResponseDto.discriminator = undefined;
    UserDeleteResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserDeleteResponseDto;
}());
exports.UserDeleteResponseDto = UserDeleteResponseDto;
//# sourceMappingURL=UserDeleteResponseDto.js.map