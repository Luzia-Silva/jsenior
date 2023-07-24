import cors from "cors";
import express from "express";

const server = express();

server.use(cors());

server.get("/", (request, response) => {
  return response.send("Olá, Dev");
});

export { server };
