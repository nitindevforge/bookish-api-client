"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadPayloadDto = void 0;
var FileUploadPayloadDto = (function () {
    function FileUploadPayloadDto() {
    }
    FileUploadPayloadDto.getAttributeTypeMap = function () {
        return FileUploadPayloadDto.attributeTypeMap;
    };
    FileUploadPayloadDto.discriminator = undefined;
    FileUploadPayloadDto.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "directory",
            "baseName": "directory",
            "type": "string",
            "format": ""
        }
    ];
    return FileUploadPayloadDto;
}());
exports.FileUploadPayloadDto = FileUploadPayloadDto;
//# sourceMappingURL=FileUploadPayloadDto.js.map