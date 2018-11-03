import { Person } from "../../models/person.model";
import { PersonBuilder } from "../../models/builders/person.builder";
import PersonSchema from "../../schemas/person.schema";
import { PersonInputDto } from "../../dtos/personInput.dto";
import { Document } from "mongoose";
import logger from "../../util/logger";
import { UserDao } from "./user.dao";
import { User } from "../../models/user.model";
import { UserBuilder } from "../../models/builders/user.builder";
import UserSchema from "../../schemas/user.schema";
export class PersonDao {
    private userDao: UserDao;
    constructor() {
        this.userDao = new UserDao();
    }
    private static toArrayPersons(documents: Document[]): Person[] {
        const persons: Person[] = [];
        for (let i = 0; i < documents.length; i++) {
            persons.push(PersonDao.toPerson(documents[i]));
        }
        return persons;
    }
    private static toPerson(document: Document): Person {
        return new PersonBuilder().setId(document.get("_id")).setFirstName(document.get("firstName")).setLastName(document.get("lastName")).setBirthdate(document.get("birthdate")).setPhone(document.get("phone"))
            .setUser(
                new UserBuilder(document.get("user")[0].get("idUser"))
                    .setId(document.get("user")[0].get("_id"))
                    .setEmail(document.get("user")[0].get("email"))
                    .build()
            )
            .build();
    }
    async create(personInputDto: PersonInputDto, idUser: string): Promise<Person> {
        const user: User = await this.userDao.findByIdUser(idUser);
        const personEntity = new PersonBuilder().setFirstName(personInputDto.firstName).setLastName(personInputDto.lastName).setBirthdate(personInputDto.birthdate).setPhone(personInputDto.phone).setUser(user).build();
        const person = new PersonSchema(personEntity);
        return person.save()
            .then(async (document: Document) => {
                const person: any = await this.findById(document.get("_id"));
                if (person) {
                    return person;
                } else {
                    return undefined;
                }
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findById(id: number): Promise<Person> {
        return await PersonSchema.findById(id)
            .then(async (PersonDocument: Document) => {
                console.log(PersonDocument);
                const person: Person = PersonDocument ? PersonDao.toPerson(PersonDocument) : undefined;
                return person;
            })
            .catch(err => {
                return undefined;
            });
    }
    async findByUser(codUser: number): Promise<Person> {
        return await PersonSchema.findOne({ user: codUser })
            .then(async (PersonDocument: Document) => {
                console.log(PersonDocument);
                const person: Person = PersonDocument ? PersonDao.toPerson(PersonDocument) : undefined;
                return person;
            })
            .catch(err => {
                return undefined;
            });
    }
    async update(personInputDto: PersonInputDto): Promise<Person> {
        return await PersonSchema.findOneAndUpdate({ _id: personInputDto._id }, { $set: { firstName: personInputDto.firstName, lastName: personInputDto.lastName, birthdate: personInputDto.birthdate, phone: personInputDto.phone } }, { new: true })
            .then(async () => {
                const person: Person = await this.findById(personInputDto._id);
                return person;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
}