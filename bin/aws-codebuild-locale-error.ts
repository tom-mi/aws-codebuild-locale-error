#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCodebuildLocaleErrorStack } from '../lib/aws-codebuild-locale-error-stack';

const app = new cdk.App();
new AwsCodebuildLocaleErrorStack(app, 'AwsCodebuildLocaleErrorStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
