# Margin

```css
/* Applicata a tutti e 4 i lati*/
margin: 1px;

/* La prima sopra e sotto, l'altra ai lati */
margin: 5% auto;

/* Superiore, laterali, inferiore */
margin: 1rem auto 2rem;
margin: 2px 1em 0 auto;

/* Sopra, destra, sotto, sinistra */
margin: 1rem 2px 4px 8em;
```

Il body di default ha un `margin` di **8px**, quindi di solito come prima cosa si setta il `margin` a 0;

```css
body {
	margin: 0;
}
```

```css
/* Il margine è specificabile anche singolarmente */
margin-top: 10px;
margin-bottom: 5px;
margin-left: 3em;
margin-right: 1rem;
```

```css
/* Margin-top fa override, per la parte superiore, del margine dato dalla prima regola */
margin: 20px;
margin-top: 10px;
```

Il `margin` in percentuale viene assegnato rispetto al parente più prossimo.

# Padding

Opera analogamente al `margin`,  ma **si riferisce alla spaziatura tra il contenuto e il suo bordo**.
Dovendo gestire gli spazi, è preferibile, ove possibile, gestirli attraverso il padding (dell'elemento container), questo perché mentre il margin altera il comportamento degli altri elementi adiacenti, il padding opera internamente all'elemento stesso.

# Display

La proprietà `display` riguarda il modo in cui gli elementi alterano il comportamento degli altri.

```css
display: block;
display: inline;

/* L'elemento esiste ma non è renderizzato */
display: none;

display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;
```

L'elemento `block` ha consapevolezza delle proprie dimensioni (altezza e larghezza), cosa che gli elementi `inline` non hanno. **Gli elementi `inline-block` si comportano come gli elementi `inline` ma hanno coscienza delle proprie dimensioni.**

# Opacity

Assume valori **tra 0 ed 1, estremi compresi**, e riguarda la trasparenza dell'elemento. A differenza del `display: none`, un elemento con `opacity: 0` viene comunque renderizzato (occupa spazio ed influenza dunque il comportamento degli altri elementi)

# Visibility

Proprietà in disuso, stacca l'elemento dal DOM.

```css
visibility: hidden;
visibility: visible;
visibility: collapsed;
```

# Box-sizing

Possiamo dire al browser se durante il calcolo delle dimensioni dell'elemento comprendere o meno i bordi.

```css
/* Considera solo il contenuto */
box-sizing: content-box;

/* Considera anche i bordi. Solitamente si sceglie questa. */
box-sizing: border-box;
```

```css
/* Una regola di reset molto utile per margin, padding e set del bordo compreso nella dimensione dell'elemento */
body, html, * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

# Position

Generalmente gli elementi hanno un posizionamento **relativo** (rispetto ai fratelli e al parent).

È possibile **staccare dal flusso della pagina** gli elementi e posizionarli al di sopra rispetto agli altri elementi (come se stessero su un layer differente).
In questo caso l'elemento ha un posizionamento **assoluto** (rispetto all'elemento più prossimo con posizione relativa)

```css
position: relative;
position: absolute;
```

Vedi: https://codingbff.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6

Possiamo dire agli oggetti con `position: absolute` quanta distanza deve esserci dai bordi (padding escluso) del proprio parent con le proprietà `top`, `right`, `left`, `bottom`

Se il parent ad esempio è grande quanto tutta la pagina e utilizzo le regole

```css
bottom: 0;
right: 0;
```

L'elemento sarà allineato in basso a destra.

Se desidero che l'elemento abbia una **posizione fissata**, totalmente scollegato dal flow della pagina (quindi non legato al parent ma alla finestra) utilizzo invece:

```css
position: fixed;
```

Un esempio di `position: fixed` sono i menù che rimangono in alto quando scrolliamo le pagine.

Se si vuole un comportamento tra il relative e il fixed a soglia si può utilizzare il `position: sticky`.

Altre proprietà interessanti:

```css
transform: translate( -50%, -50%);
```

Utile per centrare gli elementi.