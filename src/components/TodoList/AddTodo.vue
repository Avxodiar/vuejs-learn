<template>

    <fieldset>
        <legend>Добавление задачи</legend>

        <div class="form-control">
            <form @submit.prevent="onSubmit">
                <div>
                    <label for="addTodo" class="visually-hidden">Добавление задачи</label>
                    <input id="addTodo" type="text" placeholder="Описание задачи" v-model="newTodo">
                    <div class="progress" :style="{width: progress + '%'}"></div>
                </div>
                <button type="submit" class="btn">Добавить</button>
            </form>


            <small v-if="newTodo.length >= inputMaxLen">Название задачи должно быть не более {{ inputMaxLen }} cимволов</small>
        </div>
    </fieldset>

</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                newTodo: '',
                inputMaxLen: 64
            }
        },
        watch: {
            /**
             * Ограничение длины названия задачи
             */
            newTodo(value) {
                if (value.length > this.inputMaxLen) {
                    this.newTodo = value.substr(0,this.inputMaxLen);
                }
            }
        },
        computed: {
            /**
             * Процентное отношение заполнености введеного текста
             * по отношению к макс. допустимой длине названия задачи
             * @returns {number}
             */
            progress() {
                return Math.round(this.newTodo.length / this.inputMaxLen * 100);
            }
        },
        methods: {
            onSubmit() {
                let todo = this.newTodo.trim();
                if (todo.length) {
                    this.$emit('add-todo', todo);
                    this.newTodo = '';
                }
            }
        }
    }
</script>


<style scoped>
    fieldset {
        margin: 2em 0 1em;
        padding: 1em;
        border-radius: 0.3rem;
        border-color: rgba(0, 0, 0, 0.1);
    }

    .form-control {
        position: relative;
        margin-bottom: 0.5rem;
    }
    .form-control form {
        display: flex;
    }

    .form-control form div {
        flex-grow: 1;
        margin-right: 1em;
    }

    .form-control input,
    .form-control select {
        outline: none;
        display: block;
        margin: 0;
        padding: 0.5rem 1.5rem;
        width: 100%;
        color: #2c3e50;
        font-size: 1rem;
        border: 2px solid #ccc;
        border-radius: 0.5rem;
    }

    .form-control small {
        color: #e53935;
    }

    .form-control.invalid input {
        border-color: #e53935;
    }

    .form-control input,
    .form-control button {
        height: 2.5rem;
    }
    .form-control button {
        margin: 0;
    }

    .form-control input:active,
    .form-control input:focus {
        transition: border 0.22s;
        border: 2px solid #42b983;
    }

    .progress {
        margin-top: 5px;
        height: 5px;
        color: gray;
        background-color: #ccc;
    }

</style>
