"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDetails = void 0;
var BillingDetails = (function () {
    function BillingDetails() {
    }
    BillingDetails.getAttributeTypeMap = function () {
        return BillingDetails.attributeTypeMap;
    };
    BillingDetails.discriminator = undefined;
    BillingDetails.mapping = undefined;
    BillingDetails.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        }
    ];
    return BillingDetails;
}());
exports.BillingDetails = BillingDetails;
//# sourceMappingURL=BillingDetails.js.map