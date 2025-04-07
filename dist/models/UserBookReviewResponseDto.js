"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookReviewResponseDto = void 0;
var UserBookReviewResponseDto = (function () {
    function UserBookReviewResponseDto() {
    }
    UserBookReviewResponseDto.getAttributeTypeMap = function () {
        return UserBookReviewResponseDto.attributeTypeMap;
    };
    UserBookReviewResponseDto.discriminator = undefined;
    UserBookReviewResponseDto.attributeTypeMap = [
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
    return UserBookReviewResponseDto;
}());
exports.UserBookReviewResponseDto = UserBookReviewResponseDto;
//# sourceMappingURL=UserBookReviewResponseDto.js.map