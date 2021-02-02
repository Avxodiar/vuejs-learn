<template>
    <div class="logo">
        <router-link :to="{ name: 'Home' }">
            <img src="./assets/logo.png" alt="Логотип Vue.js" height="40" width="40"/>
        </router-link>
        <h1 class="ghostwhite">Знакомство с Vue.js</h1>
    </div>

     <div class="card">
        <nav>
            <router-link :to="{ name: 'Home' }">Главная</router-link>
            <router-link :to="{ name: 'TodoList' }">Список дел</router-link>
            <router-link :to="{ name: 'TicTacToe' }">Крестики-Нолики</router-link>
            <router-link :to="{ name: 'About' }">О проекте</router-link>
        </nav>

        <router-view />
    </div>
</template>

<style scoped>
    .logo {
        display: flex;

    }
    .logo * {
        margin: 0.5em 0;
    }
    .logo a{
        padding: 0 0.5em;
        margin-right: 0.5em;
    }
    nav {
        display: flex;
        padding: 0 0 1em;
        border-bottom: 2px solid lightgray;
    }

    nav a {
        display: block;
        position: relative;
        margin-right: 0.5em;
        padding: 0.5em;
        color: #2c3e50;
        font-weight: bolder;
        text-decoration: none;
        text-transform: uppercase;
    }

    nav a:last-child {
        margin-right: 0;
    }
    nav a:hover{
        color: black;
        background-color: rgba(44,62,80,0.2);
    }

    nav a.router-link-active {
        color: black;
        background-color: rgba(8,83,18,0.3);
    }

</style>
