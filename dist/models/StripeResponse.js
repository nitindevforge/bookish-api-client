"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeResponse = void 0;
var StripeResponse = (function () {
    function StripeResponse() {
    }
    StripeResponse.getAttributeTypeMap = function () {
        return StripeResponse.attributeTypeMap;
    };
    StripeResponse.discriminator = undefined;
    StripeResponse.attributeTypeMap = [
        {
            "name": "paymentIntent",
            "baseName": "paymentIntent",
            "type": "string",
            "format": ""
        },
        {
            "name": "ephemeralKey",
            "baseName": "ephemeralKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        }
    ];
    return StripeResponse;
}());
exports.StripeResponse = StripeResponse;
//# sourceMappingURL=StripeResponse.js.map