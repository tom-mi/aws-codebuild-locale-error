import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {BuildSpec, LinuxBuildImage, Project} from "aws-cdk-lib/aws-codebuild";
import {StringParameter} from "aws-cdk-lib/aws-ssm";

export class AwsCodebuildLocaleErrorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ssmParameter = new StringParameter(this, 'SSMParameter', {
      parameterName: '/codebuild-locale-error-demo/parameter',
      stringValue: 'foo',
    })

    const project = new Project(this, 'CodeBuildProject', {
      projectName: 'aws-locale-error-demo-project',
      environment: {
        buildImage: LinuxBuildImage.AMAZON_LINUX_2_5,
      },
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        env: {
          'parameter-store': {
            SSM_PARAMETER: ssmParameter.parameterName,
          },
          variables: {
            LC_ALL: 'en_GB.UTF-8',
          }
        },
        phases: {
          build: {
            commands: [
              'echo "$SSM_PARAMETER"',
            ]
          }
        }
      })
    });

    ssmParameter.grantRead(project);
  }
}
