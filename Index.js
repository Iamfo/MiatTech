/** 1. Estrazione elementi base */

// Dichiarazione di un array di numeri
const numeri = [10, 20, 30, 40, 50];

// Destructuring per estrarre i primi due elementi
const [primo, secondo] = numeri;

console.log("Primo numero:", primo);
console.log("Secondo numero:", secondo);


/** 2. Saltare elementi durante il destructuring */

// Dichiarazione di un array di numeri
const numeri = [10, 20, 30, 40, 50];

// Destructuring: salta il secondo elemento usando una virgola vuota
const [primo, , terzo] = numeri;


console.log("Primo numero:", primo);
console.log("Terzo numero:", terzo);


/** 3. Destructuring con valori predefiniti */
// Dichiarazione di un array con meno di cinque elementi
const numeri = [10, 20, 30];

// Destructuring con valori predefiniti
const [a = 0, b = 0, c = 0, d = 0, e = 0] = numeri;


console.log("a:", a); // 10
console.log("b:", b); // 20
console.log("c:", c); // 30
console.log("d:", d); // 0 (valore predefinito)
console.log("e:", e); // 0 (valore predefinito)


/** 4. Estrazione di proprietà base */

// Dichiarazione di un oggetto
const persona = {
  nome: "Luca",
  età: 30,
  città: "Roma"
};

// Destructuring per estrarre alcune proprietà
const { nome, età } = persona;

console.log("Nome:", nome);
console.log("Età:", età);


/** 5. Destructuring con nomi di variabili diversi */

// Dichiarazione di un oggetto
const persona = {
  nome: "Luca",
  età: 30,
  città: "Roma"
};

// Destructuring con nomi di variabili diversi
const { nome: nomePersona, età: anni } = persona;

console.log("Nome della persona:", nomePersona);
console.log("Anni:", anni);

/** 6. Destructuring con valori predefiniti  */

// Dichiarazione di un oggetto con alcune proprietà mancanti
const persona = {
  nome: "Giulia",
  città: "Milano"
  // età e professione sono assenti
};

// Destructuring con valori predefiniti per le proprietà mancanti
const {
  nome,
  età = 25, // valore predefinito
  città,
  professione = "Non specificata" // valore predefinito
} = persona;

console.log("Nome:", nome);
console.log("Età:", età);
console.log("Città:", città);
console.log("Professione:", professione);


/** 7. Copia di un array */

// Dichiarazione di un array di numeri
const numeriOriginali = [1, 2, 3, 4, 5];

// Creazione di una copia usando lo spread operator
const copiaNumeri = [...numeriOriginali];

// Modifica dell'array originale
numeriOriginali.push(6);

console.log("Array originale:", numeriOriginali); // [1, 2, 3, 4, 5, 6]
console.log("Copia dell'array:", copiaNumeri);    // [1, 2, 3, 4, 5]

/** 8. Unione di due array */

// Dichiarazione di due array di numeri
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Unione dei due array con lo spread operator
const arrayUnito = [...array1, ...array2];


console.log("Array unito:", arrayUnito); // [1, 2, 3, 4, 5, 6]

/** 9 Copia di un oggetto con proprietà aggiuntive */

// Dichiarazione di un oggetto
const persona = {
  nome: "Marco",
  età: 28
};

// Creazione di una copia con una nuova proprietà
const personaConProfessione = {
  ...persona,
  professione: "Ingegnere"
};

console.log("Oggetto originale:", persona);               // { nome: "Marco", età: 28 }
console.log("Oggetto con modifica:", personaConProfessione); // { nome: "Marco", età: 28, professione: "Ingegnere" }


/** 10. Funzione con parametri variabili */

// Definizione della funzione con rest operator
function somma(...numeri) {
  // Riduce l'array di numeri alla somma totale
  return numeri.reduce((totale, numero) => totale + numero, 0);
}

// Chiamate della funzione con diversi numeri di argomenti
console.log(somma(1, 2));               // Output: 3
console.log(somma(5, 10, 15));          // Output: 30
console.log(somma(100, 200, 300, 400)); // Output: 1000
console.log(somma());                   // Output: 0 (nessun argomento)


