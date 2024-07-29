export * from '../models/Activity';
export * from '../models/ActivityResponse';
export * from '../models/ActivityResponseDto';
export * from '../models/Address';
export * from '../models/AuthorResponseDto';
export * from '../models/BillingDetails';
export * from '../models/Book';
export * from '../models/BookPayloadDto';
export * from '../models/BookResponseDto';
export * from '../models/Books';
export * from '../models/BooksResponseDto';
export * from '../models/Card';
export * from '../models/CardChecks';
export * from '../models/CardList';
export * from '../models/CardListResponseDto';
export * from '../models/CardNetwork';
export * from '../models/CardSecure';
export * from '../models/ChangePayloadDto';
export * from '../models/EventPayloadDto';
export * from '../models/EventResponseDto';
export * from '../models/Events';
export * from '../models/EventsList';
export * from '../models/EventsResponseDto';
export * from '../models/FileUploadPayloadDto';
export * from '../models/Follower';
export * from '../models/FollowerPayloadDto';
export * from '../models/FollowerResponseDto';
export * from '../models/ForgetPasswordEntityResponse';
export * from '../models/ForgetPasswordEntityResponseDto';
export * from '../models/ForgetPasswordPayloadDto';
export * from '../models/FriendsResponse';
export * from '../models/FriendsResponseDto';
export * from '../models/InterestsPayloadDto';
export * from '../models/InterestsResponseDto';
export * from '../models/LoginPayloadDto';
export * from '../models/OtpEntityPayloadDto';
export * from '../models/PasswordChangeResponse';
export * from '../models/PasswordChangeResponseDto';
export * from '../models/PaymentPayloadDto';
export * from '../models/PermissionResponseDto';
export * from '../models/RoleResponseDto';
export * from '../models/SignupPayloadDto';
export * from '../models/StripePayloadDto';
export * from '../models/StripeResponse';
export * from '../models/StripeResponseDto';
export * from '../models/UserDetails';
export * from '../models/UserResponse';
export * from '../models/UserResponseDto';
export * from '../models/UserRolePayloadDto';
export * from '../models/UserUpdatePayloadDto';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
