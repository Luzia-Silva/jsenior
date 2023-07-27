import { StatusCodes } from "http-status-codes";

import { Response, Request } from "express";
import * as yup from "yup";

interface ICity {
    name: string;
    state: string;
}

const bodyValidation: yup.Schema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(2).max(2)
});

export const create = async (request: Request<{}, {}, ICity>, response: Response) => {
    const validateData: ICity | undefined = undefined;

    try {
        await bodyValidation.validate(request.body, { abortEarly: false });
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (!error.path) return;
            errors[error.path] = error.message;
        });

        return response.status(StatusCodes.BAD_REQUEST).json({
            errors
        });
    }
    return response.send("CREATE!");
};