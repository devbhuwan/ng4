#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "====== INSTALL AND CLEAN ====== "
npm run clean
npm install

echo -n "Are you ready to publish (y/N) ?"
read -e userReady
if [ "$userReady" == 'y' ];then
  npm publish
  echo 'PUBLISHED....'
else
  echo 'Thank you....'
fi
