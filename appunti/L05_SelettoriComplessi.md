# Combinators

I selettori semplici hanno delle limitazioni. Li combiniamo per referenziali elementi specifici, che devono avere una resa diversa l'uno dall'altro, pur avendo una serie di classi in comune.

Tipi di combinatori:

- **carattere spazio**: combinatore dei discendenti. Faccio riferimento ai discendenti (che hanno le classi a destra) che hanno come parent gli elementi con le classi a sinistra. Il selettore di questo tipo va letto da destra a sinistra. Il combinatore spazio permette di referenziare **tutti** i discendenti del tipo indicato, **indipendentemente dalla profondità**. 
- **operatore >**: rispetto al selettore prossimo, vai a referenziare alla massima i figli del primo livello (figlio diretto)
- **operatore +**: lo applico al fratello più vicino
- **operatore ~**: lo applico a qualsiasi fratello che rispetti le regole
- **selettore di unione (vuoto)**
- multi-selettore

## Il combinatore spazio

```css
/** Referenzio un elemento che ha class2, che ha come parent un elemento con classe class1 */
.class1 .class2 {
	/* rules */
}
```

```html
<div class="class1">
    <p>Not my paragraph</p>
    <p class="class2">My paragraph</p>
    <p class="class2">Also my paragraph</p>
    <div>
        <p class="class2">Also my paragraph</p>
    </div>
</div>
```

## Operatore >

```css
/** Referenzio un elemento che ha class2, che è figlio diretto di uno con class1 */
.class1>.class2 {
	/* rules */
}
```

```html
<div class="class1">
    <p class="class2">My paragraph</p>
    <p class="class2">Also my paragraph</p>
    <div>
        <p class="class2">Not my paragraph</p>
    </div>
</div>
```

## Operatore  +

```css
.class1>.class2+.class3{
	/* rules */
}
```

```html
<div class="class1">
    <p class="class2"></p>
    <p class="class3">My paragraph</p>
    <p class="class3">Not my paragraph</p>
</div>
```

## Operatore ~

```css
.class1>.class2~.class3{
	/* rules */
}
```

```html
<div class="class1">
    <p class="class2"></p>
    <p class="class3">My paragraph</p>
    <p class="class3">Also my paragraph</p>
</div>
```

## Selettore di unione

```css
.class1 class2.class3{
    /* rules */
}
```

```html
<div class="class1">
    <p class="class2 class3">My paragraph</p>
    <p class="class3">Not my paragraph</p>
    <p class="class2">Not my paragraph</p>
</div>
```

## Multi-selettore

Posso indicare indicare le stesse regole per più selettore, separandoli con la virgola.

```css
mioselettore1, mioselettore2 {
    /* rules */
}
```

## Selettori per attributo

Per referenziare per attributi

- `[name_of_attr]` elementi che hanno questo attributo
- `[attr=val]` elementi il cui attributo ha il valore val
- `attr~=[val]`
- `attr^=[val]` l'attributo deve iniziare con il valore specificato

```css
input[type="text"]{
	color: red;
}

input[type="password"]{
    color: white;
    background: black;
}

/*Referenzia tutti i discendenti dell'elemento con class2 che hanno come classe class3*/
.class2 [class="class3"]{
    /* rules */
}
```

### Attribute presence

Attributi custom indicati con `data-mionomeattributo`. Anche questi possono essere referenziati

```css
[data-vegetable]{
	color: green;
}
[data-vegetable="spicy"]{
    color: red;
}
```

```html
<p data-vegetable>
    Tomatoes
</p>
<p data-vegetable="spicy">
    Curry
</p>
```

### Pseudo class

Servono per referenziare gli elementi che si trovano in uno stato specifico. Alcune pseudo classi sono:

- `:active`
- `:checked`
- `:disabled`
- `:empty`
- `:enabled`
- `:first`
- `:focus`
- `:hover`
- `:not()`
- `:nth-child()` ennesimo figlio
- `:nth-last-child()` l'ultimo
- `:read-only`
- `:required`
- `:visited`

E molti altri ancora.

### Pseudo element

Permette di referenziare degli elementi "impliciti", cioè non espressamente dichiarati, e trasformarli

- `::after` molto utilizzato per le icone
- `::before` molto utilizzato per le icone
- `::first-letter`
- `::first-line`
- `::selection`
- `::backdrop`

```css
a::after {
	content: "un testo dopo il mio link";
}

/* Quando sono in hover sull'elemento a , colorami lo pseudo elemento, cioè il mio testo dopo il link */
a:hover::after {
	color: yellow;
}
```

## Colori

È possibile definire i colori come:

- **testo**
- **RGB**
- **HEX**
- **HSL**
- **RGBA**: RGB con trasparenza
- **HSLA**: HSL con trasparenza

## Text decoration

```css
text-decoration: none;
text-decorarion: underline red;
text-decoration: underline wavy red;

text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

Molte regole sono versioni brevi  e generiche di regole più specifiche.

## Text transform

```css
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
```

## Text shadow

```css
/* offset-x | offset-y | blur-redius | color */
text-shadow: 1px 1px 2px black;
```

## Text align

```css
text-align: left
text-align: right
text-align: center
text-align: justify
```

## Line height

Utilizzato per centrare verticalmente i testi all'interno degli elementi con un'altezza fissata.

```css
line-height: normal;
line-height: 30px;
line-height: 34%;
```

## Font-size

```css
font-size: smaller;
font-size: larger;
font-size: 12px;
font-size: 1rem;
```

## Font weight

Utilizzato per specificare lo "spessore" del font.
Specificabile sia con valori numerici (incrementali a 100), o come testo.

```css
font-weight: bold;
font-weight: 700;
```

## Font family

Solitamente si definisce una famiglia di font, così che se uno di quelli in elenco non esista, vengono caricati i successivi, così facendo si mitiga la "rottura" dello stile.
