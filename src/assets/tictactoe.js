import {ChuckNorris} from './ChuckNorris.js'

/**
 * Определение хода компьютера
 * @param {array} board - таблица с ходами
 * @param {int} leftStep - осталось ходов
 * @param difficulty - максимальный уровень сложности
 * @returns {{col: number, row: number}}
 */
function getTurn(board, leftStep, difficulty) {
    let newId;

    // если первый ход компьютера (leftStep == 9), то всегда делаем случайных ход
    if (parseInt(difficulty) && leftStep < 9) {
        let Chuck = new ChuckNorris(board);
        newId = Chuck.getTurn();
    } else {
        newId = randomTurn(board, leftStep);
    }

    // преобразуем в координаты
    let x = Math.floor(newId / 3);
    let y = newId % 3;

    return {row: x, col: y};
}

/**
 * Случайный шаг (легкий уровень сложности)
 * @param {array} board - таблица с ходами
 * @param {int} leftStep - осталось ходов
 * @returns {number} - id ячейки
 */
function randomTurn(board, leftStep) {

    // номер свободной ячейки
    let num = randomInteger(1, leftStep);
    // сливаем таблицу в одномерный массив для упрощения
    const flatBoard = board[0].concat(board[1], board[2]);

    //находим num-ую не заполненную ячейку
    return flatBoard.findIndex(item => {
        if (item === 0) {
            num--;
        }
        return num === 0;
    });
}

/**
 * Проверка победы
 * @param {array} board - таблицы игры
 * @returns {{winner: number, id: number, type: string, win: boolean}}
 */
function checkWin(board) {
    let result = {
        win: false,
        winner: 0,
        type: '',
        id: 0
    };

    // Проверяем наличие одинаковых символов
    // по строкам, столбцам и диагоналям
    const types = ['line', 'row', 'diag'];
    for (let i = 0; i < types.length; i++) {
        let res = check(types[i], board);
        if (isWin(res.winner)) {
            result.win = true;
            result.type = types[i];
            result.id = res.id;
            result.winner = res.winner;
        }

        if (result.win) {
            break;
        }
    }

    return result;
}

/**
 * Проверка таблицы игры на одинаковые значения
 * @param {string} type - тип проверки
 * @param {array} board - таблицы игры
 * @returns {object}
 */
function check(type, board) {
    let res = {};
    switch (type) {
        case 'line':
            res = checkLines(board);
            break;
        case 'row':
            res = checkRows(board);
            break;
        case 'diag':
            res = checkDiagonals(board);
            break;
    }
    return res;
}

/**
 * Проверка строк массива на одинаковые значения
 * @param {array} board - таблицы игры
 * @returns {{winner: number, id: number}}
 */
function checkLines(board) {
    let idx = 0;
    let win = 0;

    for (let i = 0; i < board.length; i++) {
        let res = sumArray(board[i]);
        if (isWin(res)) {
            idx = i;
            win = res;
            break;
        }
    }

    return {id: idx, winner: win};
}

/**
 * Проверка столбцов на одинаковые значения
 * @param {array} board - таблицы игры
 * @returns {{winner: number, id: number}}
 */
function checkRows(board) {
    let row1 = [board[0][0], board[1][0], board[2][0]];
    let row2 = [board[0][1], board[1][1], board[2][1]];
    let row3 = [board[0][2], board[1][2], board[2][2]];

    return checkLines([row1, row2, row3]);
}

/**
 * Проверка диагоналей на одинаковые значения
 * @param {array} board - таблицы игры
 * @returns {{winner: number, id: number}}
 */
function checkDiagonals(board) {
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];

    return checkLines([diag1, diag2]);
}

/**
 * Проверка победы
 * @param value
 * @returns {boolean}
 */
function isWin(value) {
    return (Math.abs(value) === 3);
}


/**
 * Cлучайное число от min до max включительно
 * @param {number} min - от
 * @param {number} max - до
 * @returns {number}
 */
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

/**
 * сумма всех элементов массива
 * @param {array} arr
 * @returns {number}
 */
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

export {getTurn, checkWin}
