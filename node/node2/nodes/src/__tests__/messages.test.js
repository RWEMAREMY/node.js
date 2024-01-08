import supertest from "supertest";
import mongoose from "mongoose";
import { app } from "../utils/dev.js";
import { messageRequest } from "../utils/dummytest.js";
import dotenv from "dotenv";

// CONFIGURE DOTENV
dotenv.config();

// CONNECTING TO THE DATABASE BEFORE EACH TEST
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URL_TEST)
});

// CLOSING THE DATABASE CONNECTION AFTER EACH TEST
afterEach(async () => {
  await mongoose.connection.close();
});

/**
 * 
 * MESSAGES TESTS
 * 
 */

// TEST FOR READING MESSAGES
describe("GET /messages", () => {
    it("should return all messages in the database", async () => {
        const res = await supertest(app).get("/api/messages");
        expect(res.status).toBe(200);
    })
});

// TEST FOR CREATING A MESSAGE
describe("POST /messages", () => {

  it("should create a new message", async () => {

    const res = await supertest(app).post("/api/messages").send(messageRequest);

    expect(res.status).toBe(201);

  });

});