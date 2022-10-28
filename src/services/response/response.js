const response = {
  /** return error response function */
  errorResponse(res, status, message) {
    return res
      .status(status)
      .send({ statusCode: status, status: "Failure", message: message });
  },

  /** return success response function */
  succesResponse(res, status, data) {
    return res
      .status(status)
      .send({ statusCode: status, status: "Success", data: data });
  },
};

export default response;
