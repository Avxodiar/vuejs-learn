<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div class="game">
        <div class="control">
            <p v-if="gameOver">
                <span v-if="winner"> {{ winner }} WIN!</span>
                <span v-else> Ничья </span>
            </p>
            <p v-else>Ход игрока</p>
            <button
                class="btn"
                @click="resetGame"
                :class="{danger: gameOver}"
            >
                Начать заново
            </button>
        </div>

        <table class="board"
               :class="{'user-win': winner === 'user', 'user-fail': winner === 'computer', 'game-over': gameOver}"
        >
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
    import {getTurn, checkWin} from '@/assets/tictactoe.js'

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
                leftStep: 9,
                winner: ''
            }
        },
        computed: {
            /**
             * Флаг завершения игры
             */
            gameOver() {
                return !(this.winner === '' && this.leftStep);
            }
        },
        methods: {
            /**
             * Перезапуск игры
             */
            resetGame() {
                this.winner = '';
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
                if( !this.gameOver && this.board[row][col] === 0) {
                    this.board[row][col]++;
                    this.step();

                    if (!this.gameOver) {
                        this.computerTurn();
                    }
                }
            },
            /**
             * Ход компьютера
             */
            computerTurn() {
                let turn = getTurn(this.board, this.leftStep);
                this.board[turn.row][turn.col]--;
                this.step();
            },
            /**
             * Общие действия хода
             */
            step() {
                this.leftStep--;
                // Проверка победы
                let res = checkWin(this.board);
                console.log(res);
                if (res.win) {
                    // Установка победителя
                    this.winner = res.winner > 0 ? 'user' : 'computer';
                    // line, row, diag
                    // id
                }
            }
        }
    }
</script>

<style>
    .game {
        width: 600px;
        margin: 0 auto 3em;
    }
    .game .board {
        margin: auto;
        border: 1px solid gray;
        border-collapse: collapse;
    }
    .game .game-over td,
    .game .game-over .cell:hover {
        background-color: lightgrey;
    }
    .game .user-win td,
    .game .user-win .cell:hover {
    background-color: lightgreen;
    }
    .game .user-fail td,
    .game .user-fail .cell:hover {
    background-color: lightpink;
    }
    .game .control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1em;
    }
    .game .control * {
        align-self: center;
    }
    .game .control:first-child {
        font-weight: bold;
    }
</style>
