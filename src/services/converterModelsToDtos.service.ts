
import { ContactOutputDto } from "../dtos/contactOutput.dto";
import { Contact } from "../models/contact.model";
import { User } from "../models/user.model";
import { UserOutputDto } from "../dtos/userOutput.dto";
export class ConverterModelsToDtosService {


    constructor() {
    }

    toContactOutputDto(contact: Contact): ContactOutputDto {
        let contactOutputDto: ContactOutputDto = undefined;
        if (contact) {
            const user: User = contact.getCodContact();
            contactOutputDto = {
                id: contact.getId(),
                idUser: user.getIdUser(),
                email: user.getEmail(),
                status: contact.getStatus()
            };
        }
        return contactOutputDto;
    }
    toArrayContactOutputDto(contact: Contact[]): ContactOutputDto[] {
        const contactOutputDto: ContactOutputDto[] = [];
        if (contact.length > 0) {
            for (let i = 0; i < contact.length; i++) {
                contactOutputDto.push(this.toContactOutputDto(contact[i]));
            }
        }
        return contactOutputDto;
    }
    toUserOutputDto(user: User): UserOutputDto {
        let userOutputDto: UserOutputDto = undefined;
        if (user) {
            userOutputDto = {
                idUser: user.getIdUser(),
                email: user.getEmail(),
            };
        }
        return userOutputDto;
    }
    toArrayUserOutputDto(user: User[]): UserOutputDto[] {
        const userOutputDto: UserOutputDto[] = [];
        if (user.length > 0) {
            for (let i = 0; i < user.length; i++) {
                userOutputDto.push(this.toUserOutputDto(user[i]));
            }
        }
        return userOutputDto;
    }
}