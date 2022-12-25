let weight = document.getElementById("weight");
let height = document.getElementById("height");
let displayIrm = document.getElementById("displayIrm");

function displayIRM() {
  let displayTextIrm = document.getElementById("displayTextIrm");
  if (isNaN(weight.value) || isNaN(height.value))
    displayTextIrm.innerHTML =
      '<p style="color: red ; text-align:center; font-size:1.3em;" > Oup ! <br> Les saisies ne sont pas correctes ! </p>';
  else if (weight.value < 0 || height.value < 0) {
    displayTextIrm.innerHTML =
      '<p style="color: red ; text-align:center; font-size:1.3em;" >Le poids et/ou la taille est inférieur à 0 </p>';
  } else if (weight.value != 0 && height.value != 0) {
    let irm = (weight.value / (height.value * height.value)).toPrecision(2);
    displayTextIrm.innerHTML =
      '<p style="color: green ; text-align:center; font-size:1.3em;" >Votre IMC est : </p>';
    button = document.createElement("button");
    displayTextIrm.appendChild(button);
    button.innerText = irm;
  }
}
