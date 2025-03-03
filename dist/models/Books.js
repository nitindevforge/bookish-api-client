"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
var Books = (function () {
    function Books() {
    }
    Books.getAttributeTypeMap = function () {
        return Books.attributeTypeMap;
    };
    Books.discriminator = undefined;
    Books.mapping = undefined;
    Books.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Book>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        }
    ];
    return Books;
}());
exports.Books = Books;
//# sourceMappingURL=Books.js.map