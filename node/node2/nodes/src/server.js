import dotenv from "dotenv";
import morgan from "morgan";
import { createServer, con } from "./utils/app.js";


// CONFIGURE DOTENV
dotenv.config();

// CREATE AN APP INSTANCE FROM EXPRESS FRAMEWORK
const app = createServer();

// HOME ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        message: "You have reached NISHIMWE's API"
    });
});


// MORGAN FOR LOGS
if (process.env.NODE_ENV === "development") app.use(morgan('combined'));


// DEFINING PORT AND HOST
const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";


// LISTENING TO SERVER INSTANCE
const server = app.listen(port);


// PROMISE TO AWAIT FOR SERVER AND MONGODB CONNECTION
Promise.all([con(), server])
.then(() => {
    console.log(`MongoDB connected... at ${process.env.MONGODB_URL_TEST}`);
    console.log(`Server running at http://${host}:${port}`);
})
.catch((err) => {
    console.log(err);
});