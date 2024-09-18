import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { EventDeleteResponseDto } from '../models/EventDeleteResponseDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { LocationPayloadDto } from '../models/LocationPayloadDto';
import { LocationPlacesResponseDto } from '../models/LocationPlacesResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerDeleteEvent(id: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEventById(id: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindEvents(page: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindMyEvent(eventId: string, _options?: Configuration): Promise<RequestContext>;
    eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<RequestContext>;
    eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<RequestContext>;
    eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    eventControllerCreateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerDeleteEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventDeleteResponseDto>>;
    eventControllerFindEventByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
    eventControllerFindEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsResponseDto>>;
    eventControllerFindMyEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventResponseDto>>;
    eventControllerFindMyUpcomingEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MyEventsResponseDto>>;
    eventControllerFindSearchPlacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationPlacesResponseDto>>;
    eventControllerUpdateEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventResponseDto>>;
}
