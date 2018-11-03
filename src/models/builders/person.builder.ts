import { Person } from "../person.model";
import { User } from "../user.model";
export class PersonBuilder {
    private person: Person;
    constructor() {
        this.person = new Person();
    }
    setId(id: number): PersonBuilder {
        this.person.setId(id);
        return this;
    }
    setFirstName(firstName: string): PersonBuilder {
        this.person.setFirstName(firstName);
        return this;
    }
    setLastName(lastName: string): PersonBuilder {
        this.person.setLastName(lastName);
        return this;
    }
    setBirthdate(birthdate: Date): PersonBuilder {
        this.person.setBirthdate(birthdate);
        return this;
    }
    setPhone(phone: number): PersonBuilder {
        this.person.setPhone(phone);
        return this;
    }
    setUser(user: User): PersonBuilder {
        this.person.setUser(user);
        return this;
    }
    build(): Person {
        return this.person;
    }
}