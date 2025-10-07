"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppfeepercentageUpdatePayloadDto = void 0;
var AppfeepercentageUpdatePayloadDto = (function () {
    function AppfeepercentageUpdatePayloadDto() {
    }
    AppfeepercentageUpdatePayloadDto.getAttributeTypeMap = function () {
        return AppfeepercentageUpdatePayloadDto.attributeTypeMap;
    };
    AppfeepercentageUpdatePayloadDto.discriminator = undefined;
    AppfeepercentageUpdatePayloadDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "appfeepercentage",
            "baseName": "appfeepercentage",
            "type": "number",
            "format": ""
        }
    ];
    return AppfeepercentageUpdatePayloadDto;
}());
exports.AppfeepercentageUpdatePayloadDto = AppfeepercentageUpdatePayloadDto;
//# sourceMappingURL=AppfeepercentageUpdatePayloadDto.js.map