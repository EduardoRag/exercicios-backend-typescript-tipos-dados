const calc = (numbers: number[]): string => {
    let resultado: string = '';

    for (const number of numbers) {
        for (let i = 0; i < 11; i++) {
            resultado += `${number} x ${i} = ${number * i}\n`
            if (i === 10) {
                resultado += '---------------\n\n';
            }
        }
    }

    return resultado;
}

console.log(calc([1, 5, 2]));