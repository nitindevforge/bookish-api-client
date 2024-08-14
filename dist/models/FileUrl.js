"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUrl = void 0;
var FileUrl = (function () {
    function FileUrl() {
    }
    FileUrl.getAttributeTypeMap = function () {
        return FileUrl.attributeTypeMap;
    };
    FileUrl.discriminator = undefined;
    FileUrl.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        }
    ];
    return FileUrl;
}());
exports.FileUrl = FileUrl;
//# sourceMappingURL=FileUrl.js.map