const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().require(),
    email: Joi.string().email().require(),
    data_nascimento: Joi.date().max('12-31-2020').require(),
  }),
});

