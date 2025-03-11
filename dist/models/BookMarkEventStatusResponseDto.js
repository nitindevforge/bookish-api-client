"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMarkEventStatusResponseDto = void 0;
var BookMarkEventStatusResponseDto = (function () {
    function BookMarkEventStatusResponseDto() {
    }
    BookMarkEventStatusResponseDto.getAttributeTypeMap = function () {
        return BookMarkEventStatusResponseDto.attributeTypeMap;
    };
    BookMarkEventStatusResponseDto.discriminator = undefined;
    BookMarkEventStatusResponseDto.mapping = undefined;
    BookMarkEventStatusResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BookMarkEventStatusResponseDto;
}());
exports.BookMarkEventStatusResponseDto = BookMarkEventStatusResponseDto;
//# sourceMappingURL=BookMarkEventStatusResponseDto.js.map