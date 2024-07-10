"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolePayloadDto = void 0;
var UserRolePayloadDto = (function () {
    function UserRolePayloadDto() {
    }
    UserRolePayloadDto.getAttributeTypeMap = function () {
        return UserRolePayloadDto.attributeTypeMap;
    };
    UserRolePayloadDto.discriminator = undefined;
    UserRolePayloadDto.attributeTypeMap = [
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        }
    ];
    return UserRolePayloadDto;
}());
exports.UserRolePayloadDto = UserRolePayloadDto;
//# sourceMappingURL=UserRolePayloadDto.js.map