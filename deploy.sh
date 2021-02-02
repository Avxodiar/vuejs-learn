#!/usr/bin/env sh

# Публикация на GitHub Pages

# Если вас не устраивает данный вариант с комитом папки 'dist'
# то замените этот скрипт на предлагаемый на в офиц.документации
# https://cli.vuejs.org/guide/deployment.html#github-pages
# Прим.:В нем предполагается создание отдельного репозитория в папке 'dist'
# ВАЖНО: папка 'dist' не должна быть добавлена в гит (добавьте ее в .gitignore)


# остановить публикацию при ошибках
set -e

# сборка
npm run build

# коммит сборки для production
git add -f dist && git commit -m "Deploy dist subtree commit to GithubPages"

# Деплоим ветку dist в gh-pages
git push origin `git subtree split --prefix dist main`:gh-pages --force
