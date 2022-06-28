class ContaBancaria {
    constructor(agencia, numero, tipo, saldo=0){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor <= this._saldo){
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
        return "Operação negada. Saldo insuficiente";  
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo=0, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = this.cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo=0){
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo=0){
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada. Saldo insuficiente";
        }
        else{
            if (valor > 500){
                return "Operação negada. Saque de até R$500,00, somente";
            }
            this._saldo -= valor;
            return this._saldo;
        }
        
    }
}