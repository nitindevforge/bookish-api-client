"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookResponseDto = void 0;
var UserBookResponseDto = (function () {
    function UserBookResponseDto() {
    }
    UserBookResponseDto.getAttributeTypeMap = function () {
        return UserBookResponseDto.attributeTypeMap;
    };
    UserBookResponseDto.discriminator = undefined;
    UserBookResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserBooks",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserBookResponseDto;
}());
exports.UserBookResponseDto = UserBookResponseDto;
//# sourceMappingURL=UserBookResponseDto.js.map