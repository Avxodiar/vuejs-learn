<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div>
        <div class="control">
            <p v-if="gameOver">GAME OVER</p>
            <p v-else>Ход игрока</p>
            <button
                class="btn"
                @click="resetGame"
                :class="{danger: gameOver}"
            >
                Начать заново
            </button>
        </div>

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
    import {getTurn} from '@/assets/tictactoe.js'

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
                ],
                leftStep: 9
            }
        },
        computed: {
            /**
             * Флаг завершения игры
             */
            gameOver() {
                return !this.leftStep;
            }
        },
        methods: {
            /**
             * Перезапуск игры
             */
            resetGame() {
                this.leftStep = 9;
                this.board[0].fill(0, 0, 3);
                this.board[1].fill(0, 0, 3);
                this.board[2].fill(0, 0, 3);
            },
            /**
             * Ход пользователя
             * @param  {int} row - номер строки
             * @param  {int} col - номер ячейки
             */
            clickCell(row, col) {
                if( this.board[row][col] === 0) {
                    this.board[row][col]++;
                    this.leftStep--;
                    // check User Win
                    if (!this.gameOver) {
                        this.computerTurn();
                        this.leftStep--;
                        // check Computer Win
                    }
                }
            },
            computerTurn() {
                let turn = getTurn(this.board, this.leftStep);
                this.board[turn.row][turn.col]--;
            }
        }
    }
</script>

<style scoped>
    div {
        width: 600px;
        margin: 0 auto 3em;
    }
    .board {
        margin: auto;
        border: 1px solid gray;
        border-collapse: collapse;
    }
    .control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1em;
    }
    .control * {
        align-self: center;
    }
    .control:first-child {
        font-weight: bold;
    }
</style>
