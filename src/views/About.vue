<template>
    <h2>Учебный проект по изученнию Vue.js</h2>

    Содержит в себе 2 "подпроекта", реализованных с использованием компонентов и маршрутизации,
    отображаемых на отдельных страницах:

    <ul>
        <li>
            <router-link :to="{ name: 'TodoList' }">Список дел (Todo List)</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'TicTacToe' }">Игра "Крестики-Нолики"</router-link>
        </li>
    </ul>

    <h3>Используемые технологии</h3>
    <ul>
        <li>Vue.js, Vue Cli</li>
        <li>Npm</li>
        <li>Git</li>
        <li>Html, Css, фиксированная верстка</li>
    </ul>

</template>
