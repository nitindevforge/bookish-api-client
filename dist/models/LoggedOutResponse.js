"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOutResponse = void 0;
var LoggedOutResponse = (function () {
    function LoggedOutResponse() {
    }
    LoggedOutResponse.getAttributeTypeMap = function () {
        return LoggedOutResponse.attributeTypeMap;
    };
    LoggedOutResponse.discriminator = undefined;
    LoggedOutResponse.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    ];
    return LoggedOutResponse;
}());
exports.LoggedOutResponse = LoggedOutResponse;
//# sourceMappingURL=LoggedOutResponse.js.map