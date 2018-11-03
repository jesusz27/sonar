import TrackDetailSchema from "../../schemas/trackDetail.schema";
import { TrackDetail } from "../../models/trackDetail.model";
import logger from "../../util/logger";
import { TrackDetailBuilder } from "../../models/builders/trackDetail.builder";
import { TrackInputDto } from "../../dtos/trackInput.dto";
import { UserDao } from "./user.dao";
import { User } from "../../models/user.model";
import { Document } from "mongoose";
export class TrackDetailDao {
    private userDao: UserDao;
    constructor() {
        this.userDao = new UserDao();
    }
    private static toTrackDetail(document: Document): TrackDetail {
        return new TrackDetailBuilder(document.get("idTrack")).setId(document.get("_id")).setIdTrack(document.get("idTrack")).setLocationStorage(document.get("locationStorage")).build();
    }


    async findByIdTrack(idTrack: string): Promise<TrackDetail> {
        return await TrackDetailSchema.findOne({ idTrack: idTrack })
            .then((TrackDetailDocument: Document) => {
                const TrackDetail: TrackDetail = TrackDetailDocument ? TrackDetailDao.toTrackDetail(TrackDetailDocument) : undefined;
                return TrackDetail;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findById(id: string): Promise<TrackDetail> {
        return await TrackDetailSchema.findById(id)
            .then((TrackDetailDocument: Document) => {
                const TrackDetail: TrackDetail = TrackDetailDocument ? TrackDetailDao.toTrackDetail(TrackDetailDocument) : undefined;
                return TrackDetail;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async create(trackInputDto: TrackInputDto): Promise<TrackDetail> {
        const TrackDetailEntity = new TrackDetailBuilder(trackInputDto.idTrack).setLocationStorage("[" + trackInputDto.location + "]").build();
        const TrackDetail = new TrackDetailSchema(TrackDetailEntity);
        return TrackDetail.save()
            .then((trackDetailDocument: Document) => {
                const trackDetail: TrackDetail = trackDetailDocument ? TrackDetailDao.toTrackDetail(trackDetailDocument) : undefined;
                return trackDetail;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async update(id: number, location: string): Promise<TrackDetail> {
        return await TrackDetailSchema.updateOne({ _id: id }, { $set: { locationStorage: location} }, { new: true })
            .then((trackDetailDocument: Document) => {
                console.log("Dao Update");
                // console.log(trackDetailDocument);
                // const trackDetail: TrackDetail = trackDetailDocument ? TrackDetailDao.toTrackDetail(trackDetailDocument) : undefined;
                return trackDetailDocument;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
}
