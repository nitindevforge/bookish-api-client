"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeResponseDto = void 0;
var StripeResponseDto = (function () {
    function StripeResponseDto() {
    }
    StripeResponseDto.getAttributeTypeMap = function () {
        return StripeResponseDto.attributeTypeMap;
    };
    StripeResponseDto.discriminator = undefined;
    StripeResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "StripeResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return StripeResponseDto;
}());
exports.StripeResponseDto = StripeResponseDto;
//# sourceMappingURL=StripeResponseDto.js.map