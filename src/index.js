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
  console.log(a, b, c);
}

getText(...args);

//args - оператор spread, массив аргументов функции или значений массива
//spread в функциях удобен когда количество аргументов неизвестно
//с помощью spread можно переносить значения из одного массива в другой
//а также передавать массив в качестве параметров



