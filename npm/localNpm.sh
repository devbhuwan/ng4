#!/usr/bin/env bash

if ! type "local-npm" > /dev/null; then
  npm install -g local-npm
fi
npm set registry http://127.0.0.1:5080
local-npm
#   A simple npm-like UI is available here
#   http://127.0.0.1:5080/_browse
#   info:  PouchDB Server listening on port 16984.
#   http://localhost:16984/_utils
