"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessConnectedAccountStatusEnum = exports.BusinessConnectedAccount = void 0;
var BusinessConnectedAccount = (function () {
    function BusinessConnectedAccount() {
    }
    BusinessConnectedAccount.getAttributeTypeMap = function () {
        return BusinessConnectedAccount.attributeTypeMap;
    };
    BusinessConnectedAccount.discriminator = undefined;
    BusinessConnectedAccount.mapping = undefined;
    BusinessConnectedAccount.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BusinessConnectedAccountStatusEnum",
            "format": ""
        }
    ];
    return BusinessConnectedAccount;
}());
exports.BusinessConnectedAccount = BusinessConnectedAccount;
var BusinessConnectedAccountStatusEnum;
(function (BusinessConnectedAccountStatusEnum) {
    BusinessConnectedAccountStatusEnum["Pending"] = "PENDING";
    BusinessConnectedAccountStatusEnum["VerificationRequired"] = "VERIFICATION_REQUIRED";
    BusinessConnectedAccountStatusEnum["Connected"] = "CONNECTED";
})(BusinessConnectedAccountStatusEnum = exports.BusinessConnectedAccountStatusEnum || (exports.BusinessConnectedAccountStatusEnum = {}));
//# sourceMappingURL=BusinessConnectedAccount.js.map