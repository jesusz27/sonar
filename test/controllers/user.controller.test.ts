import request from "supertest";
import app from "../../src/app";
import { HttpStatusCode } from "../../src/util/http-status-codes.enum";
import { UserOutputDto } from "../../src/dtos/userOutput.dto";
const chai = require("chai");
const expect = chai.expect;

const END_POINT = "/user";
const ID = "/:idUser";

describe("GET " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.OK} + UserOutputDto[]`, (done) => {
        return request(app).get(END_POINT)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const userOutputDto: UserOutputDto[] = res.body;
                expect(userOutputDto.length).to.be.above(2);
                done();
            });
    });
});
describe("GET " + END_POINT + ID, () => {
    it(`expect return: ${HttpStatusCode.OK} + UserOutputDto`, (done) => {
        const idUser = "Jesusz27";
        return request(app).get(END_POINT + "/" + idUser)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const userOutputDto: UserOutputDto = res.body;
                expect(userOutputDto.idUser).to.equal(idUser);
                done();
            });
    });
});