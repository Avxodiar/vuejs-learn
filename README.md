#Учебный проект по изученнию Vue.js

Содержит в себе 2 "подпроекта", реализованных с использованием компонентов и маршрутизации,  отображаемых на отдельных страницах:
- Список дел (Todo List)
- Игра "Крестики-Нолики"


## Установка проекта
```
npm install
```

## Запуск сервера для разработки
```
npm run serve
```

## Создание сборки для публикации
```
npm run build
```

## Проверка и исправление файлов
```
npm run lint
```

## Публикация / Deployment
### Предпросмотр на localhost`е
```
npm run build

npm install -g serve

# флаг -s означает запуск serve в режиме одностраничного приложения (SPA)
# который решает проблему маршрутизации, описанную в руководстве по Vue CLI
# https://cli.vuejs.org/guide/deployment.html#routing-with-history-pushstate
serve -s dist
```

### Публикация на сервер
Смотрите [Руководства для платформ](https://cli.vuejs.org/guide/deployment.html#platform-guides).


## Настройка конфигурации
Смотрите [Руководство по настройке](https://cli.vuejs.org/config/).
