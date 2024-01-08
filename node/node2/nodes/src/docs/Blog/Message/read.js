
/**
 * 
 * READ MESSAGES
 * 
 */

const getMessages = {

    tags: ["Message"], // Section for messages submitted by visitors
    description: "Get all messages", // Operation's objective
    operationId: "getMessages", // Unique operation id

    // Expected parameters
    parameters: [],

    // Expected responses from the server
    responses: {

        // Response code -- 200: OK
        200: {
            description: "Messages were retrieved successfully",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Message", // Message model
                    },
                },
            },
        },

        // Response code -- 500: Internal Server Error
        500: {
            description: "Server error",
            content: {

                // Response content type
                "application/json": {
                    schema: {}, // Empty schema
                },
            },
        },
    },

};

export { getMessages };