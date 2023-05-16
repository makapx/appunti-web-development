# Elementi di UI e UX design

**UX**: User experience - ha a che vedere con l'esperienza dell'utente, con l'usabilità
**UI**: User interface - ha a che vedere con l'aspetto (non strettamente funzionale)
**GD**: Graphic design - aspetto creativo, legato al marketing
**FE**: Front end developer - chi realizza 

**Product designer**: riguarda UX, UI, GD, FE
**Web designer**: riguarda UI, GD e FE.

## Terminologia

- **Wireframe**: una bozza di quello che saranno i possibili contenuti dell'interfaccia, disposizione e ordine di priorità degli elementi.
- **Mockup**: preso il wireframe, si sostituiscono gli elementi di placeholder con componenti un po' più specifiche, così da avere una visione più completa
- **Prototype**: versione funzionale del mockup, tipicamente prevede transizioni tra le varie schermate. Viene presentata al cliente.

# UI

## Typography

### Macrocategorie

- **Serif**: primi font utilizzati per la stampa, facili da leggere e da distinguere. Identificati dalle "grazie", le forme tipiche delle lettere.
- **Sans serif**: più moderni e utilizzati al momento. Molto utilizzati sui social e sui siti tech. Molto adatti ai dispositivi mobile (quindi per font di dimensioni più piccoli)
- **Monospace**: tipici degli editor. Più facile da leggere su testi complessi.
- **Script**: testi corsivi

### Grammature (font-weight)

Da quella più sottile a quella più spessa.
Varianti: roman e italic.

Le grammature permettono di dare più importanza ai contenuti in rilievo.

### Allineamento

- A sinistra (consigliato)
- Centrale
- A destra
- Giustificato: consigliato solo su lunghi testi

**Line spacing**: spaziatura tra una linea e l'altra. Aumentarla per testi lunghi visto che affatica meno gli occhi. Di default è 120% (oppure 1).

## Colori

**Ogni colore trasmette una certa emozione**. La scelta dei colori è quindi importante.

- Viola: calma, bellezza
- Blue: fiducia, sicurezza
- Rosa: romantico, femminile
- Verde: salute, natura - molto utilizzato a partire dagli anni 90/2000, diventato di tendenza per via del film Matrix
- Arancione: aggressivo, CTA
- Giallo: ottimismo, giovinezza
- Rosso: energia, passione, attenzione
- Nero: potente

L'85% delle persone che fa acquisti online afferma di essere influenzata anche dal colore del sito.

### Come distribuire i colori all'interno dell'interfaccia

- colori neutri per i testi
- evitare l'effetto arcobaleno, pochi colori
- utilizzare un colore primario più accesso, per aiutare un utente "a prendere decisioni" ovvero guidarlo
- elementi secondari, magari non si gioca con i colori ma con la dimensione dei testi

## Scelta delle immagini

