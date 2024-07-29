"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResponse = void 0;
var PaymentResponse = (function () {
    function PaymentResponse() {
    }
    PaymentResponse.getAttributeTypeMap = function () {
        return PaymentResponse.attributeTypeMap;
    };
    PaymentResponse.discriminator = undefined;
    PaymentResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserDetails",
            "format": ""
        }
    ];
    return PaymentResponse;
}());
exports.PaymentResponse = PaymentResponse;
//# sourceMappingURL=PaymentResponse.js.map