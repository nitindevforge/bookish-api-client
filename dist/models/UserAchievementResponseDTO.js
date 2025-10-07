"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAchievementResponseDTO = void 0;
var UserAchievementResponseDTO = (function () {
    function UserAchievementResponseDTO() {
    }
    UserAchievementResponseDTO.getAttributeTypeMap = function () {
        return UserAchievementResponseDTO.attributeTypeMap;
    };
    UserAchievementResponseDTO.discriminator = undefined;
    UserAchievementResponseDTO.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "UserAchievementResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserAchievementResponseDTO;
}());
exports.UserAchievementResponseDTO = UserAchievementResponseDTO;
//# sourceMappingURL=UserAchievementResponseDTO.js.map