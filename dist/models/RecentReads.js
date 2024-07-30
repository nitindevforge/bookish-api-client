"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentReads = void 0;
var RecentReads = (function () {
    function RecentReads() {
    }
    RecentReads.getAttributeTypeMap = function () {
        return RecentReads.attributeTypeMap;
    };
    RecentReads.discriminator = undefined;
    RecentReads.attributeTypeMap = [
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
        }
    ];
    return RecentReads;
}());
exports.RecentReads = RecentReads;
//# sourceMappingURL=RecentReads.js.map