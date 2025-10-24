"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBooksResponseDTO = void 0;
var TopBooksResponseDTO = (function () {
    function TopBooksResponseDTO() {
    }
    TopBooksResponseDTO.getAttributeTypeMap = function () {
        return TopBooksResponseDTO.attributeTypeMap;
    };
    TopBooksResponseDTO.discriminator = undefined;
    TopBooksResponseDTO.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "TopBooksResponse",
            "format": ""
        },
        {
            "name": "isSuccess",
            "baseName": "isSuccess",
            "type": "boolean",
            "format": ""
        }
    ];
    return TopBooksResponseDTO;
}());
exports.TopBooksResponseDTO = TopBooksResponseDTO;
//# sourceMappingURL=TopBooksResponseDTO.js.map