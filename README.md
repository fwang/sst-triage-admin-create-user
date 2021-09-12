# What does this repo do
- This repo creates a Cognito UserPool (via `sst.Auth`) and an Api (via `sst.Api`) with 1 route `Get /`
- The UserPool's id is passed to the Lambda function as an environment variable
- The Lambda function makes a call to `aws.CognitoIdentityServiceProvider.adminCreateUser` and creates a user

# Steps to triage the issue
1. `git clone`
2. `npm install`
3. `npm run start`
4. Open the deployed Api endpoint in the browser
5. A user should've been created.
<img width="1072" alt="Screen Shot 2021-09-12 at 3 51 03 PM" src="https://user-images.githubusercontent.com/83515/133000856-b2a3b9fb-fb9f-4038-a554-0144aaeeb10d.png">

