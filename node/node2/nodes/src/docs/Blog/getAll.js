
/**
 * 
 * GET ALL BLOGS
 * 
 */

const getAll = {
    // Request method type
    tags: ["Blog"],
    description: "Get all blogs",
    operationId: "getAll",
    parameters: [],


    // Expected responses from the server
    responses: {
        // Response code -- 200: OK
        200: {
            description: "Blogs were retrieved successfully",
            content: {
                // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Blog", // Blogs model
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
                    schema: {
                        code: 500,
                        message: "Server error",
                    },
                },
            },
        },
    },
};

export { getAll };