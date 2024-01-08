
/**
 * 
 * LOGIN USER
 * 
 */

const login = {

    tags: ["User"], // Section for user authentication operations
    description: "User login using information from the request body", // Operation's objective
    operationId: "login", // Unique operation id

    // Expected request body
    requestBody: {
        content: {

            // Request body content type
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/UserLogin", // UserInput model
                },
            },
        },
    },

    // Expected responses
    responses: {

        // Response code -- 200: OK
        200: {
            description: "User was logged in successfully",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User", // User model containing the user data after successful login
                    },
                },
            },
        },

        // Response code -- 500: Server Error
        500: {
            description: "Server error",
            content: {

                // Response content type
                "application/json": {
                    schema:{
                        message: "Server error",
                    },
                },
            },
        },

        // Response code -- 400: Bad Request
        400: {
            description: "Invalid credentials",
            content: {

                // Response content type
                "application/json": {
                    schema:{} // Empty schema
                },
            },
        },

        // Response code -- 404: Not Found
        404: {
            description: "User not found",
            content: {

                // Response content type
                "application/json": {
                    schema:{
                        error: "User not found",
                        message: "User not found",
                    },
                },
            }
        },
    },

};

export { login };