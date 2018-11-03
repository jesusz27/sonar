import { Track } from "../models/track.model";
import logger from "../util/logger";
import { TrackInputDto } from "../dtos/trackInput.dto";
import { TrackDao } from "../services/dao/track.dao";
import { TrackDetail } from "../models/trackDetail.model";
import { User } from "../models/user.model";
export class TrackResource {
    private trackDao: TrackDao;
    constructor() {
        this.trackDao = new TrackDao();
    }
    async create(trackInputDto: TrackInputDto): Promise<Track> {
        return await this.trackDao.create(trackInputDto);
    }
    async findByIdTrack(trackDetail: TrackDetail): Promise<Track[]> {
        return await this.trackDao.findByTrackDetail(trackDetail);
    }
    async findByCodUser(user: User): Promise<Track[]> {
        return await this.trackDao.findByCodUser(user);
    }
    async findByCodContact(user: User): Promise<Track[]> {
        return await this.trackDao.findByCodContact(user);
    }
}

