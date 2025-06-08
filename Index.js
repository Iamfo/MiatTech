// 1. Gestire i cookies

document.cookie = "username = Jason Wright; password = 12345;  expires Tue, 26 Oct 2019 00.00 UTC; path=/; secure, samesite = strict";
console.log(document.cookie)

// leggere il cookie con Javascript
let X = document.cookie



// 2. Utilizzare il localStorage

const buttonElement = document.querySelector("bttn");
const pageElement = document.querySelector("parag");

// codice che conserva nel local storage la mia data inserita
buttonElement.addEventListener("click", function() {
const laPrimaDestinazione = prompt("Destinazione", "parag");
  localStorage.setItem("La mia destinazione", laPrimaDestinazione);
  pageElement.innerText = laPrimaDestinazione
});

console.log(laPrimaDestinazione)

// Codice che prende la data richiesta dal local storage
const laPrimaDestinazione = localStorage.getItem("La mia destinazione") || "";
pageElement.innerText = laPrimaDestinazione

console.log(laPrimaDestinazione)



// 3. Utilizzare il sessionStorage

// codice che conserva nel session storage la mia data inserita
buttonElement.addEventListener("click", function() {
const laSecondaDestinazione = prompt("Destinazione", "parag");
  sessionStorage.setItem("La mia destinazione", laSecondaDestinazione);
  pageElement.innerText = laSecondaDestinazione
});

console.log(laSecondaDestinazione)

// Codice che prende la data richiesta dal session storage
const laSecondaDestinazione = sessionStorage.getItem("La mia destinazione") || "";
pageElement.innerText = laSecondaDestinazione

console.log(laSecondaDestinazione) 


// 4. Utilizzare localStorage e sessionStorage insieme

localStorage.setItem("login", "IndirizioMail");
console.log("saved localStorage:", localStorage.getItem("login"));
sessionStorage.setItem("Password", "X7y45b");
console.log("saved sessionStorage:", sessionStorage.getItem("password"));



localStorage.removeItem("login");
console.log("localStorage removed:", localStorage.getItem("login"));
sessionStorage.removeItem("cognome");
console.log("sessionStorage removed:", sessionStorage.getItem("passwoord"));


// 5. Oggetto document

const div = document.getElementById("sezione");
const secondButton = document.getElementById("bttn2")

buttonElement.addEventListener("click",  () => {
  const p = createElement("p");
  p.innerText ="Questo paragrafo è creato con Javascript ed Events.";
  div.appendChild(p);
  console.log(p)
});
  


// 6. getElementById

const h2 = document.getElementById("byId");
  console.log(h2);


  // 7. querySelector

  const h4 = document.querySelector(".byClass");
  console.log(h4);


  // 8. Modifica il testo di un paragrafo 

  buttonElement.addEventListener("click", () => {
    const nuovoTesto = `Questo è il nuovo nuovoTesto!.`;

    pageElement.innerText = nuovoTesto;

// 9. Cambia lo stile
    nuovoTesto.style.backgroundColor = "green";
    nuovoTesto.style.fontSize = "20px";
  });


  // 10. Modifica l'html

  const elementPp = document.getElementsByTagName("pp")(0);
  const terzoBottone = document.getElementsByTagName("bttn3")(0);

  terzoBottone.addEventListener("click", ()=>{
    elementPp.innerHTML = "Testo aggiornato con Javascript <button>Clicca qui</button>";
  });


  // 11. Crea una lista

  terzoBottone.addEventListener("click", () => {
    let elementUl = document.createElement("ul");

    let elementLi = document.createElement("li");

    let elementA = document.createElement("a");
    elementA.href = "";

    elementLi.appendChild(elementA);
    elementUl.appendChild(elementLi);
    document.body.appendChild(elementUl);
  });



  // 12. Crea i list items ()

  terzoBottone.addEventListener("click", () => {
    let elementUl = document.createElement("ul");

    for (let i = 0; i <= 5; i++) {
      let elementLi = document.createElement("li");

      let elementA = document.createElement("a");
      elementA.href = "";

      elementLi.appendChild(elementA);
      elementUl.appendChild(elementLi);
      document.body.appendChild(elementUl);
    }
  });



  // 13. submit

  document.getElementById("form").addEventListener("submit", function(e) {
    const name = document.getElementById("nome").value.trim();
    const surname = document.getElementById("cognome").value.trim();
    if (!name || !surname) {
      alert("Compila tutti i campi!");
      e.preventDefault();
    }
  });