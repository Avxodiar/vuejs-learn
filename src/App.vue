<template>
    <TodoList class="card"
        :list="filteredList"
        :countTodo="todoList.length"
        :filter="filter"
        @up-todo="upTodo"
        @down-todo="downTodo"
        @add-todo="addTodo"
        @delete-todo="deleteTodo"
        @filter="filterTodo"
    />
</template>

<script>
    import TodoList from "@/components/TodoList/TodoList";

    export default {
        name: 'App',
        data() {
            return {
                todoList: ['Составить план', 'Добавить 2 задачи', 'Проверка'],
                filter: ''
            }
        },
        components: {
            TodoList
        },
        /**
         * Загрузка списка задач из LocalStorage
         */
        mounted() {
            if (localStorage.getItem('todoList')) {
                try {
                    this.todoList = JSON.parse(localStorage.getItem('todoList'));
                } catch(e) {
                    localStorage.removeItem('todoList');
                }
            }
        },
        methods: {
            /**
             * Сохранение списка задач в LocalStorage
             */
            saveTask() {
                const parsed = JSON.stringify(this.todoList);
                localStorage.setItem('todoList', parsed);
            },
            /**
             * Поднять задачу в списке
             * @param  id
             */
            upTodo(id) {
                if (id > 0) {
                    [ this.todoList[id-1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id-1] ];
                    this.saveTask()
                }
            },
            /**
             * Понизить задачу в списке
             * @param  id
             */
            downTodo(id) {
                if (id < this.todoList.length - 1) {
                    [ this.todoList[id+1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id+1] ];
                    this.saveTask()
                }
            },
            /**
             * Добавление задачи в список
             */
            addTodo(value) {
                if (value !== '') {
                    this.todoList.push(value);
                    this.saveTask()
                }
            },
            /**
             * Удаление задачи из списка
             * @param id - номер задачи
             */
            deleteTodo(id) {
                this.todoList.splice(id, 1);
                this.saveTask()
            },
            /**
             * Фильтрация списка задач по введенной строке поиска
             * @returns {string}
             */
            filterTodo(value) {
                this.filter = value.trim().toLocaleLowerCase();
            }
        },
        computed: {
            /**
             * Фильтрация списка задач по введенной строке поиска
             * @returns {any}
             */
            filteredList() {
                if (this.filter === '') {
                    return this.todoList;
                }

                return this.todoList.filter(item => item.toLocaleLowerCase().indexOf(this.filter) > -1 );
            }
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        color: #2c3e50;
        background: #2c3e50;
    }

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }

    h2 {
        font-size: 1.65rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #eaecef;
    }

    h3 {
        font-size: 1.35rem;
    }

    .ghostwhite {
        color: #f8f8ff;
    }

    .card {
        overflow: hidden;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
        background: #fff;
    }

    .card.marked {
        border: 4px solid #42b983;
    }

    .card.center {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .visually-hidden:not(:focus):not(:active),
    input[type="checkbox"].visually-hidden,
    input[type="radio"].visually-hidden {
        position:absolute;

        width:1px;
        height:1px;
        margin:-1px;
        border:0;
        padding: 0;

        white-space: nowrap;
        clip-path: inset(100%);
        clip:rect(0 0 0 0);
        overflow:hidden;
    }
</style>
