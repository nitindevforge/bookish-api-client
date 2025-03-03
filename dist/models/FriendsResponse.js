"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsResponse = void 0;
var FriendsResponse = (function () {
    function FriendsResponse() {
    }
    FriendsResponse.getAttributeTypeMap = function () {
        return FriendsResponse.attributeTypeMap;
    };
    FriendsResponse.discriminator = undefined;
    FriendsResponse.mapping = undefined;
    FriendsResponse.attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<UserDetails>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return FriendsResponse;
}());
exports.FriendsResponse = FriendsResponse;
//# sourceMappingURL=FriendsResponse.js.map