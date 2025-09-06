class Cliente {
  #cpf; 

  constructor(nome, cpf, endereco, telefones = []) {
    this.nome = nome;
    this.#cpf = cpf;
    this.endereco = endereco;
    this.telefones = telefones;
  }

  get cpf() {
    return this.#cpf;
  }

  getNomeUpper() {
    return this.nome.toUpperCase();
  }

  getNomeLower() {
    return this.nome.toLowerCase();
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(numero) {
    this.telefones = this.telefones.filter(t => t.numero !== numero);
  }

  descricao() {
    return `Cliente: ${this.nome} (CPF: ${this.#cpf})
Endereço: ${this.endereco.descricao()}
Telefones: ${this.telefones.map(t => t.numero).join(", ")}`;
  }
}

class Telefone {
  constructor(numero, tipo) {
    this.numero = String(numero);
    this.tipo = tipo; 
  }

  getNumeroUpper() {
    return this.numero.toUpperCase();
  }

  getNumeroLower() {
    return this.numero.toLowerCase();
  }
}

class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  }

  getCidadeUpper() {
    return this.cidade.toUpperCase();
  }

  getCidadeLower() {
    return this.cidade.toLowerCase();
  }

  descricao() {
    return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
  }
}

class Empresa {
  #cnpj; 

  constructor(nome, cnpj, endereco, telefones = [], clientes = []) {
    this.nome = nome;
    this.#cnpj = cnpj;
    this.endereco = endereco;
    this.telefones = telefones;
    this.clientes = clientes;
  }

  get cnpj() {
    return this.#cnpj;
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  descricao() {
    return `
Empresa: ${this.nome} (CNPJ: ${this.#cnpj})
Endereço: ${this.endereco.descricao()}
Telefones: ${this.telefones.map(t => t.numero).join(", ")}
Clientes:
${this.clientes.map(c => c.descricao()).join("")}
    `;
  }
}


const endEmpresa = new Endereco("chique chique", 1000, "Bahia", "BH");
const telefone1 = new Telefone("1111-1111", "fixo");
const telefone2 = new Telefone("9999-9999", "celular");

const empresa = new Empresa("SBT", "40028922", endEmpresa);
empresa.adicionarTelefone(telefone1);
empresa.adicionarTelefone(telefone2);

const cliente1 = new Cliente(
  "Cliente 1",
  "000.000.000-01",
  new Endereco("Rua 1", 10, "chique chique", "BH"),
  [new Telefone("9000-001", "celular"), new Telefone("4000-001", "fixo")]
);
empresa.adicionarCliente(cliente1);

const cliente2 = new Cliente(
  "Cliente 2",
  "000.000.000-02",
  new Endereco("Rua 2", 20, "chique chique", "BH"),
  [new Telefone("9000-002", "celular"), new Telefone("4000-002", "fixo")]
);
empresa.adicionarCliente(cliente2);

const cliente3 = new Cliente(
  "Cliente 3",
  "000.000.000-03",
  new Endereco("Rua 3", 30, "chique chique", "BH"),
  [new Telefone("9000-003", "celular"), new Telefone("4000-003", "fixo")]
);
empresa.adicionarCliente(cliente3);

const cliente4 = new Cliente(
  "Cliente 4",
  "000.000.000-04",
  new Endereco("Rua 4", 40, "chique chique", "BH"),
  [new Telefone("9000-004", "celular"), new Telefone("4000-004", "fixo")]
);
empresa.adicionarCliente(cliente4);

const cliente5 = new Cliente(
  "Cliente 5",
  "000.000.000-05",
  new Endereco("Rua 5", 50, "chique chique", "BH"),
  [new Telefone("9000-005", "celular"), new Telefone("4000-005", "fixo")]
);

empresa.adicionarCliente(cliente5);

console.log(empresa.descricao());
