"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaResponse = void 0;
var MetaResponse = (function () {
    function MetaResponse() {
    }
    MetaResponse.getAttributeTypeMap = function () {
        return MetaResponse.attributeTypeMap;
    };
    MetaResponse.discriminator = undefined;
    MetaResponse.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "Events",
            "format": ""
        }
    ];
    return MetaResponse;
}());
exports.MetaResponse = MetaResponse;
//# sourceMappingURL=MetaResponse.js.map