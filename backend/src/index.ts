import * as express from "express";
import { Server } from "http";
import {Express, Request, Response} from "express";
import {join} from "path";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as preRender from "prerender-node";
import * as compression from "compression";
import * as path from "path";
export const app: Express = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(preRender);
app.use(express.static(join(__dirname, "assets")));

//app.use(extractToken);
//app.use(redirect);

const server = new Server(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



app.get("*", (request: Request, response: Response) => {
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
    } else {
        response.sendFile(path.resolve("./public/index.html"));
    }
});

export const io = require("socket.io")(server);
