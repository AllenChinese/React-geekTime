#!/usr/bin/env sh
# 生成当前时间
time=`date '+%Y%m%d-%H%M%S'`

#确保脚本抛出遇到的错误
set -e

git add -A
git commit -m "deploy-$time"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:allenchinese/React-geekTime.git master:master

cd -