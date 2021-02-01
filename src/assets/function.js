/**
 * Исчисляемые формы слова
 * пример: (count, 'слон', 'слона', 'слонов')
 * @param count - количество
 * @param form1 - первая форма ( 1 слон )
 * @param form2 - вторая форма ( 2-4 слона )
 * @param form5 - пятая форма ( 5-19 слонов )
 * @returns {string}
 */
function numeralWord(count, form1, form2, form5) {
    let n = count % 100;
    let n1 = n % 10;

    if (n > 10 && n < 20) return form5;
    if (n1 > 1 && n1 < 5) return form2;
    if (n1 === 1) return form1;

    return form5;
}

/**
 * Делает первый символ заглавным
 * @param value
 * @returns {string}
 */

function ucFirst(value){
    return value[0].toUpperCase() + value.slice(1);
}

export {numeralWord, ucFirst}
