<template>
    <div>
        <h2>Todo List (Задач: {{ todoList.length }})</h2>
        <p class="note">Данные хранятся в памяти браузера! (LocalStorage)</p>

        <AddTodo @add-todo="addTodo"/>

        <ul class="list" v-if="todoList.length">
            <TodoItem
                v-for="(todo, id) in todoList"
                :todo="todo" :id="id" :maxId="todoList.length - 1" :key="id"
                @up-todo="upTodo"
                @down-todo="downTodo"
                @del-todo="deleteTodo"
            />
        </ul>
        <p class="warning" v-else>Список задач пуст</p>
    </div>
</template>

<script>
    import AddTodo from '@/components/TodoList/AddTodo'
    import TodoItem from '@/components/TodoList/TodoItem'

    export default {
        name: "TodoList",
        props: ['todoList'],
        components: {
            AddTodo,
            TodoItem
        },
        methods: {
            upTodo(id) {
                this.$emit('up-todo', id);
            },
            downTodo(id) {
                this.$emit('down-todo', id);
            },
            addTodo(value) {
                this.$emit('add-todo', value);
            },
            deleteTodo(id) {
                this.$emit('delete-todo', id);
            }
        }
    }
</script>

<style scoped>
    .note {
        font-size: 1em;
        margin-bottom: 2em;
        color: darkcyan;
        font-weight: bold;
        font-style: italic;
    }
</style>
