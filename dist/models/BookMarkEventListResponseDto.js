"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMarkEventListResponseDto = void 0;
var BookMarkEventListResponseDto = (function () {
    function BookMarkEventListResponseDto() {
    }
    BookMarkEventListResponseDto.getAttributeTypeMap = function () {
        return BookMarkEventListResponseDto.attributeTypeMap;
    };
    BookMarkEventListResponseDto.discriminator = undefined;
    BookMarkEventListResponseDto.mapping = undefined;
    BookMarkEventListResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BookMarkEventListDTO",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BookMarkEventListResponseDto;
}());
exports.BookMarkEventListResponseDto = BookMarkEventListResponseDto;
//# sourceMappingURL=BookMarkEventListResponseDto.js.map