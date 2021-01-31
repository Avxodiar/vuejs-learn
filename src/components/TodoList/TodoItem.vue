<template>
    <li class="list-item">
        {{ id + 1 }}. {{ todo }}
        <div>
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
        transition: .22s all;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .list-item:hover {
        background: #eee;
    }

    .btn {
        color: #42b983;
        position: relative;
        place-content: center;
        place-items: center;
        width: fit-content;
        border-radius: 99px;
        letter-spacing: 0.05em;
        border: 1px solid #42b983;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 10px;
        padding: 0.5rem 1.5rem;
        white-space: nowrap;
        font-weight: 700;
        outline: none;
        background: #fff;
        transition: all 0.22s;
    }

    .btn:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    .btn:disabled {
        cursor: not-allowed;
        opacity: 1!important;
        background: #eee!important;
        border-color: #ddd!important;
        color: #999!important;
    }

    .btn:active {
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
    }

    .btn.danger {
        background: #e53935;
        color: #fff;
        border-color: #e53935;
    }

</style>
