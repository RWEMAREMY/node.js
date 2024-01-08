import express from "express";
import messagesController from "../controllers/messagesController.js";

const router = express.Router();

router.post("/", messagesController.createMessage);
router.get("/", messagesController.readMessages);

export default router;