"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardChecks = void 0;
var CardChecks = (function () {
    function CardChecks() {
    }
    CardChecks.getAttributeTypeMap = function () {
        return CardChecks.attributeTypeMap;
    };
    CardChecks.discriminator = undefined;
    CardChecks.mapping = undefined;
    CardChecks.attributeTypeMap = [
        {
            "name": "addressLine1Check",
            "baseName": "address_line1_check",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressPostalCodeCheck",
            "baseName": "address_postal_code_check",
            "type": "string",
            "format": ""
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
            "type": "string",
            "format": ""
        }
    ];
    return CardChecks;
}());
exports.CardChecks = CardChecks;
//# sourceMappingURL=CardChecks.js.map