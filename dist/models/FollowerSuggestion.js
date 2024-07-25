"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerSuggestion = void 0;
var FollowerSuggestion = (function () {
    function FollowerSuggestion() {
    }
    FollowerSuggestion.getAttributeTypeMap = function () {
        return FollowerSuggestion.attributeTypeMap;
    };
    FollowerSuggestion.discriminator = undefined;
    FollowerSuggestion.attributeTypeMap = [
        {
            "name": "follower",
            "baseName": "follower",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "following",
            "baseName": "following",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return FollowerSuggestion;
}());
exports.FollowerSuggestion = FollowerSuggestion;
//# sourceMappingURL=FollowerSuggestion.js.map