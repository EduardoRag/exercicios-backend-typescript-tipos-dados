const usuarios: {
    nome: string,
    idade: number,
    status: boolean
}[] = [
        {
            nome: "Guido",
            idade: 32,
            status: true,
        },
        {
            nome: "Dani",
            idade: 30,
            status: true,
        },
        {
            nome: "João",
            idade: 40,
            status: false,
        },
        {
            nome: "Guilherme",
            idade: 29,
            status: true,
        },
        {
            nome: "Ana",
            idade: 18,
            status: false,
        },
        {
            nome: "José",
            idade: 28,
            status: false,
        },
    ]

const filtrarUsuarios = (lista: {
    nome: string,
    idade: number,
    status: boolean
}[], nome: string): { nome: string, idade: number, status: boolean }[] => {
    let usuarioEncontrado: { nome: string, idade: number, status: boolean }[] = [];

    for (const usuario of lista) {
        if (usuario.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase())) {
            usuarioEncontrado.push(usuario);
        }
    }

    return usuarioEncontrado;
}

console.log(filtrarUsuarios(usuarios, 'jo'));