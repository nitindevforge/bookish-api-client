"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingGoalResponseDTO = void 0;
var ReadingGoalResponseDTO = (function () {
    function ReadingGoalResponseDTO() {
    }
    ReadingGoalResponseDTO.getAttributeTypeMap = function () {
        return ReadingGoalResponseDTO.attributeTypeMap;
    };
    ReadingGoalResponseDTO.discriminator = undefined;
    ReadingGoalResponseDTO.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ReadingGoalResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return ReadingGoalResponseDTO;
}());
exports.ReadingGoalResponseDTO = ReadingGoalResponseDTO;
//# sourceMappingURL=ReadingGoalResponseDTO.js.map