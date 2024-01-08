import supertest from "supertest";
import mongoose from "mongoose";
import { app } from "../utils/dev.js";
import {
  blogId,
  blogRequest,
  blogUnique,
  blogUpdate,
  userLogin,
} from "../utils/dummytest.js";
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
 * BLOGS TESTS
 *
 */

/*
 * LOGGING IN A USER
 */

let token = null;

// TEST FOR LOGGING IN A USER
describe("POST /api/login", () => {
  it("Should login a user", async () => {
    const res = await supertest(app).post("/api/login").send(userLogin);
    expect(res.status).toBe(200);
    token = res.body.token;
  });
});

/*
 * READING BLOGS
 */

describe("GET /blogs", () => {
  // READING ALL BLOGS
  describe("Reading all blogs", () => {
    it("should return all blogs in the database", async () => {
      const res = await supertest(app).get("/api/blogs");

      expect(res.status).toBe(200);
    });
  });

  // READING A SINGLE BLOG
  describe("Reading a single blog", () => {
    it("should return a single blog", async () => {
      const res = await supertest(app).get(`/api/blogs/${blogId}`);

      expect(res.status).toBe(200);
    });
  });

  // WHEN THE BLOG DOES NOT EXIST
  describe("When the blog does not exist", () => {
    it("should return a 404 error", async () => {
      const res = await supertest(app).get(
        `/api/blogs/5f8f5f5f5f5f5f5f5f5f5f5f`
      );

      expect(res.status).toBe(404);
    });
  });
});

/*
 * CREATING A BLOG
 */

describe("POST /blogs", () => {
  // WHEN THE BLOG IS UNIQUE
  describe("When the blog is unique", () => {
    it("Should create a new blog", async () => {
      const res = await supertest(app)
        .post("/api/blogs")
        .send(blogUnique)
        .set({ credentials: token });

      expect(res.status).toBe(201);
    });
  });

  // WHEN THE BLOG ALREADY EXISTS
  describe("When the blog already exists", () => {
    it("Should not create a new blog", async () => {
      const res = await supertest(app)
        .post("/api/blogs")
        .send(blogRequest)
        .set({ credentials: token });

      expect(res.status).toBe(409);
    });
  });
});

/*
 * UPDATING A BLOG
 */

describe("PUT /blogs", () => {
  // WHEN THE BLOG EXISTS
  describe("When the blog exists", () => {
    it("Should update the blog", async () => {
      const res = await supertest(app)
        .put(`/api/blogs/${blogId}`)
        .send(blogUpdate)
        .set({ credentials: token });

      expect(res.status).toBe(201);
    });
  });

  // WHEN THE BLOG DOES NOT EXIST
  describe("When the blog does not exist", () => {
    it("Should return a 404 error of blog not found", async () => {
      const res = await supertest(app)
        .put(`/api/blogs/5f8f5f5f5f5f5f5f5f5f5f5f`)
        .send(blogRequest)
        .set({ credentials: token });

      expect(res.status).toBe(404);
    });
  });
});

/*
 * DELETING A BLOG
 */

describe("DELETE /blogs", () => {
  // WHEN THE BLOG DOES NOT EXIST
  describe("When the blog does not exist", () => {
    it("Should return a 404 error of blog not found", async () => {
      const res = await supertest(app)
        .delete(`/api/blogs/5f8f5f5f5f5f5f5f5f5f5f5f`)
        .set({ credentials: token });

      expect(res.status).toBe(404);
    });
  });
});
