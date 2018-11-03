import { User } from "../../models/user.model";
import logger from "../../util/logger";
import UserSchema from "../../schemas/user.schema";
import { UserBuilder } from "../../models/builders/user.builder";
import { UserInputDto } from "../../dtos/userInput.dto";
import { Document } from "mongoose";

export class UserDao {
    constructor() {
    }
    private static toArrayUsers(documents: Document[]): User[] {
        const users: User[] = [];
        for (let i = 0; i < documents.length; i++) {
            users.push(UserDao.toUser(documents[i]));
        }
        return users;
    }
    private static toUser(document: Document): User {
        return new UserBuilder(document.get("idUser")).setId(document.get("_id")).setEmail(document.get("email")).setIdNotification(document.get("idNotification")).setAvatar(document.get("avatar")).build();
    }
    async findByIdUser(idUser: string): Promise<User> {
        return await UserSchema.findOne({ idUser: idUser })
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findByEmail(email: string): Promise<User> {
        return await UserSchema.findOne({ email: email })
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findByIdNotification(idNotification: string): Promise<User> {
        return await UserSchema.findOne({ idNotification: idNotification })
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findAll(): Promise<User[]> {
        return await UserSchema.find({})
            .then( (usersDocument: Document[]) => {
                const users: User[] = usersDocument ? UserDao.toArrayUsers(usersDocument) : undefined;
                return users;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async findByIdUserAndPassword(userInputDto: UserInputDto): Promise<User> {
        return await UserSchema.findOne({ idUser: userInputDto.idUser, password: userInputDto.password })
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async findByIdUserAndIdNotification(userInputDto: UserInputDto): Promise<User> {
        return await UserSchema.findOne({ idUser: userInputDto.idUser, idNotification: userInputDto.idNotification })
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }
    async updateIdNotification(id: number, idNotification: string): Promise<User> {
        return await UserSchema.findOneAndUpdate({ _id: id }, { $set: {idNotification: idNotification}}, { new: true })
            .then(async () => {
                return true;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async updateAvatar(id: number, avatar: string): Promise<User> {
        return await UserSchema.findOneAndUpdate({ _id: id }, { $set: {avatar: avatar}}, { new: true })
            .then(async () => {
                return true;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async updatePassword(id: number, password: string): Promise<User> {
        return await UserSchema.findOneAndUpdate({ _id: id }, { $set: {password: password}}, { new: true })
            .then(async () => {
                return true;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async deleteIdNotification(id: number): Promise<User> {
        return await UserSchema.findOneAndUpdate({ _id: id }, { $unset: {idNotification: 1}}, { new: true })
            .then(async () => {
                return true;
            })
            .catch ( err => {
                logger.error(err);
                return undefined;
            });
    }
    async create(userInputDto: UserInputDto): Promise<User> {
        const userEntity = new UserBuilder(userInputDto.idUser).setEmail(userInputDto.email).setPassword(userInputDto.password).build();
        const user = new UserSchema(userEntity);
        return user.save()
            .then((userDocument: Document) => {
                const user: User = userDocument ? UserDao.toUser(userDocument) : undefined;
                return user;
            })
            .catch(err => {
                logger.error(err);
                return undefined;
            });
    }


}
