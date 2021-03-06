export interface LocationDto {
    accuracy: number;
    altitude: number;
    latitude: number;
    longitude: number;
    speed?: number;
    time?: number;
    altitudeAccuracy?: number;
    heading?: any;
    provider?: any;
    locationProvider?: any;
    idTrack?: string;
}