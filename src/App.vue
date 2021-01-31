<template>
    <TodoList class="card"
        :todoList="todoList"
        @up-todo="upTodo"
        @down-todo="downTodo"
        @delete-todo="deleteTodo"
    />
</template>

<script>
    import TodoList from "@/components/TodoList/TodoList";

    export default {
        name: 'App',
        data() {
            return {
                todoList: ['Составить план', 'Добавить 2 задачи', 'Проверка'],
            }
        },
        components: {
            TodoList
        },
        methods: {
            /**
             * Поднять задачу в списке
             * @param  id
             */
            upTodo(id) {
                if (id > 0) {
                    [ this.todoList[id-1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id-1] ];
                    /*this.saveTask()*/
                }
            },
            /**
             * Понизить задачу в списке
             * @param  id
             */
            downTodo(id) {
                if (id < this.todoList.length - 1) {
                    [ this.todoList[id+1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id+1] ];
                    /*this.saveTask()*/
                }
            },
            /**
             * Удаление задачи из списка
             * @param id - номер задачи
             */
            deleteTodo(id) {
                this.todoList.splice(id, 1);
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

</style>