- utilizzare immagini che ispirino fiducia (es: dentisti nella pubblicità del dentifricio)
- non utilizzare immagini di qualità scadente / bassa risoluzione (bad stock photos)
- foto di persone reali (così che l'utente si senta più vicino), che trasmettano emozioni positive
- scegliere il design non pensando a sè stessi e ai propri gusti personali ma a quelli dell'utente finale
- utilizzare immagini che supportano gli obiettivi di interesses
- testare le immagini - utilizzare i tool e verificare quale immagine fornisce risultati migliori, fa andare più di tendenza il sito o l'applicazione

## Icone

Scegliere lo stesso colore per il set di icone. Non usare colori multipli. Mantenere la stessa dimensione e la stessa area. In linea generale le icone devono essere consistenti tra loro.

Preferire icone della stessa libreria o comunque molto simili tra loro ove non disponibili nella stessa libreria.

Evitare icone troppo complesse: se hanno piccole dimensioni non risultano poi comprensibili.

## Design system

Tutto ciò di cui discusso fino ad ora viene unito sotto un unico documento, chiamato **design system**.
Il design system rappresenta delle regole che vanno mantenute durante il ciclo di vita di tutto il prodotto.
Un design system coerente è fondamentale per uno sviluppo veloce e snello.

# UX 

L'obiettivo principale è avere un flusso "fluido", "veloce". Non si deve lasciare l'utente "vagare" all'interno del sito ma guidarlo passo passo.

Regola generale: studiare e riutilizzare i **pattern** dei grandi investitori.

Come guidare l'utente:

- Utilizzare delle **Call To Action (CTA)** - testi semplici e diretti, pulsanti in rilievo, che si capisca immediatamente che sono cliccabili (colore di background o underline) e che portano al posto di interesse.
- autocomplete: fornire suggerimenti in base a precedenti ricerce o trend.
- **Gli utenti hanno dei BIAS**: vedono solo alcuni elementi e non tutti i dettagli, si concentrano quindi solo su alcune porzioni del sito. Bisogna capire su cosa l'utente tiene il focus per capire cosa fornirgli in primo piano in modo tale che sia guidato nel prendere decisioni.
- **Esperienza e curva di apprendimento**: al primo utilizzo l'utente è attento, man mano l'utente prende confidenza, sa dove cercare e trovare le cose, ignora quindi tutte le informazioni che aveva analizzato la prima volta.

## Consigli e common-use per migliorare l'esperienza utente

Usare le dimensione dei font per dare una struttura ai contenuti

- Titoli: 24px
- Sottotitolo: 18px
- Testo normale: 14px

Così l'utente può scansionare velocemente e trovare l'informazione che cerca.

Anche la grammatura aiuta l'utente a scansionare velocemente i contenuti:

- Titolo: extra bold
- Sottotitolo: semi bold
- Testo normale: regular

**Area di rispetto**: spazio bianco tra i vari contenuti

- area di rispetto tra titolo e sottotitolo: 24px
- area di rispetto tra sottotitolo e testo normale: 30px
- spaziatura del box titolo - sottotitolo - testo con il resto del contenuto della pagina: 80px
- fine del paragrafo: il doppio rispetto alla spaziatura tra titolo e paragrafo (es: titolo e paragrafo: 20px, spaziatura fine paragrafo: 40px)
- **Suddividere il testo in blocchi**: titolo + testo normale + spaziatura fine paragrafo e così via con un altro paragrafo
- Spaziatura tra i vari punti degli elenchi puntati: migliora la leggibilità

## Elementi che aiutano la navigazione

- **Breadcrumbs**: secondo livello di navigazione, permettono di navigare. Molto utilizzati dai siti di giornali e dai blog per indicare le categorie di apparteneza di un certo articolo / post.
- **CTA (Call to Action)**: devono catturare l'attenzione
- **Navigation**: mettere in rilievo nella barra di navigazione la pagina su cui si è al momento
- **Forms**: dare feedback espliciti quando l'utente ha interazione con il form.

## Disposizione degli elementi sullo smartphone

La disposizione degli elementi sullo smartphone va pensata anche in base alla portata della mano. Le funzionalità principali dovrebbero essere raggiungibili con una sola mano.

## Accessibilità

Pensare il design in maniera tale che sia accessibile alle persone con disabilità.

Tips (per disabilità visive):

- utilizzare i rem per le dimensioni dei testi
- alto contrasto dei colori, soprattutto sui contenuti principali

Tools utili: **a11y**

## User Centered Design

Costruiamo il prodotto sulla base delle esigenze dell'utente, nel modo più "liscio" possibile

**Step 1: capire il contesto**

- che problema vogliamo risolvere?

**Step 2: come risolviamo il problema**

Come prendere una decisione?

- **data driven**: raccogliere dati e basarsi su essi
- **data informed**: prendere decisione anche in base ad altri fattori, ad esempio esperienze ed idee

**Step 3: progettare, dati i requisiti, la soluzione**

**Step 4: sviluppo (development)**

**Step 5: test della qualità del prodotto**

- **quantitative research**: data una grossa quantità di numeri, si fa una stima sulla bontà del prodotto.
- **qualitative research**: interviste a tu per tu con l'utente finale, magari lunghe e dettagliate

**Step 6: lancio del prodoto**

- il prodotto viene mantenuto, vengono aggiungere nuove feature e risolti i problemi che si presentano. E si riparte dal punto 1 in maniera ciclica.

# Return of investment

Investire in una buona UI/UX porta con se un **return of investment**, ovvero un ritorno in termini economici. 

**Case study visto a lezione: redesign dell'interfaccia del sito Lego**