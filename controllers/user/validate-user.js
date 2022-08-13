const Joi = require("joi");
const response = require("../../services/response/response");

exports.validateClient = (req, res, next) => {
  const { fullname, username, email, password } = req.body;

  const userScheme = Joi.object().keys({
    fullname: Joi.string().min(3).max(20).required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const toValidate = { fullname, username, email, password };

  const result = userScheme.validate(toValidate);

  const { error } = result;

  if (error) {
    return response.errorResponse(res, 422, result.error.details[0].message);
  } else {
    next();
  }
};
