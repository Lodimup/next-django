#! /bin/bash

PRE='export $(cat '
POST='/.env | xargs)'
CMD=$PRE$1$POST
echo $CMD >> ~/.bashrc

apt update && apt install -y postgresql-client redis-tools
poetry install --no-root
