var vetor = ["pa", "pao", "copo", "chave", "mesa"];
function temChave() {
  for (var ind = 0; ind < 5; ind++) {
    if (vetor[ind] == "chave") {
      return true;
    }
  }
  return false;
}
