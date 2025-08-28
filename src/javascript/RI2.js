function Cliente(nome, telefone, email, endereco){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.exibir = function(Cliente){
         console.log('-------------------------------------')
         console.log('Nome: '+ this.nome)
         console.log('email:' + this.email)
         console.log('-------------------------------------')
         console.log('Telefone: (' + this.telefone.dd + ') ' + this.telefone.numero)
         console.log('-------------------------------------')
         console.log('Endereço: ' + this.endereco.rua + ', ' + this.endereco.numero + ' ' + this.endereco.cidade + ' ' + this.endereco.estado)
         console.log('-------------------------------------')   

    }

}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
}

function Telefone(dd, numero) {
    this.dd = dd;
    this.numero = numero;
}


let telefone = new Telefone("11", "40028922");
let endereco = new Endereco("avenida brasil", "123",  "São Paulo", "SP");
let cliente = new Cliente("Kid B.", telefone, "Kid@gmail.com", endereco);

let telefone2 = new Telefone("11", "40028922");
let endereco2 = new Endereco("avenida brasil", "123",  "São Paulo", "SP");
let cliente2 = new Cliente("Law", telefone, "Law@gmail.com", endereco);


let clientes = [cliente, cliente2].sort((a, b) => a.nome.localeCompare(b.nome));


for(let i = 0; i < clientes.length; i++){
    clientes[i].exibir()
}
