//Desafio 1
;
var funcionarioDesafio1 = {};
funcionarioDesafio1.codigo = 10;
funcionarioDesafio1.nome = 'Jonh';
console.log("Desafio 1 - Código: ", funcionarioDesafio1.codigo, " - Nome:", funcionarioDesafio1.nome);
//Desafio 2
var Cargo;
(function (Cargo) {
    Cargo[Cargo["Atriz"] = 0] = "Atriz";
    Cargo[Cargo["Padeiro"] = 1] = "Padeiro";
})(Cargo || (Cargo = {}));
var func1 = {
    nome: 'maria',
    idade: 29,
    profissao: Cargo.Atriz
};
var func2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Cargo.Padeiro
};
var func3 = {
    nome: 'laura',
    idade: 32,
    profissao: Cargo.Atriz
};
var func4 = {
    nome: "carlos",
    idade: 19,
    profissao: Cargo.Padeiro
};
console.log("Desafio 2 - Nome: ", func1.nome, " - Idade:", func1.idade, " - Profissão:", Cargo[func1.profissao]);
console.log("Desafio 2 - Nome: ", func2.nome, " - Idade:", func2.idade, " - Profissão:", Cargo[func2.profissao]);
console.log("Desafio 2 - Nome: ", func3.nome, " - Idade:", func3.idade, " - Profissão:", Cargo[func3.profissao]);
console.log("Desafio 2 - Nome: ", func4.nome, " - Idade:", func4.idade, " - Profissão:", Cargo[func4.profissao]);
//Desafio 3
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function deposito(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
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
    botaoAtualizar.addEventListener('click', function () {
        var valor = Number(soma.value);
        if (!(valor > 0)) {
            valor = 0;
        }
        deposito(valor);
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
