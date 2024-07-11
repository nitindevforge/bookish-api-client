export * from '../models/ChangePayloadDto';
export * from '../models/ForgetPasswordEntityResponse';
export * from '../models/ForgetPasswordEntityResponseDto';
export * from '../models/ForgetPasswordPayloadDto';
export * from '../models/LoginPayloadDto';
export * from '../models/OtpEntityPayloadDto';
export * from '../models/PasswordChangeResponse';
export * from '../models/PasswordChangeResponseDto';
export * from '../models/PermissionResponseDto';
export * from '../models/RoleResponseDto';
export * from '../models/SearchUserResponseDto';
export * from '../models/SignupPayloadDto';
export * from '../models/UserDetails';
export * from '../models/UserResponse';
export * from '../models/UserResponseDto';
export * from '../models/UserRolePayloadDto';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
