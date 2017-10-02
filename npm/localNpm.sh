#!/usr/bin/env bash

if ! type "$local-npm" > /dev/null; then
  npm install -g local-npm
fi
npm set registry http://127.0.0.1:5080
local-npm