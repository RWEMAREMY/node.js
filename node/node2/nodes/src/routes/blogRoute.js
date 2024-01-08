import express from "express";
import blogController from "../controllers/blogController.js";
import protectBlogs from "../middlewares/protectBlogs.js";

const router = express.Router();

// GET ALL BLOGS
router.get("/", blogController.getBlogs);

// CREATE BLOG
router.post("/", protectBlogs, blogController.createBlog);

// GET SINGLE BLOG
router.get("/:id", blogController.getSingleBlog);

// UPDATE BLOG
router.put("/:id", protectBlogs, blogController.updateBlog);

// DELETE BLOG
router.delete("/:id", protectBlogs, blogController.deleteBlog);

// COMMENT ON BLOG
router.put("/:id/comment", blogController.commentOnBlog);

// LIKE BLOG
router.put("/:id/like", blogController.likeBlog);

export default router;