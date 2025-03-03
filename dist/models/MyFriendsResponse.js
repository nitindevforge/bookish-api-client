"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFriendsResponse = void 0;
var MyFriendsResponse = (function () {
    function MyFriendsResponse() {
    }
    MyFriendsResponse.getAttributeTypeMap = function () {
        return MyFriendsResponse.attributeTypeMap;
    };
    MyFriendsResponse.discriminator = undefined;
    MyFriendsResponse.mapping = undefined;
    MyFriendsResponse.attributeTypeMap = [
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
    return MyFriendsResponse;
}());
exports.MyFriendsResponse = MyFriendsResponse;
//# sourceMappingURL=MyFriendsResponse.js.map