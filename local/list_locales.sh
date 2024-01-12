#!/bin/bash

set -eu

wget https://raw.githubusercontent.com/aws/aws-codebuild-docker-images/master/local_builds/codebuild_build.sh -O codebuild_build.sh
chmod +x codebuild_build.sh

./codebuild_build.sh -i public.ecr.aws/codebuild/amazonlinux2-x86_64-standard:4.0 -a . -b buildspec_list_locales.yaml || true

./codebuild_build.sh -i public.ecr.aws/codebuild/amazonlinux2-x86_64-standard:5.0 -a . -b buildspec_list_locales.yaml
