class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.ITF = 0.00005; // 0.005% 
    }

    calcular_ITF(monto) {
        return monto * this.ITF;
    }

    depositar(monto) {
        const impuesto = this.calcular_ITF(monto);
        const montoF = monto - impuesto;
        this.saldo += montoF;
        document.write(`<br>Se han depositado s/${monto}. ITF aplicado: s/${impuesto.toFixed(2)}. Nuevo saldo: s/${this.saldo.toFixed(2)}`);
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            const impuesto = this.calcular_ITF(monto);
            const montoF = monto + impuesto; // El monto a retirar debe incluir el impuesto
            if (montoF <= this.saldo) {
                this.saldo -= montoF;
                document.write(`<br>Se han retirado s/${monto}. ITF aplicado: s/${impuesto.toFixed(2)}. Nuevo saldo: s/${this.saldo.toFixed(2)}`);
            } 
        } else {
            document.write(`<br>Fondos insuficientes.`);
        }
    }

    verSaldo() {
        document.write(`<br>Saldo actual de ${this.titular}: s/${this.saldo.toFixed(2)}`);
    }
}

// Ejemplo de uso
const cuenta1 = new CuentaBancaria('Edgar', 1000);
cuenta1.verSaldo();
cuenta1.depositar(200);
cuenta1.retirar(700);
cuenta1.retirar(700);
cuenta1.verSaldo();
