<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div>
        <table class="board">
            <Row
                :key="idx"
                v-for="(row,idx) in board"
                :row="row" :rowId="idx"
                @click-row="clickCell"
            />
        </table>
    </div>
</template>


<script>
    import Row from  '@/components/TicTacToe/Row.vue'

    export default {
        name: "TicTacToe",
        components: {
            Row
        },
        data() {
            return {
                board: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ]
            }
        },
        methods: {
            clickCell(col, row) {
                this.board[row][col]++;
            }

        }
    }
</script>

<style scoped>
    div {
        width: 600px;
        margin: 0 auto;
    }
    .board {
        margin: 0 auto;
    }
    .board {
        margin: auto;
        border: 1px solid gray;
        border-collapse: collapse;
    }
</style>
