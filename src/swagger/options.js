const options = {
  swagger: "2.0",
  info: {
    host: "https://api.knowmyemployee.com",
    base: "/",
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produce: ["application/json"],
  paths: {
    "/users": {
      get: {
        summary: "service to get all users",
        tags: ["User"],
        responses: {
          200: {
            description: "ok",
          },
        },
      },
    },
    "/users/register": {
      post: {
        summary: "service to register a user",
        tags: ["User"],
        parameters: [
          {
            name: "body",
            in: "body",
            type: "object",
            required: true,
            schema: {
              type: "object",
              properties: {
                fullname: {
                  type: "string",
                  example: "John",
                },
                username: {
                  type: "string",
                  example: "abc1122",
                },
                email: {
                  type: "string",
                  example: "jhonsmith@example.com",
                },
                password: {
                  type: "string",
                  example: "Example@1234",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "ok",
          },
        },
      },
    },
  },
};

module.exports = options;
