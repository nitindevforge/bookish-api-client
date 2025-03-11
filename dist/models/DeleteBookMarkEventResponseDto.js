"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookMarkEventResponseDto = void 0;
var DeleteBookMarkEventResponseDto = (function () {
    function DeleteBookMarkEventResponseDto() {
    }
    DeleteBookMarkEventResponseDto.getAttributeTypeMap = function () {
        return DeleteBookMarkEventResponseDto.attributeTypeMap;
    };
    DeleteBookMarkEventResponseDto.discriminator = undefined;
    DeleteBookMarkEventResponseDto.mapping = undefined;
    DeleteBookMarkEventResponseDto.attributeTypeMap = [
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
    return DeleteBookMarkEventResponseDto;
}());
exports.DeleteBookMarkEventResponseDto = DeleteBookMarkEventResponseDto;
//# sourceMappingURL=DeleteBookMarkEventResponseDto.js.map