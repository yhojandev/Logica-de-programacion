function multiplo(numero: number, divisor: number): boolean {
  return numero % divisor === 0;
}

for (let i = 1; i < 101; i++) {
  if (multiplo(i, 3) && multiplo(i, 5)) {
    console.log("fizzbuzz");
    continue;
  }
  if (multiplo(i, 3)) {
    console.log("fizz");
    continue;
  }
  if (multiplo(i, 5)) {
    console.log("buzz");
    continue;
  }
  console.log(i);
}
