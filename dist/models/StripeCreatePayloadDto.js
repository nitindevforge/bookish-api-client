"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCreatePayloadDto = void 0;
var StripeCreatePayloadDto = (function () {
    function StripeCreatePayloadDto() {
    }
    StripeCreatePayloadDto.getAttributeTypeMap = function () {
        return StripeCreatePayloadDto.attributeTypeMap;
    };
    StripeCreatePayloadDto.discriminator = undefined;
    StripeCreatePayloadDto.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        }
    ];
    return StripeCreatePayloadDto;
}());
exports.StripeCreatePayloadDto = StripeCreatePayloadDto;
//# sourceMappingURL=StripeCreatePayloadDto.js.map