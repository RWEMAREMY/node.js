import supertest from "supertest";
import mongoose from "mongoose";
import { app } from "../utils/dev.js";
import { userLogin, userSignup, userUnique, userWrongCredentials } from "../utils/dummytest.js";
import dotenv from "dotenv";

// CONFIGURE DOTENV
dotenv.config();

// CONNECTING TO THE DATABASE BEFORE EACH TEST
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URL_TEST);
});

// CLOSING THE DATABASE CONNECTION AFTER EACH TEST
afterEach(async () => {
  await mongoose.connection.close();
});

/**
 *
 * USERS TESTS
 *
 */


/* 
  * SIGNING UP A USER
*/

describe("POST /api/signup", () => {

  // WHEN THE USER IS UNIQUE
  describe("When the user is unique", () => {

    it("Should create a new user", async () => {
      const response = await supertest(app).post("/api/signup").send(userUnique);
      expect(response.status).toBe(201);
    });

  });

  // WHEN THE USER IS NOT UNIQUE
  describe("When the user is not unique", () => {
      
      it("Should not create a new user", async () => {
        const response = await supertest(app).post("/api/signup").send(userSignup);
        expect(response.status).toBe(409);
      });
  
  });

});


/*
  * LOGGING IN A USER
*/

let token = null;

// TEST FOR LOGGING IN A USER
describe("POST /api/login", () => {

  // WHEN THE USER EXISTS
  describe("When the user exists", () => {
      
      it("Should login a user", async () => {
        const res = await supertest(app).post("/api/login").send(userLogin);
        expect(res.status).toBe(200);
        token = res.body.token;
      });
  
  });

  // WHEN THE USER DOES NOT EXIST
  describe("When the user does not exist", () => {

    it("Should return a 404 error of invalid credentials", async () => {

      const res = await supertest(app).post("/api/login").send(userWrongCredentials);
      expect(res.status).toBe(404);
      expect(res.body.message).toBe("Invalid credentials");

    });

  });

});