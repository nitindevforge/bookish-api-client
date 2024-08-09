"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadResponseDto = void 0;
var FileUploadResponseDto = (function () {
    function FileUploadResponseDto() {
    }
    FileUploadResponseDto.getAttributeTypeMap = function () {
        return FileUploadResponseDto.attributeTypeMap;
    };
    FileUploadResponseDto.discriminator = undefined;
    FileUploadResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return FileUploadResponseDto;
}());
exports.FileUploadResponseDto = FileUploadResponseDto;
//# sourceMappingURL=FileUploadResponseDto.js.map