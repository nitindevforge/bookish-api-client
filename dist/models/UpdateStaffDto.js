"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaffDto = void 0;
var UpdateStaffDto = (function () {
    function UpdateStaffDto() {
    }
    UpdateStaffDto.getAttributeTypeMap = function () {
        return UpdateStaffDto.attributeTypeMap;
    };
    UpdateStaffDto.discriminator = undefined;
    UpdateStaffDto.attributeTypeMap = [
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
        }
    ];
    return UpdateStaffDto;
}());
exports.UpdateStaffDto = UpdateStaffDto;
//# sourceMappingURL=UpdateStaffDto.js.map