import express from "express";
import cors from "cors";

import "./shared/services/yupTranslations";
import { router } from "./routes";

const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

export { server };
