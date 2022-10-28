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
    "/api/v1/student": {
      get: {
        summary: "service to get all Students",
        tags: ["Students"],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
    "/api/v1/student/": {
      post: {
        summary: "service to register a Student",
        tags: ["Students"],
        parameters: [
          {
            name: "body",
            in: "body",
            type: "object",
            required: true,
            schema: {
              type: "object",
              properties: {
                date: {
                  type: "string",
                  example: "2022-10-27T12:00:00Z",
                },
                studentName: {
                  type: "string",
                  example: "Ankit",
                },
                vaccineStatus: {
                  type: "boolean",
                  example: true,
                },
                vaccineName: {
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

export default options;
