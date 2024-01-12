# aws-codebuild-locale-error

This is a minimal example to reproduce a weird CodeBuild error that occurs when setting an unsupported locale and
injecting an SSM parameter into the build environment.

Deploy with `npx cdk deploy` and start a build in the CodeBuild console if you want to reproduce the error.

There is also some local setup in the folder [`local`](local) to reproduce the error by running CodeBuild locally.
