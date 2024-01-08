import { getAll } from "./Blog/getAll.js";
import { getSingle } from "./Blog/getSingle.js";
import { update } from "./Blog/update.js";
import { create } from "./Blog/create.js";
import { del } from "./Blog/delete.js";
import { signup } from "./User/signup.js";
import { login } from "./User/login.js";
import { comment } from "./Blog/comments.js";
import { createMessage } from "./Message/create.js";
import { getMessages } from "./Message/read.js";
import { subscribe } from "./Subscriber/create.js";

const paths = {
        "/blogs": {
          get: getAll,
          post: create,
        },
        "/blogs/{id}": {
          get: getSingle,
          put: update,
          delete: del,
        },
        "/blogs/{id}/comment": {
          put: comment,
        },
        "/signup": {
          post: signup,
        },
        "/login": {
          post: login,
        },
        "/messages": {
          post: createMessage,
        },
        "/messages": {
          get: getMessages
        },
        "/newsletter": {
          post: subscribe
        },
};

export default paths;