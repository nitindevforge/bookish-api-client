"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOutPayloadDTO = void 0;
var LoggedOutPayloadDTO = (function () {
    function LoggedOutPayloadDTO() {
    }
    LoggedOutPayloadDTO.getAttributeTypeMap = function () {
        return LoggedOutPayloadDTO.attributeTypeMap;
    };
    LoggedOutPayloadDTO.discriminator = undefined;
    LoggedOutPayloadDTO.attributeTypeMap = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        }
    ];
    return LoggedOutPayloadDTO;
}());
exports.LoggedOutPayloadDTO = LoggedOutPayloadDTO;
//# sourceMappingURL=LoggedOutPayloadDTO.js.map