const Hapi = require("@hapi/hapi");
const server = require("../server.js"); // Import the Hapi server instance
const request = require("supertest");

describe("User Registration API", () => {
  test("Should create a new user", async () => {
    const res = await request(server.listener) // Hapi requires `.listener`
      .post("/register") // Ensure the correct route
      .send({
        name: "Test example",
        email: "test@example.com",
        password: "test@123",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("userId");
  });
});
