import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { BookMarkEventListResponseDto } from '../models/BookMarkEventListResponseDto';
import { BookMarkEventPayloadDto } from '../models/BookMarkEventPayloadDto';
import { BookMarkEventStatusResponseDto } from '../models/BookMarkEventStatusResponseDto';
import { BookMarkEventsListPayloadDto } from '../models/BookMarkEventsListPayloadDto';
import { CreateBookMarkEventResponseDto } from '../models/CreateBookMarkEventResponseDto';
import { DeleteBookMarkEventResponseDto } from '../models/DeleteBookMarkEventResponseDto';
import { EventDeleteResponseDto } from '../models/EventDeleteResponseDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { LocationPayloadDto } from '../models/LocationPayloadDto';
import { LocationPlacesResponseDto } from '../models/LocationPlacesResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerDeleteBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindCustomerOfEvents(_options?: Configuration): Promise<RequestContext>;
    eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindMyEvent(eventId: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<RequestContext>;
    eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerGetBookMarkEventList(bookMarkEventsListPayloadDto: BookMarkEventsListPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerGetBookMarkEventStatus(eventId: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    eventControllerBookMarkEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateBookMarkEventResponseDto>>;
    eventControllerCreateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerDeleteBookMarkEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteBookMarkEventResponseDto>>;
    eventControllerDeleteEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventDeleteResponseDto>>;
    eventControllerFindCustomerOfEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerFindEventByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindMyEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventResponseDto>>;
    eventControllerFindMyUpcomingEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindSearchPlacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerGetBookMarkEventListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookMarkEventListResponseDto>>;
    eventControllerGetBookMarkEventStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BookMarkEventStatusResponseDto>>;
    eventControllerUpdateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
}
