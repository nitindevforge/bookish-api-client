"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowers = void 0;
var UserFollowers = (function () {
    function UserFollowers() {
    }
    UserFollowers.getAttributeTypeMap = function () {
        return UserFollowers.attributeTypeMap;
    };
    UserFollowers.discriminator = undefined;
    UserFollowers.mapping = undefined;
    UserFollowers.attributeTypeMap = [
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
    return UserFollowers;
}());
exports.UserFollowers = UserFollowers;
//# sourceMappingURL=UserFollowers.js.map