<template>
    <h1>Application</h1>
    <hr>

    <div id="nav">
        <router-link to="/">Главная</router-link> |
        <router-link to="/todo-list">Список дел "Todo List"</router-link>  |
        <router-link to="/game">Игра "Крестики-Нолики"</router-link>  |
        <router-link to="/about">About</router-link>
    </div>

    <router-view />
</template>
