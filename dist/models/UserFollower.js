"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollower = void 0;
var UserFollower = (function () {
    function UserFollower() {
    }
    UserFollower.getAttributeTypeMap = function () {
        return UserFollower.attributeTypeMap;
    };
    UserFollower.discriminator = undefined;
    UserFollower.attributeTypeMap = [
        {
            "name": "follower",
            "baseName": "follower",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "following",
            "baseName": "following",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return UserFollower;
}());
exports.UserFollower = UserFollower;
//# sourceMappingURL=UserFollower.js.map