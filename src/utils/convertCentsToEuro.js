// concer cents to euro
const convertCentsToEuro = centsValue => {
    const centToEuro = parseInt(centsValue, 10) / 100;
    return '€' + centToEuro.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });
}

export default convertCentsToEuro;