"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookReviewCountResponseDto = void 0;
var UserBookReviewCountResponseDto = (function () {
    function UserBookReviewCountResponseDto() {
    }
    UserBookReviewCountResponseDto.getAttributeTypeMap = function () {
        return UserBookReviewCountResponseDto.attributeTypeMap;
    };
    UserBookReviewCountResponseDto.discriminator = undefined;
    UserBookReviewCountResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Review",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserBookReviewCountResponseDto;
}());
exports.UserBookReviewCountResponseDto = UserBookReviewCountResponseDto;
//# sourceMappingURL=UserBookReviewCountResponseDto.js.map