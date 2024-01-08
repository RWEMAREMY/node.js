
/**
 * 
 * USER REGISTRATION
 * 
 */

const signup = {

    tags: ["User"], // Section for user authentication operations
    description: "User registration using information from the request body", // Operation's objective
    operationId: "signup", // Unique operation id

    // Expected request body
    requestBody: {
        content: {

            // Request body content type
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/UserSignup", // UserInput model
                },
            },
        },
    },

    // Expected responses
    responses: {

        // Response code -- 201: Created
        201: {
            description: "User was created successfully",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User", // User model containing the user data after successful registration
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

    },

};

export { signup };