#!/bin/bash

set -e

cd ${0%/*}

case "$1" in
build)
    cd client/
    yarn clean && yarn build
    cd ..
    docker-compose build
;;

push)
    docker-compose push
;;

"" | *)
    echo "unknown or missing command"
;;
esac