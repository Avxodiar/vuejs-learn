<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div class="game">
        <div class="control">
            <p v-if="gameOver">
                <span v-if="win.name === 'user'">Победа!</span>
                <span v-else-if="win.name === 'computer'">Проигрыш</span>
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
           :class="[crossLine, {
                'user-win': win.name === 'user',
                'user-fail': win.name === 'computer',
                'game-over': gameOver,
           }]">
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
                win: {
                    type: '',
                    id: 0,
                    name: ''
                }
            }
        },
        computed: {
            /**
             * Флаг завершения игры
             */
            gameOver() {
                return !(this.win.name === '' && this.leftStep);
            },
            crossLine() {
                return (this.gameOver) ? this.win.type + this.win.id : '';
            }
        },
        methods: {
            /**
             * Перезапуск игры
             */
            resetGame() {
                this.win = { type: '', id: 0, name: '' };
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
                if (res.win) {
                    // Установка победителя
                    this.win.name = res.winner > 0 ? 'user' : 'computer';
                    this.win.type = res.type;
                    this.win.id = res.id;
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
        position: relative;
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
    .game .board.line0::before,
    .game .board.line1::before,
    .game .board.line2::before {
        content: '';
        position: absolute;
        left: 0;
        width: calc(100% + 1px);
        height: 8px;
        background: darkgray;
        z-index: 1;
    }
    .game .board.line0::before {
        top: calc( (100% / 6) - 6px);

    }
    .game .board.line1::before {
        top: calc( (100% / 2) - 6px);
    }
    .game .board.line2::before {
        top: calc( (100% / 6 * 5) - 6px);
    }

    .game .board.row0::before,
    .game .board.row1::before,
    .game .board.row2::before {
        content: '';
        position: absolute;
        top: 0;
        width: 9px;
        height: calc(100% + 1px);
        background: darkgray;
        z-index: 1;
    }
    .game .board.row0::before {
        left: calc( (100% / 6) - 4px);

    }
    .game .board.row1::before {
        left: calc( (100% / 2) - 4px);
    }
    .game .board.row2::before {
        right: calc( (100% / 6) - 6px);
    }

    .game .board.diag0::before,
    .game .board.diag1::before {
        content: '';
        position: absolute;
        top: -16%;
        left: 49%;
        width: 10px;
        height: 133%;
        background: darkgray;
        z-index: 1;
    }
    .game .board.diag0::before {
        transform: rotate(-45deg);
    }
    .game .board.diag1::before {
        transform: rotate(45deg);
    }

</style>
