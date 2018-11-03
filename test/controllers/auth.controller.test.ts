import request from "supertest";
import app from "../../src/app";
import { HttpStatusCode } from "../../src/util/http-status-codes.enum";
import { UserInputDto } from "../../src/dtos/userInput.dto";
import { UserOutputDto } from "../../src/dtos/userOutput.dto";
const chai = require("chai");
const expect = chai.expect;

const END_POINT = "/auth";
const LOGIN = "/login";
const SINGUP = "/singup";

describe("POST " + END_POINT + LOGIN, () => {
    it(`expect return: ${HttpStatusCode.OK} + userOutputDto`, (done) => {
        const userInputDto: UserInputDto = { idUser: "Jesusz27", password: "1234a" };
        return request(app).post(END_POINT + LOGIN)
            .send(userInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const userOutputDto: UserOutputDto = res.body;
                expect(userOutputDto.idUser).to.equal(userInputDto.idUser);
                done();
            });
    });
});

describe("POST " + END_POINT + SINGUP, () => {
    it(`expect return: ${HttpStatusCode.CREATED} + userOutputDto `, (done) => {
        const userInputDto: UserInputDto = { idUser: "Master", password: "1234a" , email : "master@master.com" };
        return request(app).post(END_POINT + SINGUP)
            .send(userInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.CREATED);
                const userOutputDto: UserOutputDto = res.body;
                expect(userOutputDto.idUser).to.equal(userInputDto.idUser);
                done();
            });
    });
});

describe("POST " + END_POINT + SINGUP, () => {
    it(`expect return: ${HttpStatusCode.CONFLICT} `, (done) => {
        const userInputDto: UserInputDto = { idUser: "Jesusz27", password: "1234a" , email : "master@master.com" };
        return request(app).post(END_POINT + SINGUP)
            .send(userInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.CONFLICT);
                done();
            });
    });
});