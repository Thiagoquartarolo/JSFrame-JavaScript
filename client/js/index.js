var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
]

var tBody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  var tr = document.createElement("tr");

  campos.forEach(function (campos) {
    var td = document.createElement("td");
    td.textContent = campos.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  tBody.appendChild(tr);

  campos[0].value = "";
  campos[0].focus();
  campos[1].value = "1";
  campos[2].value = "0";
});
