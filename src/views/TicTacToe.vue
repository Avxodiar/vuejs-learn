<template>
    <h2>Игра "Крестики-Нолики"</h2>
    <div class="game">

        <div class="panel">
            <div class="gamer">
                Игрок {{ userStat }}
                <span :class="{
                    'bg-green': games.win > games.fail,
                    'bg-red': games.win < games.fail
                }">
                    {{ games.win }}
                </span>
            </div>
            <div class="control">
                <div>
                    <p>Сыграно: {{ games.count }} {{ gamesWord }}</p>
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
                    :disabled="!gameOver"
                >
                    Начать заново
                </button>
            </div>
            <div class="gamer">
                {{ computerName }} {{ computerStat }}
                <span :class="{
                    'bg-green': games.win < games.fail,
                    'bg-red': games.win > games.fail
                }">
                    {{ games.fail }}
                </span>
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

        <fieldset>
            <legend>Выберите сложность игры</legend>
            <div>
                <input type="radio" name="selectorEasy" id="selectorEasy" value="0" v-model="difficulty">
                <label for="selectorEasy">Легкий</label>
            </div>
            <div>
                <input type="radio" name="selectorHard" id="selectorHard" value="1" v-model="difficulty">
                <label for="selectorHard">Чак Норрис (не проигрывает)</label>
            </div>
        </fieldset>

    </div>

    <p>Правила игры:</p>
    <ol>
        <li>Игрок ходит "крестиком", компьютер "ноликом"</li>
        <li>Первенство хода выполняется по очереди</li>
        <li>Первую игру начинает игрок</li>
    </ol>
</template>


<script>
    import Row from '@/components/TicTacToe/Row.vue'
    import {getTurn, checkWin} from '@/assets/tictactoe.js'
    import {numeralWord} from '@/assets/function.js'

    export default {
        name: "TicTacToe",
        components: {
            Row
        },
        data() {
            return {
                difficulty: 0,
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
        watch: {
            difficulty() {
                this.difficulty = parseInt(this.difficulty);
                this.games.count = 0;
                this.games.win = 0;
                this.games.fail = 0;
                this.resetGame();
            },
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
                    percent = Math.ceil(this.games.win / this.games.count * 100);
                }
                return '(' + percent + '%)';
            },
            /**
             * Процент побед компьютера
             */
            computerStat() {
                let percent = 0;
                if (this.games.count && this.games.fail) {
                    percent = Math.ceil(this.games.fail / this.games.count * 100);
                }
                return '(' + percent + '%)';
            },
            /**
             * Исчисляемые формы слова "игр"
             */
            gamesWord() {
                return numeralWord(this.games.count, 'игра', 'игры', 'игр');
            },
            /**
             * Имя компьютера в зависимости от сложности
             */
            computerName() {
                return (this.difficulty) ? 'Чак Норрис' : 'Компьютер';
            }

        },
        methods: {
            /**
             * Перезапуск игры
             */
            resetGame() {
                this.win = {type: '', id: 0, name: ''};
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
                if (!this.gameOver && this.board[row][col] === 0) {
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
                let turn = getTurn(this.board, this.leftStep, this.difficulty);
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

                // если игра закончилась, сохраняем результаты игры
                if (this.gameOver) {
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


<style scoped>
    .game {
        width: 600px;
        margin: 0 auto 3em;
    }

    .game fieldset {
        display: flex;
        justify-content: space-evenly;
        padding: 1em;
        margin: 3em 0 0;
        border-radius: 0.5em;
        border-width: thin;
    }

    .game fieldset legend {
        padding: 0.3em 0.8em;
        font-weight: bold;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        border-radius: 0.5em;
    }

    .game fieldset [type=radio],
    .game fieldset label {
        padding: 0.5em;
        font-size: 1.1em;
        cursor: pointer;
    }

    .game fieldset label:hover {
        text-shadow: 0 0 2px grey;
    }

    .game .panel {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
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
        font-weight: bold;
        font-size: 2em;
        background-color: #e6e6fa;
        outline: 2px solid gray;
    }

    .game .gamer span.bg-green {
        background-color: lightgreen;
        outline: 2px solid #1b5e20;
    }

    .game .gamer span.bg-red {
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
        font-size: 1em;
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
        padding: 0.5em;
        font-size: 1.5em;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }

    .game .control p span.green {
        color: green;
    }

    .game .control p span.red {
        color: red;
    }
</style>

<style>
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
        height: 12px;
        background: darkgray;
        z-index: 1;
    }

    .game .board.line0::before {
        top: calc((100% / 6) - 10px);

    }

    .game .board.line1::before {
        top: calc((100% / 2) - 10px);
    }

    .game .board.line2::before {
        top: calc((100% / 6 * 5) - 9px);
    }

    .game .board.row0::before,
    .game .board.row1::before,
    .game .board.row2::before {
        content: '';
        position: absolute;
        top: 0;
        width: 12px;
        height: 100%;
        background: darkgray;
        z-index: 1;
    }

    .game .board.row0::before {
        left: calc((100% / 6) - 5px);

    }

    .game .board.row1::before {
        left: calc((100% / 2) - 6px);
    }

    .game .board.row2::before {
        right: calc((100% / 6) - 6px);
    }

    .game .board.diag0::before,
    .game .board.diag1::before {
        content: '';
        position: absolute;
        top: -16%;
        left: 49%;
        width: 14px;
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
