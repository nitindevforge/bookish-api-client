"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordChangeResponse = void 0;
var PasswordChangeResponse = (function () {
    function PasswordChangeResponse() {
    }
    PasswordChangeResponse.getAttributeTypeMap = function () {
        return PasswordChangeResponse.attributeTypeMap;
    };
    PasswordChangeResponse.discriminator = undefined;
    PasswordChangeResponse.mapping = undefined;
    PasswordChangeResponse.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "UserDetails",
            "format": ""
        }
    ];
    return PasswordChangeResponse;
}());
exports.PasswordChangeResponse = PasswordChangeResponse;
//# sourceMappingURL=PasswordChangeResponse.js.map