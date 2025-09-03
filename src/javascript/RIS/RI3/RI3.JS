class cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefone = new Set()
    }
    get Nome() {
        return this.nome
    }
    get pegarCpf() {
        return this.#cpf
    }
    get Endereco() {
        return this.endereco
    }
}

class telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }
    get Rua() {
        return this.rua
    }
    get Numero() {
        return this.numero
    }
    get Cidade() {
        return this.cidade
    }
    get Estado() {
        return this.estado
    }
}

class empresa {
    #cnpj
    constructor(RazaoSocial, nomeFate, cnpj, endereco) {
        this.RazaoSocial = RazaoSocial
        this.nomeFate = nomeFate
        this.#cnpj = cnpj
        this.endereco = endereco
        this.cliente = new Set()
        this.telefone = new Set()
    }
    get pegarCnpj() {
        return this.#cnpj
    }
    get NomeFate() {
        return this.nomeFate
    }
    get RazaoSocial() {
        return this.RazaoSocial
    }
    get Endereco() {
        return this.endereco
    }
    detalhe() {
        console.log(`Razão Social: ${this.RazaoSocial}`)
        console.log(`Nome Fantasia: ${this.nomeFate}`)
        console.log("----------------------------------------------------")
        console.log(`Estado: ${this.endereco.Estado} Cidade: ${this.endereco.Cidade} Rua: ${this.endereco.Rua} Nº: ${this.endereco.Numero}`)
        for (let tel of this.telefone) {
            console.log(`Telefone: (${tel.ddd}) ${tel.numero}`)
        }
    }
}

let enderecoEmpresa = new endereco("Rua João", 123, "Cidade ", "Estado ")
let empresa1 = new empresa("Empresa Deltarune", "Kris", "04052005", enderecoEmpresa)

let telefone1 = new telefone(12, 40028922)
let telefone2 = new telefone(13, 12345678)
empresa1.telefone.add(telefone1)
empresa1.telefone.add(telefone2)

let cliente1 = new cliente("Gabriel", "12345678900", enderecoEmpresa)
let cliente2 = new cliente("Maria", "98765432100", enderecoEmpresa)
empresa1.cliente.add(cliente1)
empresa1.cliente.add(cliente2)

empresa1.detalhe()