const components = {
  schemas: {
    /**
     *
     * ID
     *
     */

    _id: {
      type: "string",
      description:
        "For BLOG: Used to DELETE, UPDATE, and READ a single blog. For THE REST: Used as a unique identifier of the modal -- Automatically assigned by MongoDB",
      example: "640f6ed7d8f101c16399e15c",
    },

    /**
     *
     * AUTHORIZATION TOKEN
     *
     */

    credentials: {
      type: "string", // Data type of the token
      description: "JWT Authorization token captured after successful login", // Description
      example:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGY0Y2VkMDRjZDgzYzRmOTUzYTYzOSIsImlhdCI6MTY3ODk1MDU4MCwiZXhwIjoxNjc5NTU1MzgwfQ.wPg7uZSA_X6zyDCnPslOFgXF_dAejxGL2Khnum193oU", // Example of the auth token
    },

    /**
     *
     * BLOG SCHEMA
     *
     */

    /**
     * Blog Response
     */
    Blog: {
      type: "object", // Data type
      properties: {
        // Blog Id
        _id: {
          type: "string", // Data type
          description:
            "Single blog Id that is automatically assigned to the blog by MongoDB", // Description
          example: "640f6ed7d8f101c16399e15c", // Example
        },

        // Blog Title
        title: {
          type: "string", // Data type
          description: "Blog title (Provided by the author)", // Description
          example: "Understanding the basics of React", // Example
        },

        // Blog Content
        body: {
          type: "string", // Data type
          description: "Blog content/body (Provided by the author)", // Description
          example:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.", // Example
        },

        // Blog Author
        author_name: {
          type: "string", // Data type
          description: "Name of the blog author", // Description
          example: "John Doe", // Example
        },

        // Blog Author Twitter handle
        author_twitter: {
          type: "string", // Data type
          description: "Twitter handle of the blog author", // Description
          example: "https://www.twitter.com/nishimweprince", // Example
        },

        // Blog Author Github handle
        author_github: {
          type: "string", // Data type
          description: "Github handle of the blog author", // Description
          example: "https://github.com/nishimweprince", // Example
        },

        // Blog Author LinkedIn handle
        author_linkedin: {
          type: "string", // Data type
          description: "LinkedIn handle of the blog author", // Description
          example: "https://www.linkedin.com/in/nishimweprince", // Example
        },

        // Blog Image
        image: {
          type: "string", // Data type
          description:
            "Blog image (Uploaded by the author while creating the blog)", // Description
          example:
            "https://res.cloudinary.com/nishimweprince/image/upload/v1620000000/blog-image.jpg", // Example
        },

        // Blog Likes
        likes: {
          type: "number", // Data type
          description: "Number of likes the blog has", // Description
          example: 0, // Example
        },

        // Blog Comments
        comments: {
          type: "array", // Data type
          description: "Array of comments the blog has", // Description
          items: {
            // Items
            type: "object", // Data type
            properties: {
              name: {
                type: "string", // Data type
                description: "Name of the commenter", // Description
                example: "John Doe", // Example
              },
              email: {
                type: "string", // Data type
                description: "Email of the commenter", // Description
                example: "atlpmybrand@gmail.com", // Email example
              },
              body: {
                type: "string", // Data type
                description: "Comment body", // Description
                example: "Fantastic blog, keep it up!", // Example
              },
            },
          },
        },

        // Blog Timestamp
        createdAt: {
          type: "string", // Data type
          description:
            "Date the blog was created (Automatically calculated by the api when submitting blog)", // Description
          example: "2021-05-01T12:00:00.000Z", // Example
        },

        // Blog Version Key
        __v: {
          type: "number", // Data type
          description: "Version key (Automatically assigned by MongoDB)", // Description
          example: 0, // Example
        },
      },
    },

    /**
     * Blog Request
     */
    BlogInput: {
      type: "object", // Data type of the blog input -- received from the frontend -- submitted by the user
      properties: {
        // Blog Title
        title: {
          type: "string", // Data type
          description: "Blog title (Provided by the author)", // Description
          example: "Understanding the basics of React", // Example
        },

        // Blog Content
        body: {
          type: "string", // Data type
          description: "Blog content/body (Provided by the author)", // Description
          example:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", // Example of blog content
        },

        // Blog Author
        author_name: {
          type: "string", // Data type
          description: "Name of the blog author", // Description
          example: "John Doe", // Example
        },

        // Blog Author Twitter handle
        author_twitter: {
          type: "string", // Data type
          description: "Twitter handle of the blog author", // Description
          example: "https://www.twitter.com/nishimweprince", // Example
        },

        // Blog Author Github handle
        author_github: {
          type: "string", // Data type
          description: "Github handle of the blog author", // Description
          example: "https://github.com/nishimweprince", // Example
        },

        // Blog Author LinkedIn handle
        author_linkedin: {
          type: "string", // Data type
          description: "LinkedIn handle of the blog author", // Description
          example: "https://www.linkedin.com/in/nishimweprince", // Example
        },

        // Blog Image
        image: {
          type: "string", // Data type
          description:
            "A base64 hash of an image uploaded by the user/author of the blog (Later uploaded to Cloudinary by the api)", // Description
          example:
            "https://res.cloudinary.com/nishimweprince/image/upload/v1620000000/blog-image.jpg", // Example
        },
      },
    },

    /**
     * Blog Comment Input
     */
    BlogComment: {
      type: "object", // Data type
      properties: {
        // Commentor name
        name: {
          type: "string", // Data type
          description:
            "Name of the commenter (Filled by the commentor themselves)", // Description
          example: "John Doe", // Example
        },

        // Commentor email
        email: {
          type: "string", // Data type
          description:
            "Email of the commenter (Filled by the commentor themselves)", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // Comment body
        body: {
          type: "string", // Data type
          description: "Comment body (Filled by the commentor themselves)", // Description
          example: "Fantastic blog, keep it up!", // Example
        },
      },
    },

    /**
     *
     *  USER SCHEMA
     *
     */

    /**
     * User Response
     */

    User: {
      type: "object", // User data type
      properties: {
        // User ID
        _id: {
          type: "string", // Data type
          description:
            "ID of the user (Assigned to the user automatically after successful registration in MongoDB)", // Description
          example: "640b18532f884cc066d42d5e",
        },

        // User name
        username: {
          type: "string", // Data type
          description: "Username of the user - not unique", // Description
          example: "John Doe", // Example
        },

        // User email
        email: {
          type: "string", // Data type
          description: "Email of the user - unique", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // User password
        password: {
          type: "string", // Data type
          description: "Password of the user", // Description
          example: "password", // Example
        },

        // User role
        role: {
          type: "string", // Data type
          description:
            "Role of the user (Default to 'admin' for the first user, and 'user' for the rest of registrations)", // Description
          example: "admin", // Example
        },

        // User timestamp
        createdAt: {
          type: "string", // Data type
          description:
            "Date the user was created (Automatically calculated by the api when submitting user)", // Description
          example: "2021-05-01T12:00:00.000Z", // Example
        },

        // User version key
        __v: {
          type: "number", // Data type
          description: "Version key (Automatically assigned by MongoDB)", // Description
          example: 0, // Example
        },
      },
    },

    /**
     * User Signup Request
     */

    UserSignup: {
      type: "object", // Data type
      properties: {
        // User name
        username: {
          type: "string", // Data type
          description: "Username of the user - not unique", // Description
          example: "John Doe", // Example
        },

        // User email
        email: {
          type: "string", // Data type
          description: "Email of the user - unique", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // User password
        password: {
          type: "string", // Data type
          description: "Password of the user", // Description
          example: "password", // Example
          minLength: 6, // Minimum length
        },
      },
    },

    /**
     * User Login Request
     */

    UserLogin: {
      type: "object", // Data type
      properties: {
        // User email
        email: {
          type: "string", // Data type
          description: "Email of the user - unique", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // User password
        password: {
          type: "string", // Data type
          description: "A password the user has provided when signup up", // Description of the login password
        },
      },
    },

    /**
     *
     * MESSAGES SCHEMA
     *
     */

    /**
     * Message Request
     */

    MessageRequest: {
      type: "object", // Data type
      properties: {
        // Sender's name
        name: {
          type: "string", // Data type
          description: "Name of the sender", // Description
          example: "John Doe", // Example
        },

        // Sender's email
        email: {
          type: "string", // Data type
          description: "Email of the sender", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // Message body
        body: {
          type: "string", // Data type
          description: "Message body", // Description
          example: "Hello, I would like to work with you", // Example
        },
      },
    },

    /**
     * Message Response
     */

    Message: {
      type: "object", // Data type
      properties: {
        // Message ID
        _id: {
          type: "string", // Data type
          description: "Message ID (automatically assigned by MongoDB)", // Description
          example: "640b18532f884cc066d42d5e", // Example
        },

        // Sender's name
        name: {
          type: "string", // Data type
          description: "Name of the sender", // Description
          example: "John Doe", // Example
        },

        // Sender's email
        email: {
          type: "string", // Data type
          description: "Email of the sender", // Description
          example: "atlpmybrand@gmail.com", // Example
        },

        // Message body
        body: {
          type: "string", // Data type
          description: "Message body", // Description
          example: "Hello, I would like to work with you", // Example
        },

        // Message date
        date: {
          type: "string", // Data type
          description: "Date the message was sent", // Description
          example: "2021-05-01T12:00:00.000Z", // Example
        },

        // Message Version Key
        __v: {
          type: "number", // Data type
          description: "Version key (automatically assigned by MongoDB)", // Description
          example: 0, // Example
        },
      },
    },

    /**
     *
     * SUBSCRIBERS SCHEMA
     *
     */

    /**
     * Subscriber Request
     */

    SubscriberRequest: {
      type: "object", // Data type
      properties: {
        // Subscriber email
        email: {
          type: "string", // Data type
          description:
            "Email of the subscriber (To receive the portfolio's newsletter)", // Description
          example: "atlpmybrand@gmail.com", // Example
        },
      },
    },
  },
};

export { components };
