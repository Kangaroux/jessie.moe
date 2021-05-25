#!/bin/bash

set -e

cd ${0%/*}

function compose() {
    docker-compose -f docker/docker-compose.yml $*
}

case "$1" in
build)
    cd client/
    yarn clean && yarn build
    cd ..
    compose build
;;

push)
    compose push
;;

"" | *)
    echo "unknown or missing command"
;;
esac