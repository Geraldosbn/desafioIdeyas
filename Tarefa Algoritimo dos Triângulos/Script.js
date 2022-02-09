// Entrada dos dados do triângulo
const a = 15;
const b = 15;
const c = 17;

// Estrutura de condição para verificar se é um triângulo.
if (a + b > c && a + c > b && c + b > a) {
  console.log("É um triângulo.");
  // Estrutura de condição para a verificação do tupo de triângulo.
  if (a == b && a == c) {
    console.log("esse é um triângulo equilátero.");
  } else if (a == b || a == c || b == c) {
    console.log("esse é um triâmgulo isóceles.");
  } else {
    console.log("esse é um triângulo escaleno.");
  }
} else {
  console.log("Não é um triângulo.");
}
