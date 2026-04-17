# APUNTES FUNDAMENTOS DE JS CURSO 1 y 2  

## CURSO 1  

## IMPORTANTE TEMAS A REPASAR  

    -  Objetos.
    -  Funciones.  
    -  CallBack y promesas.  
    -  Consumo de http.  
    -  Ver nuevamente la clase de http (Documento Http.js), este codigo debo leerlo y estudiarlo muy bien una ve que finalice la ruta, para evaluar lo aprendido. 

## CURSO 2  

### Variables  
Es un espacio en memoria donde almacenamos valores.

**Var** 
Permite reasignar y redeclarar valores.
Permite reasignar un valor.

```  
// Evitar var por comportamientos inseguros
var bloquesRojos = true;      // booleano
var bloquesRojos = 5;          // redeclaración y cambio de tipo
console.log(bloquesRojos);     // 5  
```  

**let** 
No permite redeclarar la misma variable.
Permite reasignar un valor.
```
let contador = 0;
let mensaje = 'hola'; // string

// let contador = 5;   // Error: no puedes redeclarar la misma variable.
contador = 5;          // Correcto: puedes reasignar.
console.log(contador); // 5
```

**const**
No permite redeclarar ni reasignar la misma variable.
```
const PI = 3.14159;
// PI = 4;           // Error: no puedes reasignar una constante.
// const PI = 42;    // Error: no puedes redeclararla.
console.log(PI);      // 3.14159
```

### Tipos de datos

**Tipos de datos primitivos**
- const texto = "hola";                 // string
- const numero = 42;                      // number
- const booleano = true;                  // boolean (también puede ser false)
- const nulo = null;                      // null
- const indefinido = undefined;           // undefined
- const simbolo = Symbol('id');           // symbol
- const grande = 123n;  

**Tipos de datos complejos**  
- Un *objeto* agrupa pares clave-valor.
- Un *array* contiene listas de valores, incluso mezclados.
- Una *función* es un valor que puedes asignar y ejecutar.
Evita nombrar variables con palabras reservadas: por ejemplo, no uses "function" como nombre. 

### Operadores Aritmeticos y de asignación

**Operadores Aritmeticos**
Permiten calcular valores numericos de forma directa.
```
// Operadores aritméticos
const suma = 5 + 3; // 8
console.log(suma);

const resta = 5 - 3; // 2
console.log(resta);

const multiplicacion = 5 * 3; // 15
console.log(multiplicacion);

const division = 6 / 3; // 2
console.log(division);

const modulo = 5 % 2; // 1
console.log(modulo);

const potencia = 2 ** 3; // 8
console.log(potencia);
```

**Operadores de asignación**
Combinan calculo y reasignación sobre la misma Variable.
- Se usa let porque el valor cambiara.
```
let a = 5;
a += 3; // a = a + 3
console.log(a); // 8

let b = 10;
b -= 4; // b = b - 4
console.log(b); // 6

let c = 6;
c *= 2; // c = c * 2
console.log(c); // 12

let d = 15;
d /= 3; // d = d / 3
console.log(d); // 5
```

+=: suma y reasigna en la misma línea.  
-=: resta y actualiza el valor.  
*=: multiplica y guarda el resultado.  
/=: divide y persiste el cociente.  
Clave: let permite cambiar el valor de la variable.  

**Template literal**
Permiten evaluar expresiones dentro de ${}, también facilita la creación de texto multilinea.

```
// Expresiones dentro de template literals.
const precio = 100;
const cantidad = 3;
const total = `${precio * cantidad}`; // El resultado queda como string.

console.log(total);        // 300
console.log(typeof total); // 'string'
```
**Texto multilinea**
```
// Multilínea con template literals.
const nota = `
Mi nota
Este es el contenido
- nota uno
- nota dos
`;
console.log(nota);
```

