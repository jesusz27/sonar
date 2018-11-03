import { User } from "./user.model";

export class Contact {
    private _id: string;
    private codUser: User;
    private codContact: User;
    private status: string;

    constructor() {
    }

    getId(): string {
        return this._id;
    }
    getCodUser(): User {
        return this.codUser;
    }
    getCodContact(): User {
        return this.codContact;
    }
    getStatus(): string {
        return this.status;
    }
    setId(id: string) {
        this._id = id;
    }
    setCodUser(codUser: User) {
        this.codUser = codUser;
    }
    setCodContact(codContact: User) {
        this.codContact = codContact;
    }
    setStatus(status: string) {
        this.status = status;
    }
}