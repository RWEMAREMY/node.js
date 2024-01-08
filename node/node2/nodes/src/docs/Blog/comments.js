
/**
 * 
 * COMMENT ON BLOG
 * 
 */

const comment = {

tags: ["Blog"], // Section for blog CRUD operations
description: "Commenting on a blog", // Operation's objective
operationId: "commentBlog", // Unique operation id

// Expected request parameters
parameters: [
    
    // Blog ID
    {
        name: "id", // Parameter name
        in: "path", // Parameter location
        schema: {
            $ref: "#/components/schemas/id", // Blog ID
        },
        description: "Blog ID for blog which to direct the comment", // Parameter description
    }
],

// Expected request body
requestBody: {
    content: {

        // Request body content type
        "application/json": {
            schema: {
                $ref: "#/components/schemas/BlogComment", // CommentInput model
            },
        },
    },
},

// Expected responses
responses: {

    // Response code -- 201: Created
    201: {
        description: "Comment was created successfully",
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

    // Response code -- 404: Not Found
    404: {
        description: "Blog not found",
        content: {

            // Response content type
            "application/json": {
                schema:{} // Empty schema
            },
        },
    },
},

};

export { comment };