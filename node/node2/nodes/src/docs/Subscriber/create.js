

/**
 * 
 * SUBSCRIBE
 * 
 */

const subscribe = {

    tags: ["Newsletter"], // Section for users who want to subscribe to the newsletter
    description: "Subscribe to the newsletter", // Operation's objective
    operationId: "subscribe", // Unique operation id

    // Expected request parameters
    parameters: [],

    // Expected request body
    requestBody: {
        content: {

            // Request body content type
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SubscriberRequest", // Subscriber model
                },
            },
    },

},

    // Expected responses
    responses: {

        // Response code -- 201: Created
        201: {
            description: "Subscriber was created successfully", // Response description
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        data: "Subscriber was created successfully",
                    }, // Empty schema
                },
            },
        },

        // Response code -- 500: Internal Server Error
        500: {
            description: "Server error", // Response description
            content: {}, // Empty content
        },
    },

}

export { subscribe };