let t = 0;
const animationSpeed = 2.0;
let goat;

function goatAnimation() {
  t = 0;
  goat = document.getElementById("goatanimation");
  goat.style["visibility"] = "visible";
  goat.style["width"] = "0%";
  goat.style["left"] = "50%";
  setTimeout(processGoatAnimation, 5);
}

function processGoatAnimation() {
  let oldT = t;
  t += 0.005 * animationSpeed;
  if (t > 1 && oldT <= 1) {
    window.location.replace("kupikozu.html");
    document.getElementsByName("body")[0].appendChild(goat);
  }
  if (t >= 2) {
    goat.style["width"] = "0";
    goat.style["height"] = "0";
    return;
  }
  let nleft = 50 - 100 * (1 - Math.abs(t - 1));
  let width = String(200 * (1 - Math.abs(t - 1))) + "%";
  let height = String(200 * (1 - Math.abs(t - 1))) + "%";
  let left = String(nleft) + "%";
  goat.style["width"] = width;
  goat.style["height"] = height;
  goat.style["left"] = left;
  setTimeout(processGoatAnimation, 5);
}

function fillGoatList() {
  let goatList = document.getElementById("goatlist");
  let kozee = JSON.parse(localStorage.getItem("koze"));
  for (let goat of kozee) {
    goatList.innerHTML += `
      <div id="${goat.ime}" class="buygoatcard">
        <img src="${goat.slika}" />
        <div>
          <h3>${goat.ime}</h3>
          <div class="goatInfo">
            <ul>
              <li>Boja: ${goat.boja}</li>
              <li>Pol: ${goat.pol}</li>
              <li>Tezina: ${goat.tezina}</li>
              <li>IQ: ${goat.iq}</li>
              <li>Duzina Rogova: ${goat.duzinaRogova}</li>
              <li>Brzina: ${goat.brzina} km/h</li>
            </ul>
            <button onclick="kupiKozu('${goat.ime}')">KUPI<br>${goat.cena}€</button>
          </div>
        </div>
      </div>`;
  }
}

function kupiKozu(ime) {
  console.log(ime);
  document.getElementById(ime).getElementsByClassName("goatInfo")[0].innerHTML =
    "Koza je uspesno kupljena. Stici ce na Vasu adresu uskoro.";
  let kozee = JSON.parse(localStorage.getItem("koze"));
  let i = 0;
  for (let koza of kozee) {
    if (koza.ime == ime) {
      kozee.splice(i, 1);
      console.log("izbrisana koza");
      break;
    }
    i++;
  }
  localStorage.setItem("koze", JSON.stringify(kozee));
}

function submitujKozu() {
  console.log("submitovao sam kozu");
  let koza = {};
  for (let prop of ["ime", "boja", "pol", "tezina", "iq", "duzinaRogova", "brzina", "slika", "cena"]) {
    koza[prop] = document.getElementById(prop).value;
    document.getElementById(prop).value = "";
  }
  dodajKozu(koza);
}

class Koza {
  constructor(ime, boja, pol, tezina, iq, duzinaRogova, brzina, slika, cena) {
    this.ime = ime;
    this.boja = boja;
    this.pol = pol;
    this.tezina = tezina;
    this.iq = iq;
    this.duzinaRogova = duzinaRogova;
    this.brzina = brzina;
    this.slika = slika;
    this.cena = cena;
  }
}

function dodajKozu(koza) {
  let kozeString = localStorage.getItem("koze");
  let kozee;
  if (typeof kozeString == typeof "asdsad") {
    kozee = JSON.parse(kozeString);
  } else {
    kozee = [];
  }
  kozee.push(koza);
  localStorage.setItem("koze", JSON.stringify(kozee));
}

function napraviKoze() {
  let koze = [
    new Koza("Djole", "bela", "muski", 50, 120, 15, 20, "slike/djolegoat.jpg", 350),
    new Koza("Куче", "siva", "muski", 26, 67, 0, 40, "slike/kozakoza.jpg", 3),
  ];

  localStorage.setItem("koze", JSON.stringify(koze));
}

let zaposleni = [];

function napraviHoverZaposlene() {
  zaposleni = document.getElementsByClassName("zaposlen");
  for (let zaposlen of zaposleni) {
    zaposlen.onmouseover = function () {
      for (let z of zaposleni) {
        if (z != zaposlen) {
          z.style["filter"] = "brightness(50%)";
        }
      }
    };
    zaposlen.onmouseout = function () {
      for (let z of zaposleni) {
        z.style["filter"] = "brightness(100%)";
      }
    };
  }
}
