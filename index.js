const xp = +prompt('Введіть значення параметру хp'); // Запрошуємо ввід параметру x початкового
const xk = +prompt('Введіть значення параметру хk'); // Запрошуємо ввід параметру x кінцевого
const dx = +prompt('Введіть значення параметру dx'); // Запрошуємо ввід параметру кроку
const eps = +prompt('Введіть значення параметру eps'); // Запрошуємо ввід параметру точності

console.log('|\tx\t\t|\tarctg(x)\t\t|\tS\t\t\t\t|\tn\t|');

for (let x = xp; x <= xk && x < -1; x += dx) {
  let result = -Math.PI / 2 + sum(x, eps);

  console.log(`|\t${x.toFixed(2)}\t|\t${Math.atan(x).toFixed(10)}\t|\t${result.toFixed(10)}\t|\t${getAdditionsAmount(x, eps)}\t|`);
}

function sum(x, eps) {
  let a = -1 / x;
  let S = a;
  let n = 0;

  do {
    n++;

    a = getAddition(a, x, n);

    S += a;
  } while (Math.abs(a) >= eps);

  return S;
}

function getAdditionsAmount(x, eps) {
  let a = -1 / x;
  let n = 0;

  do {
    n++;

    a = getAddition(a, x, n);
  } while (Math.abs(a) >= eps);

  return n;
}

function getAddition(prevA, x, n) {
  let R = (1 - 2 * n) / (2 * n * x * x + x * x);
  return prevA * R;
}
