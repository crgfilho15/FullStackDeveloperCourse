function clique() {
  const teste = document.querySelector(".teste2");
  const ul = document.querySelector("ul");

  for (let i = 0; i < 5; i++) {
    let newli = document.createElement("li");
    newli.innerHTML = "novo item ";

    ul.appendChild(newli);
  }
}
