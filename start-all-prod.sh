#!/bin/bash

docker-compose --project-name speed-test --file ./docker-compose-prod.yml build --parallel
docker-compose --project-name speed-test --file ./docker-compose-prod.yml up -d
