"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
require("dotenv/config");
Server_1.server.listen(process.env.PORT || 3333, () => {
    console.log(`Running in port ${process.env.PORT || 3333} 🚀`);
});
