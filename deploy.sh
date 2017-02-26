#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m' 
NC='\033[0m' # No Color


aws s3 cp public s3://www.serverless.software/public --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
aws s3 cp index.html s3://www.serverless.software --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
aws s3 cp favicon.ico s3://www.serverless.software --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
echo ''
echo ''
printf "${RED}Cloudfront TTL=3 hours on www.serverless.software${NC} \n"
printf "${GREEN}Immediate changes can be viewed at http://www.serverless.software.s3-website-eu-west-1.amazonaws.com/ ${NC} \n"

