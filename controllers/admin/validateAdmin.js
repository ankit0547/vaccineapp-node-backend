const Joi = require("joi");

exports.validateLoginAdmin = (req, res, next) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  console.log(req.body);
};
