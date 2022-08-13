const { Logger } = require("log4js");
const response = require("../../services/response/response");
const logger = require("../../services/logger");
const PostMessage = require("../../modals/postMessage");

exports.getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();

    return response.succesResponse(res, 200, postMessage);
  } catch (err) {
    logger.error(err);
    return response.errorResponse(res, 422, err.message);
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    return response.succesResponse(res, 200, newPost);
  } catch (err) {
    return response.errorResponse(res, 422, err.message);
  }
};
