"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePayloadDto = void 0;
var StripePayloadDto = (function () {
    function StripePayloadDto() {
    }
    StripePayloadDto.getAttributeTypeMap = function () {
        return StripePayloadDto.attributeTypeMap;
    };
    StripePayloadDto.discriminator = undefined;
    StripePayloadDto.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        }
    ];
    return StripePayloadDto;
}());
exports.StripePayloadDto = StripePayloadDto;
//# sourceMappingURL=StripePayloadDto.js.map