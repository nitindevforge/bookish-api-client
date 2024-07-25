"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggestion = void 0;
var Suggestion = (function () {
    function Suggestion() {
    }
    Suggestion.getAttributeTypeMap = function () {
        return Suggestion.attributeTypeMap;
    };
    Suggestion.discriminator = undefined;
    Suggestion.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Follower",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return Suggestion;
}());
exports.Suggestion = Suggestion;
//# sourceMappingURL=Suggestion.js.map