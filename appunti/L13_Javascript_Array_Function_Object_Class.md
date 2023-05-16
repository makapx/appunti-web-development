# forEach

Metodo degli oggetti di tipo Array. Permette di iterare sugli elementi, passando una callback che viene richiamata di volta in volta.

```javascript
fruits.forEach( (item, index, array) => {
	console.log(item, index);
});
```

# Altri metodi utili di Array

- `push()`
- `pop()`
- `shift()`
- `indexOf()`
- `splice()`
- `slice()`

Vedere il link a fondo pagina per le specifiche.

# Funzioni

Una funzione è definita da un **firma**, come già visto in altri linguaggi di programmazione

```javascript
function square(number) {
	return number * number;
}
```

Essendo le funzioni un tipo posso anche definirle per poi conservarne il valore.

```javascript
let square(number){
	return number * number;
};

let square2 = square(2);

// Stampa 4
console.log(square2);

// Stampa le info relative della funzione.
console.log(square);
```

La riflessività di Javascript consente di avere un comportamento estremamente dinamico.

Un esempio di funzione ricorsiva:

```javascript
let factorial = function fac(n){ return n < 2 ? 1 : n * fac( n - 1 ); };
console.log(factorial(3));
```

Tipicamente le funzioni vengono dichiarate con il `const`, questo perché si suppone che non vengano riassegnate.

Mentre le funzioni indicate con keyword `function` hanno scope globale, quelle con `let` e `const` hanno scope locale.

Le funzioni possono anche definite con la notazione a seguire.
Sono dette **arrow function** e rappresentano lo stile di programmazione più moderno ed utilizzato ad oggi.

```javascript
const myFunctionName = () => {
	console.log("Hello there");
};
```

Le arrow function risolvono il problema fondamentale dell'autoreferenziamento (negli altri linguaggi `this` o `self`). Ad oggi in Javascript la keyword `this` si riferisce all'oggetto `window` e ogni funzione (con function) dve eventualmente fornire una sua implementazione.
Nella arrow function il `this` si riferisce all'oggetto stesso. In questo caso viene infatti effettuato quello che è detto **binding del chiamante**.

# Hoisting

Permette di definire funzioni in maniera nominale, anche dopo che questa è stata richiamata. Possibile anche se **sconsigliato**.

```javascript
studentName("Tiger");

function studentName(name){
	console.log(name);
}
```

# Closure

Incapsulare valori all'interno di funzioni e utilizzare la valutazione di espressioni senza tenerne traccia prende il nome di **closure**. In questo modo si inibisce l'accesso alle variabili da parte del client. Questa è una iniziale misura di sicurezza per evitare la manipolazione di valori importanti l'applicazione (ovviamente limitatamente al frontend).

```javascript
(function() {
	// myCodeInHere;
})();
```

Altre operazioni utili per nascondere il codice sono l'offuscamento, spesso fatto da tool o bundler.

# Oggetti e JSON

Il **JSON** è una notazione standard per trasferire oggetti, in modo che questi siano comprensibili a prescindere dal linguaggio di programmazione. La sintassi è molto simile a quella degli oggetti Javascript.

Un oggetto è un **insieme di chiavi e valori**.

```javascript
// let obj = {[key]:[value][,...]};
let player = {
    nickname: 'makapx',
    items: [],
    hp: 100,
    maxHp: 100,
    weapon: {
        power: 10,
        use: function(){
    		console.log("Attack with power ", this.power);
		}
    }
};

console.log(player.nickname);
console.log(player.weapon.power);
player.attack();
```

Per quanto riguarda gli oggetti, Javascript funziona per **prototipazione**. Grazie ai prototipi possiamo simulare alcuni dei meccanismi visti in altri linguaggi: costruttori, ereditarietà etc...

```javascript
const Animal = {race: "Human"};
const Person = Object.create(Animal);
```

Questi aspetti lo rendono un **linguaggio con caratteristiche funzionali**.

La definizione e l'accesso agli attributi di un oggetto può venire fatto con le seguenti notazioni:

```javascript
console.log(person.realName);
console.log(person['realName']);
```

Con la notazione a parentesi quadre è possibile assegnare valori

```javascript
person['realName'] = "Martina";
```

Per best-practice si accede con l'operatore `.` solo alle proprietà di cui l'esistenza è certa. Un'alternativa è utilizzare l'operatore di "attraversamento sicuro" `?.` che restituisce `undefined` invece di generare un errore.

Negli oggetti, come già visto, esiste e vale la notazione con il `this`.

# Classi

Dalla versione ES6 di Javascript sono state introdotte le classi.

```javascript
class Student {
	name;
	surname;

	//private. Questione solo di nomenclatura, è comunque visibile dall'esterno.
	#gender;

	constructor(name, surname){
        this.name = name;
        this.surname = surname;
	}
}
```

------

**Link utili**

- [Documentazione MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [YAML](https://it.wikipedia.org/wiki/YAML)
- [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)