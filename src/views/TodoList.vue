<template>
    <TodoList class="card"
        :list="filteredList"
        :countTodo="todoList.length"
        :countChecked="countChecked"
        :filter="filter"
        @up-todo="upTodo"
        @down-todo="downTodo"
        @add-todo="addTodo"
        @delete-todo="deleteTodo"
        @filter="filterTodo"
        @todo-check="checkTodo"
        @select="selectTodo"
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
                filter: '',
                radioSelector: 'all'
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
                    this.maxId = this.todoList.length;
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
            selectTodo(value) {
                this.radioSelector = value;
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
                let todoId = this.todoList.findIndex(item => item.id === id);
                if (todoId > -1) {
                    this.todoList[todoId].checked = !this.todoList[todoId].checked;
                    this.saveTask()
                }
            },
        },
        computed: {
            /**
             * Кол-во выполненных задач
             * @returns {int}
             */
            countChecked() {
                return this.todoList.reduce((sum, todo) => sum + todo.checked, 0);
            },
            /**
             * Фильтрация списка задач по введенной строке поиска
             * @returns {array}
             */
            filteredList() {
                if (this.filter === '' && this.radioSelector === 'all') {
                    return this.todoList;
                }

                return this.todoList.filter(item => {

                    let isCheked = item.checked && this.radioSelector === 'checked';
                    let isUnCheked = !item.checked && this.radioSelector === 'unchecked';

                    if (this.filter === '') {
                        return isCheked || isUnCheked;
                    }

                    let isFiltered = item.title.toLocaleLowerCase().indexOf(this.filter) > -1;

                    if (this.radioSelector === 'all') {
                        return isFiltered;
                    }

                    return isFiltered && (isCheked || isUnCheked);
                } );
            }
        }
    }
</script>
