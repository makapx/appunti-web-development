# Javascript

È un linguaggio di programmazione che permette di implementare l'interattività dell'utente con la pagina.
È **dinamicamente tipizzato** e **multi-paradimico** (funzionale, event driven, asincrona, imperativa etc...), **single-threaded** ma **non-blocking**.

Implementazione dello standard **ECMA Script (o ES)**, spesso ci si riferisce alle versioni del linguaggio con la versione di riferimento (esempio: Javascript ES4). La versione più utilizzata è la Javascript ES6.

Il codice viene **interpretato** dall'engine del browser e gira al suo interno in **sandbox mode**, a meno che sia la stessa applicazione a richiedere certi permessi tramite le API del browser.

## Aggiungere del codice Javascript alle pagine

Interno alla pagina:

```html
<script>
	// Javascript code
</script>
```

Esterno alla pagina:

```html
<script src="script.js"></script>
```

Il codice può essere posto sia all'interno del tag `head`, sia nel tag `body`. Per convenzione si pone **alla fine del tag `body`**. Così facendo si risolvevano due problematiche:

- mettere d'accordo le varie implementazioni differenti del caricamento, legate al browser
- caricarlo in seguito al caricamento del DOM e di eventuali classi CSS.

## Hello world

```javascript
// Un pop-up bloccante
alert('Hello world!');

// Stampo in console. Stringhe indicate con tutti e tre i tipi di virgolette.
console.log('Hello world!');
console.log("Hello world!");
console.log(`Hello world!`);
```

## Commenti

```javascript
// single line comment

/*
 multi
 line
 comment
*/

/**
 * documentation comment
 * @param ...
 * @return ...
**/
```

## Variabili

Sono strutture dati semplici che alla massima contengono un valore. Posso anche essere intesi come identificatori (identifiers). Regole per la nomenclatura:

- non possono iniziare con i numeri
- non possono iniziare con i caratteri speciali (eccetto l'underscore `_` e il dollaro `$`)
  Alcune librerie famose che utilizzano i caratteri speciali per nomi di variabile: underscore.js e jQuery.

Non si definisce il tipo, si utilizzano invece le keyword: `var`, `let` e `const`.

- `var`  ha uno scope sia globale che locale ed è considerata deprecata.
- `let` invece ha uno scope locale
- `const` viene utilizzato per definire le costanti

Se una variabile è inizializzata con `var` ma non assegnata il suo valore è `undefined`, analogamente se è utilizzata prima di essere istanziata.

Se una variabile è inizializzata con `let` e non assegnata il suo valore è `undefined`, se invece viene usata prima di venire inizializzata genera un errore.

C'è quindi una differenza nell'inizializzazione a run time.

```javascript
var a;
console.log(a); // Undefined

console.log(b); // Undefined
var b;

let x;
console.log(x); // Undefined

console.log(y); // Reference error
let y;
```

## Tipi di dati

- string
- number (inclusi interi, float)
- bool
- undefined
- null
- Object
- Function

Come negli altri linguaggi di programmazione, la stringa è un array di caratteri.

```javascript
let alphabet = "abcdefg";
console.log(alphabet[0]);
console.log(alphabet.lenght);
```

**Riassegnando la variabile avviene una conversione di tipo.**

## Costrutti e condizioni

Valgono inotre i vari costruitti ed espressioni viste nei vari linguaggi di programmazione: if-else, switch case, while, for etc...
A differenza di altri linguaggi, lo switch accetta anche le stringhe.

Se dati come condizione ad un if statement, i tipi vengono così interpretati:

| Tipo      | Risultato                                                    |
| --------- | ------------------------------------------------------------ |
| Undefined | false                                                        |
| Null      | false                                                        |
| Boolean   | Uguale all'input (true o false)                              |
| Number    | true se diverso da 0 (e da NAN)                              |
| String    | false se la stringa ha lunghezza 0 (è vuota), true altrimenti |
| Object    | true                                                         |

## Operatori di confronto

| Operator | Descrizione                      |
| -------- | -------------------------------- |
| ==       | equal to (a meno del tipo)       |
| ===      | equal to (nel valore e nel tipo) |
| !=       | not equal                        |
| !==      | not equal (anche nel tipo)       |
| >        | maggiore                         |
| <        | minore                           |
| >=       | maggiore o uguale                |
| <=       | minore o uguale                  |

## Operatori ternari

$$
condition \  ? \ expr1 : expre2
$$

```javascript
let elvisLives = Math.PI > 4 ? 'Yep' : 'Nope'
```

## For statement

```js
// per oggetti Iterable
for (let index in arr){
	console.log(arr[index]);
}
```

```js
// Per i valori all'interno di un oggetto Iterable
for( let elem of arr ){
	console.log(elem);
}
```

------

**Link utili**

- [Javascritpt Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
