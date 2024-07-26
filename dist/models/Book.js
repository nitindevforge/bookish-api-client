"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = (function () {
    function Book() {
    }
    Book.getAttributeTypeMap = function () {
        return Book.attributeTypeMap;
    };
    Book.discriminator = undefined;
    Book.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "cover",
            "baseName": "cover",
            "type": "string",
            "format": ""
        },
        {
            "name": "genre",
            "baseName": "genre",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "AuthorResponseDto",
            "format": ""
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateAt",
            "baseName": "updateAt",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=Book.js.map