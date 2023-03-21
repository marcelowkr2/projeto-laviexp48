const { validate, Joi } = require('express-validator');

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(), 
        senha: Joi.string().min(6).required(),
        apresentacao: Joi.string().required()
    }),
});
