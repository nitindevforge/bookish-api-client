"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResponseDto = void 0;
var PaymentResponseDto = (function () {
    function PaymentResponseDto() {
    }
    PaymentResponseDto.getAttributeTypeMap = function () {
        return PaymentResponseDto.attributeTypeMap;
    };
    PaymentResponseDto.discriminator = undefined;
    PaymentResponseDto.mapping = undefined;
    PaymentResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PaymentResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return PaymentResponseDto;
}());
exports.PaymentResponseDto = PaymentResponseDto;
//# sourceMappingURL=PaymentResponseDto.js.map