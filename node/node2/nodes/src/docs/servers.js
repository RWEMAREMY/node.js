
const servers = [
    /**
     * DEV SERVER
     */
    {
        url: "http://localhost:4000/api", // Localhost for development environment
        description: "DEV",
    },

    /**
     * PROD SERVER
    */

    {
        url: process.env.HOST, // Production server hosted on Cyclic
        description: "PROD",
    }    
];

export default servers;