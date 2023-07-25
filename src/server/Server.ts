import cors from "cors";
import express from "express";
import { router } from "./routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

export { server };
