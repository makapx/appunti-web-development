## CSS

Il CSS permette di guidare il browser, dandogli un set di regole su come renderizzare gli elementi.

### Sintassi

```css
[SELECTORs] {
	/* list of rules */
	{key}: {value}
}
```

I selettori vengono utilizzati per referenziare all'interno del DOM un determinato elemento.

### Tipi di selettori

- semplici
  - per elemento
  - per classe
  - per id
  - universale
- per attributo
- per pseudo classe

#### Selettore per elemento

```css
/* Tutti gli elementi p avranno testo di colore rosso */
p {
	color: red;
}

/* Tutti gli elementi div avranno testo di colore blue */
div {
	color: blue;
}
```

#### Selettore per classe

```css
/* Tutti gli elementi con la classe textred avranno il testo di colore rosso */
.textred {
	color: red;
}
```

Una classe può essere aggiunta a più elementi e gli elementi possono avere più classi.
Se le regole vanno a cozzare tra loro vince l'ultima definizione (se queste sono a pari di specificità), altrimenti la più specifica.

In ordine di priorità abbiamo:
$$
!important > id > classe1 + classe 2 > classe > elemento
$$

#### Selettore per ID

Permette di referenziare solo l'elemento con l'ID indicato

```css
#mioid{
	color: blue;
}
```

#### Selettore universale

Indicato con il carattere *****, applica le regole a tutti gli elementi. Viene utilizzato spesso nei framework CSS per resettare le regole del browser

```css
* {
    border: none;
    background: none;
}
```