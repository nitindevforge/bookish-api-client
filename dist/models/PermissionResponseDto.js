"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionResponseDto = void 0;
var PermissionResponseDto = (function () {
    function PermissionResponseDto() {
    }
    PermissionResponseDto.getAttributeTypeMap = function () {
        return PermissionResponseDto.attributeTypeMap;
    };
    PermissionResponseDto.discriminator = undefined;
    PermissionResponseDto.mapping = undefined;
    PermissionResponseDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return PermissionResponseDto;
}());
exports.PermissionResponseDto = PermissionResponseDto;
//# sourceMappingURL=PermissionResponseDto.js.map