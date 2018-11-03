import { Track } from "../track.model";
import { User } from "../user.model";
import { TrackDetail } from "../trackDetail.model";
export class TrackBuilder {
    private trackModel: Track;
    constructor() {
        this.trackModel = new Track();
    }
    setId(id: number): TrackBuilder {
        this.trackModel.setId(id);
        return this;
    }
    setCodUser(codUser: User): TrackBuilder {
        this.trackModel.setCodUser(codUser);
        return this;
    }
    setCodContact(codContact: User): TrackBuilder {
        this.trackModel.setCodContact(codContact);
        return this;
    }
    setTrackDetail(trackDetail: TrackDetail): TrackBuilder {
        this.trackModel.setTrackDetail(trackDetail);
        return this;
    }
    setFecha(fecha: Date): TrackBuilder {
        this.trackModel.setFecha(fecha);
        return this;
    }
    build(): Track {
        return this.trackModel;
    }
}