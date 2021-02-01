<template>
    <li class="list-item" :class="{checked:todo.checked}">
        <div>
            <strong>{{ id + 1}}.</strong>
            <input type="checkbox" :id="id"
                   :checked="todo.checked"
                   @change="$emit('todo-check', id)"
            />
            <label :for="id">{{ todo.title }}</label>
        </div>
        <div class="todo-control">
            <button class="btn" @click="$emit('up-todo',id)" :disabled="id === 0">Вверх</button>
            <button class="btn" @click="$emit('down-todo',id)" :disabled="id >= maxId">Вниз</button>
            <button class="btn danger" @click="$emit('del-todo', id)">Удалить</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ['todo', 'id', 'maxId']
    }
</script>

<style scoped>
    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        min-width: 940px;
        transition: .22s all;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .list-item:nth-child(even) {
        background-color: #CFD8DC;
    }

    .list-item:hover {
        background: #87b1c0;
    }

    .checked {
        color: gray;
    }
    .checked strong,
    .checked label {
        text-decoration: line-through;
    }

    strong {
        margin: 0 1em;
    }

    label {
        cursor: pointer;
        padding: 1em;
    }

    [type=checkbox] {
        cursor: pointer;
    }

    .todo-control {
        min-width: 350px;
        text-align: right;
    }
</style>
