function numeralWord(count, form1, form2, form5) {
    let n = count % 100;
    let n1 = n % 10;

    if (n > 10 && n < 20) return form5;
    if (n1 > 1 && n1 < 5) return form2;
    if (n1 === 1) return form1;

    return form5;
}

export {numeralWord}
