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

- +=: suma y reasigna en la misma línea.  
- -=: resta y actualiza el valor.  
- *=: multiplica y guarda el resultado.  
- /=: divide y persiste el cociente.  
- Clave: let permite cambiar el valor de la variable.  

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

### Métodos esenciales de String  
- **length**: devuelve cuantos caracteres tiene un texto.
```
const texto = "hola mundo";
texto.length; // 10
```
- **slice**: Extrae desde el indice de inicio, hasta el fin sin incluir el fin, acepta indices negativos para contar desde el final.
- **substring**: Es igual pero no acepta indices negativos.

```
const texto1 = "JavaScript es genial";
texto1.slice(0, 10);   // "JavaScript"
texto1.slice(11);      // "es genial"
texto1.slice(-6);      // "genial"

const texto2 = "hola mundo";
texto2.substring(0, 4); // "hola"
```

- **split**: divide un string usando un separador y devuelve un array.
```
const texto3 = "línea uno, línea dos, línea tres";
texto3.split(", "); // ["línea uno", "línea dos", "línea tres"]
```
- **trim**: Elimina espacios al inicio y al final.
```
const crudo = "  hola mundo  ";
crudo.trim();      // "hola mundo"
// submétodos:
crudo.trimStart(); // elimina al inicio
crudo.trimEnd();   // elimina al final
```

- **toLowerCase** - **toUpperCase**: Estandarizar mayusculas y minusculas.
```
const palabra = "JavaScript";
palabra.toLowerCase(); // "javascript"
palabra.toUpperCase(); // "JAVASCRIPT"
```

**Buscar, Validar y reemplazar**
- **include** Confirma la presencia de una subcadena y devuelve true o false.
```
const contenido = "aprende JavaScript desde cero";
contenido.includes("JavaScript"); // true
contenido.includes("Python");     // false
```
- **Validar inicio - fin**: Util para revisar prefijos y/o extenciones de archivos.
```
const archivo = "documento.md";
archivo.startsWith("doc"); // true
archivo.endsWith(".md");   // true
```
- **repace**: Reemplazar sin mutar originales, crea un nuevo string con el cambio sin mutar el original.

```
const texto6 = "hola mundo, hola JavaScript";
const cambiado = texto6.replace("hola", "hi");
// cambiado: "hi mundo, hola JavaScript"
// texto6 sigue igual: "hola mundo, hola JavaScript"
```

#### Puntos clave para fijar aprendizaje:

- length: cuenta caracteres.
- slice y substring: extraen partes, solo slice acepta índices negativos.
- split: divide en array por separador.
- trim: limpia espacios; sus submétodos atienden inicio o fin.
- toLowerCase/toUpperCase: normalizan para comparación confiable.
- includes: búsqueda rápida que retorna true/false.
- Validación de prefijo y sufijo: inicio y extensión, como en "documento.md".
- replace: reemplaza sin modificar el original por la inmutabilidad de los strings.

## Igualdad debil( == ) vs Igualdad estricta( === )
Con igualdad débil el motor intenta convertir tipos antes de comparar, la igualdad estricta permite comparar valor y tipo, evitando la conversión.  
```
console.log(5 == '5');      // true
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(null == undefined); // true
```
**Claves:**

- La coerción intenta alinear tipos antes de comparar.
- Valores distintos como número 5 y string '5' pueden considerarse iguales.
- En contexto booleano, combinaciones como null y undefined terminan siendo equivalentes.
- Estos casos dificultan el control de errores y la lectura del código.

```
console.log(5 != '5'); // false
```
*La comparación estricta evita comparaciones*
```
console.log(5 === 5);    // true
console.log(5 === '5');  // false
```

*Buenas práticas*
Usa === y !== por defecto.  
Evita == y != para prevenir resultados inesperados. 

## Operadores Lógicos  
Los operadores lógicos permiten combinar, negar y evaluar múltiples condiciones.  
Son fundamentales para controlar el flujo de tu aplicación, decidir si un usuario puede avanzar a un bloque específico y validar permisos como administrador o usuario activo.  
- Tres operadores principales: AND (&&), OR (||) y NOT (!).
- Devuelven resultados en valor booleano: true o false.
- Útiles para permisos y estados: es administrador, es usuario, está activo.

## Sentencia If-else  
Forma parte del control de flujo condicional, evalua una expresión y según sea verdadera o falsa, ejecuta uno u otro bloque de código.

```
const edad = 18;

if (edad >= 19) {
  console.log('eres mayor de edad');
} else if (edad === 18) {
  console.log('Tienes dieciocho años');
} else {
  console.log('eres menor de edad');
}
```
## Sentencia switch
Es una estructura de control que compara una misma expresión con varios valores y ejecuta el código del caso que coincide, para entenderlo mejor como:  
- Elegir un menú: Una sola elección valida entre varias.
Switch es ideal cuando comparas un unico valor contra varias opciones.
- Evita cadenas largas de condiciones.
- Ordena el código cuando hay varias opciones de cadenas discretas.
- Compara una misma expresión con varios casos.

### Como se compone la estructura
- **Switch (expresión)**: inicia el bloque y define qué se evaluará.
- **Case valor**: ejecuta si coincide con la expresión.
- **Break**: corta la ejecución y evita que se ejecute el siguiente caso.
- **Default**: opción por defecto cuando no coincide ningún caso.
- Es clave respetar la estructura y los dos puntos tras cada case.
```
const dia = "lunes"; // un string con el día seleccionado

switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
  case "viernes":
    console.log("día laboral");
    break;
  case "sábado":
  case "domingo":
    console.log("fin de semana");
    break;
  default:
    console.log("día no válido");
}
```
