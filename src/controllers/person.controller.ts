import { Request, Response } from "express";
import { PersonDao } from "../services/dao/person.dao";
import { Person } from "../models/person.model";
import { PersonInputDto } from "../dtos/personInput.dto";
import { PersonResource } from "../resources/person.resource";
import { UserResource } from "../resources/user.resource";
import { User } from "../models/user.model";
import { HttpStatusCode } from "../util/http-status-codes.enum";
export class PersonController {
    userResource: UserResource;
    personResource: PersonResource;
    constructor() {
        this.userResource = new UserResource();
        this.personResource = new PersonResource();
    }
    async create(req: Request, res: Response): Promise<any> {
        const user: User = await this.userResource.findByIdUser(req.params.idUser);
        if (user) {
            const person: Person = await this.personResource.findByUser(user.getId());
            if (!person) {
                const personDto: PersonInputDto = req.body;
                const person: Person = await this.personResource.create(personDto, req.params.idUser);
                person ? res.status(HttpStatusCode.CREATED).json(person) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
            } else {
                res.status(HttpStatusCode.NOT_FOUND).end();
            }
        } else {
            res.status(HttpStatusCode.NOT_FOUND).end();
        }
    }
    async update(req: Request, res: Response): Promise<any> {
        const person: Person = await this.personResource.findById(req.body._id);
        if (person) {
            const personDto: PersonInputDto = req.body;
            const person: Person = await this.personResource.update(personDto);
            person ? res.status(HttpStatusCode.OK).json(person) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
        } else {
            res.status(HttpStatusCode.NOT_FOUND).end();
        }
    }
    async findByIdUser(req: Request, res: Response): Promise<any> {
        const user: User = await this.userResource.findByIdUser(req.params.idUser);
        if (user) {
            const person: Person = await this.personResource.findByUser(user.getId());
            person ? res.status(HttpStatusCode.OK).json(person) : res.status(HttpStatusCode.NOT_FOUND).end();
        } else {
            res.status(HttpStatusCode.NOT_FOUND).end();
        }
    }
}