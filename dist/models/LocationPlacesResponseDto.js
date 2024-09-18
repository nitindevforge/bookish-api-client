"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationPlacesResponseDto = void 0;
var LocationPlacesResponseDto = (function () {
    function LocationPlacesResponseDto() {
    }
    LocationPlacesResponseDto.getAttributeTypeMap = function () {
        return LocationPlacesResponseDto.attributeTypeMap;
    };
    LocationPlacesResponseDto.discriminator = undefined;
    LocationPlacesResponseDto.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Place>",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return LocationPlacesResponseDto;
}());
exports.LocationPlacesResponseDto = LocationPlacesResponseDto;
//# sourceMappingURL=LocationPlacesResponseDto.js.map