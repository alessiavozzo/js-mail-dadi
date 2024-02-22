# Esercizio 1: mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

### Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

# Esercizio 2: dadi
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


## Steps: mail
- Creare una lista di email che hanno accesso
- Creare variabile access preimpostata come false
- Chiedere all'utente l'email:
    - SE l'email è presente nella lista:
        - access = vero
        - Restituire messaggio "puoi accedere"
    -ALTRIMENTI:
        - access resta false
        - Restituire messaggio "non puoi accedere"
### Tools mail
- console log
- prompt
- let/const
- array
- for
- if/else
#### bonus
- input al posto del prompt
- button
- event listener


## Steps: dadi
- Generare un numero casuale da 1 a 6 e assegnarlo a una variabile per l'utente
- Generare un numero casuale da 1 a 6 e assegnarlo a una variabile per il computer
- Confronto numeri: 
    - SE numero utente > numero computer:
        - Restituire messaggio "hai vinto"
    - SE numero computer > numero utente:
        - Restituire messaggio "ha vinto il computer"
### Tools dadi
- console log
- math random()
- math floor/ceil ()
- if/else