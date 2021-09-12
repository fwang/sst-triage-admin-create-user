import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create Auth
    const auth = new sst.Auth(this, "Auth", {
      cognito: true,
    });

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        environment: {
          USER_POOL_ID: auth.cognitoUserPool.userPoolId,
        },
      },
      routes: {
        "GET /": "src/lambda.handler",
      },
    });
    api.attachPermissions(["cognito-idp:*"]);

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
