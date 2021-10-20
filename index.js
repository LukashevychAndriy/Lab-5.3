const tp = +prompt('Введіть значення параметру tp'); // Запрошуємо ввід параметру t початкового
const tk = +prompt('Введіть значення параметру tk'); // Запрошуємо ввід параметру t кінцевого
const n = +prompt('Введіть значення параметру n'); // Запрошуємо ввід параметру кількості відрізків розбиття інтервалу

const dt = (tk - tp) / n;

console.log(`|\tt\t\t|\tf(t*t) + 2f(2t + 1)\t|`);

for (let t = tp; t <= tk; t += dt) {
  let result = f(t * t) + 2 * f(2 * t + 1);

  console.log(`|\t${t.toFixed(2)}\t|\t\t${result.toFixed(7)}\t\t|`);
}

function f(x) {
  if (Math.abs(x) >= 1) {
    return (Math.sin(x) + 1) / (Math.sin(x) + Math.cos(x));
  } else if (x === 0) {
    return 0;
  } else {
    let a = x;
    let S = a;
    let i = 0;

    do {
      i++;

      let R = (Math.pow(x, 2 * i + 1) / (factorial(2 * i + 1))) / (Math.pow(x, 2 * (i - 1) + 1) / (factorial(2 * (i - 1) + 1)));

      a *= R;
      S += a;

    } while (i < 8);

    return S;
  }
}

function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}
