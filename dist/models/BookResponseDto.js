"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResponseDto = void 0;
var BookResponseDto = (function () {
    function BookResponseDto() {
    }
    BookResponseDto.getAttributeTypeMap = function () {
        return BookResponseDto.attributeTypeMap;
    };
    BookResponseDto.discriminator = undefined;
    BookResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Book",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BookResponseDto;
}());
exports.BookResponseDto = BookResponseDto;
//# sourceMappingURL=BookResponseDto.js.map