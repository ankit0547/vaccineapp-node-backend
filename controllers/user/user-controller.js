const { Logger } = require("log4js");
const response = require("../../services/response/response");
const logger = require("../../services/logger");
const UserModal = require("../../modals/userModal");
const randomize = require("randomatic");

exports.getUsers = async (req, res) => {
  try {
    const users = await UserModal.find();
    console.log(users);
    const returnUser = [
      {
        fullname: users?.fullname,
        username: users?.username,
        email: users?.email,
        date: users?.date,
        userID: users?.userID,
      },
    ];
    return response.succesResponse(res, 200, returnUser);
  } catch (err) {
    logger.error(err);
    return response.errorResponse(res, 422, err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const reqUser = req.body;

    const newUser = new UserModal(reqUser);

    const createUser = () => {
      let user = newUser;
      let userID = randomize("A", 5);
      user.userID = userID;
      return user;
    };

    const USER = createUser();
    await newUser.save();
    const returnUser = {
      fullname: USER.fullname,
      username: USER.username,
      email: USER.email,
      date: USER.date,
      userID: USER.userID,
    };
    return response.succesResponse(res, 200, returnUser);
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
