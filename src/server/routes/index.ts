import { Router } from "express";
import { Controllers } from "../../controllers";

const router = Router();

router.get("/", (request, response) => {
    return response.send("Olá");
});

router.post("/send-json", Controllers.create);

export { router };
