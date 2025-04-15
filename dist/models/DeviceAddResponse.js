"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceAddResponse = void 0;
var DeviceAddResponse = (function () {
    function DeviceAddResponse() {
    }
    DeviceAddResponse.getAttributeTypeMap = function () {
        return DeviceAddResponse.attributeTypeMap;
    };
    DeviceAddResponse.discriminator = undefined;
    DeviceAddResponse.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "DeviceEntity",
            "format": ""
        }
    ];
    return DeviceAddResponse;
}());
exports.DeviceAddResponse = DeviceAddResponse;
//# sourceMappingURL=DeviceAddResponse.js.map