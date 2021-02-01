<template>
    <div>
        <h2>Todo List</h2>
        <p class="note">Данные хранятся в памяти браузера! (LocalStorage)</p>

        <FilterTodo  @filter="filterTodo"/>
        <AddTodo @add-todo="addTodo"/>

        <p class="task" v-if="filter.length">
            Поиск по запросу «<span>{{ filter }}</span>»: найдено {{ list.length }} {{ taskWord }}
        </p>
        <p class="task" v-else>Всего задач: {{ countTodo }}</p>

        <ul class="list" v-if="list.length">
            <TodoItem
                v-for="(todo, id) in list"
                :todo="todo" :id="id" :maxId="list.length - 1" :key="id"
                @up-todo="upTodo"
                @down-todo="downTodo"
                @del-todo="deleteTodo"
                @todo-check="checkTodo"
            />
        </ul>
    </div>
</template>

<script>
    import {numeralWord} from '@/assets/function.js'

    import FilterTodo from '@/components/TodoList/FilterTodo'
    import AddTodo from '@/components/TodoList/AddTodo'
    import TodoItem from '@/components/TodoList/TodoItem'

    export default {
        name: "TodoList",
        props: ['list', 'countTodo', 'filter'],
        components: {
            FilterTodo,
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
            },
            filterTodo(value) {
                this.$emit('filter', value);
            },
            checkTodo(id) {
                this.$emit('todo-check', id);
            }
        },
        computed: {
            taskWord() {
                return numeralWord(this.list.length, 'задача','задачи','задач')
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

    .task {
        padding-bottom: 0.7em;
        border-bottom: 2px solid lightseagreen;
    }
    .task span {
        color: darkcyan;
        font-style: italic;
        font-weight: bold;
    }

    .list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

</style>
