import { UserDao } from "../services/dao/user.dao";
import { User } from "../models/user.model";
import { UserInputDto } from "../dtos/userInput.dto";

export class UserResource {
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    async create(userInputDto: UserInputDto): Promise<User> {
        return await this.userDao.create(userInputDto);
    }
    async findByIdUser(idUser: string): Promise<User> {
        return await this.userDao.findByIdUser(idUser);
    }
    async findByEmail(email: string): Promise<User> {
        return await this.userDao.findByEmail(email);
    }
    async findByIdNotification(idNotification: string): Promise<User> {
        return await this.userDao.findByIdNotification(idNotification);
    }
    async findAll(): Promise<User[]> {
        return await this.userDao.findAll();
    }
    async findByIdUserAndPassword(userInputDto: UserInputDto): Promise<User> {
        return await this.userDao.findByIdUserAndPassword(userInputDto);
    }
    async updateIdNotification(id: number, idNotification: string): Promise<User> {
        return await this.userDao.updateIdNotification(id, idNotification);
    }
    async updateAvatar(id: number, avatar: string): Promise<User> {
        return await this.userDao.updateAvatar(id, avatar);
    }
    async updatePassword(id: number, password: string): Promise<User> {
        return await this.userDao.updatePassword(id, password);
    }
    async deleteIdNotification(id: number): Promise<User> {
        return await this.userDao.deleteIdNotification(id);
    }
    async findByIdUserAndIdNotification(userInputDto: UserInputDto): Promise<User> {
        return await this.userDao.findByIdUserAndIdNotification(userInputDto);
    }
}