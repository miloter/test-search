import TestSearch from "./test-search.js";

const ms = new TestSearch();

console.log(ms.eval('hola mundo', ">= b && <= z"));
console.log(ms.eval('hola mundo', "!(>= 'k')"));
console.log(ms.eval('hola mundo', "'ún'"));
console.log(ms.eval('hola mundo', "ún"));
console.log(ms.eval('abc', ">= ab && <= abd"));
console.log(ms.eval('ab\nc', "test '\\r|\\n'"));
console.log(ms.eval('ahola mundo', "test 'hola.*'"));
console.log(ms.eval('hola \' mundo', "test 'hola \'"));
console.log(ms.eval('hola mundo', ""));
console.log(ms.eval('hola mundo', "!= edad"));
console.log(ms.eval('hola mundo', "!nuevo"));
console.log(ms.eval('hola mundo', "hola | (mundo & nuevo)"));
console.log(ms.eval('hola mundo', "hola & (mundo | nuevo)"));
console.log(ms.eval('hola mundo', "hola & mundo & nuevo"));
console.log(ms.eval('hola \' mundo', "'\\' m'"));
console.log(ms.eval('hola \' mundo', "test '\\' m'"));
console.log(ms.eval('Empresa \' Búsqueda', "'\\"));
console.log(ms.eval('101', "<= 101"));
console.log(ms.eval('101', '>= -1 & <= 201'));
