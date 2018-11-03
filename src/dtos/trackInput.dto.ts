import { User } from "../models/user.model";
import { TrackDetail } from "../models/trackDetail.model";
export interface TrackInputDto {
    codUser?: User;
    codContact?: User;
    trackDetail?: TrackDetail;
    fecha?: string;
    idTrack?: string;
    location?: string;
}