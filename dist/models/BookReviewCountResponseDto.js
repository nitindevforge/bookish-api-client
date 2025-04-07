"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookReviewCountResponseDto = void 0;
var BookReviewCountResponseDto = (function () {
    function BookReviewCountResponseDto() {
    }
    BookReviewCountResponseDto.getAttributeTypeMap = function () {
        return BookReviewCountResponseDto.attributeTypeMap;
    };
    BookReviewCountResponseDto.discriminator = undefined;
    BookReviewCountResponseDto.attributeTypeMap = [
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
    return BookReviewCountResponseDto;
}());
exports.BookReviewCountResponseDto = BookReviewCountResponseDto;
//# sourceMappingURL=BookReviewCountResponseDto.js.map