"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFile = void 0;
var ModelFile = (function () {
    function ModelFile() {
    }
    ModelFile.getAttributeTypeMap = function () {
        return ModelFile.attributeTypeMap;
    };
    ModelFile.discriminator = undefined;
    ModelFile.attributeTypeMap = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return ModelFile;
}());
exports.ModelFile = ModelFile;
//# sourceMappingURL=ModelFile.js.map