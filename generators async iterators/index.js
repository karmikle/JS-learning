let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if( this.current <= this. last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true};
                }
            }
        };
    }
};

for(let value of range) {
    console.log(value);
};

// Чтобы сделать объект итерируемым асинхронно:
// Используется Symbol.asyncIterator вместо Symbol.iterator.
// next() должен возвращать промис.
// Чтобы перебрать такой объект, используется цикл for await (let item of iterable).
// Давайте создадим итерируемый объект range, как и в предыдущем примере, 
// но теперь он будет возвращать значения асинхронно, по одному в секунду:

let range2 = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {

                await new Promise(resolve => setTimeout(resolve, 1000));

                if( this.current <= this. last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true};
                }
            }
        };
    }
};

(async () => {

    for await (let value of range2) { // (4)
      console.log(value); // 1,2,3,4,5
    }
  
})()

// Как видим, структура похожа на обычные итераторы:
// Чтобы сделать объект асинхронно итерируемым, он должен иметь метод Symbol.asyncIterator (1).
// Этот метод должен возвращать объект с методом next(), который в свою очередь возвращает промис (2).
// Метод next() не обязательно должен быть async, он может быть обычным методом, 
// возвращающим промис, но async позволяет использовать await, так что это удобно. 
// Здесь мы просто делаем паузу на одну секунду (3).
// Для итерации мы используем for await (let value of range) (4), 
// добавляя «await» после «for». Он вызовет range[Symbol.asyncIterator]() один раз, 
// а затем его метод next() для получения значений.

//Асинхронные генераторы

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
}
  
for(let value of generateSequence(10, 15)) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
}

// В обычных генераторах мы не можем использовать await. 
// Все значения должны поступать синхронно: в for..of нет места для задержки, 
// это синхронная конструкция.
// Но что если нам нужно использовать await в теле генератора? 
// Для выполнения сетевых запросов, например.
// Нет проблем, просто добавьте в начале async, например, вот так:

async function* generateSequence2(start, end) {
    for (let i = start; i <= end; i++) {

        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }
}

(async () => {
    let generator2 = generateSequence2(21, 25);
    for await (let value of generator2) {
        console.log(value);
    }
})();

// Асинхронно перебираемые объекты


// Давайте вспомним пример из главы Генераторы:

let range3 = {
  from: 31,
  to: 35,

  *[Symbol.iterator]() { // сокращение для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

for(let value of range3) {
  console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
}

// Если хотим добавить асинхронные действия в генератор, 
// нужно заменить Symbol.iterator на асинхронный Symbol.asyncIterator:

let range4 = {
    from: 41,
    to: 45,
  
    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {

        await new Promise(resolve => setTimeout( resolve, 1000));

        yield value;
      }
    }
  };
  
(async () => {
    for await (let value of range4) {
        console.log(value)
    }
})();