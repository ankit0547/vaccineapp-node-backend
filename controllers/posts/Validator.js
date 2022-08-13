const Joi = require("joi");
const response = require("../../services/response/response");

exports.validate = async (req, res, next) => {
  //   const {} = req.body;

  const { tags, likeCount, createdAt, _id, title, _posts } = req.body;

  const schema = Joi.object().keys({
    tags: Joi.required(),
    likeCount: Joi.required(),

    _id: Joi.required(),
    title: Joi.required(),
  });
  const dataToValidate = { title, tags, likeCount };
  //   const result = Joi.validate(dataToValidate, schema);

  const result = schema.validate(req.body);
  //   if (result == null) {
  //     next();
  //   }

  const { error } = result;
  // console.log("Body??", result.error.details);
  //   return response.errorResponse(res, 422, error.message);
};
