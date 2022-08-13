const { Logger } = require("log4js");
const signUpModal = require("../../modals/signupModal");
const response = require("../../services/response/response");
const logger = require("../../services/logger");
const jwt = require("jsonwebtoken");

exports.adminLogin = async (req, res) => {
  // console.log(req.body, "??");

  let {
    body: { email, password },
  } = req;
  if (!email)
    return response.errorResponse(res, 422, "Email is required for login.");
  if (!password)
    return response.errorResponse(res, 422, "Password is requied for login.");
  email.toLowerCase();
  try {
    let payload = {
      email: email,
      password: password,
    };
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24hr",
    });

    return response.succesResponse(res, 200, token);
  } catch (err) {
    logger.error(err);
    return response.errorResponse(res, 422, err.message);
  }
};
