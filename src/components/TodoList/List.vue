<template>
    <div>
        <FilterTodo  @filter="filterTodo"/>
        <AddTodo @add-todo="addTodo"/>

        <div class="panel">
            <p class="task" v-if="filter.length">
                Поиск по запросу «<span>{{ filter }}</span>»: найдено {{ list.length }} {{ taskWord }}
            </p>
            <p class="task" v-else>Показано задач: {{ list.length }} из {{ countTodo }} </p>
            <ul>
                <li>
                    <input type="radio" name="selector" id="selectorAll" value="all"
                           v-model="selector" :checked="selector === 'all'">
                    <label for="selectorAll">
                        Все ({{ countTodo }})
                    </label>
                </li>
                <li>
                    <input type="radio" name="selector" id="selectorСhecked" value="checked"
                           v-model="selector" :checked="selector === 'checked'">
                    <label for="selectorСhecked">
                        Выполненные ({{ countChecked }})
                    </label>
                </li>
                <li>
                    <input type="radio" name="selector" id="selectorUnchecked" value="unchecked"
                           v-model="selector" :checked="selector === 'unchecked'">
                    <label for="selectorUnchecked">
                        Невыполненные ({{ countTodo - countChecked }})
                    </label>
                </li>
            </ul>
        </div>

        <ul class="list" v-if="list.length">
            <TodoItem :key="id"
                v-for="(todo, id) in list"
                :todo="todo" :id="id"
                :maxId="list.length - 1"
                :search="filter"
                @up-todo="upTodo"
                @down-todo="downTodo"
                @del-todo="deleteTodo"
                @todo-check="checkTodo"
            />
        </ul>
        <p class="no-todo" v-else>Нет задач для отображения</p>
    </div>
</template>

<script>
    import {numeralWord} from '@/assets/function.js'

    import FilterTodo from '@/components/TodoList/FilterTodo'
    import AddTodo from '@/components/TodoList/AddTodo'
    import TodoItem from '@/components/TodoList/TodoItem'

    export default {
        name: "List",
        props: {
            list: {
                type: Array,
                required: true
            },
            countTodo: {
                type: Number,
                required: true,
                validator: function (value) {
                    return value < 0 ? 0 : value;
                }
            },
            countChecked: {
                type: Number,
                required: true,
                validator: function (value) {
                    return value < 0 ? 0 : value;
                }
            },
            filter: String
        },
        data () {
            return {
                selector: 'all'
            }
        },
        components: {
            FilterTodo,
            AddTodo,
            TodoItem
        },
        watch: {
            selector() {
                this.$emit('select', this.selector);
            }
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
    .panel {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid lightseagreen;
        margin-bottom: 0.7em;
    }

    .task {
        margin: 0 0 0.5em;
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

    .no-todo {
        padding: 1em;
        text-align: center;
    }

    .panel ul {
        display: flex;
        margin: 0;
        padding: 0;
    }
    .panel li {
        display: block;
        list-style: none;
        padding: 0.5em 0;
    }
    .panel li:last-child {
        padding-right: 0;
    }

    .panel label {
        padding: 0.5em 0.5em 0.5em 0;
        cursor: pointer;
    }
    .panel label:hover {
        color: #1565c0;
    }
</style>
