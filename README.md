# Lexical analyzer for texts in memory.

Implementation of a class whose main function is to
serve as a lexical analyzer or mini-scanner.
The classes of lexical components that it can recognize are:
Blanks (space, horizontal and vertical tab, form feed).
    Comments.
    Keywords.
    Identifiers.
    Numeric constants.
    Character constants.
    String constants.
    Operators.
    End of line (carriage return and/or new line).
    End of file.
    Unknown character.
In case of ambiguity, priority is established
by the order given above from top to bottom.

## Note:
mini-scanner is an ESM module so you will need to add to your package.json: "type": "module"

## Installation
```bash/powershell
npm install @miloter/mini-scanner
```

## Usage
```js
import MiniScanner from '@miloter/mini-scanner';

const scan = new MiniScanner('hello world\n new \r\n what do you \t bring us');

let token = scan.nextToken();

while (token === MiniScanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}
```

## Examples

### Creating instances
```js
import MiniScanner from '@miloter/mini-scanner';

const scan1 = new MiniScanner('hola mundo', true, true);
const scan2 = new MiniScanner('hola mundo', true);
const scan3 = new MiniScanner('hola mundo');
```

### Reading identifiers
```js
import MiniScanner from '@miloter/mini-scanner';

const scan = new MiniScanner('hola mundo\n nuevo \r\n que nos \t traes');

let token = scan.nextToken();

while (token === MiniScanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}
```

### Reading operators
```js
import MiniScanner from '@miloter/mini-scanner';

const tPlus = 0, tMinus = 1, tMul = 2, tDiv = 3, tEqu = 4, tEquStrict = 5;

const scan = new MiniScanner(
    'hola + mundo - nuevo * vida / salud == buen === provecho == diario');
scan.addOperator(tPlus, '+');
scan.addOperator(tMinus, '-');
scan.addOperator(tMul, '*');
scan.addOperator(tDiv, '/');
scan.addOperator(tEqu, '==');
scan.addOperator(tEquStrict, '===');

let token = scan.nextToken();

while (token === MiniScanner.ident || scan.getTokenClass() === MiniScanner.operator) {
    if (token === MiniScanner.ident) console.log('ident');
    if (scan.getTokenClass() === MiniScanner.operator) console.log('operator');
    console.log('\t', scan.getLexeme(), '(', token, ')');

    token = scan.nextToken();
}
```
