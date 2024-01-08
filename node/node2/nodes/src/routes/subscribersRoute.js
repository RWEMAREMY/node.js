import express from "express";
import subscriberController from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/", subscriberController.addSubscriber);
router.get("/", subscriberController.getSubscribers);

export default router;