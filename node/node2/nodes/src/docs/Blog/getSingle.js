
/**
 * 
 * GET SINGLE BLOG
 * 
 */

const getSingle = {

tags: ["Blog"], // Section for blog CRUD operations
description: "Reading a single blog", // Operation's objective
operationId: "getSingle", // Unique operation id

// Expected parameters
parameters: [
    {
        name: "id", // Id of the blog to be retrieved
        in: "path", // Parameter is in the path
        schema: {
            $ref: "#/components/schemas/_id", // Id model
        },
        required: true, // Parameter is required
        description: "ID of the blog to be retrieved",
    }
],

// Expected responses from the server

responses: {

// Response code -- 200: OK
200: {
    description: "Blog was retrieved successfully",
    content: {

        // Response content type
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Blog", // Blog model
            },
        },
    },
},

// Response code -- 404: Not Found
'400': {
    description: "Blog not found",
    content: {

        // Response content type
        "application/json": {
            schema: {
                description: "Blog not found",
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
                description: "Server error",
            },
        },
    },
},

},

};

export { getSingle };