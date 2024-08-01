import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookResponseDto } from '../models/UserBookResponseDto';
import { UserBookReviewCountResponseDto } from '../models/UserBookReviewCountResponseDto';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
export declare class BooksApiRequestFactory extends BaseAPIRequestFactory {
    bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookById(id: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBookReviewBase(type: string, page: number, limit: number, search?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindBooks(search: string, page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, _options?: Configuration): Promise<RequestContext>;
    bookControllerFindUserBooks(page: number, limit: number, status?: string, _options?: Configuration): Promise<RequestContext>;
    bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class BooksApiResponseProcessor {
    bookControllerAddBookWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookResponseDto>>;
    bookControllerFindBookReviewBaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksReviewResponseDto>>;
    bookControllerFindBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BooksResponseDto>>;
    bookControllerFindUserBookReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBookResponseDto>>;
    bookControllerFindUserBookReviewCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBookReviewCountResponseDto>>;
    bookControllerFindUserBookReviewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerFindUserBooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBooksResponseDto>>;
    bookControllerUserBookMarkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserBookResponseDto>>;
}
