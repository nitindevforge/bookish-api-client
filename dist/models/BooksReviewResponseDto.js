"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksReviewResponseDto = void 0;
var BooksReviewResponseDto = (function () {
    function BooksReviewResponseDto() {
    }
    BooksReviewResponseDto.getAttributeTypeMap = function () {
        return BooksReviewResponseDto.attributeTypeMap;
    };
    BooksReviewResponseDto.discriminator = undefined;
    BooksReviewResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Book>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BooksReviewResponseDto;
}());
exports.BooksReviewResponseDto = BooksReviewResponseDto;
//# sourceMappingURL=BooksReviewResponseDto.js.map