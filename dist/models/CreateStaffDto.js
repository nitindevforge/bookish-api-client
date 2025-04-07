"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStaffDto = void 0;
var CreateStaffDto = (function () {
    function CreateStaffDto() {
    }
    CreateStaffDto.getAttributeTypeMap = function () {
        return CreateStaffDto.attributeTypeMap;
    };
    CreateStaffDto.discriminator = undefined;
    CreateStaffDto.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        }
    ];
    return CreateStaffDto;
}());
exports.CreateStaffDto = CreateStaffDto;
//# sourceMappingURL=CreateStaffDto.js.map