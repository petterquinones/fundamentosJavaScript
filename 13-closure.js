function crearCuentaBancaria(saldoinicial) {

     let saldo = saldoinicial;

     return {
          depositar(cantidad) {
               saldo += cantidad;
               return `Depositado: $${cantidad}, Saldo Actual: $${saldo}`;
          },
          retirar(cantidad) {
               if (cantidad > saldo) {
                    return ("Fondos insuficientes.")
               }
               saldo -= cantidad;
               return `Cantidad retirada: $ ${cantidad}, Saldo actual: $ ${saldo}`;
          },
          consultarSaldo(){
               return `Saldo: ${saldo}`;
          }
     }
     
}

const miCuenta = crearCuentaBancaria(1000);

console.log(miCuenta.depositar(399));

console.log(miCuenta.consultarSaldo());

console.log(miCuenta.retirar(299));