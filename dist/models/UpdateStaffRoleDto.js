"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaffRoleDto = void 0;
var UpdateStaffRoleDto = (function () {
    function UpdateStaffRoleDto() {
    }
    UpdateStaffRoleDto.getAttributeTypeMap = function () {
        return UpdateStaffRoleDto.attributeTypeMap;
    };
    UpdateStaffRoleDto.discriminator = undefined;
    UpdateStaffRoleDto.mapping = undefined;
    UpdateStaffRoleDto.attributeTypeMap = [
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
    return UpdateStaffRoleDto;
}());
exports.UpdateStaffRoleDto = UpdateStaffRoleDto;
//# sourceMappingURL=UpdateStaffRoleDto.js.map