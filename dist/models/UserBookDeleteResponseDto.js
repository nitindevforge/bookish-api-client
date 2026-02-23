"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookDeleteResponseDto = void 0;
var UserBookDeleteResponseDto = (function () {
    function UserBookDeleteResponseDto() {
    }
    UserBookDeleteResponseDto.getAttributeTypeMap = function () {
        return UserBookDeleteResponseDto.attributeTypeMap;
    };
    UserBookDeleteResponseDto.discriminator = undefined;
    UserBookDeleteResponseDto.attributeTypeMap = [
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
    return UserBookDeleteResponseDto;
}());
exports.UserBookDeleteResponseDto = UserBookDeleteResponseDto;
//# sourceMappingURL=UserBookDeleteResponseDto.js.map