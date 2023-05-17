const gerarEtiqueta = (produto: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}): string[] => {
    const etiquetas: string[] = [];

    for (let i = 0; i < produto.qtd; i++) {
        etiquetas.push((`${produto.lote}-${produto.ano}-${((i + 1) / 100).toFixed(2)}`).replace('.', ''));
    }

    return etiquetas;
}

console.log(gerarEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 12
}));