import { Response, Request } from "express";

interface ICreate {
    name: string;
}
export const create = (request: Request<{}, {}, ICreate>, response: Response) => {
    console.log(request.body.name);
    return response.send("Perfeito");
};