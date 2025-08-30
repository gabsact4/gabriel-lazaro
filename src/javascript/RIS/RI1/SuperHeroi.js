const personagem = {
    nome: 'peter parker',
    identidade: 'homem aranha',
    velocidade: 25,
    forca: 25,
    resistencia: 25,
    poderes: ['teia', 'agilidade', 'força'],
    cidade: 'nova york',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem2 = {
    nome: 'tony stark',
    identidade: 'homem de ferro',
    idade: 25,
    velocidade: 40,
    forca: 45,
    resistencia: 35,
    poderes: ['dinheiro', 'tecnologia', 'inteligencia'],
    cidade: 'nova york',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem3 = {
    nome: 'johnny storm',
    identidade: 'tocha humana',
    idade: 35,
    velocidade: 86,
    forca: 90,
    resistencia: 75,
    poderes: ['fogo', 'voo', 'agilidade'],
    cidade: 'nova york',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem4 = {
    nome: 'Steve Rogers',
    identidade: 'capitao america',
    idade: 137,
    velocidade: 41,
    forca: 49,
    resistencia: 75,
    poderes: ['escudo', 'força', 'agilidade'],
    cidade: 'nova york',
    descricao: function() {
       return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.'; 
    }
}

const personagem5 = {
    nome: 'Victor von Doom',
    identidade: 'doutor destino',
    idade: 44,
    velocidade: 35,
    forca: 45,
    resistencia: 46,
    poderes: ['magia', 'engenharia', 'inteligencia'],
    cidade: 'Latvéria',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem6 = {
    nome: 'Stephen Vincent Strange',
    identidade: 'doutor estranho',
    idade: 30,
    velocidade: 86,
    forca: 45,
    resistencia: 25,
    poderes: ['magia'],
    cidade: 'nova york',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem7 = {
    nome: 'reed richards',
    identidade: 'senhor fantastico',
    idade: 40,
    velocidade: 49,
    forca: 46,
    resistencia: 78,
    poderes: ['borracha', 'inteligencia'],
    cidade: 'nova york',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const personagem8 = {
    nome: 'logan',
    identidade: 'wolverine',
    idade: 'DESCONHECIDO',
    velocidade: 38,
    forca: 56,
    resistencia: 85,
    poderes: ['fator de cura', 'sentidos aguçados', 'garras de adamantium'],
    time: 'X-MEN',
    cidade: 'Genosha',
    descricao: function() {
        return 'nome do personagem: ' + this.nome + ', identidade: ' + this.identidade + ', velocidade: ' + this.velocidade + ', força: ' + this.forca + ', resistência: ' + this.resistencia + '.';
    }
}

const civil_war = [
    personagem,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7,
    personagem8
];

function compararDuelo(heroi1, heroi2) {
    console.log(`${heroi1.nome} vs ${heroi2.nome}`);
    let pontosUm = 0;
    let pontosDois = 0;

    if (heroi1.velocidade > heroi2.velocidade) {
        console.log(`velocidade: ${heroi1.nome} venceu`);
        pontosUm++;
    } else if (heroi2.velocidade > heroi1.velocidade) {
        console.log(`velocidade: ${heroi2.nome} venceu`);
        pontosDois++;
    } else {
        console.log(`velocidade: empate`);
    }

    if (heroi1.forca > heroi2.forca) {
        console.log(`força: ${heroi1.nome} venceu`);
        pontosUm++;
    } else if (heroi2.forca > heroi1.forca) {
        console.log(`força: ${heroi2.nome} venceu`);
        pontosDois++;
    } else {
        console.log(`força: empate`);
    }

    if (heroi1.resistencia > heroi2.resistencia) {
        console.log(`resistência: ${heroi1.nome} venceu`);
        pontosUm++;
    } else if (heroi2.resistencia > heroi1.resistencia) {
        console.log(`resistência: ${heroi2.nome} venceu`);
        pontosDois++;
    } else {
        console.log(`resistência: empate`);
    }

    if (pontosUm > pontosDois) {
        console.log(`Vencedor: ${heroi1.nome}`);
    } else if (pontosDois > pontosUm) {
        console.log(`Vencedor: ${heroi2.nome}`);
    } else {
        console.log(`Empate`);
    }
}


for (let i = 0; i < civil_war.length; i++) {
    for (let j = i + 1; j < civil_war.length; j++) {
        compararDuelo(civil_war[i], civil_war[j]);
    }
}
