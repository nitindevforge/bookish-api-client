"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationPayloadDto = void 0;
var LocationPayloadDto = (function () {
    function LocationPayloadDto() {
    }
    LocationPayloadDto.getAttributeTypeMap = function () {
        return LocationPayloadDto.attributeTypeMap;
    };
    LocationPayloadDto.discriminator = undefined;
    LocationPayloadDto.mapping = undefined;
    LocationPayloadDto.attributeTypeMap = [
        {
            "name": "place",
            "baseName": "place",
            "type": "string",
            "format": ""
        }
    ];
    return LocationPayloadDto;
}());
exports.LocationPayloadDto = LocationPayloadDto;
//# sourceMappingURL=LocationPayloadDto.js.map