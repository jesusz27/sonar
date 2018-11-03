import { Contact } from "../models/contact.model";
import { ContactResource } from "../resources/contact.resource";
import { UserInputDto } from "../dtos/userInput.dto";
import { TrackInputDto } from "../dtos/trackInput.dto";
import { TrackDetailDao } from "../services/dao/trackDetail.dao";
import { TrackDetail } from "../models/trackDetail.model";
import { LocationDto } from "../dtos/location.dto";
import { TrackDao } from "../services/dao/track.dao";
import { OneSignalService } from "./oneSignal.service";
export class SocketService {
    private contactResource: ContactResource;
    private trackDetailDao: TrackDetailDao;
    private trackDao: TrackDao;
    private oneSignalService: OneSignalService;
    constructor() {
        this.contactResource = new ContactResource();
        this.trackDetailDao = new TrackDetailDao();
        this.trackDao = new TrackDao();
        this.oneSignalService = new OneSignalService();
    }
    async findByCodUser(idUser: string): Promise<Contact[]> {
        const contact: Contact[] = await this.contactResource.findByCodUserAndStatus(idUser);
        return contact;
    }
    async findByCodContact(idUser: string): Promise<string[]> {
        const contact: Contact[] = await this.contactResource.findByCodUserAndStatus(idUser);
        const contactStr: string[] = [];
        for (let i = 0; i < contact.length; i++) {
            contactStr.push(contact[i].getCodContact().getIdUser());
        }
        return contactStr;
    }
    async create(trackInput: TrackInputDto, contact: Contact[]): Promise<string> {
        const trackDetailSearch: TrackDetail = await this.trackDetailDao.findByIdTrack(trackInput.idTrack);
        let trackDetail: TrackDetail = undefined;
        if (!trackDetailSearch) {
            trackDetail = await this.trackDetailDao.create(trackInput);
            this.oneSignalService.sendNotification(contact);
            if (trackDetail) {
                for (let i = 0; i < contact.length; i++) {
                    const trackInput: TrackInputDto = { codUser: contact[i].getCodUser(), codContact: contact[i].getCodContact(), trackDetail: trackDetail };

                    this.trackDao.create(trackInput);
                }
            }
        } else {
            const locationBD: Location[] = JSON.parse(trackDetailSearch.getLocationStorage());
            const location: Location = JSON.parse(trackInput.location);
            locationBD.push(location);
            trackDetail = await this.trackDetailDao.update(trackDetailSearch.getId(), JSON.stringify(locationBD));
        }
        return JSON.stringify(trackDetail);
    }
}
