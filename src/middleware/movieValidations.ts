import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O titutlo é obrigatorio!")
            .isLength({min:5})
            .withMessage("O título precisa ter no minimo 5 caracteres"),
        body("rating").isNumeric().withMessage("A nota precisa ser um número.")
        .custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error("A nota precisa ser entre 0 e 10");
            }
            return true;
        }),

        body("description").isString().withMessage("A descrição é obrigatória."),
        body("director").isString().withMessage("O nome do director é obrigatório"),
        body("poster").isURL().withMessage("A imagem procisa ser uma URL.")
    ];
};