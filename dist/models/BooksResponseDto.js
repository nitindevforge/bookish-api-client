"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksResponseDto = void 0;
var BooksResponseDto = (function () {
    function BooksResponseDto() {
    }
    BooksResponseDto.getAttributeTypeMap = function () {
        return BooksResponseDto.attributeTypeMap;
    };
    BooksResponseDto.discriminator = undefined;
    BooksResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Books",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BooksResponseDto;
}());
exports.BooksResponseDto = BooksResponseDto;
//# sourceMappingURL=BooksResponseDto.js.map