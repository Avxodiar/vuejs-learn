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

</style>
