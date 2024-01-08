
/**
 * 
 * CREATE BLOG
 * 
 */

const create = {

tags: ["Blog"], // Section for blog CRUD operations
description: "Creating a blog using the author's input from request body", // Operation's objective
operationId: "createBlog", // Unique operation id


// Expected request parameters
parameters: [
    {
        name: "credentials", // Parameter name
        in: "header", // Parameter location
        schema: {
            $ref: "#/components/schemas/credentials", // Credentials model
        },
    }
],

// Expected request body
requestBody: {
    content: {

        // Request body content type
        "application/json": {
            schema: {
                $ref: "#/components/schemas/BlogInput", // BlogInput model
            },
        },
    },
},

// Expected responses
responses: {

    // Response code -- 201: Created
    201: {
        description: "Blog was created successfully",
        content: {

            // Response content type
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Blog", // Blog model containing the blog data
                },
            },
        },
    },

    // Response code -- 500: Bad Request
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

export { create };