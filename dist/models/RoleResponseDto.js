"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponseDto = void 0;
var RoleResponseDto = (function () {
    function RoleResponseDto() {
    }
    RoleResponseDto.getAttributeTypeMap = function () {
        return RoleResponseDto.attributeTypeMap;
    };
    RoleResponseDto.discriminator = undefined;
    RoleResponseDto.attributeTypeMap = [
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<PermissionResponseDto>",
            "format": ""
        }
    ];
    return RoleResponseDto;
}());
exports.RoleResponseDto = RoleResponseDto;
//# sourceMappingURL=RoleResponseDto.js.map