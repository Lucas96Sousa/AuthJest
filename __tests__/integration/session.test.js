const request = require("supertest");

const app = require("../../src/app");

const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Luca",
      email: "luca@alpha.com",
      password_hash: "1233312"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(200);
  });
});
