"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadDto = void 0;
var FileUploadDto = (function () {
    function FileUploadDto() {
    }
    FileUploadDto.getAttributeTypeMap = function () {
        return FileUploadDto.attributeTypeMap;
    };
    FileUploadDto.discriminator = undefined;
    FileUploadDto.attributeTypeMap = [
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        }
    ];
    return FileUploadDto;
}());
exports.FileUploadDto = FileUploadDto;
//# sourceMappingURL=FileUploadDto.js.map