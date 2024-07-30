"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBooks = void 0;
var UserBooks = (function () {
    function UserBooks() {
    }
    UserBooks.getAttributeTypeMap = function () {
        return UserBooks.attributeTypeMap;
    };
    UserBooks.discriminator = undefined;
    UserBooks.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "Book",
            "format": ""
        },
        {
            "name": "isRead",
            "baseName": "isRead",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "number",
            "format": ""
        }
    ];
    return UserBooks;
}());
exports.UserBooks = UserBooks;
//# sourceMappingURL=UserBooks.js.map