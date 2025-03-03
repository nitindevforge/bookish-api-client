"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Places = void 0;
var Places = (function () {
    function Places() {
    }
    Places.getAttributeTypeMap = function () {
        return Places.attributeTypeMap;
    };
    Places.discriminator = undefined;
    Places.mapping = undefined;
    Places.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return Places;
}());
exports.Places = Places;
//# sourceMappingURL=Places.js.map