/** 11. Destructuring array con rest operator
 */

// Dichiarazione di un array di numeri
const numeri = [10, 20, 30, 40, 50];

// Destructuring: primi due elementi in variabili, il resto in un nuovo array
const [primo, secondo, ...resto] = numeri;

// Stampa nella console
console.log("Primo:", primo);         // 10
console.log("Secondo:", secondo);     // 20
console.log("Resto dell'array:", resto); // [30, 40, 50]


/** 12. Destructuring oggetto con rest operator */

// Dichiarazione di un oggetto con diverse proprietà
const persona = {
  nome: "Anna",
  età: 35,
  città: "Torino",
  professione: "Designer",
  hobby: "Fotografia"
};

// Destructuring: estrai alcune proprietà, il resto in un nuovo oggetto
const { nome, età, ...altreInfo } = persona;

// Stampa nella console
console.log("Nome:", nome);           // Anna
console.log("Età:", età);             // 35
console.log("Altre informazioni:", altreInfo);
// { città: "Torino", professione: "Designer", hobby: "Fotografia" }

/** 13. Conversione di un oggetto in una stringa JSON */

// Dichiarazione di un oggetto JavaScript
const persona = {
  nome: "Marco",
  età: 28,
  città: "Milano"
};

// Conversione dell'oggetto in stringa JSON
const jsonString = JSON.stringify(persona);

// Stampa della stringa JSON nella console
console.log(jsonString);


/** 14 Conversione di una stringa JSON in un oggetto
 */

// Dichiarazione di una stringa JSON
const jsonString = '{"nome":"Marco","età":28,"città":"Milano"}';

// Conversione della stringa JSON in oggetto JavaScript
const persona = JSON.parse(jsonString);

// Stampa dell'oggetto nella console
console.log(persona);


/** 15. Manipolazione di dati JSON */

// Stringa JSON che rappresenta un array di persone
const jsonString = `[
  { "nome": "Luca", "età": 25 },
  { "nome": "Sara", "età": 30 },
  { "nome": "Marco", "età": 28 }
]`;

// Conversione della stringa JSON in un array di oggetti JavaScript
const persone = JSON.parse(jsonString);

// Aggiunta di una nuova persona all'array
persone.push({ nome: "Giulia", età: 22 });

// Riconversione dell'array aggiornato in una stringa JSON
const jsonAggiornato = JSON.stringify(persone);

// Stampa della stringa JSON aggiornata nella console
console.log(jsonAggiornato);


/** 16. Stringa semplice con template literals */

// Dichiarazione delle variabili
let nome = "Mario";
let cognome = "Rossi";

// Creazione della stringa con template literals
let stringaCompleta = `Il nome completo è: ${nome} ${cognome}`;

// Stampa della stringa nella console
console.log(stringaCompleta);


/** 17.Stringa multilinea con template literals
  */

// Dichiarazione delle variabili
let nome = "Luca";
let cognome = "Bianchi";
let eta = 30;
let citta = "Milano";

// Creazione della stringa multilinea con template literals
let descrizione = `
Nome: ${nome}
Cognome: ${cognome}
Età: ${eta}
Città: ${citta}
`;

console.log(descrizione);


/** 18. Funzione e template literals  */

// Definizione della funzione
function formatPersona(persona) {
  return `Nome: ${persona.nome}
Cognome: ${persona.cognome}
Età: ${persona.eta}
Città: ${persona.citta}`;
}

// Creazione di un oggetto di esempio
const personaEsempio = {
  nome: "Giulia",
  cognome: "Marco",
  eta: 28,
  citta: "Siena"
};

// Chiamata della funzione 
const risultato = formatPersona(personaEsempio);
// stampa nella console
console.log(risultato);


/** 19. Utilizzare console.log */

// Variabili di diversi tipi
const numero = 31;
const stringa = "Hi, guys!";
const array = [1, 2, 3, 4, 5];
const oggetto = {
  nome: "Anna",
  età: 25,
  città: "Bologna"
};

// Stampa nella console
console.log("Numero:", numero);
console.log("Stringa:", stringa);
console.log("Array:", array);
console.log("Oggetto:", oggetto);

/** 20. Utilizzare console.error e console.warn */

