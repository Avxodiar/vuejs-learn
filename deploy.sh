#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# коммит сборки для production
git add -f dist && git commit -m "Deploy dist subtree commit to GithubPages"

# Деплоим subtree в ветку gh-pages
git subtree push --prefix dist origin gh-pages
