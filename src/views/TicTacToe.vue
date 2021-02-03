<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div class="game">
        <div class="panel">
            <div class="gamer">
                Игрок {{ userStat }}
                <span>{{ games.win }}</span>
            </div>
            <div class="control">
                <div>
                    <p> Сыграно: {{ games.count }} игр </p>
                    <p v-if="gameOver">
                        <span class="green" v-if="win.name === 'user'">Победа!</span>
                        <span class="red" v-else-if="win.name === 'computer'">Проигрыш</span>
                        <span v-else> Ничья </span>
                    </p>
                    <p v-else><span>Ход игрока</span></p>
                </div>
                <button
                    class="btn"
                    @click="resetGame"
                    :class="{danger: gameOver}"
                >
                    Начать заново
                </button>
            </div>
            <div class="gamer">
                Компьютер {{ computerStat }}
                <span>{{ games.fail }}</span>
            </div>
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

    <p>Правила игры:</p>
    <ol>
        <li>Игрок ходит "крестиком", компьютер "ноликом"</li>
        <li>Первенство хода выполняется по очереди</li>
        <li>Первую игру начинает игрок</li>
    </ol>
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
                games: {
                    count: 0,
                    win: 0,
                    fail: 0
                },
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
            /**
             * Класс для отображения перечеркнутой линии при победе или проигрыше
             */
            crossLine() {
                return (this.gameOver) ? this.win.type + this.win.id : '';
            },
            /**
             * Процент побед игрока
             */
            userStat() {
                let percent = 0;
                if (this.games.count && this.games.win) {
                    percent =  Math.ceil(this.games.win / this.games.count * 100);
                }
                return '('+ percent + '%)';
            },
            /**
             * Процент побед компьютера
             */
            computerStat() {
                let percent = 0;
                if (this.games.count && this.games.fail) {
                    percent =  Math.ceil(this.games.fail / this.games.count * 100);
                }
                return '('+ percent + '%)';
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

                // Очередность первого хода
                if (this.games.count % 2 === 1) {
                    this.computerTurn();
                }
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

                if(this.gameOver) {
                    this.games.count++;
                    if (this.win.name === 'user') {
                        this.games.win++;
                    }
                    if (this.win.name === 'computer') {
                        this.games.fail++;
                    }
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

    .game .panel {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;
    }

    .game .gamer {
        display: flex;
        flex-direction: column;
        width: 25%;
        text-align: center;
    }
    .game .gamer * {
        text-align: center;
    }

    .game .gamer span {
        margin-top: 0.5em;
        padding: 0.2em;
        background-color: lightgreen;
        font-weight: bold;
        font-size: 2em;
        outline: 2px solid #1b5e20;
    }
    .game .gamer:last-child span {
        background-color: lightpink;
        outline: 2px solid #880e4f;
    }

    .game .control {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .game .control * {
        display: block;
        align-self: center;
        width: 100%;
        margin-right: 0;
    }
    .game .control:first-child {
        font-weight: bold;
    }
    .game .control p {
        margin-top: 0;
        text-align: center;
        font-weight: bold;
    }
    .game .control p span {
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 1em;
    }

    .game .control p span.green {
        color: green;
    }

    .game .control p span.red {
        color: red;
    }

    .game .board {
        position: relative;
        margin: auto;
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
