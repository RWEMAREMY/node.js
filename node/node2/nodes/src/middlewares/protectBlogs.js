import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import getCookie from "../utils/cookies.js";
import User from "../models/user.js";
import errorFunc from "../utils/errors.js";

// CONFIGURE DOTENV
dotenv.config();

const protectBlogs = async (req, res, next) => {

    // Get the token from the request
    const token = getCookie(req);

    // Verify the token
    try {

        const { id } = jwt.verify(token, process.env.USER_SECRET);

        // Find the user using the id
        const user = await User.findOne({ _id: id });
        
        // Check if the user exists
        if (user.role === "admin") {
            next();
        }

        else {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

    } 
    
    // Catch any errors
    catch (error) {
        const message = error.message;
        const status = 500;
        console.log(error)
        errorFunc(res, message, status);
    }

};

export default protectBlogs;
