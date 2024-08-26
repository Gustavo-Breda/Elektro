import { body } from 'express-validator';

function validatorUser (method: string) {
    switch (method) {
    
        case 'create': {
            return [
                body('name')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 2 }),

                body('cpf')
                .exists()
                .withMessage('O CPF é obrigatório')
                .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
                .withMessage('O CPF deve estar no formato XXX.XXX.XXX-XX'),

                body('email')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 1 })
                .withMessage('O corpo de email deve ser preenchido')
                .isEmail()
                .withMessage('Precisa ser como exemplo@exemplo'),

                body('password')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 5 })
                .withMessage('A senha deve ter no mínimo 5 caracteres')
                .matches(/^(?=.*[A-Z]).*$/)
                .withMessage('A senha deve conter pelo menos uma letra maiúscula')
                .isString()
                .withMessage('A senha deve ser passada como string'),

                body('phone')
                .optional()
                .isLength({ min: 1 })
                .withMessage('O telefone não pode ser vazio')
                .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/)
                .withMessage('O telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX'),
            ];
        }

        case 'update': {
            return [
                body('name')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 2 }),

                body('cpf')
                .exists()
                .withMessage('O CPF é obrigatório')
                .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
                .withMessage('O CPF deve estar no formato XXX.XXX.XXX-XX'),

                body('email')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 1 })
                .withMessage('O corpo de email deve ser preenchido')
                .isEmail()
                .withMessage('Precisa ser como exemplo@exemplo'),

                body('password')
                .exists()
                .withMessage('O campo não pode ser nulo')
                .isLength({ min: 5 })
                .withMessage('A senha deve ter no mínimo 5 caracteres')
                .matches(/^(?=.*[A-Z]).*$/)
                .withMessage('A senha deve conter pelo menos uma letra maiúscula')
                .isString()
                .withMessage('A senha deve ser passada como string'),

                body('phone')
                .optional()
                .isLength({ min: 1 })
                .withMessage('O telefone não pode ser vazio')
                .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/)
                .withMessage('O telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX'),
            ];
        }
    
    }
}


function validatorProduct (method: string) {
    switch (method) {
        case 'create': {
            return [
                body('name')
                .exists()
                .withMessage('O campo é obrigatório')
                .isLength({ min: 1 })
                .withMessage('O campo nao pode ser vazio')
                .isString()
                .withMessage('O nome deve ser passado como String'),

                body('price')
                .exists()
                .withMessage('O campo é obrigatório')
                .isDecimal()
                .withMessage('A preço deve ser passada como decimal'),

                body('description')
                .optional()
                .isLength({ min: 1 })
                .withMessage('O campo nao pode ser vazio')
                .isString()
                .withMessage('A descrição deve ser passado como String'),

                body('quantity')
                .exists()
                .withMessage('O campo é obrigatório')
                .isInt()
                .withMessage('A quantidade deve ser passada como um Inteiro'),
            ];
        }

        case 'readProduct': {
            return [
                body('productId')
                .exists()
                .withMessage('O campo é obrigatório')
                .isInt()
                .withMessage('A id deve ser passada como inteiro')
            ];
        }

        case 'update': {
            return [
                body('name')
                .optional()
                .isLength({ min: 1 })
                .withMessage('O campo nao pode ser vazio')
                .isString()
                .withMessage('O nome deve ser passado como String'),

                body('price')
                .optional()
                .isDecimal()
                .withMessage('A preço deve ser passada como decimal'),

                body('description')
                .optional()
                .isLength({ min: 1 })
                .withMessage('O campo nao pode ser vazio')
                .isString()
                .withMessage('A descrição deve ser passado como String'),

                body('quantity')
                .optional()
                .isInt()
                .withMessage('A quantidade deve ser passada como um Inteiro'),
            ];
        }
    }
}