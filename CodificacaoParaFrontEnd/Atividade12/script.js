function botao1() {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  h1.style.fontSize = "16px";
  p.style.fontSize = "14px";
}

function botao2() {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  h1.style.color = "lightgreen";
  p.style.color = "lightcoral";
}

function botao3() {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  h1.innerHTML += " / Novo texto";
  p.innerHTML += " / Novo texto";
}
