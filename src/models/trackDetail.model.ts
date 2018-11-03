
export class TrackDetail  {
    private _id: number;
    private idTrack: string;
    private locationStorage: string;

    constructor(idTrack: string) {
        this.idTrack = idTrack;
    }
    public setId(id: number) {
        this._id = id;
    }
    public getIdTrack(): string {
        return this.idTrack;
    }
    public getLocationStorage(): string {
        return this.locationStorage;
    }
    public setLocationStorage(locationStorage: string) {
        this.locationStorage = locationStorage;
    }
    public setIdTrack(idTrack: string) {
        this.idTrack = idTrack;
    }
    public getId(): number {
        return this._id;
    }

}