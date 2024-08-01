"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReviewResponseDto = void 0;
var BookReviewResponseDto = (function () {
    function BookReviewResponseDto() {
    }
    BookReviewResponseDto.getAttributeTypeMap = function () {
        return BookReviewResponseDto.attributeTypeMap;
    };
    BookReviewResponseDto.discriminator = undefined;
    BookReviewResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<UserBooks>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BookReviewResponseDto;
}());
exports.BookReviewResponseDto = BookReviewResponseDto;
//# sourceMappingURL=BookReviewResponseDto.js.map