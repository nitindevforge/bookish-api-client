"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBooksResponseDto = void 0;
var UserBooksResponseDto = (function () {
    function UserBooksResponseDto() {
    }
    UserBooksResponseDto.getAttributeTypeMap = function () {
        return UserBooksResponseDto.attributeTypeMap;
    };
    UserBooksResponseDto.discriminator = undefined;
    UserBooksResponseDto.mapping = undefined;
    UserBooksResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserBooksResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserBooksResponseDto;
}());
exports.UserBooksResponseDto = UserBooksResponseDto;
//# sourceMappingURL=UserBooksResponseDto.js.map