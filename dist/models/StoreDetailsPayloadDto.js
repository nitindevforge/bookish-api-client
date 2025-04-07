"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDetailsPayloadDto = void 0;
var StoreDetailsPayloadDto = (function () {
    function StoreDetailsPayloadDto() {
    }
    StoreDetailsPayloadDto.getAttributeTypeMap = function () {
        return StoreDetailsPayloadDto.attributeTypeMap;
    };
    StoreDetailsPayloadDto.discriminator = undefined;
    StoreDetailsPayloadDto.attributeTypeMap = [
        {
            "name": "storeName",
            "baseName": "storeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeLogo",
            "baseName": "storeLogo",
            "type": "string",
            "format": ""
        }
    ];
    return StoreDetailsPayloadDto;
}());
exports.StoreDetailsPayloadDto = StoreDetailsPayloadDto;
//# sourceMappingURL=StoreDetailsPayloadDto.js.map