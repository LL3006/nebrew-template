import express from "express";
import http from "http";
import config from "../../config";

let app = express();

const port = process.env.PORT || config.port;
const server = http.createServer(app);

app.use(config.path.index, express.static(__dirname + "./../.."));


server.listen(port, () => console.log("Listening on port " + port));