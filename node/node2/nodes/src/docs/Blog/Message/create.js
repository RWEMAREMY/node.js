
/**
 * 
 * CREATE MESSAGE
 * 
 */

const createMessage = {

    tags: ["Message"], // Section for messages submitted by visitors
    description: "Create a message", // Operation's objective
    operationId: "createMessage", // Unique operation id

    // Expected parameters
    parameters: [],

    // Expected request body
    requestBody: {
        content: {

            // Request body content type
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/MessageRequest", // Message model
                },
            },
        },
    },

    // Expected responses from the server
    responses: {

        // Response code -- 201: Created
        201: {
            description: "Message was created successfully",
            content: {

            // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Message", // Message model
                    },
                },
            },
        },

        // Response code -- 400: Bad Request
        400: {
            description: "Invalid message",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        message: "Invalid message",
                    }, // Empty schema
                },
            },
        },

        // Response code -- 500: Internal Server Error
        500: {
            description: "Server error",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        message: "Server error",
                    }, // Empty schema
                },
            },
        },
    },

};

export { createMessage };