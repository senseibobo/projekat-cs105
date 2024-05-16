const kontaktForma = document.getElementById("koontakt");
const rezultat = document.getElementById("rezultat");
console.log(kontaktForma);

kontaktForma.addEventListener("submit", function (event) {
  event.preventDefault(); // Sprečavanje default submit akcije

  const ime = document.getElementById("ime").value.trim();
  const prezime = document.getElementById("prezime").value.trim();
  const naslov = document.getElementById("naslov").value.trim();
  const poruka = document.getElementById("poruka").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const tipPoruke = document.getElementById("tip_poruke").value;

  let isValid = true;
  let errorMessage = "";

  if (!ime || !/^[A-ZŠĐŽČĆ][a-zšđžčć]+$/.test(ime)) {
    isValid = false;
    errorMessage += "Ime mora biti jedna reč i sadržati samo slova.<br>";
  }
  if (!prezime || !/^[A-ZŠĐŽČĆ][a-zšđžčć]+$/.test(prezime)) {
    isValid = false;
    errorMessage += "Prezime mora biti jedna reč i sadržati samo slova.<br>";
  }
  if (!naslov) {
    isValid = false;
    errorMessage += "Naslov poruke je obavezan.<br>";
  }
  if (!poruka || poruka.length < 10 || poruka.length > 250) {
    isValid = false;
    errorMessage += "Tekst poruke mora imati između 10 i 250 karaktera.<br>";
  }
  if (telefon && !/^[\+]?[0-9]+$/.test(telefon)) {
    isValid = false;
    errorMessage += "Broj telefona može sadržati samo brojeve i znak + na početku.<br>";
  }
  if (!tipPoruke) {
    isValid = false;
    errorMessage += "Izaberite tip poruke.<br>";
  }
  if (!isValid) {
    rezultat.innerHTML = `<p style="color: red;"><b>Greška:</b> ${errorMessage}</p>`;
  } else {
    rezultat.innerHTML = `
    <table style="color:var(--light-text)">
      <tr>
        <th>Ime:</th>
        <td>${ime}</td>
      </tr>
      <tr>
        <th>Prezime:</th>
        <td>${prezime}</td>
      </tr>
      <tr>
        <th>Naslov poruke:</th>
        <td>${naslov}</td>
      </tr>
      <tr>
        <th>Tekst poruke:</th>
        <td>${poruka}</td>
      </tr>
      <tr>
        <th>Broj telefona:</th>
        <td>${telefon ? telefon : "-"}</td> </tr>
      <tr>
        <th>Tip poruke:</th>
        <td>${tipPoruke}</td>
      </tr>
    </table>
    `;
    kontaktForma.remove();
  }
});
