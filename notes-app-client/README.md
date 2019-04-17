# _Serverless Stack Tutorial_

#### _A notetaking app build courtesy of Serverless Stack, 4/4/19_

#### By _**Luke Vandekieft**_

## Project Description

As a new Serverless Guru employee I need to become a serverless guru in my own right! This tutorial came well-recommended as an easy to follow introduction to AWS built with React. AWS technologies used include API Gateway, Cognito, DyanamoDB, IAM, and S3 as well as CLI login & command training. If you're interested in trying this yourself I highly recommend it!
<br>
<br>
https://serverless-stack.com/chapters/what-is-serverless.html


## Setup/Installation Requirements


To download & edit do the following:

* Download file from Github.

      $ git clone https://github.com/lukevandekieft/serverless-stack-tutorial.git

* Install NPM (node package manager) as needed - instructions can be found at https://www.npmjs.com/get-npm .

* Install necessary webpack dependencies for project.

      $ npm install

* Create file src/containers/config.js and include the following. You will need to update the credentials for this to work:

        export default {
          MAX_ATTACHMENT_SIZE: 5000000,
          s3: {
            REGION: "your-region",
            BUCKET: "your-bucket-name"
          },
          apiGateway: {
            REGION: "your-region",
            URL: "your-prod-url"
          },
          cognito: {
            REGION: "your-region",
            USER_POOL_ID: "your-id",
            APP_CLIENT_ID: "your-id",
            IDENTITY_POOL_ID: "your-id"
          }
        };


* Compile and open webpage in developer mode.

      $ npm run start


## Technologies Used

* _AWS API Gateway, Cognito, DyanamoDB, IAM, S3
* _React Library_
* _HTML_
* _JavaScript_
* _CSS_
* _JSX_
* _Webpack_


## Support and contact details

If you have any concerns or suggestions please contact Luke Vandekieft at luke@serverlessguru.com

### License

*This software is licensed under the MIT License.*

Copyright (c) 2019 **_Luke Vandekieft_**
