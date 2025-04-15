"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSyncDTO = void 0;
var UserSyncDTO = (function () {
    function UserSyncDTO() {
    }
    UserSyncDTO.getAttributeTypeMap = function () {
        return UserSyncDTO.attributeTypeMap;
    };
    UserSyncDTO.discriminator = undefined;
    UserSyncDTO.attributeTypeMap = [
        {
            "name": "location",
            "baseName": "location",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return UserSyncDTO;
}());
exports.UserSyncDTO = UserSyncDTO;
//# sourceMappingURL=UserSyncDTO.js.map