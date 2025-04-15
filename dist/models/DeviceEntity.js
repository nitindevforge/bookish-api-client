"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEntity = void 0;
var DeviceEntity = (function () {
    function DeviceEntity() {
    }
    DeviceEntity.getAttributeTypeMap = function () {
        return DeviceEntity.attributeTypeMap;
    };
    DeviceEntity.discriminator = undefined;
    DeviceEntity.attributeTypeMap = [
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
            "name": "lastUsed",
            "baseName": "lastUsed",
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
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }
    ];
    return DeviceEntity;
}());
exports.DeviceEntity = DeviceEntity;
//# sourceMappingURL=DeviceEntity.js.map