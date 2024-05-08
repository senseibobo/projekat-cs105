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
  t += 0.005 * animationSpeed;
  if (t > 2) return;
  let width = String(200 * (1 - Math.abs(t - 1))) + "%";
  let left = String(50 - 100 * (1 - Math.abs(t - 1))) + "%";
  goat.style["width"] = width;
  goat.style["left"] = left;
  goat.style["top"] = left;
  setTimeout(processGoatAnimation, 5);
}
