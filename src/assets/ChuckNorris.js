/**
 * Нахождение лучшего хода
 * @constructor
 */
class ChuckNorris {
    player = {
        human: 'H',
        comp: 'C'
    };
    counter = 0;
    board = [];

    /**
     * Загрузка 2ух мерной таблицы 3x3
     * @param {array} board
     */
    constructor(board) {
        // сливаем таблицу в одномерный массив
        const flatBoard = board[0].concat(board[1], board[2]);

        // для упрошения работы собираем таблицу в новом виде
        // сделанные шаги замещаются символами 'H' и 'C'
        // а в не заполненных ячейкаях указывается их id
        this.board = flatBoard.map((item, id) => {
            if (item === 0) {
                return id;
            }
            return (item === 1) ? this.player.human : this.player.comp;
        });
    }


    /**
     * Нахождение лучшего хода
     * @returns {number}
     */
    getTurn() {
        this.counter = 0;

        // находим лучший вариант
        let bestSpot = this.minimax(this.board, this.player.comp);

        return bestSpot.index;
    }

    /**
     * Алгоритм «минимакс»
     * Рекурсивно просчитывает победные комбинации
     * Достигнув конца партии, будь то победа, поражение или ничья (конечное состояние),
     * ИИ начислит себе положительное количество очков (в нашем случае +10) за победу,
     * отрицательное (-10) — за поражение, и нейтральное (0) — за ничью.
     *
     * 1. возвращает значение, если найдено конечное состояние (+10, 0, -10),
     * 2. проходит по всем пустым клеткам на поле,
     * 3. вызывает минимакс-функцию для каждой из них (рекурсия),
     * 4. оценивает полученные значения
     * 5. возвращает наилучшее из них.
     *
     * @param board - одномерная индексировання таблица
     * @param player - код игрока
     * @returns {{score: number}|*}
     */
    minimax(board, player) {
        this.counter++;

        // сприсок доступных ячеек
        const availSpots = this.emptyIndices(board);

        // проверка на терминальное состояние (победа / поражение / ничья)
        if (this.winning(board, this.player.human)) {
            return {score: -10};
        } else if (this.winning(board, this.player.comp)) {
            return {score: 10};
        } else if (availSpots.length === 0) {
            return {score: 0};
        }

        // массив для хранения всех объектов c результатами ходов
        let moves = [];

        // цикл по доступным клеткам
        for (let i = 0; i < availSpots.length; i++) {
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
            let move = {};
            move.index = board[availSpots[i]];

            // совершить ход за текущего игрока
            board[availSpots[i]] = player;

            //получить очки, заработанные после вызова минимакса от противника текущего игрока
            const nextPlayer = player === this.player.comp ? this.player.human : this.player.comp;
            let result = this.minimax(board, nextPlayer);
            move.score = result.score;

            // очистить клетку
            board[availSpots[i]] = move.index;

            moves.push(move);
        }

        // определяем лучший ход
        let bestMove;
        let isComp = player === this.player.comp;
        let bestScore = isComp ? -10000 : 10000;
        // перебираем комбинцаии ходов
        for (let i = 0; i < moves.length; i++) {
            if (
                // если это ход ИИ, то выбраем ходы с наибольшим количеством очков
                isComp && moves[i].score > bestScore
                ||
                // а если ход не ИИ,то выбраем ходы с наименьшим количеством очков
                !isComp && moves[i].score < bestScore
            ) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }

        return moves[bestMove];
    }

    /**
     * Список индексов пустых клеток доски
     * @param {array} board - одномерная индексировання таблица
     * @returns {array}
     */
    emptyIndices(board) {
        return board.filter(s => s !== this.player.human && s !== this.player.comp);
    }

    /**
     * Проверка таблицы на победу
     * @param {array} board - одномерная индексировання таблица
     * @param player - код игрока
     * @returns {boolean}
     */
    winning(board, player) {
        return (
            (board[0] === player && board[1] === player && board[2] === player)
            || (board[3] === player && board[4] === player && board[5] === player)
            || (board[6] === player && board[7] === player && board[8] === player)
            || (board[0] === player && board[3] === player && board[6] === player)
            || (board[1] === player && board[4] === player && board[7] === player)
            || (board[2] === player && board[5] === player && board[8] === player)
            || (board[0] === player && board[4] === player && board[8] === player)
            || (board[2] === player && board[4] === player && board[6] === player)
        )
    }
}

export {ChuckNorris};
