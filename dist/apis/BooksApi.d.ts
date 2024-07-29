import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
export declare class BooksApiRequestFactory extends BaseAPIRequestFactory {
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class BooksApiResponseProcessor {
    bookControllerAddBookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksResponseDto>>;
}
