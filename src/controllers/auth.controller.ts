import { Request, Response } from "express";
import { HttpStatusCode } from "../util/http-status-codes.enum";
import { User } from "../models/user.model";
import { UserResource } from "../resources/user.resource";
import { UserInputDto } from "../dtos/userInput.dto";
import { UserOutputDto } from "../dtos/userOutput.dto";
import { ConverterModelsToDtosService } from "../services/converterModelsToDtos.service";
export class AuthController {
    private userResource: UserResource;
    private converterModelsToDtosService: ConverterModelsToDtosService;

    constructor() {
        this.userResource = new UserResource();
        this.converterModelsToDtosService = new ConverterModelsToDtosService();
    }

    async logIn(req: Request, res: Response): Promise<any> {
        const userDto: UserInputDto = req.body;
        const user: User = await this.userResource.findByIdUserAndPassword(userDto);
        const userOutputDto: UserOutputDto = this.converterModelsToDtosService.toUserOutputDto(user);
        user ? res.status(HttpStatusCode.OK).json(userOutputDto) : res.status(HttpStatusCode.NOT_FOUND).end();
    }
    async singUp(req: Request, res: Response): Promise<any> {
        const idUser: User = await this.userResource.findByIdUser(req.body.idUser);
        const email: User = await this.userResource.findByEmail(req.body.email);
        if (!idUser && !email) {
            const userDto: UserInputDto = req.body;
            const user: User = await this.userResource.create(userDto);
            const userOutputDto: UserOutputDto = this.converterModelsToDtosService.toUserOutputDto(user);
            user ? res.status(HttpStatusCode.CREATED).json(userOutputDto) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
        } else {
            res.status(HttpStatusCode.CONFLICT).end();
        }
    }

}
