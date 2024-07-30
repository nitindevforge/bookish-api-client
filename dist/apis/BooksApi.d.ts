import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { RecentReadPayloadDto } from '../models/RecentReadPayloadDto';
import { RecentReadResponseDto } from '../models/RecentReadResponseDto';
import { RecentReadsResponseDto } from '../models/RecentReadsResponseDto';
export declare class BooksApiRequestFactory extends BaseAPIRequestFactory {
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookById(id: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindRecentReads(page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    bookControllerRecentRead(recentReadPayloadDto: RecentReadPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class BooksApiResponseProcessor {
    bookControllerAddBookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindRecentReadsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecentReadsResponseDto>>;
    bookControllerRecentReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecentReadResponseDto>>;
}
