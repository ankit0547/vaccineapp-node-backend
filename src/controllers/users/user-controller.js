const { Logger } = require("log4js");
const response = require("../../services/response/response");
const logger = require("../../services/logger");
const { UserModal } = require("../../modals/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomize = require("randomatic");
const {
  getAllDocumentsByCollection,
  createDocumentByCollection,
} = require("../../../utils/dbOperations/operations");

exports.getUsers = async (req, res) => {
  try {
    const users = await getAllDocumentsByCollection(UserModal);
    const allUsers = users.map((user) => {
      return {
        userId: user.userId,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        date: user.date,
      };
    });
    return response.succesResponse(res, 200, allUsers);
  } catch (err) {
    logger.error(err);
    return response.errorResponse(res, 422, err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;
    //Check if user exist
    //Validate if user exist in our dataBase
    const isUserExist = await UserModal.findOne({ email: email });

    if (isUserExist)
      return response.errorResponse(res, 409, "User already Exist");

    //Encrypt user password
    const encryptPasswd = await bcrypt.hash(password, 10);
    console.log(req.body);
    // Create user in our database
    const newUser = await createDocumentByCollection(UserModal, {
      userId: randomize("0", 5),
      fullname,
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptPasswd,
    });
    // Create token
    const token = jwt.sign(
      { user_id: UserModal._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    newUser.save();
    console.log(newUser);
    newUser.token = token;

    const newCreatedUser = {
      userId: newUser.userId,
      fullname: newUser.fullname,
      username: newUser.username,
      email: newUser.email,
      token: newUser.token,
    };
    return response.succesResponse(res, 200, newCreatedUser);
  } catch (err) {
    logger.log(err.message);
    return response.errorResponse(res, 422, err.message);
  }
};
exports.logInUser = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await UserModal.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      return response.succesResponse(res, 200, user);
    }

    return response.errorResponse(res, 400, "Invalid Credentials");
  } catch (err) {
    logger.log(err.message);
    return response.errorResponse(res, 422, err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const users = await UserModal.find();
    const position = users.find((user) => console.log(user.userID == userID));
    const removedItem = users.splice(position, 1);

    console.log(position, ">>>");

    // const result = await UserModal.findByIdAndDelete({ _id });
    // console.log(result, ">>>");
    // return response.succesResponse(res, 200, users);
  } catch (err) {
    logger.error(err);
    return response.errorResponse(res, 422, err.message);
  }
};
