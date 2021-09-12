import aws from "aws-sdk";
const client = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-19' });

export async function handler(event) {
  const email = "foo@example.com";
  const data = await client.adminCreateUser({
    UserPoolId: process.env.USER_POOL_ID,
    Username: email,
    DesiredDeliveryMediums: ['EMAIL'],
    UserAttributes: [
      { Name: 'email', Value: email },
      { Name: 'email_verified', Value: 'true' },
    ],
  }).promise();

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data, null, 2),
  };
}
