"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksStatusResponseDto = void 0;
var BooksStatusResponseDto = (function () {
    function BooksStatusResponseDto() {
    }
    BooksStatusResponseDto.getAttributeTypeMap = function () {
        return BooksStatusResponseDto.attributeTypeMap;
    };
    BooksStatusResponseDto.discriminator = undefined;
    BooksStatusResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return BooksStatusResponseDto;
}());
exports.BooksStatusResponseDto = BooksStatusResponseDto;
//# sourceMappingURL=BooksStatusResponseDto.js.map