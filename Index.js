/** 1. Automobile */

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  descrizione() {
    return `${this.marca} ${this.modello} (${this.anno})`;
  }
}

/** 2. Aggiungi proprietà e metodi */

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = 0;
  }

  aggiungiChilometri(km) {
    this.chilometraggio += km;
  }

  mostraChilometraggio() {
    return this.chilometraggio;
  }
}


/** 3. Sottoclasse Elettrica */ 

class Elettrica extends Automobile {
  constructor(marca, modello, anno, autonomia) {
    super(marca, modello, anno);
    this.autonomia = autonomia;
  }

  descrizione() {
    return `${super.descrizione()} - Autonomia: ${this.autonomia} km`;
  }

  ricarica(km) {
    this.autonomia += km;
  }
}

/**  4. Metodo saluta con prototype */

Automobile.prototype.saluta = function () {
  return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};


/** 5. Metodo privato #calcolaEtà() */ 

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - this.anno;
  }

  mostraEtà() {
    return `L'auto ha ${this.#calcolaEtà()} anni.`;
  }
}


/** 6. Metodo protetto (simulato) */ 

class Automobile {
  _controllaChilometri() {
    return this.chilometraggio > 100000 ? "Attenzione: chilometraggio elevato!" : "Chilometraggio OK.";
  }
}

class Elettrica extends Automobile {
  avvisaChilometraggio() {
    return this._controllaChilometri();
  }
}


/** 7. Metodo statico confrontaChilometraggio */ 

Automobile.confrontaChilometraggio = function (auto1, auto2) {
  if (auto1.chilometraggio > auto2.chilometraggio) {
    return `${auto1.marca} ha più chilometri.`;
  } else if (auto1.chilometraggio < auto2.chilometraggio) {
    return `${auto2.marca} ha più chilometri.`;
  } else {
    return "Hanno lo stesso chilometraggio.";
  }
};


/** 8. Contatore chiamate */ 

class Automobile {
  #contatoreChiamate = 0;

  aggiungiChilometri(km) {
    this.#incrementaContatore();
    this.chilometraggio += km;
  }

  #incrementaContatore() {
    this.#contatoreChiamate++;
  }

  mostraContatoreChiamate() {
    return this.#contatoreChiamate;
  }
}


/** 9. Getter e Setter chilometraggio */  

class Automobile {
  constructor() {
    this.chilometraggio = 0;
  }

  get chilometraggioAuto() {
    return this.chilometraggio;
  }

  set chilometraggioAuto(km) {
    if (km >= this.chilometraggio) {
      this.chilometraggio = km;
    }
  }
}


/** 10. Classe Camion */ 

class Camion extends Automobile {
  constructor(marca, modello, anno, caricoMassimo) {
    super(marca, modello, anno);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = 0;
  }

  descrizione() {
    return `${super.descrizione()} - Carico massimo: ${this.caricoMassimo} kg`;
  }

  carica(kg) {
    if (this.caricoAttuale + kg <= this.caricoMassimo) {
      this.caricoAttuale += kg;
    } else {
      console.log("Carico troppo elevato!");
    }
  }
}


/** 11. Verifica Istanza con instanceof */ 

Automobile.verificaIstanza = function (obj, classe) {
  return obj instanceof classe
    ? "È un'istanza corretta."
    : "Non è un'istanza della classe prevista.";
};

const a1 = new Automobile("Fiat", "500", 2020);
const c1 = new Camion("Scania", "R500", 2022, 20000);
console.log(Automobile.verificaIstanza(a1, Automobile)); 
console.log(Automobile.verificaIstanza(c1, Camion));     
