[![Build Status](https://travis-ci.org/innowatio/iwwa-lambda-alarms-to-dynamodb.svg?branch=master)](https://travis-ci.org/innowatio/iwwa-lambda-alarms-to-dynamodb)
[![Dependency Status](https://david-dm.org/innowatio/iwwa-lambda-alarms-to-dynamodb.svg)](https://david-dm.org/innowatio/iwwa-lambda-alarms-to-dynamodb)
[![devDependency Status](https://david-dm.org/innowatio/iwwa-lambda-alarms-to-dynamodb/dev-status.svg)](https://david-dm.org/innowatio/iwwa-lambda-alarms-to-dynamodb#info=devDependencies)

# iwwa-lambda-alarms-to-dynamodb

Takes events from AWS Kinesis and builds an alarms materialized view on
DynamoDB.

## Deployment

### Continuous deployment

Since the project uses TravisCI and
[`lambda-deploy`](https://github.com/innowatio/lambda-deploy/) for continuous
deployment, the following environment variables need to be set:

- `AWS_SECRET_ACCESS_KEY`
- `AWS_ACCESS_KEY_ID`
- `AWS_DEFAULT_REGION`
- `S3_BUCKET`
- `LAMBDA_NAME`
- `LAMBDA_ROLE_ARN`

WARNING: the value of those variables must be kept secret. Do not set them in
the `.travis.yml` config file, only in the Travis project's settings (where they
are kept secret).

### Configuration

The following environment variables are needed to configure the function:

- `DYNAMODB_TABLE_NAME`

NOTE: since the project uses `lambda-deploy`, in the build environment (Travis)
we need to define the above variables with their name prefixed by
`__FUNC_CONFIG__`.
