"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardNetwork = void 0;
var CardNetwork = (function () {
    function CardNetwork() {
    }
    CardNetwork.getAttributeTypeMap = function () {
        return CardNetwork.attributeTypeMap;
    };
    CardNetwork.discriminator = undefined;
    CardNetwork.attributeTypeMap = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "preferred",
            "baseName": "preferred",
            "type": "string",
            "format": ""
        }
    ];
    return CardNetwork;
}());
exports.CardNetwork = CardNetwork;
//# sourceMappingURL=CardNetwork.js.map