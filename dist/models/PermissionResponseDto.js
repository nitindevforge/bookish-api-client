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
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return PermissionResponseDto;
}());
exports.PermissionResponseDto = PermissionResponseDto;
//# sourceMappingURL=PermissionResponseDto.js.map