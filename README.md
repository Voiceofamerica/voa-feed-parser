# voa-feed-parser
> Parses VOA RSS feed to JSON, then adapts data to common mobile app data format

## Developers
1. `npm install`
2. `npm test`
2. - `npm run offline` or `npm run offline -- --stage prod` or `npm run offline:local`
2. Debug using VS Code debug tools -- `debug.ts` exists solely for debugging purposes

## Deployment
`serverless.yml` contains AWS Lambda configuration
- Logged in AWS CLI client, configured with AWS Lambda access (`brew install awscli`)
- Ensure `env.yml` is configured correctly. **DO NOT store secrets in this file.**
1. `npm run deploy` or `npm run deploy:production`
2. `npm run invoke` to test deployment

**Note:** To store secrets implement `https://github.com/marcy-terui/serverless-crypt` or similar

## Endpoints
* dev: https://63o324uukg.execute-api.us-east-1.amazonaws.com/dev
* prod: https://xvjdnlm1a4.execute-api.us-east-1.amazonaws.com/prod