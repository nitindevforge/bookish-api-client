"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestsPayloadDto = void 0;
var InterestsPayloadDto = (function () {
    function InterestsPayloadDto() {
    }
    InterestsPayloadDto.getAttributeTypeMap = function () {
        return InterestsPayloadDto.attributeTypeMap;
    };
    InterestsPayloadDto.discriminator = undefined;
    InterestsPayloadDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return InterestsPayloadDto;
}());
exports.InterestsPayloadDto = InterestsPayloadDto;
//# sourceMappingURL=InterestsPayloadDto.js.map