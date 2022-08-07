
public class Main {

    public static void main(String[] args) {
        Cliente goku = new Cliente();
        goku.setNome("Goku");

        Conta cc = new ContaCorrente(goku);
        Conta poupanca = new ContaPoupanca(goku);

        cc.depositar(1800);
        cc.transferir(1500, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }

}
