<template>
    <h2 class="visually-hidden">Главная</h2>

    <nav>
        <router-link :to="{ name: 'TodoList' }">
            <figure>
                <img src="../assets/todo-list.jpg" alt="Список дел" height="200" width="300"/>
                <figcaption>Список дел</figcaption>
            </figure>
        </router-link>

        <router-link :to="{ name: 'TicTacToe' }">
            <figure>
                <img src="../assets/tic-tak-toe.jpg" alt="Игра Крестики-Нолики" height="200" width="300"/>
                <figcaption>Крестики-Нолики</figcaption>
            </figure>
        </router-link>
    </nav>

</template>

<style scoped>
    nav {
        display: flex;
        justify-content: center;
    }
    nav a {
        padding: 2em;
        text-decoration: none;
    }
    figure {
        position: relative;
        margin: 0;
        height: 200px;
        border: 3px solid lightgray;
        border-radius: 5%;
        overflow: hidden;
    }
    figcaption {
        display: block;
        position: relative;
        height: 1.7em;
        line-height: 1.7;
        top: -2em;
        color: white;
        font-size: 1.8em;
        font-weight: bold;
        text-align: center;
        background-color: rgba(0,0,0,0.8);
        box-shadow: 0px -2px 10px 0px #2c3e50;
    }
    a:hover figure {
        border: 3px solid #2c3e50;
    }
    a:hover figcaption {
        color: #2c3e50;
        background-color: rgba(255,255,255,0.8);
        box-shadow: 0px -2px 10px 0px gray;
    }
</style>
