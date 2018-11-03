import { User } from "./user.model";
import { getPublicSuffix } from "tough-cookie";
export class Person {
    private _id: number;
    private firstName: string;
    private lastName: string;
    private birthdate: Date;
    private phone: number;
    private user: User;
    constructor() {
    }
    public setId(id: number) {
        this._id = id;
    }
    public setLastName(lastName: string) {
        this.lastName = lastName;
    }
    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    public setBirthdate(birthdate: Date) {
        this.birthdate = birthdate;
    }
    public setPhone(phone: number) {
        this.phone = phone;
    }
    public setUser(user: User) {
        this.user = user;
    }
    public getId(): number {
        return this._id;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public getBirthdate(): Date {
        return this.birthdate;
    }
    public getPhone(): number {
        return this.phone;
    }
    public getUser(): User {
        return this.user;
    }

}