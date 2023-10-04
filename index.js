const jsonServer = require("json-server")//importar el jsonserver
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //se puede usar cualquier puerto.

server.use(middlewares);
server.user(router);
server.listen(port);