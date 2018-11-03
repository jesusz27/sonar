import { PersonDao } from "../services/dao/person.dao";
import { Person } from "../models/person.model";
import { PersonInputDto } from "../dtos/personInput.dto";
export class PersonResource {
    personDao: PersonDao;
    constructor() {
        this.personDao = new PersonDao();
    }
    async create(personInputDto: PersonInputDto, idUser: string): Promise<Person> {
        return await this.personDao.create(personInputDto, idUser);
    }
    async update(personInputDto: PersonInputDto): Promise<Person> {
        return await this.personDao.update(personInputDto);
    }
    async findById(id: number): Promise<Person> {
        return await this.personDao.findById(id);
    }
    async findByUser(codUser: number): Promise<Person> {
        return await this.personDao.findByUser(codUser);
    }
}