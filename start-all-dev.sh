#!/bin/bash

echo "Enter 1 if you want to build and run, 2 if you want to run"
read value

if [ $value -eq 1 ]
then
  docker-compose --project-name speed-test-dev --file ./docker-compose-dev.yml build --parallel
fi

docker-compose --project-name speed-test-dev --file ./docker-compose-dev.yml up -d
