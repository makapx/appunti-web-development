## Liste

Ne abbiamo due tipi:

- `<ol>` ordinate
- `<ul>` non ordinate

All'interno troviamo i tag `<li>`

## Tabelle

Un tempo le tabelle erano il modo più utilizzato per formattare i dati. Le pagine web erano pensate per essere renderizzate solo su desktop (tipicamente a risoluzione 4:3).

```html
<table>
    <!-- TABLE ROW -->
    <tr>
        <!-- TABLE HEADER -->
    	<th>
        	Username
        </th>
        <th>
            Points
        </th>
    </tr>
    <!-- FINE TABLE ROW -->
    <tr>
        <!-- TABLE DATA -->
    	<td>
        	SuperMario
        </td>
        <td>
            200HP
        </td>
    </tr>
</table>
```

- Il tag `<th>` è molto simile ad un `<td>` ma con dello stile tipico delle righe di intestazione
- Il tag `<tr>` indica una riga

È possibile indicare quanto spazio indicare nel caso in cui la tabella non sia perfettamente uniforme

```html
<th colspan="2">
	Points
</th>
```

 Possiamo anche indicare se occupare un numero di righe maggiore di uno

```html
<th rowspan="2">
	Points per player
</th>
```

## Div

Il tag `<div>` è un contenitore generico, di tipo `block`.

Quasi tutti i tag derivano dal tag `<div>`, ad esempio uno `<span>` è un `<div>` con la proprietà `display` messa ad `inline` anziché a `block`. Ogni browser ha un suo modo di stilizzare nativamente gli elementi HTML.

Anche i tag dell'HTML semantico, come ad esempio `<article>` derivano dai `<div>`.

## Form

```html
<form action="https://google.it/search" method="GET">
    <input
           type="{TYPES}"
           name="{NAME OF KEY}"
           [OTHER ATTRIBUTES]
    />
</form>
```

- `action`: URL (assoluta o relativa) di dove si vogliono inviare le informazioni che si stanno inserendo nel form
- `method`: se il metodo della richiesta è `GET` o `POST`

Esistono molteplici tipi di input per i form, alcuni attributi sono comuni, altri sono specifici rispetto alla tipologia di input.

L'attributo `name` rappresenta la chiave attraverso il quale referenziare il campo

```php
$mio_input = $_GET['mioinput'];
```

Esistono molteplici tipi di input e spesso, a seconda del tipo di input, il browser effettua nativamente dei controlli, che è sempre meglio rinforzare con controlli propri, **sia lato client che lato server**.

```html
<input type="text" name="nickname" />
<input type="password" name="password" />
<input type="email" name="personal_email" />
<input type="number" name="age" />
<input type="color" name="hair_color" />
<input type="date" name="date" />
<input type="range" name="range" />
<input type="file" name="file" />
```

```html
<form method="GET" action="https://gooogle.it/search">
    <input type="text" name="q" placeholder="Search something on Google"/>
</form>
```

| :notebook: La risorsa search di Google vale esclusivamente con metodo `GET`, quindi non supporta il `POST`. Altri motori di ricerca li supportano entrambi. |
| ------------------------------------------------------------ |

### Attributi degli elementi input

- `value`: il valore di default
- `readonly`: solo in lettura. È possibile selezionarlo ma non cambiarlo.
- `disabled`: disabilitato
- `maxlength`: lunghezza massima
- `placeholder`: testo di placeholder, mostrato quando ancora non è stato inserito un valore
- `min` e `max`: valore minimo e massimo, utilizzato nel caso di campi numerici

### Textarea

Oltre agli input abbiamo i tag `<textarea>`

```html
<textarea name="textarea" rows="10" cols="50">
	Write something here
</textarea>
```

Il numero di righe e di colonne definiscono la dimensione della text area.
Se il numero di caratteri immessi eccede la dimensione la text area si espande di conseguenza.

### Checkbox

Tipo di input utilizzato quando si vogliono selezionare **più opzioni per una stessa chiave**.

```html
<input type="checkbox" name="console" value="nintendo" checked> Nintendo <br>
<input type="checkbox" name="console" value="sony"> PS4 <br>
<input type="checkbox" name="console" value="microsoft"> XBOX <br>
```

Notare bene che il nome è lo stesso.

### Radio button

Tipo di input utilizzato se si vuole una scelta **esclusiva** per la chiave

```html
<input type="radio" name="console" value="nintendo"> Nintendo <br>
<input type="radio" name="console" value="sony"> PS4 <br>
<input type="radio" name="console" value="microsoft"> XBOX <br>
```

Le checkbox e i radiuo button non sono il massimo dell'usabilità, soprattutto da mobile. Per questo tipicamente si sceglie di utilizzare i tag `<select>`.

### Select

```html
<!-- Questa select permette di selezionare una sola opzione -->
<select name="select">
    <option value="value1">Value1</option>
    <option value="value2" selected>Value2</option>
    <option value="value3">Value3</option>
</select>

<!-- Questa permette di selezionare più opzioni -->
<select name="select" multiple>
    <option value="value1">Value1</option>
    <option value="value2">Value2</option>
    <option value="value3">Value3</option>
</select>
```

### Button

Se esiste un `<button>` all'interno del form, al click, il form verrà inviato, a meno questo non sia di tipo `reset`

