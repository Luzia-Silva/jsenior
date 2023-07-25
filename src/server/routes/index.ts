import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (request, response) => {
    return response.send("Olá");
});

router.post("/test", (request, response) => {
    console.log(request.body);
    return response.status(StatusCodes.ACCEPTED).send("OK");
});

export { router };