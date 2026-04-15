/**
 * Un closures es una función que tiene acceso a variables de un ambito externo.
 * incluso despues de que esa función externa ya haya terminado de ejecutarse
 */
// function outerFunction (){
//     let outerVariable = ' I am from outer function';

//     function innterFunction (){
//         console.log(outerVariable);
//     }

//     return innterFunction;
// }

// const closureExample = outerFunction();
// closureExample();

// function createCounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// const counterA = createCounter();
// const counterB = createCounter();


// counterA();
// counterA();
// counterA();
// counterB();

function outer(){
    let message = "hello, ";

    function inner(name){
        console.log(message + name);
    }

    return inner;
}

const closure = outer();

closure("Pedro");
