"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDevicePayload = void 0;
var AddDevicePayload = (function () {
    function AddDevicePayload() {
    }
    AddDevicePayload.getAttributeTypeMap = function () {
        return AddDevicePayload.attributeTypeMap;
    };
    AddDevicePayload.discriminator = undefined;
    AddDevicePayload.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }
    ];
    return AddDevicePayload;
}());
exports.AddDevicePayload = AddDevicePayload;
//# sourceMappingURL=AddDevicePayload.js.map