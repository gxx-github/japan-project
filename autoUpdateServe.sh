#!/bin/bash

echo "Pull the latest code"
git pull || { echo "pull failed"; exit 1; }

Version="v4.0.1"
ProjectName=$(basename "$PWD")
GitBranch=$(git rev-parse --abbrev-ref HEAD)
GitHash=$(git rev-parse --short HEAD)
Image="${ProjectName}.${GitBranch}.${GitHash}:${Version}"

echo "building image: $Image"
docker build -t $Image . || { echo "build failed"; exit 1; }

docker-compose down

sed -i "s|image: $(basename "$PWD"):.*|image: $Image|g" docker-compose.yml || { echo "replace image fiailed"; exit 1; }
echo "replace image to $Image successful"

docker-compose up -d || { echo "start failed" ; exit 1; }
echo "restart container successful. "
echo "$(date +%Y-%m-%d_%H:%M) $Image" >> ../onlineHis.log
