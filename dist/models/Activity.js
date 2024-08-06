"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
var Activity = (function () {
    function Activity() {
    }
    Activity.getAttributeTypeMap = function () {
        return Activity.attributeTypeMap;
    };
    Activity.discriminator = undefined;
    Activity.attributeTypeMap = [
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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "MetaResponse",
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
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map