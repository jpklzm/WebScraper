const request = require("supertest");
const app = require("../src/app");
const expect = require("chai").expect;

it("should respond with 200 on get for /userList", function (done) {
  request(app).get("/userList/").expect(200).expect("Content-Type", /json/);
  done();
});
