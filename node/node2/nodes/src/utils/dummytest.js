/**
 * GENERATE RANDOM STRING
 */

const randomString = (length) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

/**
 *
 * MOCK DATA FOR TESTING
 *
 */

/*
 * MOCK DATA FOR TESTING THE MESSAGES ROUTE
 */

// CREATE MESSAGE
const messageRequest = {
  name: "John Doe",
  email: `${randomString(5)}@gmail.com`,
  body: "This message was written for testing purposes.",
};

/*
 * MOCK DATA FOR TESTING THE USERS ROUTE
 */

// UNIQUE USER
const userUnique = {
  username: "John Doe",
  email: `${randomString(5)}@gmail.com`,
  password: "123456",
  role: "user",
};

// EXISTING USER
const userSignup = {
  username: "John Doe",
  email: `atlpmybrand@gmail.com`,
  password: "123456",
  role: "admin",
};

// USER LOGIN
const userLogin = {
  email: `atlpmybrand@gmail.com`,
  password: "123456",
};

// USER WRONG CREDENTIALS
const userWrongCredentials = {
  email: `atlpnotmybrand@gmail.com`,
  password: "123456",
};

/*
 * MOCK DATA FOR TESING THE BLOGS ROUTE
 */

// UNIQUE BLOG
const blogUnique = {
  title: "Testing Cloudinary",
  body: `${randomString(100)}`,
  author_name: "Nishimwe Prince",
  author_twitter: "https://www.twitter.com/nishimweprince",
  author_linkedin: "https://www.linkedin.com/in/nishimweprince",
  author_github: "https://github.com/nishimweprince",
  image:
    "https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
};

// EXISTING BLOG
const blogRequest = {
  title: "Testing Cloudinary",
  body: "AWS is not it, really.. not never taught her not to ever think of himself as the best alien alive.",
  author_name: "Nishimwe Prince",
  author_twitter: "https://www.twitter.com/nishimweprince",
  author_linkedin: "https://www.linkedin.com/in/nishimweprince",
  author_github: "https://github.com/nishimweprince",
  image:
    "https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
};

// UPDATE BLOG
const blogUpdate = {
  name: "This is the updated blog",
  body: "This is the updated body...",
  author_name: "Niyontwali John",
};

// BLOG ID
const blogId = "641592b8f29be416221ac692";

export {
  messageRequest,
  userSignup,
  userUnique,
  blogUnique,
  blogRequest,
  userLogin,
  blogId,
  blogUpdate,
  userWrongCredentials,
};
