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
        @todo-check="checkTodo"
    />
</template>

<script>
    import TodoList from "@/components/TodoList/TodoList";

    export default {
        name: 'App',
        data() {
            return {
                maxId: 2,
                todoList: [
                    {title: 'Составить план', checked: false, id: 0},
                    {title: 'Добавить 2 задачи', checked: false, id: 1},
                    {title: 'Проверка', checked: false, id: 2}
                ],
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
                    this.maxId++;
                    const newTodo = {title: value, checked: false, id: this.maxId};
                    this.todoList.push(newTodo);
                    this.saveTask()
                }
            },
            /**
             * Удаление задачи из списка
             * @param id - номер задачи
             */
            deleteTodo(id) {
                this.todoList = this.todoList.filter(item => item.id !== id );
                this.saveTask()
            },
            /**
             * Фильтрация списка задач по введенной строке поиска
             * @returns {string}
             */
            filterTodo(value) {
                this.filter = value.trim().toLocaleLowerCase();
            },
            /**
             * Установка флага о выполнении задачи
             */
            checkTodo(id) {
                this.todoList[id].checked = !this.todoList[id].checked;
                this.saveTask()
            },
        },
        computed: {
            /**
             * Фильтрация списка задач по введенной строке поиска
             * @returns {array}
             */
            filteredList() {
                if (this.filter === '') {
                    return this.todoList;
                }

                return this.todoList.filter(item => item.title.toLocaleLowerCase().indexOf(this.filter) > -1 );
            }
        }
    }
</script>
