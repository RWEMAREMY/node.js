import servers from "./servers.js";
import { tags } from "./tags.js";
import { components } from "./components.js";
import paths from "./paths.js";

const options = {
  definition: {
    openapi: "3.0.3", // Present supported openapi version
    info: {
      title: "ATLP My Brand API", // Title (required)
      description: "Docs for ATLP Capstone Project My Brand", // Description (required)
      version: "1.0.0", // Version (required)
      contact: {
        name: "Nishimwe Prince", // Name of the author
        email: "princeelysee@gmail.com", // Email of the author
        url: "https://atlp-my-brand-nishimwe.web.app/", // Website of the author
      },
    },
      servers, // Servers imported from src/docs/servers.js
      tags, // Tags imported from src/docs/tags.js
      components, // Components imported from src/docs/components.js,
      paths, // Paths imported from src/docs/paths.js
  },
  apis: ["../routes/*.js", "../docs/**/*.js"], // Path to the API docs
};
export { options };
