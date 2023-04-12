# Unità

Unità assolute:

- `px` (pixel)
- `cm` (centimetri)
- `pt` (points)

Relative:

- `em`: relativa alla font-size del parent
- `rem`: relativa alla font-size della root
- `vh`: percentuale rispetto all'altezza della viewport
- `vw`: percentuale rispetto alla larghezza della viewport
- `%`: percentuale rispetto al parent

Definiamo una `font-size` assoluta e lavoriamo sugli altri elementi con le unità relative.

```css
body{
	font-size: 14px;
}

my-text{
	font-size: 1rem; /* 14px */
}
```

```css
my-modal{
	font-size: 20px;
}

my-text{
	font-size: 1em; /* 20px */
}
```

# Float

Regola utilizzata per rompere il normale flow del documento HTML. Stacco il contenuto seguente dal normare flusso di rendering e "lo adagio" dove indicato dal `float`

```css
float: left;
float: right;
```

In presenza di `float` il `margin`  degli elementi a seguire viene ignorato.

Per ripristinare il normare flusso del documento si assegna poi all'elemento dal quale si deve riprendere il `clear`, accoppiato con la relativa proprietà del `float`.

```css
clear: left;
clear: right;
```

```css
/* Un esempio di classe helper per il clear fix */
.clearfix {
	display: block;
	clear: both;
}
```
