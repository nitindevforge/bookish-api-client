"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
var UpdateRoleDto = (function () {
    function UpdateRoleDto() {
    }
    UpdateRoleDto.getAttributeTypeMap = function () {
        return UpdateRoleDto.attributeTypeMap;
    };
    UpdateRoleDto.discriminator = undefined;
    UpdateRoleDto.attributeTypeMap = [
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
            "type": "Array<string>",
            "format": ""
        }
    ];
    return UpdateRoleDto;
}());
exports.UpdateRoleDto = UpdateRoleDto;
//# sourceMappingURL=UpdateRoleDto.js.map