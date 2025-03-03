"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Follower = void 0;
var Follower = (function () {
    function Follower() {
    }
    Follower.getAttributeTypeMap = function () {
        return Follower.attributeTypeMap;
    };
    Follower.discriminator = undefined;
    Follower.mapping = undefined;
    Follower.attributeTypeMap = [
        {
            "name": "follower",
            "baseName": "follower",
            "type": "string",
            "format": ""
        },
        {
            "name": "following",
            "baseName": "following",
            "type": "string",
            "format": ""
        }
    ];
    return Follower;
}());
exports.Follower = Follower;
//# sourceMappingURL=Follower.js.map