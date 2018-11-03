import { User } from "../user.model";
import { Contact } from "../contact.model";

export class ContactBuilder {
    private contact: Contact;

    constructor() {
        this.contact = new Contact();
    }

    setId(id: string): ContactBuilder {
        this.contact.setId(id);
        return this;
    }
    setCodUser(codUser: User): ContactBuilder {
        this.contact.setCodUser(codUser);
        return this;
    }
    setCodContact(codContact: User): ContactBuilder {
        this.contact.setCodContact(codContact);
        return this;
    }
    setStatus(status: string): ContactBuilder {
        this.contact.setStatus(status);
        return this;
    }
    getId(): string {
        return this.contact.getId();
    }
    getCodUser(): User {
        return this.contact.getCodUser();
    }
    getCodContact(): User {
        return this.contact.getCodContact();
    }
    getStatus(): string {
        return this.contact.getStatus();
    }
    public build() {
        return this.contact;
    }
}