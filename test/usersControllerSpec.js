"use strict";

const chai = require("chai"),
  { expect } = chai,
  usersController = require("../controllers/usersController"),
  chaiHTTP = require("chai-http"),
  app = require("../main");

chai.use(chaiHTTP);

describe("usersController", () => {
  describe("/users GET", () => {
    it("it should GET all the users", done => {
      chai
        .request(app)
        .get("/users")
        .end((errors, res) => {
          expect(res).to.have.status(200);
          expect(errors).to.be.equal(null);
        });
        setTimeout(done, 300);
    });
  });
});
