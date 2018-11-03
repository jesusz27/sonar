import { User } from "../user.model";

export class UserBuilder {
    private user: User;
    constructor(idUser: string) {
        this.user = new User(idUser);
    }
    setId(id: number) {
        this.user.setId(id);
        return this;
    }
    setIdUser(idUser: string) {
        this.user.setIdUser(idUser);
        return this;
    }
    setPassword(password: string) {
        this.user.setPassword(password);
        return this;
    }
    setEmail(email: string) {
        this.user.setEmail(email);
        return this;
    }
    setIdNotification(idNotification: string) {
        this.user.setIdNotification(idNotification);
        return this;
    }
    setAvatar(avatar: string) {
        this.user.setAvatar(avatar);
        return this;
    }
    build(): User {
        return this.user;
    }

}