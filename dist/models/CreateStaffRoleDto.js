"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStaffRoleDto = void 0;
var CreateStaffRoleDto = (function () {
    function CreateStaffRoleDto() {
    }
    CreateStaffRoleDto.getAttributeTypeMap = function () {
        return CreateStaffRoleDto.attributeTypeMap;
    };
    CreateStaffRoleDto.discriminator = undefined;
    CreateStaffRoleDto.mapping = undefined;
    CreateStaffRoleDto.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
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
            "type": "Array<string>",
            "format": ""
        }
    ];
    return CreateStaffRoleDto;
}());
exports.CreateStaffRoleDto = CreateStaffRoleDto;
//# sourceMappingURL=CreateStaffRoleDto.js.map