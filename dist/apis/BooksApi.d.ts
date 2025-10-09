import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BookByStatusDto } from '../models/BookByStatusDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { BooksStatusResponseDto } from '../models/BooksStatusResponseDto';
import { GoodReadsBookPayloadDto } from '../models/GoodReadsBookPayloadDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBookStatusQueryDto } from '../models/UserBookStatusQueryDto';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
export declare class BooksApiRequestFactory extends BaseAPIRequestFactory {
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerAddMyGoodReadsBooks(requestBody: Array<string>, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookById(id: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookByStatus(bookByStatusDto: BookByStatusDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindGoodReads(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindTopBooks(page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserWhichReadBook(_options?: Configuration): Promise<RequestContext>;
    bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class BooksApiResponseProcessor {
    bookControllerAddBookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerAddMyGoodReadsBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksStatusResponseDto>>;
    bookControllerFindBookByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookByStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBookReviewBaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindGoodReadsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindTopBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindUserBookReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBookReviewResponseDto>>;
    bookControllerFindUserBookReviewCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserWhichReadBookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerUserBookMarkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBookReviewResponseDto>>;
}
