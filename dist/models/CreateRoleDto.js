"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDto = void 0;
var CreateRoleDto = (function () {
    function CreateRoleDto() {
    }
    CreateRoleDto.getAttributeTypeMap = function () {
        return CreateRoleDto.attributeTypeMap;
    };
    CreateRoleDto.discriminator = undefined;
    CreateRoleDto.mapping = undefined;
    CreateRoleDto.attributeTypeMap = [
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
    return CreateRoleDto;
}());
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=CreateRoleDto.js.map