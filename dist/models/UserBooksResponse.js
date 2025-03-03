"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBooksResponse = void 0;
var UserBooksResponse = (function () {
    function UserBooksResponse() {
    }
    UserBooksResponse.getAttributeTypeMap = function () {
        return UserBooksResponse.attributeTypeMap;
    };
    UserBooksResponse.discriminator = undefined;
    UserBooksResponse.mapping = undefined;
    UserBooksResponse.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<UserBooks>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return UserBooksResponse;
}());
exports.UserBooksResponse = UserBooksResponse;
//# sourceMappingURL=UserBooksResponse.js.map