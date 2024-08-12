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
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        }
    ];
    return StripePaymentPayloadDto;
}());
exports.StripePaymentPayloadDto = StripePaymentPayloadDto;
//# sourceMappingURL=StripePaymentPayloadDto.js.map