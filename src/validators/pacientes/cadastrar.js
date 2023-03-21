const { validate, Joi } = require('express-validator');


module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    data_nascimento: Joi.date().max('12-31-2020'),
  })
});