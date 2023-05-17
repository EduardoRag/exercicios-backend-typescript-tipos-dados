const calc = (numbers: number[]) => {
    for (const number of numbers) {
        for (let i = 0; i < 11; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
            if (i === 10) {
                console.log('---------------\n');
            }
        }
    }

    return;
}

calc([1, 5, 2]);