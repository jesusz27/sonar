import { TrackDetail } from "../trackDetail.model";

export class TrackDetailBuilder {
    private trackDetail: TrackDetail;
    constructor(idTrack: string) {
        this.trackDetail = new TrackDetail(idTrack);
    }
    setId(id: number) {
        this.trackDetail.setId(id);
        return this;
    }
    setIdTrack(idTrack: string) {
        this.trackDetail.setIdTrack(idTrack);
        return this;
    }
    setLocationStorage(locationStorage: string) {
        this.trackDetail.setLocationStorage(locationStorage);
        return this;
    }
    build(): TrackDetail {
        return this.trackDetail;
    }

}