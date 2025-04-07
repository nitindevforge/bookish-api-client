"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationLinkResponseDTO = void 0;
var VerificationLinkResponseDTO = (function () {
    function VerificationLinkResponseDTO() {
    }
    VerificationLinkResponseDTO.getAttributeTypeMap = function () {
        return VerificationLinkResponseDTO.attributeTypeMap;
    };
    VerificationLinkResponseDTO.discriminator = undefined;
    VerificationLinkResponseDTO.attributeTypeMap = [
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "number",
            "format": ""
        }
    ];
    return VerificationLinkResponseDTO;
}());
exports.VerificationLinkResponseDTO = VerificationLinkResponseDTO;
//# sourceMappingURL=VerificationLinkResponseDTO.js.map