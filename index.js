"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const path_1 = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const preRender = require("prerender-node");
const compression = require("compression");
const path = require("path");
exports.app = express();
exports.app.use(cors());
exports.app.use(compression());
exports.app.use(bodyParser.json({ limit: "50mb" }));
exports.app.use(preRender);
exports.app.use(express.static(path_1.join(__dirname, "assets")));
//app.use(extractToken);
//app.use(redirect);
const server = new http_1.Server(exports.app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.app.get("*", (request, response) => {
    if ([
        ".js",
        ".ico",
        ".css",
        ".png",
        ".jpg",
        ".woff2",
        ".woff",
        ".ttf",
        ".svg",
        ".webmanifest"
    ].filter(ext => request.url.indexOf(ext) > 0).length > 0) {
        response.sendFile(path.resolve(`./public/${request.url}`));
    }
    else {
        response.sendFile(path.resolve("./public/index.html"));
    }
});
exports.io = require("socket.io")(server);
//# sourceMappingURL=index.js.map