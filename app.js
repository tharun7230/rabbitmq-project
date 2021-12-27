const Hapi = require("@hapi/hapi");
const sql = require("./dboperations");

// Add connection
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
 
 //Route

 server.route({
   method: "GET",
   path: "/hello",
   handler: (request, h) => {
     return "Hello World!";
   },
 });

 //starting server
  await server.start();
  console.log("Server running on port 3000");
};

init();
