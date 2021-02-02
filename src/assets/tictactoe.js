/**
 * Определение хода компьютера
 * @param {array} board - таблица с ходами
 * @param {int} leftStep - осталось ходов
 */
function getTurn(board, leftStep) {
    // случайный шаг (простой уровень сложности)
    // номер свободной ячейки
    let num = randomInteger(1, leftStep);
    // сливаем таблицу в одномерный массив для упрощения
    const flatBoard = board[0].concat(board[1],board[2]);
    //находим num-ую не заполненную ячейку
    let newId = flatBoard.findIndex(item => {
        if (item === 0) {
            num--;
        }
        return num === 0;
    });

    // преобразуем в координаты
    let x = Math.floor(newId / 3);
    let y = newId % 3;

    return {row:x, col:y};
}

/**
 * Cлучайное число от 0 до max
 */
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export {getTurn}
