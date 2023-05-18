const soletrar = (palavra: string) => {
    const letras = palavra.split(/(?:)/u);
    let palavraSoletrada: string = '';

    for (const letra of letras) {
        palavraSoletrada = palavraSoletrada + letra + '-'
    }

    return palavraSoletrada.slice(0, -1);
}

console.log(soletrar('programador'));