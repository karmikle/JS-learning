function pow(x, n) {
  if (n==1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( pow(2, 3) ); // красивее код и локаничнее

function pow2(x, n) {
  return (n == 1) ? x : ( x * pow2(x, n - 1));
}
console.log( pow2(2, 4) );

function pow3(x, n) { // легче для памяти в случае со степенью
  let rezult = 1;

  for (let i = 0; i < n; i++) {
    rezult *= x;
  }

  return rezult;
}

console.log( pow3(2, 5) );

let company = {
  sales: [{name: 'john', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    sites: [{name: 'pete', salary: 2000}, {name: 'alex', salary: 1800}],
    internals: [{name:'Jack', salary: 1300}]
  }
};

function sumSalaryies(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaryies(subdep);
    }
    return sum;
  }
}

console.log(sumSalaryies(company));