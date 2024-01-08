import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import messagesRoute from "./messagesRoute.js"
import subscribersRoute from "./subscribersRoute.js"
import swaggerRoute from "./swaggerRoute.js"

const router = express.Router()

// ALL ROUTES


// BLOG ROUTE
router.use("/blogs", blogRoute)

// SIGNUP ROUTE
router.use("/signup", signupRoute)

// LOGIN ROUTE
router.use("/login", loginRoute)

// MESSAGES ROUTER
router.use("/messages", messagesRoute)

// SUBSCRIBER ROUTE
router.use("/newsletter", subscribersRoute)

// SWAGGER ROUTE
router.use("/docs", swaggerRoute)

export default router