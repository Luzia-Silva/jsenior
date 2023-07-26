import { Response, Request } from "express";

interface ICreate {
    name: string;
}
export const create = (request: Request<{}, {}, ICreate>, response: Response) => {
    return response.send("Perfeito");
};