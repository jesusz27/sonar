import errorHandler from "errorhandler";
import app from "./app";
import Socket from "./socket/socket";
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());
/**
 * Start Express server.
 */
const options = {
  pingTimeout: 3000,
  pingInterval: 3000
};
const serve = require("http").Server(app);
const io = require("socket.io")(serve, options);
const socket: Socket = new Socket();
socket.io = io;
socket.loadSocket();
const server = serve.listen(app.get("port"), () => {
  console.log(
    "  >App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  >Press CTRL-C to stop\n");
});



export default server;
