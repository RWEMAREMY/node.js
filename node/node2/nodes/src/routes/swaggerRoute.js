import express from "express";
import { options } from "../docs/index.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const router = express.Router();

router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));

export default router;