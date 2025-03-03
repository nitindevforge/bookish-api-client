"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageResponseDto = void 0;
var StorageResponseDto = (function () {
    function StorageResponseDto() {
    }
    StorageResponseDto.getAttributeTypeMap = function () {
        return StorageResponseDto.attributeTypeMap;
    };
    StorageResponseDto.discriminator = undefined;
    StorageResponseDto.mapping = undefined;
    StorageResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "FileUrl",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return StorageResponseDto;
}());
exports.StorageResponseDto = StorageResponseDto;
//# sourceMappingURL=StorageResponseDto.js.map