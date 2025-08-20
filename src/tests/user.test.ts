import request from "supertest";
import { app } from "../server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("User Routes", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should register a new user", async () => {
    const res = await request(app).post("/api/v1/users/register").send({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      password: "password123",
      role: "PATIENT",
    });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Verification OTP sent");
  });

  it("should verify email", async () => {
    const user = await prisma.user.create({
      data: {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        password: "password123",
        role: "PATIENT",
        verificationToken: "token123",
      },
    });
    const res = await request(app)
      .post("/api/v1/users/verify")
      .send({ token: "token123", otp: "123456" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Email verified");
  });

  // it("should login and return token", async () => {
  //   await prisma.user.create({
  //     data: {
  //       firstName: "Test",
  //       lastName: "User",
  //       email: "test@example.com",
  //       password: "password123",
  //       role: "PATIENT",
  //       isVerified: true,
  //     },
  //   });
  //   const res = await request(app)
  //     .post("/api/v1/users/login")
  //     .send({ email: "test@example.com", password: "password123" });
  //   console.log("Login Response body", res.body);

  //   expect(res.status).toBe(200);
  //   expect(res.body).toHaveProperty("accessToken");
  // });
});
