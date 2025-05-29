/** 1. Funzione di base con callback */ 

// Funzione che esegue una somma e poi chiama il callback
function sommaConCallback(a, b, callback) {
  const risultato = a + b;
  console.log("Risultato della somma:", risultato);
  callback();
}

sommaConCallback(3, 4, function(risultato)  {
  console.log("Callback eseguito dopo la somma", risultato);
});



/** 2. Funzione con callback e passaggio di parametri */

// Funzione che esegue un'operazione e passa il risultato al callback
function operazioneConCallback(c, d, callback) {
  const risultato = c * d;
  callback(risultato);
}

operazioneConCallback(5, 6, function(risultato) {
  console.log("Risultato passato al callback:", risultato);
});



/** 3. Callback annidati */

// Prima funzione con callback
function primaOperazione(callback) {
  setTimeout( function() {
    console.log("Prima operazione completata");
    callback();
  }, 1000);
}

// Seconda funzione con callback
function secondaOperazione() {
  console.log("Seconda operazione eseguita");
}

// Uso delle funzioni in sequenza con callback annidati
primaOperazione(() => {
  secondaOperazione();
});



/** 4. Creare una promessa semplice */

function simplePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolve after 2 seconds");
    }, 2000);
  });
}

simplePromise()
.then((Message) => {
  console.log(Message);
});



/** 5. Gestione di una promessa con catch */

function PromiseWithError(errorMessage) {
  return new Promise((resolve, reject) => {
    if (errorMessage) {
      reject("Error: Promise rejected");
    } else {
      resolve("Promise accepted");
    }
  });
}

PromiseWithError(true)
  .then((msg) => console.log(msg))
  .catch((err) => console.error("Catch:", err));



/** 6. Promessa con finally */   

function promessaConFinally(shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject("Errore nella promessa");
      else resolve("Promessa risolta");
    }, 1000);
  });
}

promessaConFinally(false)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("Esecuzione del finally, sempre"));



/** 7. Catena di promesse semplici */  

function promessaNumero() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
}

promessaNumero()
  .then((num) => num * 2)
  .then((numDoppiato) => numDoppiato + 3)
  .then((risultato) => {
    console.log("Risultato finale:", risultato);
  });



/** 8. Catena di promesse con condizioni */  

function promessaNumeroPariDispari() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(7), 1000);
  });
}

promessaNumeroPariDispari()
  .then((num) => {
    if (num % 2 === 0) {
      console.log(num, "è pari");
      return num * 2;
    } else {
      console.log(num, "è dispari");
      return num * 3;
    }
  })
  .then((risultato) => {
    console.log("Risultato finale:", risultato);
  });



/**  9. Catena di promesse con gestione degli errori */

function promessaCasuale() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) resolve("Successo: valore casuale > 0.5");
    else reject("Errore: valore casuale <= 0.5");
  });
}

promessaCasuale()
  .then((msg) => {
    console.log(msg);
    return "Dati elaborati";
  })
  .then((elaborazione) => {
    console.log(elaborazione);
  })
  .catch((err) => {
    console.error("Errore catturato:", err);
  });



/** 10. Gestione degli errori con catch */  

function promessaCheRifiuta() {
  return new Promise((_, reject) => {
    reject("Errore esplicito nella promessa");
  });
}

promessaCheRifiuta()
  .catch((err) => {
    console.error("Errore gestito con catch:", err);
  });



/** 11. Gestione degli errori con then e catch */  

function promessaCondizionale(shouldResolve) {
  return new Promise((resolve, reject) => {
    if (shouldResolve) resolve("Promessa risolta con successo");
    else reject("Promessa rifiutata");
  });
}

promessaCondizionale(false)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error("Errore:", err);
  });



/** 12. Gestione degli errori in una catena di promesse */  

function promessaRandom() {
  return new Promise((resolve, reject) => {
    const valore = Math.random();
    if (valore > 0.3) resolve(valore);
    else reject("Errore: valore troppo basso");
  });
}

promessaRandom()
  .then((valore) => {
    console.log("Valore ricevuto:", valore);
    return valore * 2;
  })
  .then((raddoppiato) => {
    console.log("Valore raddoppiato:", raddoppiato);
  })
  .catch((err) => {
    console.error("Errore catturato nella catena:", err);
  });



/** 13. Utilizzare Promise.all */  

function promessaConRitardo(ms, valore) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valore), ms);
  });
}

Promise.all([
  promessaConRitardo(1000, "Primo"),
  promessaConRitardo(1500, "Secondo"),
]).then((risultati) => {
  console.log("Tutte le promesse risolte:", risultati);
});



/** 14. Utilizzare Promise.race */

function promessaConRitardo(ms, valore) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valore), ms);
  });
}

Promise.race([
  promessaConRitardo(1000, "Primo"),
  promessaConRitardo(1500, "Secondo"),
]).then((primoRisultato) => {
  console.log("Prima promessa risolta:", primoRisultato);
});



/** 15. Utilizzare Promise.allSettled */

function promessaRisolta(ms, valore) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valore), ms);
  });
}

function promessaRifiutata(ms, motivo) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(motivo), ms);
  });
}

Promise.allSettled([
  promessaRisolta(1000, "Successo 1"),
  promessaRisolta(1500, "Successo 2"),
  promessaRifiutata(1200, "Errore 1"),
]).then((risultati) => {
  console.log("Risultati di tutte le promesse:", risultati);
});



/** 16. Funzione asincrona semplice */

async function funzioneAsincrona() {
  const promessa = new Promise((resolve) => {
    setTimeout(() => resolve("Messaggio dopo 2 secondi"), 2000);
  });

  const messaggio = await promessa;
  console.log(messaggio);
}

funzioneAsincrona();



/** 17. Gestione degli errori con try e catch */

async function funzioneConErrore(shouldReject) {
  try {
    const risultato = await new Promise((resolve, reject) => {
      if (shouldReject) reject("Errore simulato");
      else resolve("Operazione riuscita");
    });
    console.log(risultato);
  } catch (err) {
    console.error("Errore catturato:", err);
  }
}

funzioneConErrore(true);



/** 18. Funzioni asincrone in serie */

function funzione1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Risultato funzione 1"), 1000);
  });
}

function funzione2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Risultato funzione 2"), 2000);
  });
}

async function chiamataInSerie() {
  const risultato1 = await funzione1();
  const risultato2 = await funzione2();
  console.log(risultato1, risultato2);
}

chiamataInSerie();



/** 19. Eseguire una richiesta GET semplice */

async function richiestaGET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dati = await response.json();
    console.log(dati);
  } catch (err) {
    console.error("Errore nella fetch:", err);
  }
}

richiestaGET();



/** 20. Eseguire una richiesta POST */

async function richiestaPOST() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    });
    const dati = await response.json();
    console.log(dati);
  } catch (err) {
    console.error("Errore nella POST:", err);
  }
}

richiestaPOST();



/** 21. Gestione degli errori con async e await */

async function fetchConErroreGestito() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/999999999");
    if (!response.ok) {
      throw new Error("Risorsa non trovata");
    }
    const dati = await response.json();
    console.log(dati);
  } catch (err) {
    console.error("Errore nella fetch:", err.message);
  }
}

fetchConErroreGestito();



/** 22. Comprendere un errore CORS */

// Esempio che genera errore CORS (non si può eseguire correttamente per policy browser)
fetch("http://example.com")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.error("Errore CORS:", err));

// Nota: L’errore si verifica perché example.com non consente richieste da origini diverse, 
// causando il blocco da parte del browser per motivi di sicurezza.
