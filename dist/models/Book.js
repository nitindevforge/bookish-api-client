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
            "name": "iSBN13",
            "baseName": "ISBN13",
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
            "name": "description",
            "baseName": "description",
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
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
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
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publicationDate",
            "baseName": "publicationDate",
            "type": "string",
            "format": ""
        }
    ];
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=Book.js.map