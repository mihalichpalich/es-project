//стрелочные функции

var getTrack = (...args) => {
  //console.log(args);
  return args[0] + ' ' + args[1];
}

//console.log(getTrack("Artist", "Track"));

function API() {
  this.url = 'http://google.com';
}

API.prototype.get = function() {
  return [1,2,3].map(number => {
    //console.log('this', this);
    return number;
  })
}

var api = new API();
api.get();

//у стрелочных функций нет контекста


//const

const PI = 3.14;
//PI = 9.8;

const URLS = {
  google: 'http://google.com',
}

URLS.google = 'http://youtube.com';
//console.log(URLS.google);

//как и let описывается только внутри скобок
//свойства объекта const можно перезаписывать
//имена переменных пишутся с большой буквы
//const обычно не переопределяется


//деструктуризация

function generateObj() {
  return {
    width: 100,
    height: 200,
  }
}

var {width: containerWidth, height: containerHeight} = generateObj();

// var {width, height} = {
//   width: 100,
//   height: 200,
// };

var obj = {
  id: '123',
  attributes: {
  }
}

var {id, attributes: {width = 50, height = 60}} = obj;

//console.log(width, height);

var [first, , , , fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];

//console.log(first, fifth);

function getSizes({width = 50, height = 60}) {
  //console.log(width, height);
}

getSizes({

});

//ключ объекта и сам объект можно сделать локальной переменной
//можно переопределять значения свойств объекта, если они не заданы по умолчанию
//также деструктуризацию можно применять и к массивам и функциям
//если доступ нужен к определенным значениям, остальные можно не указывать


//spread

// const getText = (a,...args) => {
//   //console.log(a, args);
// }

//getText('a', 'b', 'c');

const arr1 = [1,2,3];
const arr2 = [4,5,6];

arr1.push(...arr2);
//console.log(arr1);

const args = ['a', 'b', 'c'];

const getText = (a, b, c) => {
  //console.log(a, b, c);
}

getText(...args);

//args - оператор spread, массив аргументов функции или значений массива
//spread в функциях удобен когда количество аргументов неизвестно
//с помощью spread можно переносить значения из одного массива в другой
//а также передавать массив в качестве параметров


//строки

//конкатенация
const name = 'Alex';
const hello = `Hello ${name}`;

//console.log(hello);

//запись html кода в строку
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
//const message = `This equals to ${100/4}`;

//console.log(message);

const tag = (strings, ...values) => {
  //console.log(strings, values); //["Its ", " and Im ", "", raw: Array(3)] и [15, "sleepy"]
  if (values[0] < 20) {
    values[1] = 'awake';
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

const message = tag`Its ${new Date().getHours()} and Im ${'sleepy'}`;

//console.log(message);


//классы

class SimpleDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  toString() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const today = new SimpleDate(2017, 1, 28);

//console.log(today.toString());

//наследование
class OtherDate extends SimpleDate {
  constructor(year, month, day) {
    super(year, month, day); //обращение к родительскому классу
  }

  static hello() {
    //console.log('hello OtherDate');
  }

  toString() {
    return `${this.day}.${this.month}.${this.year}`;
  }
}

const tomorrow = new OtherDate(2017, 1, 29);
//console.log(tomorrow.toString());

OtherDate.hello();

//класс не вызывается как функция


//promises

const promise = new Promise((resolve, reject) => {
  //throw new Error('Alarm');

  setTimeout(() => {
    if (true) {
      resolve('hello world');
    } else {
      reject();
    }
  }, 2000);
});

// promise.then(
//   data => console.log('success: ', data),
//   error => console.log('error: ', error)
// );
  // .then(
  //   data => console.log('success2: ', data),
  //   error => console.log('error: ', error)
  // )
  //.catch(error => console.log('error: ', error));


//async await

// const fetchProducts = () => Promise.resolve({data: [1,2,3]});

// const getProducts = async () => {
//   console.log('result', await fetchProducts());
// };

const fetchProducts = () => Promise.resolve({data: [1,2,3]});
const fetchAdditional = (products) => Promise.resolve({data: [2,3,4]});

// const getProducts = async () => {
//   // try {
//   //   const products = await fetchProducts();
//   //   console.log('products', products);
//   // } catch(err) {
//   //   console.log('err', err);
//   // };

//   return fetchProducts().then(products => {
//     if (products.data.length) {
//       return fetchAdditional(products.data)
//         .then(additionalData => {
//           return additionalData;
//         })
//     } else {
//       return products.data;
//     }
//   })
// };

const getProducts = async() => {
  const products = await fetchProducts();

  if (!products.data.length) {
    return products.data;
  }

  return await fetchAdditional(products.data);
}

getProducts().then(result => {
  console.log('result', result);
});