// Dichiarazione della variabile
const stato = "attenzione";

// Controllo dei valori e stampa di messaggi
if (stato === "errore") {
  console.error("Errore: Si è verificato un problema critico!");
} else if (stato === "attenzione") {
  console.warn("Avviso: Controlla i dati inseriti.");
} else {
  console.log("Tutto ok!");
}


/** 21. Utilizzare console.table e console.group */

// Array di oggetti
const persone = [
  { nome: "Marco", cognome: "Rossi", eta: 35 },
  { nome: "Anna", cognome: "Bianchi", eta: 28 },
  { nome: "Luca", cognome: "Verdi", eta: 42 }
];

// Stampa tabella con console.table
console.table(persone);

// Raggruppamento messaggi con console.group
console.group("Dettagli persone");
persone.forEach((persona, index) => {
  console.group(`Persona ${index + 1}`);
  console.log(`Nome: ${persona.nome}`);
  console.log(`Cognome: ${persona.cognome}`);
  console.log(`Età: ${persona.eta}`);
  console.groupEnd();
});
console.groupEnd(); 


/** 22. Utilizzare setTimeout */

// Funzione che stampa il messaggio
function stampaMessaggio() {
  console.log("Questo messaggio è stato stampato dopo 3 secondi!");
}

// Utilizo di setTimeout per chiamare la funzione dopo 3000 millisecondi (3 secondi)
setTimeout(stampaMessaggio, 3000);


/** 23. Utilizzare setInterval */

// Funzione che stampa il messaggio
function stampaMessaggio() {
  console.log("Messaggio stampato ogni 2 secondi");
}

// Passa la funzione a setInterval con intervallo di 2000 ms (2 secondi)
setInterval(stampaMessaggio, 2000);


/** 24. Interrompere setInterval con clearInterval */

// Funzione che stampa il messaggio
function stampaMessaggio() {
  console.log("Messaggio ogni secondo...");
}

// Avvia l'intervallo
const intervalloID = setInterval(stampaMessaggio, 1000);

// Funzione per interrompere l'intervallo dopo 5 secondi
setTimeout(() => {
  clearInterval(intervalloID);
  console.log("Intervallo interrotto dopo 5 secondi.");
}, 5000);


/** 25.Gestione di un errore semplice */

// Funzione che esegue una divisione e gestisce eventuali errori
function dividi(numeratore, denominatore) {
  try {
    if (denominatore === 0) {
      throw new Error("Errore: divisione per zero non permessa.");
    }
    let risultato = numeratore / denominatore;
    console.log("Risultato:", risultato);
  } catch (errore) {
    console.error(errore.message);
  }
}

dividi(10, 2);  // Stampa: Risultato: 5
dividi(5, 0);   // Stampa: Errore: divisione per zero non permessa.7


/** 26. Gestione di più tipi di errori  */

function operaSuStringa(input) {
  try {
    // Controlla se input è una stringa
    if (typeof input !== "string") {
      throw new TypeError("Input non è una stringa.");
    }

    // Proviamo a fare un'operazione che potrebbe fallire
    let risultato = input.toUpperCase().split("").reverse().join("");
    console.log("Risultato:", risultato);

  } catch (errore) {
    if (errore instanceof TypeError) {
      console.error("Errore di tipo:", errore.message);
    } else {
      console.error("Errore generico:", errore.message);
    }
  }
}

operaSuStringa("ciao");   // Funziona correttamente
operaSuStringa(123);      // Errore di tipo
operaSuStringa(null);     // Errore generico: toUpperCase su null


/** 27. Uso di finally per eseguire codice indipendentemente dal risultato  */

function eseguiOperazione(input) {
  try {
    if (typeof input !== "number") {
      throw new Error("Input non è un numero valido.");
    }
    let risultato = 100 / input;
    console.log("Risultato:", risultato);
  } catch (errore) {
    console.error("Errore catturato:", errore.message);
  } finally {
    console.log("Operazione completata.");
  }
}

eseguiOperazione(25);  // Operazione riuscita
eseguiOperazione(0);   // Operazione riuscita ma con risultato infinito
eseguiOperazione("ciao");  // Errore gestito
