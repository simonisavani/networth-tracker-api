const Hapi = require("@hapi/hapi");
const userRoutes = require("./src/routes/userRoutes");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
  routes: { cors: true },
});

// ✅ Ensure routes are correctly registered
server.route(userRoutes);

const init = async () => {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};
console.log(server.table().map(route => route.path));


init();

module.exports = server; // ✅ Export for testing
