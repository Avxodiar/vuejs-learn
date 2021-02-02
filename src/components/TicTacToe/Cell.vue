<template>
    <td>
        <div class="cell" @click="$emit('click-cell', id)">
            {{ label }}
        </div>
    </td>
</template>

<script>
    export default {
        name: "Cell",
        props: {
            id: Number,
            td: Number
        },
        computed: {
            label() {
                if (!this.td) {
                    return '';
                }
                return this.td > 0 ? 'X' : 'O'
            }
        }
    }
</script>

<style scoped>
    td {
        border: 1px solid gray;
        background-color: white;
    }
    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        padding: 20px;
        width: 100px;
        height: 100px;
        font-size: 5em;
        cursor: pointer;
    }
    .cell:hover {
        background-color: lightgray;
    }
</style>
