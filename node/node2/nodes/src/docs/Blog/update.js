/**
 *
 * UPDATE BLOG
 *
 */

const update = {
  tags: ["Blog"], // Section for blog CRUD operations
  description: "Updating a blog using its ID", // Operation's objective
  operationId: "updateBlog", // Unique operation id

  // Expected parameters
  parameters: [
    {
      name: "id", // Id of the blog to be updated
      in: "path", // Parameter is in the path
      schema: {
        $ref: "#/components/schemas/_id", // Id model
      },
      required: true, // Parameter is required
      description: "ID of the blog to be updated",
    },
  {
      name: "credentials", // Parameter name
      in: "header", // Parameter location
      schema: {
          $ref: "#/components/schemas/credentials", // Credentials model
      },
  }
],

  // Expected responses
  responses: {
    // Response code -- 200: OK
    200: {
      description: "Blog was updated successfully",
      content: {
        // Response content type
        "application/json": {
          schema: {
            description: "Blog was updated successfully",
            $ref: "#/components/schemas/Blog", // Blog model
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
          schema: {
            description: "Blog not found",
          },
        },
      },
    },

    // Response code -- 500: Internal Server Error
    500: {
      description: "Internal Server Error",
      content: {
        // Response content type
        "application/json": {
          schema: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
};

export { update };
