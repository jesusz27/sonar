import { Request, Response } from "express";
import { HttpStatusCode } from "../util/http-status-codes.enum";
import { Track } from "../models/track.model";
import { TrackResource } from "../resources/track.resource";
import { TrackDetailResource } from "../resources/trackDetail.resource";
import { TrackDetail } from "../models/trackDetail.model";
import { User } from "../models/user.model";
import { UserResource } from "../resources/user.resource";
export class TrackController {
    private trackResource: TrackResource;
    private trackDetailResource: TrackDetailResource;
    private userResource: UserResource;

    constructor() {
        this.trackResource = new TrackResource();
        this.trackDetailResource = new TrackDetailResource();
        this.userResource = new UserResource();
    }

    async findByIdTrack(req: Request, res: Response): Promise<any> {
        const trackDetail: TrackDetail = await this.trackDetailResource.findByIdTrack(req.params.idTrack);
        if (trackDetail) {
            const track: Track[] = await this.trackResource.findByIdTrack(trackDetail);
            track ? res.status(HttpStatusCode.OK).json(track) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
        }
        res.status(HttpStatusCode.NOT_FOUND).end();
    }
    async findByCodUser(req: Request, res: Response): Promise<any> {
        const user: User = await this.userResource.findByIdUser(req.params.idUser);
        if (user) {
            const track: Track[] = await this.trackResource.findByCodUser(user);
            track ? res.status(HttpStatusCode.OK).json(track) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
        }
        res.status(HttpStatusCode.NOT_FOUND).end();
    }
    async findByCodContact(req: Request, res: Response): Promise<any> {
        const user: User = await this.userResource.findByIdUser(req.params.idUser);
        if (user) {
            const track: Track[] = await this.trackResource.findByCodContact(user);
            track ? res.status(HttpStatusCode.OK).json(track) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
        }
        res.status(HttpStatusCode.NOT_FOUND).end();
    }
}
