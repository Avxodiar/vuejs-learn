<template>
    <div class="form-control">
        <label for="filter" class="visually-hidden">Добавление задачи</label>
        <input
            type="text"
            id="filter"
            placeholder="Поиск задачи"
            v-model="search"
            @keyup="$emit('filter', search)"
        />
    </div>
</template>

<script>
    export default {
        name: "FilterTodo",
        data() {
            return {
                search: ''
            }
        }
    }
</script>

<style scoped>
    .form-control {
        position: relative;
        margin-bottom: 0.5rem;
    }
    .form-control input {
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
    .form-control.invalid input {
        border-color: #e53935;
    }

    .form-control input:active,
    .form-control input:focus {
        transition: border 0.22s;
        border: 2px solid #42b983;
    }
</style>
