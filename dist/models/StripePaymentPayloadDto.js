"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePaymentPayloadDto = void 0;
var StripePaymentPayloadDto = (function () {
    function StripePaymentPayloadDto() {
    }
    StripePaymentPayloadDto.getAttributeTypeMap = function () {
        return StripePaymentPayloadDto.attributeTypeMap;
    };
    StripePaymentPayloadDto.discriminator = undefined;
    StripePaymentPayloadDto.attributeTypeMap = [
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string",
            "format": ""
        },
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
        }
    ];
    return StripePaymentPayloadDto;
}());
exports.StripePaymentPayloadDto = StripePaymentPayloadDto;
//# sourceMappingURL=StripePaymentPayloadDto.js.map