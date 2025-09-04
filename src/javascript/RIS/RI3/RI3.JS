class cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefone = new Set()
    }

    get pegarCpf() {
        return this.#cpf
    }

    get pegarNome() {
        return this.nome
    }

    get pegarNomeUpper() {
        return this.nome.toUpperCase()
    }

    get pegarNomeLower() {
        return this.nome.toLowerCase()
    }
}

class telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    get pegarDddUpper() {
        return this.ddd.toString().toUpperCase()
    }

    get pegarDddLower() {
        return this.ddd.toString().toLowerCase()
    }

    get pegarNumeroUpper() {
        return this.numero.toString().toUpperCase()
    }

    get pegarNumeroLower() {
        return this.numero.toString().toLowerCase()
    }
}

class endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }

    get pegarRuaUpper() {
        return this.rua.toUpperCase()
    }

    get pegarRuaLower() {
        return this.rua.toLowerCase()
    }

    get pegarCidadeUpper() {
        return this.cidade.toUpperCase()
    }

    get pegarCidadeLower() {
        return this.cidade.toLowerCase()
    }

    get pegarEstadoUpper() {
        return this.estado.toUpperCase()
    }

    get pegarEstadoLower() {
        return this.estado.toLowerCase()
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

    get pegarRazaoSocialUpper() {
        return this.RazaoSocial.toUpperCase()
    }

    get pegarRazaoSocialLower() {
        return this.RazaoSocial.toLowerCase()
    }

    get pegarNomeFateUpper() {
        return this.nomeFate.toUpperCase()
    }

    get pegarNomeFateLower() {
        return this.nomeFate.toLowerCase()
    }

    detalhe() {
        console.log("----------------------------------------------------")
        console.log(`Razão Social: ${this.RazaoSocial}`)
        console.log(`Nome Fantasia: ${this.nomeFate}`)
        console.log(`Estado: ${this.endereco.estado} Cidade: ${this.endereco.cidade} Rua: ${this.endereco.rua} Nº: ${this.endereco.numero}`)
        for (let tel of this.telefone) {
            console.log(`Telefone: (${tel.ddd}) ${tel.numero}`)
            console.log('----------------------------------------------------------------')
        }
    }
}


let enderecoEmpresa = new endereco("Rua João", 123, "Cidade", "Estado")
let empresa1 = new empresa("Empresa Deltarune", "Kris", "04052005", enderecoEmpresa)

let telefone1 = new telefone(12, 40028922)
let telefone2 = new telefone(13, 12345678)
empresa1.telefone.add(telefone1)
empresa1.telefone.add(telefone2)

let cliente1 = new cliente("Gabriel", "12345678900", enderecoEmpresa)
let cliente2 = new cliente("Maria", "98765432100", enderecoEmpresa)
let cliente3 = new cliente("Lucas", "11122233344", enderecoEmpresa)
let cliente4 = new cliente("Ana", "55566677788", enderecoEmpresa)
let cliente5 = new cliente("João", "99988877766", enderecoEmpresa)

empresa1.cliente.add(cliente1)
empresa1.cliente.add(cliente2)
empresa1.cliente.add(cliente3)
empresa1.cliente.add(cliente4)
empresa1.cliente.add(cliente5)

empresa1.detalhe()

console.log(cliente1.pegarNomeUpper)     
console.log(cliente2.pegarNomeLower)     
console.log(enderecoEmpresa.pegarCidadeUpper) 
console.log(empresa1.pegarRazaoSocialLower)  
