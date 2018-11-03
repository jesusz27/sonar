import request from "supertest";
import app from "../../src/app";
import { HttpStatusCode } from "../../src/util/http-status-codes.enum";
import { ContactOutputDto } from "../../src/dtos/contactOutput.dto";
import { ContactInputDto } from "../../src/dtos/contactInput.dto";
import logger from "../../src/util/logger";
const chai = require("chai");
const expect = chai.expect;

const END_POINT = "/contact";
const IDUSER = "/:idUser";
const ID = "/:id";
const STATUS = "/:status";

describe("POST " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.CREATED} + ContactOutputDto`, (done) => {
        const contactInputDto: ContactInputDto = { codUser: "Jesus1352", codContact: "Smith" };
        return request(app).post(END_POINT)
            .send(contactInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.CREATED);
                const contactOutputDto: ContactOutputDto = res.body;
                expect(contactOutputDto.idUser).to.equal(contactInputDto.codContact);
                done();
            });
    });
});
describe("POST " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.INTERNAL_SERVER_ERROR} `, (done) => {
        const contactInputDto: ContactInputDto = { codUser: "Jesus1352", codContact: "asdasda" };
        return request(app).post(END_POINT)
            .send(contactInputDto)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.INTERNAL_SERVER_ERROR);
                done();
            });
    });
});

describe("GET " + END_POINT + IDUSER, () => {
    it(`expect return: ${HttpStatusCode.OK} + ContactOutputDto[]`, (done) => {
        const idUser = "Jesusz27";
        return request(app).get(END_POINT + "/" + idUser)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const contactOutputDto: ContactOutputDto[] = res.body;
                expect(contactOutputDto[0].idUser).to.equal("Jesus1352");
                expect(contactOutputDto[0].status).to.equal("SELECTED");
                done();
            });
    });
});

describe("PUT " + END_POINT + ID + STATUS, () => {
    it(`expect return: ${HttpStatusCode.OK} + ContactOutputDto`, (done) => {
        const id = "5b49ba1ff3dc292dc0f86437";
        const status = "NOSELECTED";
        return request(app).put(END_POINT + "/" + id + "/" + status)
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const contactOutputDto: ContactOutputDto = res.body;
                expect(contactOutputDto.status).to.equal(status);
                done();
            });
    });
});
describe("PUT " + END_POINT + ID , () => {
    it(`expect return: ${HttpStatusCode.NOT_FOUND} `, (done) => {
        const id = "zzzzzzzzzzzzz";
        return request(app).put(END_POINT + "/" + id )
            .end(async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.NOT_FOUND);
                done();
            });
    });
});
describe("DELETE " + END_POINT + ID, () => {
    it(`expect return: ${HttpStatusCode.NO_CONTENT}`, (done) => {
        const id = "5b49ba1ff3dc292dc0f86437";
        return request(app).delete(END_POINT + "/" + id)
            .end( async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.NO_CONTENT);
                done();
            });
    });
});
describe("DELETE " + END_POINT + ID, () => {
    it(`expect return: ${HttpStatusCode.NOT_FOUND}`, (done) => {
        const id = "adsd4564";
        return request(app).delete(END_POINT + "/" + id)
            .end( async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.NOT_FOUND);
                done();
            });
    });
});