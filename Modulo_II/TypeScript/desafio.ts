
//Desafio 1

interface IFuncionario {  
    codigo: number,
    nome: string
};

const funcionarioDesafio1 = {} as IFuncionario;
funcionarioDesafio1.codigo = 10;
funcionarioDesafio1.nome = 'Jonh';

console.log("Desafio 1 - Código: ", funcionarioDesafio1.codigo, " - Nome:", funcionarioDesafio1.nome)


//Desafio 2

enum Cargo {
    Atriz,
    Padeiro
}

type FuncionarioDesafio2 = {
    nome: string,
    idade: number,
    profissao: Cargo
}

let func1: FuncionarioDesafio2 = {
    nome: 'maria',
    idade: 29,
    profissao: Cargo.Atriz
};

let func2: FuncionarioDesafio2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Cargo.Padeiro
};

let func3: FuncionarioDesafio2 = {
    nome: 'laura',
    idade: 32,
    profissao: Cargo.Atriz
};

let func4: FuncionarioDesafio2 = {
    nome: "carlos",
    idade: 19,
    profissao: Cargo.Padeiro
};


console.log("Desafio 2 - Nome: ", func1.nome, " - Idade:", func1.idade, " - Profissão:", Cargo[func1.profissao])
console.log("Desafio 2 - Nome: ", func2.nome, " - Idade:", func2.idade, " - Profissão:", Cargo[func2.profissao])
console.log("Desafio 2 - Nome: ", func3.nome, " - Idade:", func3.idade, " - Profissão:", Cargo[func3.profissao])
console.log("Desafio 2 - Nome: ", func4.nome, " - Idade:", func4.idade, " - Profissão:", Cargo[func4.profissao])




//Desafio 3




let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function deposito(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        let valor=Number(soma.value)
        if(!(valor>0)) {
            valor=0;
        }
        deposito(valor);
         
    });
}
botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});

