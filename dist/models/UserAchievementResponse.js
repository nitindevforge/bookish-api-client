"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAchievementResponse = void 0;
var UserAchievementResponse = (function () {
    function UserAchievementResponse() {
    }
    UserAchievementResponse.getAttributeTypeMap = function () {
        return UserAchievementResponse.attributeTypeMap;
    };
    UserAchievementResponse.discriminator = undefined;
    UserAchievementResponse.attributeTypeMap = [
        {
            "name": "friend",
            "baseName": "friend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "book",
            "baseName": "book",
            "type": "boolean",
            "format": ""
        }
    ];
    return UserAchievementResponse;
}());
exports.UserAchievementResponse = UserAchievementResponse;
//# sourceMappingURL=UserAchievementResponse.js.map