"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (request, response) => {
    return response.send("Olá");
});
router.post("/test", (request, response) => {
    console.log(request.body);
    return response.status(http_status_codes_1.StatusCodes.ACCEPTED).send("OK");
});
